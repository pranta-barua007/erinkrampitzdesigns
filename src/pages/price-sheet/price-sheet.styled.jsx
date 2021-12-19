import * as React from "react";
import { Grid, Container } from "@mui/material";

export const PriceSheetContainer = ({ children }) => (
  <Container maxWidth="lg">
    <Grid
      container
      spacing={2}
      justify="center"
      align="center"
      sx={{ padding: { md: "4rem 0", xs: "2rem 0" } }}
    >
      {children}
    </Grid>
  </Container>
);
