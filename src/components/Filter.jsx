function Filter({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price ($):</label>
        <input
          id="maxPrice"
          type="number"
          name="maxPrice"
          placeholder="Any"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="minRating">Min Rating:</label>
        <select
          id="minRating"
          name="minRating"
          value={filters.minRating}
          onChange={handleChange}
        >
          <option value="0">All Ratings</option>
          <option value="4.0">4.0+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;