import { Button, TextField } from "@mui/material";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerValidationSchema } from "../../validation/schemas";

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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registerValidationSchema}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Field
            name="name"
            as={TextField}
            label="Name"
            fullWidth
            margin="normal"
            helperText={
              touched.name && errors.name && <ErrorMessage name="name" />
            }
            error={touched.name && !!errors.name}
          />
          <Field
            name="email"
            as={TextField}
            label="Email"
            fullWidth
            margin="normal"
            helperText={
              touched.email && errors.email && <ErrorMessage name="email" />
            }
            error={touched.email && !!errors.email}
          />
          <Field
            name="password"
            as={TextField}
            type="password"
            label="Password"
            fullWidth
            margin="normal"
            helperText={
              touched.password &&
              errors.password && <ErrorMessage name="password" />
            }
            error={touched.password && !!errors.password}
          />
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
