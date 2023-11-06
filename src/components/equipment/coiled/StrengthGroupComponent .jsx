import { useEffect, useRef } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const StrengthGroupComponent = () => {
  const numbersRef = useRef([]);
  const baseValues = [70, 80, 90, 100, 110]; // Replace with your base values
  const animationFrameIds = [];

  const animateNumber = (numberIndex) => {
    const numberRef = numbersRef.current[numberIndex];
    const baseValue = baseValues[numberIndex];
    let startValue = 0;
    let animationFrameId;

    const animate = () => {
      if (startValue < baseValue) {
        startValue += 0.1; // Adjust the increment value as needed
        numberRef.textContent = `${startValue.toFixed(0)}`; // Display without "mm"
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(numberRef);

    animationFrameIds.push(animationFrameId);
  };

  useEffect(() => {
    baseValues.forEach((_, index) => {
      animateNumber(index);
    });

    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <Card sx={{ height: 200 }}>
      <CardActionArea>
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            Strength Group
          </Typography>
          <Grid container spacing={1}>
            {baseValues.map((_, index) => (
              <Grid key={index} item lg={6} md={6} xs={6} sm={6}>
                <Typography
                  ref={(el) => (numbersRef.current[index] = el)}
                  sx={{ wordSpacing: 6 }}
                  variant="body2"
                  color="text.secondary"
                >
                  0
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StrengthGroupComponent;
