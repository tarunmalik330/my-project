import React from "react";

const Newsletter = () => {
  return (
    <>
      <div id="Contact">
        <div className="container mx-auto sm:pt-[189px] pt-[70px] sm:pb-[92px] pb-[70px] px-6 sm:px-0">
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-['poppins'] text-center bg-clip-text text-transparent bg-gradient-to-b from-[#FD749B] to-[#281AC8] sm:text-[28px] text-[25px] font-bold leading-[232.143% ] pb-[37px]">
              Subscribe our newsletter
            </h2>
            <p className="font-['poppins'] text-[#333] leading-[250%] font-normal text-center lg:max-w-[378px] sm:pb-[23px]">
              Subscribe to our newsletter for daily/weekly update of our
              products and services.
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center mt-9 gap-5 w-full">
              <div className="bg-clip-padding bg-gradient-to-b from-[#FD749B] to-[#281AC8] p-[1px] rounded-[100px] w-full max-w-[420px]">
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="py-3 rounded-[100px] pl-7 w-full outline-none text-black !placeholder-black"
                />
              </div>
              <button className="ff_poppins font-bold text-[14px] text-white py-4 px-10 rounded-[100px] bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
