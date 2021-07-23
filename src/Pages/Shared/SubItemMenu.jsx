import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubItemMenu.css';

const SubItemMenu = ({ ...props }) => {
  return (
    <section className={'add-user-sub'}>
      <NavLink
        activeStyle={{
          textDecoration: 'underline',
        }}
        to={props.link}
      >
        <img src={props.subMenuSrcImg} alt={props.alt} />
        <h4> {props.itemSubMenu} </h4>
      </NavLink>
    </section>
  );
};

export default SubItemMenu;
