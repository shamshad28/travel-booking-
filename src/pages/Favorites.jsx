import { useState } from "react";
import properties from "../data/properties";
import PropertiesList from "../components/PropertiesList";

function Favorites() {
  // Read and compute the initial state synchronously before the first render
  const [savedProperties] = useState(() => {
    try {
      const favIds = JSON.parse(localStorage.getItem("travelnest_favs") || "[]");
      return properties.filter((p) => favIds.includes(p.id));
    } catch {
      return [];
    }
  });

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>Saved Favorites</h2>
      <div style={{ marginTop: "20px" }}>
        <PropertiesList propertiesList={savedProperties} />
      </div>
    </div>
  );
}

export default Favorites;