import { useState } from "react";
import Papa from "./Papa";
import Mammi from "./Mammi";

function Card() {
  const [showPapa, setShowPapa] = useState(true);
  const [showMammi, setShowMammi] = useState(false);
  const [buttonName, setButtonName] = useState("See Mammi");
  function handleToggle(e) {
    if (showPapa) {
      console.log(e.target);

      setShowPapa(false);
      setShowMammi(true);
      setButtonName("See Papa");
      return;
    }
    if (showMammi) {
      setShowPapa(true);
      setShowMammi(false);
      setButtonName("See Mammi");
      return;
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-lg min-w-[250px] mx-4 sm:mx-auto  px-10 py-6 sm:p-10 mt-5 bg-slate-600 rounded-2xl ">
        {" "}
        {showPapa && <Papa />}
        {showMammi && <Mammi />}
        <button
          className="bg-white mt-8 h-10 p-2 w-28 rounded-sm hover:bg-slate-400 hover:text-white"
          onClick={handleToggle}
        >
          {buttonName}
        </button>
      </div>
    </>
  );
}

export default Card;
