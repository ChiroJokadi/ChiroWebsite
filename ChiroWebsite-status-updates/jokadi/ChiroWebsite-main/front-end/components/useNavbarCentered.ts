import { useEffect, useState } from "react";

export const useNavbarCentered = () => {
  const [centered, setCentered] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setCentered(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return centered;
};
