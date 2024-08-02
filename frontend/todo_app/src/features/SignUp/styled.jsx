import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

export const FormContainer = styled(Box)({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",

  ".form": {
    width: "40%",
  },
});

export const FieldContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const CardContainer = styled(Card)({
  padding: "18px",
});

export const TitleText = styled(Typography)({
  fontSize: "22px",
  fontWeight: "800",
});

export const FooterText = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: "600",
});
