import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, Tooltip } from "@mui/material";
import { envProducts } from "../../../data/data.mjs";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function EnvProducts() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDrawer = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <Container>
        <Typography mt={7} align="center" variant="h3">
          Equipment and Chemistry
        </Typography>
        <Typography mt={3} align="center" variant="h4" color="gray">
          Environment Protection Products
        </Typography>
        <Grid container spacing={7} mt={5}>
          {envProducts.map((product, index) => (
            <Grid item lg={6} md={6} sm={12} mt={2} xs={12} key={index}>
              <Grid container spacing={4}>
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <Stack spacing={2}>
                    <img
                      src={product.image}
                      style={{ width: "250px", height: "180px" }}
                      alt={product.name}
                    />
                    <Tooltip title="Read More Information">
                      <Button
                        endIcon={<KeyboardDoubleArrowRightIcon />}
                        onClick={() => toggleDrawer(product)}
                        sx={{
                          textTransform: "none",
                          width: 100,
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        More
                      </Button>
                    </Tooltip>
                  </Stack>
                </Grid>
                <Grid lg={6} md={6} sm={12} xs={12}>
                  <Stack spacing={2}>
                    <Typography variant="h5">
                      {product.name.slice(0, 50)}
                    </Typography>
                    <Typography>{product.description.slice(0, 100)}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Drawer
        anchor="right"
        style={{ width: "50vw" }}
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <Stack alignItems={"start"} padding={3}>
          <Tooltip title="Close ">
            <IconButton onClick={closeDrawer}>
              <ClearIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <div style={{ width: "50vw", overflowX: "auto" }}>
          <div style={{ textAlign: "center" }}>
            {selectedProduct && (
              <div style={{ padding: "16px" }}>
                <Typography variant="h5">{selectedProduct.name}</Typography>
                <Typography>{selectedProduct.description}</Typography>
              </div>
            )}
          </div>
          <Grid container p={4} spacing={4}>
            {envProducts.map((item, i) => (
              <Grid key={`drawer_key${i}`} item lg={4} md={6} xs={12} sm={12}>
                <img
                  src={item.image}
                  alt="drawer images"
                  style={{ width: "260px", height: "200px" }}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Drawer>
    </div>
  );
}

export default EnvProducts;
