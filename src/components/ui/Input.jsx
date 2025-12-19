import React from "react";
import { Label } from "./Label";
export const Input = ({
  placeholder,
  name,
  labelName,
  handleChange,
  value,
}) => {
  return (
    <div>
      <Label name={labelName} />
      <input
        value={value}
        className="h-[44px] w-[416px] rounded-[8px]  border-#CBD5E1 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};
