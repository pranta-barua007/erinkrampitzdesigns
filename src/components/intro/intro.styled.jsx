import { Container, Typography, Box, Grid } from "@mui/material";

export const IntroContainer = ({ children }) => (
  <Container maxWidth="lg">
    <Grid
      container
      spacing={4}
      rowSpacing={4}
      justify="center"
      align="center"
      sx={{
        padding: { xs: "2rem 0", md: "4rem 0" },
      }}
    >
      {children}
    </Grid>
  </Container>
);

export const IntroTitle = ({ children }) => (
  <Grid item xs={12}>
    <Typography
      variant="caption"
      sx={{
        textTransform: "capitalize",
        fontWeight: "lighter",
        fontSize: "2rem",
        letterSpacing: "2px",
      }}
    >
      {children}
    </Typography>
  </Grid>
);

export const IntroInfo = ({ children }) => (
  <Grid item xs={12}>
    <Typography
      variant="body2"
      sx={{
        padding: { xs: "0 0", md: "0 15rem" },
        lineHeight: "1.6rem",
      }}
    >
      {children}
    </Typography>
  </Grid>
);

export const IntroLine = () => (
  <Grid item xs={12}>
    <Box
      sx={{
        width: "2px",
        height: "2px",
        backgroundColor: "black",
        border: "2px solid black",
        borderRadius: "25px",
        position: "relative",
        "&::before": {
          content: '""',
          display: "bolck",
          height: "1px",
          width: { xs: "120px", md: "340px" },
          backgroundColor: "black",
          position: "absolute",
          top: "50%",
          left: "0",
          marginLeft: "1rem",
        },
        "&::after": {
          content: '""',
          display: "bolck",
          height: "1px",
          width: { xs: "120px", md: "340px" },
          backgroundColor: "black",
          position: "absolute",
          top: "50%",
          right: "0",
          marginRight: "1rem",
        },
      }}
    />
  </Grid>
);
