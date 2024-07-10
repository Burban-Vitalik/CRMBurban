import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { Button } from "@mui/material";
import { logout } from "./api/authApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, loading }: any = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await logout().then((_) => {
        navigate("/login");
      });
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    console.log("Dashboard - user:", user);
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate("/login");
    return <></>;
    // return <div>No user</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user.email}!</h2>
      <Button onClick={logoutUser}>Logout</Button>
    </div>
  );
};

export default Dashboard;
