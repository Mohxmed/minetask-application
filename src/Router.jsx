import { createBrowserRouter, RouterProvider } from "react-router";
// Routes
import LandingRoutes from "@routes/LandingRoutes";
import AuthRoutes from "@routes/AuthRoutes";
import AppRoutes from "@routes/AppRoutes";
import UserRoutes from "@routes/UserRoutes";

const router = createBrowserRouter([
  LandingRoutes,
  AuthRoutes,
  UserRoutes,
  AppRoutes,
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
