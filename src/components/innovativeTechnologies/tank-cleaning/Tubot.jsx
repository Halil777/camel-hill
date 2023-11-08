import { Container, Grid, Stack, Typography } from "@mui/material";

const Tubot = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={5} mt={5} mb={7}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <Typography variant="h5">
                TUBOT develops and manufactures in-pipe robotic systems for
                non-destructive inspection and cleaning of complex branched
                sections of pipelines.
              </Typography>
              <Typography variant="h5">
                The company designs mobile robotic platforms that are comparable
                to and exceed the functionality of existing solutions for
                diagnostics and cleaning from various manufacturers.
              </Typography>
              <Typography variant="h5">
                The robotic system TUBOT is designed to assess the current
                technical condition of pipelines to prevent accidents, human
                casualties, and environmental damage.
              </Typography>
              <Typography variant="h5">
                TUBOT was founded by the nanotechnology center SIGMA.Novosibirsk
                in 2017.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src="./innovative/tubot1.jpg"
              style={{ widtH: "100%" }}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tubot;
