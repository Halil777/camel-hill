import { useEffect, useState } from "react";
import { Container, Paper, Stack, Typography } from "@mui/material";
import Language from "../../language/Language";
import { Dropdown, Space, Menu } from "antd";
import { useNavigate, Link, useLocation } from "react-router-dom";

const categories = [
  { id: "", name: "Home" },
  {
    id: "construction",
    name: "Construction and Ecology",
  },
  { id: "oil-gas", name: "Oil & Gas services" },
  {
    id: "equipment-chemistry",
    name: "Equipment Chemistry",
    subcategories: [
      "Coiled Tubing",
      "Additives",
      "Environment Protection Products",
    ],
    subcategoriesLinks: [
      "coiled-tubing",
      "additives",
      "environment-protection",
    ],
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
        </Container>
      </Paper>
    </>
  );
};

export default Navbar;
