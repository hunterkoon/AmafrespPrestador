import React from 'react'
import Load from '../../../Components/Sub/Load'
import Titledecorated from '../../../Components/Sub/Titledecorated';
import "./Payments.css";

const Payments = () => {
  const [loadingPage, setLoadingPage] = React.useState(true)
  return (
    <div className="div-main-payments pageView">
      <div className="div-title-pages">
        <Titledecorated text="Demonstrativos de Pagamento" />
      </div>
      <iframe
        sandbox
        allow
        allowfullscreen="false"
        className="iframe-function"
        frameBorder="0"
        src="http://localhost:2630/Contratados/cPagamento.aspx"
        loading="eager"
        onLoad={() => setLoadingPage(false)}
      >
      </iframe>
      <Load load={loadingPage} />
    </div >
  )
}

export default Payments
