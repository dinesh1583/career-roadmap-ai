from fastapi import APIRouter
from backend.database import users_collection
import bcrypt
from jose import jwt

router = APIRouter()

SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"


# ✅ REGISTER
@router.post("/register")
def register(user: dict):

    existing = users_collection.find_one({"email": user["email"]})
    if existing:
        return {"message": "User already exists"}

    hashed_password = bcrypt.hashpw(user["password"].encode('utf-8'), bcrypt.gensalt())

    user["password"] = hashed_password

    users_collection.insert_one(user)

    return {"message": "User registered successfully"}


# ✅ LOGIN
@router.post("/login")
def login(user: dict):

    db_user = users_collection.find_one({"email": user["email"]})

    if not db_user:
        return {"message": "Invalid credentials"}

    if not bcrypt.checkpw(user["password"].encode('utf-8'), db_user["password"]):
        return {"message": "Invalid credentials"}

    token = jwt.encode({"email": user["email"]}, SECRET_KEY, algorithm=ALGORITHM)

    return {
        "message": "Login successful",
        "token": token
    }