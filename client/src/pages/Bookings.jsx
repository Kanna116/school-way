/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import BASE_API from "../services/axios";
import { useAuth } from "../context/user";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

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
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

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
          onClick={handleOpenModal}
        >
          View Details
        </Button>
      </CardActions>

      {/* Modal for showing the booking details */}
      <BookingModal
        open={open}
        onClose={handleCloseModal}
        booking={booking}
        isRider={isRider}
      />
    </Card>
  );
};

// const BookingModal = ({ open, onClose, booking, isRider }) => {
//   // Calculate days left for the booking plan
//   const endDate = new Date(booking.endDate);
//   const currentDate = new Date();
//   const daysLeft = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth>
//       <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
//         {isRider ? "User's Booking Details" : "Rider's Booking Details"}
//       </DialogTitle>
//       <DialogContent>
//         <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//           {/* From Location to To Location */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Typography variant="body1" sx={{ fontWeight: 600 }}>
//               From: {booking.location}
//             </Typography>
//             <ArrowForwardIcon sx={{ mx: 2 }} />
//             <Typography variant="body1" sx={{ fontWeight: 600 }}>
//               To: {booking.school}
//             </Typography>
//           </Box>

//           {/* Pricing and Days Left */}
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="body1">
//               <strong>Pricing:</strong> ${booking.pricing}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Days Left:</strong> {daysLeft} days
//             </Typography>
//           </Box>

//           {/* Start and End Date */}
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography variant="body1">
//               <strong>Start Date:</strong>{" "}
//               {new Date(booking.startDate).toLocaleDateString()}
//             </Typography>
//             <Typography variant="body1">
//               <strong>End Date:</strong>{" "}
//               {new Date(booking.endDate).toLocaleDateString()}
//             </Typography>
//           </Box>

//           {/* Number of People */}
//           <Typography variant="body1">
//             <strong>Number of People:</strong> {booking.numberOfPeople}
//           </Typography>

//           {/* Status */}
//           <Typography
//             variant="body1"
//             sx={{
//               color: booking.status === "completed" ? "#4caf50" : "#ff9800",
//               fontWeight: 600,
//             }}
//           >
//             <strong>Status:</strong> {booking.status}
//           </Typography>

//           {/* Rider Details (if not a rider) */}
//           {!isRider && (
//             <Box sx={{ marginTop: 2 }}>
//               <Typography variant="h6">Rider Details:</Typography>
//               <Typography variant="body1">
//                 <strong>Rider Name:</strong> {booking.rider.username}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Rider Contact:</strong> {booking.rider.contact || "N/A"}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Rider Vehicle No:</strong>{" "}
//                 {booking.rider.vehicleNumber || "N/A"}
//               </Typography>
//             </Box>
//           )}

//           {/* User Details (if a rider) */}
//           {isRider && (
//             <Box sx={{ marginTop: 2 }}>
//               <Typography variant="h6">User Details:</Typography>
//               <Typography variant="body1">
//                 <strong>User Name:</strong> {booking.user.username}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>User Contact:</strong> {booking.user.contact || "N/A"}
//               </Typography>
//             </Box>
//           )}
//         </Box>
//       </DialogContent>

//       <DialogActions>
//         <Button
//           onClick={onClose}
//           sx={{ bgcolor: "#e89f40" }}
//           variant="contained"
//         >
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

const BookingModal = ({ open, onClose, booking, isRider }) => {
  // Calculate days left for the booking plan
  const endDate = new Date(booking.endDate);
  const currentDate = new Date();
  const daysLeft = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 2,
          paddingInline: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#3c3c3c" }}
      >
        {isRider ? "User's Booking Details" : "Rider's Booking Details"}
      </DialogTitle>

      <DialogContent sx={{ paddingBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* From Location to To Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOnIcon sx={{ color: "#4caf50" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {booking.location}
              </Typography>
            </Box>
            <ArrowForwardIcon sx={{ mx: 2, color: "#f57c00" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocationOnIcon sx={{ color: "#f57c00" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {booking.school}
              </Typography>
            </Box>
          </Box>

          {/* Pricing and Days Left */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              <strong>Pricing:</strong> ${booking.pricing}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                <strong>Days Left:</strong>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "#f0f0f0",
                  borderRadius: 8,
                  padding: "5px 10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: "#3f51b5" }}
                >
                  {daysLeft} days
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Dates */}
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CalendarTodayIcon sx={{ color: "#f57c00" }} />
              <Typography variant="body2" color="text.secondary">
                <strong>Start Date:</strong>{" "}
                {new Date(booking.startDate).toLocaleDateString()}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CalendarTodayIcon sx={{ color: "#f57c00" }} />
              <Typography variant="body2" color="text.secondary">
                <strong>End Date:</strong>{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />

          {/* Number of People */}
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            <strong>Number of People:</strong> {booking.numberOfPeople}
          </Typography>

          {/* Status Indicator */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              <strong>Status:</strong>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor:
                  booking.status === "completed" ? "#4caf50" : "#ff9800",
                padding: "5px 15px",
                borderRadius: 20,
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {booking.status}
            </Box>
          </Box>

          {/* Rider/User Details */}
          <Box sx={{ marginTop: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {isRider ? "User Details" : "Rider Details"}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2">
                <strong>Name:</strong>{" "}
                {isRider ? booking.user.username : booking.rider.username}
              </Typography>
              <Typography variant="body2">
                <strong>Contact:</strong>{" "}
                {isRider
                  ? booking.user.contact
                  : booking.rider.contact || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ pb: 2 }}>
        <Button
          onClick={onClose}
          color="primary"
          variant="contained"
          sx={{ bgcolor: "#e89f40", color: "white", borderRadius: "8px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
