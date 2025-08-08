import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import blog1 from "../assets/glass_cleaning_img.jpg";


import blog2 from "../assets/germFree.jpg";
import blog3 from "../assets/glass_cleaning_tips.jpeg";

const blogs = [
  {
    id: 1,
    title: "Top 5 Cleaning Hacks with Mak Products",
    image: blog1,
    content: `
      1. Use Mak Glass Cleaner for streak-free windows.
      2. Try Mak Kitchen Cleaner to remove tough grease.
      3. Use Fabric Conditioner for softer clothes.
      4. Disinfect surfaces using Mak Surface Cleaner.
      5. Always store products safely for long-lasting quality.
    `,
  },
  {
    id: 2,
    title: "How to Keep Your Home Germ-Free with Mak",
    image: blog2,
    content: `
      Maintaining a germ-free home is essential for a healthy lifestyle, and Mak Consumer Products make it simple and effective. Here's how:

      1. **Disinfect High-Touch Surfaces**  
         Use Mak Surface Cleaner to regularly wipe down doorknobs, switches, countertops, and tables.

      2. **Keep Your Kitchen Hygienic**  
         Mak Kitchen Cleaner removes tough grease and keeps your cooking space fresh.

      3. **Achieve Streak-Free, Hygienic Windows**  
         Mak Glass Cleaner removes dust and contaminants for better hygiene.

      4. **Protect Fabrics from Germs**  
         Wash clothes and upholstery with Mak Fabric Conditioner for freshness and bacteria control.

      5. **Adopt a Cleaning Routine**  
         Use Mak products in a daily and weekly cleaning schedule to prevent germ buildup.

      6. **Safe Storage for Long-Lasting Quality**  
         Store products in a cool, dry place away from children.

      With Mak's trusted cleaning solutions, you can enjoy a healthier, germ-free environment for your entire family.
    `,
  },
  {
    id: 3,
    title: "Glass Cleaning Tips You Must Know",
    image: blog3,
    content: `
      1. Use Mak Glass Cleaner for streak-free windows.
      2. Clean with microfiber cloths for the best results.
      3. Avoid cleaning windows in direct sunlight to prevent streaks.
      4. Regular cleaning keeps dust and germs away.
    `,
  },
];


function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <Typography variant="h5" align="center">Blog Not Found</Typography>;
    }

    return (
        <Box p={{ xs: 2, sm: 4, md: 5 }} sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
            <Card
                sx={{
                    maxWidth: 900,
                    margin: "0 auto",
                    boxShadow: 4,
                    borderRadius: 3,
                    width: { xs: "100%", sm: "90%", md: "80%" },
                }}
            >
                <CardMedia
                    component="img"
                    height={{ xs: 200, sm: 300, md: 400 }}
                    image={blog.image}
                    alt={blog.title}
                />
                <CardContent>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
                    >
                        {blog.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ whiteSpace: "pre-line", mb: 3, fontSize: { xs: "0.9rem", sm: "1rem" } }}
                    >
                        {blog.content}
                    </Typography>
                    <Button
                        variant="outlined"
                        onClick={() => navigate("/")}
                        sx={{
                            borderColor: "#1976d2",
                            color: "#1976d2",
                            "&:hover": { backgroundColor: "#e3f2fd" },
                        }}
                    >
                        Back to Blogs
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default BlogDetails;
