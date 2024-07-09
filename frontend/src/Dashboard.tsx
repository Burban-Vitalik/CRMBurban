import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

const Dashboard = () => {
  const { user, loading }: any = useContext(UserContext);

  useEffect(() => {
    console.log("Dashboard - user:", user);
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user.email}!</h2>
    </div>
  );
};

export default Dashboard;
