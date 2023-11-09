import {
  Button,
  Container,
  Grid,
  Stack,
  Tooltip,
  Typography,
  Drawer,
} from "@mui/material";
import { operatedVehileItems } from "../../../data/data.mjs";
import { useState } from "react";
import SuperGnom from "./SuperGnom";
import GnomStandart from "./GnomStandart";
import Gnombaby from "./Gnombaby";
import RovGnomPro from "./RovGnomPro";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const OperatedVehicle = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDrawerOpen = (item, component) => {
    setSelectedItem(item);
    setSelectedComponent(component);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setSelectedItem(null);
    setSelectedComponent(null);
    setDrawerOpen(false);
  };

  return (
    <div>
      <Container>
        <Typography sx={{ color: "#fff" }} variant="h3" align="center">
          Remotely Operated Vehicle
        </Typography>
        <Grid container spacing={8} mt={1} sx={{ color: "#fff" }}>
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
                <Tooltip title={`Read More information about ${item.title}`}>
                  <Button
                    onClick={() => handleDrawerOpen(item, i + 1)}
                    sx={{ textTransform: "none", color: "#fff" }}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                  >
                    More
                  </Button>
                </Tooltip>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Drawer anchor="bottom" open={drawerOpen} onClose={handleDrawerClose}>
          {selectedItem && selectedComponent === 1 && (
            <SuperGnom
              item={selectedItem}
              handleDrawerClose={handleDrawerClose}
            />
          )}
          {selectedItem && selectedComponent === 2 && (
            <GnomStandart
              item={selectedItem}
              handleDrawerClose={handleDrawerClose}
            />
          )}
          {selectedItem && selectedComponent === 3 && (
            <Gnombaby
              item={selectedItem}
              handleDrawerClose={handleDrawerClose}
            />
          )}
          {selectedItem && selectedComponent === 6 && (
            <RovGnomPro
              item={selectedItem}
              handleDrawerClose={handleDrawerClose}
            />
          )}
        </Drawer>
      </Container>
    </div>
  );
};

export default OperatedVehicle;
