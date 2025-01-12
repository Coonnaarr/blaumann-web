import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Implement search logic here
    console.log(`Searching for craftsmen in: ${location}`);
  };

  return (
    <div className="search-container">
      <h2>Handwerker gesucht?</h2>
      <p>Die besten Handwerker aus der Region finden</p>
      <div className="search-box">
        <label htmlFor="location">Wo?</label>
        <input
          type="text"
          id="location"
          placeholder="PLZ"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Angebote erhalten</button>
      </div>
      <p className="info-text">
        <strong>Kostenlos und unverbindlich.</strong> Seit 2004 am Markt. Über <strong>750.000</strong> Auftraggeber und über <strong>150.000</strong> Handwerker vertrauen uns.
      </p>
    </div>
  );
}

export default Search;