import React from 'react'
import Load from '../../../../Components/Sub/Load'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import "./FunctionalitiesPagesCommon.css";

const Eligibility = () => {
  const [loadingPage, setLoadingPage] = React.useState(true)
  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Consulta de Elegibilidade" />
      </div>
      <iframe
        sandbox
        allowfullscreen="false"
        className="iframe-function"
        frameBorder="0"
        src="http://afrespdesenv:6080/portal/Contratados/elegibilidade.aspx"
        loading="eager"
        onLoad={() => setLoadingPage(false)}
        referrerpolicy="no-referrer"
      >
      </iframe>
      <Load load={loadingPage} />
    </div >
  )
}

export default Eligibility
