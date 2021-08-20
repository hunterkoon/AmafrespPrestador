import React from 'react';
import { useNavigate } from 'react-router';
import Title from '../../Components/Sub/Title';
import Titledecorated from '../../Components/Sub/Titledecorated';
import Button from '../../Components/Sub/Button';
import Error from '../../../Assets/error.svg'
import './NotFound.css';
import '../../../App.css';

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
