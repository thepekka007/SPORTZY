import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const Stats = () => {
  const stats = [
    { number: "150+", label: "Registered Clubs" },
    { number: "3,500+", label: "Active Players" },
    { number: "45", label: "Tournaments" },
    { number: "850+", label: "Total Matches" },
  ];

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {stat.number}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;