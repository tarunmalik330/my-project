import React from "react";
import { useState } from "react";
import Logo from "../assets/images/webp/logo.webp";
import HomeImg1 from "../assets/images/webp/HomeImg1.webp";
import HomeImg2 from "../assets/images/webp/HomeImg2.webp";
import Layer1 from "../assets/images/webp/layer1.webp";

const Header = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 to-fuchsia-600 pb-8 relative">
        <img
          src={Layer1}
          alt="Layer1"
          className="absolute w-full lg:bottom-[-6%] bottom-[-4%]"
        />
        <img
          src={HomeImg1}
          alt="HomeImg1"
          className="absolute md:bottom-[14%] bottom-[8%] start-0 xl:max-w-[512px] lg:max-w-[412px] md:max-w-[312px] sm:max-w[212px] max-w-[212px] xl:h-[512px] lg:h-[412px] md:h-[312px] sm:h-212px h-[212px]"
          data-aos="fade-right"
        />
        <img
          src={HomeImg2}
          alt="HomeImg2"
          className="absolute end-0 md:bottom-[7%] bottom-[5%] xl:max-w-[624px] lg:max-w-[524px] md:max-w-[424px] sm:max-w-[324px] max-w-[224px] xl:h-[624px] lg:h-[524px] md:h-[424px] sm:h-[324px] h-[224px]"
          data-aos="fade-left"
        />
        <div className="container mx-auto">
          <nav className="flex justify-between items-center pe-6">
            <img
              src={Logo}
              alt="Logo"
              className="lg:h-[168px] lg:mw-[189px] md:h-[100px] h-[70px]"
            />
            <div className="flex items-center">
              <ul
                className={`${
                  show
                    ? "flex flex-row gap-8 items-center max-lg:fixed max-lg:w-full bottom-0 max-lg:z-[5] max-lg:min-h-screen max-lg:left-[-100%] max-lg:h-full gap-5 max-lg:w-full transition-all duration-300 ease-linear"
                    : "max-lg:bg-[#021A38FA] max-lg:flex-col max-lg:fixed text-black max-lg:z-[5] max-lg:left-[0] max-lg:h-full bottom-0 gap-5 max-lg:w-full max-lg:min-h-screen flex items-center justify-center"
                }`}
              >
                <li>
                  <a
                    className=" text-white ff_poppins font-bold after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white ff_poppins font-bold after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white ff_poppins font-bold after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#Gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="text-white uppercase ff_poppins font-bold after:absolute relative after:bottom-[-4px] after:w-0 after:h-[3px] after:bg-gradient-to-b from-[#CC33D9] to-[#281AC8] after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div
                onClick={() => setshow(!show)}
                className="w-[39px] h-[27px] relative z-[15] flex flex-col justify-between lg:hidden"
              >
                <span
                  className={`${
                    show
                      ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear"
                      : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rotate-[50deg] translate-y-[26px]"
                  }`}
                ></span>
                <span
                  className={`${
                    show
                      ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear"
                      : "opacity-0"
                  }`}
                ></span>
                <span
                  className={`${
                    show
                      ? " bg-white w-full h-[4px] transition-all duration-300 ease-linear"
                      : "bg-white w-full h-[4px] transition-all duration-300 ease-linear rotate-[-50deg] translate-y-[50%]"
                  }`}
                ></span>
              </div>
            </div>
          </nav>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center lg:pt-[150px] pt-[100px] lg:pb-[500px] sm:pb-[461px] pb-[300px]">
          <div className="px-6 sm:px-0">
            <h1
              className="text-white text-5xl ff_poppins font-semibold pb-4"
              data-aos="fade-right"
            >
              We Make Your Home <br /> More Beautiful
            </h1>
            <p
              className="ff_poppins text-[21px] font-normal max-w-[419px] text-white"
              data-aos="fade-left"
            >
              From choosing the right paint to getting an expert touch - leave
              it on us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
