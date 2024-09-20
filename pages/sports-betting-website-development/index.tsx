import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdDesignServices,
  MdLocalOffer,
  MdOutlineAdminPanelSettings,
  MdOutlineDashboardCustomize,
  MdOutlineHighQuality,
  MdOutlineVideoLabel,
  MdPrivacyTip,
} from "react-icons/md";
import "aos/dist/aos.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineInteraction } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaConnectdevelop, FaShippingFast } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { RxDot } from "react-icons/rx";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import { GiCricketBat } from "react-icons/gi";
import { BsFillChatDotsFill, BsShareFill } from "react-icons/bs";
import JSON_DATA from "./json/sportsbettingwebsite.json";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Arena = [
  {
    num: "1",
    icon: <GiCricketBat className="text-blue-400" size={50} />,
    decs: "Our online sports betting website development organization  are equipped with top-end sports betting simulators that predict winners and odds based on advanced algorithms and historical factors.",
    title: "Simulators for betting",
  },
  {
    num: "2",
    icon: <BsFillChatDotsFill className="text-blue-400" size={50} />,
    decs: "Have a question that needs to be answered quickly? With Comfygen, you get 24/7 chat support with the representative for your online sports betting website.",
    title: "The agent-player chat",
  },
  {
    num: "3",
    icon: <MdDesignServices className="text-blue-400" size={50} />,
    decs: "With our innovative, easy-to-use White Label sports betting website platform, punters can place bets seamlessly thanks to the smooth interfaces and world-class features.",
    title: "Simple and unique designs",
  },
  {
    num: "4",
    icon: <MdLocalOffer className="text-blue-400" size={50} />,
    decs: "Are you interested in personalizing your best sports betting website and app development services according to the preferences of the local market? With Comfygen, you can add a touch of localization.",
    title: "The localization process",
  },
  {
    num: "5",
    icon: <BsShareFill className="text-blue-400" size={50} />,
    decs: "You get complete transparency in the process because there are no additional costs after  Sports betting website development deployment.",
    title: "There will be no revenue sharing",
  },
  {
    num: "6",
    icon: <FaShippingFast className="text-blue-400" size={50} />,
    decs: "So that clients can launch their own online White Label sports betting website platforms quickly, our developers use cutting-edge technologies.",
    title: "Market entry is quick",
  },
  {
    num: "7",
    icon: <IoPlay className="text-blue-400" size={50} />,
    decs: "Providing a complete standardised sports betting website development solutions is our top priority when it comes to sports betting.",
    title: "Playing responsibly",
  },
  {
    num: "8",
    icon: <MdOutlineAdminPanelSettings className="text-blue-400" size={50} />,
    decs: "Enjoy easy usability, quick and seamless navigation, and many more with the single-touch accessible panels.",
    title: "Panels with one touch",
  },
  {
    num: "9",
    icon: <MdPrivacyTip className="text-blue-400" size={50} />,
    decs: "With our strong anti-risk tools, we protect user data, maintain privacy and anonymity, and even prevent fraud of all types.",
    title: "Privacy and Anti-Fraud",
  },
  {
    num: "10",
    icon: <AiOutlineInteraction className="text-blue-400" size={50} />,
    decs: "As a result, we integrate odds from the best third-party sports betting software provider, allowing us to place the most competitive bets possible. As well as keeping your business streamlined, we ensure that we deliver all odds on time.",
    title: "Integration of third-party odds",
  },
  {
    num: "11",
    icon: <RiCustomerService2Fill className="text-blue-400" size={50} />,
    decs: "In addition to providing the benefit of contacting us anytime for resolving your query, we are the company that develops sports betting website development online.",
    title: "24*7 Availability",
  },
  {
    num: "12",
    icon: <MdOutlineHighQuality className="text-blue-400" size={50} />,
    decs: "To help your punters bet more logically and analytically, we develop sports betting website equipped with best algorithms.",
    title: "Technology & Algorithms of the highest quality",
  },
];
const Jump = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <MdOutlineVideoLabel size={60} className="text-blue-500" />,
    title: "White Label Sportsbook Software",
    decs: "- Product that is market-ready",
    decs1: "- A rich feature set",
    decs2: "- Coverage of multiple sports",
    decs3: "- Opportunities for on-demand customization",
    decs4: "- Delivery in a short period of time",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <MdOutlineDashboardCustomize size={60} className="text-blue-500" />,
    title: "Custom Sports Betting website",
    decs: "- Customizations that are seamless",
    decs1: "- Features that can be customized",
    decs2: "- A user interface that is brand-oriented",
    decs3: "- Your choice of payment gateways",
    decs4: "- Coverage of popular sportse",
    decs5: "- A robust and scalable solution",
  },
  {
    num: "3",
    bg: "#F2F6E7",
    icon: <FaConnectdevelop size={60} className="text-blue-500" />,
    title: "Sports Betting App Development",
    decs: "- Compatible with Android and iOS",
    decs1: "- A highly responsive website",
    decs2: "- Coverage of trending features",
    decs3: "- Payment gateways with multiple options",
    decs4: "- A user interface that is engaging",
    decs5: "- Coverage of multiple sports",
  },
];

