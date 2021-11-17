import React from 'react'
import Titledecorated from '../../../Components/Sub/Titledecorated';
import PaymentsIframe from './Subs/PaymentsIframe';
import "./Payments.css";

const Payments = () => {

  return (
    <div className="div-main-payments pageView">
      <div className="div-title-pages">
        <Titledecorated text="Demonstrativos de Pagamento" />
      </div>
      <PaymentsIframe />
    </div>
  )
}



export default Payments
