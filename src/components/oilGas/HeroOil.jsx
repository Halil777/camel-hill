import { useState, useEffect } from "react";
import { Container, Typography, Box, Stack } from "@mui/material";

const HeroOil = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const back = "./oil/oil1.jpg";
  const back1 = "./oil/oil2.jpg";
  const back2 = "./oil/oil3.jpg";

  const images = [back, back1, back2];

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
    backgroundSize: "100% 100vh",
    transition: "background-image 2s ease-in-out",
    overflowX: "none",
  };
  return (
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
              <Typography variant="h3" color="orange">
                Duyeli Depe
              </Typography>
            </Box>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              variant="h3"
              color="#fff"
            >
              Oil and Gas Services
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              Delivering Excellence in Energy Services and Innovation
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HeroOil;
