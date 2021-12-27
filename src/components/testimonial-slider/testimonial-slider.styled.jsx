import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

export const TestimonialSliderContainer = ({ children }) => (
  <Container maxWidth="lg">
    <Grid
      container
      justify="center"
      align="center"
      sx={{ height: { xs: "300px" }, "& .MuiButton-root": { minWidth: "0" } }}
    >
      {children}
    </Grid>
  </Container>
);

export const TestimonialHeader = ({ children }) => (
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

export const TestimonialSliderBackButton = ({
  maxSteps,
  activeStep,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MobileStepper
        sx={{
          "& > .MuiMobileStepper-dots": {
            display: "none",
          },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <Button size="large" onClick={onClick} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Grid>
  );
};

export const TestimonialSliderNextButton = ({
  maxSteps,
  activeStep,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& > .MuiPaper-root": {
          padding: "0",
        },
      }}
    >
      <MobileStepper
        sx={{
          "& > .MuiMobileStepper-dots": {
            display: "none",
          },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={onClick}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
      />
    </Grid>
  );
};

export const TestimonialContentContainer = ({
  children,
  index,
  onChangeIndex,
}) => {
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  return (
    <Grid item xs={10}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={index}
        onChangeIndex={onChangeIndex} //handleStepChange
        enableMouseEvents
      >
        {children}
      </AutoPlaySwipeableViews>
    </Grid>
  );
};

export const TestimonialContent = ({ author, data }) => (
  <>
    <i
      style={{
        fontSize: "1.4rem",
        color: "#606060",
      }}
    >
      {author}
    </i>
    <Typography
      style={{
        fontSize: "0.8rem",
        lineHeight: "1.7rem",
        margin: "1.5rem 1rem",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "3",
        overflow: "hidden",
        textAlign: "center",
        fontStyle: "italic",
        color: "#606060",
      }}
      sx={{
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
      {data}
    </Typography>
  </>
);
