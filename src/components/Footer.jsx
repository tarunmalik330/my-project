import React from "react";
import FooterLogo from "../assets/images/png/Footerlogo.png";
import { Google } from "./IconImg";
import { Facebook } from "./IconImg";
import { Twitter } from "./IconImg";
import { Instagrem } from "./IconImg";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#CC33D9] to-[#021A38]">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-wrap mx-auto py-[69px] lg:gap-40 gap-11">
            <div className="lg:w-4/12 flex items-center flex-col">
              <div>
                <img src={FooterLogo} alt="FooterLogo" className="pb-[8px]" />
                <p className=" text-white ff_poppins text-[14px] font-normal leading-[171.429%] max-w-[369px] pb-[18px]">
                  Painting with RP means never painting your house again! Our
                  special paint coating comes with a 20 years warranty.
                </p>
                <div className="flex gap-5">
                  <Google />
                  <Facebook />
                  <Twitter />
                  <Instagrem />
                </div>
              </div>
            </div>
            <div className="lg:w-2/4 flex gap-28">
              <ul>
                <li className="text-white ff_poppins text-[18px] font-normal leading-[166.667%] pb-3">
                  Links
                </li>
                <li>
                  <a
                    className=" text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#Gallery"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul>
                <li className="text-white ff_poppins text-[18px] font-normal leading-[166.667%] pb-3">
                  Contact Us
                </li>
                <li>
                  <a
                    className=" text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href=""
                  >
                    +91 1234567890
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#CACACA] ff_poppins text-[12px] font-normal pt-1 after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href=""
                  >
                    XYZ@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#CACACA] pt-2 ff_poppins text-[12px] font-normal after:absolute relative after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:start-2/4 after:rounded-sm hover:after:w-full hover:after:left-0 transition-all duration-400 ease-linear after:transition-all after:duration-300 after:ease-linear"
                    href=""
                  >
                    Address
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