export default function Sports(props) {
  let { initialData } = props;

  let {
    Modus,
    ModusOperandi,
    Hire,
    myList,
    NewSections,
    myList4,
    myList5,
    myList1,
    myList7,
    myList8,
    myList6,
    Development1,
    Frequently,
    Solution,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Sports Betting Website Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen as a Reputable sports betting website company In India & The USA. Our professional team offers top-notch sports betting website development solutions to create a user-friendly, secure service, and customizable platform for your online gaming business to achieve maximum results."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/sports-betting-website-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Sports Betting Website Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen as a Reputable sports betting website company In Canada & The USA. Our professional team offers top-notch sports betting website development solutions to create a user-friendly, secure service, and customizable platform for your online gaming business to achieve maximum results."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/sports-betting-website-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="en-us" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Sports Betting Website Development Company in India | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen provides the best sports betting website development services in India. Our sports betting Website programmers carry high-level expertise to build sports betting Websites."
        />
        <meta
          property="og:twitter_title"
          content="Best Sports Betting website Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen provides the best sports betting website development services in India. Our sports betting Website programmers carry high-level expertise to build sports betting Websites."
        />
        <meta
          property="schema:type"
          content="Top Sports Betting Website Development Industry in Jaipur"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta
          name="abstract"
          content=" Sports Betting Website Development organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of sports betting website development company in India, providing first-rate sports betting web development services to help your online sports betting venture reach new heights."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a sports betting website development company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Sports Software Development Company"
          content="Comfygen is best sports betting software development company in jaipur, India. Our Sports Betting Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Sports Betting Website devlopment" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Sports Betting Website Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Sports Betting Website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
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
                heading="Sports Betting Website Development Company"
                ptag="Comfygen is the best reliable and adequate sports betting website development company In Canada & The USA. Providing first-rate Sports betting website development services to help your online sports betting website venture reach new heights. With a magnificent team of game technologists who have years of experience in Website Development and Android/iOS Application development by making use of the latest technology."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={NewSections} />
        <ContactFromCenter />
        <section className="py-10">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                  Benefits Of Our Sports Betting Website
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div
            className="w-full bg-center bg-no-repeat bg-cover "
            style={{
              backgroundImage: `url("/img/full-stack-betting-developer.webp")`,
            }}
          >
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                <div className="space-y-6">
                  <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    Full-Stack Sports Betting Website Development Technologies
                    We Serve
                  </h2>
                  <p className="space-y-0 text-base text-white md:text-xl ">
                    When it comes to developing a full-stack sports betting
                    website, there are various technologies you can consider for
                    different components of the system. Here are some commonly
                    used technologies for each layer of a full-stack sports
                    betting website:
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 ">
                  {Solution.map((elem) => {
                    const { title, img, num } = elem;
                    return (
                      <div
                        key={num}
                        className="flex items-center p-2 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100"
                      >
                        <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                          <div className="md:bg-white md:p-2 md:rounded-lg">
                            <Image
                              title={title}
                              alt={title}
                              src={img}
                              height={50}
                              width={50}
                            />
                          </div>
                          <p className="py-4 text-lg font-semibold text-gray-800 ">
                            {title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Advice
          head="customs Sports Betting web and app Development"
          heading="Sports Betting Website Development Services"
          ptag="With our top -notch sports betting applications, you can take advantage of state-of-the-art features. Providing outstanding sports betting app  in India to clients is one of our responsibilities as mobile application developers. As one of our most demanding sports betting products and solutions, our sports betting mobile app development combine smart planning with expert guidance."
          ptag1="Gaming operators can select from the vivid customisable and ready-to-deploy custom sports betting website development solutions from our diversified range of sports betting website development services. Our online sports betting website development company is integrated with the finest systems and tools to improve your business's competitive edge."
          imgSrc="/images/sports-betting-website-development-service.webp"
          imgW={593}
          imgH={570}
          altTag="Sports Betting Website Development Services"
        />
        <section className="py-10 lg:py-20 bg-white space-y-6 xl:w-5/6 2xl:w-4/6  w-11/12 mx-auto">
          <div className="space-y-4 flex flex-col justify-center items-center py-6">
            <h3 className="px-1 py-3 text-4xl font-bold text-center text-[#0E1F51] ">
              Our Types of Sports Betting Website Panel
            </h3>
            <p className="text-base text-slate-800 text-center">
              Get powerful features, simplified configuration, and interactive
              designs using our panel and experience the greatest Sports Betting
              Website Development services. Comfygen is a considerable Betfair
              sports betting API Provider that comes with multi-functionalities
              and a user-friendly interface at affordable prices.
            </p>
          </div>
          <div className="container grid grid-cols-1 gap-5  lg:grid-cols-3 md:grid-cols-2 ">
            <div className="bg-[#F45F391A] px-6 rounded-[40px] space-y-5  w-full py-8">
              <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                Player Panel
              </h3>
              <p className="text-base text-black">
                Our sportsbook apps now offer access to the following player
                panel:
              </p>
              <div className="flex justify-start">
                <ul className="px-8 space-y-1 list-disc">
                  {myList1.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-green-500/10 px-6 rounded-[40px] space-y-5  w-full py-8">
              <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                Admin Panel{" "}
              </h3>
              <p className="text-base text-black">
                Easy-to-access features make it possible to administer sports
                betting app development effectively
              </p>
              <div className="flex justify-start">
                <ul className="px-8 space-y-1 list-disc">
                  {myList7.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-purple-500/10 px-6 rounded-[40px] space-y-5  w-full py-8">
              <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                Agent Panel
              </h3>
              <p className="text-base text-black">
                For the top bookmakers, the following features are available
                through a single-window interface.
              </p>
              <div className="flex justify-start">
                <ul className="px-8 space-y-1 list-disc">
                  {myList8.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="flex flex-col-reverse items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-20 md:space-y-0">
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Important Features Of Our Sports Betting Website Development
                </h2>
              </div>
              <div className="text-base text-black">
                <ul className="space-y-1 ">
                  {myList4.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <span>
                        <RxDot size={30} />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title=" Important Features Of Our Sports Betting Website"
                alt=" Important Features Of Our Sports Betting Website"
                src="/images/important-feature-of-sports-betting-website.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <TalkExpert />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                {Modus?.title}
              </h2>
              <p className="w-5/6 py-6 mx-auto text-base font-medium text-center text-black">
                {Modus?.decs}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {ModusOperandi.map((elem: any) => {
                const { title, num, bg, img } = elem;
                return (
                  <div
                    key={num}
                    style={{ backgroundColor: `${bg}` }}
                    className="flex items-center justify-start p-4 space-x-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-12 h-12">
                      <Image
                        className="object-cover"
                        src={img}
                        alt={title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="flex flex-col-reverse items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-20 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                className="rounded-md"
                title="  Sports Betting Website Development Process"
                alt="  Sports Betting Website Development Process"
                src="/images/sports-betting-website-development-process.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Sports Betting Website Development Process
                </h2>
              </div>
              <div className="text-base text-black">
                <ul>
                  {myList5.map((item, index) => (
                    <li className="flex items-top" key={index}>
                      <span>
                        <RxDot size={30} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5 lg:py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-left">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Sports Betting Website Development Solutions
                </h2>
              </div>
              <div className="grid gap-6 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Jump.map((elem) => {
                  const {
                    title,
                    icon,
                    decs,
                    decs1,
                    decs2,
                    decs3,
                    decs4,
                    decs5,
                    num,
                  } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold ">{title}</h3>
                        <p className="break-all text-slate-800 ">{decs}</p>
                        <p className="break-all text-slate-800 ">{decs1}</p>
                        <p className="break-all text-slate-800 ">{decs2}</p>
                        <p className="break-all text-slate-800 ">{decs3}</p>
                        <p className="break-all text-slate-800 ">{decs4}</p>
                        <p className="break-all text-slate-800 ">{decs5}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="py-10 lg:py-20">
          <div className="lg:flex  items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-20 md:space-y-0">
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Why Choose Comfygen as Sports Betting Website Development
                  Company in Jaipur, India
                </h2>
                <p className="text-base text-black">
                  Providing out-of-the-box of sports betting website development
                  solutions to clients around the globe, Comfygen build
                  top-rated sports betting websites. Our Online Sports betting
                  website engineering services are either customisable, ready to
                  launch, or even third-party, based on our years of experience
                  in the sports betting website development industry. Everything
                  under one roof, from payment gateway integration to social
                  media, is covered by us.
                </p>
              </div>
              <div className="text-base text-black">
                <ul>
                  {myList6.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <span>
                        <RxDot size={30} />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md"
                title="Why Choose us as Sports Betting Website Development Company in Jaipur, India"
                alt="Why Choose us as Sports Betting Website Development Company in Jaipur, India"
                src="/img/why-choose-us-sports-betting-website-development-company-in-jaipur.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className=" py-4  space-y-4 lg:w-4/6 mx-auto">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
                Why Choose us as Sports Betting Website Development Company
              </h2>
            </div>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              {Development1.map((elem) => {
                const { title, num } = elem;
                return (
                  <div key={num} className="">
                    <div
                      className="flex justify-start items-center rounded-full space-x-3 py-3 px-3"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-center font-semibold bg-white  rounded-full shadow-xl h-14 w-14">
                        <p className="text-xl text-right ">{num}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-mobile-app-developer.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
                Technology Stack
              </h2>
              <p>
                Sports betting websites typically use a combination of
                technology stacks and programming languages to build and operate
                their platforms. However,Comfygen can provide you with a general
                overview of the common technologies and languages often used in
                the development of sports betting websites:
              </p>
            </div>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              <div className="stack">
                <div className="label-bg js">
                  <span className="label js">FrontEnd</span>
                </div>
                <div className="tech">Next js</div>
                <div className="tech">Angular js</div>
                <div className="tech">React js</div>
                <div className="tech">Vue js</div>
              </div>
              <div className="stack">
                <div className="label-bg css">
                  <span className="label css">BackEnd</span>
                </div>
                <div className="tech">Python</div>
                <div className="tech">Java</div>
                <div className="tech">PHP</div>
                <div className="tech">Node.js</div>
              </div>
              <div className="stack js">
                <div className="label-bg build">
                  <span className="label css">DataBase</span>
                </div>
                <div className="tech">MongoDB</div>
                <div className="tech">MySQL</div>
                <div className="tech">PostgreSQL</div>
                <div className="tech">NoSQL</div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={Frequently}
          title=" Sports Betting Website Development"
        />
        <BlogSection initialData={initialData} />
      </div>
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
