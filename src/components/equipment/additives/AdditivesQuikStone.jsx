import { Container, Grid, Stack, Typography } from "@mui/material";

const AdditivesQuikStone = () => {
  return (
    <div>
      <Typography mt={10} variant="h4" align="center">
        Additives QUICKSTONE™
      </Typography>
      <Container>
        <Grid container spacing={10} alignItems="center" mt={5}>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Stack spacing={5}>
              <Typography variant="h4">
                Advanced technology to eliminate catastrophic losses when
                drilling wells
              </Typography>
              <Typography variant="h5">
                QuickStone system - when other decisions to eliminate absorption
                injections of drilling fluid are ineffective.
              </Typography>
              <Typography variant="h5">
                QuickStone style - programmable hardening: instantaneous
                strength gain under given conditions.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <img
              src="./env-protection/addtv2.png"
              alt="add second"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdditivesQuikStone;
