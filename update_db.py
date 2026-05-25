import sqlite3
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import models
from database import engine

Session = sessionmaker(bind=engine)
db = Session()

courses = db.query(models.Course).filter(models.Course.category == 'Computer Packages').all()
for c in courses:
    c.image_url = '/static/images/computer_packages.png'
    print(f"Updated {c.title}")

db.commit()
print("Done")
