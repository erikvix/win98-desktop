import React from "react";

export default function DesktopIcons({
  iconURL = "https://win98icons.alexmeub.com/icons/png/msie2-2.png",
  children = "Internet Explorer",
}) {
  return (
    <div className="w-24 h-24 flex flex-col items-center justify-center text-sm font-win text-slate-50 mb-4">
      <div className="h-max w-max flex">
        <img src={iconURL} alt="" />
      </div>
      <p className="text-center line-clamp-2 break-words">{children}</p>
    </div>
  );
}
