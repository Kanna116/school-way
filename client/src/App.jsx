import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load pages
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Home = React.lazy(() => import("./pages/Home"));
const NormalHome = React.lazy(() => import("./pages/NormalHome"));
const Test = React.lazy(() => import("./pages/Test"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<NormalHome />} />
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/home" element={<Home />} />

        {/* Default Route */}
        <Route path="*" element={<Test />} />
      </Routes>
    </Suspense>
  );
};

export default App;
