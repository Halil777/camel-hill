import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const HydraulicFracturing = () => {
  const [cardData, setCardData] = useState([
    {
      title: "Стандартное гидроразрывное бурение",
      subtitle: "Эффективный и проверенный метод",
      description:
        "Наш стандартный процесс гидроразрывного бурения - это надежный и эффективный метод добычи нефти и газа. Он включает в себя внедрение жидкости под высоким давлением для создания трещин в породе пласта, что позволяет извлекать ценные ресурсы.",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "Большой объем гидроразрывного бурения",
      subtitle: "Максимизация производства",
      description:
        "Гидроразрыв большого объема - это специализированная техника, разработанная для оптимизации производства. Обладая возможностью внедрения больших объемов жидкости, мы эффективно получаем доступ и извлекаем углеводороды из глубоких подземных месторождений.",
      showDescription: false,
      pic: "./oil/hydra2.jpg",
    },
    {
      title: "Многоступенчатое гидроразрывное бурение",
      subtitle: "Оптимизация стимуляции пласта",
      description:
        "Наш метод многоступенчатого гидроразрывного бурения включает несколько этапов разрыва для максимизации стимуляции пласта и улучшения добычи нефти и газа.",
      showDescription: false,
      pic: "./oil/hydra3.webp",
    },
    {
      title: "Пенный гидроразрыв",
      subtitle: "Снижение повреждения пласта",
      description:
        "Пенный гидроразрыв - это метод, использующий пену для транспортировки проппанта в трещины, снижая повреждение пласта и улучшая поток углеводородов.",
      showDescription: false,
      pic: "./oil/hydra4.png",
    },
    {
      title: "Азотный гидроразрыв",
      subtitle: "Повышенная эффективность",
      description:
        "Азотный гидроразрыв используется для увеличения эффективности гидроразрывного бурения с использованием азота в качестве рабочей жидкости, что приводит к снижению повреждения пласта и улучшению добычи нефти и газа.",
      showDescription: false,
      pic: "./oil/hydra5.jpeg_v03",
    },
    {
      title: "Гидроразрыв на основе углеводородов",
      subtitle: "Экологически чистый метод",
      description:
        "Наш метод гидроразрыва на основе углеводородов использует экологически чистые углеводороды в качестве рабочей жидкости, минимизируя воздействие на окружающую среду при максимальной добыче ресурсов.",
      showDescription: false,
      pic: "./oil/hydra6.jpg",
    },
    {
      title: "Гидроразрыв с композитными пробками (Plug & Perf)",
      subtitle: "Точный контроль пласта",
      description:
        "Гидроразрыв с композитными пробками (MSHF) с механическим герметизированным гидроразрывом, также известным как 'Plug & Perf', - это техника, используемая для точного контроля пласта и оптимизации работы скважины.",
      showDescription: false,
      pic: "./oil/hydra1.webp",
    },
    {
      title: "MSHF на буровой трубе с абразивным проколом",
      subtitle: "Эффективность и универсальность",
      description:
        "MSHF, выполненный на буровой трубе с абразивным или кумулятивным проколом, предлагает эффективный и универсальный метод для вмешательства в работу скважины и стимуляции.",
      showDescription: false,
      pic: "./oil/hydra7.jpg",
    },
    {
      title: "Буровые бригады по добыче и боковому бурению",
      subtitle: "Опытные команды",
      description:
        "Наши опытные буровые бригады специализируются на производственном бурении и боковом бурении, предоставляя экспертизу и эффективность в ваших проектах бурения.",
      showDescription: false,
      pic: "./oil/hydra10.png",
    },
  ]);

  const toggleDescription = (index) => {
    const updatedCardData = [...cardData];
    updatedCardData[index].showDescription =
      !updatedCardData[index].showDescription;
    setCardData(updatedCardData);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        mt={12}
        data-aos="fade-down"
        data-aos-delay="500"
        align="center"
        color="orange"
      >
        Услуги нефти и газа
      </Typography>
      <Typography
        data-aos="fade-down"
        data-aos-delay="500"
        color="gray"
        sx={{ fontStyle: "italic" }}
      >
        Предлагаемые нами сервисные услуги нефтегазового сектора позволяет
        предложить широкий спектр возможностей, позволяющих проводить разработку
        с учетом индивидуальных параметров пластов и условий месторождений,
        исследовать физические, химические и фильтрационные особенности грунтов.
      </Typography>

      <Carousel
        showStatus={false} // Hide status indicators (dots)
        showArrows={true} // Show arrows for navigation
        showThumbs={false} // Hide thumbnail indicators (dots)
        autoPlay={true}
        autoFocus
        infiniteLoop
        interval={3000}
        swipeable
        transitionTime={2000}
        emulateTouch // Emulate touch behavior for desktops
        centerMode={true} // Enable center mode
        centerSlidePercentage={33.3}
        showIndicators={false}
      >
        {cardData.map((item, index) => (
          <div key={index} style={{ marginTop: "80px" }}>
            <Card
              data-aos="fade-left"
              data-aos-delay="500"
              sx={{
                height: "100%",
                minHeight: "400px",
                ml: 5,
                "&:hover": {
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.6)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.pic}
                  alt={item.title}
                  width={"100%"}
                />
                <CardContent>
                  <Stack height={60}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1" pb={4} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  {item.showDescription ? (
                    <Typography variant="body2" pb={3} color="text.secondary">
                      {item.description}
                    </Typography>
                  ) : null}
                  <Stack
                    direction="row"
                    alignItems="end"
                    justifyContent="flex-end"
                    sx={{ paddingRight: 3 }}
                  >
                    <Button
                      sx={{ width: 180, textTransform: "none" }}
                      onClick={() => toggleDescription(index)}
                      variant="outlined"
                    >
                      {item.showDescription
                        ? "Скрыть описание"
                        : "Показать описание"}
                    </Button>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default HydraulicFracturing;
