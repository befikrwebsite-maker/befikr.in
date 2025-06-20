// components/DraggableSection.js
import { useDrag, useDrop } from 'react-dnd';
import React from 'react';

const ItemType = 'SECTION';

const DraggableSection = ({ section, index, moveSection, children }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index === index) return;

      moveSection(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-sm border transition-shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default DraggableSection;
