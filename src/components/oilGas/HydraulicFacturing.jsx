import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const HydraulicFracturing = () => {
  const [cardData, setCardData] = useState([
    {
      title: "Standard Hydraulic Fracturing",
      subtitle: "Efficient and Proven Method",
      description:
        "Our standard hydraulic fracturing process is a reliable and efficient method for extracting oil and gas. It involves high-pressure fluid injection to create fractures in the reservoir rock, allowing for the extraction of valuable resources.",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "Large Volume Fracturing",
      subtitle: "Maximizing Production",
      description:
        "Large volume hydraulic fracturing is a specialized technique designed to optimize production. With the capability to inject high volumes of fluid, we can efficiently access and extract hydrocarbons from deep underground reservoirs.",
      showDescription: false,
      pic: "./oil/hydra2.jpg",
    },
    {
      title: "Multistage Hydraulic Fracturing",
      subtitle: "Optimized Reservoir Stimulation",
      description:
        "Our multistage hydraulic fracturing technique involves multiple stages of fracturing to maximize reservoir stimulation and improve oil and gas recovery.",
      showDescription: false,
      pic: "./oil/hydra3.webp",
    },
    {
      title: "Foam Fracturing",
      subtitle: "Reducing Formation Damage",
      description:
        "Foam fracturing is a method that uses foam to carry proppant into fractures, reducing formation damage and improving the flow of hydrocarbons.",
      showDescription: false,
      pic: "./oil/hydra4.png",
    },
    {
      title: "Nitrogen Fracturing",
      subtitle: "Enhanced Efficiency",
      description:
        "Nitrogen fracturing is used to increase the efficiency of hydraulic fracturing by utilizing nitrogen gas as the fracturing fluid, resulting in reduced formation damage and improved oil and gas production.",
      showDescription: false,
      pic: "./oil/hydra5.jpeg_v03",
    },
    {
      title: "Hydrocarbon-Based Fracturing",
      subtitle: "Environmentally Friendly",
      description:
        "Our hydrocarbon-based fracturing method uses environmentally friendly hydrocarbons as the fracturing fluid, minimizing environmental impact while maximizing resource extraction.",
      showDescription: false,
      pic: "./oil/hydra6.jpg",
    },
    {
      title: "MSHF with Composite Plugs (Plug & Perf)",
      subtitle: "Precise Reservoir Control",
      description:
        "MSHF (Mechanical Specific Hydraulic Fracturing) with composite plugs, commonly known as 'Plug & Perf,' is a technique used for precise reservoir control and optimization of well performance.",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "MSHF on Coiled Tubing with Abrasive Perforation",
      subtitle: "Efficient and Versatile",
      description:
        "MSHF performed on coiled tubing with abrasive or cumulative perforation offers an efficient and versatile method for well intervention and stimulation.",
      showDescription: false,
      pic: "./oil/hydra7.jpg",
    },
    {
      title: "Drilling Crews for Production and Sidetracking",
      subtitle: "Experienced Teams",
      description:
        "Our experienced drilling crews are specialized in production drilling and sidetracking, providing expertise and efficiency in your drilling projects.",
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
        variant="h4"
        mt={12}
        data-aos="fade-down"
        data-aos-delay="500"
        align="center"
        color="orange"
      >
        Oil and Gas Services
      </Typography>
      <Typography
        variant="h6"
        data-aos="fade-down"
        data-aos-delay="500"
        align="center"
        color="gray"
      >
        Exploring Hydraulic Fracturing, Drilling, and Equipment
      </Typography>

      <Carousel
        showStatus={false} // Hide status indicators (dots)
        showArrows={true} // Show arrows for navigation
        showThumbs={false} // Hide thumbnail indicators (dots)
        autoPlay={true}
        autoFocus
        infiniteLoop
        interval={3000}
        swipeable
        transitionTime={2000}
        emulateTouch // Emulate touch behavior for desktops
        centerMode={true} // Enable center mode
        centerSlidePercentage={33.3}
        showIndicators={false}
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
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1" pb={4} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  {item.showDescription ? (
                    <Typography variant="body2" pb={3} color="text.secondary">
                      {item.description}
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
                      {item.showDescription
                        ? "Hide Description"
                        : "Show Description"}
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
