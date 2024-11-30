import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CraftsmanList from './components/CraftsmanList';
import CraftsmanProfile from './components/CraftsmanProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CraftsmanList />} />
            <Route path="/profile/:id" element={<CraftsmanProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;