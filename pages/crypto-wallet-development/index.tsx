import Image from "next/image";
import React, { useRef, useState } from "react";
import Cryptocurrency from "../components/Cryptocurrency";
import { VscCircleFilled, VscServerProcess } from "react-icons/vsc";
import Head from "next/head";
import { RiCoinLine, RiCoinsLine } from "react-icons/ri";
import { AiOutlineRight, AiOutlineTranslation } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { HiOutlineChevronLeft } from "react-icons/hi";
import JSON_DATA from "./json/cryptowallet.json";
import Link from "next/link";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("../components/ModusSection"), {
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
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
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
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/bitcoin-wallet-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Bitcoin Wallet Development",
    decs: "Because Bitcoin is a widely used cryptocurrency, creating a Bitcoin wallet is a highly sought-after service. With these wallets, users can interact with Bitcoin-based decentralized applications (DApps) and store, transmit, and receive Bitcoin.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/a-multi-currency-wallet.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "A Multi-Currency Wallet",
    decs: "Both cash and cryptocurrency can be stored and transferred with a multi-currency wallet. Because there are no exchange costs and all financial information is managed centrally, it saves time, effort, and money. It lowers the danger of theft and fraud with enhanced security features like multi-signature support and 2FA.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/creation-of-crypto-coins.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Creation Of Crypto Coins",
    decs: "Make your own blockchain platform or use one that already exists, such as Solana Token Development or Ethereum Token Development. Give your cryptocurrency a name, a symbol, and some tokenomics information. Write the code, taking into account smart contracts development and consensus. Check for bugs and security thoroughly. When ready, make the public debut.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/service-for-ico-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Services For ICO Development",
    decs: "A variety of services are provided by organizations that focus on helping people and companies establish and manage initial coin offerings (ICOs). These cryptocurrency wallet services cover a wide range of topics, including writing whitepapers, drafting smart contracts, and advertising and marketing the initial coin offering.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/transactions-in-the-wallet.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Transactions In The Wallet",
    decs: "Transactions involving cryptocurrency wallets include sending and receiving, and they are documented on the blockchain's public ledger. Miners validate transactions before adding them to the following block. Create a special address for receiving and distribute it. Once verified, transactions to the address appear in the wallet and are uploaded to the blockchain.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/mining-of-crypto-coins.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Mining Of Crypto Coins",
    decs: "Cryptocurrency mining generates new coins, validates transactions, and pays miners with cryptocurrency. In order to tackle challenging arithmetic problems and earn block rewards, miners need specialized hardware and software. The procedure is tough over time, competitive, and demands advanced technology.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settingstwo = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Cryptocurrency Wallet Development Company In India & The USA |
          Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is the forefront Crypto Wallet Development Company In India & The USA, specializing in providing top-notch crypto wallets for businesses. If you looking for the best white-label crypto wallet development services like crypto, Bitcoin wallet? Contact us today!."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-wallet-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cryptocurrency Wallet Development Company In India &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is the forefront Crypto Wallet Development Company In India & The USA, specializing in providing top-notch crypto wallets for businesses. If you looking for the best white-label crypto wallet development services like crypto, Bitcoin wallet? Contact us today!."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-wallet-development"
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
          content="https://www.comfygen.com/images/Wallet1.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Cryptocurrency Wallet Development Company | Crypto Wallet Development Services | Multi Cryptocurrency Wallet Development"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen, the seasoned cryptocurrency wallet development company helps to Ethereum, DeFi, Bitcoin, NFT, TRON, BSC and Web3 wallet. Best white label cryptocurrency wallet development services with dApps that enrich the financial experience of the users.. Invite a quote for blockchain wallet development today!"
        />
        <meta
          property="og:twitter_title"
          content="Cryptocurrency Wallet Development Company | Blockchain Wallet Solutions"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire crypto wallet developers who possess the expertise to establish a robust and secure crypto wallet, it's essential to find professionals who are adept in blockchain technology, cryptography, and the development of secure and user-friendly wallet applications. These developers should have a deep understanding of cryptocurrency protocols, wallet security best practices, and an ability to integrate with various blockchain networks."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="Crypto Wallet Development Agency | Blockchain Apps"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a leading Cryptocurrency Wallet Development Company. With 150+ Blockchain Developers, we provide full-spectrum Cryptocurrency Wallet Development Services to startups, enterprises, and businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label cryptocurrency Wallet Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="cryptocurrency wallet development company in India, USA"
          content="Comfygen is a leading White label cryptocurrency wallet development company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Cryptocurrency Wallet Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete Blockchain Cryptocurrency Wallet Development Firm in India"
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
          content="Best Cryptocurrency Wallet Development Services Provider"
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
                heading="Cryptocurrency Wallet Development Company"
                ptag="Trust us to protect your digital assets with our advanced Crypto Wallet Development Services. You can relax knowing that your digital assets are in good hands with Comfygen"
                ptag1="Are you looking for a trustworthy and safe cryptocurrency wallet? Comfygen is the place to be! Our skilled team specializes in creating long-term cryptographic storage solutions that keep your digital assets safe and secure. We recognize the value of peace of mind in the unpredictable world of cryptocurrency, which is why we incorporate cutting-edge features and solid security technologies into our wallets. "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <AdviceSection
          heading="Meet Your Reliable CryptoCurrency Wallet Development"
          ptag="Presenting Comfygen, the premier center for developing advanced cryptocurrency wallets application or software. We are committed to providing exceptional Crypto Wallet Development Solutions that are customized to meet your unique requirements, utilizing our innovative approach. Beyond the basics, we have extensive experience designing customized cryptocurrency wallets for many platforms. Our talented and passionate crypto wallet development staff ensures that our products work with all of the major browsers, providing users with an engaging and dynamic experience. We at Comfygen are your dependable partner in the world of digital assets—we are more than just a Crypto Wallet Development service provider. Come along as we set out on an exciting journey to discover the virtually limitless possibilities of cryptocurrencies."
          imgSrc="/images/meet-your-reliable-cryptocurrency-wallet-development.webp"
          imgW={645}
          imgH={559}
          altTag="Meet Your Reliable CryptoCurrency Wallet Development"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Cryptocurrency Wallet Development Services
                </h2>
                <p className="text-base text-slate-800">
                  Personalized cryptocurrency wallets are in high demand as
                  cryptocurrencies gain popularity. To suit their unique
                  demands, both people and businesses are looking for blockchain
                  wallet development services.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
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
          </div>
        </section>
        <AdviceSection
          heading="White Label CryptoCurrency Wallet Development "
          ptag="Comfygen is an expert in developing white label cryptocurrency wallets for blockchain startups and existing businesses. Our team creates wallets that are easy to customize and are optimized for multiple platforms, all while maintaining strong security and excellent speed. For desktop, mobile, and online
          applications, we are experts at creating both custodial and non-custodial wallets. To ensure flawless user experiences, our wallets are put through a rigorous testing process in order to manage several transactions at once. We provide audits for smart contracts, multichain interoperability, and all-inclusive assistance. We also provide crypto loan and staking options, as well as interaction with NFT and DeFi protocols. For skilled and knowledgeable white label wallet creation, rely on Cozygen."
          imgSrc="/img/white-label-crytocurrency-wallet-development.webp"
          imgW={564}
          imgH={559}
          altTag="White Label CryptoCurrency Wallet Development "
        />
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
          <p className="text-2xl font-bold">Have a Query?</p>
          <div>
            <Link href="/contact-us" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Contact Now
              </span>
            </Link>
          </div>
        </div>
        <Cryptocurrency />

        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col mx-auto lg:w-4/6 space-y-2">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                CryptoCurrency{" "}
                <span className="text-blue-600">Wallet Development </span>{" "}
                Process
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {JSON_DATA.LaunchSteps.map((elem) => {
                const { title, num, desc } = elem;
                return (
                  <div className="group border p-6 space-y-4 transition-all duration-20 rounded-[40px]">
                    <div className="flex items-center justify-start">
                      <div className="w-24 h-24  flex justify-center items-center">
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
          </div>
        </section>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/hire-cryptowallet-developers-for-your-business-with-comfygen.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Latest technologies Implementation in CryptoCurrency wallet
                Development Company
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.LatestTechno.map((elem) => {
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
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why choose comfygen for CryptoCurrency wallet Development
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.WhyChoose.map((ludo) => {
                return (
                  <div key={ludo.num} className="border p-3 space-y-2 shadow">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {ludo.title}
                    </p>
                    <p className="text-base text-slate-800">{ludo.decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
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
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=" Cryptocurrency Wallet Development"
        />
        <TalkExpert />
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
