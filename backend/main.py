from typing import List
from fastapi import FastAPI
from models import Todo
from database import todos_detail

app = FastAPI()

@app.get("/list", response_model=List[Todo])
def todos():
    return todos_detail
