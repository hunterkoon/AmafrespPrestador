import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMenu.css';

const ItemMenu = ({ ...props }) => {
  return (
    <li className="li-item-menu" state={props.state}>
      <Link to={props.link}>
        <img src={props.srcItem} alt={props.alt} />
        {props.item}
        <img
          className="img-item-menu-seta"
          src={props.srcSeta}
          alt={props.alt}
          style={{
            transform: props.state === true ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        />
      </Link>
      {props.children}
    </li>
  );
};

export default ItemMenu;
