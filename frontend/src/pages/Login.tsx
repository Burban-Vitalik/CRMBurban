import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });

  const loginUser = async (e: any) => {
    const { email, password } = loginData;
    e.preventDefault();
    try {
      const { data }: any = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setLoginData({});
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
    }
    console.log("handleLogin", loginData);
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="Enter email"
          value={loginData.email}
          onChange={(e: any) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter password"
          value={loginData.password}
          onChange={(e: any) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
