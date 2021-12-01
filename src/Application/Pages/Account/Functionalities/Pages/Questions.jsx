import React from 'react'
import Load from '../../../../Components/Sub/Load'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import "./FunctionalitiesPagesCommon.css";
import Padronizacao from '../../../../../Assets/Documents/tiss_porque_padronizar.pdf'
import GuiasCampos from '../../../../../Assets/Documents/tiss_guias_campos.pdf'
import PadraoTiss from '../../../../../Assets/Documents/tiss_alteracao.pdf'
import Comunicacao from '../../../../../Assets/Documents/tiss_comunicacao.pdf'
import Tuss from '../../../../../Assets/Documents/tiss_tuss.pdf'
import Down from '../../../../../Assets/Download.svg'
import IconDoubt from "../../../../../Assets/IconDoubt.svg";
import Title from '../../../../Components/Sub/Title';
const Questions = () => {
  // const [loadingPage, setLoadingPage] = React.useState(true)
  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Dúvidas" />
        <Title size={"1.6em"} text="Área de ajuda ao usuário." />
      </div>

      <div className="div-sub-questions">

        <div className="div-sub-img-help">
          <img src={IconDoubt} alt="Vetor Duvida" />
        </div>

        <section className="section-quests-links">
          <a href={Padronizacao} download>
            <img src={Down} alt="" />
            <h1>Por que padronizar?</h1>
          </a>

          <a href={GuiasCampos} download>
            <img src={Down} alt="" />
            <h1>Guias e campos</h1>
          </a>

          <a href={PadraoTiss} download>
            <img src={Down} alt="" />
            <h1>Alteração no Padrão TISS</h1>
          </a>

          <a href={Comunicacao} download>
            <img src={Down} alt="" />
            <h1> Comunicação</h1>
          </a>

          <a href={Tuss} download>
            <img src={Down} alt="" />
            <h1>TUSS</h1>
          </a>
        </section>
      </div>

    </div >
  )
}

export default Questions
