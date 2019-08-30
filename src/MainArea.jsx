import React from 'react';
import IndicatorMini from './IndicatorMini';

const MainArea = () => {
  return (
    <div className="main-area">
      <h1>Main Area</h1>
      <div className="grid">
        <IndicatorMini bgColor="blueviolet" />
      </div>
    </div>
  );
};

export default MainArea;
