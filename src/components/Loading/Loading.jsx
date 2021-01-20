import React from 'react';
import gif from './loader.gif';

const Loading = () => {
  return (
    <div className="loading">
      <img src={gif} alt="logo" />
    </div>
  );
};

export default Loading;
