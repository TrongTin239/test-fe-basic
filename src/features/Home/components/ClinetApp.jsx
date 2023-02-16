import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

import { images } from "../../../constants/image";
const steps = [
  {
    title: "Search service in just one button",
    content: "Enjoy convenience in just one app.",
  },
  {
    title: "Connecting diverse information",
    content:
      "Not only chat now you can voice chat and make callsto quickly connect with the performer",
  },
  {
    title: "Update status service",
    content:
      "You can know the status of repair or work completed while away from home.",
  },
  {
    title: "Complete safe and quality service",
    content:
      "You will feel secure when you see the report image and easily evaluatequality service whenever",
  },
];

const titleMain = " Outstanding features of the Client App";

export default function ClinetApp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [colorStep, setColorStep] = React.useState(false);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setColorStep(true);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container
      sx={{
        backgroundColor: "#F2F8FF",
        textAlign: "center",
        py: "50px",
      }}
    >
      <Typography fontSize={"35px"} variant="h6">
        {titleMain}
      </Typography>
      <Stack
        flexDirection={"row"}
        flexWrap="wrap"
        justifyContent="center"
        mt={"50px"}
      >
        <Box
          width={"200px"}
          component={"img"}
          alt="iphone"
          src={images.APPLE12}
          mr="50px"
        ></Box>

        <Box>
          <Stepper
            nonLinear
            activeStep={activeStep}
            orientation="vertical"
            sx={{
              ".MuiStepConnector-line": {
                boxSizing: "border-box",
                position: "relative",
                transform: "scale(var(--ggs,1))",
                borderRight: "2px solid transparent",
                borderLeft: "2px solid transparent",
                boxShadow: "inset 0 0 0 2px",
                height: "30px",
                width: "6px",
                //   color: "blue",
                "&:after": {
                  content: "close-quote",
                  display: "block",
                  boxSizing: "border-box",
                  position: "absolute",
                  width: "6px",
                  height: "6px",
                  borderBottom: "2px solid",
                  borderRight: "2px solid",
                  transform: "rotate(45deg)",
                  bottom: "0",
                  left: "-2px",
                },
              },
              ".css-1hv8oq8-MuiStepLabel-label.Mui-active": {
                color: "blue",
              },
            }}
          >
            {steps.map((label, index) => (
              <Step key={label.title} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  <Box component="span">{label.title}</Box>
                  <Box component={"br"} />

                  <Box color={"black"} textAlign={"left"} component={"span"}>
                    {label.content}
                  </Box>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Stack>
    </Container>
  );
}
