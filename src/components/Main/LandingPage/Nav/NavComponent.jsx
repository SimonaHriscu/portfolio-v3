import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
    <Router>
      <div className="nav">
        <ul>
          {this.menuItems.map((menuItem, i) => (
            <HashLink to={this.links[i]} key={i} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              <li
                key={i}
                onClick={() => this.updateIndex(i)}
                className={
                  this.state.currentIndex === i ? 'color' : 'not-color'
                }
                >
                {menuItem.title}
              </li>
            </HashLink>  
          ))}
        </ul>
      </div> 
      </Router>
    );
  }
}

export default Nav;
