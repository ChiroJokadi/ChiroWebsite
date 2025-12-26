import Head from "next/head";
import Image from "next/image";
import HeroWithDynamicNavbar from "@components/HeroWithDynamicNavbar";
import StickyNavbar from "@components/StickyNavbar";
import Footer from "@components/Footer";
import { useNavbarCentered } from "@components/useNavbarCentered";
import styles from "@styles/home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const centered = useNavbarCentered();

  return (
    <>
      <Head>
        <title>chiro jokadi</title>
        <meta name="description" content="Exam app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWithDynamicNavbar centered={centered} />
      <StickyNavbar centered={centered} />
      {/* StickyNavbar moet direct na de hero, maar vóór de main content, zodat hij bovenaan de pagina blijft */}
      <div style={{ height: 0, margin: 0, padding: 0 }} />
      <main className="mx-auto w-full max-w-6xl px-2 md:px-8 mt-12">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full min-h-[340px]">
          <div className="md:basis-2/3 w-full flex flex-col justify-start items-start bg-yellow-100 bg-opacity-80 rounded-2xl shadow-lg p-8 min-h-[340px] h-full">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-left drop-shadow-lg">
              Hallo hallo... Chiro!
            </h1>
            <p className="text-lg md:text-xl text-black text-left">
              Chiro Jokadi is een van de vele jeugdbewegingen in Alken. Maar
              maakt dit ons daarom minder speciaal? Het antwoord is natuurlijk
              nee! Bij ons is er vertier voor zowel jong als oud. Of je nu
              kabouter of aspi bent, Chiro Jokadi is "the place to be" als het
              om jeugd in Alken gaat.
            </p>
          </div>
          <div className="md:basis-1/3 w-full flex flex-col items-stretch justify-center min-h-[340px] h-full">
            <img
              src="/images/kampfoto.jpg"
              alt="Chiro Jokadi sfeerfoto"
              className="rounded-xl object-cover w-full h-full bg-transparent"
              style={{
                minHeight: "340px",
                maxHeight: "340px",
                aspectRatio: "1/1",
              }}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-8 w-full min-h-[340px]">
          <div className="md:basis-1/3 w-full flex flex-col items-stretch justify-center min-h-[340px] h-full">
            <img
              src="/images/home-image1.jpg"
              alt="Chiro Jokadi activiteit"
              className="rounded-xl object-cover w-full h-full bg-transparent"
              style={{
                minHeight: "340px",
                maxHeight: "340px",
                aspectRatio: "1/1",
              }}
            />
          </div>
          <div className="md:basis-2/3 w-full flex flex-col justify-start items-start bg-yellow-100 bg-opacity-80 rounded-2xl shadow-lg p-8 min-h-[340px] h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-left drop-shadow-lg p-0 m-0">
              Wat doen we?
            </h2>
            <p className="text-lg md:text-xl text-black text-left">
              Elke zaterdag staan onze enthousiaste leiding klaar om samen met
              de leden te ravotten, spelen en plezier te maken. Elk jaar
              organiseren we ook een spetterend kamp en tal van andere
              activiteiten!
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-8 w-full min-h-[340px]">
          <div className="md:basis-2/3 w-full flex flex-col justify-start items-start bg-yellow-100 bg-opacity-80 rounded-2xl shadow-lg p-8 min-h-[340px] h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-left drop-shadow-lg p-0 m-0">
              Waar?
            </h2>
            <p className="text-lg md:text-xl text-black text-left">
              Je kan ons vinden in de Chiro lokalen op het adres:
            </p>
            <p className="text-lg md:text-xl text-black text-left">
              Rijdreef 28, 3570 Alken
            </p>
            <br></br>
            <p className="text-lg md:text-xl text-black text-left">
              Voor meer informatie over wanneer onze chiro plaatsvind kan je
              gebruik maken van onze prikbordbrief!
            </p>
          </div>
          <div className="md:basis-1/3 w-full flex flex-col items-stretch justify-center min-h-[340px] h-full">
            <img
              src="/images/lokaal.jpg"
              alt="Chiro Jokadi activiteit"
              className="rounded-xl object-cover w-full h-full bg-transparent"
              style={{
                minHeight: "340px",
                maxHeight: "340px",
                aspectRatio: "1/1",
              }}
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-8 w-full min-h-[340px]">
          <div className="md:basis-1/3 w-full flex flex-col items-stretch justify-center min-h-[340px] h-full">
            <img
              src="/images/OLF.jpg"
              alt="Chiro Jokadi activiteit"
              className="rounded-xl object-cover w-full h-full bg-transparent"
              style={{
                minHeight: "340px",
                maxHeight: "340px",
                aspectRatio: "1/1",
              }}
            />
          </div>
          <div className="md:basis-2/3 w-full flex flex-col justify-start items-start bg-yellow-100 bg-opacity-80 rounded-2xl shadow-lg p-8 min-h-[340px] h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-left drop-shadow-lg p-0 m-0">
              Andere Evenementen?
            </h2>
            <p className="text-lg md:text-xl text-black text-left">
              Pastadag: meer informatie volgt nog.
            </p>
            <br />
            <p className="text-lg md:text-xl text-black text-left">
              Boktopus: meer informatie volgt nog.
            </p>
            <br></br>
            <p className="text-lg md:text-xl text-black text-left">
              Openluchtfuif Alken: voor meer informatie kan je terecht op{" "}
              <a
                href="https://www.openluchtfuif.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-700 hover:text-blue-900"
              >
                https://www.openluchtfuif.com/
              </a>
            </p>
          </div>
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

export default Home;
