import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RiderFinder from "../components/RiderFinder";

const HomePage = () => {
  // const [userRole, setUserRole] = useState(null); // This will store the user's role (parent/driver)

  // useEffect(() => {
  //   // Retrieve the logged-in user's role (this could be from local storage, context, or API call)
  //   const role = localStorage.getItem("userRole"); // Example: Assuming userRole is saved in localStorage
  //   setUserRole(role);
  // }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 270px)",
        }}
      >
        <RiderFinder />
        {/* {userRole === "user" ? (
          <ParentHomePage />
        ) : userRole === "driver" ? (
          <DriverHomePage />
        ) : (
          <HeroSection />
        )} */}
      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;
