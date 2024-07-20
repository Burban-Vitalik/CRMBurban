import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MenuItemsList } from "./MenuItemList";
import { MenuHeader } from "./MenuHeader";
import { Main, DrawerHeader } from "./SideMenu.styles";
import { Divider } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const drawerWidth = 240;

interface ISideMenuProps {
  children: React.ReactNode;
}

const SideMenu: React.FC<ISideMenuProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MenuHeader isOpen={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", alignItems: "center", p: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              background: "#3C434E",
              padding: "10px 5px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src="https://burbanbranding.com/wp-content/uploads/2023/05/burban-logo.png"
              alt="Logo"
              sx={{
                maxWidth: "60%",
                width: "100%",
                height: "auto",
                maxHeight: 40,
              }}
            />
            <LocalShippingIcon
              sx={{ ml: 1, fontSize: "26px", color: "white" }}
            />
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <MenuItemsList />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SideMenu;
