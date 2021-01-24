import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = ({ scrollTop }) => {
  const menuItems = [
    { title: "about me" },
    { title: "skills" },
    { title: "portfolio" },
    { title: "contact" },
  ];
  const links = ["#landing-page", "#skills", "#portfolio", "#contact"];
  const [index, setIndex] = useState({ currentIndex: 0 });
  const [path, setPath] = useState(window.location.hash);
  useEffect(() => {
    if (scrollTop >= "0" && scrollTop <= "25") {
      setIndex({ currentIndex: 0 });
      setPath((window.location.hash = links[0]));
    } else if (scrollTop >= "26" && scrollTop <= "50") {
      setIndex({ currentIndex: 1 });
      setPath((window.location.hash = links[1]));
    } else if (scrollTop >= "51" && scrollTop <= "75") {
      setIndex({ currentIndex: 2 });
      setPath((window.location.hash = links[2]));
    } else if (scrollTop >= "76" && scrollTop <= "100") {
      setIndex({ currentIndex: 3 });
      setPath((window.location.hash = links[3]));
    }
  }, [scrollTop]);

  const handleUpdate = (i) => {
    setIndex({ currentIndex: i });
  };

  return (
    <Router>
      <div className="nav">
        <ul>
          {menuItems.map((menuItem, i) => (
            <HashLink
              to={links[i]}
              key={i}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <li
                key={i}
                onClick={() => handleUpdate(i)}
                className={index.currentIndex === i ? "color" : "not-color"}
              >
                {menuItem.title}
              </li>
            </HashLink>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default Nav;
