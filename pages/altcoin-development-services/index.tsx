import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  RiCoinLine,
  RiExchangeDollarFill,
  RiWallet3Line,
} from "react-icons/ri";
import { IoContractSharp } from "react-icons/io5";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import AltcoinCom from "../components/AltcoinCom";
import JSON_DATA from "./json/altcoin.json";
import { DiErlang } from "react-icons/di";
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
const NewSection = dynamic(() => import("../components/NewSection"), {
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
    icon: <RiCoinLine className="text-blue-400" size={60} />,
    title: "Development Of Altcoins",
    decs: "Cryptocurrency exchanges are becoming increasingly popular as the Crypto world gains popularity. Cryptocurrency exchanges rely heavily on cryptocurrency coins. Our Altcoin solutions are enhanced with robust security features to meet all your business needs.",
  },
  {
    num: "2",
    url: "/crypto-wallet-development",
    icon: <RiWallet3Line className="text-blue-400" size={60} />,
    title: "Development Of Cryptocurrency Wallets",
    decs: "A crypto wallet facilitates faster and more manageable payments by storing private keys and processing transactions. If our clients wish to create their own Crypto wallet, we can provide them with a highly secure and reliable solution.",
  },
  {
    num: "3",
    icon: (
      <MdOutlineMiscellaneousServices className="text-blue-400" size={60} />
    ),
    title: "Mining Services For Cryptocurrencies",
    decs: "A blend of intricate tools is required to create and validate Crypto coins. We have various hardware and software tools for practical crypto coin mining.",
  },
  {
    num: "4",
    url: "/cryptocurrency-exchange-development",
    icon: <RiExchangeDollarFill className="text-blue-400" size={60} />,
    title: "Software Development For Cryptocurrency Exchanges",
    decs: "Multiple cryptocurrencies can be traded on crypto exchange platforms, facilitating seamless transactions. Our white-label Cryptocurrency software is developed using the latest technology stacks, focusing on security.",
  },
  {
    num: "5",
    url: "/smart-contract-development",
    icon: <IoContractSharp className="text-blue-400" size={60} />,
    title: "Development Of Smart Contracts",
    decs: "Transactions between two parties are entirely controlled by smart contracts that run on blockchain technology. As a result, we develop secure contracts without sacrificing security. The intelligent contracts we create can be deployed on various platforms, including Ethereum, Ethereum Classic, Neo, and others.",
  },
];

