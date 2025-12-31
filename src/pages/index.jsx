import { useEffect, useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { AnimatePresence, motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { initialValues } from "@/constants/initials";
import { retrieveFormValues } from "@/utils/localStorage";

const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const max = 3;
  const handleCont = () => {
    if (step < max) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const Container = [PrivateInfo, ContactInfo, ProfileImage, Success][step];

  useEffect(() => {
    const valueFromLocalStorage = retrieveFormValues();
    if (valueFromLocalStorage) {
      setFormValues(valueFromLocalStorage);
      setStep(valueFromLocalStorage.step);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
        <motion.div
          initial="enter"
          animate="active"
          exit="exit"
          variants={animationVariant}
          transition={{ duration: 0.5 }}
        >
          <Container
            handleChange={handleChange}
            step={step}
            max={max}
            setFormErrors={setFormErrors}
            formErrors={formErrors}
            formValues={formValues}
            handleCont={handleCont}
            handlePrev={handlePrev}
            setFormValues={setFormValues}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default Home;
