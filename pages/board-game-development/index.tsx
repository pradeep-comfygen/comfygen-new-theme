import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaversegame.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Industries = dynamic(() => import("./components/Industries"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/decentralized-gaming.webp"
        alt="Decentralized Gaming Platform Development
    "
        width={50}
        height={50}
      />
    ),
    title: "Decentralized Gaming Platform Development",
    decs: "Working with you, our skilled designers or board game developers polish your concept to make sure it has a compelling subject matter, nicely balanced mechanics, and interesting player interaction. We develop and check prototypes iteratively, adjusting components, regulations, and balance based totally on entries from players. From card textual content clarity to dice probabilities, no element is too small. We create lucid, succinct, and aesthetically attractive rulebooks that assure easy gameplay for both newbie and professional gamers.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/game-art-and-animati.webp"
        alt="Casino Game Development Company in India"
        width={50}
        height={50}
      />
    ),
    title: "Game Art and Animation",
    decs: "With colorful idea artwork, character designs, and themed board layouts, our Web Board Game Application builders deliver your game to life. We create a global that is visually cohesive at the same time as taking pictures of the essence of your vision. Our team creates top-class additives that improve gameplay and upload a hint of luxurious, inclusive of tactile playing forums and attractive recreation portions. To enhance the player's revel in and upload an additional layer of immersion, we can include attractive animations for unique activities or digital components.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/multiplayer-board-ga.webp"
        alt="Multiplayer Board Game Development"
        width={50}
        height={50}
      />
    ),
    title: "Multiplayer Board Game Development",
    decs: "When your goal participant remembers that it is a boisterous organization, we create games that provide exceptional feasible stories for them. We make sure your recreation is playable with varying numbers of gamers and has enough depth to trap gamers to return for greater consultation after consultation. Our Board Game Development Solutions Company is privy to the social interplay's magical homes in board games. In order to leave gamers with enduring reminiscences of pleasant rivalries and shared laughter, we contain factors that sell talk, compromise, and healthful opposition.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/ar-enhanced-board-ga.webp"
        alt="AR-Enhanced Board Game Development"
        width={50}
        height={50}
      />
    ),
    title: "AR-Enhanced Board Game Development",
    decs: "We use the AR era to add layers of records, interactive factors, and immersive stories that aren't feasible on a tabletop recreation, seamlessly fusing the actual international with the virtual one. By the use of augmented truth (AR), we are able to screen new story possibilities, mystery locations, and interactive settings that will grow player immersion and deepen their reference to the game. We maintain an important equilibrium between the tactile pleasure of actual elements and the captivating capability of augmented fact.",
  },
  {
    num: "05",
    url: "/nft-game-development-company",
    icon: (
      <Image
        src="/img/cross-platform-board.webp"
        alt="Cross-Platform Board Game Development"
        width={50}
        height={50}
      />
    ),
    title: "Cross-Platform Board Game Development",
    decs: "We let you take the idea of your board recreation and turn it into an interesting online game that you can play on consoles, PCs, and cellular devices. Our group will make bigger, easy pass-platform play functions that allow gamers to interact and compete on any platform they select, boosting the popularity of your pastime and constructing a robust network. Moreover, we provide recommendations on worthwhile monetization strategies in your video game, together with in-app purchases, DLC expansions, or subscription fashions.",
  },
  {
    num: "06",
    url: "/game-development-company",
    icon: (
      <Image
        src="/img/game-testing-and-qua.webp"
        alt="Game Testing and Quality Assurance"
        width={50}
        height={50}
      />
    ),
    title: "Game Testing and Quality Assurance",
    decs: "To discover and fasten any balancing issues, rule ambiguities, or inconsistent gameplay, we carry out massive playtesting with a whole lot of participant corporations. Also, we make sure your game is inclusive and playable by means of players of different skill tiers, supplying clear policies, factors, and alternate alternatives. To guarantee a refined and enjoyable gaming revel in, we painstakingly polish every part of your game, from issue quality to image layout.",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/game-monetization-St.webp"
        alt="Game Monetization Strategies"
        width={50}
        height={50}
      />
    ),
    title: "Game Monetization Strategies",
    decs: "We help you find the best method for launching your sport in the marketplace by means of way of guiding you through the complexities of author negotiations, crowdfunding, and retail distribution channels. To attain your first-rate target market and generate buzz in your game, we assist you in growing a sturdy advertising and marketing plan that makes use of influencer relationships, social media, and focused advertising.",
    decs1:
      "To maintain player engagement and keep your game flourishing, our Android Board Game App Development group offers a continuous guide following the launch.  It consists of handling online communities, responding to player feedback, and organizing stay occasions.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/board-game-maintenan.webp"
        alt="Board Game Maintenance and Support"
        width={50}
        height={50}
      />
    ),
    title: "Board Game Maintenance and Support",
    decs: "To address participant inquiries and deal with any troubles they'll have, we create thorough FAQs and offer non-stop customer service. We can help you in growing exciting expansions that draw gamers in, prolonging the existence of your recreation and bringing in extra money.",
    decs1:
      "In order to guarantee that players can maintain taking part in your recreation for years to come, our board game app development services provide replacement elements for lacking or damaged components. To inspire a feeling of loyalty and ownership among your players, we will help you in strolling online communities, organizing occasions, and interacting with them.",
  },
];

