import { useEffect, useState } from "react";

export const useNavbarTransparency = () => {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTransparent(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return transparent;
};
