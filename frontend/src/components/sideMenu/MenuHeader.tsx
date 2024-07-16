import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import Messages from "./Messages";
import Notifications from "./Notifications";
import { AppBar } from "./SideMenu.styles";

interface IMenuHeader {
  isOpen: boolean;
  handleDrawerOpen: () => void;
}

export const MenuHeader: React.FC<IMenuHeader> = ({
  isOpen,
  handleDrawerOpen,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="fixed" open={isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Persistent drawer
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <SearchBar />
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Messages />
            <Notifications />
            <Profile />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
