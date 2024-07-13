import axios from "axios";
import toast from "react-hot-toast";

const baseRoute = "/profile";

export const updateUserProfile = async (userId: string, values: object) => {
  try {
    const response = await axios.put(baseRoute + "/edit", { values });
    toast.success("Profile is updated!");
    return response.data;
  } catch (error) {
    console.error("error in updateUserProfile", error);
    toast.error("Profile is not updated!");
  }
};
