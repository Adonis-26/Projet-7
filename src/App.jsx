import React from 'react';
import Header from './Components/Header/Header.jsx';
import Banner from './Components/Banner/Banner.jsx';
import ApartementGray from './Components/ApartementGray/ApartementGray.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HomePage>
        <Banner />
        <ApartementGray />
      </HomePage>
      <Footer />
    </div>
  )
}

export default App