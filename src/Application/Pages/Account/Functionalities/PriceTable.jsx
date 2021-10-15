import React from "react";
import Titledecorated from "../../../Components/Sub/Titledecorated";
import Title from "../../../Components/Sub/Title";
import Button from "../../../Components/Sub/Button";
import Document from "../../../../Assets/Document.gif";
import Wait from "../../../../Assets/Wait.gif";
import Down from "../../../../Assets/Down.gif";
import Succesfull from "../../../Components/Sub/Modal";
import "./PriceTable.css";

const PriceTable = () => {

  const [toggle, setToggle] = React.useState(false);
  const [boo, setBoo] = React.useState("");
  const [priceTable, setPriceTable] = React.useState("");
  const [statusIMG, setStatusIMG] = React.useState();
  //const { option } = React.useContext(GlobalContext); // estado recebe do banco priceTable de aprovação

  // TODO ALERTAR SOBRE EXISTENCIA DE CAMPO NA TABELA


  React.useEffect(() => {
    switch (boo) {
      case '1':
        setPriceTable("Aguardando");
        setStatusIMG(Wait);
        break;
      case '2':
        setPriceTable("Concluido");
        setStatusIMG(Document);
        break;
      default:
        setPriceTable("Solicite");
        setStatusIMG(Down);
    }
  }, [boo]);


  return (
    <>
      <Succesfull disclaimer="Foi Realizada a Solicitação da Tabela de Preços" alert={toggle} onClick={() => setToggle(!toggle)} />
      <div className="div-main-priceTable pageView">
        <div className="div-title-pages">
          <Titledecorated text="Status solicitação tabela de preços" />
        </div>
        <div className="div-sub-priceTable">
          <div className="div-sub-box-color-priceTable-main">
            <img className="img-priceTable" src={statusIMG} alt="" />
            <label>Status: {priceTable}</label>
          </div>

          {priceTable === "Solicite" ? (
            <div className='div-sub-solicite-priceTable'>
              <Title
                className={"menuView"}
                text="Por gentileza Solicite uma tabela de Preços !"
              />
              <Button onClick={() => [setToggle(!toggle), setBoo('1')]} value="Solicitar" />
            </div>
          ) : null}

          {priceTable === "Aguardando" ? (
            <>
              <Title
                className="menuView"
                text="Aguarde, nosso time está processando sua solicitação,
               isso pode levar alguns dias, o Sr(a) será comunicado por e-mail quando estiver disponivel para download!."
              />
            </>
          ) : null}

          {priceTable === "Concluido" ? (
            <>
              <Title
                className="menuView"
                text=" Parabéns, você você já pode realizar o download da Tabela de Preços logo abaixo!."
              />
              <h4>Clique aqui para baixar!</h4>
            </>
          ) : null}
        </div>

        {/* TODO = EXCLUIR */}
        {/* <label style={
        {
          display:'flex',
          flexDirection:'column',
          margin:'0% auto',
          width: '500px'          
        }
      }>
       Teste para status de recebimento API [0,1,2]
      <input style={{
              margin:'3% auto',
      }} type='text' value={boo} onChange={({target})=>setBoo(target.value)}/>
      </label> */}
      </div>

    </>
  );
};

export default PriceTable;
