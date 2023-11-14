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
          Строительство и Экология
        </Typography>
        <Typography mt={1} align="center" sx={{ fontStyle: "italic" }}>
          Наша компания специализируется на строительстве и экологии. Мы
          придерживаемся принципов качества и безопасности в строительных
          проектах, строя жилые, коммерческие и промышленные объекты с акцентом
          на инновационные методы и ответственность перед окружающей средой. В
          области экологии мы предоставляем такие услуги, как экологическая
          экспертиза, разработка проектов оценки воздействия на окружающую
          среду, а также комплексная оценка всех экологических, экономических и
          социальных параметров природной среды на территории объекта. Наши
          специалисты проводят мониторинг экологии, выполняют необходимые
          инженерно-экологические и геологические исследования для изучения
          влияния проекта на внешнюю среду и расчета природоохранных
          мероприятий. Кроме того, мы занимаемся технологиями очистки воды,
          предлагая решения для эффективного использования водных ресурсов и
          очистки сточных вод. В мире, где вода становится все более важным
          ресурсом для социально-экономического развития, наша компания
          стремится предоставить технологии, приносящие пользу как людям, так и
          природе.
        </Typography>

        <Grid container spacing={4} mt={5}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./construction/pic1.png"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    Строительство
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>Подробное </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        При строительстве мы отличаемся в вопросах качества и
                        безопасности. Строим под ключ жилые, коммерческие,
                        промышленные объекты с акцентом на использование
                        инновационных методов и ответственностью перед
                        окружающей средой.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./equipment/eco5.avif"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    Экология
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>Подробное </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        Компания оказывает свои услуги по экологической
                        экспертизе, разработка проекта ОВОС, производит
                        комплексную оценку всех экологических, экономических,
                        социальных параметров природной среды на территории
                        хозяйственного объекта и согласование в экспертизе
                        проекта. Наши специалисты производят мониторинг экологии
                        местности, выполняют все необходимые
                        инженерно-экологические и геологические изыскания для
                        изучения влияние детальности объекта на внешнюю среду, а
                        также производят расчет природоохранных мероприятий.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
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
                  height="250"
                  image="./equipment/eco6.png"
                  alt="Construction"
                />
                <CardContent>
                  <Typography mb={3} variant="h6">
                    Очистка воды
                  </Typography>

                  <Accordion>
                    <AccordionSummary sx={{ background: "transparent" }}>
                      <Button sx={{ textTransform: "none" }}>Подробное </Button>
                    </AccordionSummary>
                    <AccordionDetails sx={{ background: "#f3f3f3" }}>
                      <Typography variant="body2">
                        В наши дни, когда вода с каждым днем приобретает все
                        больше значение социально-экономического развития, на
                        повестке дня всегда стоит вопрос об эффективном
                        использовании водных источников и очистки сточных вод.
                        Компания стремится обеспечить технологиями для
                        обеспечения пользу людям и природе
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
