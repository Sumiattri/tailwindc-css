import mammiimage from "./mammi.png";

function Mammi() {
  return (
    <div className="flex gap-4  flex-col sm:flex-row items-center justify-center w-full max-w-md  p-8  rounded-2xl bg-white  shadow-lg  ">
      <img
        className="sm:h-25 sm:w-25 h-20 w-20 rounded-full"
        src={mammiimage}
        alt=""
      />
      <div className=" text-center text-2xl">
        Sunita Attri-
        <p className="text-gray-500 text-2xl">The UnderWorld Daud</p>
      </div>
    </div>
  );
}

export default Mammi;
