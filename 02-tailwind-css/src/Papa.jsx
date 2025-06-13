import papaimage from "./papa.png";

function Papa() {
  return (
    <div className="w-max max-w-md p-8 flex gap-4  rounded-2xl bg-white  shadow-lg items-center  ">
      <img className="h-25 w-25 rounded-full" src={papaimage} alt="" />
      <div className="text-2xl">
        Mahender Singh-
        <p className="text-gray-500">The UnderWorld Don</p>
      </div>
    </div>
  );
}

export default Papa;
