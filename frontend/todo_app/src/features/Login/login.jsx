import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { login } from "@/api";
import ToastMessage from "@/components/ToastMessage";

import { useNavigate } from "react-router-dom";

import {
  TitleText,
  CardContainer,
  FooterText,
  FormContainer,
  FieldContainer,
} from "./styled";

export default function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await login(email, password);
    if (response.access_token) {
      setEmail("");
      setPassword("");
      console.log("res", response);
      localStorage.setItem("access_token", response.access_token);
      navigate("todos");
    } else {
      setToastMessage("Email or password is incorrect");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleLogin} className="form">
        <CardContainer>
          <FieldContainer>
            <TitleText>Login</TitleText>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Please enter email"
              required={true}
              type="email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Please enter passowrd"
              required={true}
              type="password"
            />
            <Button variant="contained" type="submit">
              Sign In
            </Button>
            <FooterText>
              Don&apos;t have an account? &nbsp; <a href="/sign-up">Sign Up</a>
            </FooterText>
          </FieldContainer>
        </CardContainer>
      </form>
      <ToastMessage
        open={!!toastMessage}
        message={toastMessage}
        handleClose={() => setToastMessage("")}
      />
    </FormContainer>
  );
}
