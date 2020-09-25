import React from 'react';
import Nav from './NavComponent';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  const sideDrawer = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        <Nav />
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    sideDrawer,
    document.getElementById('drawer-hook')
  );
};

export default SideDrawer;
