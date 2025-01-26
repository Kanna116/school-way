import { Box, Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const RiderFinder = ({ setRiders }) => {
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/riders/riders?school=${school}&location=${location}`
      );
      setRiders(response.data.riders);
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
    </Box>
  );
};

export default RiderFinder;
