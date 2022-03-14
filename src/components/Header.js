import React from "react";

function Header() {
  return (
    <div>
      <h1 className="mt-12 text-5xl font-normal text-white">
        React sample text generator app
      </h1>
      <div className="grid grid-cols-1 my-6 divide-y-2">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
