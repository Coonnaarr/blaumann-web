import React from 'react';
import './CraftsmanList.css';

const craftsmen = [
  {
    id: 1,
    name: 'KreativHolz',
    rating: 4.8,
    reviews: 4,
    description: 'HAND AUF\'S HOLZ Kreativer, Individueller Möbelbau maßgeschneidert auf den Kunden stehen im Mittelpunkt der Tätigkeit.',
    lastReview: 'Reparatur von Möbeln, Einrichtungen und Holzkonstruktionen - 13. Feb 2023',
    lastReviewText: 'Wir sind richtig glücklich, dass wir unsere Kommod...',
  },
  {
    id: 2,
    name: 'Constantin Botez',
    rating: null,
    reviews: 0,
    description: 'Constantin Botez arbeitet als Bauunternehmen, Abriss- und Entsorgung, Entrümpelung, Entkernung, in der Umgebung von Potsdam und Berlin.',
  },
  {
    id: 3,
    name: 'MöbelMacher',
    rating: 4.5,
    reviews: 10,
    description: 'Spezialisiert auf maßgefertigte Möbel und Innenausbau.',
    lastReview: 'Küchenrenovierung - 20. Jan 2023',
    lastReviewText: 'Sehr zufrieden mit der neuen Küche!',
  },
  {
    id: 4,
    name: 'BauProfi',
    rating: 4.2,
    reviews: 8,
    description: 'Experten für Bau- und Renovierungsarbeiten.',
    lastReview: 'Badsanierung - 5. Mär 2023',
    lastReviewText: 'Das neue Bad sieht fantastisch aus!',
  },
  {
    id: 5,
    name: 'HolzKunst',
    rating: 4.9,
    reviews: 15,
    description: 'Kreative Holzarbeiten und individuelle Designs.',
    lastReview: 'Holzskulptur - 10. Apr 2023',
    lastReviewText: 'Ein echtes Kunstwerk!',
  },
  {
    id: 6,
    name: 'RenovierungRundum',
    rating: 4.7,
    reviews: 12,
    description: 'Komplette Renovierungslösungen für Ihr Zuhause.',
    lastReview: 'Wohnzimmerumbau - 22. Feb 2023',
    lastReviewText: 'Der Umbau hat unsere Erwartungen übertroffen!',
  },
];

function CraftsmanList() {
  return (
    <section className="craftsman-list">
      <h2>Verfügbare Handwerker</h2>
      <div className="craftsman-cards">
        {craftsmen.map(craftsman => (
          <div key={craftsman.id} className="craftsman-card">
            <h3>{craftsman.name}</h3>
            {craftsman.rating ? (
              <p>⭐ {craftsman.rating}/5 ({craftsman.reviews} Bewertungen)</p>
            ) : (
              <p>Noch keine Bewertungen</p>
            )}
            <p>{craftsman.description}</p>
            {craftsman.lastReview && (
              <div className="last-review">
                <p><strong>Letzte Bewertung:</strong> {craftsman.lastReview}</p>
                <p>{craftsman.lastReviewText}</p>
              </div>
            )}
            <button>Kontaktieren</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CraftsmanList;