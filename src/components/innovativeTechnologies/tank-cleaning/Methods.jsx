import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider } from "antd";

const Methods = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Tank Cleaning Methods
      </Typography>
      <Grid container spacing={10} mt={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h5" align="center" mb={4}>
            Mechanical Cleaning
          </Typography>
          <Typography paragraph>
            Mechanical cleaning involves physically removing contaminants from
            the tank, often using tools and equipment such as scrapers, brushes,
            and high-pressure water jets. It is effective for removing solid
            residues and can be followed by other cleaning methods.
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img src="./innovative/inno1.png" style={{ width: "100%" }} alt="" />
        </Grid>
        <Divider style={{ marginTop: 100 }} />
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img src="./innovative/inno2.png" style={{ width: "100%" }} alt="" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h5" align="center" mb={4}>
            Chemical Cleaning
          </Typography>
          <Typography paragraph>
            Chemical cleaning relies on the use of cleaning agents, solvents,
            and detergents to dissolve and remove contaminants. This method is
            suitable for various types of tanks and can be customized based on
            the specific residues to be cleaned.
          </Typography>
        </Grid>
        <Divider style={{ marginTop: 100 }} />
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h5" align="center" mb={4}>
            Biological Cleaning
          </Typography>
          <Typography paragraph>
            Biological cleaning employs the use of naturally occurring
            microorganisms to break down and digest organic contaminants. It is
            an eco-friendly method often used for wastewater treatment tanks and
            biogas production tanks.
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img src="./innovative/inno3.jpg" style={{ width: "100%" }} alt="" />
        </Grid>
        <Divider style={{ marginTop: 100 }} />
      </Grid>
    </Container>
  );
};

export default Methods;
