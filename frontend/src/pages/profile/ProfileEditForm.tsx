import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { UserContext } from "../../context/userContext";
import { updateUserProfile } from "../../api/profileApi";
import CustomTextField from "../../components/custom/CustomTextField";
import { CustomButton } from "../../components/custom/CustomButton";

interface IProfileEditFormProps {}

const ProfileEditForm: React.FC<IProfileEditFormProps> = () => {
  const { user }: any = useContext(UserContext);

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
      {({}) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomTextField
                name="firstName"
                label="First Name"
                size="small"
                id="firstName"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                name="lastName"
                id="lastName"
                label="Last Name"
                size="small"
                disabled
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <CustomTextField
                name="email"
                id="email"
                label="Email"
                size="small"
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <CustomButton
                label="Save"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
