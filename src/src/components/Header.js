import React from 'react'; 
import './Header.css'; 


function Header() {
    return (
      <header className="header">
        <h1>Blaumann</h1>
        <nav>
          <ul>
            <li><a href="#home">Auftrag Einstellen</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#contact">Als Handwerker Anmelden</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;