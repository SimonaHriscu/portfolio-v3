import React, { useState } from 'react';

const menuItems = ['about me', 'skills', 'portfolio', 'contact'];
const links = ['#landing-page', '#section_2', '#section_3', '#section_4'];

const Nav = () => {
  const [className, setClassName] = useState('');

  // const newClass = class;

  const updateClass = (itemToChange, key) => {
    const newArr = menuItems.map((item, i) => console.log(item));

    //setColor(menuItems.includes(itemToChange) ? 'red' : 'white');
    setClassName(menuItems.includes(itemToChange) ? 'newClass' : '');
  };
  return (
    <div className="nav">
      <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]} key={i} className={className}>
            <li onClick={() => updateClass(menuItem, key)}>{menuItem}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
