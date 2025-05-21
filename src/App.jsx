import React from 'react';
import ApartementGray from './Components/ApartementGray/ApartementGray.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import './App.css';
import Banner from './Components/Banner/Banner.jsx';

function App() {
  return (
    <div>
      <HomePage>
        <Banner />
        <ApartementGray />
      </HomePage>
    </div>
  )
}

export default App