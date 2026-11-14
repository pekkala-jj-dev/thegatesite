import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Aina kun reitti (pathname) muuttuu, hyppää sivun alkuun
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}