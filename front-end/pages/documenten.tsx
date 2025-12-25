import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "@components/header";
import Footer from "@components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Documenten: React.FC = () => {
  const { t } = useTranslation();

  const staticDocs = [
    { label: "Medisch Fiche (PDF)", path: "/documents/medisch-fiche.pdf" },
  ];

  return (
    <>
      <Head>
        <title>Documenten - Chiro Jokadi</title>
        <meta
          name="description"
          content="Belangrijke documenten en prikbord voor Chiro Jokadi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header alwaysOpaque />

      <main className="mx-auto w-full max-w-5xl px-4 md:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold mb-6">Documenten</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="rounded-2xl shadow overflow-hidden bg-white">
              <img
                src="/images/prikbord.jpeg"
                alt="Prikbord"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">prikbordbrief</p>
          </div>

          <div className="rounded-2xl shadow p-6 bg-white">
            <h2 className="text-2xl font-bold mb-3">Belangrijke documenten</h2>
            <p className="text-gray-700 mb-3">
              Ouders kunnen hier belangrijke documenten downloaden:
            </p>
            <ul className="space-y-2">
              {staticDocs.map((d) => (
                <li key={d.path}>
                  <a
                    href={d.path}
                    className="text-blue-600 hover:underline"
                    download
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
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

export default Documenten;
