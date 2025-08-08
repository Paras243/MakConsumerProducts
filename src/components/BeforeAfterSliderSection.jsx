import React, { useState } from "react";
import { Box, Typography, Slider } from "@mui/material";
import beforeImage from "../assets/dirtyFloor.png";
import afterImage from "../assets/cleanFloor.png";
import makProductImage from "../assets/floorCleaner.jpg"; // <-- Add your product image here

function BeforeAfterSliderSection() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Box sx={{ textAlign: "center", my: 8 }}>
      {/* Rainbow Gradient Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 3,
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        See the Mak Difference
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ mb: 4, color: "text.secondary" }}
      >
        After using the Mak Floor Cleaning Product, the floor is noticeably cleaner and shinier.
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          height: "400px",
          mx: "auto",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: 5,
        }}
      >
        {/* After Image (full) */}
        <img
          src={afterImage}
          alt="Clean Floor"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />

        {/* Before Image (clipped) */}
        <img
          src={beforeImage}
          alt="Dirty Floor"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            transition: "clip-path 0.2s ease-out",
          }}
        />

        {/* Slider Control */}
        <Slider
          value={sliderValue}
          onChange={(e, newValue) => setSliderValue(newValue)}
          aria-labelledby="before-after-slider"
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            color: "#1976d2",
          }}
        />
      </Box>

      {/* Product Image */}
      <Box sx={{ mt: 5 }}>
        <img
          src={makProductImage}
          alt="Mak Floor Cleaner"
          style={{
            height: "180px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

export default BeforeAfterSliderSection;
