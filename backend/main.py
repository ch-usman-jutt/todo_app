from typing import List
from fastapi import FastAPI
from models import Todo
from database import todos_detail
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/list", response_model=List[Todo])
def todos():
    return todos_detail
