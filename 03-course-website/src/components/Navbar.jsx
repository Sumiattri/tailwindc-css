import { IoReorderThreeOutline } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // clean up on unmount just in case
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  function handleClick() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <>
      <nav className="  h-18  flex justify-between items-center pl-10 pr-15 border-b-1 border-b-gray-300">
        <div className="">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold flex gap-2"
          >
            <SiSololearn /> <span>TechBar</span>
          </motion.h2>
        </div>
        <div className=" hidden md:flex gap-12  items-center font-semibold ">
          <h4 className=" text-lg transition-transform duration-200 hover:scale-110 cursor-pointer">
            Home
          </h4>
          <h4 className=" text-lg transition-transform duration-200 horver:scale-110 cursor-pointer ">
            Store
          </h4>
          <h4 className=" text-lg transition-transform duration-200 hover:scale-110 cursor-pointer ">
            Carrer
          </h4>
          <h4 className=" text-lg transition-transform duration-200 hover:scale-110 cursor-pointer">
            About
          </h4>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#ca5560] px-3 py-2 rounded-md text-white"
          >
            Sign in
          </motion.button>
        </div>

        <button className="inline md:hidden text-4xl  " onClick={handleClick}>
          {" "}
          <IoReorderThreeOutline />
        </button>
      </nav>
      {isOpen && <DropDownMenu setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
