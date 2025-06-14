import { IoReorderThreeOutline } from "react-icons/io5";
import { SiSololearn } from "react-icons/si";

function Navbar() {
  return (
    <>
      <nav className="  h-18  flex justify-between items-center pl-10 pr-15 border-b-1 border-b-gray-300">
        <div className="">
          <h2 className="text-2xl font-bold flex gap-2">
            <SiSololearn /> <span>TechBar</span>
          </h2>
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
          <button className="bg-[#ca5560] px-3 py-2 rounded-md text-white transition-transform duration-200 hover:bg-[#089e99] hover:scale-110">
            Sign in
          </button>
        </div>
        <div className="inline md:hidden text-4xl ">
          {" "}
          <IoReorderThreeOutline />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
