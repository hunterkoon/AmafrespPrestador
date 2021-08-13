import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import { handleWindow } from './Commons/constant/handler-menu';
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
