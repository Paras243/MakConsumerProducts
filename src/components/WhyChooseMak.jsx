import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home";

function WhyChooseMak() {
  const features = [
    { icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#1976d2" }} />, title: "Kills 99.9% Germs" },
    { icon: <LocalOfferIcon sx={{ fontSize: 50, color: "#388e3c" }} />, title: "Affordable Pricing" },
    { icon: <HomeIcon sx={{ fontSize: 50, color: "#f57c00" }} />, title: "Trusted by 10,000+ Homes" },
    { icon: <CheckCircleOutlineIcon sx={{ fontSize: 50, color: "#7b1fa2" }} />, title: "Eco-Friendly" },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 6, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Why Choose Mak?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box>
              {feature.icon}
              <Typography variant="h6" fontWeight="bold" mt={1}>
                {feature.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseMak;
