import React from "react";

export default function DesktopBody({ children }) {
  return (
    <div class="bg-[#c0c0c0]">
      <div className="min-w-[300px] max-w-screen-lg overflow-auto h-[calc(100vh-32px)] p-2 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
