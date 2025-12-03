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

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <nav
      className={
        navbarClass +
        " h-24 border-b shadow-sm flex items-center justify-center"
      }
    >
      {/* Desktop navigation (grid) */}
      <div className="hidden md:block w-full max-w-5xl mx-auto">
        <div
          className="grid grid-cols-5 items-center justify-items-center px-4"
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
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />
          <div className="flex justify-center">
            <Link href="/">
              <img
                src="/images/chiro-jokadi.png"
                alt="Chiro Jokadi Logo"
                className={logoSizeClass + " w-auto transition-all duration-500 " + logoFilter}
                style={{ maxHeight: logoMaxHeight }}
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <button
              onClick={toggleMobile}
              aria-label="Toggle menu"
              className={(transparent ? "text-white" : "text-gray-800") + " p-2 rounded-md focus:outline-none"}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 bg-white z-40 shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3 items-center text-center">
            <Link href="/afdelingen" className="text-gray-800 font-medium text-lg w-full block">
              Afdelingen
            </Link>
            <Link href="/leiding" className="text-gray-800 font-medium text-lg w-full block">
              De leiding
            </Link>
            <Link href="/documenten" className="text-gray-800 font-medium text-lg w-full block">
              Documenten
            </Link>
            <Link href="/contact" className="text-gray-800 font-medium text-lg w-full block">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
