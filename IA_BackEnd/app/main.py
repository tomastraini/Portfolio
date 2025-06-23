from fastapi import FastAPI
import app.routers.prompt as prompt

app = FastAPI(
    title="PromptSmith Backend",
    version="0.1.0"
)

app.include_router(prompt.router, prefix="/api")
