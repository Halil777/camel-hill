import { Container, Grid, Typography, Paper } from "@mui/material";
// import Lottie from "lottie-web";

const Highlights = () => {
  return (
    <>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
              {/* <Lottie options={lottieOptions1} height={120} width={120} /> */}
              <Typography variant="h5" gutterBottom>
                Service 1
              </Typography>
              <Typography variant="body2">Description of Service 1.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
              {/* <Lottie options={lottieOptions2} height={120} width={120} /> */}
              <Typography variant="h5" gutterBottom>
                Service 2
              </Typography>
              <Typography variant="body2">Description of Service 2.</Typography>
            </Paper>
          </Grid>
          {/* Add more Grid items for additional services */}
        </Grid>
      </Container>
    </>
  );
};

export default Highlights;
