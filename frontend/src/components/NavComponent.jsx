import React from 'react';
import { NavLink } from 'react-router-dom';

function NavComponent({ url, styling, activeStyling,children, ...props }) {
  return (
    <>
      <li>
        <NavLink 
          to={url} 
          className={({ isActive }) => 
            isActive ? `${styling} ${activeStyling}` : styling
          }
          {...props}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
}

export default NavComponent;
