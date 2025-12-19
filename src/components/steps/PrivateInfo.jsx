import React from "react";
import { Header } from "@/components/layer/Header";
import { Footer } from "../layer/Footer";
import { validateStepOne } from "@/utils/validators";
import { Input, Label } from "../ui/Input";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
export const PrivateInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  max,
  step,
  handleCont,
  handlePrev,
  value,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);
    setFormErrors(errors);

    if (isValid) {
      handleCont();
    }
  };
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className="bg-white pt-8 p-8 flex gap-8 flex-col rounded-md  w-120 text-center   "
    >
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            First name <span className="text-[#E14942]"> *</span>
          </div>
          <input
            value={formValues.firstName || ""}
            name={"firstName"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your first name"
          />

          {formErrors.firstName && (
            <p className="text-red-500 flex text-xs">{formErrors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Last name <span className="text-[#E14942]"> *</span>
          </div>
          <input
            value={formValues.lastName || ""}
            name={"lastName"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your last name"
          />
          {formErrors.lastName && (
            <p className="text-red-500 flex text-xs">{formErrors.lastName}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Username <span className="text-[#E14942]">*</span>
          </div>
          <input
            value={formValues.username || ""}
            name={"username"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your username"
          />
          {formErrors.username && (
            <p className="text-red-500 flex text-xs">{formErrors.username}</p>
          )}
        </div>
        <div>
          <div>
            <Footer
              handleChange={handleChange}
              step={step}
              max={max}
              handleCont={handleCont}
              handlePrev={handlePrev}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
