import PropertyCard from "./PropertyCard";

function PropertiesList({ propertiesList }) {
  if (!propertiesList || propertiesList.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h3>No properties match your search criteria.</h3>
        <p>Try widening your price range or clearing destination filters.</p>
      </div>
    );
  }

  return (
    <div className="properties-grid">
      {propertiesList.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertiesList;