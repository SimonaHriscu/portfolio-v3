import React, { useState, useEffect } from "react";
import Contact from "./Contact/ContactComponent";
import Info from "./Info/InfoComponent";
import Nav from "./Nav/NavComponent";

function LandingPage() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="landing-page" id={"landing-page"}>
      <Contact />
      <Info />
      <Nav scrollTop={scrollTop} />
    </div>
  );
}

export default LandingPage;
