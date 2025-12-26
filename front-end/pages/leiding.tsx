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
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/giel.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Giel Houben
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 5de jaar leider (eerder: Rakkers en
                          Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: lichamelijke opvoeding en
                          bewegingswetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: pizza
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Clashtel Royale Loft
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Peaky blinders
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Cars
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: De beker winnen met FC Jokadi
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
                          Ik ben mijn 5e jaar leider (eerder: Toppers, rakkers,
                          kabouters, aspi’s)
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

                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/natan.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Natan Houbrechts
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder: speelclub en
                          kerels)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Cinematografie, Royal Instituut of cinema,
                          theater and sound - RITCS
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: macaroni
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: dice wars
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: gummo
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is super duper ultra veel geld hebben
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Tiebe.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Tiebe Penxten
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder: Speelclub,
                          Rakkers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Geneeskunde
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Pizza
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Spel van Erik, Touchdown, Short
                          Track
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Mission Impossible
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Mission Impossible
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is een kampplaats met vijver
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
                          Ik ben mijn eerste jaar leider
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
              </section>

              {/* Speelclub */}
              <section className="rounded-2xl shadow p-6 bg-green-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Speelclub</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/yoshua.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Yoshua Appeltans
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 7e jaar leider
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Educatieve Master
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Dijon saté van Bidon
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: 123 boobytrap
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Alice in Borderland
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Oppenheimer
                        </div>
                        <div className="font-semibold text-lg">
                          Grote droom: De chiro met veel trots achterlaten aan
                          de jong mannen
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
                          Ik ben mijn 4de jaar leider ( eerder: topper,
                          speelclub, aspi’s )
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
                        src="/images/leiding/lucas.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Lucas Vandercappellen
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben 3de jaar leider (eerder: kerels)
                        </div>
                        <div className="font-semibold text-lg">
                          Studie: Autotechnologie
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: balletjes in tomatensaus
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Londen is burning
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: wolf of wall street
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: heel veel chicke auto’s hebben
                        </div>
                      </div>
                    </div>
                  </div>

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
                          Ik ben mijn eerste jaar leider
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Marketing en communicatie support
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Spaghetti
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
                        src="/images/leiding/Karel.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Karel Evers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn eerste jaar leider
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
              </section>

              {/* Rakkers */}
              <section className="rounded-2xl shadow p-6 bg-green-700 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Rakkers</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/schoen.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Daan Schoenaers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 5de jaar leider (eerder:
                          rakkers,speelclub,toppers,aspi's)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Toegepaste Informatica
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Friet met stoofvlees
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Ultimate Frisbee
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Shutter Island
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is veel geld verdienen.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/simon.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Simon Thiry
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 3de jaar leider (eerder: toppers en
                          kabouters)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: geneeskunde
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Pizza
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete Chirospel: Londen is burning
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Dexter
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: zillion
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is: een goede dokter te zijn
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
                          Ik ben mijn 2de jaar leider (eerder Toppers)
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
                          Favoriete film: The Shawshank Redemption
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: kampioen worden met FC Jokadi
                        </div>
                      </div>
                    </div>
                  </div>

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
                          Ik ben in mijn tweede jaar leiding
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
                          Ik ben mijn eerste jaar leider
                        </div>
                        <div className="font-semibold text-lg">
                          Studie: Economie (middelbaar)
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
              </section>

              {/* Toppers */}
              <section className="rounded-2xl shadow p-6 bg-red-500 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Toppers</h3>
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
                          Ik ben mijn 5de jaar leider (eerder: speelclub,
                          kerels, rakkers, speelclub)
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
                          Ik ben mijn 3de jaar leider (eerder: Rakkers en
                          Kabouters)
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
                          Ik ben mijn 2de jaar leider (eerder: Speelclub)
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
                          Ik ben mijn 2 jaar leider(eerder: Toppers)
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
                          Ik ben mijn eerste jaar leider
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
              </section>

              {/* Kerels */}
              <section className="rounded-2xl shadow p-6 bg-blue-900 text-white">
                <h3 className="text-2xl text-white font-bold mb-4">Kerels</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Bidon.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Laurens Jeuris
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 5de jaar leider (eerder: speelclub,
                          kabouters, aspi’s)
                        </div>
                        <div className="font-semibold text-lg">
                          Werk: slagerij Jeuris
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Het eten van de keuken op kamp
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Dice wars
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Yellowstone
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Hacksaw Ridge
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: Ooit mijn eigen bedrijf te hebben
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
                          Ik ben 5de jaar leider (eerder: rakkers, kerels,
                          speelclub, toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Revalidatiewetenschappen & Kinesitherapie
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: een goed stukje vlees van slagerij
                          Jeuris/piton 😋
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete Chirospel: Clashtel Royale Loft (een variant
                          van Castle Raven Loft)
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Avatar The Last Airbender
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: zombieland
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is om volgend jaar nog eens
                          hoofdleider te zijn en om 2 jaar op rij geen
                          herexamens te hebben
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Jules.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Jules Penxten
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben 2de jaar leider (eerder Toppers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studie: Handelswetenschappen
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
                          Favoriete film: Interstellar
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: De wereld rondreizen
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Carlens.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Senne Carlens
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben 2de jaar leider (eerder: rakkers)
                        </div>
                        <div className="font-semibold text-lg">
                          Studie: handelsingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: steak
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Londen is burning
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: breaking bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: american sniper
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom: de wereld rondreizen
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
                          Ik ben mijn eerste jaar leider
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
              </section>

              {/* Aspi's */}
              <section className="rounded-2xl shadow p-6 bg-pink-100 text-black">
                <h3 className="text-2xl font-bold mb-4">Aspi's</h3>
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-start gap-6 py-4 border-b last:border-b-0">
                    <div className="w-40 h-40 md:w-40 md:h-40 flex-shrink-0 rounded overflow-hidden bg-gray-100 mx-auto md:mx-0">
                      <img
                        src="/images/leiding/Vic.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Vic Penders
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben mijn 5e jaar leider (eerder: Kabouters, Rakkers, Aspi's, Speelclub)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: Industrieel ingenieur
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Frieten van de frituur
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Oude vlaggenroof
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Breaking Bad
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: The Butterfly Effect
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is dit jaar in vervulling gegaan (we hebben een nieuwe chirowebsite :) )
                        </div>
                      </div>
                    </div>
                  </div>

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
                          Ik ben mijn 5de jaar leider (eerder:
                          Speelclub,Toppers, Aspi's, Kerels)
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
                        src="/images/leiding/Rob.jpg"
                        alt="naam"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col items-start gap-2">
                        <div className="font-semibold text-lg">
                          Naam: Rob Ramaekers
                        </div>
                        <div className="font-semibold text-lg">
                          Ik ben 4de jaar leider (eerder Rakkers, Toppers,
                          Rakkers
                        </div>
                        <div className="font-semibold text-lg">
                          Studie: Handelswetenschappen
                        </div>
                        <div className="font-semibold text-lg">
                          Lievelingseten: Steak met peperroomsaus
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete chirospel: Spel van Erik
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete serie: Game of Thrones
                        </div>
                        <div className="font-semibold text-lg">
                          Favoriete film: Gladiator
                        </div>
                        <div className="font-semibold text-lg">
                          Mijn grote droom is terug meer dan 100 leden hebben
                        </div>
                      </div>
                    </div>
                  </div>

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
                          Ik ben mijn 3de jaar leider van de aspi’s (eerder
                          rakkers en kerels)
                        </div>
                        <div className="font-semibold text-lg">
                          Studies: industrieel ingenieur
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
