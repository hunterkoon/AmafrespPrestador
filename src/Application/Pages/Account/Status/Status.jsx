import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import { Link } from "react-router-dom";
//import { GlobalContext } from "../Main/GlobalContext";
import Title from "../../../Components/Sub/Title";
import Button from "../../../Components/Sub/Button";
import Check from "../../../../Assets/Check.gif";
import Wait from "../../../../Assets/Wait.gif";
import Down from "../../../../Assets/Down.gif";
import "./Status.css";

const Status = () => {
  const [boo, setBoo] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [statusIMG, setStatusIMG] = React.useState();
  //const { option } = React.useContext(GlobalContext); // estado recebe do banco status de aprovação

  // TODO ALERTAR SOBRE EXISTENCIA DE CAMPO NA TABELA

  React.useEffect(() => {
    switch (boo) {
      case "1":
        setStatus("Aguardando");
        setStatusIMG(Wait);
        break;
      case "2":
        setStatus("Concluido");
        setStatusIMG(Check);
        break;
      default:
        setStatus("Realize");
        setStatusIMG(Down);
    }
  }, [boo]);

  return (
    <div className="div-main-status pageView">
      <div className="div-title-pages">
        <Titledecorated text="Status atualização cadastral" />
      </div>

      <div className="div-sub-status">
        <div className="div-sub-box-color-status-main">
          <img className="img-status" src={statusIMG} alt="" />
          {/* <div className={`div-sub-box-color-status ${status}`} /> */}
          <label>Status: {status}</label>
        </div>
        {status === "Realize" ? (
          <div>
            <Title
              className={"menuView"}
              text="Por gentileza realize a Atualização Cadastral!"
            />
            <Link to="/conta/RegisterUpdate">
              <Button value="Atualização" />
            </Link>
          </div>
        ) : null}

        {status === "Aguardando" ? (
          <>
            <Title
              className="menuView"
              text="Aguarde, nosso time de credênciamento esta verificando as
          informações enviadas!."
            />
          </>
        ) : null}

        {status === "Concluido" ? (
          <>
            <Title
              className="menuView"
              text=" Parabéns, você realizou a atualização cadastral e está tudo em
              ordem!."
            />
          </>
        ) : null}
      </div>
      <input type="text" onChange={({ target }) => setBoo(target.value)} />
    </div>
    
  );
};

export default Status;
