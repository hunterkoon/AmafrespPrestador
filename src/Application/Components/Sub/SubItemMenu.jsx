import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../Pages/Main/GlobalContext';
import { handleWindow } from '../../Shared/Commons/Helpers/HandlerMenu';
import './SubItemMenu.css';

const SubItemMenu = ({ ...props }) => {

  const { setAnimateMenu} = React.useContext(GlobalContext);

  return (
    <section className="add-user-sub menuView">
      <NavLink
        onClick={(e) => handleWindow(e,setAnimateMenu)}
        activeStyle={{
          textDecoration: 'underline',
        }}
        to={props.link}
      >
        <img src={props.subMenuSrcImg} alt={props.alt} />
        <h4 > {props.itemSubMenu} </h4>
      </NavLink>
    </section>
  );
};

export default SubItemMenu;
