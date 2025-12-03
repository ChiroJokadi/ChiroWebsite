import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type LeaderProps = {
  name: string;
  role?: string;
  imageSrc?: string;
  details?: string[];
};

<div className="flex items-start gap-6 py-4 border-b last:border-b-0">
  <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
    <img src="" alt="naam" className="w-full h-full object-cover" />
  </div>

  <div className="flex-1">
    <div className="flex items-center justify-between">
      <div className="font-semibold text-lg">naam</div>
      <div className="text-sm italic text-gray-600">text</div>
    </div>
  </div>
</div>;

const Leiding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>De Leiding - Chiro Jokadi</title>
        <meta name="description" content="Leiding van Chiro Jokadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header alwaysOpaque />

      <main className="mx-auto w-full max-w-6xl px-4 md:px-8 pt-28 pb-12">
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="w-full bg-yellow-100 bg-opacity-80 rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Leiding
            </h1>
            <p className="text-lg md:text-xl text-black mb-6">
              Hier vind je een overzicht van onze enthousiaste leiding. We
              verzorgen de Chiro-spelletjes, activiteiten en het kamp.
            </p>

            <div className="space-y-6">
              {/* Kabouters:*/}
              <section className="rounded-2xl shadow p-6 bg-white text-black">
                <h3 className="text-2xl font-bold mb-4">Kabouters</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Speelclub */}
              <section className="rounded-2xl shadow p-6 bg-green-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Speelclub</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rakkers */}
              <section className="rounded-2xl shadow p-6 bg-red-500 text-white">
                <h3 className="text-2xl font-bold mb-4">Rakkers</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Toppers */}
              <section className="rounded-2xl shadow p-6 bg-blue-900 text-white">
                <h3 className="text-2xl font-bold mb-4">Toppers</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kerels */}
              <section className="rounded-2xl shadow p-6 bg-pink-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Kerels</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aspi's */}
              <section className="rounded-2xl shadow p-6 bg-indigo-700 text-white">
                <h3 className="text-2xl font-bold mb-4">Aspi's</h3>
                <div className="flex flex-col">
                  <div className="flex items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                      <img
                        src=""
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-lg">naam</div>
                        <div className="text-sm italic text-gray-600">text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale?: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "nl", ["common"])),
    },
  };
};

export default Leiding;
