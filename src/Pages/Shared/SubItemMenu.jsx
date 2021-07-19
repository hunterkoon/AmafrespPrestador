import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={props.link}>
        <img src={props.subMenuSrcImg} alt={props.alt} />
        <h4> {props.itemSubMenu} </h4>
      </Link>
    </section>
  );
};

export default SubItemMenu;
