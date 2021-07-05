import React from "react";
import "./MenuPrestador.css";
import { Link } from "react-router-dom";
import iconHome from "../../Assets/iconHomeBackgroundGreen.svg";
import iconUser from "../../Assets/iconUsersBackgroundGreen.svg";
import iconRecadastro from "../../Assets/iconRecadastramentoBackgroundGreen.svg";
import iconFaleConosco from "../../Assets/iconFaleConoscoBackgroundGreen.svg";
const MenuPrestador = () => {


  const handleMouseOver = (event) => {
    const item = event.target;
    const imgAItem = event.target.children[0];

    if (event.target.tagName === "A") {
      imgAItem.classList.add("animation");
    } else {
      item.classList.add("animation");
    }
  };
  const handleMouseLeave = (event) => {
    const item = event.target;
    const imgAItem = event.target.children[0];

    if (event.target.tagName === "A") {
      imgAItem.classList.remove("animation");
    } else {
      item.classList.remove("animation");
    }
  };

  return (
    <nav className="main-menu">
      <ul>
        <li
          className="li-conta"
          
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Link>
            <img src={iconHome} alt="Icone Para Home Page" />
            Conta
          </Link>
        </li>
        <li
          className="li-usuarios"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Link>
            <img src={iconUser} alt="Icone Para Home Page" />
            Usuários
          </Link>
        </li>
        <li
          className="li-recadastramento"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Link>
            <img src={iconRecadastro} alt="Icone Para Home Page" />
            Recadastramento
          </Link>
        </li>

        <li
          style={{ marginTop: "35vh" }}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Link>
            <img src={iconFaleConosco} alt="Icone Para Home Page" />
            Fale Conosco
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPrestador;
