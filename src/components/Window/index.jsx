import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

const Window = ({ children, isOpen }) => {
  const nodeRef = useRef(null);

  return (
    <div className="window">
      {isOpen && (
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef} className="fixed top-0 left-0 rounded cursor-move">
            {children}
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Window;
