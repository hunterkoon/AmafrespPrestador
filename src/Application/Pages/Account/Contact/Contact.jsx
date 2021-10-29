import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import Title from "../../../Components/Sub/Title";
import MapBox from "./MapBox";
import ANS from "../../../../Assets/ans-logo.b9b86cbf.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="div-main-faleConosco pageView">
      <div className="div-title-pages">
        <Titledecorated text="Fale Conosco" />
        <Title text="Contatos" />
      </div>

      {<MapBox />}

      <div className="div-sub-contact">
        <div className="div-sub-contact-email">
          <p className="div-end">
            <h2>
              Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar Horário: das 8h às 17h
            </h2>
            <a href="mailto:amafresp@afresp.org.br" Style="color:#25b099;">
              Envie um email
            </a>
          </p>
        </div>

        <h1>Telefones Úteis</h1>
       
        <ul className="tel-list">
          <li>
            <h3>Diretoria e Gerência da Amafresp</h3>
            <p>(11) 3886-8881</p>
          </li>

          <li>
            <h3>Central de Atendimento</h3>
            <p> (11) 4020-8721 </p>
          </li>

          <li>
            <h3>Combate Covid (24h)</h3>
            <p>(11) 97503-8958 | (11) 97502-5941</p>
          </li>

          <li>
            <h3>Análise de Contas Médicas</h3>
            <p>(11) 3886-8885</p>
          </li>

          <li>
            <h3>Auditoria Médica</h3>
            <p>(11) 3886-8894 | (11) 3886-8845</p>
          </li>

          <li>
            <h3>Compras Médicas</h3>
            <p>(11) 4020-8721</p>
          </li>

          <li>
            <h3>Credenciamento</h3>
            <p>(11) 3886-8828</p>
          </li>

          <li>
            <h3>Cobrança</h3>
            <p> (11) 4020-8721 </p>
          </li>

          <li>
            <h3>Prevenção/Home Care</h3>
            <p>(11) 3886-8846 | (11) 3886-8856 </p>
          </li>

          <li>
            <h3>Protocolo de Contas Médicas</h3>
            <p>(11) 3886-8928</p>
          </li>

          <li>
            <h3>Relacionamento com o associado</h3>
            <p>
              (11) 3886-8881 | (11) 3886-8813 <br />
              (11) 3886-8878 | (11) 3886-8865 (11) 3886-8875
            </p>
          </li>
        </ul>
      </div>

      <div className="div-sub-ans">
        <img src={ANS} alt={""} />
      </div>
    </div>
  );
};

export default Contact;
