import React from 'react'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import Title from '../../../../Components/Sub/Title';
import "./FunctionalitiesPagesCommon.css";
import Sos from '../../../../../Assets/SOS.svg'
import Adress from '../../../../../Assets/Adress.svg'
import User from '../../../../../Assets/User_Green.svg'
import Freepik from '../../../../Shared/Commons/Constants/Freepik';

const Others = () => {
  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Outras Informações" />
      </div>
      <div className="div-others">

        <div className="div-emergencia">
          <img src={Sos} alt="icone saude" />
          <div>
            <Title text="Remoção/Emergência" size="1.3em" />
            <p>Contato para remoção BEM - 0800 173017</p>
          </div>
        </div>

        <div className="div-emergencia">
          <img src={Adress} alt="icone saude" />
          <div>
            <Title text="Endereço para entrega de faturamento físico" size="1.3em" />
            <p>
              Av. Brigadeiro Luís Antônio, 4.843 - 1º andar - Jd. Paulista CEP: 01401-002 - São Paulo - SP. - Analises de Contas Médicas
            </p>
          </div>
        </div>
      </div >

      <div className="div-others-coord">
        <div className="div-coord">
          <img src={User} alt="icone pessoa" />
          <div>
            <Title text="Coordenador TISS" size="1.3em" />
            <p>Rosângela Lázaro</p>
            <p >11 3886 881</p>
            <p>rosangela@afresp.org.br</p>
          </div>

        </div>
        <div className="div-coord">
          <img src={User} alt="icone pessoa" />
          <div>
            <Title text="Suplente TISS" size="1.3em" />
            <p>Alexandre Silva Palácio</p>
            <p >11 3886 8903</p>
            <p>palacio@afresp.org.br</p>
          </div>
        </div>
      </div>
      <Freepik />
    </div>
  )
}

export default Others
