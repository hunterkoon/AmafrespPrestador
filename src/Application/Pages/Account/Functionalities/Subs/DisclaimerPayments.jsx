import React from 'react'
import './DisclaimerPayments.css'
const DisclaimerPayments = ({ ...props }) => {

  const [isOpened, setIsOpened] = React.useState(true)

  const hanldeLocal = () => {
    return localStorage.setItem("disclaimerIsOpened", true)
  }

  React.useEffect(() => {
    let disclaimer = localStorage.getItem("disclaimerIsOpened")
    if (disclaimer) {
      setIsOpened(false)
    } else return null
  })

  return (
    isOpened ?
      <>
        <div className="disclaimer-area"></div>
        <div className={"disclaimer-payments-on pageView"} >
          <h1 onClick={() => [hanldeLocal(), setIsOpened(false)]}>X</h1>
          <p Style="color:#414141">
            <strong Style="font-size:1.6em; "> Atenção:</strong><br />
            Os Demonstrativos de Pagamento e Análise de Contas (incluindo as Glosas), estão disponíveis no site da Orizon. Em breve, este serviço será desabilitado no site da AMAFRESP e será disponibilizado somente no Portal da Orizon.
            Maiores informações sobre o acesso ao portal da Orizon entrar em contato pelos telefones 3003-7333 (regiões metropolitanas) e 0800 724 7333 (Demais regiões).
           </p>
        </div>
      </>
      : null
  )
}

export default DisclaimerPayments
