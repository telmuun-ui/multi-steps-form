import React from "react";

export const Header = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <div className="flex  w-[60px] h-[60px]">
        <img src="./logo.png" alt="" />
      </div>
      <div className=" flex text-shadow-lg font-semibold text-[26px]">
        Join Us! 😎
      </div>
      <div className="flex font-medium text-lg w-[416px] text-[#8E8E8E] ">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
