import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import MainContainer from "./components/Main/MainContainer";
import Gif from "./components/Main/img/loader.gif";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4400);
  }, []);
  return loading ? (
    <Loading gif={Gif} />
  ) : (
    <div className="App">
      <MainContainer />
    </div>
  );
};
export default App;
