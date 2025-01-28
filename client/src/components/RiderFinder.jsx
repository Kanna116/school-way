import { Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import BASE_API from "../services/axios";

// eslint-disable-next-line react/prop-types
const RiderFinder = ({ setRiders }) => {
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [ridersNotFound, setRidersNotFound] = useState(false);

  const handleSearch = async () => {
    if (!school || !location) {
      alert("Please enter both School and Location");
      return;
    }

    try {
      const response = await BASE_API.get(
        `/api/riders/riders?school=${school}&location=${location}`
      );
      console.log(response);
      console.log(response.status);
      if (response.status === 404) {
        setRidersNotFound(true);
        return ;
      }
      setRiders(response.data.riders);
      setRidersNotFound(false);
    } catch (error) {
      console.error("Error fetching riders", error);
    }
  };
  return (
    <Box
      sx={{
        width: "50%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Let&apos;s find you a auto rider</h2>
      <FormControl
        sx={{
          width: "60%",
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        <TextField
          label="Pickup"
          size="small"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <TextField
          label="School"
          size="small"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#e89f40" }}
          onClick={handleSearch}
        >
          Find Rider
        </Button>
      </FormControl>
      {ridersNotFound && "No Rider found for this route"}
    </Box>
  );
};

export default RiderFinder;
