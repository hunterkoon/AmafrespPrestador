import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import GoogleMaps from "google-map-react";
import ImgPin from "../../../../Assets/Pin.gif";
import "./Contact.css";

const FaleConosco = () => {
  const defaultProps = {
    center: {
      lat: -23.582494256880434,
      lng: -46.66797249323606,
    },
    zoom: 18,
  };
  const AnyReactComponent = ({ img }) => (
    <div className="maps">
      <img src={img} alt="pin map" />

      <label>
        <h1>Atendimento AMAFRESP</h1>
        Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar - Horário: das 8h às 17h
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
  );

  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
      </div>
      <div style={{ height: "60vh", width: "95%", margin: "0 auto" }}>
        <GoogleMaps
          bootstrapURLKeys={{ key: "AIzaSyChYgkieCv8PxYNuIamnInUGWgQhuZp5FI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            img={ImgPin}
          />
        </GoogleMaps>
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
