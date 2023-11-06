import { useEffect, useRef } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const WallThicknessComponent = () => {
  const numbersRef = useRef([]);
  const baseValues = [2.0, 2.6, 2.8, 3.0, 3.2, 3.4, 3.7, 4.0, 4.4, 4.8, 5.2]; // Replace with your base values
  const animationFrameIds = [];

  const animateNumber = (numberIndex) => {
    const numberRef = numbersRef.current[numberIndex];
    const baseValue = baseValues[numberIndex];
    let startValue = 0;
    let animationFrameId;

    const animate = () => {
      if (startValue < baseValue) {
        startValue += 0.1; // Adjust the increment value as needed
        numberRef.textContent = `${startValue.toFixed(1)} mm`; // Include "mm"
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
            Wall Thickness
          </Typography>
          <Grid container spacing={1}>
            {baseValues.map((_, index) => (
              <Grid key={index} item lg={4} md={4} xs={6} sm={6}>
                <Typography
                  ref={(el) => (numbersRef.current[index] = el)}
                  sx={{ wordSpacing: 6 }}
                  variant="body2"
                  color="text.secondary"
                >
                  0.0 mm;
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WallThicknessComponent;
