import { partnersItems } from "../../data/data";
import { Stack, Typography, Divider, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{ marginTop: "60px", marginBottom: "70px" }}
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <Stack pb={4}>
        <Divider sx={{ height: "30px" }} />
      </Stack>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography sx={{ color: "#0D1E50" }} variant="h6" pb={2}>
            {t("partnership")}
          </Typography>
        </Grid>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <Stack direction="row" justifyContent="space-between">
            {partnersItems.map((item, i) => (
              <img
                key={`home_carousel_items_key${i}`}
                src={item.pic}
                alt={item.id}
                style={{
                  width: "100px",
                }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ height: "30px" }} />
    </div>
  );
};

export default Partners;
