import SideNavigation from "@/components/layout/sidenav/SideNavigation";

const UserRoutes = {
  name: "application",
  path: "/user",
  children: [
    {
      index: true,
      element: <SideNavigation />,
    },
  ],
};

export default UserRoutes;
