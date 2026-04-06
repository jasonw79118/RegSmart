from fastapi import APIRouter

router = APIRouter()


@router.get("/providers")
def auth_providers() -> dict[str, list[str]]:
    return {"providers": ["local", "sso-placeholder"]}
