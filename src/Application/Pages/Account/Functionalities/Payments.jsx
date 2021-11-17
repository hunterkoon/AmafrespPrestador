import React from 'react'
import "./Payments.css";
import Titledecorated from '../../../Components/Sub/Titledecorated';
import { GlobalContext } from '../../Main/GlobalContext';
import LoadPage from '../../../Components/Sub/Load';
import PaymentsIframe from './Subs/PaymentsIframe';

const Payments = () => {
  const [loads, setLoads] = React.useState(true);
  const [payments, setPayments] = React.useState(null);

  React.useEffect(() => {
    setPayments(<PaymentsIframe />)
    const setTime = () => {
      setTimeout(() => setLoads(false), 1000)
    }
    setTime()
  }, [loads])

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
