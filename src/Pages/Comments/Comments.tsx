import styled from "@emotion/styled";
import { Paper, Grid, Typography, MobileStepper, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const apiKey = "YOUR_GOOGLE_API_KEY";
const placeId = "PLACE_ID_OF_YOUR_RESTAURANT";

const getReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    );

    const reviews = response.data.result.reviews;
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

const Root = styled("div")({
  flexGrow: 1,
  padding: "16px",
});

const ReviewPaper = styled(Paper)({
  padding: "16px",
  textAlign: "center",
  height: "100%", // Ensure each paper takes up the full height of the grid item
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const MobileStepperContainer = styled("div")({
  flexGrow: 1,
  background: "transparent",
});

export const Comments = () => {
  const [activeStep, setActiveStep] = useState(0);
  const reviewsPerPage = 3;

  const reviews = [
    { id: 1, text: "Review 1" },
    { id: 2, text: "Review 2" },
    { id: 3, text: "Review 3" },
    { id: 4, text: "Review 4" },
    { id: 5, text: "Review 5" },
    { id: 6, text: "Review 6" },
    { id: 7, text: "Review 7" },
    { id: 8, text: "Review 8" },
    // Add more reviews as needed
  ];

  const maxSteps = Math.ceil(reviews.length / reviewsPerPage);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Root>
      <Grid container spacing={2}>
        {reviews
          .slice(activeStep * reviewsPerPage, (activeStep + 1) * reviewsPerPage)
          .map((review) => (
            <Grid item key={review.id} xs={12} sm={6} md={4}>
              <ReviewPaper>
                {/* Include your name, avatar, rating, and three sections of text here */}
                <Typography variant="body1">{review.text}</Typography>
                {/* Add other content as needed */}
              </ReviewPaper>
            </Grid>
          ))}
      </Grid>
      {maxSteps > 1 && (
        <MobileStepperContainer>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </MobileStepperContainer>
      )}
    </Root>
  );
};
