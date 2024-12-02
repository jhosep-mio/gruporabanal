'use client'
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export const Mapa = () => {
  const mapStyles = {
    width: '100%',
    height: '700px' // Altura por defecto para pantallas grandes
  }

  const mobileMapStyles = {
    width: '100%',
    height: '400px' // Altura para dispositivos móviles
  }

  const defaultCenter = {
    lat: -12.0356864,
    lng: -77.0605056
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  return (
    <div className="my-10">
      <LoadScript googleMapsApiKey="AIzaSyCQnmO2O0RPVFuzisXOA402_ZSbwLtSU5Q">
        <GoogleMap
          mapContainerStyle={isMobile ? mobileMapStyles : mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
