import React from "react";
import DifferentColors from "../assets/images/webp/DifferentColors.webp";

const AboutUs = () => {
  return (
    <>
      <div
        id="About"
        className="container mx-auto pt-9 pb-5 z-[1] relative px-6 xl:px-0"
      >
        <div className="flex justify-center items-center lg:flex-row flex-col mx-auto flex-wrap">
          <div className="lg:w-5/12 w-full px-3 flex items-center justify-center">
            <img
              src={DifferentColors}
              alt="DifferentColors"
              data-aos="fade-right"
            />
          </div>
          <div className="lg:w-7/12 w-full px-3 flex justify-center pt-4 md:pt-0">
            <div>
              <h2
                className="text-[32px] font-bold ff_poppins bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-fuchsia-600 pb-7"
                data-aos="fade-left"
              >
                Welcome to RP
              </h2>
              <p
                className=" ff_poppins leading-[250%] text-[16px] max-w-[639px] text-[#333333]"
                data-aos="fade-left"
              >
                A family-run business, with our own factory nestled in India, we
                are producing a complete range of traditional and modern paints.
                We formulate high performance paint, blended with the best
                ingredients. Our company includes interior and exterior paints,
                oil-based paints, floor paints and a special range of
                antimicrobial paints
              </p>
              <p
                className="ff_poppins leading-[250%] text-[16px] max-w-[639px] text-[#333333] pb-7"
                data-aos="fade-left"
              >
                With a color palette you can easily mix the colors together to
                expand the range. The numbers of creating different textures,
                finishes and shades are unlimited.{" "}
              </p>
              <div data-aos="fade-left">
                <button className="hover:shadow-button_hover transition-all duration-300 ease-linear bg-gradient-to-b from-slate-900 to-fuchsia-600 rounded-[100px] py-[17px] px-[60px] text-white font-bold font-['poppins']">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
