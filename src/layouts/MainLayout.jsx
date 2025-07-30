import { Outlet, ScrollRestoration } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";
import SideNavigation from "../components/layout/sidenav/SideNavigation";
import ProtectedRoute from "@/routes/ProtectedRoute";

function MainLayout() {
  const [minimizeMenu, setMinimizeMenu] = useLocalStorage(
    "minimizedMenu",
    false
  );

  return (
    <ProtectedRoute>
      <div className="flex max-sm:overflow-x-hidden">
        <aside
          className={`${
            minimizeMenu ? "w-[75px]" : "w-[260px]"
          }  border-r border-gray-200 max-sm:hidden transition-[width] duration-300 `}
        >
          <SideNavigation
            setMinimizeMenu={setMinimizeMenu}
            isMinimized={minimizeMenu}
          />
        </aside>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <ScrollRestoration />
    </ProtectedRoute>
  );
}

export default MainLayout;
