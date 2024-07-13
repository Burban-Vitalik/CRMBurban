import { Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../../validation/schemas";
import { login } from "../../api/authApi";

interface ILoginFormProps {}

export const LoginForm: React.FC<ILoginFormProps> = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    await login(values)
      .then((_) => navigate("/profile"))
      .finally(() => setSubmitting(false));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
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
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
