import { IoMenuOutline } from "react-icons/io5";
import NotificationWindow from "./NotificationWindow";
import UserWindow from "./UserWindow";
import MobileNav from "./MobileNav";
import { useRef, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { useAuthContext } from "@/features/auth/context/AuthProvider";
import noprofile from "@assets/user/noprofile.png";

export default function TopUserBar({ children, notify = false }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const mobileMenuRef = useRef(null);
  useClickOutside(mobileMenuRef, () => setIsOpenMenu(false));
  const { user, isAuthReady, userData } = useAuthContext();
  return (
    <div ref={mobileMenuRef}>
      <div className="w-full flex justify-between border-b border-gray-200 pb-2 mb-2">
        {children}
        <div className="flex gap-2 items-center">
          <button
            className={`icon-btn transition-shadow duration-150 sm:hidden ${
              isOpenMenu && "shadow-lg shadow-black/30 "
            }`}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <IoMenuOutline size={25} />
          </button>
          <NotificationWindow notify={notify} />
          <UserWindow
            fullName={user.displayName}
            imageURL={user.photoURL || userData.photoUrl || noprofile}
            email={user.email}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden sm:hidden flex justify-center items-center transition-all duration-150 ${
          isOpenMenu ? "h-60" : "h-0"
        }`}
      >
        <MobileNav />
      </div>
    </div>
  );
}
