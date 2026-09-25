import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Afdeling: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Afdelingen - Chiro Jokadi</title>
        <meta
          name="description"
          content="Overzicht van de afdelingen van Chiro Jokadi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header alwaysOpaque />

      <main className="mx-auto w-full max-w-6xl px-4 md:px-8 pt-28">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-extrabold">Onze afdelingen</h1>
          <p className="text-lg text-gray-700">
            Benieuwd naar de activiteiten? Hieronder vind je een kort overzicht
            van de zes leden afdelingen binnen Chiro Jokadi en met welke
            activiteiten ze hun bezig houden.
          </p>

          <section className="rounded-2xl shadow p-6 bg-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Kabouters
                </h2>
                <p className="text-base text-gray-800 pl-2">
                  Kabouters zijn onze jongste leden. We spelen veel eenvoudige
                  spelletjes, knutselen en leren elkaar kennen in een veilige,
                  speelse omgeving.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/kabouters.jpg"
                  alt="Kabouters"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl shadow p-6 bg-green-100">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Speelclub
                </h2>
                <p className="text-base text-gray-800 pl-2">
                  De Speelclub bouwt verder op spel en beweging. Er is meer
                  ruimte voor groepsspelen en kleine avonturen in de buurt.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/speelclub.jpg"
                  alt="Speelclub"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl shadow p-6 bg-green-800 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Rakkers
                </h2>
                <p className="text-base pl-2">
                  Rakkers doen uitdagendere buitenactiviteiten en teamspelen. Ze
                  leren samenwerken en ontdekken meer technische spelvormen.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/rakkers.jpg"
                  alt="Rakkers"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl shadow p-6 bg-red-500 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Toppers
                </h2>
                <p className="text-base pl-2">
                  Toppers zijn vol energie en houden van actie. Hier vind je
                  veel sport, avontuurlijke spelen en voorbereidingen voor
                  grotere activiteiten.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/toppers.jpg"
                  alt="Toppers"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl shadow p-6 bg-blue-900 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Kerels
                </h2>
                <p className="text-base pl-2">
                  Kerels doen sociale en uitdagende activiteiten, vaak met focus
                  op techniek, spelstrategie en groepsdynamiek.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/kerels.jpg"
                  alt="Kerels"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl shadow p-6 bg-pink-100">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-white pl-2"
                  style={{
                    textShadow:
                      "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  Aspi's
                </h2>
                <p className="text-base text-gray-800 pl-2">
                  Aspi's (aspiranten) zijn onze oudste jeugdleden die zich
                  voorbereiden op leidingtaken. Ze organiseren, begeleiden en
                  vormen een brug naar de leiding.
                </p>
              </div>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/afdelingen/aspis.jpg"
                  alt="Aspi's"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </section>
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

export default Afdeling;
