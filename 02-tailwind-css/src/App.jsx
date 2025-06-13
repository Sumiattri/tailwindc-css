import { useState } from "react";
import Mammi from "./Mammi";
import Papa from "./Papa";

function App() {
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
      <div className=" h-80 flex-col mx-auto mt-20 w-lg bg-slate-600 flex justify-center items-center rounded-2xl ">
        {showPapa && <Papa />}
        {showMammi && <Mammi />}
        <button
          className="bg-white mt-8 h-10 p-2 w-28 rounded-sm hover:bg-slate-400 hover:text-white"
          onClick={handleToggle}
        >
          {buttonName}
        </button>
      </div>

      {/* // {showMammi && <Mammi showMammi={showMammi} setShowMammi={setShowMammi} />} */}
    </>
  );
}

export default App;
