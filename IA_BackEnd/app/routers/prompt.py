from fastapi import APIRouter
from app.models.schemas import PromptRequest, PromptResponse
from app.services.openrouter_service import call_openrouter

router = APIRouter()

@router.post("/analyze", response_model=PromptResponse)
def analyze_prompt_endpoint(req: PromptRequest):
    result = call_openrouter(req)
    return result
