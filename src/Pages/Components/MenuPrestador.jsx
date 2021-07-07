import React from "react";
import "./MenuPrestador.css";
import iconHome from "../../Assets/iconHomeBackgroundGreen.svg";
import iconUser from "../../Assets/iconUsersBackgroundGreen.svg";
import iconRecadastro from "../../Assets/iconRecadastramentoBackgroundGreen.svg";
import iconFaleConosco from "../../Assets/iconFaleConoscoBackgroundGreen.svg";
import More from "../../Assets/More.svg";
import Seta from "../../Assets/Seta.svg";
import ItemMenu from "../Shared/ItemMenu";
import SubItemMenu from "../Shared/SubItemMenu";

const MenuPrestador = ({ ...props }) => {
  const [menuItemUsuarios, setmenuItemUsuarios] = React.useState(false);
  const [menuItemRecadastramento, setmenuItemRecadastramento] =
    React.useState(false);
 

  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === "A" ? imgTag.classList.toggle("animation") : false;
  };

  return (
    <nav
      className="main-menu"
      onMouseOver={handleMouse}
      onMouseOut={handleMouse}
    >
      <ul>
        <ItemMenu
          alt="item menu home page"
          item="Conta"
          srcItem={iconHome}
          srcSeta=""
          link="/conta"
        />

        <div onClick={() => setmenuItemUsuarios(!menuItemUsuarios)}>
          <ItemMenu
            alt="item menu usuários"
            item="Usuários"
            srcItem={iconUser}
            srcSeta={Seta}
            state={menuItemUsuarios}
          >
            <SubItemMenu
              link="/conta/usuario"
              state={menuItemUsuarios}
              itemSubMenu="Adicionar Usuário"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="/conta/gerenciar"
              state={menuItemUsuarios}
              itemSubMenu="Gerênciar"
              subMenuSrcImg={More}
            />
          </ItemMenu>
        </div>
        <div
          onClick={() => setmenuItemRecadastramento(!menuItemRecadastramento)}
        >
          <ItemMenu
            alt="item menu Recadastro"
            item="Recadastramento"
            srcItem={iconRecadastro}
            srcSeta={Seta}
            state={menuItemRecadastramento}
          >
            <SubItemMenu
              link="/conta/recadastramento"
              state={menuItemRecadastramento}
              itemSubMenu="Realizar Recadastramento"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="/conta/recadastramento"
              state={menuItemRecadastramento}
              itemSubMenu="Status"
              subMenuSrcImg={More}
            />
          </ItemMenu>
        </div>

        <div style={{ position: "absolute", bottom: "15vh" }}>
          <ItemMenu
            alt="item menu fale conosco"
            item="Fale Conosco"
            srcItem={iconFaleConosco}
            srcSeta=""
            link="/conta/faleconosco"
          />
        </div>
      </ul>
    </nav>
  );
};

export default MenuPrestador;
