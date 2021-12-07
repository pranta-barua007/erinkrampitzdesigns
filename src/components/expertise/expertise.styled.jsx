import * as React from "react";

import { Container, Grid, Box, Typography } from "@mui/material";

export const ExpertiseContainer = ({ children }) => (
  <Container maxWidth="xl">
    <Grid
      container
      justify="center"
      align="center"
      sx={{
        "&:before, &:after": {
          content: '""',
          display: "block",
          backgroundColor: "#ddd",
          height: "1px",
          width: "100%",
          margin: "1rem 0",
        },
      }}
    >
      {children}
    </Grid>
  </Container>
);

export const ExpertiseHeader = ({ children }) => (
  <Grid item xs={12}>
    <Typography
      variant="h6"
      sx={{
        letterSpacing: "12px",
        textTransform: "uppercase",
        fontWeight: "900",
        fontSize: "12px",
        padding: "2rem 0",
      }}
    >
      {children}
    </Typography>
  </Grid>
);

export const ExpertiseContent = ({ title, content }) => (
  <Grid item xs={12} md={4}>
    <Box
      sx={{
        padding: "1rem",
        color: "#606060",
        "& > .MuiTypography-body2": {
          lineHeight: "1.6rem",
          fontSize: "0.8rem",
        },
      }}
    >
      <Typography variant="h6" align="justify">
        {title}
      </Typography>
      <Typography variant="body2" align="left">
        {content}
      </Typography>
    </Box>
  </Grid>
);
