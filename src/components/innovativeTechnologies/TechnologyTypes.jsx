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
  Typography,
  Button,
} from "@mui/material";
import { innovativeTechnologiesItems } from "../../data/data.mjs";

const TechnologyTypes = () => {
  return (
    <div>
      <Container>
        <Typography mt={8} align="center" variant="h3">
          Инновационные Технологии
        </Typography>
        <Typography sx={{ fontStyle: "italic" }} mt={2}>
          В современном мире инновации являются естественным и незаменимым
          процессом для существования промышленности. Условия, выстраивающиеся
          на рынке, говорят о том, что дальнейшее развитие государства и
          экономики не может обойтись без инновационного пути развития. В связи
          с этим наша компания предлагает роботизированные технические
          разработки мировых производителей для повышение конкурентоспособности
          предприятия. Развитие промышленности сопровождается улучшением ее
          технологического уровня, повышением экономической эффективности.
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
                    <Typography sx={{ height: 50 }} mb={3}>
                      {item.title}
                    </Typography>
                    <Accordion>
                      <AccordionSummary sx={{ background: "transparent" }}>
                        <Button sx={{ textTransform: "none" }}>
                          Подробное
                        </Button>
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
