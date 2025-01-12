import './CraftsmanProfile.css';
import React from 'react';
import { useParams } from 'react-router-dom';

function CraftsmanProfile() {
  const { id } = useParams();
  // Fetch craftsman data based on ID or use mock data
  const craftsman = {
    name: 'Roundabout Iffouzar',
    rating: 5,
    reviews: 10,
    location: 'Potsdam',
    description: 'Roundabout Iffouzar arbeitet als Maler und Lackierer...',
    portfolio: [
      // Add image URLs or paths
    ],
  };

  return (
    <div className="craftsman-profile">
      <a href="/">Zurück zu allen Handwerkern</a>
      <h2>{craftsman.name}</h2>
      <p>⭐ {craftsman.rating}/5 ({craftsman.reviews} Bewertungen)</p>
      <p>{craftsman.location}</p>
      <button>Kontaktieren</button>
      <h3>Über diese Firma</h3>
      <p>{craftsman.description}</p>
      <h3>Portfolio</h3>
      <div className="portfolio">
        {craftsman.portfolio.map((image, index) => (
          <img key={index} src={image} alt={`Portfolio ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default CraftsmanProfile;