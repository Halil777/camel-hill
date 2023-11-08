import { Container, Grid, Stack, Typography } from "@mui/material";

const RoboticSystem = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={5} mt={2} mb={15}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <Typography variant="h4" textTransform="uppercase">
                Robotic System
              </Typography>
              <Typography variant="h5">
                Modular Design (ATM + Modules)
              </Typography>
              <Typography variant="h5">Autonomous traction module:</Typography>
              <Typography variant="h5">· 3 traction units</Typography>
              <Typography variant="h5">· Front camera</Typography>
              <Typography variant="h5">· Control system</Typography>
              <Typography variant="h5">
                · Flexible bellows connections integrated with electronic blocks
              </Typography>
              <Typography variant="h5">
                · Cable connection to the rear-view camera
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              src="./innovative/tubot3.png"
              style={{ width: "100%", pointerEvents: "none" }}
              alt="tubot third picture"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RoboticSystem;
