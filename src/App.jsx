import React from 'react';
import Banner from './Components/Banner/Banner.jsx';
import ApartementGray from './Components/ApartementGray/ApartementGray.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import './App.css';

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