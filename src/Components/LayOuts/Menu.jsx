import React from 'react'
import { navRoute } from '../../Constant/NavRoute';
import { NavLink } from 'react-router';

const Menu = ({menuStyle, toggleMenu }) => {
  return (
    <div>
      <menu className={menuStyle}>
        {navRoute.map(({ id, name, path }) => (
          <li key={id}>
            <NavLink to={path} onClick={toggleMenu}>{name}</NavLink>
          </li>
        ))}
      </menu>
    </div>
  );
}

export default Menu
