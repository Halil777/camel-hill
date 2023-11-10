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
        <Grid container spacing={4} mt={10}>
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
                  height: 280,
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
                    <Typography align="center">{item.title}</Typography>
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
