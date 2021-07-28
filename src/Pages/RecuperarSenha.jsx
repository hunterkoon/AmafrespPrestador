import React from 'react';
import './RecuperarSenha.css';
import Titledecorated from '../Pages/Shared/Titledecorated';
import Input from './Shared/Input';
import Button from './Shared/Button';
import RecuperarSenhaImg from '../Assets/RecuperacaoSenha.svg';
import { Link } from 'react-router-dom';
const RecuperarSenha = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recover);
  };
  const recoverFields = [
    {
      id: 'cnpj',
      type: 'text',
      label: 'CNPJ/CPF',
      // require: 'true',
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      // require: 'true',
    },
  ];
  const [recover, setRecover] = React.useState(
    recoverFields.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: '',
      };
    }, {}),
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setRecover({ ...recover, [id]: value });
  };

  return (
    <>
      <div className="div-main-recuperar-senha">
        <div className="div-img-recuperar-senha">
          <img src={RecuperarSenhaImg} alt="" />
          <a href="https://www.freepik.com/vectors/woman">
            Woman vector created by stories - www.freepik.com
          </a>
        </div>
        <div className="div-form-recuperar-senha">
          <Titledecorated botton="2em" text="Recuperação de Senha" />
          <form onSubmit={handleSubmit}>
            {recoverFields.map(({ id, label, require, type }) => (
              <Input
                key={id}
                id={id}
                label={label}
                require={require}
                type={type}
                onChange={handleChange}
                value={recover[id]}
              />
            ))}
            <div className="div-button-recuperar-senha">
              <Button value="Recuperar" />
              <Link to="/RecuperarEmail">Esqueci meu e-mail</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecuperarSenha;