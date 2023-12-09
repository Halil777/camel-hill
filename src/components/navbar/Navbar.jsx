import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Language from "../../language/Language";
import { Link, useLocation } from "react-router-dom";
import { smallNavbarItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";
import MediaNavbar from "./MediaNavbar";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMediumScreen = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
        }}
      >
        <Paper
          elevation={isScrolled ? 5 : 0}
          sx={{
            background: isScrolled ? "gray" : "transparent",
            position: "fixed",
            width: "100%",
            top: isScrolled ? 0 : { lg: "50px", md: "50px", sm: 0, xs: 0 },
            borderRadius: 0,
            height: 70,
            display: "flex",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <Container>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={5}>
                <Link to="/">
                  <img src="./images/logo.png" alt="Logo" />
                </Link>
                <Stack direction="row" spacing={2}>
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
                          fontWeight: 400,
                        }}
                      >
                        <Typography
                          data-aos="fade-down"
                          data-aos-delay={delay}
                          sx={{
                            fontSize: "15px",
                            fontWeight: 400,
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
              </Stack>
              {isScrolled && <Language />}
            </Stack>
          </Container>
        </Paper>
      </Box>
    </>
  );
};

export default Navbar;
