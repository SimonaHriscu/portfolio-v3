import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Nav=()=>{
  const menuItems = [
    { title: 'about me' },
    { title: 'skills' },
    { title: 'portfolio' },
    { title: 'contact' },
  ];
  const links = ['#landing-page', '#skills', '#portfolio', '#contact'];
  const[index, setIndex]= React.useState({ currentIndex: 0 })

  const handleUpdate=(i)=> {
    setIndex({ currentIndex: i });
  }

  return ( 
    <Router>
      <div className="nav">
        <ul>
          {menuItems.map((menuItem, i) => (
            <HashLink to={links[i]} key={i} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              <li
                key={i}
                onClick={() => handleUpdate(i)}
                className={
                  index.currentIndex === i ? 'color' : 'not-color'
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

export default Nav;