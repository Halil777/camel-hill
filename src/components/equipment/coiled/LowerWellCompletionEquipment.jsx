import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const LowerWellCompletionEquipment = () => {
  const description = `
   Lower well completion equipment is an essential component in the oil and gas industry, 
    responsible for ensuring the successful construction and operation of wells. This equipment 
    includes a variety of tools and devices designed to secure the wellbore, regulate fluid 
    flow, and support downhole operations. Our lower completion equipment is engineered to meet 
    industry standards and enhance the performance and safety of well construction. 
    Whether it's casing heads, hangers, or production tubing, our equipment is designed for 
    reliability and efficiency in the completion phase of well construction.
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
            Upper Well Completion Equipment
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

export default LowerWellCompletionEquipment;
