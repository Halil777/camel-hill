import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const VariousTypesFilter = () => {
  const description = `
   Well filters of various types are integral to maintaining wellbore integrity and ensuring 
    the quality of produced fluids. These filters are designed to prevent unwanted particles 
    and contaminants from entering the wellbore and production equipment. They play a crucial 
    role in safeguarding the reservoir and optimizing well performance. Our range of well 
    filters includes different types tailored to specific well conditions and requirements. 
    Whether it's sand screens, gas separation filters, or other filtration solutions, our 
    well filters are engineered for reliability and efficiency.
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
            Well filters of various types
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
export default VariousTypesFilter;
