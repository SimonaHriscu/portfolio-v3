import React, { useState } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPageComponent';
import SideDrawer from './LandingPage/Nav/SideDrawer';
import Backdrop from './LandingPage/Nav/Backdrop';

const MainContainer = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <div className="main-container">
      <Header open={openDrawerHandler} />
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}/>
      <LandingPage />
    </div>
  );
};

export default MainContainer;
