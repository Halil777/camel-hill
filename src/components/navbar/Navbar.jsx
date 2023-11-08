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
import { Dropdown, Space, Menu } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { smallNavbarItems } from "../../data/data.mjs";

const categories = [
  { id: "", name: "Home" },

  { id: "oil-gas", name: "Oil & Gas services" },
  {
    id: "equipment-chemistry",
    name: "Equipment and Chemistry",
    subcategories: [
      "Coiled Tubing",
      "Additives",
      "Environment Protection Products",
    ],
    subcategoriesLinks: ["coiled-tubing", "environment-protection"],
  },
  {
    id: "innovative-technologies",
    name: "Innovative Technologies",
    subcategories: [
      "Tank cleaning technology",
      "Intratubular Cleaning",
      "Inspection robots",
      "Remotely Operated Vehicle",
    ],
    subcategoriesLinks: [
      "tank-cleaning",
      "intratubular-cleaning",
      "inspection",
      "remotedly-operated",
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
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

  const handleSubcategoryClick = (categoryLink, subcategoryLink) => {
    navigate(`/${subcategoryLink}`);
  };

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
                {categories.map((linkCategory, index) => {
                  const delay = 100 + index * 400;
                  if (linkCategory.subcategoriesLinks) {
                    return (
                      <Dropdown
                        key={linkCategory.id}
                        overlay={
                          <Menu>
                            {linkCategory.subcategoriesLinks.map(
                              (linkSubcategory, subIndex) => (
                                <Menu.Item key={linkSubcategory}>
                                  <a
                                    onClick={() =>
                                      handleSubcategoryClick(
                                        linkCategory.id,
                                        linkCategory.subcategoriesLinks[
                                          subIndex
                                        ]
                                      )
                                    }
                                  >
                                    <Typography
                                      textTransform="capitalize"
                                      fontSize="15px"
                                      sx={{
                                        textDecoration:
                                          location.pathname ===
                                          `/${linkCategory.id}/${linkCategory.subcategoriesLinks[subIndex]}`
                                            ? "underline"
                                            : "none",
                                      }}
                                    >
                                      {linkSubcategory}
                                    </Typography>
                                  </a>
                                </Menu.Item>
                              )
                            )}
                          </Menu>
                        }
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          style={{ cursor: "pointer" }}
                        >
                          <Space>
                            <Typography
                              data-aos="fade-down"
                              data-aos-delay={delay}
                              sx={{
                                color: "#fff",
                                fontSize: "15px",
                                textDecoration:
                                  location.pathname === `/${linkCategory.id}`
                                    ? "underline"
                                    : "none",
                              }}
                            >
                              {linkCategory.name}
                            </Typography>
                          </Space>
                        </a>
                      </Dropdown>
                    );
                  } else {
                    return (
                      <Link
                        key={linkCategory.id}
                        to={`/${linkCategory.id}`}
                        style={{
                          textDecoration:
                            location.pathname === `/${linkCategory.id}`
                              ? "underline"
                              : "none",
                          color: "#fff",
                          textUnderlineOffset: "7px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "15px",
                            textDecoration:
                              location.pathname === `/${linkCategory.id}`
                                ? "underline"
                                : "none",
                            textUnderlineOffset: "7px",
                          }}
                          data-aos="fade-down"
                          data-aos-delay={delay}
                        >
                          {linkCategory.name}
                        </Typography>
                      </Link>
                    );
                  }
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
