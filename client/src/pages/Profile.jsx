// // import {
// //   Avatar,
// //   Box,
// //   Card,
// //   CardContent,
// //   Grid,
// //   Typography,
// // } from "@mui/material";
// // import { useAuth } from "../context/user";

// // const Profile = () => {
// //   const { user } = useAuth();
// //   return (
// //     <div>
// //       <Grid container spacing={2} justifyContent="center">
// //         <Grid item xs={12} md={6}>
// //           <Card>
// //             <Box display="flex" alignItems="center" p={2}>
// //               <Avatar
// //                 src={user.image}
// //                 alt={user.username}
// //                 sx={{ width: 100, height: 100, marginRight: 2 }}
// //               />
// //               <Box>
// //                 <Typography variant="h6">{user.username}</Typography>
// //                 <Typography variant="body2" color="textSecondary">
// //                   {user.email}
// //                 </Typography>
// //               </Box>
// //             </Box>
// //             <CardContent>
// //               <Typography variant="body1" gutterBottom>
// //                 <strong>Contact:</strong> {user.contact}
// //               </Typography>
// //               <Typography variant="body1" gutterBottom>
// //                 <strong>Vehicle Number:</strong> {user.vehicleNumber}
// //               </Typography>
// //               <Typography variant="body1" gutterBottom>
// //                 <strong>Possible Schools:</strong>{" "}
// //                 {user.possibleSchools?.join(", ")}
// //               </Typography>
// //               <Typography variant="body1" gutterBottom>
// //                 <strong>Locations Covered:</strong>{" "}
// //                 {user.locationsCovered?.join(", ")}
// //               </Typography>
// //               <Typography
// //                 variant="body2"
// //                 color={user.isVerified ? "green" : "red"}
// //               >
// //                 {user.isVerified ? "Verified" : "Not Verified"}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useState } from "react";
// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Autocomplete,
//   InputAdornment,
// } from "@mui/material";
// import { useAuth } from "../context/user";

// const Profile = () => {
//   const { user, updateUser } = useAuth();
//   const [formData, setFormData] = useState({
//     username: user.username,
//     email: user.email,
//     contact: user.contact,
//     vehicleNumber: user.vehicleNumber,
//     possibleSchools: user.possibleSchools || [],
//     locationsCovered: user.locationsCovered || [],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleMultiChange = (name, value) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updateUser(formData);
//   };

//   const schools = ["School A", "School B", "School C", "School E"]; // Example predefined schools
//   const locations = ["Location 1", "Location 2", "Location 3", "Location 5"]; // Example predefined locations

//   return (
//     <div>
//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Card>
//             <Box display="flex" alignItems="center" p={2}>
//               <Avatar
//                 src={user.image}
//                 alt={user.username}
//                 sx={{ width: 100, height: 100, marginRight: 2 }}
//               />
//               <Box>
//                 <Typography variant="h6">{user.username}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {user.email}
//                 </Typography>
//               </Box>
//             </Box>
//             <CardContent>
//               <form onSubmit={handleSubmit}>
//                 <TextField
//                   label="Username"
//                   fullWidth
//                   margin="normal"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Email"
//                   fullWidth
//                   margin="normal"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Contact"
//                   fullWidth
//                   margin="normal"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">+</InputAdornment>
//                     ),
//                   }}
//                 />
//                 <TextField
//                   label="Vehicle Number"
//                   fullWidth
//                   margin="normal"
//                   name="vehicleNumber"
//                   value={formData.vehicleNumber}
//                   onChange={handleChange}
//                 />
//                 <Autocomplete
//                   multiple
//                   freeSolo
//                   options={schools}
//                   value={formData.possibleSchools}
//                   onChange={(event, newValue) =>
//                     handleMultiChange("possibleSchools", newValue)
//                   }
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Possible Schools"
//                       margin="normal"
//                     />
//                   )}
//                 />
//                 <Autocomplete
//                   multiple
//                   freeSolo
//                   options={locations}
//                   value={formData.locationsCovered}
//                   onChange={(event, newValue) =>
//                     handleMultiChange("locationsCovered", newValue)
//                   }
//                   renderInput={(params) => (
//                     <TextField
//                       {...params}
//                       label="Locations Covered"
//                       margin="normal"
//                     />
//                   )}
//                 />
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                 >
//                   Update Profile
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Profile;

import { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { useAuth } from "../context/user";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    contact: user.riderData?.contact || "", // default to empty string if not a rider
    vehicleNumber: user.riderData?.vehicleNumber || "", // default to empty string if not a rider
    possibleSchools: user.riderData?.possibleSchools || [], // default to empty array if not a rider
    locationsCovered: user.riderData?.locationsCovered || [], // default to empty array if not a rider
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData); // Assuming updateUser is defined to update both user and rider data
  };

  const schools = ["School A", "School B", "School C", "School E"]; // Example predefined schools
  const locations = ["Location 1", "Location 2", "Location 3", "Location 5"]; // Example predefined locations

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card>
            <Box display="flex" alignItems="center" p={2}>
              <Avatar
                src={user.image}
                alt={user.username}
                sx={{ width: 100, height: 100, marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.email}
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled
                />

                {user.role === "rider" && ( // Render rider-specific fields only for riders
                  <>
                    <TextField
                      label="Contact"
                      fullWidth
                      margin="normal"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+</InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      label="Vehicle Number"
                      fullWidth
                      margin="normal"
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleChange}
                    />
                    <Autocomplete
                      multiple
                      freeSolo
                      options={schools}
                      value={formData.possibleSchools}
                      onChange={(event, newValue) =>
                        handleMultiChange("possibleSchools", newValue)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Possible Schools"
                          margin="normal"
                        />
                      )}
                    />
                    <Autocomplete
                      multiple
                      freeSolo
                      options={locations}
                      value={formData.locationsCovered}
                      onChange={(event, newValue) =>
                        handleMultiChange("locationsCovered", newValue)
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Locations Covered"
                          margin="normal"
                        />
                      )}
                    />
                  </>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Update Profile
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
