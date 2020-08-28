import React, { useState } from 'react';

const menuItems = ['about me', 'skills', 'portfolio', 'contact'];
const links = ['#landing-page', '#section_2', '#section_3', '#section_4'];

const Nav = () => {
  const [color, setColor] = useState();

  const style = { backgroundColor: color };

  const updateName = (itemToChange) => {
    const newArr = menuItems.filter((item, i) => console.log(item));
    console.log(newArr);
    setColor(newArr.includes(itemToChange) ? 'red' : 'white');
  };

  return (
    <div className="nav">
      <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]} key={i} style={style}>
            <li onClick={() => updateName(menuItem)}>{menuItem}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
