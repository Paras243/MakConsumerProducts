import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

function CleaningGuides() {
  const navigate = useNavigate();

  const guides = [
    {
      title: "Kitchen Cleaning Routine",
      description: "Maintain a spotless kitchen using Mak Kitchen Cleaner.",
      link: "/blogs/1",
      icon: <KitchenIcon sx={{ fontSize: 40, color: "#ff7043" }} />,
    },
    {
      title: "Glass & Mirrors Made Easy",
      description: "Get streak-free shine with Mak Glass Cleaner.",
      link: "/blogs/3",
      icon: <CleaningServicesIcon sx={{ fontSize: 40, color: "#42a5f5" }} />,
    },
    {
      title: "Monsoon Season Hygiene",
      description: "Protect your home from germs and dampness this season.",
      link: "/blogs/2",
      icon: <ThunderstormIcon sx={{ fontSize: 40, color: "#66bb6a" }} />,
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          background: "linear-gradient(to right, #1976d2, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Cleaning Guides
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ maxWidth: 600, mx: "auto", mb: 5 }}
      >
        Discover expert tips and tricks to keep your home sparkling clean
        with Mak products.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {guides.map((guide, index) => (
          <Card
            key={index}
            sx={{
              width: 300,
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.75)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: 4,
              transition: "all 0.4s ease",
              transform: "scale(1)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 4 }}>
              {guide.icon}
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mt: 2, mb: 1 }}
              >
                {guide.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mb: 3 }}
              >
                {guide.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  background: "linear-gradient(to right, #1976d2, #42a5f5)",
                  "&:hover": {
                    background: "linear-gradient(to right, #1565c0, #2196f3)",
                  },
                  borderRadius: "20px",
                  textTransform: "none",
                }}
                onClick={() => navigate(guide.link)}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CleaningGuides;
