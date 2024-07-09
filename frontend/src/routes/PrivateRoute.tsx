import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

const PrivateRoute = () => {
  const { user }: any = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
