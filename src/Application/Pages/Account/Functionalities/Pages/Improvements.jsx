import React from 'react'
import Load from '../../../../Components/Sub/Load'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import { GlobalContext } from '../../../Main/GlobalContext';
import "./FunctionalitiesPagesCommon.css";

const Payments = () => {
  const [url, setUrl] = React.useState(null)
  const [loadingPage, setLoadingPage] = React.useState(true)
  const { data } = React.useContext(GlobalContext)

  React.useEffect(() => {
    setUrl(data.DadosPrestador.CNPJCPF)
  }, [data])
  console.log(url)

  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Informe de Rendimentos/Retenções" />
      </div>

      <iframe
        sandbox={true}
        className="iframe-function"
        frameBorder="0"
        src={`http://amafresp.afresp.org.br/ExtratoCredenciado/Default.aspx?id=${url}`}
        // src="http://localhost:2030/Contratados/cPagamento.aspx"
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
