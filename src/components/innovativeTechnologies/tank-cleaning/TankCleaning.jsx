import TankCleaningEquipment from "./Equipment";
import Methods from "./Methods";

const TankCleaning = () => {
  return (
    <div
      style={{
        background: "#ddd7d7",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <Methods />
      <TankCleaningEquipment />
    </div>
  );
};

export default TankCleaning;
