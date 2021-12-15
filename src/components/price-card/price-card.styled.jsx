import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Button, CardActionArea, CardActions, Box } from "@mui/material";

export const PriceCardContainer = ({ children }) => (
  <Grid item xs={12} md={6}>
    <Card sx={{ maxWidth: 400, backgroundColor: "#606060" }}>{children}</Card>
  </Grid>
);

export const PriceCardContentContainer = ({ children }) => (
  <CardActionArea>{children}</CardActionArea>
);

export const PriceCardHeadingContainer = ({ children }) => (
  <CardContent>{children}</CardContent>
);

export const PriceCardHeadingText = ({ children }) => (
  <Typography
    gutterBottom
    variant="h5"
    align="center"
    sx={{
      color: "#fff",
    }}
  >
    {children}
  </Typography>
);

export const PriceInfoContainer = ({ children }) => (
  <Box sx={{ backgroundColor: "#000", color: "#FFF", padding: "1rem 0" }}>
    {children}
  </Box>
);

export const PriceInfoTitle = ({ children }) => (
  <Typography variant="h3" align="center">
    {children}
  </Typography>
);

export const PriceInfoSubTitle = ({ children }) => (
  <Typography variant="subtitle1" align="center">
    {children}
  </Typography>
);

export const PriceCardButtonContainer = ({ children }) => (
  <CardActions sx={{ backgroundColor: "#606060", justifyContent: "center" }}>
    {children}
  </CardActions>
);

export const PriceCardButton = ({ children }) => (
  <Button
    variant="outlined"
    size="large"
    sx={{
      backgroundColor: "#000",
      color: "#fff",
      borderColor: "#000",
      "&:hover": {
        backgroundColor: "#a6a6a6",
        borderColor: "#a6a6",
        color: "#000",
      },
    }}
  >
    {children}
  </Button>
);
