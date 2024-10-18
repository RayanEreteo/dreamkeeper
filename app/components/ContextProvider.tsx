"use client";
import { createContext, useEffect, useState } from "react";

// Define the context with explicit types
export const userInfoContext = createContext({
  username: "",
  setUsername: (username: string | undefined) => {}
});

function ContextProvider({ children }: any) {
  // Initialize with an empty string or a default value
  const [username, setUsername] = useState<any>(undefined);

  // Update state after the component is mounted (client-side)
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }else{
      setUsername("")
    }
  }, []);

  return (
    <userInfoContext.Provider value={{ username, setUsername }}>
      {children}
    </userInfoContext.Provider>
  );
}

export default ContextProvider;
