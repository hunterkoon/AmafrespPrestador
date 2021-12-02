
import React from 'react'
import Title from "../../../Components/Sub/Title"
import Titledecorated from "../../../Components/Sub/Titledecorated"
import FunctionalitiesModule from "./Subs/FunctionalitiesModule"
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
import BookStatic from '../../../../Assets/BookStatic.svg'
import BookGif from '../../../../Assets/BookGif.gif'
import OthersStatic from '../../../../Assets/OthersStatic.svg'
import OthersGif from '../../../../Assets/OthersGif.gif'
import Func from '../../../../Assets/DoctorsFuncionalities.svg'
import DisclaimerPayments from './Subs/DisclaimerPayments'
import { GlobalContext } from '../../Main/GlobalContext'
import "./Functionalities.css"

const Functionalities = () => {

  const linkLord = "LordIcon - https://lordicon.com/icons"
  const [urlInforms, setUrlInforms] = React.useState(null)
  const { data } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setUrlInforms(data?.DadosPrestador?.CNPJCPF)
  }, [data])

  return (
    <div className="div-main-functionalities pageView">
      <div className="div-title-pages">
        <Titledecorated text="Funcionalidades" />
      </div>
      <DisclaimerPayments />
      <div className="div-sub-functionalities-group">
        <div className="div-sub-functionalities-info">
          <img src={Func} alt="" />
          <p>
            Sejam bem-vindos à área de funcionalidades do portal Amafresp Prestador, aqui poderá encontrar todas as funcionalidades das quais já utilizava anteriormente, novas funções estão em desenvolvimento para melhor entendê-lo(a), caso tenha alguma dificuldade no acesso disponibilizaremos um meio de comunicação para eventuais chamados.
          </p>
        </div>
        <div className="div-sub-func">
          {/* Pagamentos */}
          <div>
            <Title text="Demonstrativos" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={Document}
              imgStatic={DocumentStatic}
              alt={linkLord}
              nameFunction={"Pagamentos"}
              link={"/conta/Pagamentos"}
              disclaimer={true}
            />
            {/* Atendimentos Realizados */}
            <Title text="Atendimento" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={ServiceGif}
              imgStatic={ServiceStatic}
              alt={linkLord}
              nameFunction={"Atendimentos Realizados"}
              link={"/conta/Atendimentos"}
            />
            {/* Informe de Rendimentos/Retenções */}
            <Title text="Informes" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={ImprovementsGif}
              imgStatic={ImprovementsStatic}
              alt={linkLord}
              nameFunction={"Informe de Rendimentos"}
              link={"/conta/Informes"}

            />
          </div>
          <div>
            {/* Consulta de Lotes Enviados */}
            <Title text="Faturamento" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={ServiceGif}
              imgStatic={ServiceStatic}
              alt={linkLord}
              nameFunction={"Consulta de Lotes Enviados"}
              link={"/conta/Lotes"}
            />
            {/* Envio de Lote XML */}
            <Title text="XML" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={SendArrowGif}
              imgStatic={SendArrowStatic}
              alt={linkLord}
              nameFunction={"Envio de Lote XML"}
              externalLink={"https://www.orizon.com.br/"}
            />
            {/* Recurso de Glosas */}
            <Title text="Glosas" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={CoinGif}
              imgStatic={CoinStatic}
              alt={linkLord}
              nameFunction={"Consulta de Recursos"}
              link={"/conta/Glosas"}
            />
          </div>
          <div>
            {/* Formularios */}
            <Title text="Formulários" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={Document}
              imgStatic={DocumentStatic}
              alt={linkLord}
              nameFunction={"Downloads"}
              link={"/conta/Formularios"}
            />
            {/* Elegibilidade */}
            <Title text="Elegibilidade" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={CharGif}
              imgStatic={CharStatic}
              alt={linkLord}
              nameFunction={"Consulta de Elegibilidade"}
              link={"/conta/Elegibilidade"}
            />
            {/* Tabela de Precos */}
            <Title text="Tabela de Preços" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={PriceTableGif}
              imgStatic={PriceTableStatic}
              alt={linkLord}
              nameFunction={"Solicitar"}
              link={"/conta/TabelaPrecos"}
            />
          </div>
          <div>
            {/* Dúvidas */}
            <Title text="Dúvidas" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={BookGif}
              imgStatic={BookStatic}
              alt={linkLord}
              nameFunction={"Consultar"}
              link={"/conta/Duvidas"}
            />
            {/* Outros*/}
            <Title text="Outros" size="1.3em" className="title-func" />
            <FunctionalitiesModule
              imgGif={OthersGif}
              imgStatic={OthersStatic}
              alt={linkLord}
              nameFunction={"Outros"}
              link={"/conta/Outros"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Functionalities
