import { Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

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
            {t("innTitle")}
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
          >
            {t("innSub")}
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
