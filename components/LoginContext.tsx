"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
type LoginContextType = {
  googleLoginModal: boolean;
  setGoogleLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with a default value (can be `undefined` initially)
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Create the provider component
export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [googleLoginModal, setGoogleLoginModal] = useState(true);

  return (
    <LoginContext.Provider value={{ googleLoginModal, setGoogleLoginModal }}>
      {children}
    </LoginContext.Provider>
  );
};

// Create a custom hook to use the context
export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }
  return context;
};
