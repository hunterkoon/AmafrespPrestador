import React from "react";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button_Back from "../../../Assets/Button_Back.svg";
import User_Profile from "../../../Assets/UserProfille.svg";
import Button from "../Sub/Button";
import "./MenuSuperior.css";
const MenuSuperior = () => {
  const { profile, setProfile, data, login } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={
          profile && login
            ? "div-main-menu-superior"
            : "div-main-menu-superior-deactived"
        }
      >
        <div className="div-main-dados-menu-superior">
          <div className="div-menu-superior-title">
            <h1>Dados Prestador / Usuário</h1>
            <span className="span-buttons-close">
              <Button
                onClick={() => setProfile(false)}
                color="#E20000"
                value="Fechar"
                textColor="#ffff"
              />
              <Button
                onClick={() => [navigate("/conta/perfil"), setProfile(false)]}
                color="#017663 "
                value="Perfil"
                textColor="#ffff"
              />
            </span>
          </div>
          <div className="div-prestador-menu-superior">
            <div>
              <h2>Empresa:</h2>
              <h4>{data ? data[0].EMPRESA : "Lorem Ipsum"}</h4>
            </div>
            <div>
              <h2>CNPJ:</h2>
              <h4>{data ? data[0].CNPJ : "Lorem Ipsum"}</h4>
            </div>
            <div>
              <h2>Segmento:</h2>
              <h4>{data ? data[0].SEGMENTO : "Lorem Ipsum"}</h4>
            </div>
            <div>
              <h2>Tipo Credenciado: </h2>
              <h4>{data ? data[0].TIPO_CREDENCIADO : "Lorem Ipsum"}</h4>
            </div>
          </div>
          <div className="div-colaborador-menu-superior">
            <div>
              <h2>Nome:</h2>
              <h4>{data ? data[0].NOME : "Lorem Ipsum"}</h4>
            </div>
            <div>
              <h2>Departamento:</h2>
              <h4>{data ? data[0].DEPARTAMENTO : "Lorem Ipsum"}</h4>
            </div>
            <div
              onClick={() => setProfile(!profile)}
              className="div-user-menu-superior"
            >
              <Link to="/conta/perfil">
                <img src={User_Profile} alt="" />
                <h2>Perfil</h2>
              </Link>
            </div>
            <div className="div-button-back-menu-superior">
              <img
                onClick={() => setProfile(!profile)}
                src={Button_Back}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSuperior;
