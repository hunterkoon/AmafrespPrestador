import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import './PrimeiroAcesso.css';
import PrimeiroAcessoImg from '../Assets/PrimeiroAcesso.svg';
import Titledecorated from './Shared/Titledecorated';
import Title from './Shared/Title';

const PrimeiroAcesso = () => {
  const formFields = [
    {
      id: 'usuarios',
      type: 'text',
      label: 'Usuário',
      require: 'true',
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      require: 'true',
    },
    {
      id: 'CONFIRMEemail',
      type: 'email',
      label: 'Confirme seu E-mail',
      require: 'true',
    },
    {
      id: 'CPFcnpj',
      type: 'text',
      label: 'CPF/CNPJ',
      require: 'true',
      pattern: '[0-9]{11} ',
      title:
        'Digite um CPF no formato: 00000000000 ou um CNPJ no formato 0000000000000',
      maxLength: '18',
    },
    {
      id: 'senha',
      type: 'password',
      label: 'Senha',
      require: 'true',
      maxLength: '18',
    },
    {
      id: 'CONFIRMEsenha',
      type: 'password',
      label: 'Confirme sua Senha',
      require: 'true',
      maxLength: '18',
    },
  ];

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
    <div className="div-main-primeiro-acesso">
      <div className="div-img-primeiro-acesso">
        <img
          className="img-primeiro-acesso"
          src={PrimeiroAcessoImg}
          alt="Imagem menina segurando chave"
        />
        <a
          target="_blank"
          style={{ color: '#FDFDFD' }}
          href="https://www.freepik.com/vectors/website"
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
          <div className="button-form-primeiro-acesso">
            <Button value="Registrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
