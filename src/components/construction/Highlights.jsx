import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Highlights = () => {
  return (
    <>
      <Container>
        <Typography mt={7} variant="h4" align="center">
          Construction and Ecology
        </Typography>
        <Typography mt={1} variant="h6" align="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          fugiat nobis deleniti laudantium quae qui sit exercitationem autem
          possimus at odio cumque repudiandae necessitatibus sapiente, amet
          consectetur? Excepturi, pariatur corrupti.
        </Typography>
        <Grid container spacing={4} mt={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="./env-protection/cons1.jpg"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    Construction Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>More </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        Development of design and estimate documentation,
                        turnkey construction of buildings. Construction of all
                        types of objects, such as residential and commercial
                        buildings, industrial and infrastructure structures.
                        High level of qualifications and experience in the
                        construction industry. We also use modern equipment and
                        materials. We ensure the quality, reliability and safety
                        of our work. Our goal is to satisfy the needs and
                        expectations of our customers.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="./env-protection/eco.jpg"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    Ecology Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>More </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        ENVIRONMENTAL IMPACT ASSESSMENT (EIA) at all stages of
                        the project: from design to operation and closure.
                        Applying advanced methods and technologies to assess and
                        monitor the state of the environment, as well as
                        offering solutions to reduce and compensate for negative
                        impacts. Our mission is to promote environmental safety
                        and sustainable development of production. - Assessment
                        of workplaces; - Environmental Protection (EP); -
                        Maximum permissible emissions (MPE); - Development of an
                        environmental passport;
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Highlights;
