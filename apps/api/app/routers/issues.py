from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_issues() -> list[dict[str, str]]:
    return [
        {"id": "ISS-1001", "title": "CTR process timing gap", "status": "Assigned"},
        {"id": "ISS-1002", "title": "Complaint escalation control weakness", "status": "Validation Review"},
    ]
