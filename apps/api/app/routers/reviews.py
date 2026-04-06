from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_reviews() -> list[dict[str, str]]:
    return [
        {"id": "REV-2001", "title": "Deposit Operations Review", "status": "In Progress"},
        {"id": "REV-2002", "title": "UDAAP Monitoring Review", "status": "Planning"},
    ]
