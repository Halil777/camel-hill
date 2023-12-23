import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { titleStyle } from "../../style/style.mjs";

const HydraulicFracturing = () => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const [cardData, setCardData] = useState([
    {
      title: "carouselTitle1",
      subtitle: "carouselSubTitle1",
      description: "carouselDescription1",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "carouselTitle2",
      subtitle: "carouselSubTitle2",
      description: "carouselDescription2",
      showDescription: false,
      pic: "./oil/hydra2.jpg",
    },
    {
      title: "carouselTitle3",
      subtitle: "carouselSubTitle3",
      description: "carouselDescription3",
      showDescription: false,
      pic: "./oil/hydra3.webp",
    },
    {
      title: "carouselTitle4",
      subtitle: "carouselSubTitle4",
      description: "carouselDescription4",
      showDescription: false,
      pic: "./oil/hydra4.png",
    },
    {
      title: "carouselTitle5",
      subtitle: "carouselSubTitle5",
      description: "carouselDescription5",
      showDescription: false,
      pic: "./oil/hydra5.jpeg_v03",
    },
    {
      title: "carouselTitle6",
      subtitle: "carouselSubTitle6",
      description: "carouselDescription6",
      showDescription: false,
      pic: "./oil/hydra6.jpg",
    },
    {
      title: "carouselTitle7",
      subtitle: "carouselSubTitle7",
      description: "carouselDescription7",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "carouselTitle8",
      subtitle: "carouselSubTitle8",
      description: "carouselDescription8",
      showDescription: false,
      pic: "./oil/hydra7.jpg",
    },
    {
      title: "carouselTitle9",
      subtitle: "carouselSubTitle9",
      description: "carouselDescription9",
      showDescription: false,
      pic: "./oil/hydra10.png",
    },
  ]);

  const toggleDescription = (index) => {
    const updatedCardData = [...cardData];
    updatedCardData[index].showDescription =
      !updatedCardData[index].showDescription;
    setCardData(updatedCardData);
  };

  return (
    <Container>
      <Typography
        sx={titleStyle}
        mt={12}
        data-aos="fade-down"
        data-aos-delay="500"
        align="center"
        color="orange"
      >
        {t("oilGas")}
      </Typography>
      <Typography
        data-aos="fade-down"
        data-aos-delay="500"
        color="gray"
        sx={{
          fontStyle: "italic",
          textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
        }}
      >
        {t("oilDesc1")}
      </Typography>

      <Carousel
        showStatus={false} // Hide status indicators (dots)
        showArrows={true} // Show arrows for navigation
        showThumbs={false} // Hide thumbnail indicators (dots)
        autoPlay={true}
        autoFocus
        infiniteLoop
        interval={isSmallScreen ? 5000 : 3500}
        swipeable
        transitionTime={3000}
        emulateTouch // Emulate touch behavior for desktops
        centerMode={true} // Enable center mode
        centerSlidePercentage={isSmallScreen ? 100 : 33.3}
        showIndicators={false}
        stopOnHover={true}
      >
        {cardData.map((item, index) => (
          <div key={index} style={{ marginTop: "80px" }}>
            <Card
              data-aos="fade-left"
              data-aos-delay="500"
              sx={{
                height: "100%",
                minHeight: "400px",
                ml: 5,
                "&:hover": {
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.6)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.pic}
                  alt={item.title}
                  width={"100%"}
                />
                <CardContent>
                  <Stack height={60}>
                    <Typography gutterBottom variant="h6" component="div">
                      {t(item.title)}
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1" pb={4} color="text.secondary">
                    {t(item.subtitle)}
                  </Typography>
                  {item.showDescription ? (
                    <Typography variant="body2" pb={3} color="text.secondary">
                      {t(item.description)}
                    </Typography>
                  ) : null}
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="flex-end"
                    sx={{ paddingRight: 3 }}
                  >
                    <Button
                      sx={{ width: 180, textTransform: "none" }}
                      onClick={() => toggleDescription(index)}
                      variant="outlined"
                    >
                      {item.showDescription ? t("hideDesc") : t("showDesc")}
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default HydraulicFracturing;
