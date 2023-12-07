import React from "react";
import LivingRoom from "../assets/images/webp/LivingRoom.webp";
import Office from "../assets/images/webp/Office.webp";
import BathImg from "../assets/images/webp/BathDesign.webp";
import Kitchen from "../assets/images/webp/Dining.webp";
import BedRoom from "../assets/images/webp/Bedroom.webp";
import Layer3 from "../assets/images/png/layer3.png";

const Gallery = () => {
  return (
    <>
      <div id="Gallery" className="relative">
        <img
          src={Layer3}
          alt="Layer3"
          className=" absolute xl:top-[-16%] lg:top-[-12%] sm:top-[-4%] top-[-3%] w-full"
        />
        <div className="container mx-auto xl:px-[96px] px-4 relative z-[1]">
          <h2 className="text-[32px] font-bold ff_poppins bg-clip-text text-transparent bg-gradient-to-b from-rose-400 to-fuchsia-600 pb-[92px] text-center relative z-[1]">
            Gallery
          </h2>
          <div className=" flex flex-row flex-wrap items-center">
            <div className="lg:w-3/6 w-full flex flex-col items-center md:gap-36 gap-12">
              <div data-aos="zoom-in-right">
                <div className="rounded-[16px] p-[8px] bg-gradient-to-tr from-[#CC33D9] to-[#2f245c] overflow-hidden cursor-pointer">
                  <img
                    src={LivingRoom}
                    alt="LivingRoom"
                    className=" rounded-[16px] hover:scale-[1.01] transition-all duration-300 ease-linear"
                  />
                </div>
                <h4 className="leading-[139.286%] pt-[17px] font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  Living Room
                </h4>
              </div>
              <div data-aos="zoom-in-right">
                <div className="rounded-[16px] p-[8px] bg-gradient-to-tr from-[#CC33D9] to-[#2f245c] overflow-hidden cursor-pointer">
                  <img
                    src={Kitchen}
                    alt="Kitchen"
                    className=" rounded-[16px] hover:scale-[1.01] transition-all duration-300 ease-linear"
                  />
                </div>
                <h4 className="leading-[139.286%] pt-[17px] font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  Kitchen
                </h4>
              </div>
            </div>
            <div className="w-full lg:w-3/6 flex flex-col items-center md:gap-28 gap-12">
              <div
                className="md:pt-[112px] pt-[48px] lg:pt-0"
                data-aos="zoom-in-left"
              >
                <div className="rounded-[16px] p-[8px] bg-gradient-to-tr from-[#CC33D9] to-[#2f245c] overflow-hidden cursor-pointer">
                  <img
                    src={Office}
                    alt="Office"
                    className=" rounded-[16px] hover:scale-[1.01] transition-all duration-300 ease-linear"
                  />
                </div>
                <h4 className="leading-[139.286%] pt-[17px] font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  Office
                </h4>
              </div>
              <div data-aos="zoom-in-left">
                <div className="rounded-[16px] p-[8px] bg-gradient-to-tr from-[#CC33D9] to-[#2f245c] overflow-hidden cursor-pointer">
                  <img
                    src={BathImg}
                    alt="BathImg"
                    className=" rounded-[16px] hover:scale-[1.01] transition-all duration-300 ease-linear"
                  />
                </div>
                <h4 className="leading-[139.286%] pt-[17px] font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  Bath
                </h4>
              </div>
              <div data-aos="zoom-in-left">
                <div className="rounded-[16px] p-[8px] bg-gradient-to-tr from-[#CC33D9] to-[#2f245c] overflow-hidden cursor-pointer">
                  <img
                    src={BedRoom}
                    alt="BedRoom"
                    className=" rounded-[16px] hover:scale-[1.01] transition-all duration-300 ease-linear"
                  />
                </div>
                <h4 className="leading-[139.286%] pt-[17px] font-semibold text-[28px] bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  Bed Room
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
