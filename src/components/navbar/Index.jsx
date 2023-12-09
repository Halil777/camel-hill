import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "./Navbar";
import Header from "../header/Header";
import Contact from "../contact/Contact";
import { useMediaQuery } from "@mui/material";
import MediaNavbar from "./MediaNavbar";

const Index = () => {
  const isMediumScreen = useMediaQuery("(max-width: 960px)");
  return (
    <div>
      <Header />
      {!isMediumScreen && <Navbar />}
      {isMediumScreen && <MediaNavbar />}
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
