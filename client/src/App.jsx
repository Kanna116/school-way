import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

// Lazy load pages
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Home = React.lazy(() => import("./pages/Home"));
const NormalHome = React.lazy(() => import("./pages/NormalHome"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Test = React.lazy(() => import("./pages/Test"));
const Bookings = React.lazy(() => import("./pages/Bookings"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute component={NormalHome} />} />
          {/* Public Routes */}
          <Route path="/login" element={<PublicRoute component={Login} />} />
          <Route path="/signup" element={<PublicRoute component={Signup} />} />

          {/* Protected Routes */}
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route
            path="/bookings"
            element={<ProtectedRoute component={Bookings} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />

          {/* Default Route */}
          <Route path="*" element={<ProtectedRoute component={Test} />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
