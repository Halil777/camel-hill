import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  TypeSelector,
  RulerControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import Partners from "../../pages/partners/Partners";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://95.85.121.153:7727/send-email", formData);

      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Partners />
      </Container>
      <Box
        sx={{
          background: "url(./innovative/contact2.webp)",
          pt: 7,
          mt: 5,
          pb: 10,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            data-aos="fade-up"
            data-aos-delay="500"
            align="center"
            mb={5}
            color="white"
          >
            {t("contactUs")}
          </Typography>
          <Grid container spacing={5}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* Contact Form */}
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="400"
                  label={t("fullName")}
                  variant="outlined"
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="500"
                  label={t("email")}
                  variant="outlined"
                  type="email"
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  data-aos="fade-right"
                  data-aos-delay="600"
                  label={t("message")}
                  variant="outlined"
                  multiline
                  rows={4}
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                    },
                  }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  required
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  {t("send")}
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              xs={12}
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <YMaps>
                <div>
                  <Map
                    defaultState={{
                      center: [37.892945, 58.368871], // Ashgabat, Turkmenistan coordinates
                      zoom: 16,
                      controls: ["fullscreenControl"],
                    }}
                    style={{
                      width: "100%",
                      height: "330px",
                      boxShadow: "4px 4px 7px rgba(0,0,0,0.9)",
                    }}
                  >
                    <Placemark geometry={[37.892945, 58.368871]} />
                    <TypeSelector options={{ float: "right" }} />
                    <RulerControl options={{ float: "right" }} />
                    <GeolocationControl options={{ float: "left" }} />
                  </Map>
                </div>
                <FullscreenControl />
              </YMaps>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
