
import React from 'react'
import Titledecorated from "../../../Components/Sub/Titledecorated"
import FunctionalitiesModule from "./Subs/FunctionalitiesModule"
import Gear from '../../../../Assets/Gear.svg'
import Document from '../../../../Assets/DocumentBills.gif'
import DocumentStatic from '../../../../Assets/DocumentBillsStatic.svg'
import PriceTableStatic from '../../../../Assets/PriceTableStatic.svg'
import PriceTableGif from '../../../../Assets/PriceTableGif.gif'
import ServiceStatic from '../../../../Assets/ServiceStatic.svg'
import ServiceGif from '../../../../Assets/ServiceGif.gif'
import ImprovementsGif from '../../../../Assets/ImprovementsGif.gif'
import ImprovementsStatic from '../../../../Assets/ImprovementsStatic.svg'
import Title from "../../../Components/Sub/Title"
import "./Functionalities.css"
import Load from '../../../Components/Sub/Load'

const Functionalities = () => {

  const [loadingPage, setLoadingPage] = React.useState(true)

  return (
    <div className="div-main-functionalities pageView">
      <div className="div-title-pages">
        <Titledecorated text="Funcionalidades" />
      </div>

      <iframe
        className="noframe"
        // src={"http://localhost:2630/Contratados/painel.aspx"}
        src={"http://afrespdesenv:6080/portal/restrita.aspx"}
        loading="eager"
        onLoad={() => setLoadingPage(false)}

      ></iframe>
      <Load load={loadingPage} />

      {!loadingPage ?
        <div className="div-sub-functionalities-group">
          {/* Demonstrativos */}
          <>
            <Title text="Demonstrativos" size="1.6em" />
            <div className="div-sub-functionalities">
              {/* Pagamentos */}
              <FunctionalitiesModule
                imgGif={Document}
                imgStatic={DocumentStatic}
                alt={"LordIcon - https://lordicon.com/icons"}
                nameFunction={"Pagamentos"}
                link={"/conta/Pagamentos"}
              />
              {/* Atendimentos Realizados */}
              <FunctionalitiesModule
                imgGif={ServiceGif}
                imgStatic={ServiceStatic}
                alt={"LordIcon - https://lordicon.com/icons"}
                nameFunction={"Atendimentos Realizados"}
                link={"/conta/Atendimentos"}
              />
              {/* Informe de Rendimentos/Retenções */}
              <FunctionalitiesModule
                imgGif={ImprovementsGif}
                imgStatic={ImprovementsStatic}
                alt={"LordIcon - https://lordicon.com/icons"}
                nameFunction={"Informe de Rendimentos/Retenções"}
                link={"/conta/Informes"}
              />

            </div>
          </>

          <Title text="Faturamento" size="1.6em" />
          <div className="div-sub-functionalities">

            <FunctionalitiesModule
              imgGif={Gear}
              imgStatic={Gear}
              alt={"LordIcon - https://lordicon.com/icons"}
              nameFunction={"Em Construção"}
              link={"/conta/"}
            />
            <FunctionalitiesModule
              imgGif={Gear}
              imgStatic={Gear}
              alt={"LordIcon - https://lordicon.com/icons"}
              nameFunction={"Em Construção"}
              link={"/conta/"}
            />
          </div>


        </div> : null}

    </div>
  )
}

export default Functionalities
