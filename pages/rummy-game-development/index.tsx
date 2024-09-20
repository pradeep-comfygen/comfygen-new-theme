import React, { useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsFillStarFill } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/rummy.json";
import Link from "next/link";
import ContactUsButton from "../components/ContactUsButton";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
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
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function rummy(props) {
  let { initialData } = props;
  let {
    myList,
    Hire,
    myList3,
    myList4,
    Frequently,
    GameCardData,
    Shaping,
    bettinggames,
    StepByStep,
    AddOns,
    Process,
    WhyChooseData,
    TechTrends,
    TechnoStack,
  } = JSON_DATA;

  const [showContent, setShowContent] = useState(false);

  const ratingData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: "Rummy Game App Development Company | Rummy Game Development Company",
    },
    description:
      "Comfygen is your dependable partner for the creation of a top Rummy app development company in UK, USA and UAE, We specialize in offering top-notch rummy game app developing services as a reputed rummy game development company in USA. We provide specialized rummy game app development solutions because we have a thorough understanding of the Rummy game's popularity and complexities.",
    image: "https://www.comfygen.com/svg/comfygen-logo.svg",
    name: "Custom and Readymade Rummy Game App Development Company | Comfygen",
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
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.9",
        },
        author: {
          "@type": "Person",
          name: "Mr. Saddam Husen",
        },
      },
    ],
    offers: {
      "@type": "Offer",
      url: "https://www.comfygen.com/rummy-game-development",
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Comfygen Private Limited",
      },
    },
  };
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.comfygen.com/rummy-game-development/",
        url: "https://www.comfygen.com/rummy-game-development",
        name: "No. 1 Rummy Game Development Company In the USA | Comfygen",
        isPartOf: {
          "@id": "https://www.comfygen.com/#website",
        },
        primaryImageOfPage: {
          "@id":
            "https://www.comfygen.com/rummy-game-development/#primaryimage",
        },
        image: {
          "@id":
            "https://www.comfygen.com/rummy-game-development/#primaryimage",
        },
        thumbnailUrl: "https://www.comfygen.com/svg/comfygen-logo.svg",
        dateModified: "2023-09-15T06:58:46+00:00",
        description:
          "Comfygen is a leading rummy game app & web development company that can offer end-to-end rummy game design and development services. Hire our highly skilled rummy game developers now to build a world-class Rummy Game Web & App development at an affordable price.",
        breadcrumb: {
          "@id": "https://www.comfygen.com/rummy-game-development/#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://www.comfygen.com/rummy-game-development"],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://www.comfygen.com/rummy-game-development#primaryimage",
        url: "https://www.comfygen.com/images/rummy-game-software-development.webp",
        contentUrl:
          "https://www.comfygen.com/images/rummy-game-software-development.webp",
        width: 365,
        height: 250,
        caption: "Rummy Game App Development Company In the USA",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.comfygen.com/#website",
        url: "https://www.comfygen.com/",
        name: "Comfygen - Blockchain and Game AI Development Company",
        description: "Simple | Secure | Successive",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://www.comfygen.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Is Rummy Game App Development ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>Rummy is a game that endorses a number of players and is a kind of card game. Rummy game apps let players play, enjoy, and win jackpots from their devices. It is an app played from a smartphone.</p>",
        },
      },
      {
        "@type": "Question",
        name: "What Technologies Do You Use To Develop Rummy Games ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " For the backend, we use Java, and for the database, we rely on MySQL and PostgreSQL. For the front end, we use technologies like Vue, Flutter, Reactive Native, JS, Angular, etc.",
        },
      },
      {
        "@type": "Question",
        name: "Have You Ever Worked In Game Development Before ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have developed 1000+ games for a number of clients. YES, we do have specialized in rummy game development as per requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Does Rummy Game App Development Cost ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Connect with our expert to know a ballpark estimation. Besides, we provide game development services at pocket-friendly rates.",
        },
      },
      {
        "@type": "Question",
        name: "How can I ensure a secure and fair gameplay environment in a Rummy game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, social features like chat functionality, friend invites, leaderboards, and sharing gameplay achievements can be integrated into a Rummy game application to enhance the social experience and increase user engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the rules and design of a Rummy game app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the rules and design of a Rummy game app development can be customized. Our Rummy Game Developers can create variations of the rummy game, customize the visuals, and even introduce new Rummy game application features to make the rummy game unique.",
        },
      },
    ],
  };
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    priceRange: "$200-$5500",
    image: "https://www.comfygen.com/svg/comfygen-logo.svg",
    "@id": "https://www.comfygen.com/rummy-game-development",
    name: "Best Rummy Game App Development Company India, USA, UAE, Germany",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-152, Dayanand Marg, Nemi Nagar,",
      addressLocality: "Vaishali Nagar, Near D A V Centenary Public School",
      addressRegion: "Jaipur, Rajasthan",
      postalCode: "302021",
      addressCountry: "IN",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Saddam Husen",
      },
    },
    url: "https://www.comfygen.com/rummy-game-development",
    telephone: "+91 9587867258",
  };
  return (
    <>
      <Head>
        <title>
          No. 1 Rummy Game App Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen, a reliable Rummy Game Development Company in India and the USA, delivers high-quality and feature-rich card game development solutions for iOS, Android, and the Web platform. Transform your gaming vision into reality with our expert development services."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/rummy-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="No. 1 Rummy Game App Development Company In Canada &  The USA | Comfygen "
        />
        <meta
          property="og:description"
          content="Comfygen, a reliable Rummy Game Development Company in India, delivers high-quality and feature-rich card game development solutions for iOS, Android, and the Web platform. Transform your gaming vision into reality with our expert development services."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/rummy-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T07:02:07+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/rummy-game.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />

        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Rummy Game Development Company | Hire To-notch Poker Game Developers"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking for a reliable Rummy Game App Development Industry? Hire our expert for Rummy Game we provide end-to-end Rummy game app development services that meet your business needs."
        />
        <meta
          property="og:twitter_title"
          content="Top-Class Rummy Game Development company in the USA | Rummy Game Software & App Development Services by Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is the best Rummy Game Development Industry in the USA. We offer Customized and readymade Rummy Game App and Software Development Services."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Rummy Game Development Company | Online Rummy Game App Development Company"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading First Class Rummy Game Development Company in UK, USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Poker Game Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Online Rummy Game Development Company"
          content="Comfygen is a leading World Class Rummy Game Software and App Development Company in USA, UK, UAE Our Best Rummy game programmers can create magnificent rummy software and applications.."
        />
        <meta
          name="category"
          content="Online Rummy Game Application Development Services"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Rummy Game application development Industry"
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
          content="Rummy Game Software Development Company | Online Rummy Game Development Company"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingData) }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Rummy Game Development Company  "
                ptag="Meet the expertised online game app developers to build agile rummy game applications. Comfygen is specialized in building realistic rummy game applications  with the integrations of some latest advancements and tech trends. The clientele base will receive a range of gaming development solutions; such as Point Rummy, Pool Rummy, or Deal Rummy. Being the one best leading rummy game app development company In Canada & The USA; we believe in elevating one’s experience during their gameplay with some exciting stages. Be ready to be the dominated competitor to other gaming development platforms, and accelerate with your application in the marketplace."
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
                src="/img/meet-the-expert-rummy-game-app-developers-in-usa.webp"
                alt="Meet the Expert Rummy Game App Developers in USA"
                className="rounded-lg"
                width={600}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Meet the Expert Rummy Game App Developers in USA
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Are you confused whether to develop a rummy clone app or to
                  incur in new updated rummy game app development? Well; here
                  you are going to meet some highly experienced and expertised
                  rummy mobile game app developers; who can change the rummy
                  gaming application’s interface incredibly. Our Rummy game
                  developers take responsibility to create attractive and
                  engaging rummy game apps to establish high-class online
                  business.
                </p>
                <p className="text-base text-black text-justify">
                  Comfygen caters to the clientele interest with the perspective
                  to catch vast audience attractions. We ensure that our clients
                  stand out from the crowd with such incredible applications;
                  which gathers everyone’s attention and stays tuned with their
                  gaming apps only. Do not wait, and get an engaging rummy game
                  application with business profitable margins and established
                  image in the industry.
                </p>
                <ul className="space-y-2 text-left pt-4">
                  {myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        <ContactFromCenter />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Variations of Rummy Mobile Game
              </h2>
              <p className="text-base text-slate-800 md:text-center text-left">
                Hey Users; are you ready to dive into the variations of rummy
                mobile game applications? Here we are available to offer
                flexible and customized platforms to users with Point Rummy,
                Pool Rummy, and Deal Rummy.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Shaping.map((rummy) => {
                return (
                  <div key={rummy.num} className="border p-3 space-y-2 shadow">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {rummy.title}
                    </p>
                    <p className="text-base text-slate-800">{rummy.decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="md:py-10 bg-gray-300">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Rummy Game App Development Solutions We Build
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  He expert rummy game app developers underwent extensive
                  research and market analysis, and figured out some prominent
                  rummy game app development solutions to design appropriate
                  approaches. These rummy game app development solutions we
                  build are known for their engagement and immersive user
                  experience. Being the top-notch rummy game development
                  company; we believe striving into the next-level rummy game
                  development solutions, as follows are:
                </p>
                <ul className="space-y-2 text-left pt-4">
                  {myList4.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/rummy-game-app-development-solutions-we-build.webp"
                alt="Rummy Game App Development Solutions We Build"
                className="rounded-lg"
                width={600}
                height={800}
              />
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

            <div className="flex justify-center items-center">
              <button
                className="block text-base font-medium active text-white bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white lg:mt-0 cursor-pointer transition duration-300 relative "
                onClick={() => setShowContent(!showContent)}
              >
                Load {showContent ? "Less" : "More"}
              </button>
            </div>
          </div>
        </section>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Rummy Game Development Services
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">
                One of the top Rummy Game Development companies in the USA for
                making rummy games, Comfygen is skilled at creating rummy mobile
                games for all platforms. Our talented team of programmers and
                designers research current{" "}
                <a
                  href="/game-development-company"
                  className="text-blue-600 font-bold hover:underline"
                >
                  game development industry
                </a>{" "}
                trends to produce excellent user interfaces and features that
                draw users in.
              </p>
              <p className="text-base text-black text-justify">
                We make an effort to create customized rummy game development
                that meet your needs. We develop cutting-edge rummy gaming apps
                that are integrated with the most recent technology to increase
                user engagement and growth thanks to our expertise in
                cutting-edge technologies like AI, ML, and Blockchain.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize  w-full">
            {bettinggames.map((elem: any) => {
              const { img, num, title, url } = elem;
              return (
                <Link href={url} passHref={true}>
                  <div
                    key={num}
                    className="flex items-center justify-center p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]"
                    style={{ backgroundColor: elem.bg }}
                  >
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="60" height="60" />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Features of Rummy Game App Development
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {StepByStep.map((elem) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]"
                  >
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {title}
                    </p>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Add-Ons{" "}
                <span className="text-blue-600"> Features In Rummy Game </span>{" "}
                Applications
              </h2>
            </div>
            <div className="grid gap-16 lg:grid-cols-2 py-10 md:grid-cols-2 xl:gap-12">
              {AddOns.map((elem) => {
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
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Rummy Game App Development Process
              </h2>
              <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                With a commitment to innovation, quality, and client
                collaboration, our game Our rummy game development process takes
                place in a certain process; helping to build an agile and robust
                rummy gaming app .
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Process.map((elem) => {
                const { tittle, decs, num, img } = elem;
                return (
                  <div key={num} className="shadow-xl">
                    <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                      <div className="flex items-center justify-center h-14 w-14">
                        <Image
                          className="rounded-md"
                          alt={tittle}
                          src={img}
                          height={100}
                          width={100}
                          loader={uploadcareLoader}
                          unoptimized={true}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {tittle}
                      </h3>
                    </div>
                    <div className="p-4 ">
                      <p className="text-black">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <ContactUsButton
                url={"/contact-us"}
                title={"Let’s Get Your Rummy Game Now!"}
              />
            </div>
          </div>
        </section>

        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Why to Choose Comfygen for Rummy Game App Development?
              </h2>
              <p className="text-base text-slate-800">
                Our clientele base is very satisfied from our rummy game app
                development services. However, we believe in working at a high
                pace with quality assured. We have cited reasons to choose us as
                your reliable partner for rummy game app development
              </p>
            </div>

            <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {WhyChooseData.map((rummy) => {
                return (
                  <div key={rummy.num}>
                    <div className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86">
                      <div className="flex flex-col justify-center items-center p-10">
                        <Image
                          className="object-cover"
                          src={rummy.img}
                          alt={rummy.title}
                          width={100}
                          height={100}
                        />
                        <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                          {rummy.title}
                        </h3>
                      </div>
                      <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                        <p className="tracking-normal text-sm text-white text-justify">
                          {rummy.decs}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 space-y-10 py-10">
          <div className="flex flex-col justify-center text-center mx-auto">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Technologies to Use for{" "}
              <span className="text-blue-600">Rummy Game App </span>Development
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 border  divide-x-2 divide-y-2">
            {TechnoStack.map((elem) => {
              const { title, num, img } = elem;
              return (
                <div
                  key={num}
                  className="p-4 text-center space-y-2 hover:bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] transition-all duration-300 ease-in-out group"
                >
                  <Image
                    src={img}
                    alt={title}
                    className="mx-auto"
                    width={80}
                    height={60}
                  />
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-lg group-hover:text-white">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="py-4 lg:py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Latest Tech Trends Evolved Around Rummy Gaming App
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  The rummy gaming app can become the most demanding gaming
                  application among a vast user-base, if it follows some latest
                  tech trends during rummy game development company.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {TechTrends.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="space-y-4 border p-6">
                      <p className="text-2xl font-bold">{title}</p>
                      <p>{decs} </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <TalkExpert />
        <section className="py-10 bg-gray-100">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 md:space-y-10">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <div className="space-y-3">
                  <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    How much Does it Cost to Build a Rummy Gaming Application?{" "}
                  </h2>
                  <p className="text-[16px] font-normal leading-6 text-black">
                    Definitely our clientele base wants to know how much to pay
                    to build a rummy gaming application. The cost of rummy game
                    app development starts from $5000, and later it can go upto
                    $50000 and more. The price varies according to the demand of
                    clients. If the demand asks for more rummy game application
                    features, advancements and third party{" "}
                    <a
                      href="/live-casino-game-api-integration"
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Live Casino API integration;
                    </a>{" "}
                    these add ons in your gaming application will add more cost.{" "}
                  </p>
                  <p className="text-[16px] font-normal leading-6 text-black">
                    That is why, our respective clients are allowed to have an
                    appropriate conversation with expert IT professionals to
                    know how their ideologies will process towards
                    implementation at what cost.
                  </p>
                </div>
              </div>
              <div>
                <Link href="/quote" passHref={true}>
                  <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded-full  justify-center items-center space-x-1  w-fit font-medium overflow-hidden relative inline-flex group cursor-pointer">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                    <ImArrowUpRight2 />
                    <span>Get Quotation</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/img/rummy-game-development.webp"
                alt="How Much Does It Cost To Develop A Rummy Game App"
                height={800}
                width={800}
              />
            </div>
          </div>
        </section>

        <section className="">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{ backgroundImage: `url("/img/rummy-game.webp")` }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0037ACCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <FaqSection
          faqData={Frequently}
          title="  Rummy Game Development Technology"
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
