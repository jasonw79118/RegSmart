from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_workflows() -> list[dict[str, str]]:
    return [
        {"id": "WF-101", "name": "Critical issue escalation", "status": "Active"},
        {"id": "WF-102", "name": "Examiner source visibility", "status": "Active"},
        {"id": "WF-103", "name": "Overdue remediation escalation", "status": "Draft"},
    ]
