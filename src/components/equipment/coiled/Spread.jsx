import { Container, Grid, Stack, Typography } from "@mui/material";
import DiametrComponent from "./DiametrComponent";
import WallThicknessComponent from "./WallThicknessComponent";
import StrengthGroupComponent from "./StrengthGroupComponent ";
import DownholeEquipment from "./DownholeEquipment ";
import WellDrilling from "./WellDrilling";
import UpperWellCompletionEquipment from "./UpperWellCompletionEquipment";
import LowerWellCompletionEquipment from "./LowerWellCompletionEquipment";
import CarryingOutMshf from "./CarryingOutMshf";
import PreventInterCasing from "./PreventInterCasing";
import VariousTypesFilter from "./VariousTypesFilter";
import InflowControl from "./InflowControl";
import CasingString from "./CasingString";
import FloatForLowering from "./FloatForLowering";
import RunningCasing from "./RunningCasing";
import CoiledCarousel from "./CoiledCarousel";
import Additives from "../additives/Additives";

const Spread = () => {
  return (
    <div>
      <Container>
        <Typography
          mt={10}
          variant="h4"
          data-aos="fade-right"
          data-aos-delay="400"
          align="center"
        >
          Coiled Tubing
        </Typography>
        <Typography
          color="gray"
          align="center"
          mt={2}
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Coiled Tubing Technologies involve the use of continuous coiled tubing
          to perform various well intervention operations in the oil and gas
          industry. This technology offers advantages such as wellbore cleanout,
          nitrogen kick, and more. Coiled tubing units are equipped with a reel
          that contains the tubing, and it can be deployed into the well without
          the need for jointed pipe sections. This method is cost-effective and
          versatile, making it suitable for a wide range of applications in the
          field.
        </Typography>
        <Grid container spacing={8} mt={4} pb={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container spacing={5}>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <CoiledCarousel />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <DiametrComponent />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <StrengthGroupComponent />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <WallThicknessComponent />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={2} data-aos="fade-left" data-aos-delay="400">
              <DownholeEquipment />
              <WellDrilling />
              <UpperWellCompletionEquipment />
              <LowerWellCompletionEquipment />
              <CarryingOutMshf />
              <PreventInterCasing />
              <VariousTypesFilter />
              <InflowControl />
              <CasingString />
              <FloatForLowering />
              <RunningCasing />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Additives />
    </div>
  );
};

export default Spread;
