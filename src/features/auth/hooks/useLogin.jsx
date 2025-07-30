import { useState } from "react";
import { login } from "@/services/auth/authServices";
import { getLoginErrorMessage } from "../utils/getErrors";
import { useNavigate } from "react-router";

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      const user = await login(email, password);
      console.log(user);
      navigate("/app");
    } catch (err) {
      const errMsg = getLoginErrorMessage(err.code);
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };
  return { handleLogin, isLoading, error };
}

export default useLogin;
