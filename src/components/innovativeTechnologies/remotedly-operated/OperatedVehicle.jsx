import {
  Button,
  Container,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { operatedVehileItems } from "../../../data/data.mjs";

const OperatedVehicle = () => {
  return (
    <div>
      <Container>
        <Typography mt={10} variant="h3" align="center">
          Remotedly Operated Vehicle
        </Typography>
        <Grid container spacing={8} mt={3}>
          {operatedVehileItems.map((item, i) => (
            <Grid
              item
              key={`operated_items_key${i}`}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Stack direction="row" spacing={3} mt={2}>
                <img
                  src={item.pic}
                  alt={item.title}
                  style={{ width: "150px" }}
                />
                <Typography>{item.subTitle}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-end">
                <Tooltip title="Read More information">
                  <Button sx={{ textTransform: "none" }}>More</Button>
                </Tooltip>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OperatedVehicle;
