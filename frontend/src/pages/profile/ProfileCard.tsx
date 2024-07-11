import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

interface ProfileCardProps {
  userPhoto: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  role: string;
  gender: string;
  location: string;
  number: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  userPhoto,
  email,
  firstName,
  lastName,
  age,
  role,
  gender,
  location,
  number,
}) => {
  return (
    <Card
      sx={{ maxWidth: 300, mt: 4, p: 2, position: "relative", height: "100%" }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Avatar
            src={userPhoto}
            alt={`${firstName} ${lastName}`}
            sx={{ width: 128, height: 128, mb: 2 }}
          />
          <Typography variant="h5" component="div" gutterBottom>
            {firstName} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {number}
          </Typography>
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Age:</strong> {age}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Location:</strong> {location}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Gender:</strong> {gender}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Role:</strong> {role}
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <LinkedInIcon />
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <TelegramIcon />
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          <TwitterIcon />
        </Link>
      </Box>
    </Card>
  );
};

export default ProfileCard;
