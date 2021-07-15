import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemMenu.css';

const ItemMenu = ({ ...props }) => {
  return (
    <li className="li-item-menu">
      <NavLink
        // activeStyle={{ color: 'black' }}
        to={props.link}
        onClick={props.clicked}
      >
        <img src={props.srcItem} alt={props.alt} />
        {props.item}
        <img
          className="img-item-menu-seta"
          src={props.srcSeta}
          alt=""
          style={{
            transform: props.state ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        />
      </NavLink>
      {props.state ? (
        <div style={{ height: '10em' }}> {props.children} </div>
      ) : null}
    </li>
  );
};

export default ItemMenu;
