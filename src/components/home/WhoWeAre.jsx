import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Typography variant="h3" mt={6} align="center">
          О НАС
        </Typography>
        <Typography align="center" mt={2} sx={{ fontStyle: "italic" }}>
          От всего коллектива приветствуем Вас на сайте и выражаем благодарность
          за интерес, проявленный к нашей компании. ХО «Дуйели Депе» -
          современная, динамично развивающаяся компания, объединившая в себе
          высококвалифицированных специалистов с многолетним опытом работы и
          знаниями в своей области. Начавшая свою деятельность 2021 году в
          строительстве и оказание услуг по оценке воздействия на окружающую
          среду (ОВОС) , способствуя устойчивому развитию для таких компаний как
          Эни Туркменистан , филиал Китайская Национальная Нефтегазовая Компания
          в Туркменистане, Драгон Ойл и Чалик Энерджи. Сотрудничая с передовыми
          производителями оборудовании, химии, сервисными компаниями
          нефтегазовой отрасли и технологическими компаниями производящие
          инновационные разработки во всех отраслях промышленности позволяет нам
          предлагать высококачественные продукты, услуги и решение на рынке
          Туркменистана. В нашей работе мы стараемся найти индивидуальный подход
          к каждому и нацелены на долговременное и взаимовыгодное
          сотрудничество. Мы надеемся, что обратившись однажды к нам Вы станете
          нашим постоянным клиентом.
        </Typography>
        <Grid container spacing={3} mt={2}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card
              onClick={() => navigate("/construction-and-ecology")}
              sx={{
                boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./who/who1.jpg"
                  alt="src"
                />
                <CardContent>
                  <Typography align="center">
                    Строительство / Экология
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card
              onClick={() => navigate("/oil-gas")}
              sx={{
                boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./who/who3.jpg"
                  alt="src"
                />
                <CardContent>
                  <Typography align="center">Нефтегазовые услуги</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card
              onClick={() => navigate("/equipment-and-chemistry")}
              sx={{
                boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./who/who2.jpg"
                  alt="src"
                />
                <CardContent>
                  <Typography align="center">Оборудование / Химия</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Card
              onClick={() => navigate("/innovative-technologies")}
              sx={{
                boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                "&:hover": {
                  boxShadow: "4px 4px 6px rgba(0,0,0,0.7)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="./who/who4.jpg"
                  alt="src"
                />
                <CardContent>
                  <Typography align="center">
                    Инновационные Технологии
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WhoWeAre;
