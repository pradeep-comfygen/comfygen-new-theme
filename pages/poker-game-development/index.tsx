import React, { useState } from "react";
import { MdOutlineInsertInvitation } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import { BsCollectionPlay } from "react-icons/bs";
import {
  GiBulletImpacts,
  GiPlayerNext,
  GiPokerHand,
  GiThreeFriends,
} from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./poker.json";
import Link from "next/link";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Services = [
  {
    num: "1",
    icon: <BsCollectionPlay className="text-blue-400" size={60} />,
    title: "Custom Poker Game Development",
    decs: "Our poker game development services offer custom solutions via rendering certain & specific requirements. We work on gaming solutions fulfilling all your playful needs and expectations.",
  },
  {
    num: "2",
    icon: <GiThreeFriends className="text-blue-400" size={60} />,
    title: "Online Poker Software Integration     ",
    decs: "Our expert online poker software developers are capable of integrating different software in the game application. We use advancements and latest technology trends to build user-centric and robust game development solutions.",
  },
  {
    num: "3",
    icon: <MdOutlineInsertInvitation className="text-blue-400" size={60} />,
    title: "White-Label Poker Software",
    decs: "If the client wants turnkey poker gaming applications, then you can opt for white-label poker software. We build fully functional and customizable solutions to launch an incredible poker game. ",
  },
  {
    num: "4",
    icon: <GiPlayerNext className="text-blue-400" size={60} />,
    title: "Poker Game Development ",
    decs: "We render poker game development services, which includes all the possible poker operator’s needs, and also be convenient to the gamers. We ensure your poker gaming  platform stands out in the marketplace with the implementations of some advancements though",
  },
  {
    num: "5",
    icon: <GiBulletImpacts className="text-blue-400" size={60} />,
    title: "Mobile Poker Game Development",
    decs: "The mobile poker game app development allows the operator to reach a vast-scale audience helping to achieve great attention. Also the expert mobile app developers build responsive and user friendly applications for better navigation and multiple mobile channels possible.",
  },
  {
    num: "6",
    icon: <GiPokerHand className="text-blue-400" size={60} />,
    title: "Poker Game Website Development",
    decs: "We provide poker gaming website and app development services to fulfill all necessary requirements of clients. We ensure to build some mind-blowing featured applications to make the users stay connected with your application.",
  },
  {
    num: "8",
    icon: <GiPokerHand className="text-blue-400" size={60} />,
    title: "Blockchain-Based Poker Platform",
    decs: "The IT Professionals from Comfygen are experts in blockchain development, with a deep understanding of integrating bitcoins and other cryptocurrencies into poker application development. By leveraging blockchain technology, our team is able to create secure and transparent poker gaming solutions. We believe in creating secured and transparent poker gaming solutions.  ",
  },
  {
    num: "9",
    icon: <GiPokerHand className="text-blue-400" size={60} />,
    title: "Turnkey Solution",
    decs: "Be ready to get hassle-free turnkey solutions to launch an agile poker gameplay platform. We got your from the moment of ideology to its complete poker game  deployment and after poker game deployment services ensured. ",
  },
];

const schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  brand: {
    "@type": "Brand",
    name: "Online Poker Game Development Company | Poker Game Software development company",
  },
  description:
    "Comfygen is your dependable partner for the creation of a top-notch Poker game development company in UK, USA and UAE, providing first-class Online Poker Game Application Development Services to help your online poker game app development services for ventures to reach new heights.",
  image: "https://www.comfygen.com/svg/comfygen-logo.svg",
  name: "Custom Poker Game Software Development Company | Comfygen",
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Mr. Saddam Husen",
      },
    },
    // {
    //   "@type": "Review",
    //   "reviewRating": {
    //     "@type": "Rating",
    //     "ratingValue": "4.9"
    //   },
    //   "author": {
    //     "@type": "Person",
    //     "name": "Mr. Saddam Husen"
    //   }
    // }
  ],
};

