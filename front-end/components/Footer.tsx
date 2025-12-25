import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black py-8 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-8 text-center">
        {/* Lokaalgegevens */}
        <div className="flex flex-col items-center justify-center md:w-1/3 h-full">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/chiro-jokadi.png"
              alt="Chiro Jokadi logo"
              width={70}
              height={70}
              className="rounded bg-white"
            />
            <div>
              <span className="uppercase text-xs text-gray-500 tracking-widest font-bold">
                Lokaalgegevens
              </span>
            </div>
          </div>
          <span className="text-sm">Rijdreef 28 3570 Alken</span>
          <span className="text-sm mt-1">
            Vind ons ook op
            <a
              href="https://www.facebook.com/chirojokadialken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle ml-1"
            >
              <Image
                src="/images/Facebook_logo.png"
                alt="Facebook"
                width={24}
                height={24}
                className="inline"
              />
            </a>
            <a
              href="https://www.instagram.com/chiro.jokadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle ml-1"
            >
              <Image
                src="/images/instagram_logo.png"
                alt="Instagram"
                width={24}
                height={24}
                className="inline"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
