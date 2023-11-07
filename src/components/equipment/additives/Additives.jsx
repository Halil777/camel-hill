import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const Additives = () => {
  return (
    <>
      <Box mt={10} sx={{ background: "gray" }}>
        <Container>
          <Stack
            pt={5}
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Typography
              color="#fff"
              variant="h3"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Additives
            </Typography>
            <Typography
              color="green"
              data-aos="fade-down"
              data-aos-delay="700"
              variant="h3"
            >
              Biolube Green
            </Typography>
          </Stack>
          <Grid pb={5} mt={3} container spacing={5}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography
                variant="h5"
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                data-aos="fade-right"
                data-aos-delay="600"
              >
                Additive to drilling fluids. Eco-friendly and efficient solution
                to reduce friction during construction wells:
              </Typography>
              <Typography
                mt={4}
                color="#fff"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                The reagent reduces the coefficient of friction by more than 70%
                with minimal concentration. Consists of biodegradable,
                environmentally friendly raw materials. The product is effective
                over a wide temperature range. Over three years, about 50 wells
                were drilled using Biolub Green.
              </Typography>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img
                src="./env-protection/addtv1.png"
                alt="additives "
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Additives;
