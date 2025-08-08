import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";

// Utility functions
const getTotalCartValue = (items = []) =>
  items.reduce((total, item) => total + item.price * item.qty, 0);

const getTotalItems = (items = []) =>
  items.reduce((total, item) => total + item.qty, 0);

// Quantity Component
const ItemQuantity = ({ value, onIncrease, onDecrease }) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <IconButton
      onClick={onDecrease}
      size="small"
      sx={{
        backgroundColor: "#f5f5f5",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <Remove />
    </IconButton>
    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
      {value}
    </Typography>
    <IconButton
      onClick={onIncrease}
      size="small"
      sx={{
        backgroundColor: "#f5f5f5",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <Add />
    </IconButton>
  </Stack>
);

// Main Cart Component
function Cart({ cartData, handleQuantity, handleRemoveFromCart, handleClearCart }) {
  // Empty Cart View
  if (cartData.length === 0) {
    return (
      <Box
        textAlign="center"
        mt={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          component="img"
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          sx={{ width: { xs: 150, sm: 200 }, height: { xs: 150, sm: 200 }, mb: 3 }}
        />

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            background: "linear-gradient(90deg, #ff6a00, #ee0979)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your Cart is Empty
        </Typography>

        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ maxWidth: 400, mb: 3, px: { xs: 2, sm: 0 } }}
        >
          Looks like you haven’t added anything yet. Explore our premium
          products to make your home shine with Mak!
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            px: { xs: 4, sm: 5 },
            py: 1.5,
            borderRadius: 8,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            textTransform: "none",
            background: "linear-gradient(to right, #43cea2, #185a9d)",
            "&:hover": {
              background: "linear-gradient(to right, #36d1dc, #5b86e5)",
            },
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            mb: 8,
          }}
        >
          Start Shopping
        </Button>
      </Box>
    );
  }

  // Full Cart View
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
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
          mb: 4,
          background: "linear-gradient(90deg, #ff6a00, #ee0979)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Your Shopping Cart
      </Typography>

      {/* Cart Items */}
      <Stack spacing={3}>
        {cartData.map((item) => (
          <Card
            key={item.productId}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              p: 2,
              borderRadius: 3,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardMedia
              component="img"
              image={item.thumbnail}
              alt={item.title}
              sx={{
                width: { xs: "100%", sm: 120 },
                height: { xs: 180, sm: 120 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            <CardContent sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.2rem" } }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                ₹{item.price}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
                sx={{ flexDirection: { xs: "column", sm: "row" }, gap: { xs: 2, sm: 0 } }}
              >
                <ItemQuantity
                  value={item.qty}
                  onIncrease={() => handleQuantity(item.productId, "+")}
                  onDecrease={() => handleQuantity(item.productId, "-")}
                />
                <IconButton
                  color="error"
                  onClick={() => handleRemoveFromCart(item.productId)}
                  sx={{
                    backgroundColor: "#ffe5e5",
                    "&:hover": { backgroundColor: "#ffcccc" },
                  }}
                >
                  <Delete />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Cart Summary */}
      <Box
        mt={4}
        p={3}
        sx={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: 3,
          backgroundColor: "#fff",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 0 }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
            Total ({getTotalItems(cartData)} items): ₹{getTotalCartValue(cartData)}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width={{ xs: "100%", sm: "auto" }}>
            <Button
              component={Link}
              to="/checkout"
              variant="contained"
              sx={{
                px: { xs: 3, sm: 4 },
                background: "linear-gradient(to right, #43cea2, #185a9d)",
                "&:hover": {
                  background: "linear-gradient(to right, #36d1dc, #5b86e5)",
                },
                borderRadius: 5,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleClearCart}
              sx={{
                borderRadius: 5,
                px: { xs: 3, sm: 3 },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Clear Cart
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Cart;
