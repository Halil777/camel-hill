import { Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { subTitle, titleStyle } from "../../style/style.mjs";

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
          <Typography sx={titleStyle} color="orange">
            Düýeli Depe
          </Typography>
          <Typography
            data-aos="fade-left"
            data-aos-delay="600"
            color="#fff"
            sx={subTitle}
          >
            {t("innTitle")}
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-right"
            data-aos-delay="600"
            color="#fff"
            sx={{ width: "60%" }}
          >
            {t("innSub")}
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Hero;
