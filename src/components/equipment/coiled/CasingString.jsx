import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const CasingString = () => {
  const description = `
     Casing string equipment, including centralizers and turbolizers, is a critical component 
    in well construction and completion. Centralizers help ensure the proper positioning 
    of casing strings within the wellbore, maintaining adequate space for cementing and 
    reducing the risk of uneven cement distribution. Turbolizers enhance fluid flow and 
    wellbore integrity. Our casing string equipment is engineered to meet industry standards 
    and optimize well performance. Whether it's centralizers, turbolizers, or other casing 
    accessories, our equipment is designed for reliability and efficiency in the casing 
    phase of well construction.
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
            Casing string equipment, centralizers, turbolizers
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
export default CasingString;
