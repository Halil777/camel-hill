import { Container, Stack, Box, Typography } from "@mui/material";

const Hero = () => {
  const back = "./equipment/back2.jpg";

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${back}) center/cover no-repeat`,
    height: "100vh",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
            <Typography variant="h3" color="orange">
              Düýeli Depe
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              variant="h3"
              color="#fff"
            >
              Оборудование и Химия
            </Typography>
          </Box>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
          >
            Инновационные решения для эффективных технологических процессов и
            экологической устойчивости.
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
