import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import PrimeiroAcessoImg from '../Assets/PrimeiroAcesso.svg';
import Titledecorated from './Shared/Titledecorated';
import Title from './Shared/Title';
import { GlobalContext } from '../Pages/GlobalContext';
import { formFields } from './Shared/Commons/constant/form-primeiro-acesso';
import { UrlPrimeiroAcesso } from './Shared/Commons/constant/image-url-primeiro-acesso';
import './PrimeiroAcesso.css';
import '../App.css';

const PrimeiroAcesso = () => {
  const { error } = React.useContext(GlobalContext);

  const [primeiroAcesso, setPrimeiroAcesso] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    //GERAR FUNÇÃO DE FETCH POST
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPrimeiroAcesso({ ...primeiroAcesso, [id]: value });
  };

  return (
    <div className="div-main-primeiro-acesso pageView">
      <div className="div-img-primeiro-acesso">
        <img src={PrimeiroAcessoImg} alt="Imagem menina usando celular" />
        <a
          target="_blank"
          style={{ color: '#FDFDFD' }}
          href={UrlPrimeiroAcesso} rel="noreferrer"
        >
          Website vector created by stories - www.freepik.com
        </a>
      </div>
      <div className="div-form-primeiro-acesso">
        <form onSubmit={handleSubmit}>
          <Titledecorated text="Primeiro Acesso" />
          <Title text="Portal Amafresp Prestador" />
          {formFields.map(
            ({ id, label, type, require, pattern, title, maxLength }) => (
              <Input
                key={id}
                maxLength={maxLength}
                title={title}
                pattern={pattern}
                label={label}
                type={type}
                id={id}
                require={require}
                value={primeiroAcesso[id]}
                onChange={handleChange}
              />
            ),
          )}
          <div className="div-button-form-primeiro-acesso">
            <Button value="Registrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
