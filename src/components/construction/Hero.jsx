import { useState, useEffect } from "react";

import { Container, Typography, Box, Stack } from "@mui/material";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const back = "./construction/cons1.webp";
  const back1 = "./construction/cons2.jpg";
  const back2 = "./construction/cons3.jpeg";
  const back3 = "./construction/cons4.jpg";

  const images = [back, back1, back2, back3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImage, images]);

  const backgroundImageStyle = {
    background: `url(${images[currentImage]}) center/cover no-repeat`,
    height: "100vh",
    backgroundSize: "100% 100vh", // Add this line to control the image size
    transition: "background-image 2s ease-in-out",
    overflovX: "none",
  };
  return (
    <>
      <Box sx={backgroundImageStyle}>
        <Container>
          <Stack spacing={2} pt={15}>
            <Typography variant="h4" color="orange">
              Duyeli Depe
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              variant="h3"
              color="#fff"
            >
              Economic Society: Building a Sustainable Future
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              Constructing Excellence, Preserving Ecology, and Innovating for
              Tomorrow
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
