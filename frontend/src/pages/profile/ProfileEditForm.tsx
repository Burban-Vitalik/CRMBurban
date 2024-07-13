import React, { useContext } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { UserContext } from "../../context/userContext";
import { updateUserProfile } from "../../api/profileApi";

interface IProfileEditFormProps {}

const ProfileEditForm: React.FC<IProfileEditFormProps> = () => {
  const { user }: any = useContext(UserContext);

  console.log("userId", user);

  const initialValues = {
    firstName: user?.name || "",
    lastName: "",
    email: "",
  };

  const handleSubmit = async (values: any) => {
    try {
      await updateUserProfile(user.id, {
        firstName: values.firstName,
        location: "me",
      });
      console.log("Profile updated successfully:");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                variant="outlined"
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                variant="outlined"
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                size="small"
                disabled
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Field
                as={TextField}
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                size="small"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
