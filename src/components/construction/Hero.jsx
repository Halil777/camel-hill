import { Container, Typography, Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { titleStyle, subTitle } from "../../style/style.mjs";

const Hero = () => {
  const { t } = useTranslation();

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
            <Typography sx={titleStyle} color="orange">
              Düýeli Depe
            </Typography>
            <Typography
              data-aos="fade-left"
              data-aos-delay="600"
              sx={subTitle}
              color="#000"
            >
              {t("ecoTitle")}
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#000"
            >
              {t("ecoSubTitle")}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
