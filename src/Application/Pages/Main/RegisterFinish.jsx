import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Titledecorated from '../../Components/Sub/Titledecorated';
import Title from '../../Components/Sub/Title';
import Button from '../../Components/Sub/Button';
import Check from '../../../Assets/Check.gif';
import './RegisterSucessfull.css';
import '../../../App.css';
import { GlobalContext } from './GlobalContext';


const RegisterFinish = () => {

  const { _FreeAcess } = React.useContext(GlobalContext);
  const { id } = useParams();
  React.useEffect(() => { _FreeAcess(id); }, [])
  return (
    <div className="div-main-register-successful pageView ">
      <div className="div-sub-register-successful">
        <Titledecorated color="#474747" text="Registro de admininistrador Concluido!" />
        <Title
          id="title-register-successful"
          size="1.3rem"
          text=" Uma senha Provisória foi encaminhanda para seu E-mail , Seu Acesso esta totalmente Liberado!"
        />
        <div className="div-img-register-successful">
          <img style={{ width: "180px", margin: "3%" }} src={Check} alt="" />
        </div>
        <Link to="/">
          <Button value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default RegisterFinish;
