import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<any>(null);

export function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching profile data...");
    axios
      .get("/profile")
      .then(({ data }) => {
        console.log("Profile data fetched:", data);
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
