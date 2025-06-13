import papaimage from "./papa.png";

function Papa() {
  return (
    <div className="flex flex-col sm:flex-row  items-center justify-center gap-4   w-full max-w-md  px-5 py-6 sm:p-8   rounded-2xl bg-white  shadow-lg  ">
      <img className="h-25 w-25 rounded-full" src={papaimage} alt="" />
      <div className="text-2xl  ">
        Mahender Singh-
        <p className="text-gray-500 ">The UnderWorld Don</p>
      </div>
    </div>
  );
}

export default Papa;
