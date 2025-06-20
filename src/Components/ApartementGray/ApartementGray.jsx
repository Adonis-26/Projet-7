import React, { useEffect, useState } from 'react'
import './ApartementGray.scss'
import Apartement from './Apartement.jsx'

function ApartementGray() {
  const [apartements, setApartement] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setApartement(data))
      .catch((error) => console.error('Erreur de chargement des appartements:', error))
  }, [])

  return (
    <div className='ApartementGray'>
      {apartements.map((apartement) => (
        <Apartement key={apartement.id} title={apartement.title} imageApartement={apartement.cover} id={apartement.id} />
      ))}
    </div>
  )
}

export default ApartementGray
