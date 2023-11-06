import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

const PreventInterCasing = () => {
  const description = `
    Equipment to prevent inter-casing flows and gas manifestations in wells, often referred to as metal cord packers, is essential for maintaining well integrity and safety. These specialized devices are designed to seal the annular space between casing strings, preventing the unwanted flow of fluids or gas between them. By effectively isolating different zones within the well, this equipment ensures efficient wellbore management and minimizes the risk of gas manifestations. Our metal cord packers are engineered to meet industry standards and support safe and reliable well operations.
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
            Equipment to prevent inter-casing flows and gas manifestations in
            wells (metal cord packers)
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
export default PreventInterCasing;
