import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import Ourgames from "../../components/ourgames";
import { BsFillStarFill } from "react-icons/bs";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "./json/game.json";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const GuidSection = dynamic(() => import("./components/GuidSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function MultiChain(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new window.Image();
    img.src = "/img/hire-baccrate-game.webp";
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  const imageHire = {
    backgroundImage: loaded ? `url("img/hire-baccrate-game.webp")` : "none",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Game Development ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>Game development is the process of designing, developing, and releasing a video game. In most cases, multiple departments collaborate on the process. It can sometimes be handled by a single developer.</p>",
        },
      },
      {
        "@type": "Question",
        name: "What services do game development companies offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: " Game development companies offer a range of services including game concept development, game design, programming, art and asset creation, quality assurance testing, deployment, and ongoing support and updates for the game.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a video game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The time it takes to develop a video game can vary significantly depending on the complexity of the game, the size of the development team, and other factors. Generally, small indie games can take several months to a year to develop, while larger AAA games can take several years to complete.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to hire a game development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of hiring a game development company can vary based on several factors such as the complexity of the game, the size of the development team, the required technologies, and the level of customization. Small indie games can cost around $10,000 to $100,000, while larger AAA games can cost several million dollars.",
        },
      },
      {
        "@type": "Question",
        name: "Can game development companies help with marketing and publishing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many game development companies offer additional services such as marketing and publishing support. They can help with creating marketing strategies, promoting the game, optimizing app store presence, and even finding publishing partners to help distribute the game to a wider audience.",
        },
      },
      {
        "@type": "Question",
        name: "Can game development companies develop games for multiple platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most game development companies have experience developing games for multiple platforms such as PC, consoles (like PlayStation, Xbox), and mobile devices (iOS, Android).",
        },
      },
    ],
  };

  const GameProductSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: "Game App Development Company | Game Software Development Company",
    },
    description:
      " Comfygen is your dependable partner for the creation of a Top-Notch Game App & Software Development Company in UK, USA and UAE, providing first-class Game Software & Application Development Services to help your online Game software and Application venture to reach new heights.",
    image: "https://www.comfygen.com/svg/comfygen-logo.svg",
    name: "Game Development Company | Comfygen",
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

    // "offers": {
    //   "@type": "Offer",
    //   "url": "https://www.comfygen.com/game-development-company",
    //   "priceCurrency": "USD",
    //   "seller": {
    //     "@type": "Organization",
    //     "name": "Comfygen Private Limited"
    //   }
    // }
  };

  const GameDevelopmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.comfygen.com/game-development-company/",
        url: "https://www.comfygen.com/game-development-company/",
        name: "Game Development Company | Comfygen",
        isPartOf: {
          "@id": "https://www.comfygen.com/#website",
        },
        primaryImageOfPage: {
          "@id":
            "https://www.comfygen.com/game-development-company/#primaryimage",
        },
        image: {
          "@id":
            "https://www.comfygen.com/game-development-company/#primaryimage",
        },
        thumbnailUrl: "https://www.comfygen.com/svg/comfygen-logo.svg",
        dateModified: "2023-09-15T06:58:46+00:00",
        description:
          "Comfygen is a leading game development company that can offer end-to-end game design and development services. Hire our highly skilled game developers now to build a world-class Game development app & software at an affordable price.",
        breadcrumb: {
          "@id":
            "https://www.comfygen.com/game-development-company/#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://www.comfygen.com/game-development-company/"],
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id":
          "https://www.comfygen.com/game-development-company/#primaryimage",
        url: "https://www.comfygen.com/img/game-app-development-company.webp",
        contentUrl:
          "https://www.comfygen.com/img/game-app-development-company.webp",
        width: 365,
        height: 250,
        caption: "Game Development Company In USA",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.comfygen.com/game-development-company/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.comfygen.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Game Development Industry in USA, UK",
          },
        ],
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

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    priceRange: "$20-$55",
    image: "https://www.comfygen.com/svg/comfygen-logo.svg",
    "@id": "https://www.comfygen.com",
    name: "Game App Development Company India, USA, UAE, Germany",
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
    url: "https://www.comfygen.com",
    telephone: "+91 9587867258",
  };

  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Game Development Company In India & The USA | Hire Game Developer
        </title>
        <meta
          name="description"
          content="Comfygen is a leading game development company In India & The USA, that can offer end-to-end game app and software design and development services. Hire dedicated game developers now to build a word class Game app & software development at affordable price."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/game-development-company"
        />
        <meta
          name="robots"
          content=" Index,follow,MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Software Programmers"
        />
        <meta
          property="og:facebook_description"
          content="Custom Game App Development Company in the USA, UK, UAE | We provide the best quality Game Development Services along with features. Hire a Game App Development Company!"
        />
        <meta
          property="og:twitter_title"
          content="Best Game Development Services in the USA, UK and UAE | Game App & Game Software Developers"
        />
        <meta
          property="og:twitter_description"
          content="Are you looking for Game Development Company? Hire Video game developers & designers from top-making game studio in USA, UK and UAE"
        />
        <meta
          property="schema:type"
          content="Best Game Development Company | Game development services & Api Provider"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Game Development Company/ Firm/ Industries/ Organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of a Top-Notch Game App & Software Development Company in UK, USA and UAE, providing first- class Game Software & Application Development Services to help your online Game software and Application venture to reach new heights."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Game Development Company, firm, industry, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Game Development Company"
          content="Comfygen is best Game App & Software Development Company. Our Custom Game App & Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Leading Game Devlopment Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Game Application & Software Devlopment Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, And UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="article" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GameProductSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GameDevelopmentSchema),
          }}
        />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} /> */}
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
                heading="Game Development Company"
                ptag="Comfygen is best leading Game Development Company In India & The USA, We offers all sorts of game development services from scratch with a wide variety of preferences whether its mobile game development (ludo, poker, bingo, blackjack, etc) or a fantasy game development or might be betting app development services. We pride ourselves on offering a diverse array of engaging mobile gaming applications and web development platforms that cater to different game publishers worldwide."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          head=" "
          heading="Comfygen: The Best Game Development Company "
          ptag="Welcome to Infinite Realms of futuristic Gaming: Where Imagination Becomes Reality
          Comfygen is a top game development company in India, USA,UK & UAE that offers the most reliable and tech savvy mobile gaming apps and console gaming platforms with a very pocket friendly cost. With each project, we precisely customize every detail, leveraging cutting-edge technology to deliver a level of quality that is beyond your expectations. "
          ptag1="As one of the leading game development companies in the USA and other offshore countries, we stand at the forefront of the game development industry, designing exceptional virtual experiences that engage, inspire, and entertain the user base. We have a blend of passionate creators, expert Android and iOS developers, who alter your ideas into interactive realities that can take your new or traditional business to the new heights."
          ptag2="Our client-centric intention as the best game development company revolves around delivering not just games, but transformative experiences. Join us on this exhilarating journey as we continue to turn your imagination into a profitable venture that can light real stars in the sky among game development firms."
          imgSrc="/img/comfygen-the-best-game-development-company (1).webp"
          imgW={800}
          imgH={800}
          altTag="Comfygen: The Best Game Development Company"
        />
        <ContactFromCenter />
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Our Best <span className="text-blue-600">Game</span> Development
              </h2>
            </div>
            <div className="grid gap-16 lg:grid-cols-2 py-10 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.OurBestGame.map((elem) => {
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
        <Ourgames />
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/images/masterminds-behind-comfygens-game-developer-excellence.webp"
                alt="Casino Game Development Company in India"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Masterminds Behind Comfygen’s Game Developer Excellence
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Our team of skilled game developers stands at the pinnacle of
                  innovation creativity for transforming visions into immersive
                  realities. With a consistent zeal for creating exceptional
                  gaming apps they have expertise in developing robust gaming
                  apps whether its a fantasy sports app like dream 11 or a
                  betting app. They are the engineers behind the magic that
                  captivate major players around the globe.
                </p>
                <p className="text-base text-black text-justify">
                  Equipped with thorough proficiency in programming languages,
                  frameworks, and software tools, they consistently explore the
                  complexities of game turn of events. Our developers develop
                  all inclusive gaming platforms from scratch and their
                  adeptness in integrating APIs, SDKs, and third-party tools
                  elevates the user experience, while their knack for debugging,
                  testing, and performance optimization ensures smooth and
                  immersive gameplay.
                </p>
                <ul className="space-y-2 text-left pt-4">
                  {JSON_DATA.myList3.map((item, index) => (
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

        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Opt Our Best-in-Class Game Development Services
              </h2>
              <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                With a commitment to innovation, quality, and client
                collaboration, our game development company is dedicated to
                transforming your concepts into memorable gaming experiences
                that captivate players and make an impact in the industry. Our
                game development company brings a comprehensive range of
                services to the table designed to bring your gaming ideas to
                life and deliver exceptional experiences to players:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.OptService.map((elem) => {
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
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Demystifying our Game Development Process: A Step-by-Step Guide
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.StepByStep.map((elem) => {
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
        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 space-y-10 py-10">
          <div className="flex flex-col justify-center text-center mx-auto">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Comgygen’s Game Development Stack:{" "}
              <span className="text-blue-600">Tools & Technologies </span> We
              Ace In
            </h2>
            <p className="text-base text-slate-800">
              In the world of game development, a wide array of technologies
              comes into play to create immersive, engaging experiences. These
              technologies, among others, form the foundation of modern game
              development, enabling us to stay up-to-date with the latest tech
              trend among Gaming Industry. Here are some of the key game
              development technologies:
            </p>
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

        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lg:py-20 py-10"
            style={imageHire}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=" Game Development Company"
        />
        <GuidSection />
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
