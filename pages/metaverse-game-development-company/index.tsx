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
        src="/metaverse/decentralized-gaming-platform-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Decentralized Gaming Platform Development",
    decs: "Our metaverse game development services help you create decentralized gaming platforms that are capable of hosting multiple games across different genres. On top of it, our team also has expertise in creating metaverse gaming platforms with features that can attract the target audience. Our decentralized gaming platforms also offer the value advantage of scalability alongside the flexibility for accommodating additional games in the future.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/metaverse/play-to-earn-game-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Play-to-Earn Game Development",
    decs: "We specialize in one of the most common models for developing metaverse games. Our reputation as a metaverse game development company emerges from our expertise in creating play-to-earn gaming experiences across different genres. We can incorporate the play-to-earn mechanics in metaverse games alongside designing functional economies. Make your metaverse games more interesting by helping players monetize their gaming experiences with NFTs as rewards.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/metaverse/metaverse-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Metaverse Marketplace Development",
    decs: "Our services for metaverse game development projects also take user satisfaction to the next level by including metaverse marketplace development solutions. We can create custom NFT marketplaces that could enable exchange and sale of different types of digital assets used in metaverse games. Our developers can provide secure and seamlessly functional metaverse marketplaces featuring integration with top wallets and payment gateways.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/metaverse/metaverse-virtual-environments.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Metaverse Virtual Environments",
    decs: "The virtual environments in metaverse games are one of the most noticeable highlights that draw the attention of players. You can rely on our metaverse gaming platform development experts to create immersive 3D virtual environments for metaverse games. Our expert designers pay attention to every detail for creation of the 3D spaces for metaverse games to ensure that the virtual environments are extremely realistic.",
  },
  {
    num: "05",
    url: "/nft-game-development-company",
    icon: (
      <Image
        src="/metaverse/nft-game-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "NFT Development",
    decs: "You can also leverage our expertise in NFT development to enhance your metaverse game development projects. Non-fungible tokens serve as the representatives of digital assets within metaverse games. We can help you create different types of NFTs for representing digital experiences, virtual real estate, avatars, artworks and in-game collectibles. Our experts specialize in creation of NFTs on top blockchain platforms, including Ethereum and Solana. ",
  },
  {
    num: "06",
    url: "/game-development-company",
    icon: (
      <Image
        src="/metaverse/custom-game-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Custom Game Development",
    decs: "As one of the top metaverse development companies, we specialize in creating custom games for the metaverse from scratch. Our experts can understand your special requirements and design exclusive metaverse games that offer an interactive experience to players. We have worked on different metaverse game projects, beginning with the conceptualization of initial ideas for the game and creating functional games with the essential features.",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/metaverse/metaverse-consulting-services.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Metaverse Consulting Services",
    decs: "We offer the element of personalization in our metaverse game development services through our specialized metaverse consultation services. You can use our Metaverse consulting services to streamline the journey of your Metaverse game development project. Our consultants could help you create the ideal roadmap for your project with special attention to your requirements, alongside offering ideal solutions for addressing the complexities of your project.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/metaverse/metaverse-3d-avatar-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Metaverse 3D Avatar Development",
    decs: "Our metaverse gaming platform development expertise also helps you add customizable hyper-realistic 3D avatars for metaverse games. You can also create realistic avatars for other use cases in metaverse games, such as virtual real estate, education, and NFT trading, to offer immersive metaverse experiences. We help you leverage 3D avatar development services for transforming and delivering unique gaming experiences for users.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/metaverse/metaverse-digital-twin-development.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Metaverse Digital Twin Development",
    decs: "We also include metaverse digital twin development services in our portfolio to help you capitalize on the innovative potential of the metaverse. You can develop a digital twin for your business model within the metaverse for different use cases. Our experts have worked on creating digital twins of real estate, smart city projects, and virtual counterparts of physical merchandise within the metaverse.",
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
  name: "Top Rated Metaverse Game Development Company | Comfygen",
  url: "https://www.comfygen.com/metaverse-game-development-company",
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
    "Comfygen is a top-rated Metaverse Game Development Company. We provide the best Metaverse Blockchain Game Development services and custom metaverse game app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};
const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Metaverse Game Development Company | Comfygen",
  url: "https://www.comfygen.com/metaverse-game-development-company",
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
          Best Metaverse Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a best Metaverse Game development company In India & The USA that helps to create a game with high-end technologies. Comfygen offers a very unique 3D virtual gaming platform on any decentralized network. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/metaverse-game-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Metaverse Game Development Company | Metaverse Game Development Services | Metaverse Game App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Our certified metaverse game developers at Comfygen are the best metaverse game app programmers in the industry. Metaverse Game Development Services with end-to-end expertise. With metaverse game app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Metaverse game development company in the United States, Comfygen provide you top notch services of metaverse game application development with any game platform services and solutions with bets metaverse game development Programmers."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated Metaverse Game Development Agency"
        />
        <meta
          name="summary"
          content="Leading Metaverse Game Development Firm"
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Metaverse Game Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Best Metaverse Game Development Company' content='Empowering businesses with cutting-edge Metaverse game Development Services and solutions and Comfygen's experts metverse blockchain dApp game development services to drive innovation and sustainable growth in the digital economy." />
        <meta
          name="category"
          content="Metaverse Game Development Company, Services - Metaverse blockchain dApp game development"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Metaverse Game Development Company - Metaverse Game Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Metaverse Game Development Service Provider"
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
              heading="Metaverse Game Development Company"
              ptag1="We at Comfygen, help you to create 3D metaverse worlds by integrating innovative latest technologies. Our Metaverse Game development company based In India & The USA, has skillful game developers who can bring your imagination of the game to this reality. Our metaverse game development team members have adequate knowledge on the latest technology to develop custom metaverse game development services. We can create games on different blockchain development  networks such as Ethereum, Avalanche, Binance Smart Chain, Polygon, and Solana."
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
            heading="Create a New Generation of Gaming Experiences on the Metaverse with Experts"
            ptag="As one of the notable and trusted names in the domain of metaverse game development, we have strived to achieve excellence in almost every aspect of our projects. We take pride in the efforts and dedication our developers put into creating metaverse games that could attract new users. Our experts have also gained industry experience, which helps them create metaverse games that could serve as promising tools for blending metaverse and the gaming industry."
            imgSrc="/metaverse/create-a-new-generation-of-gaming-experiences-on-the-metaverse-with-experts.webp"
            imgW={550}
            imgH={500}
            altTag="Create a New Generation of Gaming Experiences on the Metaverse with Experts"
          />
          <ContactFromCenter />
          {/* services */}
          <section className="py-4 lg:py-10">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">
                    Metaverse Game Development Services
                  </h2>
                  <p className="text-base text-white">
                    We are one of the top metaverse game development companies
                    with specialization in the tech stack required for creating
                    modern metaverse games. Our expertise in different metaverse
                    development technologies, blockchain technology, AR/VR, and
                    gaming models such as play-to-earn and play-to-earn helps us
                    deliver excellence in all our services.
                  </p>
                </div>
                <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                  {Arena.map((elem) => {
                    const { title, icon, decs, url } = elem;
                    return (
                      <div className="relative w-full">
                        <div className="absolute -right-4 -bottom-4 bg-white/60 h-full w-full rounded-xl md:flex hidden"></div>
                        <a href={url}>
                          <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                            <div className="w-28 h-28 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                              <span> {icon}</span>
                            </div>
                            {/* <div className="h-2 w-20 bg-black/60"></div> */}
                            <div className="text-2xl font-extrabold text-white">
                              {title}
                            </div>
                            <p className="leading-snug text-gray-400">{decs}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="lg:py-10 py-4 bg-gray-100/20">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Features of our Metaverse Game Development
                </h2>
                <p className="text-base text-[#ffffff]">
                  Leverage the benefits of unique features for your metaverse
                  games with the help of our experts.
                </p>
              </div>
              <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.LatestTechno.map((elem) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className="border p-3 space-y-2 shadow-md shadow-[#BE5EBC] border-l-[16px] rounded-tl-3xl rounded-br-3xl border-[#16BDFA] bg-white"
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
          <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
            <p className="text-2xl font-bold text-white">Have a Query?</p>
            <div>
              <Link href="/contact-us" passHref={true}>
                <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                  Contact Now
                </span>
              </Link>
            </div>
          </div>
          <section className="lg:py-10 py-4">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Business Benefits of Our Metaverse Game Development
                </h2>
                <p className="text-base text-[#ffffff]">
                  Comfygen can help you achieve promising benefits by creating
                  your own metaverse gaming platform.
                </p>
              </div>
              <div className="grid  lg:gap-6 gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {JSON_DATA.VariousDomains.map((metaversegame) => {
                  return (
                    <div
                      key={metaversegame.num}
                      className="border p-3 space-y-2 shadow-sm shadow-[#BE5EBC] bg-gray-100/10"
                    >
                      <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                        {metaversegame.title}
                      </p>
                      <p className="text-base text-[#ffffff]">
                        {metaversegame.stack}
                      </p>
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
          <Industries />
          <section className="py-10 ">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center ">
                <h2 className="text-4xl font-bold text-[#ffffff] ">
                  Tech Stack Used for Metaverse Game Development
                </h2>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.ProcessNFT.map((elem) => {
                  const { title, img, decs, num, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-6  bg-[#201325] border rounded-xl group hover:bg-white transition-all duration-200"
                    >
                      <a href={url} className="space-y-4">
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
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className=" py-10  w-11/12  space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                Why Should You Invest in Metaverse Game Development?
              </h2>
              <p className="text-base text-white">
                Well, metaverse has significant potential for gaming and it will
                help to bridge the gap between virtual and real worlds. This
                metaverse gaming will help the players to interact with the real
                world through the virtual world. We at Comfygen, understand this
                opportunity and help to create this bridge so that players can
                socialize, engage and compete at different levels.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 divide-y divide-x">
              {JSON_DATA.TecnologisStack.map((nftmarketplace) => {
                return (
                  <div
                    key={nftmarketplace.num}
                    className="p-6 text-center bg-white space-y-2 hover:bg-[#000000]/60 transition-all duration-300 ease-in-out group"
                  >
                    <Image
                      src={nftmarketplace.img}
                      alt={nftmarketplace.title}
                      className="mx-auto"
                      width={400}
                      height={200}
                    />
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-lg group-hover:text-white">
                      {nftmarketplace.title}
                    </h3>
                    <p className="group-hover:text-white">
                      {" "}
                      {nftmarketplace.stack}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="py-10 lg:py-20">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                Our Process for Developing Immersive Metaverse Games
              </h2>
            </div>
            <div className="flex flex-col-reverse items-center mx-auto space-y-10 w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex-row md:space-x-10 md:space-y-0 py-10">
              <div className="flex justify-center  lg:justify-start pb-10 lg:pb-0 w-full">
                <Image
                  className="rounded-md"
                  title="Our Process for Developing Immersive Metaverse Games"
                  alt="Our Process for Developing Immersive Metaverse Games"
                  src="/metaverse/our-process-for-developing-immersive-metaverse-games.webp"
                  height={450}
                  width={800}
                  loader={uploadcareLoader}
                  unoptimized={true}
                />
              </div>
              <div className="w-full space-y-6 text-left">
                <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
                  {JSON_DATA.ImmersiveMetaverse.map((elem) => {
                    const { title, decs, num } = elem;
                    return (
                      <div
                        key={num}
                        className="p-6 space-y-4 bg-[#000] border shadow-sm shadow-[#16BDFA] hover:border-[#BE5EBC] rounded-xl group  transition-all duration-200"
                      >
                        <h3 className="text-lg font-extrabold  transition-all duration-200 text-left text-white">
                          {title}
                        </h3>
                        <p className="font-medium text-left text-white  break-all transition duration-200 ease-in-out">
                          {decs}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-10 py-10">
            <div className="bg-center bg-no-repeat bg-cover rounded-md bg-[#000]">
              <div className="flex flex-col justify-center items-center text-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl  font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  We Serve Multiple Types of Metaverse Games for Different Use
                  Cases
                </h2>
                <p className="text-base text-[#ffffff]">
                  With our expertise in blockchain, smart contracts, and
                  metaverse technology, we have emerged as one of the top
                  metaverse development companies for our clients. Our experts
                  can help you create metaverse games for different types of use
                  cases. We create different types of metaverse games with
                  different features.
                </p>
              </div>
              <div className="grid  lg:gap-6 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10">
                {JSON_DATA.MultipleMetaverse.map((metaversegame) => {
                  return (
                    <div
                      key={metaversegame.num}
                      className="border p-3 space-y-2 shadow-sm shadow-[#BE5EBC] bg-gray-100/10"
                    >
                      <p className="text-white text-xl font-semibold">
                        {metaversegame.title}
                      </p>
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
              <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
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
                Why Should You Choose Comfygen for Metaverse Game Development?
              </h2>
              <p className="text-base text-white">
                We are on a mission to empower business of all industries or
                those who want to be part of Game development. We will help you
                to enter into the world of metaverse with your creative and
                transform your creativity to reality without focused solutions.
                Get a sneak peak below why you need hire a Metaverse game
                development company like us:
              </p>
            </div>
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-3">
              <div className="xl:space-y-10 space-y-4">
                {JSON_DATA.WhyChoose.slice(0, 3).map((metaversegame) => {
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
              <div className="flex justify-center items-center">
                <img
                  src="/metaverse/iron-man.webp"
                  alt="VR"
                  className="w-full"
                />
              </div>
              <div className="xl:space-y-10 space-y-4">
                {JSON_DATA.WhyChoose.slice(3, 6).map((metaversegame) => {
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
          </div>
          <div className="flex justify-center items-center py-4">
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

          <div className="py-10">
            <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#070008]/50 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center space-y-2">
                <h2 className="text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">
                  Why Should You Hire Comfygen Immerse Metaverse Game
                  Developers?
                </h2>
              </div>
              <div className="grid gap-10 lg:p-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                {JSON_DATA.WhyHire.map((elem) => {
                  const { title, num, decs, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-4 bg-black shadow-[#BE5EBC] shadow-md transition-all duration-300 ease-in-out"
                    >
                      <a href={url}>
                        <div className="space-y-2">
                          <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-bold">
                            {title}
                          </h2>
                          <p className="text-base text-white">{decs}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center py-4">
              <Link href="/contact-us" target="_blank" passHref={true}>
                <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Do you want the best developer? Connect Us
                </button>
              </Link>
            </div>
          </div>
          <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
                <div className="flex xl:py-12">
                  <Image
                    src="/metaverse/do-you-have-more-questions-on-metaverse-game-development-services.webp"
                    width={800}
                    height={521}
                    blurDataURL="URL"
                    placeholder="blur"
                    loader={uploadcareLoader}
                    unoptimized={true}
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                    alt=" Do You Have More Questions on Metaverse Game Development Services?"
                  />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                <div className="flex h-full items-center rounded-lg bg-[#150441]/40 p-6 text-center text-white xl:pl-12 xl:text-left">
                  <div className="xl:pl-12 space-y-2">
                    <h2 className="mb-6 text-3xl font-bold">
                      Do You Have More Questions on Metaverse Game Development
                      Services?
                    </h2>
                    <p className="">
                      If you have any doubts about our metaverse game
                      development services, then you can talk to our consultant
                      right now.{" "}
                    </p>
                    <div className="pt-8">
                      <Link href="/contact-us" passHref={true}>
                        <button
                          type="button"
                          className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Get in touch now.
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Develop Other Games{" "}
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
        </div>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  Metaverse Game Development "
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
