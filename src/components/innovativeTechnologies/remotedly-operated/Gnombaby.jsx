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
  underwaterPartItemsBaby,
  tetherItemsBaby,
  cameraSystemItemsBaby,
  lightingSystemItemsBaby,
  navigationSystemBaby,
  surfaceControlUnitItemsBaby,
  systemSetItemsBaby,
  systemSetItemsBabyTwo,
} from "../../../data/data.mjs";

const GnomBaby = ({ handleDrawerClose }) => {
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
                  {underwaterPartItemsBaby.map((item, i) => (
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
                  {underwaterPartItemsBaby.map((item, i) => (
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
                  {tetherItemsBaby.map((item, i) => (
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
                  {tetherItemsBaby.map((item, i) => (
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
                  {cameraSystemItemsBaby.map((item, i) => (
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
                  {cameraSystemItemsBaby.map((item, i) => (
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
                  {lightingSystemItemsBaby.map((item, i) => (
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
                  {lightingSystemItemsBaby.map((item, i) => (
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
                  {navigationSystemBaby.map((item, i) => (
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
                  {navigationSystemBaby.map((item, i) => (
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
                  {surfaceControlUnitItemsBaby.map((item, i) => (
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
                  {surfaceControlUnitItemsBaby.map((item, i) => (
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
              {systemSetItemsBaby.map((item, i) => (
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
      case 7:
        return (
          <>
            <Stack spacing={1}>
              {systemSetItemsBabyTwo.map((item, i) => (
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
                  GNOM Baby
                </Typography>
                <img
                  src="./operated-vehicle/pic3.webp"
                  alt="gnom"
                  style={{ width: "80%" }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography color="#fff" variant="h6">
                The ROV Gnom Baby is a really micro sized vehicle that has all
                main features inherited from larger underwater systems. The
                vehicle combines low coast with the full set of Gnom
                capabilities.
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={10}>
              <img
                src="./operated-vehicle/pic31.png"
                alt="gnom"
                style={{ width: "50%" }}
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
                  GNOM Baby M-3-050-01
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
                    System basic set M-3-050-01
                  </Typography>
                }
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      color: value === 7 ? "#FFFF66" : "#fff",
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    System basic set M-3-050-02
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

GnomBaby.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
};

export default GnomBaby;
