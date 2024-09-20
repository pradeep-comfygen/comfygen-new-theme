import React, { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { RiCustomerServiceLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { VscCircleFilled } from "react-icons/vsc";
import styles from "./styles.module.css";
import JSON_DATA from "./json/sportsbettingapp.json";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const SocialTab = dynamic(() => import("./components/SocialTab"), {
  loading: () => <p>Loading...</p>,
});
const GetInTouch = dynamic(() => import("./components/GetInTouch"), {
  loading: () => <p>Loading...</p>,
});
const Tech = dynamic(() => import("./components/Tech"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Fantasy(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;
  let {
    Service,
    Frequently,
    myList,
    myList1,
    myList2,
    myList3,
    myList4,
    myList5,
    myList6,
    myList7,
    Hire,
    Bettingappservice,
    Bettingappservice2,
    TypesCrypto,
    WhyChoosed,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Best Sports Betting App Development Company In India | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a best Sports Betting App Development Company In India. Trust our certified developers for tailor-made sports betting solutions. Hire us for top-notch betting app development"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/sports-betting-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Sports Betting App Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is a best Sports Betting App Development Company In Canada & The USA. Trust our certified developers for tailor-made sports betting solutions. Hire us for top-notch betting app development"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/sports-betting-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Finest Sports Betting App Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is a leading Sports Betting App Development Company. Hire sports Betting App Engineers for Cricket, Hockey and Football Betting Apps etc."
        />
        <meta
          property="og:twitter_title"
          content="Top-class Sports Betting App Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is a leading Sports Betting App Development Company. Hire sports Betting App Engineers for Cricket, Hockey and Football Betting Apps etc."
        />
        <meta
          property="schema:type"
          content="Best Sports Betting App Development Company, Sports Betting App Solution"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Sports Betting App Development Organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of Finest Online Sports Betting App Development Company in India, providing top- class Sports Betting App Development Services to help your online Sports Betting App venture reach new heights."
        />
        <meta name="author" content="Mr. Saddam Hussen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cricket Betting Software Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Sports Betting App Development Company"
          content="Comfygen provides feature-rich sports betting app development solutions in India for the sports betting businesses. Hire a sports betting app development company for your next project."
        />
        <meta
          name="category"
          content="Leading Sports Betting App Devlopment Company"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Sports Betting App Devlopment Organization"
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
        <meta property="og:type" content="article" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Sports Betting App Development Company"
                ptag="Looking forward to introducing a customized, tech-enabled, and secured sports betting app? Comfygen, a leading sports betting app development company In Canada & The USA, is excited to hear from you! We are a team of certified game developers who are well-equipped to take your sports betting app development project onboard."
                ptag1="Share your project requirements to develop sports betting applications and let our experts convert your idea into a growth-driven business opportunity. With our best sports app development solutions, let users get hands-on experience with future-ready and high-quality sports betting application development services."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/top-rated-sports-betting-app-development-company.webp"
                alt="Top-Rated Sports Betting App Development Company"
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
            <div className="w-full space-y-2 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Top-Rated Sports Betting App Development Company
              </h2>
              <p>
                Want to build a user-friendly Sports betting application? Look
                no further we Comfygen is the{" "}
                <b>leading sports betting app development company</b> in Jaipur,
                India. We know what drives the bookmakers and punters in the
                sports betting industry, and thus we come up with sports betting
                apps that are built with cutting-edge frameworks, latest
                technology stacks, and 3rd party sports betting APIs.{" "}
              </p>
              <p className="text-base text-black text-justify">
                We are experienced in developing powerful Online sports betting
                app development for sports like Kabaddi betting app development,
                Cricket betting app development, Boxing betting app development,
                Golf betting app development, Soccer betting app development,
                Hockey betting app development, Basketball betting app
                development and Tennis betting app development. The apps we
                develop are cross-platform friendly & run efficiently on both
                <a
                  href="/android-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  {" "}
                  Android app development{" "}
                </a>{" "}
                and{" "}
                <a
                  href="/ios-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  {" "}
                  iOS app development{" "}
                </a>
                platforms.
              </p>
              <div className="flex justify-start items-center p-4 space-x-6 bg-gray-200 rounded-lg">
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
          </section>
        </div>
        <ContactFromCenter />

        <div className="py-10 bg-[#F3F4F6]">
          <section className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto space-y-4">
            <div className="flex flex-col justify-center  mx-auto text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                {" "}
                Maximize Your Success in{" "}
                <span className="text-blue-500">
                  {" "}
                  The Sports Betting App development Industry With Comfygen{" "}
                </span>{" "}
                Sports Betting App Development Solutions{" "}
              </h2>
              <p className="text-base text-slate-800">
                As a leading sports betting app development solution provider,
                we are driven by an experienced industry-certified development
                team. No matter how complex the project is, we can deliver fully
                functional sports betting app development.{" "}
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {Service.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p
                      className="font-medium text-left text-black break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton
                url={"/contact-us"}
                title={"NEED ASSISTANCE WITH YOUR PROJECT"}
              />
            </div>
          </section>
        </div>
        <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
              <div>
                <div className="flex flex-col space-y-2">
                  <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                    Future Trends of Sports Betting App Development
                  </h2>
                  <p>
                    As technology continues to evolveand get smarter, the
                    landscape of sports betting app development is poised for
                    exciting advancements and upgrades.{" "}
                  </p>
                  <div>
                    <h3 className=" text-1xl lg:text-2xl font-bold text-[#0E1F51]">
                      Here are some future trends that are expected to shape the
                      industry:
                    </h3>
                  </div>
                  <div className="flex justify-start items-center mt-5">
                    <ConnectWithExpertButton
                      url={"https://api.whatsapp.com/send?phone=919587867258"}
                      title={"Connect with IT Experts"}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[500px] overflow-auto `}
              >
                {WhyChoosed.map((elem) => {
                  return (
                    <div
                      key={elem.num}
                      className="group border-b-2 border-[#0E1F51] p-6 space-y-4 transition-all duration-200  cursor-pointer "
                      style={{
                        backgroundImage: `url("/img/decentralized-exchange-img.webp")`,
                      }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center gap-3 ">
                          <Image
                            src={elem.img}
                            alt={elem.title}
                            width={40}
                            height={40}
                          />
                          <h3 className="text-xl font-semibold ">
                            {elem.title}
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p
                          className=" text-slate-900"
                          dangerouslySetInnerHTML={{ __html: elem.decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-3 lg:py-10 bg-[#F3F4F6]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                  Sports we Offer{" "}
                  <span className="text-blue-600">
                    {" "}
                    Betting Application Development Services
                  </span>{" "}
                  at Comfygen
                </h2>
                <p className="text-base">
                  Comfygen offers top-notch{" "}
                  <b>on-demand betting app development solutions</b> for
                  multiple sports.
                </p>
              </div>
              <div className="grid gap-4 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-8">
                {Bettingappservice.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6 "
                    >
                      <Image src={img} alt={title} height={500} width={500} />
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#0E1F51]">
                          {title}{" "}
                        </h3>
                        <div
                          className={`h-40 overflow-y-auto  ${styles.cardbar}`}
                        >
                          <p className="text-base text-black text-justify tracking-tight  pr-4">
                            {decs}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {showContent ? (
                  <>
                    {Bettingappservice2.map((elem) => {
                      const { title, img, decs, num, ...items } = elem;
                      return (
                        <div
                          key={num}
                          className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6 "
                        >
                          <Image
                            src={img}
                            alt={title}
                            height={500}
                            width={500}
                          />
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#0E1F51]">
                              {title}{" "}
                            </h3>
                            <div
                              className={`h-40 overflow-y-auto  ${styles.cardbar}`}
                            >
                              <p className="text-base text-black text-justify tracking-tight  pr-4">
                                {decs}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {showContent ? (
                <div className="flex justify-center items-center">
                  <button
                    className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                    onClick={() => setShowContent(!showContent)}
                  >
                    Load Less
                  </button>
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <button
                    className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                    onClick={() => setShowContent(!showContent)}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row space-y-10  md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-4 text-center md:text-left  p-6 rounded-3xl">
            <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
              Top-Tier Features of Comfygen Sports Betting App Development
            </h2>
            <p className="text-base text-left text-black/80">
              In the online betting app development industry, sports fans place
              bets to earn a great amount of real money while having fun. In
              order to provide the best sports betting app development benefits
              to your business, we develop robust and scalable sports betting
              app development services and solutions. Providing stand-out sports
              betting app development solutions to our clients is our specialty
              because our professional team of Betting app Programmers is
              skilled in the latest and most advanced technologies. In addition
              to providing white label sports betting application development
              services, we ensure that our providers offer:
            </p>
            <ul className="space-y-2 text-left">
              {myList3.map((item, index) => (
                <li className="flex text-base text-black/80" key={index}>
                  <span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <VscCircleFilled className="w-4 h-4" />
                  </span>
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center w-full h lg:justify-end lg:pb-0 pb-6">
            <Image
              src="/img/top-tier-features-of-comfygen-sports-betting-app-development.webp"
              alt="BFeatures of Sports betting Application"
              className="rounded-lg"
              height={500}
              width={500}
            />
          </div>
        </section>

        <Advice
          head="Sports Betting Software Development"
          heading="What Can Comfygen Provide You In Our Sports Betting Applications Development Platform?"
          ptag="A comprehensive and innovative sports betting app development services is offered by Comfygen to startups as well as established businesses. Online wagers can manage their settings, update their account details, and more services with sports betting applications. To make sports betting easier for online wagers and bettors, we create user-friendly sports betting app for mobiles and websites. We have a rich experience of developing top-notch Fantasy cricket betting app development, custom sports betting applications, soccer betting apps, horse racing match betting applications, and much more with our knowledge and industry experience."
          imgSrc="/img/sports-betting.webp"
          imgW={533}
          imgH={506}
          altTag="Sports Betting Software Development"
        />

        <Tech />
        <section className="bg-slate-200">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10 space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] ">
                Best Sports{" "}
                <span className="text-blue-600"> Betting App Development </span>{" "}
                Planning{" "}
              </h2>
              <p className="text-base text-slate-800">
                When planning for the best sports betting app development, it is
                important to consider the features and functionalities that are
                necessary for a successful app. From anti-risks systems and odds
                management, to a satisfaction guarantee. Comfygen provides the
                tools needed to create a successful sports betting app.
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
              {TypesCrypto.map((elem) => {
                return (
                  <div
                    key={elem.num}
                    className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 border"
                  >
                    <div className="w-20 h-20 bg-slate-200 rounded-[17px] flex justify-center items-center border border-[#0000001A]">
                      <span className="text-blue-600 text-3xl font-bold">
                        {" "}
                        {elem.num}{" "}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                      {elem.title}
                    </h3>
                    <p
                      className="font-medium text-black break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.desc }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="py-5 lg:py-10  space-y-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center">
              <h3 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] text-center">
                Sports Betting Mobile App{" "}
                <span className="text-blue-600">Development - Panels</span>
              </h3>
              <div className="space-y-2">
                <p className="text-base">
                  We provide our clients with top-of-the-line sports betting app
                  development services. In order to make a strong reputation in
                  the market of sports betting, we provide the best-in-class
                  sports betting app development solutions that completely meet
                  the needs of every business.
                </p>
                <p className="text-base">
                  Any successful sports betting application will include two
                  main components: the admin panel and the user panel.
                </p>
                <p className="text-base">
                  At Comfygen, you get access to the advanced range of
                  innovative mobile wallet app development solutions including
                  the Android e-wallet app, iPhone e-wallet app, and other{" "}
                  <a
                    href="/crypto-wallet-development"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    e-wallet solutions
                  </a>
                  , towards ensuring the end-users with the overall safety and
                  convenience of making instant payments through the app
                </p>
              </div>
            </div>
            <div className="grid  grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 py-6">
              <div className="bg-[#F45F391A] p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                  {" "}
                  Player Player Panel
                </h3>
                <div className="flex justify-start">
                  <ul className="px-8 space-y-5 list-disc">
                    {myList2.map((item, index) => (
                      <li key={index}>{item} </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-green-500/10 p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                  Admin Panel
                </h3>
                <div className="flex justify-start">
                  <ul className="px-8 space-y-5 list-disc">
                    {myList1.map((item, index) => (
                      <li key={index}>{item} </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className="flex px-20 text-2xl font-bold text-black md:px-2 md:justify-start">
                  Agent Panel
                </h3>
                <div className="flex justify-start">
                  <ul className="px-8 space-y-5 list-disc">
                    {myList4.map((item, index) => (
                      <li key={index}>{item} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SocialTab />

        <div
          className="bg-center bg-no-repeat bg-cover lazyload py-10 lg:py-20"
          style={{ backgroundImage: `url("/img/hire-sport-betting.webp")` }}
        >
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#522FFF]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>

        <section className="items-center  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start lg:pb-0 pb-6">
            <Image
              src="/img/our-process.webp"
              alt="Our Process of Sports Betting App Development"
              className="rounded-lg"
              height={450}
              width={450}
            />
          </div>
          <div className="w-full space-y-4 text-center lg:text-left bg-green-500/10 p-6 rounded-3xl">
            <p>Our Process of Sports Betting App Development</p>
            <h2 className="lg:text-[32px] text-[20px] font-semibold leading-6 lg:leading-10 text-black">
              Our Process Of Sports Betting Mobile App Development
            </h2>
            <p className="text-base text-left text-black/80">
              We strive to deliver revenue-driven sports betting software at an
              affordable cost. Here’s an approach followed by Comfygen.
            </p>
            <ul className="space-y-2">
              {myList5.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <VscCircleFilled className="w-4 h-4" />
                  </span>
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0 flex flex-col-reverse lg:flex-row">
          <div className="w-full space-y-4 text-center md:text-left bg-[#E8F3FE] p-6 rounded-3xl">
            <h2 className="lg:text-[32px] text-[20px] font-semibold leading-6 lg:leading-10 text-black">
              Sports Betting App Development Cost
            </h2>
            <p className="text-base text-left text-black/80">
              Depending on the rate and location of the software engineers, the
              price will vary:
            </p>
            <ul className="space-y-2 text-black/80 text-left">
              {myList6.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <VscCircleFilled className="w-4 h-4" />
                  </span>
                  {item}{" "}
                </li>
              ))}
            </ul>
            <p className="text-base text-left text-black/80">
              Sports Betting App Development Cost
            </p>
          </div>
          <div className="flex justify-center w-full lg:justify-end lg:pb-0 pb-6">
            <Image
              src="/img/sport-betting.webp"
              alt="Sports Betting App Development Cost"
              className="rounded-lg"
              height={450}
              width={450}
            />
          </div>
        </section>

        <section className="items-center  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-4 bg-green-500/10 p-6 rounded-3xl">
            <h2 className="lg:text-[32px] text-[20px] font-semibold leading-6 lg:leading-10 text-black">
              Why Choose Comfygen As Your Sports Betting App Development
              Partner?{" "}
            </h2>
            <p className="text-base text-left text-black/80">
              We at Comfygen offer a comprehensive platform that is reliable,
              trusted, responsive, attractive, and fast. This is not it! So,
              take a look at some of the advantages of choosing us for your{" "}
              <b>sportsbet app</b> development:
            </p>
            <ul className="grid md:grid-cols-3 gap-6 ">
              {myList7.map((item, index) => (
                <li
                  className="flex border p-6 bg-white rounded font-bold"
                  key={index}
                >
                  <span className="pr-2 text-[#4f4f50] ">
                    <VscCircleFilled size={25} />
                  </span>
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <GetInTouch />
        <FaqSection
          faqData={Frequently}
          title="Sports Betting App Development"
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
