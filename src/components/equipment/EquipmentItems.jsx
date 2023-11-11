import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { equipmentAndchemcistryItems } from "../../data/data.mjs";

const EquipmentItems = () => {
  return (
    <div>
      <Container>
        <Typography mt={8} align="center" variant="h3">
          Equipment and Chemistry
        </Typography>
        <Typography align="center" variant="h6" mt={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi
          sint pariatur quaerat et tempora ab nisi, itaque architecto assumenda
          ipsam nemo ducimus quisquam iusto inventore harum expedita repellendus
          beatae.
        </Typography>
        <Grid container spacing={4} mt={5}>
          {equipmentAndchemcistryItems.map((item, i) => (
            <Grid
              key={`equipmentAndchemcistryItems_key_${i}`}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <Card
                sx={{
                  height: 320,
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
                    image={item.pic}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography pb={3} align="center">
                      {item.title}
                    </Typography>
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

export default EquipmentItems;
