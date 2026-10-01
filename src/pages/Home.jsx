import { useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import PropertiesList from "../components/PropertiesList";
import properties from "../data/properties";

function Home() {
  const [searchParams, setSearchParams] = useState({ destination: "", guests: 1 });
  const [filters, setFilters] = useState({ maxPrice: "", minRating: "0" });

  const handleSearch = (criteria) => {
    setSearchParams(criteria);
  };

  const filteredProperties = properties.filter((item) => {
    // Destination match
    const dest = searchParams.destination.toLowerCase();
    const locMatch =
      !dest ||
      (item.location && item.location.toLowerCase().includes(dest)) ||
      (item.city && item.city.toLowerCase().includes(dest));

    // Guests match
    const guestMatch = !searchParams.guests || (item.guests || 1) >= searchParams.guests;

    // Price match
    const priceMatch = !filters.maxPrice || item.price <= Number(filters.maxPrice);

    // Rating match
    const ratingMatch = !filters.minRating || item.rating >= Number(filters.minRating);

    return locMatch && guestMatch && priceMatch && ratingMatch;
  });

  return (
    <div className="home-page">
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <Filter filters={filters} onFilterChange={setFilters} />
      <PropertiesList propertiesList={filteredProperties} />
    </div>
  );
}

export default Home;