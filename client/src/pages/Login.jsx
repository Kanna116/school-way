import TextField from "@mui/material/TextField";
import { useState } from "react";

import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useAuth } from "../context/user";
import "../styles/Auth.css";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <Box className="auth-card">
        <Logo />
        <h2>Welcome Back</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField
            type="email"
            name="email"
            required
            id="outlined-required"
            label="Email"
            onChange={handleChange}
            value={formData.email}
            size="small"
          />
          <TextField
            type="password"
            name="password"
            id="outlined-required"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            size="small"
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </Box>
    </div>
  );
};

export default Login;
