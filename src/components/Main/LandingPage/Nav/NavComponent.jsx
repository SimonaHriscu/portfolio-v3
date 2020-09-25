import React, { useState } from 'react';

class Nav extends React.Component {
  menuItems = [
    { title: 'about me' },
    { title: 'skills' },
    { title: 'portfolio' },
    { title: 'contact' },
  ];
  links = ['#landing-page', '#section_2', '#section_3', '#section_4'];
  state = {
    currentIndex: 0,
  };

  updateIndex(i) {
    this.setState({ currentIndex: i });
  }
  render() {
    return (
      <div className="nav">
        <ul>
          {this.menuItems.map((menuItem, i) => (
            <a href={this.links[i]} key={i}>
              <li
                key={i}
                onClick={() => this.updateIndex(i)}
                className={
                  this.state.currentIndex === i ? 'color' : 'not-color'
                }
              >
                {menuItem.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
