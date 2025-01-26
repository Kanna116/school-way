import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import axios from "axios";
import "../styles/Signup.css";
import "../styles/Auth.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/auth/signup", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <Logo />
        <h2>Create an Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <TextField
            name="username"
            required
            id="outlined-required"
            label="Username"
            onChange={handleChange}
            value={formData.username}
            size="small"
          />
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
          <FormControl size="small">
            <InputLabel id="role-select-label">Role</InputLabel>
            <Select
              fullWidth
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={formData.role}
              label="Role"
              name="role"
              variant="outlined"
              onChange={handleChange}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="rider">Rider</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
