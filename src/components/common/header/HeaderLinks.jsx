import HeaderLink from "./HeaderLink";
import content from "@content/landing/headerContent";

function NavLinks() {
  const navLinks = content.navLinks;
  return (
    <>
      {navLinks.map(({ text, link, icon: Icon }) => {
        return (
          <li key={link} className="relative flex items-center gap-3">
            <HeaderLink text={text} link={link} icon={<Icon size={25} />} />
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
