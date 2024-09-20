import Image from "next/image";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdAdd,
  MdOutlineAdminPanelSettings,
  MdOutlineQuickreply,
  MdRemove,
} from "react-icons/md";
import "aos/dist/aos.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineSecurityScan } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { RxDot } from "react-icons/rx";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import { SiBmcsoftware } from "react-icons/si";
import { TiDeviceDesktop } from "react-icons/ti";
import Panels from "../../components/Panels";
import Link from "next/link";
import JSON_DATA from "./json/sportsbettingsoftware.json";

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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "1",
    icon: <FaCreativeCommonsShare className="text-blue-400" size={50} />,
    decs: "As a result of our no-revenue-sharing policy, we have increased our client’s profits, revenue share, and market reach. A share of the revenue is not requested from clients by Comfygen.",
    title: "Zero Revenue Share",
  },
  {
    num: "2",
    icon: <MdOutlineAdminPanelSettings className="text-blue-400" size={50} />,
    decs: "Users will love our easy-to-navigate, easy-to-access, and easy-to-browse panels. As well as offering the best admin panels, we also offer one-click management of all activities.",
    title: "An amazing user and admin panel",
  },
  {
    num: "3",
    icon: <MdOutlineQuickreply className="text-blue-400" size={50} />,
    decs: "With Comfygen’s innovative approaches to software development, the client’s business is able to reach a broader audience and increase its market share.",
    title: "Time-to-market is quick",
  },
  {
    num: "4",
    icon: <SiBmcsoftware className="text-blue-400" size={50} />,
    decs: "Clients can customize the Sports Betting software according to their business requirements based on the features and functionality they want to incorporate.",
    title: "Software that is 100% customizable",
  },
  {
    num: "5",
    icon: <TiDeviceDesktop className="text-blue-400" size={50} />,
    decs: "Our Sports Betting software is compatible with every smartphone and mobile device, since most people spend their time on their phones.",
    title: "Responsive to mobile devices",
  },
  {
    num: "6",
    icon: <RiSecurePaymentLine className="text-blue-400" size={50} />,
    decs: "We offer a highly reliable and safe Sports Betting software. Data and information belonging to users are kept secure from unauthorized access.",
    title: "Exceptionally secure",
  },
  {
    num: "7",
    icon: <BiSupport className="text-blue-400" size={50} />,
    decs: "Comfygen offers all-time assistance benefits that include post-launch, marketing, upgrades, renovations, and many more without hassles to its clients.",
    title: "Support & Configuration Unlimited",
  },
  {
    num: "8",
    icon: <AiOutlineSecurityScan className="text-blue-400" size={50} />,
    decs: "With our Sports Betting solution, your applications, data, and user information are fully secured and encrypted.",
    title: "Security of data applications",
  },
];

const myList4 = [
  <Link href="/sports-betting-app-development" passHref={true}>
    Sports Betting App Development{" "}
  </Link>,
  <Link href="/" passHref={true}>
    Sports Betting Software Development{" "}
  </Link>,
  <Link href="/cricket-live-line-api" passHref={true}>
    Cricket Live Line API Provider{" "}
  </Link>,
  <Link href="/sports-betting-website-development" passHref={true}>
    Sports Betting Website Development
  </Link>,
  <Link href="/live-casino-game-api-integration" passHref={true}>
    Live Casino API Integration
  </Link>,
  <Link href="/" passHref={true}>
    White Label Sports betting platform
  </Link>,
];

