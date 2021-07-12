import React from 'react';
import { Link } from 'react-router-dom';
import './SubItemMenu.css';
import { GlobalContext } from '../GlobalContext';

const SubItemMenu = ({ ...props }) => {
  const { focusMenu } = React.useContext(GlobalContext);
  return (
    <section
      state={props.state}
      className="add-user-sub"
      style={{
        backgroundColor: focusMenu ? 'black' : null,
        height: props.state ? '3em' : '0em',
        opacity: props.state ? '100%' : '0',
      }}
    >
      <Link to={props.link}>
        <img src={props.subMenuSrcImg} alt={props.alt} />
        {props.itemSubMenu}
      </Link>
    </section>
  );
};

export default SubItemMenu;
