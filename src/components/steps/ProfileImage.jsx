import React, { useEffect, useState } from "react";
import { Header } from "@/components/layer/Header";
import { Footer } from "../layer/Footer";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "@/utils/validators";
import {
  saveFormValues,
  retrieveFormValues,
  deleteValues,
} from "@/utils/localStorage";
export const ProfileImage = ({
  handleChange,
  max,
  step,
  handleCont,
  handlePrev,
  formValues,
  formErrors,
  setFormErrors,
  setFormValues,
}) => {
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;

    const localurl = URL.createObjectURL(file);

    setPreview(localurl);

    handleChange({
      target: {
        name: "profile",
        value: localurl,
      },
    });
  };

  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
    setFormErrors(errors);

    if (isValid) {
      handleCont();
      deleteValues();
    }
  };

  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className="bg-white pt-8 p-8 flex gap-4 flex-col rounded-md w-120 text-center"
    >
      <Header />

      <div className="flex flex-col gap-2 text-left">
        <label className="text-sm font-semibold text-[#334155]">
          Date of Birth<span className="text-[#E14942]"> *</span>
        </label>

        <input
          type="date"
          name="birthDay"
          value={formValues.birthDay || ""}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        {formErrors.birthDay && (
          <p className="text-red-500 text-xs">{formErrors.birthDay}</p>
        )}
      </div>

      <div className="flex flex-col gap-2 text-left">
        <label className="text-sm font-semibold text-[#334155]">
          Profile image<span className="text-[#E14942]"> *</span>
        </label>

        <input
          type="file"
          accept="image/*"
          id="profile"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <label
          htmlFor="profile"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFile(e.dataTransfer.files[0]);
          }}
          className="border border-dashed rounded-lg h-40 flex items-center justify-center cursor-pointer bg-gray-50"
        >
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-500 text-sm">Browse or Drop Image</span>
          )}
        </label>

        {formErrors.profile && (
          <p className="text-red-500 text-xs">{formErrors.profile}</p>
        )}
      </div>

      <Footer
        handleChange={handleChange}
        step={step}
        max={max}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  );
};
