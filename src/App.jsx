// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Index from "./components/navbar/Index";
import OilGasServices from "./pages/oilGasServices/OilGasServices";
import ConstructionAndEcology from "./pages/constructionAndEcology/ConstructionAndEcology";
import EquipmentAndChemistry from "./pages/equipment-and-chemistry/EquipmentAndChemistry";
import InnovativeTechnologies from "./pages/innovative-technolgies/InnovativeTechnologies";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/oil-gas" element={<OilGasServices />} />
            <Route
              path="/innovative-technologies"
              element={<InnovativeTechnologies />}
            />
            <Route
              path="/equipment-and-chemistry"
              element={<EquipmentAndChemistry />}
            />
            <Route
              path="/construction-and-ecology"
              element={<ConstructionAndEcology />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
