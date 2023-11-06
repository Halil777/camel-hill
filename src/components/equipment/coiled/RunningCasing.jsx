import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const RunningCasing = () => {
  const description = `
    Working shoes for running casing strings are a critical component in the drilling and well 
    construction process. These specialized shoes are designed to guide and support the casing 
    strings as they are lowered into the wellbore, ensuring precise placement and effective 
    wellbore integrity. Our working shoes are engineered to meet industry standards and 
    enhance the efficiency and safety of casing operations. Whether it's guide shoes, 
    centralizers, or other casing accessories, our equipment is designed for reliability and 
    precision in casing string operations.
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
            Working shoes for running casing strings
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

export default RunningCasing;
