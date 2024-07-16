import React from "react";
import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notifications: React.FC = () => {
  return (
    <IconButton color="inherit" sx={{ mx: 1 }}>
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default Notifications;
