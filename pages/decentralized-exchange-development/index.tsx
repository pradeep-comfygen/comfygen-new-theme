import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/Decentralized.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("./components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSubstrate = dynamic(() => import("./components/FaqSubstrate"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/amm-decentralized-exchange-software-development.webp"
        alt="AMM Decentralized Exchange Software Development"
        width={60}
        height={60}
      />
    ),
    title: "AMM Decentralized Exchange Software Development",
    decs: (
      <p>
        We offer decentralized{" "}
        <a
          href="/cryptocurrency-exchange-development"
          className="text-blue-500"
        >
          crypto exchange development services
        </a>{" "}
        that enable you to create tailored exchange software that caters to your
        unique requirements. Our services provide a number of features that
        improve your exchange and allow you to give excellent service to your
        users. Our solutions are highly customizable and feature-rich, enabling
        you to create and explore a decentralized trading ecosystem. Our AMM
        decentralized exchange software leverages automated market makers to
        eliminate the need for centralized exchanges and intermediaries. Our
        software includes essential features such as swap pools, farms, lottery,
        transaction deadline, slippage tolerance, multi-chain capability, and
        multi-wallet connection.
      </p>
    ),
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/order-book-based-spot-dex-development.webp"
        alt="Order Book-Based Spot DEX Development"
        width={60}
        height={60}
      />
    ),
    title: "Order Book-Based Spot DEX Development",
    decs: "To create a prompt solution for order book-based spot DEX development, advanced mechanisms must be utilized for an exceptional user experience. These DEXs emulate centralized exchanges' order book and trade book models and can be categorized as On-Chain DEXs and Off-Chain DEXs. On-chain DEXs execute orders and transactions through smart contracts, while Off-Chain DEXs match orders centrally and securely store funds in smart contracts. ",
    decs1:
      "Key features of these DEXs include limit and market orders, trading view charts, depth charts, transaction history, multi-wallet connection, multi-chain capability, order book, node-based matching engine, trade book, and high transaction throughput.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/order-book-based-perpetual-dex-development.webp"
        alt="Order Book-Based Perpetual DEX Development"
        width={60}
        height={60}
      />
    ),
    title: "Order Book-Based Perpetual DEX Development",
    decs: "Order book-based perpetual DEXs offer users a powerful technology for futures trading. These platforms allow traders to hold positions indefinitely, operating autonomously. Traders can maintain their positions as long as they have sufficient funds. The platforms can delegate calculations to a third party or handle everything independently, based on user preferences.",
    decs1:
      "With features like long/short positions, margin options, stop limits, and more, these DEXs provide a comprehensive and efficient trading experience.",
  },
  {
    num: "04",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/deFi-dex-aggregatordevelopment.webp"
        alt="DeFi DEX aggregator Development"
        width={60}
        height={60}
      />
    ),
    title: "DeFi DEX aggregator Development",
    decs: (
      <p>
        Our company specializes in developing DeFi DEX aggregators that empower
        users by providing a search engine for DeFi trading. Our DEX aggregators
        ensure seamless communication between different decentralized exchange
        software solutions, allowing users to access liquidity across multiple{" "}
        <a href="/defi-development-company" className="text-blue-500">
          DeFi development{" "}
        </a>{" "}
        trading protocols through a single interface. We pride ourselves on
        building highly efficient DeFi exchange aggregators that are
        user-friendly and compliant with top-notch DEXs and market-making
        protocols.
      </p>
    ),
    decs1:
      "Our key features include multi-wallet support, 10+ liquidity sources, slippage tolerance, an easy-to-navigate interface, multi-chain support, best price comparison, multi-path swap, smart order routing, transaction deadline, and liquidity pools.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Decentralized Exchange Development Company in India | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Decentralized Exchange Development Company in India & the USA. Hire expert DEX developers for secure, robust dApps, blockchain, and DeFi solutions."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/substrate-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Decentralized Exchange framework | Decentralized Exchange Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose Decentralized Exchange development company to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Decentralized Exchange development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Decentralized Exchange framework | Decentralized Exchange Technology | Decentralized Exchange development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our Substrate developers who are well-versed to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Decentralized Exchange development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En" />
        <meta
          name="abstract"
          content="Decentralized Exchange Development Industry | Substrate Development Services"
        />
        <meta
          name="summary"
          content="Choose Decentralized Exchange development to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Substrate Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Substrate Development Company in India, USA"
          content="Comfygen is a leading White label Substrate Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Decentralized Exchange Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Decentralized Exchange Development Firm in India"
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
          content="Decentralized Exchange Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/substrate-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:09:06+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/ogimages/blockchain-development-company.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
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
                heading="Decentralized Exchange Development Company"
                ptag="From the world of decentralized trade, greetings! As a reputable Comfygen as a leading DEX development company In Canada & The USA, we have experience creating DEX development services. Our group is dedicated to offering you the greatest decentralized exchange (DEX) development services, solutions choices out there. We have worked hard to provide you with a secure and transparent platform since we recognize how important these aspects are in the cryptocurrency development market. You can rely on us to deliver decentralized exchange development services that suit your specific business needs due to our expertise and experience. We appreciate your consideration of Comfygen as the Decentralized Exchange Development Firm to construct your decentralized exchange development services."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Introducing The Trustworthy Decentralized Exchange Development Firm "
          ptag="Presenting a reputable and innovative company that specializes in decentralized exchanges. They are transforming transactions with their skilled staff, advanced technology, and openness. Transactions on the blockchain are safe, unchangeable, and decentralized. Their solutions provide peace of mind by enabling direct asset trade without the need for middlemen. They put security precautions, user-friendly interfaces, and meticulous attention to detail first when valuing trust. They offer a smooth and safe trading experience, regardless of experience level with cryptocurrency."
          imgSrc="/img/decentralized-exchange-development-firm.webp"
          imgW={850}
          imgH={800}
          altTag="Our Expertise in Decentralized Exchange Development is Unmatched!"
        />
        <ContactFromCenter />
        {/* services */}

        <section
          className="py-4 lg:py-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("/img/decentralized-exchange-img.webp")`,
          }}
        >
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem] ">
                  {" "}
                  <span className="text-[#B564C0]">
                    Decentralized Exchange
                  </span>{" "}
                  Development Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, decs1, num, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group "
                    >
                      <a href="" title="service cards" className="space-y-4">
                        <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                          <span> {icon}</span>
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                          {title}
                        </h3>
                        <p className="text-black transition duration-200 ease-in-out">
                          {decs}
                        </p>
                        <p className="text-black transition duration-200 ease-in-out">
                          {decs1}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  className="mt-5"
                >
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S CONNECT TO DISCUSS A PROJECT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <div
          className="bg-center bg-no-repeat bg-cover bg-fixed "
          style={{ backgroundImage: `url("/img/ios-app--Process-bg.webp")` }}
        >
          <section className=" py-4 lg:py-20  bg-[rgba(5,10,20,.95)]/40">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem] ">
                    {" "}
                    <span className="text-[#B564C0]">
                      Decentralized Exchange
                    </span>{" "}
                    Development Services
                  </h2>
                </div>
                <ul className={`${styles.timeline}`}>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>1</p>
                          Planning
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        The planning stage involves defining the project's
                        scope, identifying the target market, and developing a
                        roadmap for the DEX's development and introduction.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>2</p>
                          Architecture Design
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        Building the DEX's structure is the main goal of the
                        architecture design phase. This includes creating the
                        frontend, backend, and smart contract components that
                        the system will employ. The objective is to develop a
                        unified and effective architecture that will enable the
                        DEX's operation.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>3</p>
                          Smart Contract Development:
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        Prioritize the creation of smart contracts when building
                        a DEX. These blockchain-based self-executing contracts
                        control trade and other activities, automating and
                        safeguarding transactions to provide a solid basis.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>4</p>
                          Frontend Development
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        The primary goal of the front-end development phase is
                        to design and create the DEX user interface. Users will
                        be able to efficiently manage their accounts and trade
                        assets thanks to this interface.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>5</p>
                          Backend Development
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        The front end and smart contracts in DEX development
                        depend on the back end. It involves using computer
                        languages like Python, Java, or C++ to create and manage
                        logic and data. For a flawless DEX experience, the
                        backend team works in tandem with frontend and smart
                        contract developers.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>6</p>
                          Testing{" "}
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        It is critical at this step to do exhaustive testing to
                        ensure the DEX's safety and reliability.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>7</p>
                          Deployment
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>
                        A decentralized exchange (DEX) must function on a
                        blockchain network to achieve transparency, security,
                        efficiency, innovation, and accessibility. To begin,
                        activate the DEX and make it available to users. The key
                        goal is to make it a viable choice by providing full
                        functionality. Users will be able to access and use its
                        features after it has been completed.
                      </div>
                    </div>
                  </li>
                </ul>
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
        <section className="py-4 lg:py-10 bg-center bg-no-repeat bg-[#121620]">
          <div className="py-4 lg:py-10">
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
              <div className="space-y-4 text-center">
                <div className="flex flex-col justify-center mx-auto">
                  <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                    Latest Technologies{" "}
                    <span className="text-[#be5ebc]">
                      Implemented in Decentralized{" "}
                    </span>{" "}
                    Exchange Development
                  </h2>
                  {/* <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                Cryptocurrency is not only advantageous for the Crypto Users but also for the Non-Crypto Users. Here’s the list of benefits to avail with cryptocurrency development:
              </p> */}
                </div>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                  {JSON_DATA.CryptoUser.map((elem) => {
                    const {
                      title,
                      decs,
                      decs1,
                      num,
                      item,
                      item1,
                      item2,
                      item3,
                    } = elem;
                    return (
                      <div
                        key={num}
                        className="space-y-4 border rounded-lg p-6 bg-center bg-no-repeat bg-cover"
                        style={{
                          backgroundImage: `url("/img/dex-development-bg.webp")`,
                        }}
                      >
                        <p className="text-2xl font-bold text-white">{title}</p>
                        <p className="text-white">{decs}</p>
                        <p className="text-white">{decs1}</p>
                        <ul className="space-y-4">
                          {item && (
                            <li className="flex text-base text-white/80">
                              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                                <BsFillStarFill className="w-4 h-4 text-[#be5ebc]" />
                              </span>
                              {item}
                            </li>
                          )}
                          {item1 && (
                            <li className="flex text-base text-white/80">
                              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                                <BsFillStarFill className="w-4 h-4 text-[#be5ebc]" />
                              </span>
                              {item1}
                            </li>
                          )}
                          {item2 && (
                            <li className="flex text-base text-white/80">
                              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                                <BsFillStarFill className="w-4 h-4 text-[#be5ebc]" />
                              </span>
                              {item2}
                            </li>
                          )}
                          {item3 && (
                            <li className="flex text-base text-white/80">
                              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                                <BsFillStarFill className="w-4 h-4 text-[#be5ebc]" />
                              </span>
                              {item3}
                            </li>
                          )}
                        </ul>
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
        </section>
        <div
          className="py-4 lg:py-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("/img/decentralized-exchange-img.webp")`,
          }}
        >
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col text-center justify-center items-center space-y-2">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                  Why Choose Comfygen for{" "}
                  <span className="text-blue-600">Decentralized Exchange </span>{" "}
                  Development
                </h2>
                <p>
                  Comfygen is an excellent option to consider if you are seeking
                  a dependable and experienced DEX development business. Our
                  company has its skilled staff and established track record,
                  can assist you in developing a DEX platform that suits your
                  specific demands and ambitions.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 pt-8 text-left">
                {JSON_DATA.LaunchSteps.map((elem) => {
                  const { title, num, desc } = elem;
                  return (
                    <div className="group border border-blue-600 rounded p-6 space-y-4 transition-all duration-20 hover:bg-gray-100">
                      <div className="flex items-center justify-start">
                        <div className="w-24 h-24  flex justify-center items-center border ">
                          <h3 className="text-blue-600 text-[40px] font-bold">
                            {num}
                          </h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-[#0E1F51]">
                          {title}
                        </h3>
                        <p className="break-all text-slate-800">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <a href="https://api.whatsapp.com/send?phone=919587867258">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with Experts
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/we-have-the-best-skilled-and-experienced-substrate-blockchain-developers-for-your-diverse-projects.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <FaqSubstrate />
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
