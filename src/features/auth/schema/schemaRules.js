import * as yup from "yup";

export const emailValidation = yup
  .string()
  .required("Email is required")
  .email("Invalid email address");

export const passwordValidation = yup
  .string()
  .required("Please enter your password")
  .min(8, "Password can't be less than 8 characters");

export const nameValidation = (fieldName = "Name") =>
  yup.string().required(`${fieldName} is required`);
