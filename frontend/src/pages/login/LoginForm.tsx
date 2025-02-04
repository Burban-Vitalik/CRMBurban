import { Formik, Form } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../../validation/schemas";
import { login } from "../../api/authApi";
import CustomTextField from "../../components/custom/CustomTextField";
import { CustomButton } from "../../components/custom/CustomButton";

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

    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomTextField name="email" label="Email" margin="normal" />
          <CustomTextField name="password" label="Password" margin="normal" />

          <CustomButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            label="Login"
          />
        </Form>
      )}
    </Formik>
  );
};
