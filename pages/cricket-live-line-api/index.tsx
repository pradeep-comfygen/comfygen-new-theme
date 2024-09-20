import Image from "next/image";
import React, { useState } from "react";
import { MdSportsCricket, MdWeb } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { FaFantasyFlightGames } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { TbCricket } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cricketliveline.json";
import Link from "next/link";
import { RiCustomerServiceLine } from "react-icons/ri";
const StepProcess = dynamic(() => import("./components/StepProcess"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Service = [
  {
    num: "1",
    icon: (
      <Image
        src="/img/live-scores.webp"
        alt="cricket live line api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cricket Live Scores",
    decs: "A must-add-on feature to keep your users hooked to your cricket live line application. This feature gives users real-time live cricket score app updates of their favourite team or an individual player right at their fingertips. It ensures that users stay in the know with latest cricket updates live scores without missing a beat and keeping track of the cricket in live score seamlessly.",
  },
  {
    num: "2",
    url: "https://www.comfygen.com/blog/cricket-ball-by-ball-live-score-api-for-android/",
    icon: (
      <Image
        src="/img/ball-to-ball-commentary.webp"
        alt="cricket live streaming api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cricket Ball-to-Ball Commentary",
    decs: "Our cricket ball-to-ball commentary feature provides detailed commentary to the user describing every cricket by ball bowled in a cricket match. It enhances the user's experience with a detailed play-by-play description so that they do not miss out on any single moment of the match.",
  },
  {
    num: "3",
    icon: (
      <Image
        src="/img/match-analysis-and-statistics.webp"
        alt="live cricket streaming api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Match Analysis & Statistics",
    decs: "With our cricket Live Line API services, you can access complete match analysis and statistics, giving you valuable insights into player performance, team dynamics, and match strategies. Stay updated with real-time cricket live data on wagering averages, bowling figures, run rates, and much more. Our advanced algorithms and cricket data api integration ensure accurate and up-to-date information.",
  },
  {
    num: "4",
    url: "https://www.comfygen.com/blog/cricket-live-streaming-to-the-next-level/",
    icon: (
      <Image
        src="/img/live-match-streaming.webp"
        alt="live cricket score api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Live Match Streaming",
    decs: "Never miss a moment of the action with our live match streaming API. Enjoy high-quality live streams of cricket matches from around the world, right on your website or application. Immerse yourself in the excitement of cricket live data as it unfolds, with live cricket scores ball by ball commentary and real-time updates Cricket live line api integrated seamlessly into the cricket live streaming api experience.",
  },
  {
    num: "5",
    icon: (
      <Image
        src="/img/multiple-sports-leagues.webp"
        alt="cricket data api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Multiple Sports & Leagues",
    decs: "You can consider incorporating multiple sports & cricket league live features within your live score api cricket application development firm. With this feature, you can offer the latest cricket updates live scores of not just cricket but also other sports as well, targeting sports enthusiasts who have an interest in multiple sports and gold league cricket live scores from all around the world.",
  },
  {
    num: "6",
    url: "/fantasy-cricket-app-development",
    icon: (
      <Image
        src="/img/fantasy-cricket.webp"
        alt="Clive line cricket api Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Fantasy Cricket",
    decs: "For fantasy cricket enthusiasts, our fantasy cricket api services offer a treasure trove of fantasy cricket live data and fantasy cricket development features. Build your dream fantasy cricket team with access to detailed player statistics, historical cricket live data, and performance analysis. Keep track of your team's progress, receive live updates during matches, and make informed decisions to maximize your chances of winning in fantasy cricket leagues.",
  },
];

const structuredData = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Best Cricket Live Line API Development Company | Comfygen",
  url: "https://www.comfygen.com/cricket-live-line-api",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen - Best Cricket Live Line API Service Provider",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};

const productData = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Cricket Live Line API Development Company - Cricket Live Line API Development Service",
  image:
    "https://www.comfygen.com/_next/image?url=%2Fimg%2Fskyrocket-your-exprience-with-cricket-live-line-api-development-company.webp&w=640&q=75",
  description:
    "Comfygen Private Limited is a top Cricket Live Line API Development Company. We provide the best Cricket Live Line application development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1125",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a cricket live score API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<p>A cricket live score API is a service that provides real-time updates of cricket match scores for integration into websites or applications.</p>",
      },
    },
    {
      "@type": "Question",
      name: "How can I integrate a cricket live score API into my website or application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Integration typically involves utilizing the API's documentation and following the provided instructions for making API calls to retrieve live cricket scores.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of data does a cricket API provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cricket API can provide various types of data, including live scores, player statistics, team information, match schedules, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I access live cricket scores in real-time using a cricket score API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a cricket score API provides real-time updates, allowing you to display accurate and up-to-date scores to your users.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any limitations on the number of API calls to the cricket live score API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "API providers may have rate limits or usage restrictions in place, which can vary depending on the service plan or pricing tier you choose.",
      },
    },
    {
      "@type": "Question",
      name: "How can I use an API cricket service to enhance my sports app or website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An API cricket service allows you to integrate live scores, player stats, and other cricket-related data into your app or website, enhancing the user experience and engagement.",
      },
    },
  ],
};

export default function Ecommerce(props) {
  let { initialData } = props;
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Best Cricket Live Line API Provider | Live Cricket Streaming API
        </title>
        <meta
          name="description"
          content="Build cricket fast live line with Comfygen top-class cricket data live line APIs. Access real-time scores, player stats, match schedules, and more from ICC, IPL, and other tournaments. Start creating your cricket application with powerful cricket live line apis today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/cricket-live-line-api"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Cricket Live Line API | Live Cricket Data API for real-time Cricket Score, Stats & Feed"
        />
        <meta
          property="og:facebook_description"
          content="When you partner with Comfygen, you can trust that you'll have accurate and up-to-date data at your fingertips. Our cricket data APIs are meticulously maintained to ensure the highest quality and reliability."
        />
        <meta
          property="og:twitter_title"
          content="Top Cricket Live Line API | Live Cricket Data API | Best cricket live streaming api for Up to date real-time API for Cricket Score, Stats & Feed"
        />
        <meta
          property="og:twitter_description"
          content="Build the next generation of cricket apps by integrating our powerful Cricket Live Line APIs. Elevate your cricket blog, fantasy app, performance analysis tool, or chatbot using our data-rich APIs. Join the slew of successful cricket applications that trust Comfygen for their Cricket data api needs. Contact us Today!"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Best Cricket Live Line API Development Industry"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading World-class Cricket Live Line API Development Company in India, the USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cricket Live Line API | live score api cricket | Cricket API Live Score | Cricket Data Api | API for cricket score | Cricket Live Streaming for startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Best Cricket Live Line API Development service Provider"
          content="Comfygen is a leading Cricket live line api development provider Gobally."
        />
        <meta
          name="category"
          content="Cricket Live Line Api Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best cricket live streaming api | Best live score api cricket"
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
          content="Cricket Live Line API Development Services Provider"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Top Cricket Live Line API Development Company | Comfygen",
            url: "https://www.comfygen.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Comfygen",
            legalName: "Comfygen Pvt. Ltd.",
            url: "https://www.comfygen.com/",
            logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
            foundingDate: "2019",
            founders: [
              {
                "@type": "Person",
                name: "Saddam Husen",
              },
              {
                "@type": "Person",
                name: "Saddam Husen",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
              addressLocality: "Vaishali Nagar",
              addressRegion: "Jaipur, Rajasthan, India",
              postalCode: "302021",
              addressCountry: "India",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+91 9587867258",
              email: "sales@comfygen.com",
            },
            areaServed: [
              "US",
              "CA",
              "GB",
              "AD",
              "AU",
              "AT",
              "BS",
              "BH",
              "IO",
              "KM",
              "CU",
              "AR",
              "CW",
              "CY",
              "DK",
              "DM",
              "EG",
              "FK",
              "FI",
              "FR",
              "DE",
              "GR",
              "GL",
              "HK",
              "IS",
              "IN",
              "ID",
              "IT",
              "JP",
              "JE",
              "JO",
              "KW",
              "KG",
              "KR",
              "MX",
              "FM",
              "NZ",
              "NI",
              "OM",
              "PE",
              "PH",
              "PL",
              "PT",
              "QA",
              "RO",
              "RU",
              "SA",
              "SG",
              "SE",
              "SZ",
              "CH",
              "TH",
              "TR",
              "TN",
              "UA",
              "UM",
              "AE",
              "039",
              "155",
              "154",
              "151",
              "150",
            ],
            sameAs: [
              "https://twitter.com/comfygentech",
              "https://www.instagram.com/comfygen_/?hl=en",
              "https://www.linkedin.com/company/comfygen-private-limited",
              "https://www.facebook.com/comfygen",
            ],
          })}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
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
                heading="Cricket Live Line API Development Company"
                subhead="Your Trusted Cricket Live Line App Development Company In India & The USA."
                ptag="Cricket is not just a sport, but it is a native emotion of view. Comfygen facilitates the trending cricket live line API development ensuring delivery of real-time updates of the game. The cricket fast live line software will share real-time scores, statistics, and other real-time updates of the ongoing real cricket match. Our cricket live line api software has a humongous approach ensuring easier integration of cricket live streaming api."
                ptag1="Be ready and get in touch with the excellent and skilled game App developers / programmers to craft such a feature enriched cricket mobile application with seamless navigational experiences. Contact Now to Inquire More."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/skyrocket-your-exprience-with-cricket-live-line-api-development-company.webp"
                alt=" Skyrocket your Experience with Cricket Live Line API Development Company"
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Skyrocket your Experience with Best Cricket Live Line API
                Development Company
              </h2>
              <p className="text-base text-black ">
                Comfygen believes the fact that cricket is not just a sport;
                it’s an emotion for cricket enthusiasts all around the globe.
                We’re here to cater to your emotional connection with our
                best-in-class{" "}
                <a
                  href="/mobile-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  mobile app development services
                </a>
                .Our unmatched cricket live line api provider ensures users
                never miss out on a moment of action, whether in the stadium or
                thousands of miles away.
              </p>
              <p className="text-base text-black">
                Comfygen takes pride in possessing a team that is a rich
                tapestry of diverse professionals who bring together a world of
                expertise to build an app with cricket live score api that's
                nothing short of extraordinary.
              </p>
              <p className="text-base text-black">
                We offer custom cricket live line api{" "}
                <a
                  href="/web-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  {" "}
                  web development solutions
                </a>{" "}
                leveraging cutting-edge technology to ensure your cricket live
                score api and your cricket live streaming api is visually appealing giving an engaging user
                experience.{" "}
              </p>
              <p className="text-base text-black">
                If you’re looking to step into the{" "}
                <a
                  href="/sports-betting-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  {" "}
                  sports betting app development industry,{" "}
                </a>
                let us be your partner. Because when it comes to creating a
                top-notch cricket live line application and cricket live streaming api, we stand head and
                shoulders above the rest with a guarantee to skyrocket your web
                development experience. Partner with the best Cricket Live Line
                API Development Company in the USA, the UK and let's mark upon a
                cricket history together.
              </p>
              <div className="pt-4">
                <a href="/quote">
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Connect
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Reap the Privilege of the{" "}
                  <span className="text-blue-600">
                    Top-notch Cricket Live Line API
                  </span>{" "}
                  Development Services
                </h2>
                <p className=" text-slate-600 text-base">
                  Experience the thrill of cricket stadium with our
                  extraordinary Cricket Live Line API Services offering live
                  score api cricket, ball to ball live cricket score commentary,
                  and match highlights right at your fingertips. We are here to
                  cater to your cricketing cravings. Our innovative live cricket
                  streaming api makes your passion soar high just like a ball by
                  ball live cricket match sent into the clear blue sky. Let’s
                  explore the services of a cricket live line api:
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Service.map((elem) => {
                  const { title, icon, decs, num, url } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      url={url}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col justify-center lg:text-center  space-y-4 shadow-[#BE5EBC] shadow-sm border p-6">
                <p className="text-base text-slate-800">
                  Take your cricket experience to the next level with our
                  comprehensive Cricket Live Line API services - sign up now and
                  unlock the power of real-time match analysis, live cricket
                  streaming api, multiple sports coverage, and fantasy cricket
                  api!
                </p>
                <div>
                  <Link href="/contact-us" passHref={true}>
                    <button className=" bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] hover:bg-white text-white hover:text-black border shadow rounded-lg  px-10  transition-all duration-500 ease-in py-5 text-xl font-bold">
                      Feel free to Modify or Customize Cricket Live Line Api
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-5 lg:py-10 bg-slate-200">
          <div className="space-y-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center space-y-2">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] text-center">
                Beyond Cricket:{" "}
                <span className="text-blue-600">
                  Our Live Line API Score Website
                </span>{" "}
                Covers a Wide Sports Spectrum
              </h2>
              <p className="text-base">
                We truly are sports enthusiasts ourselves who believe in the
                spirit of sports live cricket app, therefore, Comfygen offers
                custom cricket live streaming api development for almost all
                major sports to reach a global audience of sports enthusiasts.
                Our cricket live line api development service provider cater to
                multiple sports including:
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative py-6 capitalize">
              {JSON_DATA.gamedev.map((elem: any) => {
                const { img, title, num, url } = elem;
                return (
                  <a
                    href={url}
                    key={num}
                    className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                  >
                    <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                      <Image
                        src={img}
                        alt={title}
                        width={64}
                        height={64}
                        className=" group-hover:scale-105 transition-all duration-200 transform "
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {title}
                      </h3>
                    </div>
                  </a>
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
        </section>
        {/* <div className="py-10 lg:py-20 bg-gray-100">
          <section className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto lg:flex space-x-0 lg:space-x-10 md:space-y-0">
            <div className="flex justify-center 2xl:justify-start w-full lg:w-1/2 pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                alt="Cricket Fast Live Line API For Website And App"
                src="/images/cricket-fast-live-line-api-development-company.webp"
                width={556}
                height={570}
                loader={uploadcareLoader}
                loading="eager"
                priority
                unoptimized={true}
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
         33vw"/>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <div className="space-y-4">
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
                    Cricket Fast Live Line API For Website And Application Development
                  </h2>
                </div>
                <p className="text-base text-black">
                  Since the world cup is on the edge and cricket fever fans can’t wait for the thrilling, you have the excellent opportunity to use our cricket live line api for developing cricket live score api website and application development organization for business profits. Our <a href="/live-line-cricket-mobile-app-development" className="text-blue-600 font-bold hover:underline">Live Cricket Line Mobile App Development</a> gives you concrete and complete information of various cricket data(s) to help to build a better and futuristic cricket live score api application for your users and clients. Not even this, our live cricket score api can also be used for website development with a host of key features. Pull cricket fans to your website without investing so much.</p>
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
                      <span className="font-bold text-blue-600"><a href="tel:9587867258"> +91 9587867258</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Key Features of Our Cricket Live Line API
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Shaping.map((rummy) => {
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
            <div className="flex justify-center items-center mt-5">
              <a href="/contact-us" className="mt-5">
                <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Connect with Experts
                </button>
              </a>
            </div>
          </div>
        </section>
        <TalkExpert />
        <StepProcess />
        {/* <div className="py-10 bg-gray-200">
          <section className="flex flex-col-reverse lg:flex-row items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left pt-6 md:pt-0">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Cricket Live Line: Cricket Score Faster Than TV
                </h2>
              </div>
              <p className="text-base text-black ">Cricket live line api is more than technology and Faster. It is the best technology that uses adhesive cricket live streaming APIs to deliver cricket match scorecards and content faster than TeleVison. With cricket live line api’s in hand you get cricket content such as live cricket match scorecard, highlights, player stats, on-screen content, leaderboard, live ball to ball commentary, etc faster than live cricket TV score.</p>
              <p className="text-base text-black ">This technology has gained immersive popularity and profits nationwide and widely used for  best cricket live streaming api to deliver cricket fans cricket score faster than television. </p>
              <div className="pt-4">
                <a href="/quote" >
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Connect
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md w-[70%]"
                title="Cricket Live Line: Cricket Score Faster Than TV"
                alt="Cricket Live Line: Cricket Score Faster Than TV"
                src="/images/cricket-live-faster-than-tv.webp"
                height={2500}
                width={2500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div> */}
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto text-center space-y-2">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Choose Comfygen For Cricket Live Score API?
              </h2>
              <p className="text-base font-bold text-slate-800">
                What makes Comfygen different from the rest?
              </p>
              <p className="text-base text-slate-800">
                Comfygen is an eventual cricket data api provider deployed more
                then 6000+ cricket data development solutions to varied
                clientele. Our Cricket Live Line API consists of reliability and
                whizzility and can be accessed via various modes. Get immersive
                cricket data documentation with player statistics, cricket live
                line scorecard, cricket score ball by ball commentary api, and
                much more. When it comes to top{" "}
                <a
                  href="/game-development-company"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Game development company
                </a>{" "}
                ,{" "}
                <a
                  href="/hybrid-mobile-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  hybrid Mobile app development company
                </a>{" "}
                and Web development company, Comfygen is at the forefront of
                developing top-notch Game and Web applications with our
                cutting-edge technology and innovative approach. With its
                avant-garde analytics platform and intuitive user interface,
                Comfyegn is changing the way to interact and indulge with Game
                Development. With us, you will always be on the winning side
                with our unmatchable services.{" "}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.WhyCricketLive.map((elem) => {
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
            <div className="flex justify-center items-center mt-5">
              <a href="/contact-us" className="mt-5">
                <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Get A DEMO
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-mobile-app-developer.webp")` }}> */}
        <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
          <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
        </section>
        {/* </div> */}
        <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              We Develops Other Games{" "}
            </h2>
          </div>
          <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
            {JSON_DATA.GameCardData.slice(0, 6).map((elem) => {
              const { title, url, img } = elem;
              return (
                <div className="w-full ">
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
                {JSON_DATA.GameCardData.slice(6, 17).map((elem) => {
                  const { title, url, img } = elem;
                  return (
                    <div className="w-full ">
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
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  Cricket Live Line Api Development Technology"
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
