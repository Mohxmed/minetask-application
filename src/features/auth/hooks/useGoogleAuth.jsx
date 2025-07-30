import { useState } from "react";
import { loginWithGoogle } from "@/services/auth/authServices";
import { getGoogleAuthErrorMessage } from "../utils/getErrors";
import { useNavigate } from "react-router";
import { saveUser } from "@/services/database/dbServices";

function useGoogleAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSign = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await loginWithGoogle();
      const user = result.user;
      const fullName = user.displayName;
      // Split Name
      const [firstName, ...rest] = fullName.split(" ");
      const lastName = rest.join(" ");
      // Save to db
      saveUser(result.user, firstName, lastName, user.photoURL, true, true);
      navigate("/app");
    } catch (err) {
      const errMsg = getGoogleAuthErrorMessage(err.code);
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleGoogleSign, gLoading: isLoading, gError: error };
}
export default useGoogleAuth;
