import React from 'react';
import Input from '../Pages/Shared/Input';
import Button from '../Pages/Shared/Button';
import PrimeiroAcessoImg from '../Assets/PrimeiroAcesso.svg';
import Titledecorated from './Shared/Titledecorated';
import Title from './Shared/Title';
import { GlobalContext } from '../Pages/GlobalContext';
import { FormFirstAcess } from './Shared/Commons/constant/FormFirstAcess';
import { UrlPrimeiroAcesso } from './Shared/Commons/constant/image-url-primeiro-acesso';
import './PrimeiroAcesso.css';
import '../App.css';

const PrimeiroAcesso = () => {
  const { error , firtAcessData , setFirtAcessData} = React.useContext(GlobalContext);
  const {firstAcessForm} = FormFirstAcess(firtAcessData)

  const [primeiroAcesso, setPrimeiroAcesso] = React.useState(
    firstAcessForm.reduce((acc, field) => {
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

  React.useEffect(()=>{
    setFirtAcessData(primeiroAcesso)
  },[primeiroAcesso])

  return (
    <div className="div-main-primeiro-acesso pageView">
      <div className="div-img-primeiro-acesso">
        <img src={PrimeiroAcessoImg} alt="Imagem menina usando celular" />
        <a
          target="_blank"
          style={{ color: '#FDFDFD' }}
          href={UrlPrimeiroAcesso} rel="noreferrer"
        >s
          Website vector created by stories - www.freepik.com
        </a>
      </div>
      <div className="div-form-primeiro-acesso">
        <form onSubmit={handleSubmit}>
          <Titledecorated text="Primeiro Acesso" />
          <Title text="Portal Amafresp Prestador" />

          {firstAcessForm.map(
            ({ id, label, type, require, pattern, title, maxLength, mask, changeBlur, changeFocus }) => (
              <Input
                mask={mask}
                key={id}
                maxLength={maxLength}
                title={title}
                pattern={pattern}
                label={label}
                type={type}
                id={id}
                require={require}
                value={primeiroAcesso[id]}
                changeBlur={changeBlur}
                changeFocus={changeFocus}
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
