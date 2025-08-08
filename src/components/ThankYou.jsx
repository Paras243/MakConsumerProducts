import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <Box
      textAlign="center"
      sx={{
        p: { xs: 3, sm: 5 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
      >
        🎉 Thank You for Your Order!
      </Typography>
      <Typography
        variant="h6"
        color="textSecondary"
        gutterBottom
        sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
      >
        Your order has been successfully placed.
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ m: 1 }}
          onClick={() => navigate("/track-order")}
        >
          Track Your Order
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ m: 1 }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </Box>
    </Box>
  );
}

export default ThankYou;
