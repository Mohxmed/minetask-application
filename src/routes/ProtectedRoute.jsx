import { Navigate } from "react-router";
import LoadingPage from "@/components/ui/loading/LoadingPage";
import { useAuthContext } from "@/features/auth/context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, authIsReady } = useAuthContext();
  if (!authIsReady) {
    return <LoadingPage />;
  }
  return user ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
