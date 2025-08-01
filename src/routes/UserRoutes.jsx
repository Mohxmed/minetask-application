import LandingLayout from "@/layouts/LandingLayout";
import Profile from "@/pages/Profile";

const UserRoutes = {
  name: "application",
  path: "/user",
  element: <LandingLayout />,

  children: [
    {
      index: true,
      element: <Profile />,
    },
  ],
};

export default UserRoutes;
