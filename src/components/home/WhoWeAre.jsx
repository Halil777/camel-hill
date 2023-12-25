import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { titleStyle } from "../../style/style.mjs";

const WhoWeAre = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Typography sx={titleStyle} mt={6} align="center">
          {t("aboutUs")}
        </Typography>
        <Typography
          mt={2}
          sx={{
            fontStyle: "italic",
            textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
          }}
        >
          {/* {t("aboutUsText")} */}
          {t("aboutUsText2")}
        </Typography>
        <Grid container spacing={3} mt={1}>
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
                    {t("constructionEcology")}
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
                  <Typography align="center">{t("oilGas")}</Typography>
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
                  <Typography align="center">
                    {t("equipmentChemistry")}
                  </Typography>
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
                    {t("innovativeTechnologies")}
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
