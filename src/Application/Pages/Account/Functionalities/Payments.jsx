import React from 'react'
import Load from '../../../Components/Sub/Load'
import Iframe from 'react-iframe-click';
import Titledecorated from '../../../Components/Sub/Titledecorated';
import "./Payments.css";

const Payments = () => {

  const [loadingPage, setLoadingPage] = React.useState(true)

  const handleLoading = (e) => {
    if (e) {
      setLoadingPage(!loadingPage)
      setInterval(() => {
        setLoadingPage(false)
      }, 3000);
    }
  }

  return (
    <div className="div-main-payments pageView">
      <div className="div-title-pages">
        <Titledecorated text="Demonstrativos de Pagamento" />
      </div>
      <Iframe
        className="iframe-function"
        frameBorder="0"
        src="http://localhost:2630/Contratados/cPagamento.aspx"
        loading="eager"
        onInferredClick={() => setLoadingPage(true)}
        onLoad={(e) => handleLoading(e)}
      >
      </Iframe>
      <Load load={loadingPage} />
    </div >
  )
}

export default Payments
