import * as yup from "yup";
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from "./schemaRules";

export const signSchema = yup.object().shape({
  firstName: nameValidation("First name"),
  lastName: nameValidation("Last name"),
  email: emailValidation,
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Use at least 8 characters"),

  image: yup
    .mixed()
    .test("fileSize", "Image must be less than 2MB", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Only PNG, JPEG, and WEBP are allowed", (value) => {
      if (!value || value.length === 0) return true;
      return ["image/jpeg", "image/png", "image/webp"].includes(value[0].type);
    }),
});

export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const resetPasswordSchema = yup.object().shape({
  email: emailValidation,
});
