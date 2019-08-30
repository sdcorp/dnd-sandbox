import React from 'react';
import { useDrag } from 'react-dnd';

const IndicatorMini = ({ bgColor }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { name: bgColor, type: 'indicator' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return preview(
    <div style={{ backgroundColor: bgColor, opacity }} className="indicator">
      Indicator component
      {drag(<button>drag me</button>)}
    </div>
  );
};

export default IndicatorMini;
