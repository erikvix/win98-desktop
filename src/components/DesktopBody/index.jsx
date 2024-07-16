import React from "react";

export default function DesktopBody({ children }) {
  return (
    <div class="bg-[#c0c0c0]">
      <div className="min-w-[300px] max-w-screen-lg p-2 h-auto">{children}</div>
    </div>
  );
}
