from fastapi import FastAPI, Depends, Form, Request, HTTPException, status, Response, Cookie
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from sqlalchemy import func
from sqlalchemy.orm import Session
import models
from database import engine, get_db
import os
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional
from contextlib import asynccontextmanager

# Auth Configuration
SECRET_KEY = "your-secret-key-change-this-in-production"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 # 24 hours

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

# Static files path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Auth Helpers
def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(request: Request, db: Session = Depends(get_db)):
    token = request.cookies.get("access_token")
    if not token:
        return None
    try: 
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            return None
        user = db.query(models.User).filter(models.User.email == email).first()
        return user
    except JWTError:
        return None

def render_html(filename: str):
    path = os.path.join(STATIC_DIR, filename)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    return f"<h1>{filename} not found!</h1>"

course_metadata = {
    "Python Mastery Bootcamp": {
        "students": "1.4M",
        "exercises": 220,
        "hours": 68,
        "skills": ["Python Fundamentals", "Automation", "Web APIs", "Data Analysis"]
    },
    "Graphics & UI/UX Design": {
        "students": "820k",
        "exercises": 95,
        "hours": 44,
        "skills": ["UX Research", "UI Prototyping", "Visual Design", "Figma"]
    },
    "Web Development": {
        "students": "1.1M",
        "exercises": 180,
        "hours": 76,
        "skills": ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    "Kotlin Android App Development": {
        "students": "560k",
        "exercises": 120,
        "hours": 50,
        "skills": ["Kotlin", "Android UI", "Jetpack Compose", "Mobile Architecture"]
    },
    "Microsoft Office Productivity": {
        "students": "720k",
        "exercises": 80,
        "hours": 32,
        "skills": ["Word", "Excel", "PowerPoint", "Business Productivity"]
    },
    "Networking Fundamentals": {
        "students": "430k",
        "exercises": 105,
        "hours": 38,
        "skills": ["Networking Basics", "Routing & Switching", "Wireless", "Security"]
    }
}

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    try:
        models.Base.metadata.create_all(bind=engine)
        db = next(get_db())
        # Seed initial course catalog and keep only the requested six courses
        initial_courses = [
            {
                "title": "Python Mastery Bootcamp",
                "description": "Master Python for automation, web APIs, data analysis, and production-ready applications with guided projects.",
                "price": 49.99,
                "category": "Python",
                "image_url": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500&auto=format&fit=crop",
                "instructor": "Nelson Omwenga",
                "rating": 4.9
            },
            {
                "title": "Graphics & UI/UX Design",
                "description": "Design polished interfaces and brand experiences using Figma, Illustrator, Photoshop, and modern UX principles.",
                "price": 39.99,
                "category": "UI/UX Design",
                "image_url": "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500&auto=format&fit=crop",
                "instructor": "Isaac Mwangi",
                "rating": 4.7
            },
            {
                "title": "Web Development",
                "description": "Build responsive websites and full-stack apps using HTML, CSS, JavaScript, React, Node.js, and SQL databases.",
                "price": 59.99,
                "category": "Web Development",
                "image_url": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop",
                "instructor": "Samuel Maveke",
                "rating": 4.8
            },
            {
                "title": "Kotlin Android App Development",
                "description": "Create native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns for real-world mobile development.",
                "price": 54.99,
                "category": "Mobile App Development",
                "image_url": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500&auto=format&fit=crop",
                "instructor": "James Njuguna",
                "rating": 4.9
            },
            {
                "title": "Microsoft Office Productivity",
                "description": "Master Microsoft Word, Excel, PowerPoint, and productivity workflows for business and office success.",
                "price": 44.99,
                "category": "Productivity",
                "image_url": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=500&auto=format&fit=crop",
                "instructor": "Harriet Mukiri",
                "rating": 4.8
            },
            {
                "title": "Networking Fundamentals",
                "description": "Learn networking basics, routing, switching, wireless, and secure network administration for IT roles.",
                "price": 64.99,
                "category": "Networking",
                "image_url": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop",
                "instructor": "Daniel Kitheka",
                "rating": 4.9
            }
        ]

        legacy_updates = {
            "Mobile App Dev (Flutter & Swift)": "Kotlin Android App Development",
            "Android Development": "Kotlin Android App Development",
            "Full-Stack Web Dev": "Web Development",
            "Cybersecurity Analyst Professional": "Microsoft Office Productivity",
            "Data Science & AI Bootcamp": "Networking Fundamentals"
        }

        for course_data in initial_courses:
            existing = db.query(models.Course).filter(models.Course.title == course_data["title"]).first()
            if existing:
                existing.description = course_data["description"]
                existing.price = course_data["price"]
                existing.category = course_data["category"]
                existing.image_url = course_data["image_url"]
                existing.instructor = course_data["instructor"]
                existing.rating = course_data["rating"]
            else:
                db.add(models.Course(**course_data))

        # Update legacy course titles if older records exist
        for old_title, new_title in legacy_updates.items():
            old_course = db.query(models.Course).filter(models.Course.title == old_title).first()
            if old_course:
                updated_course = next((c for c in initial_courses if c["title"] == new_title), None)
                old_course.title = new_title
                if updated_course:
                    old_course.description = updated_course["description"]
                    old_course.price = updated_course["price"]
                    old_course.category = updated_course["category"]
                    old_course.image_url = updated_course["image_url"]
                    old_course.instructor = updated_course["instructor"]
                    old_course.rating = updated_course["rating"]

        allowed_titles = {course["title"] for course in initial_courses}
        extras = db.query(models.Course).filter(~models.Course.title.in_(allowed_titles)).all()
        for extra in extras:
            db.delete(extra)

        db.commit()

        # Remove duplicate course entries by title, keeping the oldest record
        duplicate_titles = db.query(models.Course.title).group_by(models.Course.title).having(func.count(models.Course.id) > 1).all()
        for (title,) in duplicate_titles:
            duplicates = db.query(models.Course).filter(models.Course.title == title).order_by(models.Course.id).all()
            for duplicate in duplicates[1:]:
                db.delete(duplicate)
        db.commit()

        duplicate_enrollments = db.query(models.Enrollment.user_id).group_by(models.Enrollment.user_id).having(func.count(models.Enrollment.id) > 1).all()
        for (user_id,) in duplicate_enrollments:
            duplicates = db.query(models.Enrollment).filter(models.Enrollment.user_id == user_id).order_by(models.Enrollment.id).all()
            for duplicate in duplicates[1:]:
                db.delete(duplicate)
        db.commit()
    except Exception as e:
        print(f"Startup error: {e}")
    yield
    # Shutdown

app = FastAPI(title="Portfolio & Academy", lifespan=lifespan)

# Mount static files
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.middleware("http")
async def no_cache_middleware(request: Request, call_next):
    response = await call_next(request)
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    return response

# Auth Helpers
def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(request: Request, db: Session = Depends(get_db)):
    token = request.cookies.get("access_token")
    if not token:
        return None
    try: 
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            return None
        user = db.query(models.User).filter(models.User.email == email).first()
        return user
    except JWTError:
        return None

def render_html(filename: str):
    path = os.path.join(STATIC_DIR, filename)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    return f"<h1>{filename} not found!</h1>"

@app.get("/", response_class=HTMLResponse)
async def read_root(user: models.User = Depends(get_current_user)):
    return render_html("index.html")

# Auth Routes
@app.get("/signup", response_class=HTMLResponse)
async def signup_page():
    return render_html("signup.html")

@app.post("/signup")
async def signup(
    name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    # Check if user exists
    existing_user = db.query(models.User).filter(models.User.email == email).first()
    if existing_user:
        return RedirectResponse(url="/signup?error=Email already registered", status_code=303)
    
    new_user = models.User(
        name=name,
        email=email,
        hashed_password=get_password_hash(password)
    )
    db.add(new_user)
    db.commit()
    return RedirectResponse(url="/login?success=Account created! Please login.", status_code=303)

@app.get("/login", response_class=HTMLResponse)
async def login_page():
    return render_html("login.html")

@app.post("/login")
async def login(
    response: Response,
    email: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        return RedirectResponse(url="/login?error=Invalid credentials", status_code=303)
    
    access_token = create_access_token(data={"sub": user.email})
    response = RedirectResponse(url="/courses", status_code=303)
    response.set_cookie(key="access_token", value=access_token, httponly=True)
    return response

@app.get("/logout")
async def logout(response: Response):
    response = RedirectResponse(url="/login", status_code=303)
    response.delete_cookie("access_token")
    return response

@app.get("/courses")
async def courses_page():
    content = render_html("courses.html")
    return Response(
        content=content,
        media_type="text/html",
        headers={
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache",
            "Expires": "0"
        }
    )

@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard_page(user: models.User = Depends(get_current_user)):
    if not user:
        return RedirectResponse(url="/login?error=Please login first", status_code=303)
    return render_html("dashboard.html")

@app.get("/about", response_class=HTMLResponse)
async def about_page():
    return render_html("about.html")

@app.get("/contact", response_class=HTMLResponse)
async def contact_page():
    return render_html("contact.html")

@app.get("/privacy", response_class=HTMLResponse)
async def privacy_page():
    return render_html("privacy.html")

@app.get("/terms", response_class=HTMLResponse)
async def terms_page():
    return render_html("terms.html")

@app.get("/course-details", response_class=HTMLResponse)
@app.get("/course-details/", response_class=HTMLResponse)
async def course_details_page():
    return render_html("course-details.html")

@app.get("/api/courses")
async def get_courses(db: Session = Depends(get_db), user: Optional[models.User] = Depends(get_current_user)):
    allowed_titles = {
        "Python Mastery Bootcamp",
        "Graphics & UI/UX Design",
        "Web Development",
        "Kotlin Android App Development",
        "Microsoft Office Productivity",
        "Networking Fundamentals"
    }
    courses = db.query(models.Course).filter(models.Course.title.in_(allowed_titles)).all()
    # Check what user is enrolled in
    enrolled_ids = []
    if user:
        enrolled_ids = [e.course_id for e in user.enrollments]
    
    result = []
    for c in courses:
        metadata = course_metadata.get(c.title, {})
        result.append({
            "id": c.id,
            "title": c.title,
            "description": c.description,
            "price": c.price,
            "category": c.category,
            "image_url": c.image_url,
            "instructor": c.instructor,
            "rating": c.rating,
            "students": metadata.get("students", str(len(c.enrollments))),
            "exercises": metadata.get("exercises", 80),
            "hours": metadata.get("hours", 24),
            "skills": metadata.get("skills", [c.category]),
            "is_enrolled": c.id in enrolled_ids
        })
    return JSONResponse(
        content=result,
        headers={
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache"
        }
    )

@app.post("/api/enroll/{course_id}")
async def enroll(course_id: int, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    if not user:
        raise HTTPException(status_code=401)
    
    # Check if user is already enrolled in ANY course
    user_enrollments_count = db.query(models.Enrollment).filter(
        models.Enrollment.user_id == user.id
    ).count()
    
    if user_enrollments_count >= 1:
        # Check if they are trying to enroll in the same course again
        existing = db.query(models.Enrollment).filter(
            models.Enrollment.user_id == user.id,
            models.Enrollment.course_id == course_id
        ).first()
        if existing:
            return {"status": "already_enrolled"}
        return {"status": "limit_reached"}
    
    new_enrollment = models.Enrollment(user_id=user.id, course_id=course_id)
    db.add(new_enrollment)
    db.commit()
    return {"status": "success"}

@app.get("/api/my-courses")
async def get_my_courses(db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    if not user:
        raise HTTPException(status_code=401)
    
    # Fetch courses user is enrolled in
    enrolled_courses = db.query(models.Course).join(models.Enrollment).filter(models.Enrollment.user_id == user.id).all()
    
    result = []
    for c in enrolled_courses:
        result.append({
            "id": c.id,
            "title": c.title,
            "description": c.description,
            "price": c.price,
            "category": c.category,
            "image_url": c.image_url,
            "instructor": c.instructor,
            "rating": c.rating
        })
    return result

@app.get("/api/me")
async def get_me(user: models.User = Depends(get_current_user)):
    if not user:
        return {"logged_in": False}
    return {"logged_in": True, "name": user.name, "email": user.email}

# Inquiries
@app.post("/submit_inquiry")
async def submit_inquiry(
    name: str = Form(...),
    contact: str = Form(...),
    message: str = Form(...),
    db: Session = Depends(get_db)
):
    new_inquiry = models.Inquiry(name=name, contact=contact, message=message)
    db.add(new_inquiry)
    db.commit()
    return RedirectResponse(url="/?success=true", status_code=303)
