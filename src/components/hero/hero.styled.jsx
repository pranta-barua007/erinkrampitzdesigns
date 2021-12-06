import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const HeroContainer = ({ children }) => (
  <Box flexGrow="1" paddingTop="1rem" backgroundColor="#a6a6a6">
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Container>
  </Box>
);

export const HeroInfoContainer = ({ children }) => (
  <Grid item sm={5} xs={12} md={5} lg={5}>
    <HeroTextContainer sx={{ height: { xs: "85.5vh", sm: "94vh" } }}>
      {children}
    </HeroTextContainer>
  </Grid>
);

export const HeroAvatarContainer = ({ children }) => (
  <Grid item sm={7} xs={12} md={7} lg={7}>
    <Box
      sx={{
        mr: 2,
        display: { xs: "none", sm: "flex", md: "flex" },
        width: "auto",
        height: { xs: "60vh", md: "88vh", lg: "110vh" },
        justifyContent: "flex-end",
      }}
    >
      {children}
    </Box>
  </Grid>
);

export const HeroImage = styled("img")(() => ({
  maxHeight: "1000px",
}));

export const HeroTitle = ({ children }) => (
  <Typography
    variant="h2"
    sx={{
      letterSpacing: "20px",
      fontSize: { xs: "1.6rem", sm: "2rem", lg: "5rem" },
    }}
  >
    {children}
  </Typography>
);

export const HeroSubTitle = ({ children }) => (
  <Typography
    variant="subtitle1"
    sx={{ textTransform: "capitalize", margin: "2rem 0" }}
  >
    {children}
  </Typography>
);

export const HeroCtaButton = ({ children, ...otherProps }) => (
  <Button
    variant="outlined"
    endIcon={<ChevronRightIcon />}
    sx={{
      marginTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      borderColor: "white",
      color: "white",
      "&:hover": {
        backgroundColor: "white",
        color: "#000",
        borderColor: "white",
      },
    }}
    {...otherProps}
  >
    {children}
  </Button>
);

//should we stick to styled or sx?
const HeroTextContainer = styled(Paper)(() => ({
  color: "#fff",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  textTransform: "uppercase",
  background: "none",
  boxShadow: "none",
}));
