import { NavLink } from "react-router";

export default function NavButton({ title, icon, to, isMinimized }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` w-full flex items-center gap-4 px-4 py-2 rounded-sm hover:bg-slate-100  text-sm transition-colors duration-150
  ${isActive ? "text-slate-900 bg-slate-100 font-semibold" : "text-slate-500"}`
      }
    >
      <span className="min-w-[15px] w-max">{icon()}</span>
      <span className={`"max-md:hidden" ${isMinimized ? "hidden" : ""}`}>
        {title}
      </span>
    </NavLink>
  );
}
