import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const WhoWeAre = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            lg={7}
            md={7}
            sm={12}
            xs={12}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <Box
              p={3}
              sx={{
                background: "url(./images/line.avif)",
                backgroundSize: "100% 100%",
                height: "70vh",
                width: "100%",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
                borderRadius: 4,
                transition: "0.9s ease",
                "&:hover": {
                  boxShadow: "3px 3px 7px rgba(0,0,0,0.9)",
                },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={700}>
                  Who We Are
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  Providing affordable and reliable energy
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
              </Stack>
              <Stack mt={5} spacing={2} pl={7}>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Clean energy for a bright future
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Sustainable development
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <CheckIcon sx={{ color: "green" }} />
                  <Typography
                    sx={{ fontSize: "18px", fontWeight: 700, color: "gray" }}
                  >
                    Improving access to energy
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src="./images/whoWeAre.jpg"
              alt="who we are"
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhoWeAre;
