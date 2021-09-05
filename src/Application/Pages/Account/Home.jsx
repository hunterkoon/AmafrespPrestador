import React from 'react';
import { GlobalContext } from '../Main/GlobalContext';
import { Link } from 'react-router-dom';
import Titledecorated from '../../Components/Sub/Titledecorated';
import Button from '../../Components/Sub/Button';
import MainImage from '../../../Assets/Conta.svg'
import './Home.css';

const Home = () => {
  const { data } = React.useContext(GlobalContext);

  function formatName(name) {
    const arrName = name.split(' ');
    const firstLetter = arrName[0].charAt(0);
    const toTitleName =
      firstLetter + arrName[0].substr(1, arrName[0].length).toLowerCase();
    return toTitleName;
  }

  return (
    <>
      <div className="div-main-home pageView">
        <div className="div-title-pages pageView">
          <Titledecorated
            text={`Olá, ${data ? formatName(data[0].NOME) : 'NOME'}`}
          />
        </div>
        <div className="div-img-home">
          <img src={MainImage} alt="" />
        </div>

        <div className="div-text-home">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi
            possimus? Officia obcaecati placeat saepe suscipit deleniti rem id,
            repudiandae nisi numquam sapiente, quae ipsa architecto blanditiis
            rerum aliquid molestiae!
          </p>
        </div>
        <div className="button-recadastrar">
          <Link to="RegisterUpdate">
            <Button value="Recadastrar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
