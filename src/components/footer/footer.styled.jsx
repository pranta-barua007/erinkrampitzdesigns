import * as React from "react";

import { Container, Grid, Box, Typography, Button, Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InstagramIcon from "@mui/icons-material/Instagram";

export const FooterContainer = ({ children }) => (
  <Box flexGrow="1" padding="2rem 0" backgroundColor="#000000" color="#ffffff">
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {children}
      </Grid>
    </Container>
  </Box>
);

export const FooterTitle = ({ children }) => (
  <Grid item xs={12} md={8}>
    <Typography variant="h4">{children}</Typography>
  </Grid>
);

export const FooterButton = ({ children }) => (
  <Grid item xs={12} md={4} align="right">
    <Button
      variant="outlined"
      endIcon={<ArrowForwardIosIcon />}
      sx={{
        textTransform: "uppercase",
        padding: "0.6rem 1.5rem",
        fontWeight: "bolder",
        color: "#fff",
        borderColor: "#fff",
        "&:hover": {
          borderColor: "#fff",
          backgroundColor: "#fff",
          color: "#000",
        },
      }}
    >
      {children}
    </Button>
  </Grid>
);

export const FooterCopyright = ({ children }) => (
  <Grid
    item
    xs={12}
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography variant="body1">{children}</Typography>
    <Link
      href="https://www.instagram.com/erinkrampitzdesigns/"
      target="_blank"
      sx={{
        color: "whitesmoke",
        "&:hover": {
          color: "rgb(205, 72, 107)",
        },
      }}
    >
      <InstagramIcon />
    </Link>
  </Grid>
);

export const AppCreator = ({ creator, manager }) => (
  <Grid
    item
    xs={12}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography variant="body1"> Made with 🖤 by &nbsp; </Typography>
    <Link
      href="https://prantabarua.ml"
      target="_blank"
      sx={{
        color: "gray",
        "&:hover": {
          color: "rgb(205, 72, 107)",
        },
      }}
    >
      <Typography variant="body1">{creator}</Typography>
    </Link>
    <Typography variant="body1"> &nbsp; & &nbsp; </Typography>
    <Link
      href="https://www.linkedin.com/in/colton-ehrman/"
      target="_blank"
      sx={{
        color: "gray",
        "&:hover": {
          color: "rgb(205, 72, 107)",
        },
      }}
    >
      <Typography variant="body1">{manager}</Typography>
    </Link>
  </Grid>
);
