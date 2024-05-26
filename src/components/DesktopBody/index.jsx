import React from "react";
import { useDrag } from "react-dnd";

export default function DraggableComponent({ children }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "window",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div class="window-body">
      <div className="w-[400px] h-[600px]">
        <div
          ref={dragRef}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move",
          }}
        ></div>
      </div>
    </div>
  );
}
