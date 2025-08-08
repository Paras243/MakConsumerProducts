import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";

function ProductDetails({ products, handleAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
    }
  }, [id, products]);

  const handleCartClick = () => {
    handleAddToCart(product);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (!product) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            {/* Main Image */}
            <Box
              sx={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Thumbnails */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                overflowX: "auto",
                pb: 1,
              }}
            >
              {product.images.map((img, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  sx={{
                    border:
                      selectedImage === img ? "2px solid #1976d2" : "1px solid #ccc",
                    borderRadius: 1,
                    cursor: "pointer",
                    padding: 0.5,
                    transition: "border 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumb-${index}`}
                    width={70}
                    height={70}
                    style={{ objectFit: "cover", borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Details Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ₹ {product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCartClick}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {product.title} added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetails;
