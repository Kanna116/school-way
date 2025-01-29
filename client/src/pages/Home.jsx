import { Box, CardMedia } from "@mui/material";
import { useState } from "react";
import RiderFinder from "../components/RiderFinder";
import RidersList from "../components/RidersList";
import { useAuth } from "../context/user";
import DriverHomePage from "./DriverHomePage";

const HomePage = () => {
  const [riders, setRiders] = useState([]);
  const { user } = useAuth();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        height: "fit-content",
      }}
    >
      {user?.role === "rider" ? (
        <DriverHomePage />
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <RiderFinder setRiders={setRiders} />
          {riders.length > 0 ? (
            <RidersList riders={riders} />
          ) : (
            <div style={{ width: "50%", height: "90vh" }}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                sx={{
                  objectFit: "cover",
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
  );
};

export default HomePage;
