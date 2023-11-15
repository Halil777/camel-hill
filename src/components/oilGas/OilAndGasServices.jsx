import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { primaryService, secondaryService } from "../../data/data.mjs";

const OilAndGasServices = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography
        variant="h4"
        mt={12}
        textAlign="center"
        data-aos="fade-down"
        data-aos-delay="500"
        gutterBottom
      >
        {t("oilGas")}
      </Typography>

      <Grid container spacing={4}>
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <Typography align="center" variant="h4" mt={3} mb={3}>
            {t("primaryService")}
          </Typography>
        </Grid>
        {primaryService.map((item, i) => (
          <Grid key={i} item lg={6} md={6} sm={12} xs={12}>
            <Accordion>
              <AccordionSummary
                sx={{ background: "lightgrey" }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6" gutterBottom>
                  {t(item.title)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: "#f3f3f3" }}>
                <Typography variant="body2">{t(item.description)}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <Typography align="center" variant="h4" mt={3} mb={3}>
            {t("secondaryService")}
          </Typography>
        </Grid>
        {secondaryService.map((item, i) => (
          <Grid key={i} item lg={6} md={6} sm={12} xs={12}>
            <Accordion>
              <AccordionSummary
                sx={{ background: "lightgrey" }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="h6">{t(item.title)}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: "#f3f3f3" }}>
                <Typography variant="body2">{t(item.description)}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OilAndGasServices;
