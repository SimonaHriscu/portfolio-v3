import React from 'react';

const menuItems = ['about me', 'skills', 'portfolio', 'contact'];
const links = ['#landing-page', '#section_2', '#section_3', '#section_4'];
function Nav() {
  return (
    <div className="nav">
      <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]}>
            {' '}
            <li>{menuItem}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
