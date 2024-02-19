import React, { useCallback, useEffect, useState } from "react";

import { Button, Paper, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, handleNext]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        onClick={handlePrev}
        style={{ position: "absolute", left: "10px", top: "50%" }}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        onClick={handleNext}
        style={{ position: "absolute", right: "10px", top: "50%" }}
      >
        <ArrowForwardIcon />
      </Button>

      <Paper
        elevation={3}
        style={{ padding: "20px", margin: "20px 0", position: "relative" }}
      >
        <img
          src={items[activeIndex]}
          alt={`Carousel Item ${activeIndex + 1}`}
          style={{ width: "600px", height: "400px", objectFit: "cover" }}
        />
      </Paper>

      <Stack direction="row" spacing={1} justifyContent="center">
        {items.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "#000" : "#ccc",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Stack>
    </div>
  );
};

const LINK =
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
const LINK2 =
  "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg";

export const Pictures = () => {
  const carouselItems = [LINK, LINK2, LINK, LINK2];

  return (
    <div>
      <Carousel items={carouselItems} />
    </div>
  );
};
