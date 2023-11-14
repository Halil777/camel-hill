import { Container, Stack, Typography } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { useTranslation } from "react-i18next";
import Language from "../../language/Language";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      style={{
        background: "orange",

        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            height: { lg: "50px", md: "50px", sm: 0, xs: 0 },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={7}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneInTalkIcon />
              <Typography>+993 12 46-83-54</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon />
              <Typography>info@duyelidepe.com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <QueryBuilderIcon />
              <Typography>{t("workingHours")}: 08:00 - 17:00</Typography>
            </Stack>
          </Stack>
          <Language />
        </Stack>
      </Container>
    </div>
  );
};

export default Header;
