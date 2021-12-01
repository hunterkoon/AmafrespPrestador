
import React from 'react'
import Title from "../../../Components/Sub/Title"
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
import SendArrowStatic from '../../../../Assets/SendArrowStatic.svg'
import SendArrowGif from '../../../../Assets/SendArrowGif.gif'
import CoinStatic from '../../../../Assets/CoinStatic.svg'
import CoinGif from '../../../../Assets/CoinGif.gif'
import CharStatic from '../../../../Assets/CharStatic.svg'
import CharGif from '../../../../Assets/CharGif.gif'
import Load from '../../../Components/Sub/Load'
import "./Functionalities.css"
import Glosas from './Pages/Glosas'

const Functionalities = () => {
  // const [loadingPage, setLoadingPage] = React.useState(true)
  const linkLord = "LordIcon - https://lordicon.com/icons"

  const DisclaimerPayments = () => {
    return <div className={"disclaimer-payments-on"} >
      <p>
        Atenção:
        Os Demonstrativos de Pagamento e Análise de Contas (incluindo as Glosas), estão disponíveis no site da Orizon. Em breve, este serviço será desabilitado no site da AMAFRESP e será disponibilizado somente no Portal da Orizon.
        Maiores informações sobre o acesso ao portal da Orizon entrar em contato pelos telefones 3003-7333 (regiões metropolitanas) e 0800 724 7333 (Demais regiões).
      </p>
    </div>
  }
  return (
    <div className="div-main-functionalities pageView">
      <div className="div-title-pages">
        <Titledecorated text="Funcionalidades" />
      </div>
      
      <DisclaimerPayments />

      <div className="div-sub-functionalities-group">
        {/* Demonstrativos */}
        <div className="div-sub-func">
          <Title text="Demonstrativos" size="1.6em" className="title-func" />
          {/* Pagamentos */}
          <FunctionalitiesModule
            imgGif={Document}
            imgStatic={DocumentStatic}
            alt={linkLord}
            nameFunction={"Pagamentos"}
            link={"/conta/Pagamentos"}
            disclaimer={true}
          />
          {/* Atendimentos Realizados */}
          <FunctionalitiesModule
            imgGif={ServiceGif}
            imgStatic={ServiceStatic}
            alt={linkLord}
            nameFunction={"Atendimentos Realizados"}
            link={"/conta/Atendimentos"}
          />
          {/* Informe de Rendimentos/Retenções */}
          <FunctionalitiesModule
            imgGif={ImprovementsGif}
            imgStatic={ImprovementsStatic}
            alt={linkLord}
            nameFunction={"Informe de Rendimentos/Retenções"}
            link={"/conta/Informes"}
          />
        </div>

        {/* Faturamento */}
        <div className="div-sub-func">
          <Title text="Faturamento" size="1.6em"   className="title-func"/>
          {/* Consulta de Lotes Enviados */}
          <FunctionalitiesModule
            imgGif={ServiceGif}
            imgStatic={ServiceStatic}
            alt={linkLord}
            nameFunction={"Consulta de Lotes Enviados"}
            link={"/conta/Lotes"}
          />
          {/* Envio de Lote XML */}
          <FunctionalitiesModule
            imgGif={SendArrowGif}
            imgStatic={SendArrowStatic}
            alt={linkLord}
            nameFunction={"Envio de Lote XML"}
            externalLink={"https://www.orizon.com.br/"}
          />
        </div>

        {/* Recurso de Glosas */}
        <div className="div-sub-func">
          <Title text="Glosas" size="1.6em" className="title-func"  />
          {/* Consulta de Recursos */}
          <FunctionalitiesModule
            imgGif={CoinGif}
            imgStatic={CoinStatic}
            alt={linkLord}
            nameFunction={"Consulta de Recursos"}
            link={"/conta/Glosas"}
          />
        </div>

        {/* Elegibilidade */}
        <div className="div-sub-func">
          <Title text="Elegibilidade" size="1.6em"  className="title-func" />
          {/* Consulta de Elegibilidade */}
          <FunctionalitiesModule
            imgGif={CharGif}
            imgStatic={CharStatic}
            alt={linkLord}
            nameFunction={"Consulta de Elegibilidade"}
            link={"/conta/Elegibilidade"}
          />
        </div>

      </div>

    </div>
  )
}

export default Functionalities
