import './NotFound.css';
import React from 'react';
import Error from '../Assets/error.svg';
import Button from './Shared/Button';
import { useNavigate } from 'react-router';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="div-main-error">
      <h1 className="h1-error">Página não encontrada!</h1>
      <h1 className="h1-error">Verifique o endereço URL - Erro 404</h1>
      <img className="img-error" src={Error} alt="" />
      <Button value="Voltar" onClick={() => navigate('./')} />
    </div>
  );
};

export default NotFound;
