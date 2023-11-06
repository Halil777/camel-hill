import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const InflowControl = () => {
  const description = `
     Equipment for inflow control and monitoring (IMC) and well inflow monitoring is essential 
    for optimizing well performance and reservoir management. This specialized equipment allows 
    operators to control and monitor the flow of fluids into the wellbore, ensuring efficient 
    production and reservoir integrity. It includes a range of tools and devices designed for 
    inflow control, monitoring, and data collection. Our IMC equipment is engineered to meet 
    industry standards and support effective well management. Whether it's control valves, 
    sensors, or other monitoring tools, our equipment is designed for reliability and precision.
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
            Equipment for inflow control and monitoring (IMC) and well inflow
            monitoring
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
export default InflowControl;
