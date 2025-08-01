import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import useClickOutside from "@hooks/useClickOutside";
import AppLogo from "@components/ui/logo/AppLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderButtons from "./HeaderButtons";
import MobileHeaderMenu from "./MobileHeaderMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsOpen(false));
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="h-18 bg-slate-200/40 dark:bg-black/40 backdrop-blur-sm">
      <div className="container w-full flex items-center h-full justify-between">
        <AppLogo />
        <ul className="flex items-center gap-6 max-lg:hidden list-none bg-white/60 dark:bg-black/15 py-2 px-4 rounded-full">
          <HeaderLinks />
        </ul>
        <div ref={menuRef}>
          <HeaderButtons setIsOpen={setIsOpen} isOpen={isOpen} />
          <MobileHeaderMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
