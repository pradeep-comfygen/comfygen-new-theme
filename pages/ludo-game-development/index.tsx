import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import "aos/dist/aos.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import JSON_DATA from "./json/ludo.json";
import Link from "next/link";
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
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

const TechTrends = [
  {
    num: "1",
    img: "/images/satta-matka-app-development.webp",
    title: "AR & VR Technology",
    decs: (
      <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
        Augmented Reality (AR) and Virtual Reality (VR), both will be integrated
        in the ludo application will change the entire user-experience of
        players. They will be able to enjoy the realistic views, and seamless
        experience. The 3D displays, realistic characters, and other factor; all
        seems to be much fun to play the game.
      </p>
    ),
  },
  {
    num: "2",
    img: "/images/satta-matka-websites-development.webp",
    title: "Blockchain Development Technology ",
    decs: (
      <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
        One can ask from the mobile game app developers to integrate{" "}
        <a href="/blockchain-development" className="text-blue-500">
          blockchain app development
        </a>{" "}
        technologies for the secured and transparent transactions. It enables
        the users to show more interest in the gameplay with secured transaction
        flow.{" "}
      </p>
    ),
  },
  {
    num: "3",
    img: "/images/custom-satta-matka-software-development.png",
    title: "Machine Learning",
    decs: (
      <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
        Machine Learning integration enables to understand player’s mindset and
        strategies to revert them back with strategic moves.{" "}
      </p>
    ),
  },
];

const Bestchoice = [
  {
    num: "01",
    bg: "#F45F391A",
    title: "Computer Mode",
    decs: "This is a mode, where the computer/bot plays like an opponent against the real-time player or the user. The user can choose to play in 2-player or 4-player mode; where the bots will take places as opponents against the user. ",
  },
  {
    num: "02",
    bg: "#F7F5FA",
    title: "Local Mode",
    decs: "  In the local mode, the player can team up with his friend, or he can choose to play individually through one single device in the 2-player or 4-player game app development services option.",
  },
  {
    num: "03",
    bg: "#9A4ECC1A",
    title: "Private Mode",
    decs: (
      <p>
        Private Mode in Ludo Game App Development Services allows the players to
        play with their friends and family members from different devices. You
        can either share the same room code or connect with{" "}
        <a className="text-blue-500" href="/social-media-app-development">
          social media app development
        </a>{" "}
        platform friends to play along. Any user can create their room for
        either 2 players or 4 players, and afterwards they can share the room
        code to gather other players in real-time.
      </p>
    ),
  },
  {
    num: "04",
    bg: "#6C54DE1A",
    title: "Online Multiplayer Mode",
    decs: "Online multiplayer mode enables the player to play along with 2-4 players across the globe. In this multiplayer gaming mode; the player can choose any player throughout the world.",
  },
];

