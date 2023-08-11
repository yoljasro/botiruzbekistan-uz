// import { Main } from "../components/Main";
import Head from "next/head";
import Image from "next/image";
// import { Navbar } from "../components/Navbar";
import type { NextPage, GetStaticProps } from "next";
import { Header } from "../components/Header";
import { Business } from "../components/Business";
import { Halal } from "../components/Halal";
import { Navbar } from "../components/Navbar";
import { Trading } from "../components/Trading";
import { Contact } from "../components/Contact";    
import { Footer } from "../components/Footer";
import {FiBriefcase} from 'react-icons/fi'

export default function Home() {

  const businesses = [
    {
      name: "Yevropada Oliy Ta'lim",
      description: "Abituriyentlarga Yevropadagi universitetlarga qabul bo'lishida ko'mak berish" , 
      icon: <FiBriefcase />,
    },
    {
      name: 'Konsulting Xizmatlari',
      description: 'Yevropa Ittifoqiga kiradigan barcha davlatlarga ish va talabalik vizasini  qo\'lga kiritishda ko\'mak berish',
      icon: <FiBriefcase />,
    },
    {
      name: 'Kompaniyalar guruhi',
      description: " - O\'zbegim somsalari - Treyderlik kompaniyasi  - IT Kompaniya",
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
        <link rel="icon" href="/assets/img/logo.svg" />
      </Head>
      <Navbar/>
      <Header/>
      <Halal/>
      <Business
        title="Biznes"
        description="Ushbu bolimda siz Botir Uzbekistanning shaxsiy bizneslari bilan tanishib chiqishingiz mumkin"
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