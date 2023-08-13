// import { Main } from "../components/Main";
import Head from "next/head";
import Image from "next/image";
// import { Navbar } from "../components/Navbar";
import type { NextPage, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header";
import { Business } from "../components/Business";
import { Halal } from "../components/Halal";
import { Navbar } from "../components/Navbar";
import { Trading } from "../components/Trading";
import { Contact } from "../components/Contact";    
import { Footer } from "../components/Footer";
import {FiBriefcase} from 'react-icons/fi'

export default function Home() {
  const t = useTranslations()

  const businesses = [
    {
      name: t("businessBlock.europe"),
      description:  t("businessBlock.europeInfo") , 
      icon: <FiBriefcase />,
    },
    {
      name:  t("businessBlock.consulting"),
      description:  t("businessBlock.consultingInfo"),
      icon: <FiBriefcase />,
    },
    {
      name:  t("businessBlock.company"),
      description:  t("businessBlock.companyInfo"),
      icon: <FiBriefcase />,
    },
  ];

  return (
    <div>
      <div></div>
      <Head>
        <title>Botir Uzbekistan </title>
        <meta
          name="Botir Uzbekistan"
          content="Botir Uzbekistan rasmiy web sayti" 
        />
        <meta
          name="google-site-verification"
          content="Pi7kisuljjOmFbBlvmk-S8DASJP-WbIGUQ1ERs9XwS4"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Navbar/>
      <Header/>
      <Halal/>
      <Business
        title={t("businessBlock.title")}
        description={t("businessBlock.info")}
        businesses={businesses}
      />
      {/* <Trading/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};