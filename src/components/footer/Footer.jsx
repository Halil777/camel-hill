import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { smallNavbarItems } from "../../data/data.mjs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div style={{ background: "#010101" }}>
      <Container>
        <Grid container pt={5} pb={5}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="400"
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "1px",
                textDecoration: "underline",
                textUnderlineOffset: "7px",
              }}
            >
              {t("navigation")}
            </Typography>
            <Stack spacing={1} mt={3}>
              {smallNavbarItems.map((linkCategory, index) => {
                const delay = 100 + index * 400;
                return (
                  <Link
                    key={`small_navbar_key${index}`}
                    to={`/${linkCategory.link}`}
                    style={{
                      textDecoration:
                        location.pathname === `/${linkCategory.link}`
                          ? "underline"
                          : "none",
                      textUnderlineOffset: "7px",
                    }}
                  >
                    <Typography
                      data-aos="fade-down"
                      data-aos-delay={delay}
                      sx={{
                        fontSize: "15px",
                        textDecoration:
                          location.pathname === `/${linkCategory.link}`
                            ? "underline"
                            : "none",
                        color: "#fff",
                        textUnderlineOffset: "7px",
                      }}
                    >
                      {t(linkCategory.title)}
                    </Typography>
                  </Link>
                );
              })}
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="400"
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "1px",
                textDecoration: "underline",
                textUnderlineOffset: "7px",
              }}
            >
              {t("contact")}
            </Typography>
            <Stack spacing={1} mt={3}>
              <Stack
                direction="row"
                data-aos="fade-down"
                data-aos-delay="400"
                alignItems="center"
                spacing={1}
              >
                <PhoneInTalkIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                  +993 12 46-83-54
                </Typography>
              </Stack>
              <Stack
                direction="row"
                data-aos="fade-down"
                data-aos-delay="600"
                alignItems="center"
                spacing={1}
              >
                <EmailIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                  info@duyelidepe.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                data-aos="fade-down"
                data-aos-delay="600"
                // alignItems="center"
                spacing={1}
              >
                <LocationOnIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                  {t("address")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} pb={3}>
            <Stack spacing={3}>
              <Typography
                color="#fff"
                data-aos="fade-left"
                data-aos-delay="400"
                sx={{ fontSize: "20px" }}
              >
                {t("footerText")}
              </Typography>
              <img
                src="./images/logo.png"
                alt="Logo"
                style={{ width: "200px" }}
              />
            </Stack>
          </Grid>
          <Box
            sx={{ width: "100%", height: "1.5px", background: "#fff" }}
            mt={3}
          >
            <Typography
              data-aos="fade-up"
              data-aos-delay="400"
              sx={{
                color: "#fff",
                textAlign: "center",
                pt: 1,
                fontSize: "15px",
              }}
            >
              Duyeli Depe 2023 ©
            </Typography>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
