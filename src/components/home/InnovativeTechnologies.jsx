import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { innovativeItems } from "../../data/data";

const InnovativeTechnologies = () => {
  return (
    <>
      <Container>
        <Typography
          textAlign="center"
          mt={13}
          data-aos="fade-up"
          data-aos-delay="500"
          variant="h4"
          color="gray"
        >
          Innovative Technologies
        </Typography>
        <Typography textAlign="center" data-aos="fade-up" data-aos-delay="500">
          Innovative technologies have the power to revolutionize industries,
          drive economic growth, and improve our quality of life, from the
          development of self-driving cars to the potential of artificial
          intelligence in healthcare.
        </Typography>
        <Grid container mt={4} spacing={5} alignItems="center">
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            data-aos="fade-right"
            data-aos-delay="400"
          >
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
              showIndicators={false}
            >
              {innovativeItems.map((item, i) => (
                <div
                  key={`home_carousel_items_key${i}`}
                  style={{ padding: "12px" }}
                >
                  <Stack spacing={4} direction="row">
                    <img
                      src={item.pic}
                      alt={item.id}
                      style={{
                        width: "100%",
                        borderRadius: 4,
                        boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
                      }}
                    />
                  </Stack>
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <Box
              p={3}
              sx={{
                background: "url(./images/line1.jpg)",
                backgroundSize: "100% 100%",
                height: "70vh",
                width: "100%",
                borderRadius: 4,
                boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
                "&:hover": {
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                },
              }}
            >
              <Stack spacing={3}>
                <Typography fontWeight={700} variant="h6">
                  As we embrace innovative technologies, it&apos;s essential to
                  strike a balance between reaping their benefits and addressing
                  the ethical and environmental challenges they present,
                  ensuring a better and more sustainable future for all.
                </Typography>
              </Stack>
              <Stack mt={5} spacing={2} pl={7}>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Tank cleaning technology
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Innovative technologies for intratubular cleaning
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Inspection robots
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Remotedly Operated Vehicle
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default InnovativeTechnologies;
