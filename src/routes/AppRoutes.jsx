import { lazy } from "react";
import withSuspense from "@/hoc/withSuspense";
import Dashboard from "@/pages/Dashboard";
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const SuspendedLayout = withSuspense(MainLayout);

const AppRoutes = {
  name: "application",
  path: "/app",
  element: <SuspendedLayout />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
  ],
};

export default AppRoutes;
