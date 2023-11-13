import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { innovativeTechnologiesItems } from "../../data/data.mjs";

const TechnologyTypes = () => {
  return (
    <div>
      <Container>
        <Typography mt={8} align="center" variant="h3">
          Innovative Technologies
        </Typography>
        <Typography align="center" variant="h6" mt={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi
          sint pariatur quaerat et tempora ab nisi, itaque architecto assumenda
          ipsam nemo ducimus quisquam iusto inventore harum expedita repellendus
          beatae.
        </Typography>
        <Grid container spacing={4} mt={5}>
          {innovativeTechnologiesItems.map((item, i) => (
            <Grid
              key={`innovativeTechnologiesItems_key_${i}`}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card
                sx={{
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  minHeight: 320,
                  "&:hover": {
                    boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.pic}
                    alt={item.title}
                  />
                  <CardContent>
                    <Accordion>
                      <AccordionSummary sx={{ background: "transparent" }}>
                        <Tooltip title={item.title}>
                          <Typography>{item.title.slice(0, 20)}...</Typography>
                        </Tooltip>
                      </AccordionSummary>
                      <AccordionDetails sx={{ background: "#f3f3f3" }}>
                        <Typography align="center" variant="h6" pb={2}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default TechnologyTypes;
