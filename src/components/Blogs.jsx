import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import blog1 from "../assets/glass_cleaning_img.jpg";
import blog3 from "../assets/glass_cleaning_tips.jpeg";
import blog2 from "../assets/germFree.jpg";

const blogs = [
  {
    id: 1,
    title: "Top 5 Cleaning Hacks with Mak Products",
    description: "Discover smart cleaning hacks that save time and effort while keeping your home spotless with Mak's trusted cleaning range.",
    image: blog1,
  },
  {
    id: 2,
    title: "How to Keep Your Home Germ-Free with Mak",
    description: "Learn effective ways to eliminate germs and bacteria using Mak’s disinfectants and surface cleaners, ensuring a healthy living environment for your family.",
    image: blog2,
  },
  {
    id: 3,
    title: "Glass Cleaning Tips You Must Know",
    description: "Get streak-free shine with expert tips on using Mak's glass cleaners to brighten up windows and mirrors effortlessly.",
    image: blog3,
  },
];


function Blogs() {
  const navigate = useNavigate();

  return (
    <Box p={{ xs: 2, sm: 4, md: 5 }} sx={{ backgroundColor: "#f9f9f9" }}>
      {/* Gradient Heading */}
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          background:
            "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Latest Blogs
      </Typography>

      {/* Responsive Swiper Carousel */}
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 25 },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        style={{ padding: "20px 0" }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
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
                height="220"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent sx={{ textAlign: "center", p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "#222" }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 2 }}
                >
                  {blog.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #1976d2, #42a5f5)",
                    "&:hover": {
                      background: "linear-gradient(to right, #1565c0, #2196f3)",
                    },
                  }}
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Blogs;
