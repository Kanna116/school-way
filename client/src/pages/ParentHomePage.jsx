import { useState } from "react";

const ParentHomePage = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [autoRiders, setAutoRiders] = useState([]); // Array to hold fetched auto riders

  const handleSearch = () => {
    // Logic to search for auto riders (you can fetch data from API or filter an existing list)
    fetch(`/api/autoRiders?location=${searchLocation}`)
      .then((response) => response.json())
      .then((data) => setAutoRiders(data));
  };

  return (
    <section className="parent-home">
      <h2>Find a Trusted Auto Rider</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by location (e.g., School to Home)"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="auto-riders-list">
        {autoRiders.length === 0 ? (
          <p>No auto riders found for this location.</p>
        ) : (
          autoRiders.map((rider, index) => (
            <div key={index} className="auto-rider">
              <p>Name: {rider.name}</p>
              <p>Rating: {rider.rating}</p>
              <p>Route: {rider.route}</p>
              <button>Book Ride</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ParentHomePage;
