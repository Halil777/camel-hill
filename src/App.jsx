// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Index from "./components/navbar/Index";
import ConstructionAndEcology from "./pages/constructionAndEcology/ConstructionAndEcology";
import OilGasServices from "./pages/oilGasServices/OilGasServices";
import CoiledTubing from "./components/equipment/coiled/CoiledTubing";
import Additives from "./components/equipment/additives/Additives";
import EnviromentProtection from "./components/equipment/enviroment-protection/EnviromentProtection";
import Inspection from "./components/innovativeTechnologies/Inspection";
import Intratubular from "./components/innovativeTechnologies/Intratubular";
import RemotedlyOperated from "./components/innovativeTechnologies/RemotedlyOperated";
import TankCleaning from "./components/innovativeTechnologies/TankCleaning";

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="/construction" element={<ConstructionAndEcology />} />
            <Route path="/oil-gas" element={<OilGasServices />} />
            <Route path="/coiled-tubing" element={<CoiledTubing />} />
            <Route path="/additives" element={<Additives />} />
            <Route
              path="/environment-protection"
              element={<EnviromentProtection />}
            />
            <Route path="/inspection" element={<Inspection />} />
            <Route path="/intratubular-cleaning" element={<Intratubular />} />
            <Route path="/remotedly-operated" element={<RemotedlyOperated />} />
            <Route path="/tank-cleaning" element={<TankCleaning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
