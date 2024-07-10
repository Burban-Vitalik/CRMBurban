import { Button, TextField } from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IRegisterFormProps {}

export const RegisterForm: React.FC<IRegisterFormProps> = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    try {
      const response = await axios.post("/register", values);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Name"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="name" component="div" />
          <Field
            name="email"
            as={TextField}
            label="Email"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            name="password"
            as={TextField}
            type="password"
            label="Password"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="password" component="div" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
