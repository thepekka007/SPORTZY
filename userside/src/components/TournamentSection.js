import React from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";

const tournaments = [
  {
    title: "Kerala Premier Cricket League 2026",
    location: "Kochi",
    date: "March 15, 2026",
    prize: "₹5,00,000",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },
  {
    title: "Kerala State Football Championship",
    location: "Trivandrum",
    date: "April 1, 2026",
    prize: "₹8,00,000",
    image: "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b",
  },
  {
    title: "Kerala Open Badminton Tournament",
    location: "Calicut",
    date: "March 20, 2026",
    prize: "₹2,00,000",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },
];

const TournamentSection = () => {
  return (
    <Box sx={{ mt: 5, px: { xs: 2, md: 0 } }}>
      <Typography variant="h4" gutterBottom>
        Featured Tournaments
      </Typography>

      <Grid container spacing={3}>
        {tournaments.map((tournament, index) => (
          <Grid 
            item 
            key={index} 
            xs={6}  // 2 per row on mobile
            sm={6}  // 2 per row on small screens
            md={4}  // 3 per row on desktop
          >
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
              <Box
                component="img"
                src={tournament.image}
                alt={tournament.title}
                sx={{ width: "100%", height: 180, objectFit: "cover" }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {tournament.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tournament.location} | {tournament.date}
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                  Prize: {tournament.prize}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: "100%" }}
                >
                  Register Now
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TournamentSection;