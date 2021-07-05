import React from "react";
import "./MenuPrestador.css";
import { Link } from "react-router-dom";
import iconHome from "../../Assets/iconHomeBackgroundGreen.svg";
import iconUser from "../../Assets/iconUsersBackgroundGreen.svg";
import iconRecadastro from "../../Assets/iconRecadastramentoBackgroundGreen.svg";
import iconFaleConosco from "../../Assets/iconFaleConoscoBackgroundGreen.svg";
import More from "../../Assets/More.svg";
import Seta from "../../Assets/Seta.svg";
import Mananger from "../../Assets/Mananger.svg";

const MenuPrestador = () => {
  const [mouseHandle, setMouseHandle] = React.useState("none");


  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    console.log(tag)
     return  tag === "A" ? imgTag.classList.add("animation"):false
      
  };

  const handleMouseLeave = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    console.log(tag)
     return  tag === "A" ? imgTag.classList.remove("animation"):false
      
  };


// React.useEffect(()=>{}[])


  return (
    <nav className="main-menu" 
          onMouseOver={handleMouse}
          onMouseOut={handleMouseLeave}  >
      <ul>
        <li className="li-conta">
          <Link>
            <img src={iconHome} alt="Icone Para Home Page" />
            Conta
          </Link>
        </li>

        <li
          className="li-usuarios"
          onClick={() =>
            setMouseHandle(mouseHandle === "none" ? "block" : "none")
          }
        >
          <Link>
            <img src={iconUser} alt="Icone Para Home Page" />
            Usuários
            <img
              className="li-img-seta"
              src={Seta}
              alt="Icone Para Home Page"
              style={{
                transform: mouseHandle === "block" ? "rotate(90deg)" : null,
              }}
            />
          </Link>
        </li>

        <section
          className="li-section-usuarios"
          style={{
            opacity: mouseHandle === "block" ? "100%" : null,
            height: mouseHandle === "block" ? "10em" : null,
            display: mouseHandle === "block" ? "flex" : null,
          }}
        >
          <Link>
            <img src={More} style={{ width: "1em" }} />
            <section>Novo usuário</section>
          </Link>

          <Link>
            <img src={Mananger} style={{ width: "1em" }} />
            <section>Gerênciar</section>
          </Link>
        </section>

        <li className="li-recadastramento">
          <Link>
            <img src={iconRecadastro} alt="Icone Para Recadastramento" />
            <section>Recadastramento</section>
          </Link>
        </li>

        <li className="li-faleConosco">
          <Link>
            <img src={iconFaleConosco} alt="Icone Para Fala conosco" />
            <section>Fale Cononosco</section>

          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPrestador;
