import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "./Navbar";
import Header from "../header/Header";
import Contact from "../contact/Contact";
const Index = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
