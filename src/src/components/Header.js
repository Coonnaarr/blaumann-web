import React from 'react'; 
import './Header.css'; 


function Header() {
    return (
      <header className="header">
        <h1>Handwerkerverzeichnis</h1>
        <nav>
          <ul>
            <li><a href="#home">Startseite</a></li>
            <li><a href="#about">Über uns</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;