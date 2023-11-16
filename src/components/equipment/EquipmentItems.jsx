import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  Button,
  AccordionDetails,
} from "@mui/material";
import { equipmentAndchemcistryItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";
import { titleStyle } from "../../style/style.mjs";

const EquipmentItems = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Typography mt={8} align="center" sx={titleStyle}>
          {t("chemistryTitle")}
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
          }}
          mt={2}
        >
          {t("chemistryDesc")}
        </Typography>
        <Grid container spacing={4} mt={5}>
          {equipmentAndchemcistryItems.map((item, i) => (
            <Grid
              key={`equipmentAndchemcistryItems_key_${i}`}
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <Card
                sx={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  "&:hover": {
                    boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.pic}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography pb={3} sx={{ fontSize: "26px" }} align="center">
                      {t(item.title)}
                    </Typography>
                    <Accordion>
                      <AccordionSummary sx={{ background: "transparent" }}>
                        <Button sx={{ textTransform: "none" }}>
                          {t("more")}
                        </Button>
                      </AccordionSummary>
                      <AccordionDetails sx={{ background: "#f3f3f3" }}>
                        <Typography variant="body2">
                          {t(item.description)}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default EquipmentItems;
