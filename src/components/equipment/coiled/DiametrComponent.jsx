import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";

const DiametrComponent = () => {
  const numbersRef = useRef([]);
  const baseValues = [31.8, 33.5, 38.1, 44.5, 50.8, 60.3, 66.7, 73.0]; // Replace with your base values
  const animationFrameIds = [];

  const animateNumber = (numberIndex) => {
    const numberRef = numbersRef.current[numberIndex];
    const baseValue = baseValues[numberIndex];
    let startValue = 0;
    let animationFrameId;

    const animate = () => {
      if (startValue < baseValue) {
        startValue += 0.1; // Adjust the increment value as needed
        numberRef.textContent = `${startValue.toFixed(1)} mm`;
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
    <div>
      <Card sx={{ height: 200 }}>
        <CardActionArea>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Diametr
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
                    0.0 mm;
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DiametrComponent;
