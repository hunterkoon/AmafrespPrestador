import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import GoogleMaps from "google-map-react";
import ImgPin from '../../../../Assets/Pin.gif'
import "./Contact.css";

const FaleConosco = () => {
  const defaultProps = {
    center: {
      lat: -23.582494256880434,
      lng: -46.66797249323606,
    },
    zoom: 18,
  };
   const AnyReactComponent = ({ img ,   }) =>   
   <div className='maps'>
     <img src={img} alt="pin map" />
    <label>Av. Brigadeiro Luís Antônio, 4843 - Jardim Paulista, São Paulo - SP, 01401-002 <a style={{textDecoration:'underline'}}href={'https://g.page/Afresp?share'} target='_blank'  rel="noreferrer" >Ver no Maps</a> </label>
  </div>;



  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
      </div>
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMaps
          bootstrapURLKeys={{ key: "AIzaSyChYgkieCv8PxYNuIamnInUGWgQhuZp5FI" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
       <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          img={ImgPin}/>
        </GoogleMaps>
      </div>
    </div>
  );
};

export default FaleConosco;
