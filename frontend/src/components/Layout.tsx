import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu/SideMenu";

export const Layout = () => {
  return (
    <SideMenu>
      <Outlet />
    </SideMenu>
  );
};
