import React from "react";
import { RegisterForm } from "./RegisterForm";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IRegisterProps {}

export const Register: React.FC<IRegisterProps> = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <RegisterForm />
        </Box>
        <Box sx={{ marginTop: 2, textAlign: "center" }}>
          <Typography variant="body2">
            Already have an account?
            <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
