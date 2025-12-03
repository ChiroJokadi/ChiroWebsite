import Header from "./header";
import { useNavbarCentered } from "./useNavbarCentered";

interface HeroWithDynamicNavbarProps {
  centered: boolean;
}

const HeroWithDynamicNavbar: React.FC<HeroWithDynamicNavbarProps> = ({
  centered,
}) => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/kamp2025.jpg"
        alt="Kamp 2025"
        className="object-cover w-full h-full"
        style={{ objectPosition: "center" }}
      />
      {/* Witte transparante overlay met lagere z-index */}
      <div
        className="absolute inset-0 bg-white bg-opacity-30"
        style={{ zIndex: 10 }}
      />
      {/* Hero content gecentreerd in het midden, alleen tonen als centered */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-700 ${
          centered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ justifyContent: "flex-start", paddingTop: "14vh" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-8 text-center">
          Welkom bij Chiro Jokadi
        </h1>
        <img
          src="/images/chiro-jokadi.png"
          alt="Chiro Jokadi Logo Groot"
          className="h-40 md:h-56 w-auto mb-8 drop-shadow-lg"
          style={{ maxHeight: "220px" }}
        />
        <div className="flex flex-wrap gap-8 justify-center">
          <a
            href="#afdelingen"
            className="text-black text-2xl md:text-3xl font-extrabold drop-shadow-lg bg-gray-200 bg-opacity-70 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-all"
          >
            Afdelingen
          </a>
          <a
            href="#leiding"
            className="text-black text-2xl md:text-3xl font-extrabold drop-shadow-lg bg-gray-200 bg-opacity-70 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-all"
          >
            De leiding
          </a>
          <a
            href="#documenten"
            className="text-black text-2xl md:text-3xl font-extrabold drop-shadow-lg bg-gray-200 bg-opacity-70 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-all"
          >
            Belangrijke documenten
          </a>
          <a
            href="#contact"
            className="text-black text-2xl md:text-3xl font-extrabold drop-shadow-lg bg-gray-200 bg-opacity-70 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-all"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Navbar alleen tonen als niet centered */}
      {/* De navbar wordt nu buiten deze component getoond via StickyNavbar */}
    </div>
  );
};

export default HeroWithDynamicNavbar;
