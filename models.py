from sqlalchemy import Column, Integer, String, Text, DateTime
from database import Base
import datetime

class Inquiry(Base):
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    contact = Column(String, index=True) # e.g. Phone or Email
    message = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
