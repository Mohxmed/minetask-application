import { Link } from "react-router";
import Logo from "@/assets/identity/minetask.png";
import DarkLogo from "@/assets/identity/minetask-dark.png";

function AppLogo() {
  const imgStyle = "size-7 max-md:size-9";
  return (
    <Link to={"/"} className="flex items-center justify-center gap-1">
      <img
        className={`${imgStyle} dark:hidden`}
        src={Logo}
        alt="Minetask logo"
      />
      <img
        className={`${imgStyle} hidden dark:block`}
        src={DarkLogo}
        alt="Minetask logo"
      />

      <p className="text-2xl font-medium max-md:hidden dark:text-white">
        Mine
        <span className="font-bold">task</span>
      </p>
    </Link>
  );
}

export default AppLogo;
