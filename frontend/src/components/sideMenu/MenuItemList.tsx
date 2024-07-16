import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IMenuItem } from "../../interfaces/menu";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const menuItems: IMenuItem[] = [
  { text: "Home", icon: <InboxIcon /> },
  { text: "Starred", icon: <MailIcon /> },
  { text: "Send email", icon: <InboxIcon /> },
  { text: "Drafts", icon: <MailIcon /> },
  { text: "All mail", icon: <InboxIcon /> },
  { text: "Trash", icon: <MailIcon /> },
  { text: "Spam", icon: <InboxIcon /> },
];

export const MenuItemsList = () => {
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
