import { useEffect, useState } from "react";
import DriverHomePage from "./DriverHomePage";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ParentHomePage from "./ParentHomePage";

const HomePage = () => {
  const [userRole, setUserRole] = useState(null); // This will store the user's role (parent/driver)

  useEffect(() => {
    // Retrieve the logged-in user's role (this could be from local storage, context, or API call)
    const role = localStorage.getItem("userRole"); // Example: Assuming userRole is saved in localStorage
    setUserRole(role);
  }, []);

  return (
    <div>
      <Navbar />
      {userRole === "parent" ? (
        <ParentHomePage />
      ) : userRole === "driver" ? (
        <DriverHomePage />
      ) : (
        <HeroSection />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
