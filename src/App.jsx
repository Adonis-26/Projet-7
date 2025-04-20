import React from 'react';
import Header from './Components/Header/Header.jsx';
import Banner from './Components/Banner/Banner.jsx';
import ApartementGray from './Components/ApartementGray/ApartementGray.jsx';
import Body from './Components/Body/Body.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Body>
        <Banner />
        <ApartementGray />
      </Body>
    </div>
  )
}

export default App