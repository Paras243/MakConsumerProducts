import { Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

function Products({ products, handleAddToCart }) {
  return (
    <Grid
      container
      spacing={3}
      p={{ xs: 2, sm: 3 }}
      justifyContent="center"
    >
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          xs={6}    // 2 per row on mobile
          sm={6}    // 2 per row on tablets
          md={3}    // 4 per row on laptop/desktop
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "400px", height: "350px" }}>
            <ProductCard
              product={product}
              handleAddToCart={handleAddToCart}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
