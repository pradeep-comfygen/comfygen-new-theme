import { useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/blockchain.json";
import LazyLoad from "react-lazy-load";
const AltcoinCom = dynamic(() => import("./components/AltcoinCom"), {
  loading: () => <p>Loading...</p>,
});
const TechnoStack = dynamic(() => import("./components/TechnoStack"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("./components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});

const Process = [
  {
    num: "1",
    url: "/blockchain-consulting-services",
    icon: (
      <Image
        src="/img/blockchain-consulting-icon.webp"
        alt="Blockchain Technology Consulting"
        width={50}
        height={50}
      />
    ),
    title: "Blockchain Consulting",
    decs: "As we proudly say being the #No1 blockchain development company in India, our foremost priority is to initiate the process with blockchain consulting. The development success depends upon the consulting session, where our project manager, experienced developers, and clients will discuss and create a roadmap to understand how to further take the development process.",
  },
  {
    num: "2",
    icon: (
      <Image
        src="/img/custom-blockchain-app-development-icon.webp"
        alt="NFT Marketplace Development"
        width={50}
        height={50}
      />
    ),
    title: "Custom Blockchain App Development",
    decs: "We build custom blockchain solutions integrated with clientele specific business needs and purposes. Security, Scalability, Flexibility, and Transparency - We can design a custom blockchain app which delivers these all 4 qualities. Our solutions will speak for itself via meeting all the business requirements and leads to optimum results as well.",
  },
  {
    num: "3",
    url: "/dapp-development-company",
    icon: (
      <Image
        src="/img/decentralized-application-daap-development.webp"
        alt="Blockchain Supply Chain Development"
        width={50}
        height={50}
      />
    ),
    title: "Decentralized Application (dApps) Development",
    decs: "We build decentralized applications or dApps, which are secured and scalable in the blockchain landscape. The dApps built by our professionals are accessible on any network, as well as fully secured to prevent any threats. Also, these applications have the potential to gain maximum ROI in any business vertical. ",
  },
  {
    num: "4",
    icon: (
      <Image
        src="/img/smart-contract-development-icon-image.webp"
        alt="Smart Contracts Development (ICO)"
        width={50}
        height={50}
      />
    ),
    url: "/smart-contract-development",
    title: "Smart Contract Development",
    decs: "Comfygen is a powerful and exclusively talented smart contract development company, that enables the creation of tamper-proof and secured contracts, which eliminate the chances of errors, bring accuracy, and enhance the security. We have the best blockchain developers in India, who can build secured contracts to keep the business ecosystem transparent.",
  },
  {
    num: "5",
    icon: (
      <Image
        src="/img/blockchain-wallet-development-icon-img.webp"
        alt="Blockchain Wallet Development"
        width={50}
        height={50}
      />
    ),
    url: "/crypto-wallet-development",
    title: "Blockchain Wallet Development",
    decs: "Comfygen can favor you with excellent blockchain wallet and exchange development, where we build super efficient wallets to manage the cryptocurrencies and exchange platforms to trade and store seamlessly with crypto currencies. The crypto wallets we create are featured with advancements; such as QR Scanner, biometric, blockchain support, two-way authentication, etc for more security and quick transactions. ",
  },
  {
    num: "6",
    url: "/cryptocurrency-exchange-development",
    icon: (
      <Image
        src="/img/cryptocurrency-exchange-development.webp"
        alt="Custom Blockchain App Development"
        width={50}
        height={50}
      />
    ),
    title: "Cryptocurrency Exchange Development",
    decs: "The blockchain developers at Comfygen can build a streamlined and fully data-packed cryptocurrency exchange platform for on-to-go trading. Our solutions will provide humongous market data, statistics, and advanced charting features to let the traders know what and how to trade by the time for scalability with flexibility. ",
  },
  {
    num: "7",
    url: "/crypto-token-development-company",
    icon: (
      <Image
        src="/img/crypto-token-development-icon.webp"
        alt="Automatic / Manual ICO Dashboard "
        width={50}
        height={50}
      />
    ),
    title: "Crypto Token Development ",
    decs: "We will tokenize your real assets to help in being accessible to a wide range of investors. Our blockchain token development team can create feature-enriched tokenization solutions for blockchain asset digitization. With the help of asset tokenization platform development, new avenues of financial assets will open their gateways and make the tokens accessible and tradeable on different digital platforms. ",
  },
  {
    num: "8",
    icon: (
      <Image
        src="/img/ieo-and-ICO-development-icon.webp"
        alt="Decentralized Exchange (OTC Exchange)"
        width={50}
        height={50}
      />
    ),
    title: "IEO and ICO Development",
    decs: "We are the leading cryptocurrency development company, which works on IEO and ICO development services. Our expert and experienced crypto developers deliver services to create initial exchange platforms to help cryptocurrency businesses receive huge funding from the marketplace.",
  },
];

const website = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Blockchain App Development Company | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen - Best Blockchain Development Service Provider",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const product = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Blockchain App Development Company - Blockchain App Development Service",
  image:
    "https://www.comfygen.com/_next/image?url=%2Fimg%2Fexperts-to-build-and-manage-decentralised-solution.webp&w=828&q=75",
  description:
    "Comfygen Private Limited is top Blockchain App Development Company. We provide the best Blockchain application development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};

const additionalOrganization = {
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
    telephone: "[+91 9587867258]",
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
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to build blockchain software development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<p>There is no bar restricted when it comes to building blockchain software development services. You can consider the average cost for blockchain development services is but the cost can fluctuate if the demands extend to integrate more features, implement some latest tech trends, work on advanced technologies, and so on</p>",
      },
    },
    {
      "@type": "Question",
      name: "Can I Ask for Custom Blockchain Development Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: " Yes, we do work on personalized blockchain development solutions. Our blockchain development agency works on customized blockchain development services, solutions based on client’s perspectives. We fully cooperate with our respective clients and understand their ideology, and also our experts share some unique and latest technologies to eventually build a super-functioning decentralized solution.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Future of Blockchain Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain Development Company based in Jaipur, India is transforming various industries, and majorly the future lies in the Cybersecurity industry. Blockchain Development is an open source and distributed network; which keeps the data fully secured and verified. Blockchain Development Organizations do need such technology in future for optimum security and scalability features in it.",
      },
    },
    {
      "@type": "Question",
      name: "How Do I Choose the Best Blockchain Development Company in Jaipur, Rajasthan India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you are looking for best blockchain development company in the In India then here are a few things you must consider to find the righteous and suitable best blockchain app development service company- Experience of the Blockchain Development Company, Skilled and Qualified Blockchain Developers, Use of Latest Trends and Advanced Technology with High Security Features, Evaluate the Pricing Model, Vision of Blockchain Development Project, Blockchain Development Service Offers Blockchain Consultation Services",
      },
    },
    {
      "@type": "Question",
      name: "What are the Benefits of Hiring the Blockchain Development Company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiring Blockchain Development Company in India, Blockchain Development Services improves trust, transactional security, transparency and incur in appropriate data sharing across the entire business development network. The decentralized services are experienced and skilled in blockchain development. Companies have professional trained blockchain experts qualified to provide seamless and secured decentralized solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What are Smart Contracts on Blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Smart Contracts are the simple programs stored on the blockchain app development services, solutions, which run when anything predetermined circumstances and conditions occur. These contracts are used to automate the execution of agreements, so that the participants can immediately get certain outcomes",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain technology development ensures to improvise the data structures and security qualities, because the blockchain technology is based on cryptography, consensus and decentralization solutions. Even so, it improves the accuracy, reliability of data claiming, and reduction in fraudulent activities and manipulations.",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The decentralized technology helps improve the global supply chain efficiently, and also allows companies to complete the trading transactions directly with no third parties involvement.",
      },
    },
    {
      "@type": "Question",
      name: "How Does Blockchain Improve Efficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain technology reduces the overhead and transactional cost by efficiently lessening the paperwork and errors. Also the decentralized solutions reduce the third party involvements and middleman to verify the transactions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the Challenges of Implementing Blockchain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementing the blockchain technology raise numbers of challenges; such as:- Inefficient Technology Desig, Low Scalabilit, Security Problem, Lack of Privac, Higher Energy Consumption",
      },
    },
  ],
};

