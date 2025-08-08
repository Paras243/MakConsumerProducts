import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // 👈 Import this

function ProductCard({ product, handleAddToCart }) {
  const [snackOpen, setSnackOpen] = useState(false);
  const navigate = useNavigate(); // 👈 React Router hook

  const handleAdd = () => {
    handleAddToCart(product);
    setSnackOpen(true);
  };

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 3,
          boxShadow: 4,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        }}
      >
        <Box
          sx={{
            height: 180,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            p: 1,
            cursor: "pointer", // 👈 shows clickable
          }}
          onClick={goToDetails} // 👈 go to details on click
        >
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, px: 2 }}>
          <Typography variant="h6" noWrap gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            ₹{product.price}
          </Typography>
        </CardContent>

        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: "bold" }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackOpen(false)}>
          {product.title} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProductCard;


/*import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";

function ProductCard({ product, handleAddToCart }) {
  const [snackOpen, setSnackOpen] = useState(false);

  const handleAdd = () => {
    handleAddToCart(product);
    setSnackOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 3,
          boxShadow: 4,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        }}
      >
        <Box
          sx={{
            height: 180,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            p: 1,
          }}
        >
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, px: 2 }}>
          <Typography variant="h6" noWrap gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            ₹{product.price}
          </Typography>
        </CardContent>

        <Box sx={{ px: 2, pb: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ borderRadius: 2, textTransform: "none", fontWeight: "bold" }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSnackOpen(false)}>
          {product.title} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ProductCard;

*/
/*import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ProductCard({ product, handleAddToCart }) {
  return (
    <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 150,
          objectFit: "contain",
          padding: 1,
          backgroundColor: "#f5f5f5", // optional
        }}
      />
      <CardContent sx={{ flexGrow: 1, padding: "10px" }}>
        <Typography variant="h6" noWrap>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.description}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mt={1}>
          ₹{product.price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          onClick={() => handleAddToCart(product)}
          sx={{ mt: 1 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
*/