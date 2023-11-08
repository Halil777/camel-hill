import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { tubotItems } from "../../../data/data.mjs";

const Application = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={7} mt={4} mb={8}>
          {tubotItems.map((item, i) => (
            <Grid
              item
              key={`tubot_items_key${i}`}
              lg={4}
              md={4}
              xs={12}
              sm={12}
            >
              <Card sx={{ height: 550 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={200}
                    image={item.pic}
                    alt={item.title}
                  />
                  <CardContent sx={{ padding: 5 }}>
                    <Stack spacing={2}>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography>{item.subTitle}</Typography>
                    </Stack>
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

export default Application;
