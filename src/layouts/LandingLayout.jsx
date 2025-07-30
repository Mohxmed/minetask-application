import { Outlet, ScrollRestoration } from "react-router";
import { useAuthContext } from "@/features/auth/context/AuthProvider";
import LoadingPage from "@/components/ui/loading/LoadingPage";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

function LandingLayout() {
  const { authIsReady } = useAuthContext();
  return authIsReady ? (
    <div>
      <ScrollRestoration />
      <div className="sticky z-30 top-0">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  ) : (
    <LoadingPage />
  );
}

export default LandingLayout;
