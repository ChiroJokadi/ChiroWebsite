import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

<div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 py-4 border-b last:border-b-0">
  <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
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

      <Header alwaysOpaque={true} />

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
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/bappie.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Daan Baptist
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 6de jaar leider (eerder: speelclub, kerels, rakkers, speelclub, Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Biologie
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: pasta carbonara
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Praagse lente
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: blue Mountain State
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: new kids nitro
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is dit jaar afstuderen.
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/conan.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Conan Nuyts
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 5de jaar leider (eerder: topper, speelclub, aspi’s, Speelclub)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: interieurarchitectuur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: spaghetti
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Londen is burning
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: the usual suspect
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: mijn eigen architectuur bureau
                          hebben
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Bassie.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Arnout Bogaers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Burgerlijk ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: biefstuk
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Castle Raven Loft
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Breaking Bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Inglourious Basterds
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: een openluchtfuif met meer dan 10
                          000 mensen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </section>

              {/* Speelclub */}
              <section className="rounded-2xl shadow p-6 bg-green-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Speelclub</h3>
                <div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/croes.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Maxime Croes
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 4de jaar leider (eerder: rakkers, kerels, Aspi’s)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: industrieel ingenieur bouwkunde
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: sushi
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriet Chirospel: spel van Eric
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: peaky blinders
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: the wolf of Wall Street
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: afstuderen op modeltraject met
                          cum laude
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Karel.jpg"
                        alt="naam"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Karel Evers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Speelclub)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Industrieel Ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Pad Thai
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: mietjesbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: The Blacklist
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Dictator
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is om nooit herexamens te hebben
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/robbe.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Robbe Schiffeleers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 6de jaar leider (eerder: Rakkers, Kerels, Speelclub, Toppers, Kerels)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Revalidatiewetenschappen & kinesitherapie
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Een goed stukje vlees van slagerij Jeuris/piton 😋
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Levend Clash Royale (een variant op Levend dammen)
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Avatar The Last Airbender
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Odyssey
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is om mijn laatste jaar als student vlekkeloos af te leggen zonder herexamens.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rakkers */}
              <section className="rounded-2xl shadow p-6 bg-green-700 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Rakkers</h3>
                <div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/lindekens.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Maxim Lindekens
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 6de jaar leider (eerder: Speelclub,Toppers, Aspi’s, Kerels, Aspi’s)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Kinesitherapie & revalidatiewetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Spare ribs
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Honkbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Breaking Bad & Dexter
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Inception & Interstellar
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: Kampioen worden met FC Jokadi
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Jim.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Jim Motmans
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder: Speelclub, Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Sociaal werk
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: pizza bbq chicken
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: 2 is te weinig, 3 is te vee
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Loki
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Pirates of the Caribbean
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: beroemde artiest worden
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Martijn.JPG"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Martijn Bogaers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider(eerder: Toppers, Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: industrieel ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: kebab
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: OG vlaggenroof
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: prison break
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Fight Club
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is geen herexamens
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Toppers */}
              <section className="rounded-2xl shadow p-6 bg-red-500 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Toppers</h3>
                <div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/tuur.jpg"
                        alt="Tuur Vandormael"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Tuur Vandormael
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn eerste jaar leider
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Retailmanagement aan de PXL in Hasselt
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Sloppy Joe
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: honkbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Suits
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Odyssey
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is al mijn doelen bereiken.
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/lafosse.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Jasper Lafosse
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Kabouters)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Burgerlijk Ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: pasta carbonara
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: het spel van Erik
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Breaking Bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Dictator
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: geen herexamens hebben
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/gust.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Gust Penders
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Kerels)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Chemie
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Frikandellen op de Chiro
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: rugbyvoetbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: All quiet on the western front
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is veel op reis kunnen gaan.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </section>

              {/* Kerels */}
              <section className="rounded-2xl shadow p-6 bg-blue-900 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Kerels</h3>
                <div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/stan.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Stan Vanaken
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Speelclub)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Groenmanagement
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Mix grill
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Londen is burning
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Dictator
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: een luchtballonvaart doen
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Iliaens.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Senne Iliaens
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 2de jaar leider (eerder: Rakkers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Handelswetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Tagliata
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: honkbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Prison break
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete Film: Taken
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is om ooit een triatlon succesvol te
                          voltooien.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/patat.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Arthur Cleeren
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 6e jaar leider (eerder: Toppers, rakkers, kabouters, aspi’s, Kabouters)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Banaba Business & data analyse
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: pasta carbonara
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: honkbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Peaky Blinders
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: 2 FAST 2 furious
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: de beker pakken met FC Jokadi
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aspi's */}
              <section className="rounded-2xl shadow p-6 bg-pink-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Aspi's</h3>
                <div className="flex flex-col">
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Kobe.JPG"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Kobe Meuwis
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder: Rakkers)
                        </div>
                        <div className="font-semibold text-lg">
                          studies: politieke wetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: frieten met stoofvlees
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: (spin) Castle siege
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Fast and Furious Tokyo Drift
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is geen herexamens.
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Driesen.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Maxim Driesen
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 4de jaar leider (eerder: Rakkers en Kabouters, Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Handelswetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: taco's
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Castle ravenloft
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Blue mountain state
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Top gun
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: Een wereldreis maken
                        </div>
                      </div>
                    </div>
                  </div>
<div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Vincent.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Vincent Loix
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder Toppers en Rakkers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: industrieel ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Pizza
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: honkbal
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: La casa de papel
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Inception
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: kampioen worden met FC Jokadi
                        </div>
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
