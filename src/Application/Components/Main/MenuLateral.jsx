import React from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import ItemMenu from "../Sub/ItemMenu";
import SubItemMenu from "../Sub/SubItemMenu";
import iconFaleConosco from "../../../Assets/iconFaleConoscoBackgroundGreen.svg";
import iconHome from "../../../Assets/iconHomeBackgroundGreen.svg";
import iconUser from "../../../Assets/iconUsersBackgroundGreen.svg";
import iconRecadastro from "../../../Assets/iconRecadastramentoBackgroundGreen.svg";
import More from "../../../Assets/More.svg";
import Seta from "../../../Assets/Seta.svg";
import Sair from "../../../Assets/Sair.svg";
import "./MenuLateral.css";
import "../../../App.css";

const MenuLateral = () => {
  const {
    animateMenu,
    setAnimateMenu,
    setLogin,
    width,
    setProfile,
    menuItemUsuarios,
    setmenuItemUsuarios,
    menuItemRecadastramento,
    setmenuItemRecadastramento,
    handle,
    setHandle,
    option,
  } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  // ADICIONA ANIMAÇÃO AO MENU DE ITENS LATERAL CASO O MOUSE PASSE POR CIMA
  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === "A" ? imgTag.classList.toggle("animation") : false;
  };

  // FECHA MENU CASO ABRA OUTRO EM SEGUIDA
  //MANIPULA FECHAMENTO DE SUBITENS DO MENU ATRÁVES DO ESTADO GLOBAL HANDLE

  React.useEffect(() => {
    const handleMenu = () => {
      if (!handle) {
        return [setmenuItemRecadastramento(false), setmenuItemUsuarios(false)];
      }
    };
    return handleMenu();
  }, [handle, setmenuItemRecadastramento, setmenuItemUsuarios]);

  const handleToggleMenu = (state, value) => {
    state(!value);
    return [
      menuItemRecadastramento ? setmenuItemRecadastramento(false) : null,
      menuItemUsuarios ? setmenuItemUsuarios(false) : null,
      setHandle(true),
    ];
  };

  // MANIPULA EVENTOS E DIRECIONAMENTO NO MENU PARA ITENS PAI

  const handleAnimateMenu = ({ target }) => {
    let location = target.innerText;

    function validateLocation() {
      if (location === "Conta") {
        return (location = "/");
      } else if (location === "Sair") {
        return (location = "../");
      }
      return location;
    }

    return setTimeout(() => {
      navigate("./" + validateLocation());
      setAnimateMenu(false);
    }, 0);
  };

  const handleLogout = () => {
    setLogin(false);
    setProfile(false);
    setAnimateMenu(false);
  };

  return (
    <div id="nav-menu" >
      <nav
        className={
          animateMenu && width <= "1024"
            ? "hambuguerClick pageView"
            : "main-menu pageView"
        }
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

{/* Area Restrita */}
          {!option ? (
            <>
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
                <div>
                  <SubItemMenu
                    link="AdicionarUsuarios"
                    state={menuItemUsuarios}
                    itemSubMenu="Adicionar Usuário"
                    subMenuSrcImg={More}
                  />
                  <SubItemMenu
                    link="Gerenciar"
                    state={menuItemUsuarios}
                    itemSubMenu="Gerenciar"
                    subMenuSrcImg={More}
                  />
                </div>
              </ItemMenu>
              </>
          ) : null}
{/*   END - Area Restrita */}
              <ItemMenu
                state={menuItemRecadastramento}
                alt="item menu Recadastro"
                item="Atualização Cadastral"
                srcItem={iconRecadastro}
                srcSeta={Seta}
                clicked={() =>
                  handleToggleMenu(
                    setmenuItemRecadastramento,
                    menuItemRecadastramento
                  )
                }
              >
                <div>
                  <SubItemMenu
                    link="Recadastramento"
                    itemSubMenu="Realizar Atualização"
                    subMenuSrcImg={More}
                  />
                  <SubItemMenu
                    link="Status"
                    itemSubMenu="Status"
                    subMenuSrcImg={More}
                  />
                </div>
              </ItemMenu>


          <span onClick={handleAnimateMenu}>
            <ItemMenu
              alt="item menu fale conosco"
              item="Contatos"
              srcItem={iconFaleConosco}
            />
          </span>

          {/* // TODO - VERIFICAR PORQUE ITEM NAO DESAPARECE QUANDO MENU É ESTENDIDO */}

          {animateMenu ? (
            <span className="div-menu-sair">
              <ItemMenu
                clicked={handleLogout}
                alt="item menu fale conosco"
                item="Sair"
                srcItem={Sair}
              />
            </span>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default MenuLateral;
