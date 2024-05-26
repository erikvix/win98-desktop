import React from "react";
import DesktopIcons from "../DesktopIcons";
import { useDrop } from "react-dnd";

export default function Desktop() {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "window",
    drop: (item, monitor) => {
      alert("Dropped!");
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={dropRef} className="h-max w-max flex flex-col">
      <DesktopIcons iconURL="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png">
        Trash
      </DesktopIcons>
      <DesktopIcons iconURL="https://win98icons.alexmeub.com/icons/png/cd_audio_cd_a-3.png">
        Music
      </DesktopIcons>
      <DesktopIcons iconURL="https://win98icons.alexmeub.com/icons/png/msn3-4.png">
        MSN
      </DesktopIcons>
      <DesktopIcons iconURL="https://win98icons.alexmeub.com/icons/png/msie2-1.png" />
    </div>
  );
}
