import React from 'react';
import './MenuPrestador.css';
import iconHome from '../../Assets/iconHomeBackgroundGreen.svg';
import iconUser from '../../Assets/iconUsersBackgroundGreen.svg';
import iconRecadastro from '../../Assets/iconRecadastramentoBackgroundGreen.svg';
import iconFaleConosco from '../../Assets/iconFaleConoscoBackgroundGreen.svg';
import More from '../../Assets/More.svg';
import Seta from '../../Assets/Seta.svg';
import Mananger from '../../Assets/Mananger.svg';
import ItemMenu from '../Shared/ItemMenu';
import SubItemMenu from '../Shared/SubItemMenu';

const MenuPrestador = () => {
  const [ativo, setAtivo] = React.useState(false);

  const handleMouseEnter = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === 'A' ? imgTag.classList.add('animation') : false;
  };
  const handleMouseLeave = (event) => {
    const tag = event.target.tagName;
    const imgTag = event.target.children[0];
    return tag === 'A' ? imgTag.classList.remove('animation') : false;
  };

  return (
    <nav
      className="main-menu"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <ul>
        <ItemMenu item="Conta" srcItem={iconHome} srcSeta="" link="/conta" />

        <div onClick={() => setAtivo(ativo ? false : true)}>
          <ItemMenu
            item="Usuários"
            srcItem={iconUser}
            srcSeta={Seta}
            state={ativo}
          >
            <SubItemMenu
              link="/conta/usuario"
              state={ativo}
              itemSubMenu="Adicionar Usuário"
              subMenuSrcImg={More}
            />
            <SubItemMenu
              link="/conta/gerenciar"
              state={ativo}
              itemSubMenu="Gerênciar"
              subMenuSrcImg={Mananger}
            />
          </ItemMenu>
        </div>

        <ItemMenu
          item="Recadastramento"
          srcItem={iconRecadastro}
          srcSeta=""
          link="/conta/recadastramento"
        />
        <ItemMenu
          item="Fale Conosco"
          srcItem={iconFaleConosco}
          srcSeta=""
          link="/conta/faleconosco"
        />
      </ul>
    </nav>
  );
};

export default MenuPrestador;
