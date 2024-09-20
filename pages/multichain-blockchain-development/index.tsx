import React, { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { useRouter } from "next/router";
import { RiRecordMailLine } from "react-icons/ri";
import { TbBoxMultiple } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMoneyCheck } from "react-icons/fa";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { VscPreview } from "react-icons/vsc";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/multichainblockchain.json";
const Cryptocurrency = dynamic(() => import("../components/Cryptocurrency"), {
  loading: () => <p>Loading...</p>,
});
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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
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
    icon: <FaMoneyCheck className="text-blue-400" size={50} />,
    title: "Systems for simple financial management",
    decs: "We create and implement redeemable asset solutions using Multichain properties like real-time automated reconciliation, rewards points, local currencies, and peer-to-peer asset trading. Additionally, we develop internal accounting systems to streamline financial control at the lowest possible cost.",
  },
  {
    num: "2",
    icon: <VscPreview className="text-blue-400" size={50} />,
    title: "Provenance tracking",
    decs: "We Provide end-to-end tracking of expensive commodities, such as designer products and prescription medications, as well as archiving of bills and letters of credit using digital tokens. Digital tokens also serve as transaction authenticators, in addition to providing blockchain advantages like decentralized trust, immutability, and no middleman.",
  },
  {
    num: "3",
    icon: <RiRecordMailLine className="text-blue-400" size={50} />,
    title: "Keeping records",
    decs: "We create shared databases by using unencrypted, encrypted, and hashed data for the storage and notarization of inter-organizational records, and for auditing conversations between institutions. Among their features are round-robin consensus, time stamping, a shared audit trail, and digital signatures.",
  },
  {
    num: "4",
    icon: <TbBoxMultiple className="text-blue-400" size={50} />,
    title: "Multiparty Aggregates",
    decs: "We Develop internal shared databases to facilitate the efficient exchange of verification data and prevent duplication of effort. Data from several independent sources can be combined using our solutions in a record management system handled jointly by several parties.",
  },
];
export default function MultiChain(props) {
  let { initialData } = props;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
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
          MultiChain Blockchain Development Company in India and the USA |
          Comfygen
        </title>
        <meta
          name="description"
          content="Develop your own blockchain network with MultiChain Blockchain Development Company - Comfygen create a powerful open-source platform for building secure and scalable blockchain applications. Contact us Today!."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/multichain-blockchain-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="MultiChain Blockchain Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Develop your own blockchain network with MultiChain blockchain development services In India & The USA, with a powerful open-source platform for building secure and scalable blockchain applications. Contact us now to know more."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/multichain-blockchain-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta name="language" content="en-us" />
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
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
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
                heading="MultiChain Blockchain Development Company"
                ptag="Comfygen specializes in MultiChain Blockchain Development Company, building dependable apps with cutting-edge features like permissions, statistics streams, and pre-built deployment choices. Organizations may create and deploy blockchain applications fast and effectively with the help of our MultiChain Blockchain Development solutions."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <p className="text-xl font-light text-blue-600">
                  Our Top Multichain Blockchain Devlelopment Services
                </p>
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Multichain{" "}
                  <span className="text-blue-600">Blockchain Development</span>{" "}
                  Services
                </h2>
              </div>
              <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
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
          head="We are Blockchain development Company"
          heading="MultiChain Blockchain Development  Company"
          ptag="  MultiChain technology allows users to create Private Blockchains that can be used internally within an enterprise to speed up financial transactions. Up to 1,000 transactions can be processed per second on a fully functional Multichain network. For developers, it provides a command-line interface and API for setting up and maintaining chains."
          ptag1="Basically, MultiChain is a software platform that allows you to design your own Blockchain based on your business needs. Based on the Bitcoin Blockchain, MultiChain has emerged as a crucial piece of web-based asset management software."
          imgSrc="/img/multichain-blockchain.webp"
          imgW={564}
          imgH={559}
          altTag="MultiChain Blockchain Development  Company"
        />
        <section className="py-10">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className="py-4 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]">
              Smart Contract{" "}
              <span className="text-blue-600">Based Cryptocurrency MLM</span>{" "}
              Software
            </h2>
          </div>
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  01. Blockchain solutions for enterprises
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                The next wave of digital business is distributed ledger
                technology. Take advantage of it.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md "
                title="Blockchain solutions for enterprises"
                alt="Blockchain solutions for enterprises"
                src="/images/blockchain-solutions-for-enterprises.webp"
                height={500}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </section>
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-28 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md "
                title="About Multichain Blockchain"
                alt="About Multichain Blockchain"
                src="/images/about-multichain-blockchain.webp"
                height={500}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#9A4ECC]/10 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  02. Tell Us About Your Project
                </h2>
                <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                  Let's get on with it
                </p>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Ethereum and sovereign blockchains into a Polygon. With our
                help, you will be able to create open, robust, and scalable
                dApps with excellent connectivity and flexibility to achieve
                higher ratings, modularity, and dominance without harming the
                environment.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#6C54DE]/10 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  03. Features of MultiChain Blockchain Development
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Multi Chain technology aims to provide customers with an
                easy-to-use tool that can provide the same functionality as
                bitcoins, but can also provide additional features that will
                benefit corporations. Connecting with other entities in the
                corporate network becomes easier with it. Multi-chain networks
                can be easily customized by describing how users interact with
                different entities on the chain.
              </p>
              <ul className="space-y-5  text-[#475569] text-lg">
                {JSON_DATA.myList1.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md "
                title="Features of MultiChain Blockchain Development"
                alt="Features of MultiChain Blockchain Development"
                src="/images/features-of-multiChain-blockchain-development.webp"
                height={1500}
                width={1400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 md:text-4xl text-2xl  md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  An innovative{" "}
                  <span className="text-blue-600">solution for token</span>{" "}
                  development
                </h2>
                <p className="text-base text-slate-800">
                  Comfygen, a leading token company, helps create tokens with a
                  recognized framework of Tron, Ethereum, and Ripple for
                  participants to effectively manage their digital assets.
                </p>
              </div>
              <div className="flex  justify-center items-center py-10 relative">
                <div className="absolute z-20 mr-4 top-40 -left-6">
                  <button
                    title="previous"
                    onClick={previous}
                    className="px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 "
                  >
                    <BiChevronLeft className="text-[1.4rem]" />
                  </button>
                </div>
                <Slider
                  ref={sliderRef}
                  {...settingstwo}
                  className="w-full flex items-center "
                >
                  {JSON_DATA.Bitcoin.map((elem) => {
                    const { title, decs, number, num } = elem;
                    return (
                      <div key={num} className="px-4">
                        <div className="p-3 relative bg-slate-100 cursor-pointer rounded-[17px] ">
                          <div className="w-24 h-24 bg-[#ffffff] rounded-[17px]  flex justify-center items-center">
                            <span className="text-blue-500 text-[42px] font-semibold">
                              {number}
                            </span>
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-lg pt-4   text-[#0E1F51] font-semibold group-hover:text-white">
                              {title}
                            </h3>
                            <div className="flex justify-start space-x-2">
                              <div className="w-10 h-1 rounded-full bg-blue-500 "></div>
                              <div className="w-6 h-1 rounded-full bg-blue-500 "></div>
                            </div>
                            <div className="space-y-2">
                              <p className="break-all    text-[#000000] group-hover:text-white/90">
                                {decs}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                <div className="absolute ml-4 top-40 -right-6">
                  <button
                    title="next"
                    onClick={next}
                    className="px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 "
                    aria-label={"this is right btn "}
                  >
                    <BiChevronRight className="text-[1.4rem]" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <TalkExpert />
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-xl font-light text-blue-600">
                  Top Characterstics of Multichain Blockchain Development
                </h2>
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Key Characteristics of{" "}
                  <span className="text-blue-600">Multichain Blockchain</span>{" "}
                  Development
                </h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Chartacterstics.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="break-all text-slate-800 line-clamp-5">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* services */}
        <section
          className="bg-center bg-no-repeat bg-cover w-full 2xl:h-[697px]"
          style={{
            backgroundImage: `url("/img/hire-multichain-blockchain-developer.webp")`,
          }}
        >
          <div className="items-center py-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-y-0 lg:py-20">
            <div className="bg-[#0037AC]/80 flex flex-col-reverse lg:flex-row py-9 px-4 lg:px-20 lg:py-20 rounded-[42px] justify-between items-center space-x-5 backdrop-blur-md">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </div>
          </div>
        </section>
        <WhyChoose
          Whychoose={JSON_DATA.Whychoose}
          Bestchoice={JSON_DATA.Bestchoice}
        />
        <Cryptocurrency />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="MultiChain Blockchain Development"
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
