import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { registerValidationSchema } from "../../validation/schemas";
import { register } from "../../api/authApi";
import CustomTextField from "../../components/custom/CustomTextField";
import { CustomButton } from "../../components/custom/CustomButton";

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
    await register(values)
      .then(() => navigate("/login"))
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registerValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomTextField name="name" label="Name" margin="normal" />
          <CustomTextField name="email" label="Email" margin="normal" />
          <CustomTextField name="password" label="Password" margin="normal" />

          <CustomButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            label="Register"
          />
        </Form>
      )}
    </Formik>
  );
};
