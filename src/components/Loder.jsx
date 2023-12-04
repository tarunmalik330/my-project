import React from "react";

const Loder = () => {
  return (
    <>
      <div className="loader w-[80px] h-[80px] absolute rounded-[50%]">
        <div className="inner_one absolute box-border w-full h-full rounded-[50%] left-0 top-0"></div>
        <div className="inner_two absolute box-border w-full h-full rounded-[50%] right-0 top-0"></div>
        <div className="inner_three absolute box-border w-full h-full rounded-[50%] right-0 bottom-0"></div>
      </div>
    </>
  );
};

export default Loder;
