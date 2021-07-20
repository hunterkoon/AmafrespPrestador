import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import './PrimeiroAcesso.css';
const PrimeiroAcesso = () => {
  return (
    <div className="div-main-primeiro-acesso">
      <div>
        <img
          src=""
          alt="<a href='https://www.freepik.com/vectors/website'>Website vector created by stories - www.freepik.com</a>"
        />
      </div>
      <div className="div-form">
        <form action="">
          <Input label="E-mail" id="email" />
          <Input label="Confirme seu E-mail" id="confime_email" />
          <Input label="CPF/CNPJ" id="cpf" />
          <Input label="Senha" id="cpf" />
          <Input label="Confirme sua Senha" id="cpf" />
          <Button value="Registrar" onClick={() => console.log('enviado')} />
        </form>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
