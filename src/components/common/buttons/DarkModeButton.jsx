import useLocalStorage from "@/hooks/useLocalStorage";
import { BsMoonStars } from "react-icons/bs";
import ButtonIcon from "../../ui/buttons/ButtonIcon";

function DarkModeButton() {
  const [isDark, setIsDark] = useLocalStorage("darkMode", false);

  const handleToogleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    document.body.classList.toggle("dark", newValue);
  };

  return (
    <ButtonIcon
      tooltip={isDark ? "Enable Dark Mode" : "Disable Dark Mode"}
      onClick={handleToogleDarkMode}
      icon={() => <BsMoonStars className="text-icon" size={20} />}
    />
  );
}

export default DarkModeButton;
