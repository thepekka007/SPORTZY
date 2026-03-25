import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Container
} from "@mui/material";
import { Users, Trophy } from "lucide-react";

const STATS = [
  { label: "Registered Clubs", value: "150+", icon: Users },
  { label: "Active Players", value: "3,500+", icon: Users },
  { label: "Tournaments", value: "45", icon: Trophy },
  { label: "Total Matches", value: "850+", icon: Trophy },
];

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          borderRadius: 4,
          p: { xs: 3, md: 6 },
          background: "linear-gradient(to right, #2563eb, #7c3aed)",
          overflow: "hidden"
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          MAC - Make A Challenge
        </Typography>

        <Typography variant="h6" sx={{ mb: 4 }}>
          Kerala's Premier Sports Management Platform. Register clubs,
          players, and compete in tournaments across Kerala.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2
          }}
        >
          <Button variant="contained" color="inherit">
            Register Club
          </Button>

          <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
            Register as Player
          </Button>
        </Box>

        {/* Decorative Circle */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 250,
            height: 250,
            backgroundColor: "rgba(255,255,255,0.1)",
            filter: "blur(60px)",
            display: { xs: "none", md: "block" }
          }}
        />
      </Box>

      {/* STATS SECTION */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {STATS.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    display: "inline-block",
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "rgba(37, 99, 235, 0.1)"
                  }}
                >
                  <Icon size={22} color="#2563eb" />
                </Box>

                <Typography variant="h5" fontWeight="bold">
                  {stat.value}
                </Typography>

                <Typography color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

    </Container>
  );
};

export default Dashboard;