import React from "react";
import { LoginForm } from "./LoginForm";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ILoginProps {}

export const Login: React.FC<ILoginProps> = () => {
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 3, marginTop: 8, textAlign: "center" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <LoginForm />
        </Box>
        <Box sx={{ marginTop: 2, textAlign: "center" }}>
          <Typography variant="body2">
            Don't have an account?
            <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
