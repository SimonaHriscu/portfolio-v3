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

  useEffect(() => {
    if (scrollTop >= "0" && scrollTop <= "25") {
      setIndex({ currentIndex: 0 });
      window.location.hash = links[0];
    } else if (scrollTop <= "50") {
      setIndex({ currentIndex: 1 });
      window.location.hash = links[1];
    } else if (scrollTop <= "75") {
      setIndex({ currentIndex: 2 });
      window.location.hash = links[2];
    } else if (scrollTop >= "76" && scrollTop <= "100") {
      setIndex({ currentIndex: 3 });
      window.location.hash = links[3];
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
