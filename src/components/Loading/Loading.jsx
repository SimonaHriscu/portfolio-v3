import React from 'react';

const Loading = (props) => {
  //console.log(props.gif);
  return (
    <div className="loading">
      <img src={props.gif} alt="logo" />
    </div>
  );
};

export default Loading;
