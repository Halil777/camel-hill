import { Container, Grid, Stack, Typography } from "@mui/material";

const Technology = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={5} mt={5} mb={10}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src="./innovative/tubot2.png"
              style={{ width: "100%" }}
              alt="tubot picture 2"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <Typography variant="h4" textTransform="uppercase">
                Technology
              </Typography>
              <Typography variant="h5">
                1. External pipe diameter (Dout) - 530 mm
              </Typography>
              <Typography variant="h5">
                2. Minimum internal pipe diameter - 80% of the external
              </Typography>
              <Typography variant="h5">
                3. Minimum axial radius for a 90° turn - 1.5 DN
              </Typography>
              <Typography variant="h5">
                4. Useful load capacity - 2000 kg
              </Typography>
              <Typography variant="h5">
                5. Explosion safety in accordance with IEC 60079-14
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Technology;
