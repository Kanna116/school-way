/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import BASE_API from "../services/axios";
import { useAuth } from "../context/user";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();
  const isRider = user.role === "rider";
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await BASE_API.get(
          `/api/bookings/get-current-bookings/${
            isRider ? user.riderData._id : user._id
          }?role=${user.role}`
        );
        if (response.status === 200) {
          setBookings(response.data.bookings);
        }
      } catch (error) {
        console.log("Erro occured", error);
      }
    };

    if (!bookings.length) {
      fetchBookings();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography variant="h5" sx={{ mx: 5, mb: 3 }}>
        Current Bookings
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: "20px",
          px: 5,
        }}
      >
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <BookingCard booking={booking} key={index} isRider={isRider} />
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isRider ? (
              "No Rides bookings are there for now"
            ) : (
              <Typography>
                No booking made yet want to make one{" "}
                <Link to="/home">Use Rider Finder</Link>
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Bookings;

const BookingCard = ({ booking, isRider }) => {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        {/* User's and Rider's name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 600, marginBottom: 1 }}
        >
          {isRider ? (
            <span>
              <strong>User:</strong> {booking.user.username}
            </span>
          ) : (
            <span>
              <strong>Rider:</strong> {booking.rider.username}
            </span>
          )}
        </Typography>

        {/* Booking Details */}
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Start Date:</strong>{" "}
            {new Date(booking.startDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>End Date:</strong>{" "}
            {new Date(booking.endDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Number of People:</strong> {booking.numberOfPeople}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Pricing:</strong> ${booking.pricing}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Status:</strong>{" "}
            <span
              style={{
                fontWeight: 600,
                color: booking.status === "completed" ? "#4caf50" : "#ff9800", // Green for confirmed, orange for pending
              }}
            >
              {booking.status}
            </span>
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ padding: "16px" }}>
        {/* View Details Button */}
        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "#e89f40", color: "white" }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
