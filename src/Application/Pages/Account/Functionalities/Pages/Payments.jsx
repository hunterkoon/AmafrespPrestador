import React from 'react'
import Load from '../../../../Components/Sub/Load'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import "./FunctionalitiesPagesCommon.css";

const Payments = () => {
  const [loadingPage, setLoadingPage] = React.useState(true)
  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Demonstrativos de Pagamento" />
      </div>
      <iframe
        sandbox
        allowfullscreen="false"
        className="iframe-function"
        frameBorder="0"
        src="http://afrespdesenv:6080/portal/Contratados/cPagamento.aspx"
        // src="http://localhost:2630/Contratados/cPagamento.aspx"
        loading="eager"
        onLoad={() => setLoadingPage(false)}
        referrerpolicy="no-referrer"
      >
      </iframe>
      <Load load={loadingPage} />
    </div >
  )
}

export default Payments
