import axios from "axios";
import toast from "react-hot-toast";

// log out user
export const logout = async () => {
  try {
    const response = await axios("/logout");
    toast.success("Logout successful");
    return response.data;
  } catch (error) {
    console.error("error in logout", error);
    toast.error("Logout failed");
  }
};

// login user
export const login = async (values: any) => {
  try {
    await axios.post("/login", values);
    toast.success("Login successful");
  } catch (error) {
    console.error("error in login", error);
    toast.error("Login failed");
  }
};

// register user
export const register = async (values: any) => {
  try {
    const response = await axios.post("/register", values);
    toast.success("Register successful");
    return response.data;
  } catch (error) {
    console.error("error in register", error);
    toast.error("Register failed");
  }
};
