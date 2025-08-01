import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useClickOutside(ref, handler) {
  const location = useLocation();
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);

  useEffect(() => {
    handler();
  }, [location.pathname]);
}
