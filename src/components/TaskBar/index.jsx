import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DesktopBody from "../DesktopBody";

import Window from "../Window";

export default function index() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenWindow, setIsOpenWindow] = useState(true);

  function handleStart() {
    setIsOpen(!isOpen);
  }

  function handleOpenWindow() {
    setIsOpenWindow(!isOpenWindow);
  }
  return (
    <div className="bg-gray-400 w-full h-12 bottom-0 text-sm font-win left-0 absolute">
      <div className="border flex items-center h-full pl-2">
        {isOpen == true ? (
          <d className="h-[250px] w-40 absolute bottom-12 bg-gray-400">
            <div className="border m-2">
              <div>
                <button
                  onClick={handleOpenWindow}
                  className="w-full flex p-1 items-center gap-4"
                >
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
        <DragDropContext>
          <Droppable>
            <Window isOpen={isOpenWindow}>
              <div class="title-bar">
                <div class="title-bar-text">A Window With Stuff In It</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button
                    aria-label="Close"
                    onClick={() => setIsOpenWindow(false)}
                  ></button>
                </div>
              </div>
              <div class="window-body">
                <DesktopBody>
                  <div className="w-[400px] h-[600px]"></div>
                </DesktopBody>
              </div>
            </Window>
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
