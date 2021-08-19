import React from 'react';

import { GlobalContext } from './GlobalContext';
import { UrlPrimeiroAcesso } from '../Shared/Commons/Constants/image-url-primeiro-acesso';
import GeneralForms from '../Shared/Forms/GeneralForms';
import Titledecorated from '../Components/SubComponents/Titledecorated';
import Title from '../Components/SubComponents/Title';
import Input from '../Components/SubComponents/Input';
import Button from '../Components/SubComponents/Button';
import PrimeiroAcessoImg from '../../Assets/PrimeiroAcesso.svg';
import './PrimeiroAcesso.css';
import '../../App.css';

const PrimeiroAcesso = () => {
  const { error , firtAcessData , setFirtAcessData} = React.useContext(GlobalContext);
  const {firstAcessForm} = GeneralForms(firtAcessData)
  
  const [primeiroAcesso, setPrimeiroAcesso] = React.useState(
    firstAcessForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPrimeiroAcesso({ ...primeiroAcesso, [id]: value });
  };

  React.useEffect(()=>{
    setFirtAcessData(primeiroAcesso)
  },[primeiroAcesso, setFirtAcessData])

  const handleSubmit = (event) => {
    event.preventDefault();

    //TODO GERAR FUNÇÃO DE FETCH POST
  };

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