import React from 'react';
import './MenuLateral.css';
import iconHome from '../../Assets/iconHomeBackgroundGreen.svg';
import iconUser from '../../Assets/iconUsersBackgroundGreen.svg';
import iconRecadastro from '../../Assets/iconRecadastramentoBackgroundGreen.svg';
import iconFaleConosco from '../../Assets/iconFaleConoscoBackgroundGreen.svg';
import More from '../../Assets/More.svg';
import Seta from '../../Assets/Seta.svg';
import Sair from '../../Assets/Sair.svg';
import ItemMenu from '../Shared/ItemMenu';
import SubItemMenu from '../Shared/SubItemMenu';
import { useNavigate } from 'react-router';
import { GlobalContext } from '../GlobalContext';

const MenuLateral = () => {
  const { animateMenu, setAnimateMenu } = React.useContext(GlobalContext);
  const navigate = useNavigate();
  const [menuItemUsuarios, setmenuItemUsuarios] = React.useState(false);
  const [menuItemRecadastramento, setmenuItemRecadastramento] =
    React.useState(false);

  // ADICIONA ANIMAÇÃO AO MENU DE ITENS LATERAL CASO O MOUSE PASSE POR CIMA
  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === 'A' ? imgTag.classList.toggle('animation') : false;
  };

  // ESCONDE ITENS DO MENU CASO ITEM CLICADO NÃO ATENDA OS PARAMETROS DE TAG A OU CLASSENAME

  const handleWindow = () => {
    window.document.addEventListener('click', function removeMenu({ target }) {
      if (target.tagName !== 'A' && target.tagName !== 'H4') {
        setmenuItemUsuarios(false);
        setmenuItemRecadastramento(false);
      } else if (
        target.tagName !== 'A' &&
        target.className !== 'div-sub-3-animate'
      ) {
        setAnimateMenu(false);
      }
    });
  };
  React.useEffect(() => {
    handleWindow();
  }, []);

  // ADICIONA LISTA DE SUBMENUS AO CLICAR NO ITEM PAI

  const handleToggleMenu = (state, value) => {
    state(!value);
    return (
      menuItemRecadastramento ? setmenuItemRecadastramento(false) : null,
      menuItemUsuarios ? setmenuItemUsuarios(false) : null
    );
  };

  // MANIPULA EVENTOS E DIRECIONAMENTO NO MENU PARA ITENS PAI

  const handleAnimateMenu = ({ target }) => {
    let location = target.innerText;

    function validateLocation() {
      if (location === 'Conta') {
        return (location = '/');
      } else if (location === 'Sair') {
        return (location = '../');
      } else return location;
    }

    return setTimeout(() => {
      navigate('./' + validateLocation());
      setAnimateMenu(false);
    }, 200);
  };

  return (
    <nav
      className={animateMenu ? 'hambuguerClick' : 'main-menu'}
      onMouseOver={handleMouse}
      onMouseOut={handleMouse}
    >
      <ul>
        <span onClick={handleAnimateMenu}>
          <ItemMenu
            alt="item menu home page"
            item="Conta"
            srcItem={iconHome}
            srcSeta=""
          />
        </span>

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
              link="AdicionarUsuarios"
              state={menuItemUsuarios}
              itemSubMenu="Adicionar Usuário"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="Gerenciar"
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
              link="Recadastramento"
              itemSubMenu="Realizar Atualização Cadastral"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="Status"
              itemSubMenu="Status"
              subMenuSrcImg={More}
            />
          </div>
        </ItemMenu>

        <span onClick={handleAnimateMenu} className="div-fale-conosco">
          <ItemMenu
            alt="item menu fale conosco"
            item="Contatos"
            srcItem={iconFaleConosco}
          />
        </span>

        {animateMenu ? (
          <span onClick={handleAnimateMenu} className="div-menu-sair">
            <ItemMenu alt="item menu fale conosco" item="Sair" srcItem={Sair} />
          </span>
        ) : null}
      </ul>
    </nav>
  );
};

export default MenuLateral;
