import { Tooltip } from "@mui/material";
import { IoMenuOutline } from "react-icons/io5";
import { useAuthContext } from "@/features/auth/context/AuthProvider";
import MainButton from "@/components/ui/buttons/MainButton";
import OutlineButton from "@/components/ui/buttons/OutlineButton";
import DarkModeButton from "@/components/ui/buttons/DarkModeButton";
import UserWindow from "@/components/layout/user-bar/UserWindow";
import content from "@content/headerContent";
import ButtonIcon from "@/components/ui/buttons/ButtonIcon";

function HeaderButtons({ isOpen, setIsOpen }) {
  const { user, userData, authIsReady } = useAuthContext();

  if (authIsReady) {
    return (
      <>
        <div className="flex gap-2">
          <DarkModeButton />
          <div className="lg:hidden">
            <ButtonIcon
              onClick={() => setIsOpen(!isOpen)}
              tooltip={"Open Side Menu"}
              icon={() => <IoMenuOutline className="dark:text-white" />}
            />
          </div>
          {user ? (
            <div className="flex gap-2 items-center">
              <Tooltip title={user.displayName}>
                <UserWindow
                  imageURL={user.photoURL || userData.photoUrl || noprofile}
                  fullName={user.displayName}
                  email={user.email}
                  verfied={userData?.verfied}
                />
              </Tooltip>
            </div>
          ) : (
            <>
              <MainButton to={"/auth/register"} text={content.buttons.signup} />
              <OutlineButton to={"/auth/login"} text={content.buttons.login} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default HeaderButtons;
