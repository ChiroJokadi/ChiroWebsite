import { useNavbarCentered } from "@components/useNavbarCentered";
import Header from "@components/header";

interface StickyNavbarProps {
  centered: boolean;
}

const StickyNavbar: React.FC<StickyNavbarProps> = ({ centered }) => {
  return (
    <div
      className={`transition-opacity duration-700 fixed left-0 top-0 w-full z-50 ${
        centered
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <Header positionOnHero={false} visible={true} />
    </div>
  );
};

export default StickyNavbar;
