from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_users() -> list[dict[str, str]]:
    return [
        {"id": "USR-1", "name": "Institution Admin", "role": "Institution Admin"},
        {"id": "USR-2", "name": "Audit Lead", "role": "Audit Admin"},
    ]
