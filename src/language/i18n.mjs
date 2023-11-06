import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar section
      home: "Home",
      about: "About Us",
      services: "Services",
      partners: "Partners",
    },
  },
  ru: {
    translation: {
      // Navbar section starts here ...

      home: "Главная",
      about: "О Нас",
      services: "Услуги",
      partners: "Партнёры",
    },
  },
  tm: {
    translation: {
      // Navbar section ends here .....

      home: "Baş sahypa",
      about: "Biz Barada",
      services: "Hyzmatlar",
      partners: "Hyzmatdaşlar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
