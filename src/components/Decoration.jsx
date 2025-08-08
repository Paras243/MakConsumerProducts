import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import deco_1 from "../assets/decoration_1.jpg";
import deco_2 from "../assets/decoration_2.jpg";
import deco_3 from "../assets/decoration_3.jpg";
import deco_4 from "../assets/decoration_4.jpeg";

// Decorations data with Pinterest links
const decorations = [
  {
    id: 1,
    title: "Living Room Makeover",
    description: "Transform your living room with modern styles and cozy vibes.",
    image: deco_1,
    link: "https://www.pinterest.com/thehavenly/living-room/"
  },
  {
    id: 2,
    title: "Modern Kitchen",
    description: "Upgrade your kitchen space with sleek designs and functionality.",
    image: deco_2,
    link: "https://www.pinterest.com/search/pins/?q=modern%20kitchen"
  },
  {
    id: 3,
    title: "Bathroom Ideas",
    description: "Stylish bathroom decor to refresh your mornings.",
    image: deco_3,
    link: "https://www.pinterest.com/search/pins/?q=bathroom%20ideas"
  },
  {
    id: 4,
    title: "Bedroom Decor",
    description: "Create a relaxing and luxurious bedroom setup.",
    image: deco_4,
    link: "https://www.pinterest.com/search/pins/?q=bedroom%20decor"
  }
];

function Decoration() {
  return (
    <Box sx={{ mt: 5, px: { xs: 2, sm: 3, md: 5 } }}>
      {/* Gradient Heading */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Home Decoration Ideas
      </Typography>

      {/* Responsive Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 25 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {decorations.map((decor) => (
          <SwiperSlide key={decor.id}>
            <Card
              sx={{
                boxShadow: 4,
                borderRadius: 3,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: { xs: 180, sm: 200 }, objectFit: "cover" }}
                image={decor.image}
                alt={decor.title}
              />
              <CardContent sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}
                >
                  {decor.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
                >
                  {decor.description}
                </Typography>
                <Button
                  variant="contained"
                  component="a"
                  href={decor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: "linear-gradient(to right, #1976d2, #42a5f5)",
                    "&:hover": { background: "linear-gradient(to right, #1565c0, #2196f3)" },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Decoration;