const ldJsonData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  brand: {
    "@type": "Brand",
    name: "Ludo App & Software Development Company | ludo game developer in india",
  },
  description:
    "Comfygen is your reliable partner if you're searching for engaging expertise in Best ludo game app development company in the USA, the UK and India, providing first-class ludo game mobile app development services to help your online ludo app development services like android or iOS development services for experiences to reach new heights.",
  image: "https://www.comfygen.com/svg/comfygen-logo.svg",
  name: "Custom Ludo Game Development Company | Comfygen",
  review: [
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
    url: "https://www.comfygen.com/ludo-game-development",
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Comfygen Private Limited",
    },
  },
};
const ldJsonData1 = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  priceRange: "$20-$550",
  image: "https://www.comfygen.com/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/ludo-game-development",
  name: "No. 1 Ludo game development company in the USA, UK and India",
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
      name: "Saddam husen",
    },
  },
  url: "https://www.comfygen.com/ios-app-development",
  telephone: "+91 9587867258, +1 5145659471",
};
export default function LudoGame(props) {
  let { initialData } = props;
  const [admin, setAdmin] = useState(0);
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          Best Ludo Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a No. 1 Ludo game development company in India, and the USA. We have experienced ludo game application programmers to design ludo game apps with suitable prices. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ludo-game-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content=" Are you looking for the Brilliant Ludo Game Development Company In India? Contact us for the most realistic, graphically rich Ludo game development services."
        />
        <meta
          property="og:facebook_description"
          content="We are a leading Brilliant Ludo Game Development Company In Jaipur, India. Comfygen has proficient ludo game creators to create Ludo game applications and software for your business."
        />
        <meta
          property="og:twitter_title"
          content="No. 1 Ludo game development company in the USA, the UK, and India | We are a Ludo Game Development Services Provider globally."
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is a No. 1 Ludo game development company In India, The USA, The UK, And Germany offering apps and software development services to startups and dealings Worldwide"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="ludo game developer in India" />
        <meta
          name="summary"
          content="Comfygen is the Leading first-class ludo game app development company in India, USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish an ludo app development company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Ludo Game Development Company"
          content="Comfygen is a leading Ludo game development company in the USA, UK and India."
        />
        <meta name="category" content="Ludo game development company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="ludo game app development company in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          name="og:country-name"
          content='India, ["US","CA","GB","AD","AU","AT","BS","BH","IO","KM","CU","AR","CW","CY","DK","DM","EG","FK","FI","FR","DE","GR","GL","HK","IS","IN","ID","IT","JP","JE","JO","KW","KG","KR","MX","FM","NZ","NI","OM","PE","PH","PL","PT","QA","RO","RU","SA","SG","SE","SZ","CH","TH","TR","TN","UA","UM","AE","039","155","154","151","150"'
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Ludo Game Development Services Provider"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData1) }}
        />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }} /> */}
      </Head>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading="Ludo Game App Development Company "
              ptag="Make your ludo gaming application more interesting with the assistance from Comfygen Private Limited. We are one leading ludo game app development company In Canada & The USA, embark with the latest feature and tech trends integration. Our top-notch mobile game app developers can bring exciting and innovative alterations in the applications for crafting unforgettable user’s experience. Our final goal is to make the Ludo Game App Development Services & Solutions more demanding to gather audiences globally. Our belief is to create applications with fun and challenging elements ensuring reliability, user-friendliness, security and vast engagement."
              ptag1="Let’s have a discussion to start your project!!!"
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <AdviceSection
        heading="Top-Notch Ludo Game App Development Company in  India       "
        ptag=" We specialize in offering complete Ludo developing games services as a top Ludo game development company in India. Our group of talented programmers is experienced in producing engrossing Ludo games for numerous platforms. Whether you require cross-platform development or a Ludo game for mobile devices, we have the know-how to provide simple and engaging gameplay. We provide expert ludo game development services and the option to engage committed Ludo game app programmers because we have a solid track record of developing Ludo game applications. We are dedicated to providing high-quality Ludo game development solutions that are suited to your particular needs, from design to execution."
        imgSrc="/img/ludo-game-development-services-provider.webp"
        imgW={502}
        imgH={497}
        altTag="Ludo Game Development Services"
      />
      <ContactFromCenter />

      <div className="md:py-10 bg-gray-300">
        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Premium Quality Ludo Game App Development Services
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">
                Ludo has been a classic game for decades. Thanks to the
                technologies that are incredibly improving this gaming
                constantly; like now the game is available in mobile
                applications with some cool attractive features. Comfygen is the
                one-stop destination for every interested client to get a
                competitive and market standardized Ludo game app development
                for businesses.
              </p>
              <p className="text-base text-black text-justify">
                Here are some ludo game app development services we provide;
                like:
              </p>
              <ul className="space-y-2 text-left pt-4">
                {JSON_DATA.myList5.map((item, index) => (
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
              className=" w-[70%] rounded-md"
              title="Ludo Game Development App"
              alt="Ludo Game Development App"
              src="/img/ludo-game-development-app.webp"
              height={750}
              width={750}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </section>
      </div>

      <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={Bestchoice} />
      <section
        className="w-full bg-end bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("/img/hire-ludo.webp")` }}
      >
        <div className="w-full py-16 bg-black/80">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            {/* text-section */}
            <div className="space-y-4 lg:text-center text-white">
              <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Features of Ludo Gaming Application{" "}
              </h2>
              <p className="text-base">
                Comfygen believes to match the current market standards. Our
                ludo game app programmers implement some current common and
                additional updated features in the Ludo game application. The
                principle features we provide in the #No. 1 ludo gaming app are:
              </p>

              <div className="py-10">
                <div className="grid grid-cols-2 text-center border-b">
                  <span
                    onClick={() => setAdmin(admin === 0 ? 0 : 0)}
                    className={
                      admin === 0
                        ? " border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer "
                        : "bg-transparent  text-white  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                    }
                  >
                    Game Features
                  </span>
                  <span
                    onClick={() => setAdmin(admin === 1 ? 0 : 1)}
                    className={
                      admin === 1
                        ? " border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                        : "bg-transparent text-white  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                    }
                  >
                    Admin Panel
                  </span>
                </div>

                {admin === 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                      {JSON_DATA.FeaturesLudo.slice(0, 12).map((elem) => {
                        const { title, img, num } = elem;
                        return (
                          <div
                            key={num}
                            className="flex flex-col items-center space-y-2"
                          >
                            <Image
                              className="rounded-md"
                              alt={title}
                              src={img}
                              width={60}
                              height={60}
                            />
                            <p className="text-[#fff]">{title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
                {admin === 1 ? (
                  <>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                      {JSON_DATA.FeaturesLudo.slice(12, 18).map((elem) => {
                        const { title, img, num } = elem;
                        return (
                          <div
                            key={num}
                            className="flex flex-col items-center space-y-2"
                          >
                            <Image
                              className="rounded-md"
                              alt={title}
                              src={img}
                              width={60}
                              height={60}
                            />
                            <p className="text-[#fff]">{title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-16 py-4 bg-white">
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              World-Class Ludo Game App Development Process
            </h2>
            <p className="text-base text-slate-800">
              The mobile game app developers team at Comfygen follows a certain
              step-by-step process to build the best kind of ludo game app
              development possible. This Ludo game development process plays a
              significant role in completing the task with agility.
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
            {JSON_DATA.LudoProcess.map((elem) => {
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
      <section className="lg:py-16 py-4 bg-[#D1D5DB]">
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Why Choose Comfygen for Ludo Game App Development Company In
              India?
            </h2>
            <p className="text-base text-slate-800 md:text-center text-left">
              Undoubtedly there are many ludo game app development companies in
              India that exist serving leverages to clients for their
              businesses. We have some solid reasons to proof that, Confygen can
              be your right choice to hire- Ludo game app development Company in
              Jaipur
            </p>
            <p className="text-base text-slate-800 md:text-center text-left">
              Cost effective solutions
            </p>
            <p className="text-base text-slate-800 md:text-center text-left">
              Most importantly, clients think of the cost to invest in Ludo Game
              App Development. We are the recognised ludo game app development
              company in Jaipur, India allows clients to get the best gaming
              application development services within cost-effective bars.
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {JSON_DATA.WhyChoose.map((ludo) => {
              return (
                <div
                  key={ludo.num}
                  className="border border-[#0E1F51] p-4 space-y-2 shadow rounded"
                >
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                    {ludo.title}
                  </p>
                  <p className="text-base text-slate-800">{ludo.decs}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 space-y-10 py-10">
        <div className="flex flex-col justify-center text-center mx-auto">
          <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            Technologies Use to Build Ludo Gaming Application
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 border  divide-x-2 divide-y-2">
          {JSON_DATA.TechnoStack.map((elem) => {
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
      <section className="py-20 bg-[#02091A]">
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-3xl font-bold text-[#fff] ">
              Latest Tech-Trends to Include in Ludo Game App Development
            </h2>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {TechTrends.map((elem) => {
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
                  {decs}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center pt-10">
            <a
              href="/contact-us"
              className="flex justify-center items-center  "
            >
              <button className="shadow-sm transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-orange-100 group-hover:bg-white rounded cursor-pointer text-black  group">
                Let's Communicate With IT Expert!
              </button>
            </a>
          </div>
        </div>
      </section>
      <TalkExpert />
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
      </section>
      <section className="py-10">
        <div
          className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
          style={{ backgroundImage: `url("/img/hire-ludo.webp")` }}
        >
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#893EE7]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div>
      </section>
      <TalkExpert />
      <FaqSection
        faqData={JSON_DATA.Frequently}
        title="  Ludo Game Development Technology"
      />
      <BlogSection initialData={initialData} />
    </div>
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
