import mammiimage from "./mammi.png";

function Mammi() {
  return (
    <div className="w-max max-w-md p-8 flex gap-4  rounded-2xl bg-white  shadow-lg items-center  ">
      <img className="h-25 w-25 rounded-full" src={mammiimage} alt="" />
      <div className="text-2xl">
        Sunita Attri-
        <p className="text-gray-500">The UnderWorld Daud</p>
      </div>
    </div>
  );
}

export default Mammi;
