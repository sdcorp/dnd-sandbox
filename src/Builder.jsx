import React from 'react';
import IndicatorMini from './IndicatorMini';

const indColors = ['crimson', 'chartreuse', 'deepskyblue', 'coral'];

const Builder = () => {
  return (
    <div className="builder">
      <aside>
        {indColors.map(clr => (
          <IndicatorMini key={clr} bgColor={clr} />
        ))}
      </aside>
    </div>
  );
};

export default Builder;
