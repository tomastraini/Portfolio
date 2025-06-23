import os
import requests
from dotenv import load_dotenv
from pathlib import Path

from app.models.schemas import PromptRequest

dotenv_path = Path('app/.env')

load_dotenv(dotenv_path=dotenv_path)

API_KEY = os.getenv("OPENROUTER_API_KEY")

def call_openrouter(req: PromptRequest):
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "meta-llama/llama-3.1-8b-instruct",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": req.prompt}
        ],
    }

    response = requests.post(url, headers=headers, json=payload)
    response_json = response.json()
    content = response_json["choices"][0]["message"]["content"]

    return {
        "prompt": "Hello, test connection!",
        "analysis": content
    }