export default function PokerGame(props) {
  const [showContent, setShowContent] = useState(false);

  let { initialData } = props;
  let {
    AppService,
    Process,
    Bestchoice,
    Banefit,
    Frequently,
    Hire,
    myList,
    Whychoose,
    GameCardData,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          No. 1 Poker Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top poker game development company in India and the USA that provides high-quality poker game development services. Our team of skilled poker game developers has an established track record of successfully collaborating with prominent brands, delivering comprehensive poker game development solutions. Contact Us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poker-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="No. 1 Poker Game Development Company In India &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading poker game development company In India & The USA that provides high-quality poker game development services. Our team of skilled poker game developers has an established track record of successfully collaborating with prominent brands, delivering comprehensive poker game development solutions. Get in touch at sales@comfygen.com! "
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/poker-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-13T05:46:22+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/poker-game-development-services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="25 minutes" />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Are you looking to develop Poker Game?| Hire To-notch Poker Game Developers"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking for a reliable Poker Game Development Industry? Hire our expert for Poker Game we provide end-to-end Poker app development services that meet your business needs."
        />
        <meta
          property="og:twitter_title"
          content="Top-Class Poker Game Development company in India & USA | Poker Game Software & App Development Services | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is a top-ranked poker game app development company in India &USA offering iPhone/android Poker game app development services to startups and dealings globally."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Poker Game Development Company | Online Poker Game Development Company"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading No 1 Poker Game Development Company in UK, USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Poker Game Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Online Poker Game Development Company"
          content="Comfygen is a leading Poker Game Software and App Development Company In India, UK, UAE Our Best poker game developers can create a fabulous Poker software and apps.."
        />
        <meta
          name="category"
          content="Online Poker Game Application Development Services"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Poker Game application development Industry"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Poker Game Software Development Company | Online Poker Game Development Company"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
                heading="Poker Game Development Company"
                ptag="Comfygen is the one leading poker game development company In India & The USA that caters excellent and user-friendly app solutions with seamless navigational experience. We have been developing super-fantastic games for years, and deliver robust and engaging apps. Our talented and skilled game developers are renowned to build authentic applications with ground-breaking designs. We provide seamless poker game development services with advancements and next level techniques."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <AdviceSection
          heading="No 1 Poker Game Development Company In India"
          ptag=" Being the #No1 poker game software development services, we build highly specialized and super-engaging gaming applications for Poker Android Development and Poker iOS Development operating systems. Our mobile game development services offer innovative designs with the use of cutting-edge technologies. We ensure the users to grant a smooth and realistic poker gaming experience."
          ptag1="From the Poker Game Development to the launch of the poker game app, we add on all the necessary features including the possible advancements for its growth and vast visibility. For our company and our professionals the only thing matters is client’s satisfaction. Therefore, we provide user-centric poker gaming development solutions for seamless experiences. "
          imgSrc="/images/poker-game-development-services.webp"
          imgW={564}
          imgH={559}
          altTag="No 1 Poker Game Development Company In India"
        />

        <ContactFromCenter />

        <div className="space-y-4 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Poker Game Application Development Services
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              Our expert Poker game app/ software developers believe in
              developing cutting-edge Poker Game Development solutions with
              supremacy features. The engineers works on:
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
            {AppService.map((poker) => {
              return (
                <div key={poker.num} className="space-y-4 border p-6">
                  <Link href={poker.url} passHref={true}>
                    <h3 className="mb-3 text-xl font-semibold leading-5">
                      {poker.title}
                    </h3>
                    <p className="text-sm text-gray-900">{poker.decs}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Poker{" "}
                  <span className="text-[#3B82F6]"> Game Development </span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  Your poker gaming experience can skyrocket with great
                  navigational and other useful features. Here are some poker
                  game development services to opt for vast engagement:
                </p>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {Services.map((elem) => {
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
          </section>
        </div>

        <section className="bg-[#]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Mark Your Presence in{" "}
                <span className="text-blue-500">
                  Web/App-based Top Cards Games Development
                </span>{" "}
                via Comfygen{" "}
              </h2>
            </div>
            <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
              {GameCardData.slice(0, 6).map((elem) => {
                const { title, url, img, num } = elem;
                return (
                  <div key={num} className="w-full ">
                    <Link href={url} passHref={true}>
                      <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <img
                          src={img}
                          alt={title}
                          className="h-64 w-full ml-auto mr-auto"
                        />
                        <div className=" p-4 bg-blue-500 flex flex-col">
                          <div>
                            <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                              {title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

              {showContent ? (
                <>
                  {GameCardData.slice(6, 17).map((elem) => {
                    const { title, url, img, num } = elem;
                    return (
                      <div key={num} className="w-full ">
                        <Link href={url} passHref={true}>
                          <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                            <img
                              src={img}
                              alt={title}
                              className="h-64 w-full ml-auto mr-auto"
                            />
                            <div className=" p-4 bg-blue-500 flex flex-col">
                              <div>
                                <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                                  {title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Link>
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
        </section>

        <div className="py-4 lg:py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Features of{" "}
                <span className="text-blue-600">Poker Game App </span>{" "}
                Development
              </h2>
              <p className="text-base text-slate-800">
                Following the latest tech trends, we integrate the poker game
                application with some incredible features providing smooth
                user-experience:
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-4 md:grid-cols-2 xl:gap-10">
              {Banefit.map((poker) => {
                return (
                  <div
                    key={poker.num}
                    className="p-3 space-y-4   cursor-pointer rounded-[17px]"
                  >
                    <div className="w-24 h-24 bg-gray-300 rounded-full  flex justify-center items-center">
                      <div className="p-2 bg-white rounded-full h-14 w-14">
                        <p className="text-[26px] font-bold text-center text-[#1E293B]">
                          {poker.num}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                        {poker.title}
                      </h3>
                      <p className="break-all    text-[#000000]  group-hover:text-white/90 line-clamp-4">
                        {poker.decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <Link href="/contact-us" passHref={true}>
                <button className=" bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] hover:bg-white text-white hover:text-black border shadow rounded-lg  px-10  transition-all duration-500 ease-in py-5 text-2xl">
                  Let's Communicate With IT Expert!
                </button>
              </Link>
            </div>
          </section>
        </div>

        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{ backgroundImage: `url("/img/hire-poker-developer.webp")` }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#00401D]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Poker Game App Development Process
              </h2>
              <p className="text-base text-slate-800">
                Know the poker game application development process to know how
                our experts can serve you with best practices:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Process.map((poker) => {
                return (
                  <div key={poker.num} className="border p-3 space-y-2 shadow">
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {poker.title}
                    </h3>
                    <p className="text-base text-slate-800">{poker.decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <WhyChoose Whychoose={Whychoose} Bestchoice={Bestchoice} />
        <FaqSection
          faqData={Frequently}
          title="  Poker Game Development Technology"
        />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
