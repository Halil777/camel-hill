import { Container, Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

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
              {t("chemistryTitle")}
            </Typography>
          </Box>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
          >
            {t("chemistrySub")}
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
