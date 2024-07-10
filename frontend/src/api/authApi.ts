import axios from "axios";

export const logout = async () => {
  try {
    const response = await axios("/logout");
    return response.data;
  } catch (error) {
    console.error("error in logout", error);
    throw error;
  }
};
