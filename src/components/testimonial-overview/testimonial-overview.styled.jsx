import * as React from "react";

import { Container, Grid, Box, Typography } from "@mui/material";

export const TestimonialOverviewContainer = ({ children }) => (
  <Container maxWidth="lg">
    <Grid container spacing={4} sx={{ padding: "2rem 0" }}>
      {children}
    </Grid>
  </Container>
);

export const TestimonialOverviewContent = ({ content, author }) => (
  <Grid item xs={12} md={6}>
    <Box
      component="div"
      sx={{
        border: "1px solid #ddd",
        padding: "1rem",
        color: "#606060",
        "& > .MuiTypography-body2": { lineHeight: "26px" },
      }}
    >
      <Typography
        variant="h5"
        align="right"
        sx={{
          width: { md: "350px", xs: "260px" },
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          quotes: `"“" "”" "‘" "’"`,
          "&:before": {
            content: "open-quote",
            fontSize: "2rem",
          },
          "&:after": {
            content: "close-quote",
          },
        }}
      >
        {content}
      </Typography>
      <Typography variant="body2" align="justify">
        {content}
      </Typography>
      <Typography variant="subtitle1" align="right">
        {author}
      </Typography>
    </Box>
  </Grid>
);
