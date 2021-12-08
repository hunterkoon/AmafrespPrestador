import React from "react";
import Titledecorated from "../../Components/Sub/Titledecorated";
import Title from "../../Components/Sub/Title";
import HelperText from "../../Components/Sub/HelperText";
import IconDoubt from "../../../Assets/IconDoubt.svg";
import "./Help.css";
import "../../../App.css";
import "../../Components/Sub/HelperText.css"

const Help = () => {
  return (
    <div className="div-main-help pageView">
      <div className="div-sub-help">
        <Titledecorated text="Ajuda!" />
        <Title text="Área de ajuda ao usuário." />
      </div>

      <div className="div-sub-main-help">
        <div className="div-sub-img-help">
          <img src={IconDoubt} alt="Vetor Duvida" />
        </div>

        <div className="div-sub-txt-help">
          <HelperText
            title="
            Quando devo realizar login como administrador?"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            congue quisque egestas diam in arcu cursus euismod quis. Aliquam
            faucibus purus in massa tempor nec feugiat nisl pretium. Egestas
            egestas fringilla phasellus faucibus. At elementum eu facilisis sed
            odio morbi quis commodo odio.
          </HelperText>

          <HelperText
            title="
            Quando devo realizar login como usuário?"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            congue quisque egestas diam in arcu cursus euismod quis. Aliquam
            faucibus purus in massa tempor nec feugiat nisl pretium. Egestas
            egestas fringilla phasellus faucibus. At elementum eu facilisis sed
            odio morbi quis commodo odio.
          </HelperText>

          <HelperText
            title="
            Como realizo meu primeiro acesso?"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            congue quisque egestas diam in arcu cursus euismod quis. Aliquam
            faucibus purus in massa tempor nec feugiat nisl pretium. Egestas
            egestas fringilla phasellus faucibus. At elementum eu facilisis sed
            odio morbi quis commodo odio.
          </HelperText>

          <HelperText
            title="
            Qual prazo de validação do meu primeiro acesso?"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            congue quisque egestas diam in arcu cursus euismod quis. Aliquam
            faucibus purus in massa tempor nec feugiat nisl pretium. Egestas
            egestas fringilla phasellus faucibus. At elementum eu facilisis sed
            odio morbi quis commodo odio.
          </HelperText>
        </div>
      </div>
    </div>
  );
};

export default Help;
