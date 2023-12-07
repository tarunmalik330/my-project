import React from "react";
import BedroomDesign from "../assets/images/webp/BedroomDesign.webp";
import WoodenHome from "../assets/images/webp/HouseWithWooden.webp";
import Layer from "../assets/images/png/layer4.png";
import StoneImg from "../assets/images/webp/StooneImg.webp";

const CreatingHome = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#CC33D9] to-[#021A38] relative">
        <img
          src={StoneImg}
          alt="StoneImg"
          className=" absolute bottom-7 end-7"
        />
        <img src={Layer} alt="Layer" className=" w-full absolute top-[-1%]" />
        <div className="container mx-auto sm:translate-y-[-50px] translate-y-[-34px] md:translate-y-0">
          <h2 className=" text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] md:text-[28px] sm:text-[20px] text-[15px] ff_poppins relative z-[2] md:pb-[61px] sm:pb-[30px] pb-[20px] font-bold">
            Discover exclusive deals and discounts{" "}
          </h2>
          <p className=" text-center text-[#333] text-[16px] font-normal ff_poppins relative z-[2] pb-6 sm:pb-0">
            add Link{" "}
          </p>
        </div>
        <div className="container mx-auto px-6 xl:px-12 sm:pt-[180px] pt-[45px] pb-[45px]">
          <div className="xl:flex justify-between">
            <div
              className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:mb-0 mb-6 overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src={BedroomDesign}
                alt="BedroomDesign"
                className="rounded-[24px] w-full max-w-[405px] hover:scale-[1.01] transition-all duration-500 ease-linear"
              />
            </div>
            <div className="text-center flex flex-col justify-center ml-auto">
              <h4
                className="text-white 2xl:text-[42px] xl:text-[32px] text-[22px] font-bold tracking-[3px] sm:me-20"
                data-aos="fade-down"
              >
                Creating a Warm,
              </h4>
              <h3
                className="text-white 2xl:text-[42px] xl:text-[32px] text-[22px] font-bold tracking-[3px] sm:ms-20"
                data-aos="fade-down"
              >
                Welcoming Home
              </h3>
            </div>
            <div
              className="w-full h-full bg-white p-2 rounded-[24px] max-w-[405px] xl:translate-y-[-22px] xl:mt-0 mt-6 ml-auto overflow-hidden transition-all duration-300 ease-linear"
              data-aos="fade-left"
            >
              <img
                src={WoodenHome}
                alt="WoodenHome"
                className="rounded-[24px] w-full max-w-[400px] hover:scale-[1.01] transition-all duration-500 ease-linear"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatingHome;
