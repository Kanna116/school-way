import { createContext, useContext, useEffect, useState } from "react";
import BASE_API from "../services/axios";

const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // To store user data
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    Boolean(localStorage.getItem("isUserLoggedIn"))
  ); // To track login status

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setIsUserLoggedIn(true);
    }
  }, []);

  // Function to log the user in
  const login = async (userData) => {
    try {
      const res = await BASE_API.post("/api/auth/login", userData);
      setUser(res.data.user);
      setIsUserLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Store user data in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isUserLoggedIn", true);
    } catch (err) {
      throw new Error(err.response?.data?.message || "Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setIsUserLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isUserLoggedIn");
  };

  const updateUser = async (formData) => {
    console.log(user);
    try {
      const response = await BASE_API.post(
        `/api/auth/update/${user._id}`,
        formData
      );

      if (response.ok) {
        setUser({ ...user, ...response.data.updateUser });
      }
    } catch (err) {
      throw new Error(
        err.response?.data?.message || "Failed to Update the user"
      );
    }
  };

  return (
    <UserContext.Provider
      value={{ user, isUserLoggedIn, login, logout, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
