import React from "react";
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
    width,
    handleLogout,
    menuItemUsuarios,
    setmenuItemUsuarios,
    menuItemRegisterUpdate,
    setmenuItemRegisterUpdate,
    handle,
    setHandle,
    option,
  } = React.useContext(GlobalContext);

  // ADICIONA ANIMAÇÃO AO MENU DE ITENS LATERAL CASO O MOUSE PASSE POR CIMA
  const handleMouse = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === "A" ? imgTag.classList.toggle("animation") : false;
  };

  // FECHA MENU CASO ABRA OUTRO EM SEGUIDA
  //MANIPULA FECHAMENTO DE SUBITENS DO MENU ATRÁVES DO ESTADO GLOBAL HANDLE

  const handleToggleMenu = (state, value) => {
    state(!value);
    return [
      menuItemRegisterUpdate ? setmenuItemRegisterUpdate(false) : null,
      menuItemUsuarios ? setmenuItemUsuarios(false) : null,
      setHandle(true),
    ];
  };

  React.useEffect(() => {
    const handleMenu = () => {
      if (!handle) {
        return [setmenuItemRegisterUpdate(false), setmenuItemUsuarios(false)];
      }
    };
    return handleMenu();
  }, [handle, setmenuItemRegisterUpdate, setmenuItemUsuarios]);

  return (
    <div id="nav-menu">
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
          <ItemMenu
            href={"/#/conta/"}
            alt="item menu home page"
            item="Conta"
            srcItem={iconHome}
            srcSeta=""
          />

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
              </ItemMenu>
            </>
          ) : null}

          {/*   END - Area Restrita */}

          <ItemMenu 
            state={menuItemRegisterUpdate}
            alt="item menu Recadastro"
            item="Atualização Cadastral"
            srcItem={iconRecadastro}
            srcSeta={Seta}
            clicked={() =>
              handleToggleMenu(
                setmenuItemRegisterUpdate,
                menuItemRegisterUpdate
              )
            }
          >
            <SubItemMenu
              link="RegisterUpdate"
              itemSubMenu="Realizar Atualização"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="Status"
              itemSubMenu="Status"
              subMenuSrcImg={More}
            />
          </ItemMenu>

          <ItemMenu
            href={"/#/conta/Contatos"}
            rel={null}
            alt="item menu fale conosco"
            item="Contatos"
            srcItem={iconFaleConosco}
          />

          {animateMenu && (
            <ItemMenu
              href={"../"}
              rel={null}
              clicked={handleLogout}
              alt="item menu fale conosco"
              item="Sair"
              srcItem={Sair}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MenuLateral;
