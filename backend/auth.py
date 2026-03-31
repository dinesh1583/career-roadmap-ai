from fastapi import APIRouter
from backend.database import users_collection

router = APIRouter()

@router.post("/register")
def register(user: dict):
    if users_collection.find_one({"email": user["email"]}):
        return {"message": "User already exists"}

    users_collection.insert_one(user)
    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: dict):
    db_user = users_collection.find_one({"email": user["email"]})

    if not db_user or db_user["password"] != user["password"]:
        return {"message": "Invalid credentials"}

    return {"message": "Login successful"}
@router.get("/users")
def get_users():
    users = list(users_collection.find({}, {"_id": 0}))
    return users