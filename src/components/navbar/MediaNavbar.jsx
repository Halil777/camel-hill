import { useEffect, useState } from "react";
import {
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import Language from "../../language/Language";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { smallNavbarItems } from "../../data/data.mjs";
import { useTranslation } from "react-i18next";

const MediaNavbar = () => {
  const { t } = useTranslation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Box sx={{ background: "gray", height: 80, pt: 2 }}>
        <Container>
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
                      {t(linkCategory.title)}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </div>
          </Drawer>
        </Container>
      </Box>
    </div>
  );
};

export default MediaNavbar;
