import React from 'react';
import './Footer.css';
import Logo_Afresp from '../../../Assets/Logo_TIAfresp.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="paragraph">Todos os direitos reservados © </p>
      <img className="footer-img" src={Logo_Afresp} alt="" />
    </footer>
  );
};

export default Footer;
