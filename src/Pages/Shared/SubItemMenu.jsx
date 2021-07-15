import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubItemMenu.css';

const SubItemMenu = ({ ...props }) => {
  return (
    <section
      className={'add-user-sub'}
      style={{
        paddingTop: '0.6em',
        paddingBotton: '0.6em',
        height: '10em',
      }}
    >
      <NavLink to={props.link}>
        <img src={props.subMenuSrcImg} alt={props.alt} />
        {props.itemSubMenu}
      </NavLink>
    </section>
  );
};

export default SubItemMenu;
