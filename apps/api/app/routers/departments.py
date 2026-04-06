from fastapi import APIRouter

router = APIRouter()


@router.get("")
def list_departments() -> list[dict[str, str]]:
    return [
        {"id": "DEP-001", "name": "BSA / AML", "entity": "RegSmart National Bank"},
        {"id": "DEP-002", "name": "Consumer Compliance", "entity": "RegSmart National Bank"},
        {"id": "DEP-003", "name": "Third-Party Risk", "entity": "RegSmart Mortgage Services"},
    ]
