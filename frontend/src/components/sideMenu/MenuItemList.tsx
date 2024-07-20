import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IMenuItem } from "../../interfaces/menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HandshakeIcon from "@mui/icons-material/Handshake";
import QuizIcon from "@mui/icons-material/Quiz";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const menuItems: IMenuItem[] = [
  { text: "Home", icon: <InboxIcon />, navigateTo: "/home" },
  { text: "Messages", icon: <MailIcon />, navigateTo: "/messages" },
  { text: "Orders", icon: <ShoppingCartIcon />, navigateTo: "/orders" },
  { text: "Analytics", icon: <AnalyticsIcon />, navigateTo: "/analytics" },
  { text: "Products", icon: <ShoppingBasketIcon />, navigateTo: "/products" },
  { text: "Partners", icon: <HandshakeIcon />, navigateTo: "/partners" },
  { text: "FAQ", icon: <QuizIcon />, navigateTo: "/faq" },
];

export const MenuItemsList = () => {
  const navigate = useNavigate();
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          key={index}
          disablePadding
          onClick={() => navigate(item.navigateTo)}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
