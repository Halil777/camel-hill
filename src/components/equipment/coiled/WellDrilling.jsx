import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const WellDrilling = () => {
  const description = `
    Well drilling is a critical phase in the exploration and extraction of oil and gas resources. 
    Our expertise in well drilling encompasses core sampling during the drilling process. 
    Core sampling involves extracting cylindrical samples (cores) of rock and sediment from 
    the subsurface to analyze the geology, composition, and potential reservoirs. This process 
    provides valuable insights for reservoir characterization and resource estimation, 
    aiding in well planning and production optimization. We employ state-of-the-art equipment 
    and techniques to ensure accurate and representative core samples.
  `;

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ background: "lightgray" }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
            Downhole equipment for core sampling during well drilling
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "gray" }}>
          <Stack direction="row" spacing={3}>
            <img
              src="./coiled/coil1.jpg"
              style={{ width: "200px", height: "150px", borderRadius: 6 }}
              alt="coil"
            />
            <Typography color="#fff">{description}</Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WellDrilling;
