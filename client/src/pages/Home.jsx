import { Box, CardMedia } from "@mui/material";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RiderFinder from "../components/RiderFinder";
import RidersList from "../components/RidersList";
import { useAuth } from "../context/user";
import DriverHomePage from "./DriverHomePage";

const HomePage = () => {
  const [riders, setRiders] = useState([]);
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 270px)",
        }}
      >
        {user?.role === "rider" ? (
          <DriverHomePage />
        ) : (
          <Box
            sx={{
              display: "flex",
            }}
          >
            <RiderFinder setRiders={setRiders} />
            {riders.length > 0 ? (
              <RidersList riders={riders} />
            ) : (
              <div style={{ width: "50%" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  width="100%"
                  sx={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  image="https://images.pexels.com/photos/13472774/pexels-photo-13472774.jpeg"
                  alt="Safe Transportation"
                />
              </div>
            )}
          </Box>
        )}
      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;
