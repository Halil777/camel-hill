import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const CarryingOutMshf = () => {
  const description = `
    Downhole equipment for drilling wells is an essential part of the drilling process. 
    It includes a wide range of tools and devices designed to facilitate drilling, 
    casing, and completion of oil and gas wells. This equipment is crucial for ensuring 
    the integrity and efficiency of the wellbore and plays a significant role in 
    the extraction of hydrocarbons. Whether it's drilling bits, casing hangers, 
    packers, or other downhole tools, our equipment is built to meet industry 
    standards and support successful well operations.
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
            Downhole well completion equipment for carrying out MSHF operations
            (multistage hydraulic fracturing),
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
export default CarryingOutMshf;
