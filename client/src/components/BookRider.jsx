/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const BookRider = ({
  open = true,
  handleClose = () => {},
  pricing = 10000,
}) => {
  const [numPeople, setNumPeople] = useState(1); // State to hold number of people
  const [numMonths, setNumMonths] = useState(1); // State to hold number of people

  const totalPricing = (numPeople * numMonths * pricing).toFixed(2);

  const handleSubmit = () => {
    // You can process the number of people here
    alert(
      `You have booked a ride for ${numPeople} people. with a duration of ${numMonths} which will be costed around ${totalPricing}`
    );
    handleClose(); // Close the modal after submission
  };
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Book Ride ?
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Please fill the below questions for booking the rider?
          </Typography>
          <TextField
            label="Number of People (max of 4)"
            type="number"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            defaultValue={1}
            fullWidth
            sx={{ mt: 2, mb: 1 }}
            inputProps={{ min: 1, max: 4 }}
          />
          <TextField
            label="Duration (in months)"
            type="number"
            value={numMonths}
            onChange={(e) => setNumMonths(e.target.value)}
            defaultValue={1}
            fullWidth
            sx={{ mt: 1, mb: 2 }}
            inputProps={{ min: 1, max: 12 }}
          />
          <Divider />
          <Typography sx={{ my: 1 }}>Total Pricing: {totalPricing}</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 1 }}
          >
            {/* Submit button */}
            <Button
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#e89f40",
                border: "1px solid #e89f40",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#e89f40", color: "#fff" }}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default BookRider;
