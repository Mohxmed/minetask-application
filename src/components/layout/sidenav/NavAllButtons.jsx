import NavButton from "./NavButton";
import {
  CiAlarmOn,
  CiGrid41,
  CiMemoPad,
  CiSettings,
  CiViewTable,
} from "react-icons/ci";
function NavAllButtons({ isMinimized }) {
  return (
    <>
      <NavButton
        to="/"
        title={"Overview"}
        isMinimized={isMinimized}
        icon={() => <CiGrid41 size={25} />}
      />
      <NavButton
        to="/projects"
        title={"Projects"}
        isMinimized={isMinimized}
        icon={() => <CiViewTable size={25} />}
      />
      <NavButton
        to="/manage-time"
        title={"Time Manage"}
        isMinimized={isMinimized}
        icon={() => <CiAlarmOn size={25} />}
      />
      <NavButton
        to="/notes"
        title={"Notes"}
        isMinimized={isMinimized}
        icon={() => <CiMemoPad size={25} />}
      />
      <NavButton
        to="/settings"
        title={"Settings"}
        isMinimized={isMinimized}
        icon={() => <CiSettings size={25} />}
      />
    </>
  );
}

export default NavAllButtons;
