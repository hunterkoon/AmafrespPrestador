import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import './PrimeiroAcesso.css';
import PrimeiroAcessoImg from '../Assets/PrimeiroAcesso.svg';
import Titledecorated from './Shared/Titledecorated';

const PrimeiroAcesso = () => {
  const formFields = [
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
      // require: 'false',
      // pattern: '[0-9]{11} ',
      // title:
      //   'Digite um CPF no formato: xxx.xxx.xxx-xx ou um CNPJ no formato xx.xxx.xxx/xxxx-xx',
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
          alt="<a href='https://www.freepik.com/vectors/website'>Website vector created by stories - www.freepik.com</a>"
        />
      </div>
      <div className="div-form-primeiro-acesso">
        <form className="form-primeiro-acesso" onSubmit={handleSubmit}>
          <Titledecorated botton="2em" text="Primeiro Acesso" />
          {formFields.map(
            ({ id, label, type, require, pattern, title, maxLength }) => (
              <>
                <Input
                  maxLength={maxLength}
                  title={title}
                  pattern={pattern}
                  key={id}
                  width="100%"
                  label={label}
                  type={type}
                  id={id}
                  value={primeiroAcesso[id]}
                  require={require}
                  onChange={handleChange}
                />
              </>
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
