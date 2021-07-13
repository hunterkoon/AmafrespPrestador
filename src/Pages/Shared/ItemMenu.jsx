import React from 'react';
import { Link } from 'react-router-dom';
import './ItemMenu.css';

const ItemMenu = ({ ...props }) => {
  console.log(props.clicked);
  return (
    <li className="li-item-menu">
      <Link to={props.link} onClick={props.clicked}>
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
      </Link>
      {props.state ? (
        <div style={{ height: '10em' }}> {props.children} </div>
      ) : null}
    </li>
  );
};

export default ItemMenu;
