import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import ImgPin from "../../../../Assets/Pin.gif";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "./Contact.css";
// import GoogleMaps from "google-map-react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "mapbox-gl";

const FaleConosco = () => {
  const [viewport, setViewport] = React.useState({
    latitude: -23.583,
    longitude: -46.668,
    width: "100%",
    height: "100%",
    zoom: 18.32,
  });
  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
      </div>

      <div className="map-open">
        <ReactMapGl
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}
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
            <div>Pin</div>
          </Popup>
        </ReactMapGl>
      </div>

      <div className="div-sub-contact">
        <h1>Contato</h1>
        <div>
          <h3> Email:</h3>
          <h4> amafresp@afresp.org.br </h4>
          <h3> Local: </h3>
          <h4>
            Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar Horário: das 8h às
            17h.
          </h4>
          <h3>Central de Atendimento </h3> <h4> Tel.: (11) 4020-8721</h4>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
