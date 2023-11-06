import { useState, useEffect } from "react";
import { Container, Typography, Box, Stack } from "@mui/material";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textColor, setTextColor] = useState("#fff");

  const back = "./coiled/coil1.jpg";
  const back1 = "./coiled/coil2.jpg";
  const back2 = "./coiled/coil3.png";

  const images = [back, back1, back2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);

      // Generate a random color for text
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setTextColor(randomColor);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImage, images]);

  const backgroundImageStyle = {
    background: `url(${images[currentImage]}) center/cover no-repeat`,
    height: "100vh",
    backgroundSize: "100% 100vh",
    transition: "background-image 2s ease-in-out",
    overflowX: "none",
  };

  return (
    <div>
      <>
        <Box sx={backgroundImageStyle}>
          <Container>
            <Stack spacing={2} pt={15}>
              <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
                <Typography
                  data-aos="fade-right"
                  data-aos-delay="600"
                  variant="h3"
                  color="#fff"
                >
                  Welcome to
                </Typography>
                <Typography variant="h3" color={textColor}>
                  Duyeli Depe
                </Typography>
              </Box>
              <Typography
                data-aos="fade-left"
                data-aos-delay="600"
                variant="h3"
                color="#fff"
              >
                Coiled Tubing Services
              </Typography>
              <Typography
                variant="h6"
                data-aos="fade-right"
                data-aos-delay="600"
                color="#fff"
              >
                Providing Quality Coiled Tubing Solutions
              </Typography>
            </Stack>
          </Container>
        </Box>
      </>
    </div>
  );
};

export default Hero;
