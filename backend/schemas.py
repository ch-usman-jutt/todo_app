from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str


class User(BaseModel):
    id: int
    email: EmailStr
    is_active: bool

    class Config:
        orm_mode = True

class SigninResponse(BaseModel):
    access_token: str
    token_type: str

    class Config:
        orm_mode = True
