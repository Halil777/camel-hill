import { Container, Stack, Typography } from "@mui/material";

const Hero = () => {
  const back = "./innovative/back.jpg";

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${back}) center/cover no-repeat`,
    height: "100vh",
  };

  return (
    <div style={backgroundImageStyle}>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h3" color="orange">
            Düýeli Depe
          </Typography>
          <Typography
            data-aos="fade-left"
            data-aos-delay="600"
            variant="h3"
            color="#fff"
          >
            Инновационные Технологии: Лидерство в Прогрессе
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
          >
            Разрабатываем и внедряем передовые технологии для оптимизации
            процессов и создания экологически устойчивого будущего.
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
