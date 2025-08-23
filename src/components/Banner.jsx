import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/imge/pexels-jonathan-borba-2878713 1.png";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

function Banner() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [loader]);

  const navigate = useNavigate();

  const clickHandler = () => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      navigate("/product");
    }, 2000);
  };
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
        <button
          onClick={clickHandler}
          className="bg-white relative w-[320px] h-[50px] border-amber-950 border-2 rounded-3xl hover:bg-[#351C0F] hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
        >
          <span className="text-xl flex items-center  justify-center gap-2">
            shop all products <IoIosArrowForward />
          </span>
        </button>
        {loader && (
          <div
            className="fixed inset-0 z-50 bg-[#351C0F]/70 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="One Step Closer to Your Doorstep"
          >
           
            <div className="flex flex-col items-center gap-4">
            <ClipLoader color="#ffffff" size={64} />
              <span className="text-white font-medium">
              One Step Closer to Your Doorstep
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
