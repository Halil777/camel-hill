import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {
  underwaterPartItemsStandart,
  tetherItemsStandart,
  cameraSystemItemsStandart,
  lightingSystemItemsStandart,
  navigationSystemStandart,
  surfaceControlUnitItemsStandart,
  systemSetItemsStandart,
} from "../../../data/data.mjs";

const GnomStandart = ({ handleDrawerClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {underwaterPartItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {underwaterPartItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {tetherItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {tetherItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {cameraSystemItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {cameraSystemItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {lightingSystemItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {lightingSystemItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {navigationSystemStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {navigationSystemStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 5:
        return (
          <>
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {surfaceControlUnitItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                    >
                      {item.title}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack spacing={3}>
                  {surfaceControlUnitItemsStandart.map((item, i) => (
                    <Typography
                      key={`under_water_items_key${i}`}
                      color="#fff"
                      variant="h6"
                      fontWeight={600}
                    >
                      {item.subTitle}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </>
        );
      case 6:
        return (
          <>
            <Stack spacing={1}>
              {systemSetItemsStandart.map((item, i) => (
                <Typography
                  key={`under_water_items_key${i}`}
                  color="#fff"
                  variant="h6"
                >
                  - {item}
                </Typography>
              ))}
            </Stack>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          pt: 4,
          background: "rgb(113, 113, 243)",
          color: "#fff",
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="flex-end">
            <Tooltip title="Close">
              <IconButton onClick={handleDrawerClose}>
                <ClearIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
          </Stack>
          <Grid container spacing={5} alignItems="center" pb={5}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Stack spacing={10}>
                <Typography variant="h4" color="#FFFF66">
                  GNOM Standart
                </Typography>
                <img
                  src="./operated-vehicle/pi1.webp"
                  alt="gnom"
                  style={{ width: "80%" }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography color="#fff" variant="h6">
                A multi-purpose ROV system Gnom standard has several
                modifications which can be applied for various underwater survey
                operations.
              </Typography>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <img
                src="./operated-vehicle/pic21.png"
                alt="gnom"
                style={{ width: "70%" }}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <img
                src="./operated-vehicle/pic22.png"
                alt="gnom"
                style={{ width: "70%" }}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Stack spacing={3}>
                <Typography fontWeight={700} color="#FFFF66" varinat="h6">
                  ROV technical specifications
                </Typography>
                <Typography
                  fontWeight={700}
                  color="#FFFF66"
                  sx={{ fontSize: 28 }}
                >
                  GNOM Standard (C-4-150-1-01)
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box pb={10}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FFFF66", // Indicator color
                },
              }}
            >
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 0 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    UNDERWATER PART
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 1 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    TETHER
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 2 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    CAMERA SYSTEM
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 3 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    LIGHTING SYSTEM
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 4 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    NAVIGATION SYSTEM
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 5 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    SURFACE CONTROL UNIT
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 6 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    System basic set C-4-150-1-01
                  </Typography>
                }
              />
            </Tabs>
            <Stack mt={5}>{renderTabContent()}</Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

GnomStandart.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
};

export default GnomStandart;
