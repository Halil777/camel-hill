import { useState, useEffect } from "react";
import { Container, Typography, Box, Stack } from "@mui/material";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const back = "./env-protection/env1.jpg";
  const back1 = "./coiled/coil2.jpg";
  //   const back2 = "./coiled/coil3.png";

  const images = [back, back1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
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
              <Typography
                data-aos="fade-right"
                data-aos-delay="600"
                variant="h3"
                color="#fff"
              >
                Environment Protection Products
              </Typography>
              <Typography
                variant="h6"
                data-aos="fade-right"
                data-aos-delay="600"
                color="orange"
              >
                Safeguarding the Planet for a Sustainable Future
              </Typography>
            </Stack>
          </Container>
        </Box>
      </>
    </div>
  );
};

export default Hero;
