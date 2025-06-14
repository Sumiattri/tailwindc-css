import React from "react";

function DropDownMenu({ setIsOpen }) {
  return (
    <>
      <div
        className="fixed h-screen w-screen bg-gray-500 opacity-25 z-1"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="absolute top-[72px] left-0 w-screen bg-white  py-4 shadow-md z-40 md:hidden flex flex-col gap-4 justify-center">
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 shadow-xs shadow-gray-300  text-lg "
        >
          <span className="ml-5">Home</span>
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 shadow-xs shadow-gray-300  text-lg"
        >
          <span className="ml-5">Store</span>
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4  shadow-xs shadow-gray-300 text-lg"
        >
          <span className="ml-5">Career</span>
        </a>
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="pl-4 text-lg shadow-xs shadow-gray-300 "
        >
          <span className="ml-5">About</span>
        </a>
      </div>
    </>
  );
}

export default DropDownMenu;
