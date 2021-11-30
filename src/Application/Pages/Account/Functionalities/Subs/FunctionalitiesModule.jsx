import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./FunctionalitiesModule.css"


const FunctionalitiesModule = ({ ...props }) => {
  const [imgState, setImgState] = React.useState(false);
  const [mouseEnter, setMouseEnter] = React.useState(false);
  // const [animate, setAnimate] = React.useState(false);
  const navigate = useNavigate();



  React.useEffect(() => {
    if (mouseEnter) {
      // setAnimate("animation")
      setImgState(props.imgGif)
    }
    else {
      // setAnimate(null)
      setImgState(props.imgStatic)
    }
  })

  return (
    <div
      className="functionalities-module"
      onClick={() => navigate(props.link)}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >

      <img
        src={imgState}
        alt={props.alt}
      // className={animate}
      />
      <h4>{props.nameFunction}</h4>
    </div>
  )
}

export default FunctionalitiesModule
