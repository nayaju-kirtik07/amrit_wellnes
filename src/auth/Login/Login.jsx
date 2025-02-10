import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { api } from "../../api/config";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";
import CustomSnackbar from "../../Components/CustomSnackbar/CustomSnackbar";
import { setAuthData } from "../../api/config";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
   const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }else {
             newErrors.email = '';
         }
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }else if(formData.password.length < 6){
             newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }
         else {
             newErrors.password = '';
         }


        setFormErrors(newErrors);
        return isValid;
    };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    setFormErrors({...formErrors, [name]: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validateForm()) {
            return;
    }
    try {
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        const {
          accessToken,
          refreshToken,
          userId,
          user: username,
          profileImage,
        } = response.data;

        const userData = {
          userId,
          username,
          profileImage,
          email: formData.email,
        };

        setAuthData(accessToken, refreshToken, userData);

        login(userData);

        navigate("/", {
          state: {
            showLoginSuccess: true,
            username: formData.email.split("@")[0],
          },
        });
      }
    } catch (error) {
      console.error("Login error:", error);
       setError(error.response?.data?.error || "An error occurred during login");
       setSnackbar({
        open: true,
        message: error.response?.data?.error || "An error occurred during login",
        severity: 'error'
      });
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>

    <div className="login-container">

      <div className="login-content">
        <Container maxWidth="xs">
          <Typography variant="h3" className="login-title">
            Welcome Back
          </Typography>
          <Typography variant="body1" className="login-subtitle">
            Sign in to continue your coffee journey
          </Typography>

          {error && (
            <Typography color="error" className="error-message" align="center">
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              className="login-input-field"
              error={!!formErrors.email}
                helperText={formErrors.email}
            />

            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              className="login-input-field"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="login-submit-button cta-button"
            >
              Login
            </Button>

            <Typography className="forgot-password">
              <Button
                onClick={() => navigate("/forgot-password")}
                className="forgot-password-button"
              >
                Forgot Password?
              </Button>
            </Typography>
          </form>

          <Typography className="signup-link">
            Don't have an account?
            <Button
              onClick={() => navigate("/signup")}
              className="signup-button"
            >
              Sign Up
            </Button>
          </Typography>
        </Container>
      </div>
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </div>
    </>
  );
};

export default Login;