export default function Sports(props) {
  const [currentCount, setCurrentCount] = useState("");
  const [currentCount1, setCurrentCount1] = useState("");
  let { initialData } = props;

  let {
    Modus,
    Panelheader,
    Hire,
    myList,
    myList5,
    myList6,
    Frequently,
    Development,
    Development1,
    popular,
    popular1,
    featured,
    featured1,
    currency,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Best Sports Betting Software Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Transform your sports betting venture with Comfygen, the premier sports betting software development company In India & The USA. Elevate your game with cutting-edge solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/sports-betting-software-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="Sports Betting Software" />
        <meta
          property="og:title"
          content="Best Sports Betting Software Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Transform your sports betting venture with Comfygen, the premier sports betting software development company In Canada & The USA. Elevate your game with cutting-edge solutions."
        />
        <meta
          property="og:facebook_description"
          content="Comfygen provides the best sports betting software development company in India. Our team of software programmers for multiple games like cricket, baseball, soccer, custom sports, football etc."
        />
        <meta
          property="og:twitter_description"
          content="Comfygen provides the best sports betting software development services. Our team of software programmers for multiple games like cricket, baseball, soccer, custom sports, football etc"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/sports-betting-software-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="og:facebook_title"
          content="Top Sports Betting Software Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_title"
          content="Best Sports Betting Software Development Company in India | Comfygen"
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
        <meta
          property="schema:type"
          content="Top-notch Sports Betting Software Development Company | Comfygen"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta
          name="abstract"
          content=" Sports Betting Software Development Company"
        />
        <meta
          name="summary"
          content="Comfygen is the best sports betting software development Industry in India."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Sports Software Development Company"
          content="Comfygen is best sports betting software development company in jaipur, India. Our Sports Betting Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Sports Betting Software" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Sports Betting Software Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <meta charSet="UTF-8" />
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
                heading="Sports Betting Software Development Company "
                ptag="Grow your business with the help of an experienced Sports betting software provider In Canada & The USA! Comfygen is best sports betting software development company in Jaipur. Our sports betting development expertise programmers develop international level betting software for web app and windows. We develop White Label or Custom sports betting software development services that you own!"
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="  Best Sports Betting Software Development Firm"
          ptag="Comfygen helps startups and established businesses provide inclusive and innovative sports betting software. Sports Betting Software Development Company make it easy for online gamblers to control their settings, update account details, and much more things. Our top priority is to create mobile-friendly sports betting software and along with website platforms is indeed a valuable goal."
          ptag1=" Comfygen has hands-on delivery in developing powerful sports betting software that are proficient in cricket betting software development,  horse racing software development, baseball betting software development, soccer betting software development, custom sports betting Software development, and football betting software development services."
          ptag2=" Comfygen Sports Betting Software Firm are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms. With great knowledge and industry experience, the entire team of programmers works day in and day out on your online sports betting software that includes a project manager, delivery manager, Android/iOS developers, Quality Analyst Experts, Back-End Developers, and UX/UI designers. If you want to enter the sports betting industry or organization too and have an idea, just let us know about your project, requirement, and we will turn your idea into reality"
          imgSrc="/img/explore-success-with-our-mobile-app-development-agency.webp"
          imgW={564}
          imgH={559}
          altTag="  Best Sports Betting Software Development Firm"
        />

        <ContactFromCenter />
        <section className="py-10 lg:py-20 bg-slate-200">
          <div className="flex flex-col-reverse items-center  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-20 md:space-y-0">
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Top Sports Betting Software Development Solutions
                </h2>
                <p className="text-base text-slate-800">
                  If you require Sports Betting Software Development, think
                  about Comfygen. We would love to collaborate with you to
                  develop a cutting-edge software solution for sports betting.
                  Our team of talented developers and sector specialists will
                  collaborate closely with you to comprehend your needs and
                  provide a tailored software solution that supports your
                  company's goals.Hiring Comfygen for your Sports Betting
                  Software Development gives you access to our knowledge of the
                  gambling sector and our dedication to providing top-notch
                  products.
                </p>
              </div>
              <div className="text-base text-black">
                <ul className="space-y-4">
                  {myList4.map((item, index) => (
                    <li
                      className="flex items-center space-x-3 text-[#4f4f50]"
                      key={index}
                    >
                      <AiOutlineCheck className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  target="_blank"
                  passHref={true}
                >
                  <button
                    type="button"
                    className="text-blue-600 bg-white px-8 py-3 text-lg rounded-full justify-center items-center space-x-1 w-fit overflow-hidden relative inline-flex group cursor-pointer"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                    Want To Get The Best Solution? Connect Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Sports Betting Software development Solutions"
                alt="Sports Betting Software development Solutions"
                src="/img/sports-betting-software-solutions.webp"
                height={2000}
                width={1337}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Benefits Of{" "}
                  <span className="text-blue-600">
                    Our Sports Betting Software
                  </span>{" "}
                  Development Firm
                </h2>
                <p className="text-base text-slate-800">
                  Comfygen as a leading sports betting software development firm
                  provides a hassle-free experience with easy navigation and a
                  wide variety of betting software options. Our software offers
                  a secure and reliable platform with secure transactions and
                  account management. The associated sports betting software
                  develpment system allows users to place bets quickly and
                  easily, with real-time updates to keep track of their bets.
                </p>
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
        <div className="py-10 lg:py-20 bg-gray-100">
          <section className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto lg:flex space-x-0 lg:space-x-10 md:space-y-0">
            <div className="flex justify-center 2xl:justify-start w-full lg:w-1/2 pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                alt="Sports Betting Software Development Services"
                src="/img/sports-betting-software-development-services.webp"
                width={593}
                height={570}
                loader={uploadcareLoader}
                loading="eager"
                priority
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <div className="space-y-4">
                  <p className="text-xl font-light text-blue-600 ">
                    Sports Betting Software Development Company{" "}
                  </p>
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
                    Sports Betting Software Development Services
                  </h2>
                </div>
                <p className="text-base text-black">
                  Comfygen offers a wide range of sports betting software
                  development services to its clients and customers. In order
                  for businesses to get the most competitive advantage, Comfygen
                  offers the most exclusive and unique custom betting software
                  development services. In addition to bespoke development
                  assistance, Comfygen's online sports betting software
                  providers punters with unique features such as odds
                  management, custom currency support, risk management, live
                  tracking, live chat, and much more.
                </p>
                <ul className="list-disc px-4">
                  <li>Integration Services</li>
                  <li>betting App development</li>
                  <li>QA and Testing Services</li>
                  <li>Betting UI/UX Design</li>
                  <li>DevOps Services</li>
                  <li>Application Maintenance</li>
                </ul>
                <div className="flex justify-start items-center p-4 space-x-6 bg-white rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RiCustomerServiceLine className=" text-[2.5rem] lg:text-[3.5rem] text-blue-500 " />
                  </div>
                  <div className="">
                    <h3 className="text-[#0E1F51] text-lg font-bold ">
                      Get Instant Professional Advice
                    </h3>
                    <p className="text-sm">
                      Ready to Help :
                      <span className="font-bold text-blue-600">
                        <a href="tel:9587867258"> +91 9587867258</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                {Modus?.title}
              </h2>
              <p className="w-5/6 py-6 mx-auto text-base font-medium text-center text-black">
                {Modus?.decs}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Development.map((elem: any) => {
                const { title, num, bg, img } = elem;
                return (
                  <div key={num}>
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="flex items-center justify-start p-4 space-x-4 rounded-lg"
                    >
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Panels Panelheader={Panelheader} />
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
        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Hold Up Sports Betting Views & Odd Mangement
                </h2>
              </div>
              <p className="text-base text-black md:w-[85%]">
                There has been an increase in the popularity of Sports Betting
                industry. As a result, Sports Betting Software Development
                activities are increasingly managed through the latest
                technology. By providing an excellent betting software for
                cricket, horse racing software, baseball betting software,
                soccer betting software, custom sports betting software, and
                football betting software the bookies can provide remarkable
                services to their customers.
              </p>
              <p className="text-base text-black md:w-[85%]">
                With Comfygen's exceptional features, such as anti-risks systems
                and odds management, your software stands out among your
                competitors.
              </p>
            </div>
            <div className="flex justify-center md:w-[70%] lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title=" Sports Betting App Development"
                alt=" Sports Betting App Development"
                src="/img/sports-betting-app-development-company.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100 space-y-4 ">
          <div className="flex flex-col justify-center text-center  mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  ">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
              Popular Sports{" "}
              <span className="text-blue-600">betting software Comfygen</span>{" "}
              Developed
            </h2>
            <p className="text-base text-slate-800">
              Comfygen is a popular sports betting software developed to provide
              an easy-to-use platform for sports bettors. It offers a wide
              selection of sports and betting markets, along with features such
              as in-play betting, cashout, and live streaming. Additionally,
              Comfygen offers multiple payment methods, making it an ideal
              choice for both novice and experienced sports bettors. With
              Comfygen, you can develop custom sports betting software for a
              wide range of sports, including:
            </p>
          </div>
          <div className="  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white p-10">
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {popular.map((elem: any) => {
                const { title, num, bg, img, url } = elem;
                return (
                  <div key={num}>
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="flex items-center justify-start p-4 space-x-4 rounded-lg"
                    >
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="mx-auto space-y-10  2xl:w-9/12 xl:w-5/6 w-11/12 md:space-x-10 md:space-y-0 py-20 bg-white">
          <div className="flex flex-col justify-center text-center ">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Important Features Of Our{" "}
              <span className="text-blue-600"> Sports Betting Software</span>{" "}
              Development
            </h2>
            <p className="text-base text-slate-800">
              Our sports betting software development offers an array of
              features that make it easy for users to place and track bets.
              These features include a comprehensive betting market, automated
              real-time calculator, live streaming, in-play betting, cashout,
              and a variety of payment methods. Additionally, our software is
              designed to provide a secure and reliable betting experience.
            </p>
          </div>
          <div className="md:flex items-center md:space-x-10 md:space-y-0 space-y-6 py-6">
            <div className="w-full space-y-4">
              {featured.map((elem: any, index: any) => {
                const { title, num, desc } = elem;
                return (
                  <div
                    className="p-4 mt-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-lg cursor-pointer w-full"
                    onClick={() =>
                      setCurrentCount(currentCount === index ? false : index)
                    }
                  >
                    <div
                      key={num}
                      className="flex justify-between w-full text-base font-medium text-left text-white rounded-lg md:text-lg "
                    >
                      <span>{title}</span>
                      {currentCount === index ? (
                        <MdRemove size={26} />
                      ) : (
                        <MdAdd size={26} />
                      )}
                    </div>
                    <div
                      className={
                        currentCount === index
                          ? "pt-4 text-sm text-white"
                          : "pt-4 text-sm text-white hidden"
                      }
                    >
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full space-y-4">
              {featured1.map((elem: any, index: any) => {
                const { title, num, desc } = elem;
                return (
                  <div
                    className="p-4 mt-2 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-lg cursor-pointer w-full"
                    onClick={() =>
                      setCurrentCount1(currentCount1 === index ? false : index)
                    }
                  >
                    <div
                      key={num}
                      className="flex justify-between w-full text-base font-medium text-left text-white  rounded-lg md:text-lg "
                    >
                      <span>{title}</span>
                      {currentCount === index ? (
                        <MdRemove size={26} />
                      ) : (
                        <MdAdd size={26} />
                      )}
                    </div>
                    <div
                      className={
                        currentCount1 === index
                          ? "pt-4 text-sm text-white"
                          : "pt-4 text-sm text-white hidden"
                      }
                    >
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <section className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          <div className="flex flex-col justify-center text-center ">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Comfygen Provides{" "}
              <span className="text-blue-600">
                Fantasy Sports Betting Software{" "}
              </span>{" "}
              Support
            </h2>
            <p className="text-base text-slate-800">
              Comfygen as a leading sports betting software development company
              in India, we offers top-notch support for their sports betting
              software, ensuring users receive timely assistance whenever
              needed. Their Proficent knowledgeable support team is
              well-equipped to handle diverse issues and provide effective
              solutions. With Comfygen's reliable support, users can have peace
              of mind and focus on their betting experience.
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {popular1.map((elem: any) => {
              const { title, num, bg, img, url } = elem;
              return (
                <div key={num}>
                  <Link href={url} passHref={true}>
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="flex items-center justify-start p-4 space-x-4 rounded-lg"
                    >
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <TalkExpert />

        <section className="py-10 lg:py-20">
          <div className="lg:flex  items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-20 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md"
                title="Sports Betting Software service provider"
                alt="Sports Betting Software service provider"
                src="/img/sports-betting-software-service-provider.webp"
                height={2000}
                width={1337}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Why Choose Comfygen as White level Sports Betting Software
                  Development Provider
                </h2>
                <p className="text-base text-black">
                  If you require a White-level Sports Betting Software
                  Development company, think about Comfygen. We would love to
                  collaborate with you to develop cutting-edge sports betting
                  software for sports betting. Our team of talented sports
                  betting software programmers and sector specialists will
                  collaborate closely with you to comprehend your needs and
                  provide a tailored sports betting software solution that
                  supports your company's goals. Hiring Comfygen as your
                  White-level Sports Betting Software Development Company gives
                  you access to our knowledge of the gambling sector and our
                  dedication to providing top-notch sports betting products.
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
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="flex flex-col-reverse items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-20 md:space-y-0">
            <div className="w-full space-y-6 text-left ">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Sports Betting Software Development Firm
                </h2>
              </div>
              <p className="text-base text-black">
                We offer a 100% cutting-edge sports betting software services
                combined with the features you choose. You can create a bespoke
                betting platform exactly the way you want it with seamless
                customization options.
              </p>
              <div className="text-base text-black">
                <ul>
                  {myList5.map((item, index) => (
                    <li className="flex items-top" key={index}>
                      <span>
                        <RxDot size={30} />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                className="rounded-md"
                title=" Sports Betting Software Development Solutions"
                alt=" Sports Betting Software Development Solutions"
                src="/img/sports-betting-software.webp"
                height={500}
                width={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <TalkExpert />
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:flex lg:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start lg:pb-0 pb-6">
            <Image
              src="/images/important-feature-of-our-sports-betting-software.webp"
              alt="Important Features Of Our Sports Betting Software"
              className="rounded-lg"
              height={450}
              width={450}
            />
          </div>
          <div className="w-full space-y-4 text-center lg:text-left  p-6 rounded-3xl">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Why Choose Comfygen us as Sports Betting Software service provider{" "}
            </h2>
            <p className="text-base text-slate-800">
              Comfygen as a Leading Sports Betting Software Development Firm to
              as clients who want to modernise the betting industry. For over 7+
              years, we have been developing robust, scalable, and secure
              iGaming software provider. With some of the most advanced and
              emerging technologies, we are a company you can trust to deliver
              quality betting software.
            </p>
          </div>
        </section>
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-14">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Comfygen Sports{" "}
                <span className="text-blue-600">
                  Betting Software Development
                </span>{" "}
                Technology
              </h2>
            </div>
            <section className="items-center space-y-10 md:space-y-0 md:px-0 px-4">
              <div className="grid grid-cols-2 gap-4  md:grid-cols-3 lg:gap-6">
                {currency.map((item, index) => (
                  <a href={item.url}>
                    <div
                      key={index}
                      className={`space-y-4 rounded-3xl flex flex-col justify-between p-3 border transition-all shadow-xl duration-150 backdrop-blur-xl ${item.color.replace(/\s+/g, "-")}`}
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="mx-auto"
                        width={80}
                        height={60}
                      />
                      <h3 className="text-center font-semibold text-lg text-slate-800 capitalize">
                        {item.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </section>
        </div>

        <section className="py-10 bg-white">
          <div className="w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className=" py-4  space-y-4 lg:w-4/6 mx-auto">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center ">
                What More Can You Look For At Comfygen?{" "}
              </h2>
            </div>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              {Development1.map((elem) => {
                const { title, num, url } = elem;
                return (
                  <div key={num} className="">
                    <Link href={url} passHref={true}>
                      <div
                        className="flex justify-start items-center rounded-full space-x-3 py-3 px-3 group"
                        style={{ backgroundColor: elem.bg }}
                      >
                        <div className="flex items-center justify-center font-semibold bg-white  rounded-full shadow-xl h-14 w-14">
                          <p className="text-xl text-right  group-hover:text-blue-600">
                            {num}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black group-hover:text-blue-600">
                            {title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <FaqSection
          faqData={Frequently}
          title=" Sports Betting Software Development"
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
