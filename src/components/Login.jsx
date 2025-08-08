import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom"; // <-- imported Link

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert(`Welcome back, ${data.email}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        px: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: 400 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.8rem", sm: "2rem" },
              background: "linear-gradient(to right, #43cea2, #185a9d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Welcome Back
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  background: "linear-gradient(90deg, #185a9d, #43cea2)",
                  color: "white",
                  "&:hover": {
                    background: "linear-gradient(90deg, #43cea2, #185a9d)"
                  }
                }}
              >
                Login
              </Button>
            </motion.div>
          </form>

          <Box mt={3}>
            <Typography variant="body2" color="textSecondary">
              Forgot Password?
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#1976d2", fontWeight: "bold", textDecoration: "none" }}>
                Register
              </Link>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Login;
