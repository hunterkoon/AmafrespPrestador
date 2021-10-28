import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import ImgPin from "../../../../Assets/Pin.gif";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "./Contact.css";
import Title from "../../../Components/Sub/Title";
// import GoogleMaps from "google-map-react";
// import "mapbox-gl/dist/mapbox-gl.css";
// import mapboxgl from "mapbox-gl";

const Contact = () => {
  const [viewport, setViewport] = React.useState({
    latitude: -23.583,
    longitude: -46.668,
    width: "80%",
    height: "100%",
    zoom: 18.32,
  });

  console.log(process.env.REACT_APP_MAPBOX_TOKEN)

  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
        <Title text="Contatos" />
      </div>
      <div className="map-open">
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
                Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar - Horário: das 8h
                às 17h
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

      <div className="div-sub-contact">
        <h1>Telefones Úteis</h1>

        <ul className="tel-list">

          <section>
            <h3>Diretoria e Gerência da Amafresp</h3>
            <li>Tel.: (11) 3886-8881</li>
          </section>

          <section>
            <h3>Central de Atendimento</h3>
            <li>Tel.: (11) 4020-8721</li>
          </section>

          <section>
            <h3>Combate Covid (24h)</h3>
            <li>Tel.: (11) 97503-8958 / (11) 97502-5941</li>
          </section>

          <section>
            <h3>Análise de Contas Médicas</h3>
            <li>Tel.: (11) 3886-8885</li>
          </section>

          <section>
            <h3>Auditoria Médica</h3>
            <li>Tel.: (11) 3886-8894 / (11) 3886-8845</li>
          </section>

          <section>
            <h3>Compras Médicas</h3>
            <li>Tel.: (11)  4020-8721</li>
          </section>

          <section>
            <h3>Credenciamento</h3>
            <li>Tel.: (11) 3886-8828</li>
          </section>

          <section>
            <h3>Cobrança</h3>
            <li>Tel.: (11) 4020-8721</li>
          </section>

          <section>
            <h3>Prevenção/Home Care</h3>
            <li>Tel.: (11) 3886-8846 / (11) 3886-8856</li>
          </section>

          <section>
            <h3>Protocolo de Contas Médicas</h3>
            <li>Tel.: (11) 3886-8928</li>
          </section>

          <section>
            <h3>Relacionamento com o associado</h3>
            <li>Tel.: (11) 3886-8881 / (11) 3886-8813 <br /> (11) 3886-8878 / (11) 3886-8865 <br /> (11) 3886-8875</li>
          </section>

        </ul>
      </div>
    </div>
  );
};

export default Contact;
