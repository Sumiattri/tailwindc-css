import mammiimage from "./mammi.png";

function Mammi() {
  return (
    <div className="flex gap-4  flex-col md:flex-row items-center justify-center w-full max-w-md  p-8  rounded-2xl bg-white  shadow-lg  ">
      <img className=" h-25 w-25 rounded-full" src={mammiimage} alt="" />
      <div className=" text-center text-2xl">
        Sunita Attri-
        <p className="text-gray-500 text-2xl">The UnderWorld Daud</p>
      </div>
    </div>
  );
}

export default Mammi;
