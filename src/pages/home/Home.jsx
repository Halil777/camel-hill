import { Stack, IconButton, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhoWeAre from "../../components/home/WhoWeAre";

const Home = () => {
  const back1 = "./oil/oilBack2.jpg";

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${back1}) center/cover no-repeat`,
    height: "100vh",
  };

  return (
    <>
      <div style={backgroundImageStyle}>
        <Container>
          <Stack spacing={2}>
            <Stack direction="row" spacing={3}>
              <Typography
                variant="h3"
                data-aos="fade-right"
                data-aos-delay="400"
                color="#fff"
              >
                Добро пожаловать в
              </Typography>
              <Typography variant="h3" color="orange">
                Düýeli Depe
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              Используем инновационные технологии для светлого будущего
            </Typography>
          </Stack>
        </Container>
        <Stack
          data-aos="fade-up"
          data-aos-delay="800"
          direction="row"
          sx={{
            position: "absolute",
            width: "100%",
            bottom: 45,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton className="motion-icon-button">
            <ExpandMoreIcon sx={{ color: "#000", fontSize: "30px" }} />
          </IconButton>
        </Stack>
      </div>
      <WhoWeAre />
    </>
  );
};

export default Home;
