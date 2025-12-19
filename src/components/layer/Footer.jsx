import React from "react";

export const Footer = ({ max, step, handleSubmit, handlePrev }) => {
  return (
    <div className={`flex gap-2 ${step === 0 ? "mt-31" : "mt-10"}`}>
      {step > 0 && (
        <button
          className="justify-center items-center rounded-md flex border border-[#CBD5E1] h-11 w-32"
          onClick={handlePrev}
        >
          Back
        </button>
      )}

      <button
        className=" bg-black h-11 w-104 font-medium rounded-md text-white"
        onClick={handleSubmit}
      >
        Continue {step + 1}/{max}
      </button>
    </div>
  );
};
