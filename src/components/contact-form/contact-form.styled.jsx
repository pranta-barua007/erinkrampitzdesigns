import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const ContactFormContainer = ({ children }) => (
  <Container
    maxWidth="md"
    justify="center"
    align="center"
    sx={{ padding: { md: "2rem 0", xs: "2rem 2rem" } }}
  >
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {children}
    </Box>
  </Container>
);

export const FormField = ({ name, label, ...otherProps }) => (
  <TextField
    name={name}
    id="outlined-multiline-static"
    label={label}
    fullWidth
    {...otherProps}
  />
);

export const FormSubmitButton = ({ children }) => (
  <Button
    type="submit"
    size="medium"
    endIcon={<SendIcon />}
    align="right"
    sx={{
      maxWidth: { md: "230px", xs: "100%" },
      fontWeight: "bolder",
      backgroundColor: "#000",
      borderColor: "#000",
      padding: "0.6rem 0",
      color: "#fff",
      "&:hover": {
        borderColor: "#000",
        background: "#000000",
        color: "#ddd",
      },
    }}
  >
    {children}
  </Button>
);
