import { Container, Paper, Typography } from "@mui/material";
import ProfileEditForm from "./ProfileEditForm";

interface IProfileEditProps {}

export const ProfileEdit: React.FC<IProfileEditProps> = () => {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 3 }}>
        <Typography component="h1" variant="h5" marginBottom={2}>
          Profile Edit
        </Typography>
        <ProfileEditForm />
      </Paper>
    </Container>
  );
};
