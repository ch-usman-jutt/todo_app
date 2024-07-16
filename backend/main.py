from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}/{item_name}")
def read_item(item_id: int, item_name: str):
    return {"item_id": item_id, "name": item_name}
