import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Dashboard = () => {
  const { user, loading }: any = useContext(UserContext);
  const navigate = useNavigate();

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
      <ProfileCard
        email="vitalikburban2002@gmail.com"
        firstName="Vitalik"
        lastName="Burban"
        userPhoto="data:image/jpeg;base64,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"
        location={"Vinnuky"}
        role={"Owner"}
        age={22}
        gender={"Male"}
        number={"+380-95-134-1843"}
      />
      {/* <Button onClick={logoutUser}>Logout</Button> */}
    </div>
  );
};

export default Dashboard;
