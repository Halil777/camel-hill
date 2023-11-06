import { useState, useEffect } from "react";
import { Stack, IconButton, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import back from "../../home/back.jpg";
import back1 from "../../home/home1.jpeg";
import back2 from "../../home/back1.png";
import back3 from "../../home/back2.jpg";
import Partners from "../../pages/partners/Partners";
import WhoWeAre from "../../components/home/WhoWeAre";
import InnovativeTechnologies from "../../components/home/InnovativeTechnologies";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [back, back1, back2, back3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [currentImage, images]);

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${images[currentImage]}) center/cover no-repeat`,
    height: "100vh",
    transition: "background-image 2s ease-in-out",
  };

  return (
    <>
      <div
        style={backgroundImageStyle}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <Container>
          <Stack spacing={2}>
            <Stack direction="row" spacing={3}>
              <Typography
                variant="h3"
                data-aos="fade-right"
                data-aos-delay="400"
                color="#fff"
              >
                Welcome to
              </Typography>
              <Typography variant="h3" color="orange">
                Duyeli Depe
              </Typography>
            </Stack>
            <Typography
              variant="h3"
              data-aos="fade-left"
              data-aos-delay="500"
              color="#fff"
            >
              Economic Society!!!
            </Typography>
            <Typography
              variant="h6"
              data-aos="fade-right"
              data-aos-delay="600"
              color="#fff"
            >
              Leveraging Innovative Technologies for a Brighter Tomorrow
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
            bottom: 50,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton className="motion-icon-button">
            <ExpandMoreIcon sx={{ color: "#fff", fontSize: "30px" }} />
          </IconButton>
        </Stack>
      </div>
      <Container>
        <Partners />
      </Container>
      <WhoWeAre />
      <InnovativeTechnologies />
    </>
  );
};

export default Home;
