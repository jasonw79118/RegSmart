from fastapi import APIRouter
from app.routers import auth, departments, entities, health, issues, reviews, users, workflows

api_router = APIRouter()
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(entities.router, prefix="/entities", tags=["entities"])
api_router.include_router(departments.router, prefix="/departments", tags=["departments"])
api_router.include_router(issues.router, prefix="/issues", tags=["issues"])
api_router.include_router(reviews.router, prefix="/reviews", tags=["reviews"])
api_router.include_router(workflows.router, prefix="/workflows", tags=["workflows"])
