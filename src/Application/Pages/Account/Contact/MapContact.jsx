import React from 'react';
import ImgPin from "../../../../Assets/Pin.gif";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapContact = () => {
  const position = [-23.583140, -46.667780]
  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>  Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar Horário: das 8h às 17h </Popup>
      </Marker>
    </MapContainer>

  );
}

export default MapContact;