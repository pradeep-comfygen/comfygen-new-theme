import Image from "next/image";
import { MdOutlineAdminPanelSettings, MdSportsCricket } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { TbCricket } from "react-icons/tb";
import { BsCurrencyExchange } from "react-icons/bs";
import dynamic from "next/dynamic";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import JSON_DATA from "./json/cricketbetting.json"
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetinTouch from "../components/Getintouch";
import styles from './styles.module.css'
import FaqBlockChain from "./components/FaqSec";
import { MdArrowCircleRight } from "react-icons/md";


const ServiceSection = dynamic(() => import("../../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
// const Header = dynamic(() => import("./components/Header"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})

const ContactFromCenter = dynamic(() => import('../../components/ContactFromCenter'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const TechnoStack = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})

const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})

const Arena = [
  {
    num: "1",
    icon: <MdSportsCricket className="text-blue-400" size={60} />,
    title: "Mobile App Beratungsdienste",
    decs: <p>Unsere Experten bieten umfassende Beratungsdienste, die nicht nur die Entwicklung betreffen. Durch eine akribische Entdeckungsphase, umfassende Forschung und mobile App-Audits bieten unsere IT-Profis ergebnisorientierte Beratungsdienste in der Mobile App-Entwicklung an.</p>,
  },
  {
    num: "2",
    icon: <MdOutlineAdminPanelSettings className="text-blue-400" size={60} />,
    title: "Mobile App Design-Dienste",
    decs: "Unsere mobilen App-Designer sind darauf spezialisiert, ansprechende UI/UX-Designs zu erstellen, um die Benutzerbindung zu maximieren. Die Designs sollen die Anwendungen voll funktionsfähig und navigierbar machen und eine reibungslose und benutzerfreundliche Erfahrung für die Benutzer gewährleisten.",
  },
  {
    num: "3",
    icon: <TbCricket className="text-blue-400" size={60} />,
    title: "Native App Entwicklung",
    decs: "Durch den Einsatz von Technologien wie Kotlin, Objective-C, Java und Swift entwickeln wir geschäftsorientierte native Apps mit fundiertem Know-how über die jeweiligen Technologien und nutzen das volle Potenzial der iOS- und Android-Plattformen.",
  },
  {
    num: "4",
    icon: <AiOutlineCalendar className="text-blue-400" size={60} />,
    title: "Hybride App-Entwicklung",
    decs: " Wir sind spezialisiert auf die Entwicklung von Anwendungen, die auf beiden iOS- und Android-Plattformen zugänglich sind und eine nahtlose Mischung aus nativen und Web-Lösungen bieten.",
  },
  {
    num: "5",
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: "Progressive Web App-Entwicklung",
    decs: "Comfygen kann mobile Anwendungen in Web-Apps, SaaS, Online-Shops und Webportalen erstellen und nahtlosen Zugriff auf Produkte und Dienstleistungen über Webbrowser ermöglichen.",
  },
  {
    num: "6",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Mobile App API-Integration",
    decs: "Unsere Experten sind spezialisiert auf detaillierte und funktionale Integration von Drittanbieter-APIs, um Ihre App effektiv im Markt zu etablieren.",
  },
  {
    num: "7",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Anwendungstests und Qualitätssicherung",
    decs: "Mit mehr als 7 Jahren Erfahrung im Bereich Qualitätssicherung bieten wir akribische Tests, um kleine Fehler, technische Probleme und die Bereitstellung hochwertiger Anwendungen zu erkennen. "
  },
  {
    num: "8",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "MVP-App-Entwicklung",
    decs: "Unser Fokus liegt auf der Entwicklung von Minimal Viable Products (MVPs), um sowohl für Kunden als auch für uns selbst ein klares Bild vom Entwicklungsverlauf der App zu liefern."
  },
  {
    num: "9",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Unterstützung und Wartung mobiler Apps",
    decs: "Unser Engagement geht über die Entwicklung hinaus und erstreckt sich auf die Post-Bereitstellungsdienste. Unser Team stellt die kontinuierliche Inspektion und Wartung der Anwendung sicher und begegnet Marktbedürfnissen, Funktionsänderungen, technischen Problemen und Benutzeranforderungen."
  }
];

