import React from "react";
import { IconButton, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const Messages: React.FC = () => {
  return (
    <IconButton color="inherit" sx={{ mx: 1 }}>
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
  );
};

export default Messages;