export default function Blockchain(props) {
  let { initialData } = props;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          Blockchain Development Company In India and USA | Blockchain App
          Development Services
        </title>
        <meta
          name="description"
          content="We Have rich experience In Blockchain App Development using Latest Platforms for Blockchain Development with expertise in Ethereum, EOS, Matic Polygon, Ripple, Openchain, Multichain, Solana, Avalanche, Polkadot, NEAR, Binance smart chain, Substrate, Cosmos, and Tron."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/blockchain-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Blockchain App Development Company | Top Blockchain Development Service Provider in India"
        />
        <meta
          property="og:facebook_description"
          content="Discover the cutting-edge advancements and innovations in the blockchain development industry. From decentralized applications to smart contracts, we dive deep into the technologies that are revolutionizing various sectors worldwide. Learn about the top blockchain development service providers and their contributions to this transformative field."
        />
        <meta
          property="og:twitter_title"
          content="Top Empowering Businesses: The Top Providers of Blockchain Development Solutions | Blockchain Development Software Programmers"
        />
        <meta
          property="og:twitter_description"
          content="The Power of Blockchain: Exploring the Best in Blockchain Development Industry. Hire Top Blockchain Developers: Building a Strong Foundation for Your Project with comfygen."
        />
        <meta
          property="schema:type"
          content="Best Unveiling Excellence: Discover the Top Blockchain Development Service Providers"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Blockchain App Development Firm" />
        <meta
          name="summary"
          content="Comfygen is a reliable and trusted name in the Blockchain App development industry, specializing in providing top-notch blockchain app development service providers via gobally. With a team of skilled blockchain professionals and a track record of successful blockchain app development projects, Comfygen is dedicated to helping businesses harness the power of blockchain development technology."
        />
        <meta name="author" content="Mr. Saddam Hussen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Blockchain App Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Blockchain Software Development Company"
          content="Comfygen: Your Trusted Partner for Blockchain Development Service Providers Whether you need expertise in decentralized applications, smart contracts, or blockchain consulting, Comfygen is your go-to partner for all your blockchain development needs. Comfygen offer tailored solutions that are designed to meet your specific requirements and drive your business towards success in the digital era. Partner with Comfygen and unlock the potential of blockchain for your organization."
        />
        <meta
          name="category"
          content="Leading BlockChain App Devlopment Company In the USA, UAE, India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="A1 Blockchain Software Development Agency"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(additionalOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      </Head>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <LazyLoad height={60} offset={100}>
            <Header />
          </LazyLoad>
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading="Blockchain Development Company"
              ptag="Secure your business by collaborating with the best blockchain development company In India & The USA. We are the ones who adhere to the modern marketplace technology standards to deliver the best blockchain services; such as dApps, DEX smart contracts, blockchain wallets, token development, and more. Connect with us to hire developers for custom blockchain development solutions using Hyperledger, Solidity, EVM, Substrate, EOS, Stellar, or Cosmos."
              ptag1="What’s the wait? Contact us and let’s discuss your secured business plans with next-gen technology solutions."
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <div className="md:py-10 bg-[#fff]">
        <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
          <div className="w-full text-center md:text-left  bg-[#fff] rounded-l-lg">
            <div className="space-y-3">
              <p className="text-base text-black text-justify">
                Comfygen is a top-tier blockchain app development company, which
                has several years of expertise and knowledge of working in the
                industry. We have acquired the most talented professionals in
                our company, so that we can deliver the best and custom
                blockchain solutions to our clientele base with competitive
                standards meet-up. No matter what the odds are, we got you
                covered via delivering all blockchain development services using
                every blockchain framework; such as Hyperledger, Ethereum, EOS,
                Stellar, Substrate, Avalanche, Solana, and others as well.
              </p>
              <p className="text-base text-black text-justify">
                Our company has specialization in the blockchain niche, which is
                why we work on ideations, to plans, to designs, to development,
                and later to deployment. When it comes to the blockchain supply
                chain solutions, we never leave any loophole between. Over the
                years of experience with the technology, it is our promise to
                “Build the Best For the Best.
              </p>
              <p className="text-base text-black text-justify">
                Do you need blockchain apps or other decentralized solutions?
                Well, feel free to have a{" "}
                <a href="/quote" className="text-blue-500">
                  free consultation call with us
                </a>{" "}
                . Development comes far later, but first we believe in building
                faith between company and client. So let’s meet over coffee to
                discuss your business goals with blockchain, and figure out the
                best approach to bet in the marketplace.
              </p>
            </div>

            <div className="flex justify-start mt-5 items-center">
              <a href="/contact-us">
                <button className="shadow-lg  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  SCHEDULE A CALL
                </button>
              </a>
            </div>

            {/* <ul className='text-left'>
              {JSON_DATA.InfluencingList.map((item, index) => (
                <li className="text-lg text-black text-justify" key={index}>{item} </li>
              ))}
            </ul> */}
          </div>
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <div className="p-8">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Decentralized Solutions with{" "}
                <span className="text-[#BB5FC2]">
                  {" "}
                  Best Blockchain App Development{" "}
                </span>
                Company
              </h2>
              <Image
                src="/img/blockchain-featured.webp"
                alt="Experts to Build and Manage Decentralised Solutions"
                className="rounded-r-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
      <ContactFromCenter />
      <section
        className=" bg-center bg-fixed bg-cover "
        style={{ backgroundImage: `url("/img/blockchain-services-bg.webp")` }}
      >
        <div className="bg-[#000]/70 py-5 lg:py-10">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-2 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Make Your Business Secured with
                  <span className="text-[#B563C0]">
                    {" "}
                    Transparency via Blockchain{" "}
                  </span>
                  Development Services
                </h2>
                <p className="text-base text-white">
                  Comfygen is a dedicated blockchain-based company, where the
                  clients can expect for various blockchain development
                  services. Our blockchain apps and decentralized solutions are
                  capable of helping any start-up or large-scale enterprise with
                  more flexibility and scalability.
                </p>
              </div>
              <div className="grid  py-0 lg:py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-4">
                {Process.map((elem) => {
                  const { title, icon, decs, url, num } = elem;
                  return (
                    <ServiceSection
                      url={url}
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <a href="/contact-us">
                  <button className="shadow-lg transition-all hover:scale-75 duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s connect Now!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TechnoStack />
      <div className="py-10 bg-[#0F192E]">
        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Blockchain{" "}
                <span className="text-[#B066C1] capitalize">
                  {" "}
                  Development Trends We{" "}
                </span>
                Follow
              </h2>
              <p className="text-base text-white">
                Blockchain suits almost every industry. Comfygen acknowledges
                all the blockchain development trends, and builds certain needy
                solutions for the business expansion and more security.
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.LeadingSoftware.map((elem) => {
                const { title, img, decs, num, url } = elem;
                return (
                  <div key={num} className=" p-6 space-y-4 bg-white">
                    <a href={url} className="h-full pointer">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                        <Image
                          width={70}
                          height={70}
                          src={img}
                          alt={title}
                          title={title}
                          className="w-9"
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                        {title}
                      </h3>
                      <p className="font-medium text-black transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className={`${styles.SeamlessSec1} `}>
        <div className={`${styles.SeamlessSec2} `}></div>
      </div>
      <div className={`${styles.SeamlessSec} `}>
        <div className=" py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  Blockchain Development Process We Follow
                </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">
                  Comfygen specializes in blockchain development, as well as it
                  has the experience to know how to succeed in the blockchain
                  development process. We follow step-by-step flow, which
                  enables us to achieve every milestone at the right time.{" "}
                </p>
              </div>
              <div>
                <ul className={`${styles.timeline} `}>
                  {JSON_DATA.timelineData.map((event, index) => (
                    <li key={index} className={`${styles.timelineevent} `}>
                      <label className={`${styles.timelineeventicon} `}></label>
                      <div className={`${styles.timelineeventcopy} `}>
                        <p className={`${styles.timelineeventthumbnail} `}>
                          {event.step}
                        </p>
                        <h3 className="text-white">{event.title}</h3>
                        <p className="text-white">{event.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <a href="/contact-us">
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Get Your Blockchain Now!
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AdviceSection
        heading="Industries Where We Serve "
        ptag="Blockchain is the most secured and prominent technology, which is serving transparency with safety in every industry. Be it finance, healthcare, supply chain management, entertainment, or anywhere; the custom blockchain solutions will not disappoint in providing more security and quick services."
        ptag1="Multiple industries have seen some revolutions, which has changed their way to work with no tech-threats - all thanks to blockchain solutions."
        imgSrc="/img/industries-where-we-serve-image.webp"
        imgW={600}
        imgH={600}
        altTag="Industries Where We Serve "
      />
      <div
        className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
        style={{ backgroundImage: `url("/img/hire.webp")` }}
      >
        <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#0B1A2C]/90 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
          <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
        </section>
      </div>
      <AltcoinCom />
      <div className="bg-[#222222] py-10">
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
          <div className="space-y-4 text-center">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Why Choose Us for Blockchain Development
              </h2>
              <p className="text-base text-white md:text-center text-justify tracking-tight">
                Comfygen will stay tuned with clients till they are fully
                content with the services. We are known for being the best
                blockchain development company, which uses strong and
                cutting-edge technologies to work. There are reasons why we are
                scaling and people are relying on us.{" "}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
              {JSON_DATA.WhyChooseComfygen.map((elem) => {
                const { title, decs } = elem;
                return (
                  <div
                    className={`${styles.WhyChooseItem} space-y-4 p-6 border`}
                  >
                    <p className="text-2xl font-bold text-white">{title}</p>
                    <p className="text-white">{decs} </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <a href="/contact-us">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let’s Get Your Blockchain Now!
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
        <div className="space-y-4">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] capitalize">
              Need More about readymade products
            </h2>
          </div>
          <div className="grid gap-4 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-8">
            {JSON_DATA.ReadymadeProduct.map((elem) => {
              const { title, img, decs, num, url } = elem;
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
                    <div className={`h-40 overflow-y-auto  ${styles.cardbar}`}>
                      <p className="text-base text-black text-justify tracking-tight  pr-4">
                        {decs}
                      </p>
                      <div className="pt-2">
                        <a href={url} title="More Detail page">
                          <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-2 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                            More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://api.whatsapp.com/send?phone=919587867258">
            <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Let's Communicate With IT Experts!
            </button>
          </a>
        </div>
      </div>

      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <GuidSectionBlockchain />
      <BlogSection initialData={initialData} />
    </div>
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
