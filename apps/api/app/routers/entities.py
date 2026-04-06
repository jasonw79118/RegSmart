from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_entities() -> list[dict[str, str]]:
    return [
        {"id": "ENT-001", "name": "RegSmart National Bank", "type": "Lead Bank"},
        {"id": "ENT-002", "name": "RegSmart Mortgage Services", "type": "Subsidiary"},
        {"id": "ENT-003", "name": "RegSmart Payments Operations", "type": "Business Unit"},
    ]
