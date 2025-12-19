import { isEmpty } from "./validation-utils";
import { isEmail } from "./validation-utils";
import { isPhoneNumber } from "./validation-utils";
export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Нэрээ оруулна уу";
  }
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овгоо оруулна уу";
  }
  if (isEmpty(formValues.username)) {
    errors.username = "Хэрэглэгчийн нэрээ оруулна уу";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "Имэйл оруулна уу";
  }

  if (!formValues.phoneNumber) {
    errors.phoneNumber = "Утасны дугаар оруулна уу";
  }

  if (!formValues.password) {
    errors.password = "Нууц үг оруулна уу";
  } else if (formValues.password.length < 6) {
    errors.password = "Нууц үг 6-с дээш тэмдэгттэй байх ёстой";
  }

  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үгээ давтан оруулна уу";
  } else if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үг таарахгүй байна";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const validateStepThree = (formValues) => {
  const errors = {};
  if (isEmpty(formValues.birthDay)) {
    errors.birthDay = "Он сар аа оруулна уу";
  }
  if (isEmpty(formValues.profile.name)) {
    errors.profile = "Зураг аа оруулна уу";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