const Chartacterstics = [
  {
    "num": "1",
    "img": "/images/rapid-deployment.svg",
    "title": "Fintech Bereitstellung von Lösungen im Finanzbereich:",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Ob es um die Erleichterung von Geldtransaktionen oder die Bereitstellung von Finanzberatung auf Unternehmensebene geht, unsere Fintech-Anwendungen decken eine Vielzahl von Finanzdienstleistungen ab. Von Budgetierungstools bis hin zu Finanzabwicklungen sind unsere Apps darauf ausgelegt, vielfältige Benutzerbedürfnisse zu erfüllen.</p>
  },
  {
    "num": "2",
    "img": "/img/user-centric-design-approach.webp",
    "title": "Einzelhandel & E-Commerce Verbesserung des Einkaufserlebnisses: ",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Wir sind spezialisiert auf die Entwicklung dedizierter Online-Einzelhandelsgeschäfte und umfassender E-Commerce-Plattformen, die eine nahtlose Navigation gewährleisten und das Benutzererlebnis beim Einkaufen für unvergleichlichen Komfort optimieren.</p>
  },
  {
    "num": "3",
    "img": "/images/control-access.svg",
    "title": "Bildung Förderung des Lernens:",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Über die Unterhaltung hinaus spielen mobile Anwendungen eine entscheidende Rolle in der Bildung. Unsere Bildungs-Apps unterstützen bei der Verfolgung von Aufgaben, der Fachbildung, der Online-Teilnahme am Unterricht und vielem mehr. Was auch immer die Bildungsbedürfnisse sind, wir sind in der Lage, maßgeschneiderte Lösungen für ein nahtloses Lernerlebnis zu entwickeln. </p>
  },
  {
    "num": "4",
    "img": "/images/speed-efficiency.svg",
    "title": "Gesundheitswesen Revolutionierung des Gesundheitswesens:",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Mit der raschen Akzeptanz der Gesundheitsbranche von mobilen App-Entwicklungen glänzt unser Team mit der Entwicklung von Anwendungen, die Patienten befähigen, Gesundheitsziele zu überwachen, Medikamentenerinnerungen festzulegen und auf wichtige medizinische Informationen zuzugreifen. Wir entwickeln eine Vielzahl von Gesundheits-Apps, um diverse Anforderungen im Gesundheitswesen zu erfüllen.</p>
  }
];
const LatestTechno = [
  {
    "num": "01",
    "title": "Sicherheitsfokus Einhaltung von Vorschriften:",
    "dec": "Wir legen Wert auf Sicherheit, indem wir uns an die Allgemeine Datenschutzverordnung (DSGVO), die Vorschriften für Informationssysteme im Netzwerk, 114 bewährte Kontrollpraktiken und die Durchführung halbjährlicher externer Sicherheitsaudits ausrichten. Diese Maßnahmen sind integral, um die Anwendungen der Kunden einmalig zu stärken und einen robusten Schutz sensibler Daten sicherzustellen. "
  },
  {
    "num": "02",
    "title": "Transparenz Transparenz im Sinne des Kunden: ",
    "dec": "Transparenz ist der Grundpfeiler unserer Kundenbeziehungen. Wir binden Kunden proaktiv in unsere Prozesse ein, leiten sie durch Dokumentation und ermächtigen sie, Produktivität und hochwertige Lösungen zu verstehen. Durch die Aufrechterhaltung von Transparenz gewinnen wir das Vertrauen und das Vertrauen unserer Kunden und bieten unbestreitbaren Mehrwert auf dem Markt."
  },
  {
    "num": "03",
    "title": "Kosteneffektive Lösungen wissengetriebene Kosteneffizienz:",
    "dec": "Unsere Mobile-App-Lösungen sind von Natur aus kosteneffektiv aufgrund des tiefen Wissens und der Erfahrung unseres Teams. Wir bewegen uns in der Landschaft der App-Entwicklung mit einem klaren Verständnis dafür, was Unternehmen wirklich zugute kommt, unterscheiden zwischen wesentlichen Elementen und unnötigen Ausgaben und erzielen außergewöhnliche Anwendungen zu angemessenen Kosten."
  },
  {
    "num": "04",
    "title": "Neue Technologie-Trends übernehmen führend in der Technologietransformation:",
    "dec": "Comfygen verpflichtet sich, an vorderster Front der Innovation zu bleiben, indem wir kontinuierlich die neuesten Technologie-Trends übernehmen. Unsere anpassungsfähigen und innovativen Köpfe ermöglichen es Kunden, der Konkurrenz einen Schritt voraus zu bleiben, indem sie einzigartige und modernste Technologie-Trends in ihre Projekte einbinden, um außergewöhnliche und richtungsweisende Anwendungen zu entwickeln."
  },
];


