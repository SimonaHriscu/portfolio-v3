import React, { useState } from 'react';

const menuItems = ['about me', 'skills', 'portfolio', 'contact'];
const links = ['#landing-page', '#section_2', '#section_3', '#section_4'];

const Nav = () => {
  const [color, setColor] = useState();

  let style = { backgroundColor: color };

  const updateName = (itemToChange, i) => {
    console.log(i);
    if (menuItems.indexOf(itemToChange) === i) {
      console.log('true');
    }
    // const newArr = menuItems.filter((item, i) => console.log(item));
    // console.log(newArr);
    setColor(menuItems.indexOf(itemToChange) === i ? 'red' : 'white');
  };

  return (
    <div className="nav">
      <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]} key={i} style={style}>
            <li onClick={() => updateName(menuItem, i)}>
              {i}
              {menuItem}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

{
  /* <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]} key={i}>
            {menuItems.indexOf(menuItem) === i ? (
              <li style={{ backgroundColor: 'red' }}>{menuItem}</li>
            ) : (
              <li style={{ backgroundColor: 'white' }}>{menuItem}</li>
            )}
          </a>
        ))}
      </ul> */
}
