import React, { useState } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPageComponent';
import SideDrawer from '../Main/LandingPage/Nav/SideDrawer';
import Backdrop from './LandingPage/Nav/Backdrop';

const MainContainer = (prop) => {
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
      {/* && ====>  if this is true, render that */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}></SideDrawer>

      <LandingPage />
    </div>
  );
};

export default MainContainer;
