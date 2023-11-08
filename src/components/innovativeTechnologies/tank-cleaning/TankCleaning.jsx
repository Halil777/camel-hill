import Application from "./Application";
import Methods from "./Methods";
import RoboticSystem from "./RoboticSystem";
import Technology from "./Technology";
import Tubot from "./Tubot";

const TankCleaning = () => {
  return (
    <div
      style={{
        background: "#ddd7d7",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <Tubot />
      <Technology />
      <RoboticSystem />
      <Application />
      <Methods />
    </div>
  );
};

export default TankCleaning;
