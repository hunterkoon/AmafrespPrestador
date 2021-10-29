import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import Title from "../../../Components/Sub/Title";
import MapBox from "./MapBox";
import ANS from '../../../../Assets/ans-logo.b9b86cbf.png'
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
        <h1>Telefones Úteis</h1>


        <div className="div-sub-contact-email">
          <h3> Contato </h3>
          <p>Email: amafresp@afresp.org.br
          Local: Av. Brigadeiro Luís Antônio, 4843 – 1 º Andar
          Horário: das 8h às 17h</p>
        </div>

        <ul className="tel-list">
          <section>
            <h3>Diretoria e Gerência da Amafresp</h3>
            <li>(11) 3886-8881</li>
          </section>

          <section>
            <h3>Central de Atendimento</h3>
            <li> (11) 4020-8721</li>
          </section>

          <section>
            <h3>Combate Covid (24h)</h3>
            <li> (11) 97503-8958 | (11) 97502-5941</li>
          </section>

          <section>
            <h3>Análise de Contas Médicas</h3>
            <li> (11) 3886-8885</li>
          </section>

          <section>
            <h3>Auditoria Médica</h3>
            <li> (11) 3886-8894 | (11) 3886-8845</li>
          </section>

          <section>
            <h3>Compras Médicas</h3>
            <li> (11) 4020-8721</li>
          </section>

          <section>
            <h3>Credenciamento</h3>
            <li> (11) 3886-8828</li>
          </section>

          <section>
            <h3>Cobrança</h3>
            <li> (11) 4020-8721</li>
          </section>

          <section>
            <h3>Prevenção/Home Care</h3>
            <li> (11) 3886-8846 | (11) 3886-8856</li>
          </section>

          <section>
            <h3>Protocolo de Contas Médicas</h3>
            <li> (11) 3886-8928</li>
          </section>

          <section>
            <h3>Relacionamento com o associado</h3>
            <li>
              (11) 3886-8881 | (11) 3886-8813 <br />
              (11) 3886-8878 | (11) 3886-8865 (11) 3886-8875
            </li>
          </section>
        </ul>
      </div>


      <div className="div-sub-ans">
        <img src={ANS} alt={""} />
      </div>
    </div>
  );
};

export default Contact;
