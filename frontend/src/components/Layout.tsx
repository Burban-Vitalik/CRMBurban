import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>{/* <p>Navbar</p> */}</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