const countryNames = [
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
];

const metaTags = countryNames.map((country, index) => (
  <meta key={index} name="og:country-name" content={country} />
));

const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Rated Board Game Development Company | Comfygen",
  url: "https://www.comfygen.com/board-game-development",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const productschema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Metaverse Game App Development Agency - Metaverse Game Application Development Company",
  image:
    "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Comfygen is a top-rated Board Game Development Company. We provide the best Metaverse Blockchain Game Development services and custom metaverse game app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};
const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Board Game Development Company | Comfygen",
  url: "https://www.comfygen.com/board-game-development",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
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
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
export default function Ecommerce(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Board Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Looking to develop engaging board games? Explore with Comfygen, a leading board game development company In India & The USA. Create a personalized gaming experience with Comfygen; Bring your board game project to life."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/board-game-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Board Game Development Company | Board Game Development Services | Metaverse Game App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Our certified metaverse game developers at Comfygen are the best metaverse game app programmers in the industry. Board Game Development Services with end-to-end expertise. With metaverse game app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Board Game Development company in the United States, Comfygen provide you top notch services of metaverse game application development with any game platform services and solutions with bets Board Game Development Programmers."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated Board Game Development Agency"
        />
        <meta name="summary" content="Leading Board Game Development Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Board Game Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Best Board Game Development Company' content='Empowering businesses with cutting-edge Board Game Development Services and solutions and Comfygen's experts metverse blockchain dApp game development services to drive innovation and sustainable growth in the digital economy." />
        <meta
          name="category"
          content="Board Game Development Company, Services - Metaverse blockchain dApp game development"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Board Game Development Company - Board Game Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Board Game Development Service Provider"
        />
        {metaTags}
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productschema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>

      {/* hero section */}
      <div
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading="Board Game Development Company"
              ptag="Are you looking for quality board game development services ? Comfygen is right here to provide you with nice board game development solutions with the support of a modern and nicely skilled group of game designers, testers, and developers. We are one of the main board game development company In India & The USA, giving you a nice roadmap to increase your board game."
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: `url("/metaverse/metaverse-bg.webp")` }}
      >
        <div className="bg-black/80">
          <AdviceSection
            heading="Your Board Game Development Partner"
            ptag="Are you caught in prototype hell? Introducing Comfygen, your collaborator in board game software development! With our revel in at every stage, we feed your passion. Our masters of advertising create buzz, artists create breathtaking pics, and we polish your mechanics. We carefully playtest to make sure your masterpiece is wonderful. "
            ptag1="Put a stop to your solitary struggles with Comfygen. Now, you've got a group at the back of you, celebrating every win and overcoming obstacles together. So, let your inner game master loose; we are right here to convert your fantasies into cardboard kingdoms! Come along for the journey as we create imaginative games together, one cardboard container at a time!"
            imgSrc="/img/your-board-game-deve.webp"
            imgW={550}
            imgH={500}
            altTag="Your Board Game Development Partner"
          />
          <ContactFromCenter />
          {/* services */}
          <section
            className="overflow-hidden bg-no-repeat bg-fixed bg-cover"
            style={{
              backgroundImage: `url("/img/board-game-design-dev-service-bg.webp")`,
            }}
          >
            <div className="bg-[#000]/80 py-4 lg:py-10 ">
              <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
                <div className="space-y-4">
                  <div className="flex flex-col justify-center text-center ">
                    <h2 className="py-2 text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">
                      {" "}
                      Our Board Game Design and Development Service{" "}
                    </h2>
                    <p className="text-base text-white">
                      Board games have the capability to take you to imaginary
                      worlds and create valuable recollections, whether you are
                      playing them while cuddled up in a heated armchair or
                      collected around a roaring fire. However,{" "}
                      <span className="font-bold">
                        board game application development
                      </span>{" "}
                      thoughts can be intimidating, hard, and fraught with
                      unanticipated dangers, similar to mountain climbing Mount
                      Cardboard.
                    </p>
                    <p className="text-base text-white">
                      Comfygen presents an all-inclusive 8-step carrier with the
                      intention to lead you from an idea's inception to a
                      cultured, playable masterpiece. Let's take a step-by-step
                      observe the magic we weave.
                    </p>
                  </div>
                  <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                    {Arena.map((elem) => {
                      const { title, icon, decs, url } = elem;
                      return (
                        <div className="w-full bg-[#F9EBEB] rounded-xl">
                          <div className=" text-gray-50  p-8 space-y-3">
                            <div className="w-20 h-20 bg-[#1C1834] shadow rounded-[17px] flex justify-center items-center">
                              <span> {icon}</span>
                            </div>
                            <div className="text-2xl font-extrabold text-black">
                              {title}
                            </div>
                            <p className="leading-snug text-black">{decs}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:py-10 py-4 bg-gray-100/20">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Capitalize on our Board Game Development Expertise with the
                  below Technology Stack
                </h2>
                <p className="text-base text-[#ffffff]">
                  It takes more than just creativity to create the board
                  recreation of your goals; you furthermore might need the right
                  equipment. At Comfygen, we use the latest technology to carry
                  your idea to life in a sophisticated, pleasing manner. With
                  this strong tech stack and our experience, you can make the
                  next big board game hit.
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.LatestTechno.map((elem) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className="border p-8 space-y-2 shadow-md shadow-[#BE5EBC] border-l-[16px] rounded-tl-3xl rounded-br-3xl border-[#16BDFA] bg-white"
                    >
                      <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-2xl font-semibold">
                        {title}
                      </p>
                      <p className="text-base text-slate-800">{decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="lg:py-10 py-4">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-11/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Reasons Why Your Business Needs Board Game Development
                </h2>
                <p className="text-base text-[#ffffff]">
                  In a world where digital experiences rule, creating board
                  games has become a smart way for companies to interact with
                  their target market and build a devoted following. Whether
                  they are played online or through augmented reality, board
                  games' dynamic nature presents special chances for businesses
                  to engage with their target audience. Let’s understand why
                  your company should fund the creation of board games.
                </p>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.ProcessNFT.map((elem) => {
                  const { title, img, decs, decs1, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-6  bg-[#201325] border rounded-xl group hover:bg-white transition-all duration-200"
                    >
                      <a href="#" className="space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-white group-hover:bg-[#201325] rounded-full bg-gradient-to-t">
                          <Image
                            width={100}
                            height={100}
                            src={img}
                            alt={title}
                            title={title}
                            className="w-16"
                          />
                        </div>
                        <h3 className="text-lg font-extrabold group-hover:text-[#0E1F51] transition-all duration-200 text-left text-white">
                          {title}
                        </h3>
                        <p className="font-medium text-left text-white group-hover:text-black break-all transition duration-200 ease-in-out">
                          {decs}
                        </p>
                        <p className="font-medium text-left text-white group-hover:text-black break-all transition duration-200 ease-in-out">
                          {decs1}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center pt-10 w-11/12 mx-auto">
              <Link href="/contact-us" passHref={true}>
                <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit  group">
                  Connect to IT Expert! Connect Us
                </button>
              </Link>
            </div>
          </section>
          <div
            className="bg-center bg-no-repeat bg-cover bg-fixed "
            style={{ backgroundImage: `url("/img/android-process-bg.webp")` }}
          >
            <section className=" py-4 lg:py-20  bg-[rgba(5,10,20,.95)]/30">
              <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
                <div className="space-y-4">
                  <div className="flex flex-col justify-center text-center ">
                    <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem] ">
                      Our Game Development Process our{" "}
                      <span className="text-[#B564C0]">experts follow</span>
                    </h2>
                    <p className="text-white">
                      The approach of creating a recreation is complicated and
                      multifaceted, requiring a cautious balance of technical
                      expertise, creative vision, and meticulous execution. At
                      Comfygen, we take incredible delight in presenting super
                      gaming experiences via adherence to a clear and organized
                      technique for developing video games. It walks you through
                      the essential phases that our experts go through, starting
                      with ideation and conceptualization and finishing with
                      publish-release help.{" "}
                    </p>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <div className={`${styles.outer}`}>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>
                            Conceptualization and Idea Generation
                          </h3>
                          <p>
                            Any successful sport begins with an interesting
                            concept. First, we thoroughly explore ideas for our
                            video games. Our creativity and in-depth knowledge
                            of marketplace developments drive this procedure. We
                            maintain brainstorming periods in which we explore
                            distinctive subject matters, genres, and mechanics
                            that supplement our creative vision and the tastes
                            of our intended target audience.
                          </p>
                          <p>
                            We additionally carry out marketplace research in
                            this section to discover gaps, styles, and player
                            alternatives. This guarantees that our ideas aren't
                            the simplest sparkling; however, even a threat of
                            connecting with the target market has. A polished
                            sports concept that acts as a street map for the
                            improvement method is the end result of this phase.
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>Game Design</h3>
                          <p>
                            After developing a sturdy concept, our professionals
                            flow onto the sport layout degree. Here, we
                            painstakingly create the game's blueprint, outlining
                            its predominant gameplay mechanics, characters,
                            levels, and interface. A thorough design file is
                            created for those capabilities as an improvement
                            crew avenue map is fabricated from the game layout
                            stage.{" "}
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>Development</h3>
                          <p>
                            Our improvement group takes the lead in bringing the
                            game to existence, armed with a complete design
                            record. Coding, programming, and integrating the
                            specific additives inside the format report are all
                            part of the development phase. Our specialists use
                            brand-new systems and tools for game improvement,
                            like Unreal Engine, Unity, and Cocos2d-x, to
                            construct a solid and expandable recreation
                            structure.
                          </p>
                          <p>
                            Throughout the development system, ordinary verbal
                            exchange and cooperation among programmers,
                            designers, and artists are crucial. This guarantees
                            that the creative vision is maintained and that
                            boundaries or unanticipated troubles are quickly
                            resolved. We study agile improvement procedures the
                            entire manner, which offers us the capacity and
                            versatility to respond to changing requirements.
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>
                            Testing and Quality Assurance
                          </h3>
                          <p>
                            A key issue of our game development technique is an
                            excellent guarantee. To find and fix insects, system
                            faults, and overall performance problems, thorough
                            checking is completed. To make sure that gamers have
                            a faultless and pleasant experience, our group
                            carefully reviews every part of the game, together
                            with the patron interface, images, sound, and
                            gameplay mechanics.
                          </p>
                          <p>
                            We test the sport's usability in addition to its
                            functionality to decide how purchaser-pleasant and
                            particular it's far for the very last customer.
                            Through iterative cycles, comments from testing
                            levels are integrated into the improvement method,
                            making sure a refined very last product.
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>Deployment</h3>
                          <p>
                            The deployment section starts whilst the game
                            reaches its final shape. Our Whitelabel board game
                            software program staff takes care of the technical
                            components of the distribution, together with
                            compliance and platform-precise requirements. It
                            facilitates a guarantee of an easy and error-loose
                            launch. Regardless of the game's platform, cellular,
                            console, or PC, we manage the nuances of every to
                            maximize the person's experience.
                          </p>
                          <p>
                            In addition, coordinating advertising and marketing
                            plans, building anticipation for the impending
                            release, and organizing a presence on virtual
                            storefronts are all a part of the deployment. Not
                            only do we want to launch the sport, but we
                            additionally want to launch it efficiently, drawing
                            within the supposed target market and constructing
                            anticipation for a powerful market debut.
                          </p>
                        </div>
                      </div>
                      <div className={`${styles.card}`}>
                        <div className={`${styles.info}`}>
                          <h3 className={`${styles.title}`}>
                            Post-Launch Support
                          </h3>
                          <p>
                            Our game improvement procedure includes
                            submit-launch aid as a critical aspect so the
                            adventure would not give up with deployment. We
                            track player entry, have a look at performance
                            signs, and keep a watch out for any new issues.
                            Updates and patches are frequently launched to
                            restore insects stated via players, upload clean
                            cloth, and preserve the hobby of the gaming network.
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-white text-center mt-5">
                          Another threat to investigating unique revenue streams
                          is through post-release help, which includes DLC,
                          expansions, and in-sport purchases. Our Turnkey board
                          game software team ensures that our games adapt to the
                          marketplace and player comments in order to hold them
                          relevant and long-lasting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <a href="/contact-us" className="mt-5">
                    <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                      SCHEDULE A CALL
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <Industries />
          <section className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-10 py-10">
            <div className="bg-center bg-no-repeat bg-cover rounded-md bg-[#000]">
              <div className="flex flex-col justify-center items-center text-center mx-auto ">
                <h2 className="py-4 text-3xl lg:text-4xl  font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff] ">
                  Choose your desired engagement Model for Board Game
                  Development
                </h2>
                <p className="text-base text-[#ffffff] p-4">
                  The key to growing at a hit board recreation is selecting the
                  right engagement version from the board game development
                  company in the USA. At Comfygen, we offer three unique
                  fashions to meet the diverse wishes of our customers.
                </p>
              </div>
              <div className="grid  lg:gap-6 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10">
                {JSON_DATA.EngagementModelBoard.map((elem: any) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.desiredCard} w-full justify-center items-center space-y-2 bg-[#ede2ed] p-6 rounded-xl`}
                    >
                      <h2 className=" font-bold 2xl:text-3xl xl:text-2xl text-xl text-[#000] text-start">
                        {title}
                      </h2>
                      <p className="text-base text-start text-black">{decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="lg:py-16 py-4 bg-white">
            <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
              <div className="">
                {JSON_DATA.OwnMetaverse.map((elem: any) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className="w-full flex flex-col justify-center items-center text-center space-y-2"
                    >
                      <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                        {title}
                      </h2>
                      <p className="text-base text-slate-800">{decs}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.EngagementModel.map((elem: any) => {
                  const { title, decs, num, img, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2"
                    >
                      <div className="flex items-center  space-x-2">
                        <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="60" height="60" />
                        </div>
                        <a
                          href={url}
                          className="hover:underline underline-offset-2"
                        >
                          <h3 className="text-base font-bold text-black">
                            {title}
                          </h3>
                        </a>
                      </div>
                      <div>
                        <p>{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Why should you choose our Developers for Board Game Development?
              </h2>
              <p className="text-base text-white">
                Select our developers at Comfygen for board game development
                because we offer a wide range of advantages.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.WhyChoose.map((metaversegame) => {
                return (
                  <div
                    key={metaversegame.num}
                    className="border p-6 space-y-2 shadow bg-black rounded-tl-[40px] rounded-br-[40px] hover:rounded-none transition-all duration-200 ease-in-out"
                  >
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {metaversegame.title}
                    </p>
                    <p className="text-base text-[#fff]">
                      {metaversegame.decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <Link
              href="https://api.whatsapp.com/send?phone=919587867258"
              target="_blank"
              passHref={true}
            >
              <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                Want To Get The Best Solution? Connect Us
              </button>
            </Link>
          </div>
        </div>
        <section
          className="bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className=" lg:py-20 py-10 bg-[#000]/70">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#2563EB]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  Board Game Development "
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