export default function Ecommerce(props) {
  let { initialData } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title> Beste Mobile App Entwicklungsfirma | Comfygen</title>
        <meta name="description" content="Comfygen is your premier destination for First-class cricket betting software development services in India. Elevate your platform with innovative solutions tailored to your needs." />
        <link rel="canonical" href="https://www.comfygen.com/cricket-betting-software-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cricket Betting Software Development Company in India | Comfygen" />
        <meta property="og:description" content="Comfygen is your premier destination for First-class cricket betting software development services in India. Elevate your platform with innovative solutions tailored to your needs." />
        <meta property="og:url" content="https://www.comfygen.com/cricket-betting-software-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T11:48:00+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/cricket.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="11 minutes" />
        <meta name='robots' content='index,follow' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Best Cricket Betting Software Development Industry | Cricket betting software developers" />
        <meta property="og:facebook_description" content="Comfygen is a leading Cricket Betting Software Development Company. Hire White-Label Cricket Bookies Software or Custom Cricket Betting Software Developers at comfygen." />
        <meta property="og:twitter_title" content="Top Class Cricket Betting Software Development Organization | Cricket Betting Software Programmers" />
        <meta property="og:twitter_description" content="Comfygen is a leading Cricket Betting Software Development Company. Hire White-Label Cricket Bookies Software or Custom Cricket Betting Software Developers at comfygen." />
        <meta property="schema:type" content="Best Cricket Betting Software Development Company, Cricke Betting Software Provider" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='ES' />
        <meta name='abstract' content=' Cricket Betting Software Development Organization' />
        <meta name='summary' content='Comfygen is your dependable partner for the creation of Cricket betting Software development company in India, providing first- class Cricket Betting Software Development Services to help your online cricket betting software venture reach new heights.' />
        <meta name='author' content='Mr. Dilip khan, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a Cricket Betting Software Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Sports Software Development Company' content='Comfygen is best sports betting software development company in jaipur, India. Our Sports Betting Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms.' />
        <meta name='category' content='Leading Cricket Betting Software Devlopment Company' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Leading Cricket Betting Software Devlopment Company Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" /> */}
        <meta name='og:country-name' content='India' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='article' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Bestes mobile App Entwicklungsunternehmen"
                ptag="Wenn Sie umfassende Mobile App-Entwicklungsdienste mit modernster Technologie suchen, sind Sie bei Comfygen an der richtigen Adresse. Unser Engagement besteht darin, die besten Praktiken in der App-Entwicklung mit einer interaktiven Benutzererfahrung zu verbinden. Mit einem Team hochqualifizierter IT-Experten verfügen wir über jahrelange Erfahrung und Fachwissen in Kerntechnologien wie Kotlin und Swift für die Entwicklung von Android- und iOS-Apps."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <section className="py-16">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 flex items-center">
              <div>
                <img src="/img/about-us.webp" alt="" />
              </div>
              <div>
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">Erfolgreiche Erfahrungen mit unserer Mobile App Entwicklungsunternehmen</h2>
                <p>Bei Comfygen haben wir uns einen Ruf als zuverlässiges und erfahrenes Mobile App Entwicklungsunternehmen erarbeitet, die bereit ist, jede Herausforderung anzunehmen. Wir setzen uns dafür ein, in der Entwicklungsbranche Maßstäbe zu setzen und Geschäfte sowohl mit KMUs als auch mit Großunternehmen in verschiedenen Branchen zu revolutionieren. Unsere Zusammenarbeit mit talentierten und innovativen mobilen App-Entwicklern hat es uns ermöglicht, die Unternehmen unserer Kunden zu verbessern. Wir legen Wert darauf, spezifische Geschäftsanforderungen zu erfüllen und maßgeschneiderte Lösungen für ihre einzigartigen Bedürfnisse anzubieten.</p>
                <p>Unser einzigartiger Ansatz unterscheidet uns. Wir sind bestrebt, das Beste für unsere Kunden zu liefern, indem wir eine rechtzeitige Projektabwicklung gewährleisten, ihnen helfen, sich auf dem wettbewerbsintensiven App-Markt abzuheben, moderne Technologien nutzen und effektive Strategien implementieren, um ihr Geschäftspotenzial und ihre Rentabilität zu maximieren. In unserer Firma bauen wir auf einem "Geben und Nehmen-Prinzip" auf, bei dem wir darauf abzielen, je bessere Ergebnisse wir liefern, desto höher ist der Marktwert, den wir erreichen wollen. Vertrauen Sie Comfygen für Ihre Mobile App Entwicklung.</p>
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <div className="py-10 bg-[#DAEAFA]">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">


                Mobile App  <span className="text-blue-500">  Entwicklungsdienste von Comfygen </span>
              </h2>
              <p className="text-base text-slate-800">
                Bei Comfygen bieten wir eine umfassende Palette von Mobile App-Entwicklungsdiensten, die darauf abzielen, die Benutzererfahrung zu verbessern, Sicherheit zu gewährleisten und außergewöhnliche Leistungen zu erbringen.
              </p>
              <h3 className="py-4 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]  ">Unsere Dienstleistungen umfassen:</h3>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {Arena.map((elem: any, index: any) => {
                const { title, icon, decs, decs1 } = elem;
                return (
                  <ServiceSection
                    key={index}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                    Ptag1={decs1}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <section className="py-10 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Unterstützte
                Unterstützte <span className="text-blue-600">  Mobile App-Entwicklungsplattformen </span>   von Comfygen
              </h2>
              <p className="text-black text-base font-normal">Entdecken Sie die vielfältigen Plattformen, auf denen Comfygen Ihre Unternehmenspräsenz verbessern und höhere Werte im Markt freisetzen kann:</p>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.Smart.map((elem) => {
                const { title, decs, num, img } = elem;
                return (
                  <div key={num} className="p-3 space-y-4 rounded-[17px]">
                    <div className="w-24 h-24 bg-[#F45F391A] rounded-full  flex justify-center items-center" style={{ backgroundColor: elem.bg }}>
                      <div className='p-3 rounded-full h-16 w-16 flex justify-center'>
                        <Image className="w-full" src={img} alt={title} width="200" height="100" />
                      </div>
                    </div>
                    <div className='space-y-4'>
                      <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                        {title}
                      </h3>
                      <p className="break-all    text-[#000000] line-clamp-5 group-hover:text-white/90">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="py-16 bg-[#0F192E]">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Mobile App-Entwickungsprozess
                </h2>
                <p className="text-base text-white">Comfygen verfolgt einen strukturierten Ansatz in der App-Entwicklung, der darauf ausgelegt ist, Unternehmen mit außergewöhnlicher Benutzerbindung zu bereichern. Der Prozess verläuft wie folgt:</p>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, img, decs, num, url } = elem;
                  // Check if decs is an array
                  if (!Array.isArray(decs)) {
                    console.error(`decs is not an array for element: ${num}`);
                    return null; // Skip rendering this element
                  }
                  return (
                    <div key={num} className="p-6 space-y-4 bg-white">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                        <Image width={70} height={70} src={img} alt={title} title={title} className="w-9" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                      <p className="text-lg text-black">{decs}</p>
                      {/* <ul className="font-medium text-black transition duration-200 ease-in-out">
                          {decs.map((item, index) => (
                            <li key={index} className="flex gap-2 "> <MdPlaylistAddCheckCircle className="text-lg" />
                              {item}</li>
                          ))}
                        </ul> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <TechnoStack />
        <div className="bg-[#EFFCFE]">
          <section className="items-center py-10 space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                src="/img/we-cater-to-various-.webp"
                alt=" We Cater to various Industries to provide App Development Services"
                className=""
                height={500}
                width={500}
              />
            </div>
            <div className="w-full space-y-2 text-left bg-[#FEEFEB] p-[40px] rounded-[40px]">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Aktuelle Technologietrends für die Entwicklung mobiler Anwendungen                </h2>
              </div>
              <p className="text-base leading-7 text-black">Comfygen verpflichtet sich, einen zukunftsorientierten Ansatz für digitale Lösungen zu verfolgen und aufstrebende Technologien zu integrieren, um die nachhaltige Relevanz im Marktplatz der nächsten Generation zu gewährleisten: </p>
              <ul className="space-y-1">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex" key={index}>
                    <span className="pr-2 mt-1 text-[#4f4f50]">
                      <MdArrowCircleRight className="w-4 h-4" />
                    </span>
                    {item}{""}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <section className="py-16 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">

                  Digitalisierungserfahrung in <span className="text-blue-600">  verschiedenen Branchen weltweit </span></h2>
                <p>Bei Comfygen verfügen unsere versierten mobilen App-Entwickler über umfangreiche Erfahrungen und Talente in ihrem Bereich und haben erfolgreich verschiedene Branchen und Komplexitäten gemeistert, um außergewöhnliche mobile Anwendungen zu entwickeln. Hier sind einige Branchen, in denen wir uns in der iOS- und Android-App-Entwicklung bewährt haben:</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover" width={50} height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      {decs}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us" className="mt-5">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Get A Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-[#D0E6F0]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">Gründe, sich für mobile Comfygen App-Entwicklungsdienste zu entscheiden </h2>
              <p className="text-base text-slate-800">Comfygen hebt sich in der wettbewerbsintensiven Landschaft der mobilen App-Entwicklung durch eine einzigartige Kombination von Schlüsselstärken und geschätzten Grundsätzen hervor, die zum Erfolg und zur Zufriedenheit unserer Kunden beitragen. </p>

            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {LatestTechno.map((elem) => {
                const { title, dec, num, } = elem;
                return (
                  <div key={num} className="border  items-center p-8 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</h3>
                    <p>{dec}</p>
                  </div>
                )
              })
              }
            </div>
          </div>
        </section>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />
        {/* <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-mobile-app-developer.webp")` }}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div> */}
        <BlogSection initialData={initialData} />
        <FaqBlockChain />
        <GetinTouch />
        <Footer />
      </div >
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
