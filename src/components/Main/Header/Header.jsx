import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <a href="#landing-page">
        <p>S</p> <span>H</span>
      </a>
      <div className="hamburger-menu" onClick={props.open}>
        <ion-icon name="menu"></ion-icon>
      </div>
    </div>
  );
};

export default Header;
