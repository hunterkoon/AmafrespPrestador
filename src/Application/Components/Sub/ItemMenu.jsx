/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './ItemMenu.css';

const ItemMenu = ({ ...props }) => {
  return (
    <li className="li-item-menu">
      <span style={{ cursor: 'pointer' }} onClick={props.onClick}>
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
      </span>
      {props.state ? (
        <div style={{ height: 'auto' }}> {props.children} </div>
      ) : null}
    </li>
  );
};

export default ItemMenu;
