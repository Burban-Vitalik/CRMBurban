import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { user }: any = useContext(UserContext);

  return !user ? <Outlet /> : <Navigate to="/profile" />;
};

export default PublicRoute;
