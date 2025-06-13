import papaimage from "./papa.png";

function Papa({ showPapa, setShowPapa }) {
  return (
    <div className="">
      <div className=" h-80 flex-col mx-auto mt-20 w-lg bg-slate-600 flex justify-center items-center rounded-2xl ">
        <div className="w-max max-w-md p-8 flex gap-4  rounded-2xl bg-white  shadow-lg items-center  ">
          <img className="h-25 w-25 rounded-full" src={papaimage} alt="" />
          <div className="text-2xl">
            Mahender Singh-
            <p className="text-gray-500">The UnderWorld Don</p>
          </div>
        </div>
        <button
          className="bg-white mt-8 h-10 p-2 rounded-sm hover:bg-slate-400"
          onClick={() => setShowPapa(false)}
        >
          Show Mammi
        </button>
      </div>
    </div>
  );
}

export default Papa;
