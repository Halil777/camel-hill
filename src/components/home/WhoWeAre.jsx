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
          Who We Are
        </Typography>
        <Typography align="center" mt={2} variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis esse
          qui tempore, reiciendis, a deserunt et ut placeat ex adipisci
          reprehenderit magni doloremque pariatur consequuntur? Id magnam
          officiis cum.
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
                  image="./who/who1.png"
                  alt="src"
                />
                <CardContent>
                  <Typography align="center">
                    Construction and Ecology
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
                  <Typography align="center">Services</Typography>
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
                    Equipment and Chemistry
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
                    Innovative Technologies
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
