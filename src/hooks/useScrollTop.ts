
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // можно использовать "smooth" для плавной прокрутки
    });
  }, [pathname]);
}
