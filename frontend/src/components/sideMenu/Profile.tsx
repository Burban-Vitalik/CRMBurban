import React from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Profile: React.FC = () => {
  return (
    <IconButton size="large" edge="end" color="inherit" sx={{ mx: 1 }}>
      <AccountCircle />
    </IconButton>
  );
};

export default Profile;
