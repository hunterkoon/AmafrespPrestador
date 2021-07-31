import './NotFound.css';
import React from 'react';
import Error from '../Assets/error.svg';
import Button from './Shared/Button';
import { useNavigate } from 'react-router';
import Title from '../Pages/Shared/Title';
import Titledecorated from './Shared/Titledecorated';
import '../App.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="div-main-error pageView">
      <Title text="Página não encontrada!" />
      <Titledecorated text="Verifique o endereço URL - Erro 404" />
      <img className="img-error" src={Error} alt="" />
      <Button value="Voltar" onClick={() => navigate('./')} />
    </div>
  );
};

export default NotFound;
