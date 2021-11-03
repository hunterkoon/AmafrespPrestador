import React from "react";
import { GlobalContext } from "../../Pages/Main/GlobalContext";
import ItemMenu from "../Sub/ItemMenu";
import SubItemMenu from "../Sub/SubItemMenu";
import iconFaleConosco from "../../../Assets/iconFaleConoscoBackgroundGreen.svg";
import iconHome from "../../../Assets/iconHomeBackgroundGreen.svg";
import iconUser from "../../../Assets/iconUsersBackgroundGreen.svg";
import iconRecadastro from "../../../Assets/iconRecadastramentoBackgroundGreen.svg";
import iconFunctionalities from "../../../Assets/Gear.svg";
import useWindowDimensions from "../../Hooks/UseDimensionScreen";
import { useNavigate } from "react-router-dom";
import More from "../../../Assets/More.svg";
import Seta from "../../../Assets/Seta.svg";
import Sair from "../../../Assets/Sair.svg";
import "./MainMenu.css";
import "../../../App.css";

const MainMenu = () => {
  const {
    animateMenu,
    handleLogout,
    globalHandle,
    setGlobalHandle,
    manangeUsers,
    admin,
    addNewUser,
    showPriceTable,
  } = React.useContext(GlobalContext);

  const [menuItemFuncs, setMenuItemFuncs] = React.useState(false);
  const [menuItemRegUp, setMenuItemRegUp] = React.useState(false);
  const [menuItemUsers, setMenuItemUsers] = React.useState(false);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const [direction, setDirection] = React.useState(null);

  React.useEffect(() => {
    if (direction != null) {
      navigate(direction)
      setDirection(null)
    }
  }, [direction])

  const setMenuItens = React.useMemo(
    () => [setMenuItemFuncs, setMenuItemRegUp, setMenuItemUsers],
    []
  );
  const menuItens = [menuItemFuncs, menuItemRegUp, menuItemUsers];

  const handleMenuAnimation = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === "SPAN" ? imgTag.classList.toggle("animation") : false;
  };

  const handleToggleMenu = () => {
    const menuFilter = menuItens.filter((str) => str === true);
    menuFilter && setMenuItens.forEach((set) => set(false));
    setGlobalHandle(true);
  };

  React.useEffect(() => {
    !globalHandle && setMenuItens.forEach((set) => set(false));
  }, [globalHandle, setMenuItens]);

  return (
    <div id="nav-menu">
      <nav
        className={
          animateMenu && width <= "1024"
            ? "hambuguerClick pageView"
            : "main-menu pageView"
        }
        onMouseOver={handleMenuAnimation}
        onMouseOut={handleMenuAnimation}
      >
        <ul>
          <ItemMenu
            item="Conta"
            srcItem={iconHome}
            srcSeta=""
            onClick={() => setDirection('/conta')}
          />

          {/* USUÁRIOS */}

          <>
            {addNewUser || admin ? (
              <ItemMenu
                state={menuItemUsers}
                alt="item menu usuários"
                item="Usuários"
                srcItem={iconUser}
                srcSeta={Seta}
                onClick={() => [
                  handleToggleMenu(),
                  setMenuItemUsers(!menuItemUsers),
                ]}
              >
                {/* Adicionar Usuários */}
                {addNewUser || admin ? (
                  <SubItemMenu
                    link="AdicionarUsuarios"
                    state={menuItemUsers}
                    itemSubMenu="Adicionar Usuário"
                    subMenuSrcImg={More}
                  />
                ) : null}

                {/* Gerenciar Usuários */}
                {manangeUsers || admin ? (
                  <SubItemMenu
                    link="Gerenciar"
                    state={menuItemUsers}
                    itemSubMenu="Gerenciar"
                    subMenuSrcImg={More}
                  />
                ) : null}
              </ItemMenu>
            ) : null}
          </>

          {/* ATUALIZAÇÃO CADASTRAL */}
          {admin ?
            <ItemMenu
              state={menuItemRegUp}
              alt="item menu Recadastro"
              item="Atualização Cadastral"
              srcItem={iconRecadastro}
              srcSeta={Seta}
              onClick={() => [
                handleToggleMenu(),
                setMenuItemRegUp(!menuItemRegUp),
              ]}
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
            : null}

          {/* FUNCIONALIDADES */}

          {showPriceTable || admin ?
            <ItemMenu
              state={menuItemFuncs}
              alt="item menu Recadastro"
              item="Funcionalidades"
              srcItem={iconFunctionalities}
              srcSeta={Seta}
              onClick={() => [
                handleToggleMenu(),
                setMenuItemFuncs(!menuItemFuncs),
              ]}
            >
              {/* tabela */}
              <SubItemMenu
                link="Tabela"
                itemSubMenu="Tabela de Preços"
                subMenuSrcImg={More}
              />

            </ItemMenu> : null}

          {/* FALE CONOSCO */}

          <ItemMenu
            onClick={() => setDirection('Contatos')}
            alt="item menu fale conosco"
            item="Contatos"
            srcItem={iconFaleConosco}
          />

          {/* SAIR */}

          {animateMenu && (
            <ItemMenu
              href={"../"}
              onClick={handleLogout}
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

export default MainMenu;
