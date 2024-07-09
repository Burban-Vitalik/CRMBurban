import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>({
    name: "",
    email: "",
    password: "",
  });

  const register = async (e: any) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={register}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={(e: any) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={(e: any) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e: any) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
