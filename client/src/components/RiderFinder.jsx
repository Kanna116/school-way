import { Box, Button, FormControl, TextField } from "@mui/material";

const RiderFinder = () => {
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
        <TextField label="Pick up" size="small" />
        <TextField label="School" size="small" />
        <Button variant="contained" sx={{ bgcolor: "#e89f40" }}>
          Find Rider
        </Button>
      </FormControl>
    </Box>
  );
};

export default RiderFinder;
