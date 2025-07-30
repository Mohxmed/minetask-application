import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div className="h-14 w-full gap-2 px-6 flex-col flex justify-center items-center border-t border-t-gray-200 dark:border-none">
      <div className="w-full container flex items-center justify-between gap-3 text-slate-400">
        <p className="text-xs">
          A <b>Mhmd Amr's</b> Production @ 2025
        </p>
        <div className="flex items-center gap-4">
          <a target="_blank" href="https://www.linkedin.com/in/mohxmeduni/">
            <FaLinkedinIn />
          </a>
          <a target="_blank" href="https://wa.me/201012345678">
            <FaWhatsapp />
          </a>
          <a target="_blank" href="http://github.com/mohxmed/">
            <FaGithub />
          </a>
          <a target="_blank" href="https://www.facebook.com/Mohxmeduni">
            <FaFacebook />
          </a>
          <a target="_blank" href="https://www.instagram.com/mohxmeduni">
            <FaInstagram />
          </a>
        </div>
        <p className="hidden lg:block">
          <b> Minetask</b> Application
        </p>
      </div>
    </div>
  );
}

export default Footer;
