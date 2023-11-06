// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { homeCarouselItems } from "../../data/data";

import {
  Container,
  Stack,
  Grid,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

const CarouselComp = () => {
  return (
    <div>
      {/* <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          autoPlay
          autoFocus
          infiniteLoop
          interval={10000}
          swipeable
          transitionTime={2000}
        >
          {homeCarouselItems.map((item, i) => (
            <div key={`home_carousel_items_key${i}`}>
              <Grid container alignItems="center" spacing={10}>
                <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
                  <Stack spacing={10}>
                    <Typography
                      data-aos="fade-right"
                      data-aos-delay="600"
                      variant="h3"
                      sx={{ textTransform: "uppercase", color: "#fff" }}
                    >
                      {item.title}
                    </Typography>
                    <Button
                      data-aos="fade-up"
                      data-aos-delay="600"
                      sx={{
                        width: "170px",
                        background: "orange",
                        textTransform: "none",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        transition: "0.3s",
                        "&:hover": {
                          background: "#fff",
                          color: "orange",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                      variant="contained"
                    >
                      More
                    </Button>
                  </Stack>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} p={5}>
                  <img
                    data-aos="fade-left"
                    data-aos-delay="600"
                    src={item.pic}
                    style={{
                      borderRadius: "100px 0px 100px 0px",
                      height: "320px",
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          ))}
        </Carousel> */}
    </div>
  );
};

export default CarouselComp;
