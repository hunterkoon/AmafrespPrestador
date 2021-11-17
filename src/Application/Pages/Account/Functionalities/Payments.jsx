import React from 'react'
import "./Payments.css";
import Titledecorated from '../../../Components/Sub/Titledecorated';
import { GlobalContext } from '../../Main/GlobalContext';

const Payments = () => {
  const { CNPJCPF } = React.useContext(GlobalContext)
  const iframeRef = React.useRef();

  // function getTags() {
  //   let iframe = document.getElementById('iframeLegacy');
  //   let innerDoc = iframe.contentWindow.document;
  //   console.log(innerDoc)
  // }

  React.useEffect(() => { console.log(iframeRef.current) })

  return (
    <div className="div-main-payments pageView">
      <div className="div-title-pages">
        <Titledecorated text="Demonstrativos de Pagamento" />
      </div>

      {/* <div className="div-inputs">
        <label htmlFor="login">Credenciado</label>
        <input ref={inputLogin} id="login" type="text" />
        <label htmlFor="pass">Senha</label>
        <input ref={inputPass} id="pass" type="password" />
      </div> */}
      <iframe
        ref={iframeRef}
        className="iframe-function"
        frameBorder="0"
        allowfullscreen="false"
        src="http://localhost:2630/Contratados/cPagamento.aspx"
      >
      </iframe>

    </div>
  )
}



export default Payments
