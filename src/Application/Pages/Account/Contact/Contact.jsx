import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import GoogleMaps from "google-map-react";
import "./Contact.css";

const FaleConosco = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMaps
          bootstrapURLKeys={{ key: "AIzaSyChYgkieCv8PxYNuIamnInUGWgQhuZp5FI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
       
        </GoogleMaps>
      </div>
    </div>
  );
};

export default FaleConosco;
