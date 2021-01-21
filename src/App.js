import React, { useState, useEffect } from "react";
import Loading from "components/Loading/Loading";
import MainContainer from "components/Main/MainContainer";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4400);
  }, []);
  return (
    //loading ? (
    //   <Loading />
    // ) : (
    <div className="App">
      <MainContainer />
    </div>
  );
  //);
};
export default App;
