import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
      title: "Drilling, Overhaul, and Reconstruction",
      subtitle: "Maintaining and Enhancing Wells",
      description:
        "Our services include drilling, overhaul, and reconstruction of wells at facilities, ensuring the maintenance and enhancement of your oil and gas assets.",
      showDescription: false,
      pic: "./oil/hydra8.jpg",
    },
    {
      title: "Plant Fleet",
      subtitle: "Cutting-Edge Equipment",
      description:
        "Our plant fleet comprises advanced equipment, including UPA-60, UPA-60/80, UPA-100, and MBU-160, ensuring efficiency and reliability in your drilling and extraction operations.",
      showDescription: false,
      pic: "./oil/hydra9.jpg",
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

      <Grid container spacing={4} mt={5}>
        {cardData.map((item, index) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
            <Card
              data-aos="fade-left"
              data-aos-delay="500"
              sx={{
                height: "100%",
                minHeight: "400px",
                pb: 3,
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HydraulicFracturing;
