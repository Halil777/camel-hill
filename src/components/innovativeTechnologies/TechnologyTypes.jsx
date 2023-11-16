import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { innovativeTechnologiesItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";
import { titleStyle } from "../../style/style.mjs";

const TechnologyTypes = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <Typography mt={8} align="center" sx={titleStyle}>
          {t("innTitle2")}
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
          }}
          mt={2}
        >
          {t("innDesc1")}
        </Typography>
        <Grid container spacing={4} mt={5}>
          {innovativeTechnologiesItems.map((item, i) => (
            <Grid
              key={`innovativeTechnologiesItems_key_${i}`}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card
                sx={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  minHeight: 320,
                  "&:hover": {
                    boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.pic}
                    alt={t(item.title)}
                  />
                  <CardContent>
                    <Typography sx={{ height: 50 }} mb={3}>
                      {t(item.title)}
                    </Typography>
                    <Accordion>
                      <AccordionSummary sx={{ background: "transparent" }}>
                        <Button sx={{ textTransform: "none" }}>
                          {t("more")}
                        </Button>
                      </AccordionSummary>
                      <AccordionDetails sx={{ background: "#f3f3f3" }}>
                        <Typography align="center" variant="h6" pb={2}>
                          {t(item.title)}
                        </Typography>
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

export default TechnologyTypes;
