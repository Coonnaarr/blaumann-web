import React from 'react';
import Header from './components/Header';
import CraftsmanList from './components/CraftsmanList';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <CraftsmanList />
      </main>
    </div>
  );
}

export default App;