/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useAuth } from "../context/user";

const DriverHomePage = () => {
  const { user } = useAuth();
  const [activeTrip] = useState({
    path: [
      // { location: "Home", lat: 28.7041, lon: 77.1025 },
      // { location: "Airport", lat: 28.5669, lon: 77.1031 },
      // { location: "Hotel", lat: 28.527, lon: 77.0683 },
      // { location: "Work", lat: 28.5355, lon: 77.391 },
      ...user.riderData?.possibleSchools.map((item, index) => ({
        location: item,
        lat: 21.7041 + index,
        lon: 77.1025 + index,
      })),
      ...user.riderData?.locationsCovered.map((item, index) => ({
        location: item,
        lat: 28.7041 + index * 2,
        lon: 77.1025 + index * 2,
      })),
    ],
    totalTrips: 120,
    totalPayments: 2400,
  });

  const handleTripClick = (trip) => {
    console.log(`You clicked on the ${trip.location} trip`);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Left Section: Path/Route */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" gutterBottom>
              Your Trip Path
            </Typography>
            <Box>
              <Typography variant="body1">
                <DirectionsCarIcon sx={{ marginRight: 1 }} /> Starting from{" "}
                {activeTrip.path[0]?.location ?? 'Start'} to{" "}
                {activeTrip.path[activeTrip.path.length - 1]?.location ?? "End"}
              </Typography>
              <List sx={{ padding: 0 }}>
                {activeTrip.path.map((trip, index) => (
                  <ListItem
                    key={trip?.location ?? trip.lat}
                    button
                    onClick={() => handleTripClick(trip)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 0,
                    }}
                  >
                    <LocationOnIcon sx={{ marginRight: 2 }} />
                    <ListItemText primary={trip?.location} />
                    {index < activeTrip.path.length - 1 && (
                      <Divider sx={{ marginLeft: 2 }} />
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section: Trip & Payment Summary */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Trip & Payment Summary
            </Typography>

            {/* Trips Covered */}
            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Trips Covered
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <DirectionsCarIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">
                  {activeTrip.totalTrips} Trips
                </Typography>
              </Box>
            </Box>

            {/* Payments */}
            <Box sx={{ marginBottom: 3 }}>
              <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Total Payments
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PaymentIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">
                  ₹{activeTrip.totalPayments}
                </Typography>
              </Box>
            </Box>

            {/* Button to book new ride */}
            <Button variant="contained" color="primary" fullWidth>
              Collect
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DriverHomePage;
