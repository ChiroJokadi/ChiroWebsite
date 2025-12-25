import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  // Use NEXT_PUBLIC_GOOGLE_MAPS_API_KEY for client-side embed
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Query/place to show on the map. Update to your exact address or place id if available.
  const placeQuery = encodeURIComponent("Chiro Jokadi");

  const embedSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${placeQuery}`
    : `https://maps.google.com/maps?q=${placeQuery}&z=15&output=embed`;

  return (
    <>
      <Head>
        <title>Contact - Chiro Jokadi</title>
        <meta name="description" content="Contact & locatie van Chiro Jokadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header alwaysOpaque />

      <main className="mx-auto w-full max-w-6xl px-4 md:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold mb-6">Contact & Locatie</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-2xl overflow-hidden shadow bg-gray-100">
              {/* If an API key is provided the Maps Embed API is used, otherwise we fall back to a regular search iframe/link */}
              <div className="p-2">
                {!apiKey && <div className="mb-3 text-sm text-gray-600"></div>}
                <iframe
                  title="Kaart - Chiro Jokadi"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={embedSrc}
                  className="border-0"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            {/* Card 1: Hoofdleider contact (naam + gsm) */}
            <div className="rounded-2xl shadow p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Hoofdleider — Contact</h3>
              <div className="text-sm text-gray-500">Naam</div>
              <div className="font-semibold mb-3">Robbe Schiffeleers</div>

              <div className="text-sm text-gray-500">Telefoon</div>
              <a
                href="tel:+32476776761"
                className="text-blue-600 hover:underline"
              >
                +32 476 77 67 61
              </a>
            </div>

            {/* Card 2: Social media */}
            <div className="rounded-2xl shadow p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">Volg ons</h3>
              <p className="text-sm text-gray-600 mb-3">
                Volg Chiro Jokadi op social media voor nieuws en updates.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/chiro.jokadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <img
                    src="/images/Instagram_logo.png"
                    alt="Instagram"
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-medium">@chirojokadi</span>
                </a>

                <a
                  href="https://facebook.com/chirojokadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:underline"
                >
                  <img
                    src="/images/Facebook_Logo.png"
                    alt="facebook"
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-medium">Chiro Jokadi</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps = async (context: { locale: any }) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};

export default Contact;
