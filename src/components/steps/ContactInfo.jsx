import React, { useEffect } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { Footer } from "../layer/Footer";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepTwo } from "@/utils/validators";
import { saveFormValues, retrieveFormValues } from "@/utils/localStorage";
export const ContactInfo = ({
  handleChange,
  max,
  step,
  handleCont,
  handlePrev,
  formValues,
  formErrors,
  setFormErrors,
  setFormValues,
  value,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);
    setFormErrors(errors);

    if (isValid) {
      handleCont();
      saveFormValues(formValues, step);
    }
  };
  useEffect(() => {
    const valueFromLocalStorage = retrieveFormValues();
    if (valueFromLocalStorage) {
      setFormValues(valueFromLocalStorage);
    }
  }, []);
  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className=" bg-white pt-8 p-8 flex gap-8 flex-col rounded-md  w-120 text-center  "
    >
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Email <span className="text-[#E14942]"> *</span>
          </div>
          <input
            value={formValues.email || ""}
            name={"email"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your email"
          />
          {formErrors.email && (
            <p className="text-red-500 flex text-xs">{formErrors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Phone number <span className="text-[#E14942]"> *</span>
          </div>
          <input
            value={formValues.phoneNumber || ""}
            name={"phoneNumber"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your phone number"
          />
          {formErrors.phoneNumber && (
            <p className="text-red-500 justify-start flex  text-xs">
              {formErrors.phoneNumber}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Password <span className="text-[#E14942]">*</span>
          </div>
          <input
            type="password"
            value={formValues.password || ""}
            name={"password"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your password"
          />
          {formErrors.password && (
            <p className="text-red-500 flex text-xs">{formErrors.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold text-sm">
            Confirm password <span className="text-[#E14942]">*</span>
          </div>
          <input
            type="password"
            value={formValues.confirmPassword || ""}
            name={"confirmPassword"}
            onChange={handleChange}
            className="flex pl-4  w-[416px] h-[44px] border-[1px] border-[#CBD5E1]  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm password"
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 flex text-xs">
              {formErrors.confirmPassword}
            </p>
          )}
        </div>
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
    </motion.div>
  );
};
