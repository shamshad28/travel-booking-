import { useState, useEffect } from "react";
import properties from "../data/properties";
import PropertiesList from "../components/PropertiesList";

function Favorites() {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem("travelnest_favs") || "[]");
    const matched = properties.filter((p) => favIds.includes(p.id));
    setSavedProperties(matched);
  }, []);

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