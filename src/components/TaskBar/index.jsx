import React from "react";
import { useState } from "react";
import DesktopIcons from "../DesktopIcons";

export default function index() {
  const [isOpen, setIsOpen] = useState(false);

  function handleStart() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-gray-400 w-full h-12 bottom-0 left-0 absolute">
      <div className="border flex items-center h-full pl-2">
        {isOpen == true ? (
          <div className="h-[400px] w-20 absolute bottom-12 bg-gray-400">
            <div className="border">
              <DesktopIcons />
            </div>
          </div>
        ) : null}
        <button onClick={handleStart} className="button h-8">
          Start
        </button>
      </div>
    </div>
  );
}
