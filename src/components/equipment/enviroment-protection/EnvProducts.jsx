import { Button, Container, Grid, Stack, Typography } from "@mui/material";

const EnvProducts = () => {
  return (
    <div>
      <Container>
        <Typography mt={7} align="center" variant="h3">
          Equipment and Chemistry
        </Typography>
        <Typography mt={3} align="center" variant="h4" color="gray">
          Environment Protection Products
        </Typography>
        <Grid container spacing={10} mt={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  <img
                    src="./env-protection/env-p1.jpg"
                    style={{ width: "250px", height: "180px" }}
                    alt="name"
                  />
                  <Button>More</Button>
                </Stack>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h5">
                  Oil spill cleanup on and under water . Protection of the
                  coastline
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  non et consequuntur sit?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  <img
                    src="./env-protection/env-p2.jpg"
                    style={{ width: "250px", height: "180px" }}
                    alt="name"
                  />
                  <Button>More</Button>
                </Stack>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h5">
                  Cutting coolants seperation and utilization
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  non et consequuntur sit?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  <img
                    src="./env-protection/env-p3.jpg"
                    style={{ width: "250px", height: "180px" }}
                    alt="name"
                  />
                  <Button>More</Button>
                </Stack>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h5">
                  Waste water treatment from oil , fat and grease (FOG)
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  non et consequuntur sit?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  <img
                    src="./env-protection/env-p4.jpg"
                    style={{ width: "250px", height: "180px" }}
                    alt="name"
                  />
                  <Button>More</Button>
                </Stack>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h5">
                  Soil cleaning from oil , fat and grease (FOG)
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  non et consequuntur sit?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={4}>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  <img
                    src="./env-protection/env-p5.jpg"
                    style={{ width: "250px", height: "180px" }}
                    alt="name"
                  />
                  <Button>More</Button>
                </Stack>
              </Grid>
              <Grid lg={6} md={6} sm={12} xs={12}>
                <Typography variant="h5">
                  Vegetable oil extraction and seperation improvement during
                  production process (palm , cocount and olive oil)
                </Typography>
                <Typography color="gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  non et consequuntur sit?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EnvProducts;
