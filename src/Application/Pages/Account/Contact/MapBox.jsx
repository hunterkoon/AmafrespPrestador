import React from "react";
import ImgPin from "../../../../Assets/Pin.gif";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

import "./Contact.css";

const MapBox = () => {

  const [viewport, setViewport] = React.useState({
    latitude: -23.583,
    longitude: -46.668,
    width: "75vw",
    height: "60vh",
    zoom: 18.32,
  });

  return (
    <div className="map-box">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/hunterkoon/ckvb0sybk8vx914mfs99ktqvx"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker latitude={-23.58305873178371} longitude={-46.66781466013052}>
          <img width={80} src={ImgPin} alt="" />
        </Marker>
        <Popup
          latitude={-23.58305873178371}
          longitude={-46.66781466013052}
          closeButton={false}
          className="popup"
        >
          <div>
            <label>
              <h1>Atendimento AMAFRESP</h1>
              Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar - Horário: das 8h às
              17h
              <a
                style={{ textDecoration: "underline" }}
                href={"https://g.page/Afresp?share"}
                target="_blank"
                rel="noreferrer"
              >
                Ver no Maps
              </a>
            </label>
          </div>
        </Popup>
      </ReactMapGl>
    </div>
  );
};

export default MapBox;
