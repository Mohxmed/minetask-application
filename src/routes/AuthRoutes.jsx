import Signup from "@pages/Signup";
import Login from "@pages/Login";
import ResetPassword from "@pages/ResetPassword";

const AuthRoutes = {
  name: "authentication",
  path: "/auth",
  children: [
    {
      index: true,
      path: "register",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
  ],
};

export default AuthRoutes;
