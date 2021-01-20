import React from 'react';

const Header = ({open}) => {
  return (
    <div className="header">
      <a href="#landing-page">
        <p>S</p> <span>H</span>
      </a>
      <div className="hamburger-menu" onClick={open}>
        <ion-icon name="menu"/>
      </div>
    </div>
  );
};

export default Header;
