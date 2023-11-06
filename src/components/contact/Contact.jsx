import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  TypeSelector,
  RulerControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { partnersItems } from "../../data/data";

const Contact = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
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
          centerSlidePercentage={30.3}
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
      </Container>
      <Box
        sx={{
          background: "url(./innovative/contact2.webp)",
          pt: 7,
          mt: 5,
          pb: 10,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            data-aos="fade-up"
            data-aos-delay="500"
            align="center"
            mb={5}
            color="white"
          >
            Contact Us
          </Typography>
          <Grid container spacing={5}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* Contact Form */}
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="400"
                  label="Full Name"
                  variant="outlined"
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                />
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="500"
                  label="Email"
                  variant="outlined"
                  type="email"
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                />
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="600"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <YMaps>
                <div>
                  <Map
                    defaultState={{
                      center: [37.892945, 58.368871], // Ashgabat, Turkmenistan coordinates
                      zoom: 16,
                      controls: ["fullscreenControl"],
                    }}
                    style={{
                      width: "100%",
                      height: "330px",
                      boxShadow: "4px 4px 7px rgba(0,0,0,0.9)",
                    }}
                  >
                    <Placemark geometry={[37.892945, 58.368871]} />
                    <TypeSelector options={{ float: "right" }} />
                    <RulerControl options={{ float: "right" }} />
                    <GeolocationControl options={{ float: "left" }} />
                  </Map>
                </div>
                <FullscreenControl />
              </YMaps>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
