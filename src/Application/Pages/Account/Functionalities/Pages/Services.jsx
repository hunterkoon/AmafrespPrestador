import React from 'react'
import Load from '../../../../Components/Sub/Load'
import Titledecorated from '../../../../Components/Sub/Titledecorated';
import "./FunctionalitiesPagesCommon.css";

const Services = () => {
  const [loadingPage, setLoadingPage] = React.useState(true)
  return (
    <div className="div-main-FunctionalitiesCommon pageView">
      <div className="div-title-pages">
        <Titledecorated text="Atendimentos Realizados" />
      </div>
      <iframe
        sandbox
        allow
        allowfullscreen="false"
        className="iframe-function"
        frameBorder="0"
        allow-forms
        allow-scripts
        src="http://afrespdesenv:6080/portal/Contratados/cAtendimento.aspx"
        // src="http://localhost:2630/Contratados/cAtendimento.aspx"
        loading="eager"
        onLoad={() => setLoadingPage(false)}
        referrerpolicy="no-referrer"
      >
      </iframe>
      <Load load={loadingPage} />
    </div >
  )
}

export default Services
