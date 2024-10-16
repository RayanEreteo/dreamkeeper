"use client";
import { createContext, useState, ReactNode } from "react";

// Define the context with explicit types
interface UserInfoContextType {
  username: string;
  setUsername: (name: string) => void;
}

// Create context with default values
export const userInfoContext = createContext<UserInfoContextType>({
  username: "",
  setUsername: () => {}
});

function ContextProvider({ children }: { children: ReactNode }) {
  // Initialize state with an empty string
  const [username, setUsername] = useState<string>("");

  return (
    <userInfoContext.Provider value={{ username, setUsername }}>
      {children}
    </userInfoContext.Provider>
  );
}

export default ContextProvider;
