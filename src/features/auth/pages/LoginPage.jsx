import { Link } from "react-router";
import { TbFaceIdError } from "react-icons/tb";
import AppLogo from "@/components/ui/logo/AppLogo";
import LoginForm from "../forms/LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col sm:flex-row max-sm:bg-primary max-sm:pattern max-sm:items-center">
      <div className="bg-primary pattern flex items-center justify-center w-full lg:w-3/5 sm:w-1/2 p-6 max-sm:mt-6 sm:min-h-screen">
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white">
            Back Again!
          </h1>
          <Link
            to="/auth/register"
            className="text-white/80 underline flex gap-2 items-center justify-center text-sm sm:text-base"
          >
            <TbFaceIdError className="text-lg" />
            No, I don't have an account!
          </Link>
        </div>
      </div>
      <div className="relative w-11/12 lg:w-2/5 sm:w-1/2 flex items-center justify-center sm:py-16 py-2">
        <div className="w-full max-w-2xl px-4">
          <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white p-3 max-md:rounded-full max-md:shadow-md">
            <AppLogo />
          </div>
          <div className="mt-12 sm:mt-18">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
