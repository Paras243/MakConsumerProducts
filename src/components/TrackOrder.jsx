import React from "react";
import { Box, Stepper, Step, StepLabel, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TrackOrder() {
  const steps = ["Order Placed", "Processing", "Shipped", "Out for Delivery", "Delivered"];
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: { xs: 3, sm: 5 },
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { xs: "2rem", sm: "2.5rem" } }}
      >
        Track Your Order
      </Typography>

      <Stepper
        activeStep={2}
        alternativeLabel
        sx={{ mb: 4, flexDirection: { xs: "column", sm: "row" } }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontSize: { xs: "1rem", sm: "1.25rem" },
        }}
      >
        Your order is currently <strong>Shipped</strong>. Estimated delivery in 3
        days.
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        sx={{ m: 1 }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </Box>
  );
}

export default TrackOrder;
