import React from 'react';
import './MenuLateral.css';
import iconHome from '../../Assets/iconHomeBackgroundGreen.svg';
import iconUser from '../../Assets/iconUsersBackgroundGreen.svg';
import iconRecadastro from '../../Assets/iconRecadastramentoBackgroundGreen.svg';
import iconFaleConosco from '../../Assets/iconFaleConoscoBackgroundGreen.svg';
import More from '../../Assets/More.svg';
import Seta from '../../Assets/Seta.svg';
import ItemMenu from '../Shared/ItemMenu';
import SubItemMenu from '../Shared/SubItemMenu';

const MenuLateral = () => {
  const [menuItemUsuarios, setmenuItemUsuarios] = React.useState(false);
  const [menuItemRecadastramento, setmenuItemRecadastramento] =
    React.useState(false);

  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === 'A' ? imgTag.classList.toggle('animation') : false;
  };

  const handleWindow = () => {
    window.document.addEventListener('click', function removeMenu({ target }) {
      if (target.tagName !== 'A') {
        setmenuItemUsuarios(false);
        setmenuItemRecadastramento(false);
      }
    });
  };
  handleWindow();
  const handleToggleMenu = (state, value) => {
    state(!value);
    return (
      menuItemRecadastramento ? setmenuItemRecadastramento(false) : null,
      menuItemUsuarios ? setmenuItemUsuarios(false) : null
    );
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
        />

        <ItemMenu
          state={menuItemUsuarios}
          alt="item menu usuários"
          item="Usuários"
          srcItem={iconUser}
          srcSeta={Seta}
          clicked={() =>
            handleToggleMenu(setmenuItemUsuarios, menuItemUsuarios)
          }
        >
          <div class="transiction-menu">
            <SubItemMenu
              link="/conta/usuarios"
              state={menuItemUsuarios}
              itemSubMenu="Adicionar Usuário"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              state={menuItemUsuarios}
              itemSubMenu="Gerênciar"
              subMenuSrcImg={More}
            />
          </div>
        </ItemMenu>

        <ItemMenu
          state={menuItemRecadastramento}
          alt="item menu Recadastro"
          item="Atualização Cadastral"
          srcItem={iconRecadastro}
          srcSeta={Seta}
          clicked={() =>
            handleToggleMenu(
              setmenuItemRecadastramento,
              menuItemRecadastramento,
            )
          }
        >
          <div class="transiction-menu">
            <SubItemMenu
              itemSubMenu="Realizar Atualização Cadastral"
              subMenuSrcImg={More}
            />
            <SubItemMenu itemSubMenu="Status" subMenuSrcImg={More} />
          </div>
        </ItemMenu>

        <div style={{ position: 'absolute', bottom: '15vh' }}>
          <ItemMenu
            alt="item menu fale conosco"
            item="Fale Conosco"
            srcItem={iconFaleConosco}
            srcSeta=""
          />
        </div>
      </ul>
    </nav>
  );
};

export default MenuLateral;
