import { User } from "@types";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useNavbarTransparency } from "./useNavbarTransparency";

interface HeaderProps {
  positionOnHero?: boolean;
  visible?: boolean;
  sticky?: boolean;
  alwaysOpaque?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  visible = true,
  alwaysOpaque = false,
}) => {
  if (!visible) return null;
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    if (loggedInUserString !== null) {
      setLoggedInUser(JSON.parse(loggedInUserString));
    }
  }, []);

  const handleClick = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  // allow callers to force an opaque header (useful for pages that shouldn't use the transparent hero header)
  const transparent = alwaysOpaque ? false : useNavbarTransparency();

  const navbarClass = `
    ${
      transparent
        ? "bg-transparent border-transparent"
        : "bg-white border-gray-200"
    }
    fixed left-0 top-0 w-full z-50 transition-all duration-500
  `;

  // Dynamic text color, size, and logo size depending on transparency
  const linkClass =
    (transparent
      ? "text-white font-extrabold text-xl md:text-2xl hover:text-yellow-200"
      : "text-gray-800 font-medium text-base md:text-lg hover:text-yellow-200") +
    " transition-all duration-500";
  const logoFilter = transparent ? "brightness-0 invert" : "";
  const logoSizeClass = transparent ? "h-28 md:h-32" : "h-20";
  const logoMaxHeight = transparent ? "112px" : "80px";

  return (
    <nav
      className={
        navbarClass +
        " h-24 border-b shadow-sm flex items-center justify-center"
      }
    >
      <div
        className="w-full max-w-5xl grid grid-cols-5 items-center justify-items-center px-4 mx-auto"
        style={{ gridTemplateColumns: "1fr 1fr auto 1fr 1fr" }}
      >
        <Link href="/afdelingen" className={linkClass}>
          Afdelingen
        </Link>
        <Link href="/leiding" className={linkClass}>
          De leiding
        </Link>
        <Link href="/">
          <img
            src="/images/chiro-jokadi.png"
            alt="Chiro Jokadi Logo"
            className={
              logoSizeClass +
              " w-auto transition-all duration-500 " +
              logoFilter
            }
            style={{ maxHeight: logoMaxHeight }}
          />
        </Link>
        <Link href="/documenten" className={linkClass}>
          documenten
        </Link>
        <Link href="/contact" className={linkClass}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
