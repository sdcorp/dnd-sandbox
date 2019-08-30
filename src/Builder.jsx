import React from 'react';
import { useDrop } from 'react-dnd';

import IndicatorMini from './IndicatorMini';

const indColors = ['crimson', 'deepskyblue', 'coral'];

const Builder = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'indicator',
    drop: () => ({ name: 'Dustbin2' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = 'lightgray';
  if (isActive) {
    backgroundColor = 'cyan';
  } else if (canDrop) {
    backgroundColor = 'yellow';
  }
  return (
    <div ref={drop} style={{ backgroundColor }} className="builder">
      <aside>
        {indColors.map(clr => (
          <IndicatorMini key={clr} bgColor={clr} />
        ))}
      </aside>
    </div>
  );
};

export default Builder;
