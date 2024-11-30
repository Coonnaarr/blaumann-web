// src/components/CraftsmanList.js
import React from 'react';
import './CraftsmanList.css';

const craftsmen = [
  { id: 1, name: 'Maler Müller', trade: 'Maler', location: 'Berlin' },
  { id: 2, name: 'Schreiner Schmidt', trade: 'Schreiner', location: 'München' },
  // Add more craftsmen as needed
];

function CraftsmanList() {
  return (
    <section className="craftsman-list">
      <h2>Verfügbare Handwerker</h2>
      <ul>
        {craftsmen.map(craftsman => (
          <li key={craftsman.id}>
            <strong>{craftsman.name}</strong> - {craftsman.trade} in {craftsman.location}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CraftsmanList;