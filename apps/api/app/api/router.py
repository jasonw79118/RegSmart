from fastapi import APIRouter
from app.routers import auth, health, issues, reviews, users

api_router = APIRouter()
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(issues.router, prefix="/issues", tags=["issues"])
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
