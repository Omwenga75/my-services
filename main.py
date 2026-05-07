from fastapi import FastAPI, Depends, Form, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, RedirectResponse
from sqlalchemy.orm import Session
import models
from database import engine, get_db
import os

app = FastAPI(title="Portfolio Services")

# Static files path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Mount static files
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# Create DB tables
@app.on_event("startup")
def on_startup():
    try:
        models.Base.metadata.create_all(bind=engine)
    except Exception as e:
        print(f"DB Startup Note: {e}")

@app.get("/", response_class=HTMLResponse)
async def read_root():
    index_path = os.path.join(STATIC_DIR, "index.html")
    if os.path.exists(index_path):
        with open(index_path, "r", encoding="utf-8") as f:
            return f.read()
    return "<h1>QuickLearn: static/index.html not found!</h1>"

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
    # Redirect back to index with a success anchor or parameter
    return RedirectResponse(url="/?success=true", status_code=303)

@app.get("/messages", response_class=HTMLResponse)
async def view_messages(db: Session = Depends(get_db)):
    inquiries = db.query(models.Inquiry).order_by(models.Inquiry.id.desc()).all()
    
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Messages | QuickLearn</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary-dark: #0B1B3D;
            --primary-light: #00A8FF;
            --bg-light: #F4F7FC;
            --white: #FFFFFF;
            --text-main: #333333;
            --text-muted: #666666;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Outfit', sans-serif; }
        
        body { background: var(--bg-light); color: var(--text-main); line-height: 1.6; }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            background: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .logo { font-size: 1.5rem; font-weight: 800; color: var(--primary-dark); text-decoration: none; }
        .logo span { color: var(--primary-light); }
        
        .nav-links a {
            text-decoration: none;
            color: var(--primary-dark);
            font-weight: 600;
            margin-left: 1.5rem;
            transition: color 0.3s;
        }
        .nav-links a:hover,
        .nav-links a.active { color: var(--primary-light); }
        
        .container { max-width: 900px; margin: 3rem auto; padding: 0 1.5rem; }
        
        .header-area { margin-bottom: 2.5rem; border-bottom: 2px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
        .header-area h1 { font-size: 2.2rem; color: var(--primary-dark); font-weight: 800; }
        .header-area p { color: var(--text-muted); font-size: 1.1rem; }
        
        .message-grid { display: grid; gap: 1.5rem; }
        
        .message-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
        }
        .message-card:hover { transform: translateY(-5px); }
        
        .message-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
        .sender-info h3 { font-size: 1.3rem; color: var(--primary-dark); margin-bottom: 0.2rem; }
        .sender-info .contact-link { 
            color: var(--primary-light); 
            text-decoration: none; 
            font-weight: 600; 
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .date-tag {
            font-size: 0.8rem;
            color: var(--text-muted);
            background: rgba(0,0,0,0.04);
            padding: 0.4rem 0.8rem;
            border-radius: 50px;
        }
        
        .message-body {
            background: #F8FAFC;
            padding: 1.2rem;
            border-radius: 12px;
            color: #444;
            font-size: 1rem;
            border-left: 4px solid var(--primary-light);
        }
        
        .empty-state {
            text-align: center;
            padding: 5rem 2rem;
            background: var(--white);
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }
        .empty-state i { font-size: 4rem; color: #E2E8F0; margin-bottom: 1.5rem; }
        .empty-state h2 { color: var(--primary-dark); margin-bottom: 0.5rem; }
        .empty-state p { color: var(--text-muted); }
        
        @media (max-width: 600px) {
            .navbar { padding: 1rem; }
            .header-area h1 { font-size: 1.8rem; }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="/" class="logo">Quick<span>Learn</span></a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#contact">Contact</a>
            <a href="/messages" class="active">Messages</a>
        </div>
    </nav>
    
    <div class="container">
        <div class="header-area">
            <h1>Client Messages</h1>
            <p>Recent inquiries and project requests</p>
        </div>
        
        <div class="message-grid">
"""
    
    if not inquiries:
        html_content += """
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h2>No messages yet</h2>
                <p>When clients contact you, their messages will appear here.</p>
            </div>
        """
    else:
        for msg in inquiries:
            created_at = msg.created_at.strftime("%b %d, %Y • %I:%M %p") if hasattr(msg, 'created_at') and msg.created_at else "Recently"
            html_content += f"""
            <div class="message-card">
                <div class="message-header">
                    <div class="sender-info">
                        <h3>{msg.name}</h3>
                        <a href="mailto:{msg.contact}" class="contact-link">
                            <i class="fas fa-envelope-open"></i> {msg.contact}
                        </a>
                    </div>
                    <span class="date-tag">{created_at}</span>
                </div>
                <div class="message-body">
                    {msg.message}
                </div>
            </div>
            """
        
    html_content += """
        </div>
    </div>
</body>
</html>"""
    return html_content
