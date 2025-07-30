import {
  GoHome,
  GoContainer,
  GoSmiley,
  GoQuestion,
  GoRocket,
} from "react-icons/go";

const headerContent = {
  menuTitle: "Quick Move Menu",
  // Icons for mobile menu
  navLinks: [
    { text: "Home", link: "/", icon: GoHome },
    { text: "App", link: "/app", icon: GoContainer },
    { text: "About", link: "/about", icon: GoSmiley },
    { text: "FAQ", link: "/faq", icon: GoQuestion },
    { text: "Contribute on GitHub", link: "/contribute", icon: GoRocket },
  ],
  buttons: {
    signup: "Create Account",
    login: "Login",
  },
};

export default headerContent;
