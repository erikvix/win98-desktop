import React from "react";

export default function index({ iconURL }) {
  return (
    <div>
      <img className="w-full h-auto" src={iconURL} alt="" />
    </div>
  );
}
