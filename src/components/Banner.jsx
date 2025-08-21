import { Link } from "react-router-dom";
import banner from "../assets/imge/pexels-jonathan-borba-2878713 1.png";
import { IoIosArrowForward } from "react-icons/io";

function Banner() {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="banner"
        className="w-full h-[880px] mt-10 mb-10 z-0 object-cover"
      />

      <div
        className="absolute top-1/2 left-1/5 -translate-x-1/2 -translate-y-1/2 
                  bg-[#351C0F] opacity-[70%]  px-6 py-4 rounded-xl w-[800px] h-[420px] rounded-tr-3xl rounded-br-3xl"
      >
        <h1 className="text-white text-7xl text-left leading-24 font-bold m-auto w-[470px] h-[306px] ">
          DISCOVER NEW FLAVOURS
        </h1>
        <p className="text-white text-xl text-left font-semibold  m-auto w-[470px] h-[306px]">
          Coffee always sounds like <br /> a brilliant idea.
        </p>
      </div>
      <div className="absolute right-1/10 bottom-1/10 cursor-pointer">
        <button className="bg-white relative w-[320px] h-[50px] border-amber-950 border-2 rounded-3xl hover:bg-[#351C0F] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out">
          <Link to="/product" className="text-xl flex items-center  justify-center gap-2">
            shop all products <IoIosArrowForward />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
