const PaymentsIframe = () => {
  const IframeOldFunction = () => {
    return (
      <iframe
        className="iframe-function"
        frameBorder="0"
        allowfullscreen="false"
        src="http://localhost:2630/Contratados/cPagamento.aspx"
        loading="lazy"
      >
      </iframe>
    )
  }
  return (
    <IframeOldFunction />
  )
}

export default PaymentsIframe
