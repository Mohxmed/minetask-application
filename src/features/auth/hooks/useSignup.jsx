import { useState } from "react";
import { signup } from "@/services/auth/authServices";
import { saveUser } from "@/services/database/dbServices";
import { updateProfile } from "firebase/auth";
import { getAuthErrorMessage } from "../utils/getErrors";
import { useNavigate } from "react-router";
import { uploadToCloudinary } from "@/services/cloudinary/uploadToCloudinary";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (
    firstName,
    lastName,
    email,
    password,
    imageFile
  ) => {
    setError(null);
    setIsLoading(true);

    // firebase auth
    try {
      const credentials = await signup(email, password);
      await updateProfile(credentials.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Upload photo to cloudinary
      let photoUrl = null;
      if (imageFile) {
        photoUrl = await uploadToCloudinary(imageFile);
      }

      // Save user data to firestore
      await saveUser(
        credentials.user,
        firstName,
        lastName,
        photoUrl,
        false,
        false
      );

      // Save to session for login
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      navigate("/auth/login");
    } catch (error) {
      const errMsg = getAuthErrorMessage(error.code);
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSignup, isLoading, error };
};
