import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./FunctionalitiesModule.css"

const FunctionalitiesModule = ({ ...props }) => {
  const [imgState, setImgState] = React.useState(false);
  const [mouseEnter, setMouseEnter] = React.useState(false);
  const navigate = useNavigate();

  const externalLink = () => {
    window.open(props.externalLink, '_blank');
  }
  const Popup = () => {
    return (
      <div className={mouseEnter ? "popup" : "popup-back"}>
        <p>{props.popup}</p>
      </div>
    )
  }
  React.useEffect(() => {
    if (mouseEnter) {
      setImgState(props.imgGif)
    }
    else {
      setImgState(props.imgStatic)
    }
  }, [mouseEnter])

  return (
    <>
      {props.popup ?
        <Popup text="Popup" />
        : null}
      <div
        className="functionalities-module menuView"
        onClick={() => props.link != undefined ? navigate(props.link) : externalLink()}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >

        <img
          src={imgState}
          alt={props.alt}
        />
        <h4>{props.nameFunction}</h4>
      </div>
    </>

  )
}

export default FunctionalitiesModule
