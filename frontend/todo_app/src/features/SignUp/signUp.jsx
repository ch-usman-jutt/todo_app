import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ToastMessage from "@/components/ToastMessage";

import { useNavigate } from "react-router-dom";

import { signUp } from "@/api";

import {
  TitleText,
  CardContainer,
  FooterText,
  FormContainer,
  FieldContainer,
} from "./styled";

export default function SignUp() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await signUp(email, password);
    if (response.ok) {
      setEmail("");
      setPassword("");
      navigate("login");
    } else {
      setToastMessage("Email Already exists");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSignUp} className="form">
        <CardContainer>
          <FieldContainer>
            <TitleText>Sign Up</TitleText>
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
              required={true}
              placeholder="Please enter password"
              type="password"
            />
            <Button variant="contained" type="submit">
              Sign up
            </Button>
            <FooterText>
              Already have an account? &nbsp; <a href="/login">Sign In</a>
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
