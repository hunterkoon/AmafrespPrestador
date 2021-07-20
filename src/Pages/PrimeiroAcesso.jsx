import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import './PrimeiroAcesso.css';
import PrimeiroAcessoImg from '../Assets/PrimeiroAcesso.svg';
import Titledecorated from './Shared/Titledecorated';
import { GlobalContext } from './GlobalContext';

const PrimeiroAcesso = () => {
  const { primeiroAcesso, setPrimeiroAcesso } = React.useContext(GlobalContext);

  const [erroForm, setErroForm] = React.useState('');

  const widthInput = '100%';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(primeiroAcesso);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPrimeiroAcesso({ ...primeiroAcesso, [id]: value });
  };

  return (
    <div className="div-main-primeiro-acesso">
      <div className="div-img-primeiro-acesso">
        <img
          className="img-primeiro-acesso"
          src={PrimeiroAcessoImg}
          alt="<a href='https://www.freepik.com/vectors/website'>Website vector created by stories - www.freepik.com</a>"
        />
      </div>
      <div className="div-form-primeiro-acesso">
        <form className="form-primeiro-acesso" onSubmit={handleSubmit}>
          <Titledecorated botton="2em" text="Primeiro Acesso" />
          <Input
            error={erroForm}
            width={widthInput}
            label="E-mail"
            type="email"
            id="email"
            value={primeiroAcesso.email}
            onChange={handleChange}
          />
          <Input
            type="email"
            width={widthInput}
            label="Confirme seu E-mail"
            id="CONFIRMEemail"
            value={primeiroAcesso.CONFIRMEemail}
            onChange={handleChange}
          />
          <Input
            width={widthInput}
            label="CPF/CNPJ"
            id="CPFcnpj"
            value={primeiroAcesso.CPFcnpj}
            onChange={handleChange}
          />
          <Input
            width={widthInput}
            type="password"
            label="Senha"
            id="senha"
            value={primeiroAcesso.senha}
            onChange={handleChange}
          />
          <Input
            width={widthInput}
            type="password"
            label="Confirme sua Senha"
            id="CONFIRMEsenha"
            value={primeiroAcesso.CONFIRMEsenha}
            onChange={handleChange}
          />

          <div className="button-form-primeiro-acesso">
            <Button value="Registrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
