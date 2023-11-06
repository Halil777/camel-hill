import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const UpperWellCompletionEquipment = () => {
  const description = `
     Upper well completion equipment plays a vital role in ensuring the functionality and 
    integrity of oil and gas wells. It encompasses a range of components and tools designed 
    to secure the wellbore, regulate fluid flow, and support downhole operations. Our upper 
    completion equipment is engineered to meet the industry's highest standards and 
    optimize well performance. Whether it's packers, tubing, safety valves, or other 
    completion tools, our equipment is designed for reliability and efficiency in the 
    completion phase of well construction.
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

export default UpperWellCompletionEquipment;
