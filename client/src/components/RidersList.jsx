/* eslint-disable react/prop-types */
import { Avatar, Box, Card, Chip, Typography } from "@mui/material";

const RidersList = ({ riders }) => {
  return (
    <Box
      sx={{
        width: "50%",
        // p: 3,
        height: "fit-content",
        gap: "10px",
        display: "flex",
        // flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {riders.map((rider, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            width: "45%",
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
          <Box>
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
              Price: $15
            </Typography>
            <Chip label="Active" color="success" sx={{ marginTop: 1 }} />
            <Chip
              label="Verified"
              color="info"
              sx={{ marginTop: 1, marginLeft: 2 }}
            />
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default RidersList;
