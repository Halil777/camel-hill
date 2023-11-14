import { Container, Typography, Box, Stack } from "@mui/material";
import back1 from "../../home/home1.jpeg";
import { useTranslation } from "react-i18next";

const HeroOil = () => {
  const { t } = useTranslation();

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
                {t("homeTitle1")}
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
              {t("oilTitle")}
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              {t("oilSubTitle")}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HeroOil;
