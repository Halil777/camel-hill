import { Container, Typography, Box, Stack } from "@mui/material";
import back1 from "../../home/home1.jpeg";

const HeroOil = () => {
  const backgroundImageStyle = {
    background: `url(${back1}) center/cover no-repeat`,
    height: "100vh",
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
                Добро пожаловать в
              </Typography>
              <Typography variant="h3" color="orange">
                Düýeli Depe
              </Typography>
            </Box>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              variant="h3"
              color="#fff"
            >
              Услуги в области нефти и газа
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              Доставка превосходства в энергетических услугах и инновациях
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HeroOil;
