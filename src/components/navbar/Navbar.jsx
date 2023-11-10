import { useEffect, useState } from "react";
import {
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
  Drawer,
} from "@mui/material";
import Language from "../../language/Language";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { smallNavbarItems } from "../../data/data.mjs";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <Paper
        elevation={isScrolled ? 5 : 0}
        sx={{
          background: isScrolled ? "gray" : "transparent",
          position: "fixed",
          width: "100%",
          top: isScrolled ? 0 : "50px",
          borderRadius: 0,
          height: 70,
          alignItems: "center",
          display: "flex",
          zIndex: 1000,
        }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ display: { md: "flex", lg: "flex", sm: "none", xs: "none" } }}
          >
            <Stack direction="row" alignItems="center" spacing={5}>
              <img src="./images/logo.png" alt="Logo" />
              <Stack direction="row" spacing={3}>
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
                        {linkCategory.title}
                      </Typography>
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
            {isScrolled && <Language />}
          </Stack>
          <Stack
            direction="row"
            sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}
            justifyContent="space-between"
          >
            <img src="./images/logo.png" alt="Logo" />
            <Stack direction="row" spacing={5} alignItems="center">
              <Language />
              <IconButton
                onClick={() => setIsDrawerOpen(true)}
                color="inherit"
                edge="start"
              >
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
          </Stack>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <div
              role="presentation"
              onClick={() => setIsDrawerOpen(false)}
              onKeyDown={() => setIsDrawerOpen(false)}
            >
              <Stack spacing={2} p={4}>
                {smallNavbarItems.map((linkCategory, index) => (
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
                      sx={{
                        fontSize: "15px",
                        textDecoration:
                          location.pathname === `/${linkCategory.link}`
                            ? "underline"
                            : "none",
                        color: "#000",
                        textUnderlineOffset: "7px",
                      }}
                    >
                      {linkCategory.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </div>
          </Drawer>
        </Container>
      </Paper>
    </>
  );
};

export default Navbar;
