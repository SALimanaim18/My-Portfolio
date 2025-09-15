// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // forcer le scroll tout en haut à chaque changement de page
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // évite un scroll doux qui peut bugger
      });
    }, 0);
  }, [pathname]);

  return null;
}
