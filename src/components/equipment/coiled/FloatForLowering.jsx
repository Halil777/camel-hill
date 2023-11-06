import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const FloatForLowering = () => {
  const description = `
     Float equipment for lowering and cementing casing strings is a crucial component in the 
    well construction process. This specialized equipment is designed to facilitate the 
    lowering and cementing of casing strings in the wellbore, ensuring proper sealing 
    and well integrity. Our float equipment is engineered to meet industry standards 
    and enhance the efficiency and safety of casing operations. Whether it's float shoes, 
    float collars, or other casing accessories, our equipment is designed for reliability 
    and precision in casing string operations.
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
            Float equipment for lowering and cementing casing strings
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
export default FloatForLowering;
