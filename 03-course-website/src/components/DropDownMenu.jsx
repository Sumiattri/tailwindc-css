import React from "react";

function DropDownMenu({ setIsOpen }) {
  return (
    <>
      <div
        className="fixed h-screen w-screen bg-gray-500 opacity-25 z-1"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="absolute top-[72px] left-0 w-full bg-white px-6 py-4 shadow-md z-40 md:hidden flex flex-col gap-4 justify-center">
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 shadow-xs shadow-gray-300  text-lg"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 shadow-xs shadow-gray-300  text-lg"
        >
          Store
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4  shadow-xs shadow-gray-300 text-lg"
        >
          Career
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 text-lg shadow-xs shadow-gray-300 "
        >
          About
        </a>
      </div>
    </>
  );
}

export default DropDownMenu;
