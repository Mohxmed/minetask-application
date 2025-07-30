import { useState } from "react";
import { resetPassword } from "@/services/auth/authServices";
import { getResetPasswordErrorMessage } from "../utils/getErrors";

function useResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (email) => {
    setError(null);
    setIsLoading(true);
    try {
      await resetPassword(email);
    } catch (err) {
      const errMsg = getResetPasswordErrorMessage(err.code);
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleResetPassword, isLoading, error };
}

export default useResetPassword;