export default function Altcoin(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Best Altcoin App Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a global cryptocurrency development company In India & The USA, We provide excellent Altcoin development services to help our clients to increase their ROI."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/altcoin-development-services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="En-us" />
        <meta
          property="og:title"
          content="Best Altcoin App Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a global cryptocurrency development company In India & The USA, We provide excellent Altcoin development services to help our clients to increase their ROI."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/altcoin-development-services"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/Altcoin-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Best Altcoin Development Company"
                ptag="Our altcoin creation services are intended to increase the value and trading effectiveness of your virtual currency if you have a passion for cryptocurrencies. To offer a seamless and secure trading experience, we specialize in integrating cutting-edge blockchain technologies with strong security measures."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/altcoin-development-company.webp"
                Width={593}
                Height={570}
                altTag="Altcoin Development Services"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-3">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Our Top{" "}
                  <span className="text-blue-600">Altcoin Development</span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  Get the best altcoin developed through the best altcoin
                  development company with major assistance and complete support
                  till deployment. We provide various altcoin design services
                  for your business needs.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
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
            </div>
          </section>
        </div>
        {/* services */}
        <AdviceSection
          head="Altcoin development Company "
          heading=" Blockchain Networks we  support"
          ptag=" As one of the leading altcoin development companies with extensive experience in blockchain technology, Developcoins has built an unmatched reputation in offering independent altcoin development services for every business, from start-ups to entrepreneurs. By using cutting-edge technology, we create advanced crypto coins and altcoins that keep you ahead of the competition.Providing unique digital currencies to your business will add value to your business due to our understanding of your business requirements. We are a full-service blockchain development company with expertise in new technologies. "
          ptag1="Our Altcoin Development Services can help you create a cryptocurrency that you can trade with your users as a utility or security token. Hire Altcoin developers for the best services for your business."
          imgSrc="/images/our-top-altcoin-development-service.webp"
          imgW={580}
          imgH={559}
          altTag=" Blockchain Networks we  support"
        />
        <div className="py-10">
          <section className="items-center  space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  What is Altcoin
                </h2>
              </div>
              <p className="text-base text-slate-800">
                In the crypto world, Altcoin is a term that refers to all
                cryptocurrencies and tokens that are not Bitcoin. These coins
                belong to blockchains that were explicitly designed for them.
                Many altcoins are forks from Bitcoin and Ethereum, which often
                happen for multiple reasons.
              </p>
              <p className="text-base text-black/70">
                Altcoin generally refers to any cryptocurrency other than
                Bitcoin (BTC). Most cryptocurrencies are forked from either
                Bitcoin or Ethereum (ETH), so some people consider altcoins to
                be all cryptocurrencies other than these two. In addition to
                validating transactions and opening blocks, some altcoins
                provide new or additional features or purposes to distinguish
                themselves from Bitcoin and Ethereum.
              </p>
              <p className="text-base text-black/70">
                In most cases, altcoins or tokens are designed and released by
                developers with different visions or purposes. Discover how
                altcoins differ from Bitcoin.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start pb-10 lg:pb-0">
              <Image
                src="/img/what-is-altcoin.webp"
                alt="What is Altcoin"
                title="What is Altcoin"
                className="object-cover rounded-lg"
                width={552}
                height={495}
              />
            </div>
          </section>
          <div className="py-10">
            <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
              <div className="flex justify-center w-full 2xl:justify-start">
                <Image
                  src="/img/altcoin-development-service-we-provide.webp"
                  alt="Altcoin Development Services we provide"
                  title="Altcoin Development Services we provide"
                  className="rounded-lg"
                  width={500}
                  height={700}
                />
              </div>
              <div className="w-full space-y-4  text-left">
                <div className="space-y-3">
                  <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                    Altcoin Development Services we provide
                  </h2>
                </div>
                <p className="text-base text-black/70">
                  With <span className="font-semibold">Comfygen</span>{" "}
                  unwavering commitment to providing innovative and secured
                  solutions in Altcoin development, we are the leading{" "}
                  <span className="font-semibold">
                    Custom Altcoin Development Company
                  </span>
                  . We offer more than just Altcoin creation. To meet our
                  clients’ business needs, we offer disproportionate{" "}
                  <span className="font-semibold">
                    Altcoin Development Services
                  </span>
                </p>
                <div className=" text-left">
                  <ul className="space-y-2">
                    {JSON_DATA.myList1.map((item, index) => (
                      <li className="flex text-base text-black/70" key={index}>
                        <span className="pr-2 mt-1.5 text-[#4f4f50]">
                          <AiFillStar className="w-4 h-4" />
                        </span>
                        {item}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className=" py-2 lg:py-10 bg-[#F8FAFC]">
          <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                Altcoin <span className="text-blue-600">Development</span>{" "}
                Process{" "}
              </h2>
            </div>
            <div className="grid gap-10 py-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.Process.map((elem) => {
                const { title, decs, num, img } = elem;
                return (
                  <div key={num} className="p-3 space-y-4 rounded-[17px]">
                    <div
                      className="w-24 h-24 bg-[#F45F391A] rounded-full  flex justify-center items-center"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="p-3 rounded-full h-16 w-16 flex justify-center">
                        <Image
                          className="w-full"
                          src={img}
                          alt={title}
                          width="200"
                          height="100"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                        {title}
                      </h3>
                      <p className="break-all text-[#000000] group-hover:text-white/90 line-clamp-4">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <AltcoinCom />

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=" Altcoin Development Services"
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
