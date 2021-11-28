import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import heroAvatar from "../../assets/avatar.png";

const HeroInfo = styled(Paper)(({ theme }) => ({
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

export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#a6a6a6", paddingTop: "1rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={5} xs={12} md={5} lg={5}>
            <HeroInfo sx={{ height: { xs: "85.5vh" } }}>
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "20px",
                  fontSize: { xs: "1.6rem", sm: "2rem", lg: "5rem" },
                }}
              >
                erin
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "20px",
                  fontSize: { xs: "1.6rem", sm: "2rem", lg: "5rem" },
                }}
              >
                krampitz
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize", margin: "2rem 0" }}
              >
                Interior Decorator and Designer
              </Typography>
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
              >
                HIRE ME NOW
              </Button>
            </HeroInfo>
          </Grid>
          <Grid item sm={7} xs={12} md={7} lg={7}>
            <Typography
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex", md: "flex" },
                width: "auto",
                height: { xs: "60vh", md: "88vh", lg: "110vh" },
                justifyContent: "flex-end",
              }}
            >
              <img src={heroAvatar} alt="hero-avatar" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
