/* eslint-disable react/prop-types */
import { Avatar, Box, Button, Card, Chip, Typography } from "@mui/material";
import BookRider from "./BookRider";
import { useState } from "react";

const RidersList = ({ riders, searchPath }) => {
  const [pricing, setPricing] = useState(0);
  const [open, setOpen] = useState(false);
  const [riderToBook, setRiderToBook] = useState({});

  return (
    <Box
      sx={{
        width: "50%",
        height: "fit-content",
        gap: "10px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {riders.map((rider, index) => {
        const priceValue = (Math.random() * 500).toFixed(2);
        return (
          <Card
            key={index}
            sx={{
              display: "flex",
              width: "45%",
              minHeight: "320px",
              padding: 2,
              borderRadius: 2,
              boxShadow: 3,
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{ width: 56, height: 56, marginRight: 2 }}
              alt={rider.username}
              src={rider.image}
            />
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {rider.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Locations: {rider.locationsCovered.join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Schools: {rider.possibleSchools.join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {priceValue}
              </Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Chip size="small" label="Active" color="success" />
                <Chip size="small" label="Verified" color="info" />
              </Box>
              <Button
                sx={{ display: "block", mt: "5" }}
                variant="contained"
                size="small"
                onClick={() => {
                  setPricing(priceValue);
                  setRiderToBook(rider);
                  setOpen(true);
                }}
              >
                Book
              </Button>
            </Box>
          </Card>
        );
      })}

      <BookRider
        open={open}
        handleClose={() => setOpen(false)}
        pricing={pricing}
        riderToBook={riderToBook}
        searchPath={searchPath}
      />
    </Box>
  );
};

export default RidersList;
