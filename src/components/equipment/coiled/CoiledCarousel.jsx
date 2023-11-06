import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { innovativeItems } from "../../../data/data";
import { Stack } from "@mui/material";

const CoiledCarousel = () => {
  return (
    <div>
      <Carousel
        showStatus={false} // Hide status indicators (dots)
        showArrows={false} // Show arrows for navigation
        showThumbs={false} // Hide thumbnail indicators (dots)
        autoPlay={true}
        autoFocus
        infiniteLoop
        interval={5000}
        swipeable
        transitionTime={2000}
        emulateTouch // Emulate touch behavior for desktops
        showIndicators={false}
      >
        {innovativeItems.map((item, i) => (
          <div key={`home_carousel_items_key${i}`} style={{ padding: "12px" }}>
            <Stack spacing={4} direction="row">
              <img
                src={item.pic}
                alt={item.id}
                style={{
                  width: "100%",
                  borderRadius: 4,
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
                }}
              />
            </Stack>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CoiledCarousel;
