import React, { useState } from 'react';

const menuItems = ['about me', 'skills', 'portfolio', 'contact'];
const links = ['#landing-page', '#section_2', '#section_3', '#section_4'];

const Nav = () => {
  const [currentState, setNewState] = useState({
    className: 'non-color',
  });

  let index = 0;

  const updateName = (itemToChange, i) => {
    console.log(itemToChange);
    index = i;
    console.log(index);

    setNewState({
      className: 'color',
    });
  };

  return (
    <div className="nav">
      <ul>
        {menuItems.map((menuItem, i) => (
          <a href={links[i]}>
            <li
              key={i}
              className={index === i ? 'color' : 'non-color'}
              onClick={() => updateName(menuItem, i)}
            >
              {/* {i} */}
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
