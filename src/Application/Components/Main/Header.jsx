import React from "react";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import { useNavigate } from "react-router";
import MenuSuperior from "./MenuSuperior";
import Hamburguer from "./Hamburguer";
import Seta from "../../../Assets/Seta_Verde.svg";
import Logotipo from "../../../Assets/Logo Amafresp.svg";
import useWindowDimensions from "../../Hooks/UseDimensionScreen";
import "./Header.css";

export default function Header() {
  const { setProfile, profile, login, setAnimateMenu, handleLogout, data } = React.useContext(GlobalContext);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const handleClick = () => {
    setProfile(!profile);
    setAnimateMenu(false);
  };

  return (
    <>
      <MenuSuperior />
      <header className="Header">
        <div className="div-img-logotipo">
          <img
            onClick={() => (login ? navigate("/conta") : navigate("/"))}
            src={Logotipo}
            alt="Logotipo Amafresp"
          />
        </div>
        {login ? (
          <div
            className="main-div-user"
            onClick={width <= "1024" ? handleClick : null}
          >
            <div onClick={handleClick} className="div-user-info-panel">
              <img
                id="user"
                style={{
                  transform: profile ? "Rotate(0deg)" : "Rotate(180deg)",
                }}
                className="Seta"
                src={Seta}
                alt=""
              />
            </div>
            {data.DadosPrestador ?
              <div onClick={handleClick} className="div-user-info">
                <span className="span-user">
                  {data.nome}
                </span>
                <span className="span-employ">
                  {data.DadosPrestador.Fantasia}
                </span>
              </div> : null}
          </div>
        ) : null}

        <div
          onClick={handleLogout}
          className={login ? "div-sair" : "div-sair-nologin"}
        >
          Sair
        </div>

        {(width <= 1024 && login === true) && login ? (
          <div className="div-hamburguer">
            <Hamburguer />
          </div>
        ) : null}
      </header>
    </>
  );
}
