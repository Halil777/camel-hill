import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DescriptionItems = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Grid container spacing={4} mt={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={2}>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle1")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem1_1")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle2")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem2_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem2_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem2_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem2_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem2_5")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle3")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem3_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem3_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem3_3")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle4")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      SDT-CTJ-121/67
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      SDT-CTJ-135/80
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      SDT-CTJ-185/100
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle5")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem5_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem5_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("equipmentAccordionItem5_3")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle6")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>SDT-ST 350</Typography>
                    <Typography sx={{ fontSize: 17 }}>SDT-ST 475</Typography>
                    <Typography sx={{ fontSize: 17 }}>SDT-ST 525</Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_11")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle7")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>SDT-CS350</Typography>
                    <Typography sx={{ fontSize: 17 }}>SDT-CS475</Typography>
                    <Typography sx={{ fontSize: 17 }}>SDT-CS675</Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_11")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle8")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      SDT-VS475LF/HF
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      SDT-VS675LF/HF
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>SDT-VS800</Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle9")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography
                      sx={{ fontSize: 17, textTransform: "capitalize" }}
                    >
                      {t("equipmentAccordionItem9_1")} :
                    </Typography>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>H40</Typography>
                      <Typography sx={{ fontSize: 17 }}>J55</Typography>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>M65</Typography>
                      <Typography sx={{ fontSize: 17 }}>L80</Typography>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>R95</Typography>
                      <Typography sx={{ fontSize: 17 }}>C90</Typography>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>T95</Typography>
                      <Typography sx={{ fontSize: 17 }}>P110</Typography>
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("equipmentAccordionTitle10")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography
                      sx={{ fontSize: 17, textTransform: "capitalize" }}
                    >
                      {t("equipmentAccordionItem10_1")} :
                    </Typography>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>Ст10</Typography>
                      <Typography sx={{ fontSize: 17 }}>Ст 20</Typography>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={{ fontSize: 17 }}>09Г2С</Typography>
                      <Typography sx={{ fontSize: 17 }}>10Г2А</Typography>
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={2}>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle1")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem1_8")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle2")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem2_6")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle3")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem3_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem3_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem3_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem3_4")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle4")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_8")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem4_9")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle5")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem5_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem5_2")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle6")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem6_8")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle7")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_8")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem7_9")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle8")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem8_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem8_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem8_3")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle9")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_8")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_9")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_10")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_11")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem9_12")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  sx={{ background: "lightgrey" }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography
                    sx={{ fontSize: 16 }}
                    gutterBottom
                    textTransform="capitalize"
                  >
                    {t("chemistryAccordionTitle10")}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#f3f3f3" }}>
                  <Stack spacing={2}>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_1")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_2")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_3")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_4")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_5")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_6")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_7")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_8")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_9")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_10")}
                    </Typography>
                    <Typography sx={{ fontSize: 17 }}>
                      {t("chemistryAccordionItem10_11")}
                    </Typography>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DescriptionItems;
