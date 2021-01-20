import React from 'react';

const Loading = ({gif}) => {
  return (
    <div className="loading">
      <img src={gif} alt="logo" />
    </div>
  );
};

export default Loading;
