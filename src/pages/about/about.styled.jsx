import * as React from "react";

import { Container, Grid, Box, Typography } from "@mui/material";

export const AboutPageContainer = ({ children }) => (
  <Container maxWidth="xl">
    <Grid
      container
      spacing={4}
      sx={{ padding: { md: "3rem 0", xs: "2rem 0" } }}
    >
      {children}
    </Grid>
  </Container>
);

export const AboutImage = ({ alt, ...otherProps }) => (
  <Grid item xs={12} md={12} lg={6}>
    <Box component="div" sx={{ height: "100%", width: "100%" }}>
      <img
        alt={alt}
        loading="lazy"
        style={{
          height: "100%",
          width: "100%",
          maxHeight: "1123px",
          maxWidth: "1125px",
        }}
        {...otherProps}
      />
    </Box>
  </Grid>
);

export const AboutDetails = ({ start, middle, end }) => (
  <Grid item xs={12} md={12} lg={6}>
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#606060",
        gap: "2rem",
        padding: { md: "6rem", xs: "0" },
      }}
    >
      <Typography variant="subtitle1">{start}</Typography>
      <Typography variant="subtitle1">{middle}</Typography>
      <Typography variant="h6">{end}</Typography>
    </Box>
  </Grid>
);
