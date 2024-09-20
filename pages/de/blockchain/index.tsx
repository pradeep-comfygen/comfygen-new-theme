import Image from "next/image";
import { MdOutlineAdminPanelSettings, MdSportsCricket } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { TbCricket } from "react-icons/tb";
import { BsCurrencyExchange, BsDot } from "react-icons/bs";
import dynamic from "next/dynamic";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import JSON_DATA from "./json/cricketbetting.json"
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetinTouch from "../components/Getintouch";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import FaqBlockChain from "./components/BlockChainFaq";

const ServiceSection = dynamic(() => import("../../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(() => import('../../components/ContactFromCenter'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const TechnoStack = dynamic(() => import('../components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})

const Arena = [
  {
    num: "1",
    icon: <MdSportsCricket className="text-blue-400" size={60} />,
    title: "Blockchain-Beratung",
    decs: <p>Als führendes Blockchain-Entwicklungsunternehmen in Deutschland legen wir Wert darauf, den Entwicklungsprozess durch gründliche Beratungsgespräche einzuleiten. Unser Team arbeitet mit Projektmanagern, erfahrenen Entwicklern und Kunden zusammen, um eine Roadmap zu erstellen, die den gesamten Entwicklungsprozess steuert.</p>,
  },
  {
    num: "2",
    icon: <MdOutlineAdminPanelSettings className="text-blue-400" size={60} />,
    title: "Benutzerdefinierte Blockchain-App-Entwicklung",
    decs: "Unsere benutzerdefinierten Blockchain-Lösungen sind auf spezifische Geschäftsanforderungen zugeschnitten und legen Wert auf Sicherheit, Skalierbarkeit, Flexibilität und Transparenz. Wir entwerfen Lösungen, die alle vier Kriterien erfüllen, die Geschäftsanforderungen erfüllen und optimale Ergebnisse liefern. ",
  },
  {
    num: "3",
    icon: <TbCricket className="text-blue-400" size={60} />,
    title: "Entwicklung dezentraler Anwendungen (dApps)",
    decs: "Unsere Expertise im Aufbau sicherer und skalierbarer dApps gewährleistet den Zugriff über mehrere Netzwerke hinweg und bietet gleichzeitig vollständige Sicherheit, um potenzielle Bedrohungen abzuwehren. Diese Anwendungen haben das Potenzial, in verschiedenen Geschäftsbereichen einen maximalen ROI zu erzielen.",
  },
  {
    num: "4",
    icon: <AiOutlineCalendar className="text-blue-400" size={60} />,
    title: "Entwicklung intelligenter Verträge",
    decs: "Comfygen zeichnet sich als führendes Unternehmen bei der Entwicklung intelligenter Verträge aus und sorgt für manipulationssichere und sichere Verträge, die Fehler beseitigen, die Genauigkeit verbessern und die Sicherheit erhöhen. Unser Team aus erfahrenen Blockchain-Entwicklern erstellt sichere Verträge, um transparente Geschäftsökosysteme aufrechtzuerhalten.",
  },
  {
    num: "5",
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: "Blockchain-Wallet- und Exchange-Entwicklung",
    decs: "Profitieren Sie von unseren effizienten Blockchain-Wallets, die mit erweiterten Funktionen wie QR-Scannern, biometrischer Authentifizierung und bidirektionaler Authentifizierung ausgestattet sind. Darüber hinaus entwickeln wir optimierte Kryptowährungs-Austauschplattformen mit umfassenden Marktdaten und erweiterten Charting-Funktionen für einen reibungslosen Handel.",
  },
  {
    num: "6",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Krypto-Token-Entwicklung",
    decs: "Wir sind auf die Tokenisierung realer Vermögenswerte spezialisiert, um den Zugang für ein breites Anlegerspektrum zu erweitern. Unsere funktionsreichen Tokenisierungslösungen für die Digitalisierung von Blockchain-Assets eröffnen neue Wege für Finanzanlagen und machen Token auf verschiedenen digitalen Plattformen zugänglich und handelbar.",
    decs1: "Cricket Betting Software Development Services"
  },
  {
    num: "7",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "IEO- und ICO-Entwicklung",
    decs: " Als führendes Unternehmen für die Entwicklung von Kryptowährungen bieten wir Expertendienste für die Erstellung erster Austauschplattformen an und erleichtern so die Bereitstellung erheblicher Mittel für Kryptowährungsunternehmen auf dem Markt."
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
        <title> Blockchain-Entwicklungsunternehmen | Comfygen</title>
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
                heading="Blockchain-Entwicklungsunternehmen"
                ptag="Arbeiten Sie mit dem führenden Blockchain-Entwicklungsunternehmen in Deutschland zusammen, um robuste Sicherheitsmaßnahmen für Ihr Unternehmen zu etablieren. Wir halten uns an modernste Markttechnologiestandards und sind auf die Bereitstellung erstklassiger Blockchain-Entwicklungsdienste wie dApps, DEX Smart Contracts, Blockchain-Wallets, Token-Entwicklung und mehr spezialisiert. Kontaktieren Sie uns, um qualifizierte Entwickler für maßgeschneiderte Blockchain-Lösungen unter Verwendung von Hyperledger, Solidity, EVM, Substrate, EOS, Stellar oder Cosmos zu engagieren."
                ptag2="Zögern Sie nicht – kontaktieren Sie uns noch heute, um ein Gespräch über die Stärkung Ihres Unternehmens mit Technologielösungen der nächsten Generation anzustoßen."
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
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">Steigern Sie Ihr Geschäft mit hochmodernen Blockchain-Entwicklungsdiensten in Deutschland</h2>
                <p>Arbeiten Sie mit einem führenden Blockchain-Entwicklungsunternehmen in Deutschland zusammen, um Ihr Unternehmen effektiv abzusichern. Unser Team hält sich an moderne Markttechnologiestandards und bietet erstklassige Blockchain-Entwicklungsdienste, darunter dApps, DEX-Smart-Verträge, Blockchain-Wallets und Token-Entwicklung. Arbeiten Sie mit unseren erfahrenen Entwicklern zusammen, um individuelle, auf Ihre Bedürfnisse zugeschnittene Blockchain-Entwicklungslösungen zu erhalten, die auf die Entwicklung von Hyperledger, Solidity, EVM, Substrate, EOS, Stellar und Cosmos spezialisiert sind. Excel ist ein erstklassiges Blockchain-App-Entwicklungsunternehmen mit langjähriger Branchenerfahrung, das maßgeschneiderte Lösungen unter Verwendung von Frameworks wie Hyperledger, Ethereum und Stellar liefert.</p>
                <p>Profitieren Sie von einer Reihe umfassender Dienstleistungen, darunter Blockchain-Beratung, kundenspezifische App-Entwicklung, dApp-Erstellung, intelligente Vertragsentwicklung, Blockchain-Wallet-Lösungen, Kryptowährungs-Austauschplattformen, Tokenisierungsdienste und ICO/IEO-Entwicklung. Steigern Sie Ihr Geschäft mit unseren transparenten und innovativen Blockchain-Entwicklungsdiensten. Kontaktieren Sie uns noch heute, um Ihre Geschäftsstrategien mit modernsten Technologielösungen neu zu gestalten und Ihre Position auf dem sich entwickelnden Markt zu sichern.</p>
              </div>

            </div>
          </div>
        </section>
        <ContactFromCenter />
        <div className="py-10 bg-[#DAEAFA]">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                Sichern Sie Ihr Unternehmen mit transparenten <span className="text-blue-500">  Blockchain-Entwicklungslösungen </span>
              </h2>
              <p className="text-base text-slate-800">
                Erleben Sie bei Comfygen dedizierte Blockchain-basierte Dienste und bieten Sie eine Reihe von Angeboten an, die darauf ausgelegt sind, die Sicherheit und Transparenz Ihres Unternehmens zu verbessern. Mit dem Fokus auf Flexibilität und Skalierbarkeit eignen sich unsere Blockchain-Apps und dezentralen Lösungen gleichermaßen für Start-ups und Großunternehmen.
              </p>
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
        <TechnoStack />
        <section className="py-10 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Trends in der <span className="text-blue-600"> Blockchain-Entwicklung</span>
              </h2>
              <p className="text-black text-base font-normal">Bei Comfygen bleiben wir immer einen Schritt voraus, indem wir die neuesten Blockchain-Entwicklungstrends für verschiedene Branchen nutzen. Unser proaktiver Ansatz gewährleistet die Schaffung unverzichtbarer Lösungen für die Geschäftsausweitung und erhöhte Sicherheit.</p>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
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
                  Blockchain-Entwicklungsprozess <span className="text-[#B066C1] capitalize">  bei Comfygen </span>
                </h2>
                <p className="text-base text-white">Bei Comfygen haben wir unser Fachwissen in der Blockchain-Entwicklung verfeinert und so eine sorgfältige und erfolgreiche Ausführung des Prozesses sichergestellt. Unser schrittweiser Ansatz gewährleistet das rechtzeitige Erreichen wichtiger Meilensteine für jedes Blockchain-Projekt.</p>
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
                      <a href={url} className="h-full pointer">
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                          <Image width={70} height={70} src={img} alt={title} title={title} className="w-9" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                        <ul className="font-medium text-black transition duration-200 ease-in-out">
                          {decs.map((item, index) => (
                            <li key={index} className="flex gap-2 place-items-start"> <MdPlaylistAddCheckCircle className="text-lg" />
                              {item}</li>
                          ))}
                        </ul>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
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
