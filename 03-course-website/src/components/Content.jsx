import image from "../assets/image.png";
import { motion } from "framer-motion";

function Content() {
  return (
    <>
      <div className="h-[calc(100vh-72px)] w-screen  flex flex-col sm:flex-row ">
        <div className="w-screen sm:w-[50%] pt-15 pl-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="text-5xl font-semibold leading-tight"
          >
            Learn from the <span className="text-[#ca5560]">coolest</span>{" "}
            coding platform of <br /> India
          </motion.h1>
          <p className="md:max-w-[450px] max-w-[400px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            natus odit illo ut neque non eius at ad molestiae odio accusamus aut
            ur, omnis ex saepe.
          </p>
          <div className="mt-10">
            <button className="bg-[#ca5560] px-4 py-4 rounded-xl  text-white transition-transform duration-200 hover:bg-[#089e99] hover:scale-110">
              Explore more
            </button>
          </div>
        </div>
        <div className="w-[100%] sm:w-[50%] pt-8 ">
          <img
            className="sm:max-h-full sm:w-full w-lg h-lg lg:object-cover sm:object-contain"
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Content;
