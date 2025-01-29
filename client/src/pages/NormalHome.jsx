import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const HeroSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "90vh",
  background:
    "linear-gradient(to bottom, #000000bb, #00000050), url(https://images.pexels.com/photos/16096591/pexels-photo-16096591/free-photo-of-group-of-people-sitting-in-an-auto-rickshaw-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);",
  color: "#fff",
  backgroundSize: "cover",
  backgroundPosition: "top",
}));

const HighlightCard = styled(Card)(({ theme }) => ({
  boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
  borderRadius: theme.spacing(2),
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  boxShadow: "0px 2px 4px rgba(0,0,0,0.12)",
}));

const Home = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          padding: "5px 30px",
          bgcolor: "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          <Logo />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              },
            }}
          >
            <Link to="/signup">
              <Button
                variant="contained"
                size="small"
                style={{
                  border: "2px solid #e89f40",
                  backgroundColor: "#e89f4050",
                  color: "#fff",
                  marginTop: "16px",
                }}
              >
                Sign up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                size="small"
                style={{
                  color: "#fff",
                  backgroundColor: "#e89f40",
                  marginTop: "16px",
                }}
              >
                Log in
              </Button>
            </Link>
          </Box>
        </Container>
      </AppBar>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom fontWeight="800">
            Welcome to SchoolWay
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our school transportation service ensures safe and reliable travel
            for students, parents, and drivers. We prioritize security with
            well-maintained vehicles and trained professionals.
          </Typography>
          <Link to="/signup">
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#fff",
                color: "#e89f40",
              }}
            >
              Get Started
            </Button>
          </Link>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Box py={10}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom>
                About SchoolWay
              </Typography>
              <Typography variant="body1" color="text.secondary">
                SchoolWay provides a platform that connects parents, auto
                drivers, and students to ensure a safe, secure, and seamless
                school transportation experience.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ maxHeight: "80vh" }}>
              <img
                src="https://images.pexels.com/photos/17319806/pexels-photo-17319806/free-photo-of-hyderabad-story.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About SchoolWay"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Highlights Section */}
      <Box py={10} bgcolor="#f9f9f9">
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom align="center">
            Why Choose SchoolWay?
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={4}>
              <HighlightCard>
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  sx={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  image="https://cdn-icons-png.flaticon.com/256/7592/7592476.png"
                  alt="Safe Transportation"
                />
                <CardContent>
                  <Typography variant="h6">Safe Transportation</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Verified drivers and real-time tracking ensure your child’s
                    safety at every step.
                  </Typography>
                </CardContent>
              </HighlightCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <HighlightCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://cdn-icons-png.flaticon.com/128/3343/3343387.png"
                  alt="Affordable Pricing"
                  width="100%"
                  sx={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Affordable Pricing</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Flexible plans and transparent pricing tailored for parents.
                  </Typography>
                </CardContent>
              </HighlightCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <HighlightCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://cdn-icons-png.flaticon.com/256/4392/4392571.png"
                  alt="Convenience"
                  width="100%"
                  sx={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
                <CardContent>
                  <Typography variant="h6">Convenience</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Easy-to-use app with scheduling and real-time updates.
                  </Typography>
                </CardContent>
              </HighlightCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={10}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom align="center">
            What Our Users Say
          </Typography>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/256/4825/4825112.png"
                  alt="User 1"
                  sx={{ width: 64, height: 64, margin: "0 auto" }}
                />
                <Typography variant="h6">Julie</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  &quot;SchoolWay has made my mornings stress-free. I can track
                  my kids and ensure they’re safe.&quot;
                </Typography>
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/256/4825/4825038.png"
                  alt="User 2"
                  sx={{ width: 64, height: 64, margin: "0 auto" }}
                />
                <Typography variant="h6">Jane Smith</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  &quot;Affordable and reliable. SchoolWay has been a
                  game-changer for our family.&quot;
                </Typography>
              </TestimonialCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard>
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/256/4825/4825044.png"
                  alt="User 3"
                  sx={{ width: 64, height: 64, margin: "0 auto" }}
                />
                <Typography variant="h6">Michael Lee</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  &quot;As a driver, SchoolWay helps me connect with parents and
                  build trust easily.&quot;
                </Typography>
              </TestimonialCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
