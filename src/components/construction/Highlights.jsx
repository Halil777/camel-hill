import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Highlights = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Typography mt={7} variant="h4" align="center">
          {t("constructionEcology")}
        </Typography>
        <Typography mt={1} sx={{ fontStyle: "italic" }}>
          {t("ecoDescription")}
        </Typography>

        <Grid container spacing={4} mt={5}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./construction/pic1.png"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    {t("ecoT1")}
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>
                        {t("more")}{" "}
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">{t("ecoDesc1")}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./equipment/eco5.avif"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    {t("ecoT2")}
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>
                        {t("more")}{" "}
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">{t("ecoDesc2")}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./equipment/eco6.png"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    {t("ecoT3")}
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>
                        {t("more")}{" "}
                      </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">{t("ecoDesc3")}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Highlights;
