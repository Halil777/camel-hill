import { Container, Typography, Box, Stack } from "@mui/material";

const Hero = () => {
  const back2 = "./construction/cons5.jpg";

  const backgroundImageStyle = {
    background: `url(${back2}) center/cover no-repeat`,
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
              Düýeli Depe
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              variant="h3"
              color="#000"
            >
              Экономическое Общество: Строим Устойчивое Будущее
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#000"
            >
              Строим отличие, сохраняем экологию и инновации для завтра.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
