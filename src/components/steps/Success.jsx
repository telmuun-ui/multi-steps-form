import React from "react";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
export const Success = ({ max, step, handleCont, handlePrev }) => {
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className="bg-white pt-8 p-8 flex gap-3 flex-col rounded-md  w-120 text-center "
    >
      <div className="flex gap-2 flex-col ">
        <div className="flex  w-15 h-15">
          <img src="./logo.png" alt="" />
        </div>
        <div className=" flex text-shadow-lg font-semibold text-[26px]">
          You're All Set 🔥
        </div>
        <div className="flex font-medium text-lg w-[416px] text-[#8E8E8E] ">
          We have received your submission. Thank you!
        </div>
        <div className={`flex gap-2 ${step === 0 ? "mt-31" : "mt-10"}`}>
          {step > 0 && (
            <button
              className="justify-center items-center rounded-md flex border border-[#CBD5E1] h-11 w-32"
              onClick={handlePrev}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              className=" bg-black h-11 w-104 font-medium rounded-md text-white"
              onClick={handleCont}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
