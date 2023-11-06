import { Container, Grid, Typography, Stack, Box } from "@mui/material";
import { Dropdown, Space, Menu } from "antd";
import { useNavigate, Link } from "react-router-dom";

const categories = [
  { id: "", name: "Home" },
  {
    id: "construction",
    name: "Construction and Ecology",
  },
  { id: "oil-gas", name: "Oil & Gas services" },
  {
    id: "equipment-chemistry",
    name: "Equipment",
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

const Footer = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (categoryLink, subcategoryLink) => {
    navigate(`/${subcategoryLink}`);
  };

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
              Навигация
            </Typography>
            <Stack spacing={1} mt={3}>
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
                                      linkCategory.subcategoriesLinks[subIndex]
                                    )
                                  }
                                >
                                  <Typography
                                    textTransform="capitalize"
                                    fontSize="15px"
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
                            sx={{ color: "#fff", fontSize: "15px" }}
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
                        sx={{ fontSize: "15px" }}
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
              Contact
            </Typography>
            <Stack spacing={1} mt={3}>
              <Typography
                data-aos="fade-down"
                data-aos-delay="400"
                sx={{ color: "#fff", fontSize: "15px" }}
              >
                +993 12 46-83-54
              </Typography>
              <Typography
                data-aos="fade-down"
                data-aos-delay="500"
                sx={{ color: "#fff", fontSize: "15px" }}
              >
                +993 12 46-83-55
              </Typography>
              <Typography
                data-aos="fade-down"
                data-aos-delay="600"
                sx={{ color: "#fff", fontSize: "15px" }}
              >
                +993 12 46-83-56
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography
              data-aos="fade-left"
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
              О Компании
            </Typography>
            <Stack spacing={3} mt={3}>
              <Typography
                color="#fff"
                data-aos="fade-left"
                data-aos-delay="400"
                sx={{ fontSize: "18px" }}
              >
                Инновации, технологии, результаты: вместе к бизнесу будущего
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
