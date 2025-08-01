import { NavLink } from "react-router";

function HeaderLink({ text, link, icon }) {
  return (
    <>
      <span className="text-gray-300 lg:hidden">{icon}</span>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `block w-full px-2 py-1 transition-all duration-300 ${
            isActive
              ? "text-primary"
              : "text-gray-600 dark:text-gray-100 dark:hover:text-white/70  hover:opacity-80"
          }`
        }
      >
        {text}
      </NavLink>
    </>
  );
}

export default HeaderLink;
