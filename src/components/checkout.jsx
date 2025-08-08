import React, { useState, useMemo } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Divider,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate, Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

function Checkout({ cartData }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  const subtotal = useMemo(
    () => cartData.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cartData]
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => navigate("/thank-you");

  // ✅ Show this if cart is empty
  if (!cartData || cartData.length === 0) {
    return (
      <Box
        textAlign="center"
        mt={10}
        sx={{
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Your cart is empty
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          Please add products to your cart before proceeding to checkout.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 8,
            background: "linear-gradient(to right, #43cea2, #185a9d)",
            "&:hover": {
              background: "linear-gradient(to right, #36d1dc, #5b86e5)",
            },
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 5 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.5rem" },
        }}
      >
        Checkout
      </Typography>

      <Grid container spacing={4}>
        {/* LEFT: Shipping Address & Payment */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Shipping Address
            </Typography>
            {["Full Name", "Address", "City", "Postal Code", "Country"].map(
              (label) => (
                <TextField key={label} label={label} fullWidth margin="normal" />
              )
            )}

            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Payment Method
            </Typography>

            <Tabs
              value={paymentMethod}
              onChange={(e, value) => setPaymentMethod(value)}
              textColor="primary"
              indicatorColor="primary"
              variant="fullWidth"
              sx={{ mb: 2 }}
            >
              <Tab label="Card Payment" value="card" />
              <Tab label="UPI Payment" value="upi" />
            </Tabs>

            {paymentMethod === "card" && (
              <>
                <TextField label="Card Number" fullWidth margin="normal" />
                <TextField label="Expiry Date (MM/YY)" fullWidth margin="normal" />
                <TextField label="CVV" fullWidth margin="normal" />
              </>
            )}

            {paymentMethod === "upi" && (
              <>
                <TextField label="UPI ID (e.g., name@upi)" fullWidth margin="normal" />
                <Button variant="outlined" color="primary" fullWidth sx={{ mt: 1 }}>
                  Verify UPI
                </Button>
              </>
            )}

            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              sx={{ mt: 3, fontWeight: "bold" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>

        {/* RIGHT: Order Summary */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>

            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              style={{ marginBottom: "20px" }}
            >
              {cartData.map((item) => (
                <SwiperSlide key={item.productId}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 1,
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={
                        item.thumbnail ||
                        item.image ||
                        "https://via.placeholder.com/100"
                      }
                      alt={item.title}
                      sx={{
                        width: { xs: "100%", sm: 100 },
                        height: { xs: 180, sm: 100 },
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                    <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="subtitle1">₹{subtotal}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">Shipping</Typography>
              <Typography variant="subtitle1">₹{shipping}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" fontWeight="bold">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{total}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkout;
