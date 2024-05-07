import React from "react";
import { useState } from "react";

import Icon from "../Icon";

export default function index() {
  const [isOpen, setIsOpen] = useState(true);

  function handleStart() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-gray-400 w-full h-12 bottom-0 text-sm font-win left-0 absolute">
      <div className="border flex items-center h-full pl-2">
        {isOpen == true ? (
          <d className="h-[250px] w-40 absolute bottom-12 bg-gray-400">
            <div className="border m-2">
              <div>
                <button className="w-full flex p-1 items-center gap-4">
                  <img
                    className="w-6"
                    src="https://win98icons.alexmeub.com/icons/png/computer-2.png"
                    alt=""
                  />
                  Profile
                </button>
              </div>
            </div>
          </d>
        ) : null}
        <button onClick={handleStart} className="button h-8">
          Start
        </button>
      </div>
    </div>
  );
}
