import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { partnersItems } from "../../data/data";
import { Stack, Typography, Divider, Grid } from "@mui/material";

const Partners = () => {
  return (
    <div
      style={{ marginTop: "60px", marginBottom: "70px" }}
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <Stack pb={4}>
        <Divider sx={{ height: "30px" }} />
      </Stack>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography sx={{ color: "#0D1E50" }} variant="h6" pb={2}>
            Партнерство – ключ к совместному успеху, ведь вместе мы создаем не
            просто связи, а будущее
          </Typography>
        </Grid>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <Carousel
            showStatus={false} // Hide status indicators (dots)
            showArrows={false} // Show arrows for navigation
            showThumbs={false} // Hide thumbnail indicators (dots)
            autoPlay={true}
            autoFocus
            infiniteLoop
            interval={5000}
            swipeable
            transitionTime={2000}
            emulateTouch // Emulate touch behavior for desktops
            centerMode={true} // Enable center mode
            centerSlidePercentage={33.33} // Show 3 items at a time
            showIndicators={false}
          >
            {partnersItems.map((item, i) => (
              <div key={`home_carousel_items_key${i}`}>
                <Stack spacing={4} direction="row">
                  <img
                    src={item.pic}
                    alt={item.id}
                    style={{
                      width: "100px",
                    }}
                  />
                </Stack>
              </div>
            ))}
          </Carousel>
        </Grid>
      </Grid>
      <Divider sx={{ height: "30px" }} />
    </div>
  );
};

export default Partners;
