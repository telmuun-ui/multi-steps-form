import React from "react";

export const Label = ({ name }) => {
  return (
    <div>
      <div className="text-[14px] font-bold">
        {name} <span className="text-red-500 font-bold">*</span>
      </div>
    </div>
  );
};
