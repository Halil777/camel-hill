// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Index from "./components/navbar/Index";
import OilGasServices from "./pages/oilGasServices/OilGasServices";
import CoiledTubing from "./components/equipment/coiled/CoiledTubing";
import EnviromentProtection from "./components/equipment/enviroment-protection/EnviromentProtection";
import Inspection from "./components/innovativeTechnologies/inspection/Inspection";
import Intratubular from "./components/innovativeTechnologies/intratubular/Intratubular";
import RemotedlyOperated from "./components/innovativeTechnologies/remotedly-operated/RemotedlyOperated";
import TankCleaning from "./components/innovativeTechnologies/tank-cleaning/TankCleaning";

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
            <Route path="/oil-gas" element={<OilGasServices />} />
            <Route path="/coiled-tubing" element={<CoiledTubing />} />
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
