import { useState } from "react";
import Mammi from "./Mammi";
import Papa from "./Papa";

function App() {
  const [showPapa, setShowPapa] = useState(true);
  const [showMammi, setShowMammi] = useState(false);
  return (
    <>
      {showPapa && <Papa showPapa={showPapa} setShowPapa={setShowPapa} />}
      {showMammi && <Mammi showMammi={showMammi} setShowMammi={setShowMammi} />}
    </>
  );
}

export default App;
