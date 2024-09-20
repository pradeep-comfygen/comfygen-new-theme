import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { RxTokens } from "react-icons/rx";
import Cryptocurrency from "../components/Cryptocurrency";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbExchange, TbMicroscope } from "react-icons/tb";
import { AiOutlineWallet } from "react-icons/ai";
import { GiBookPile, GiToken } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight, BiSupport } from "react-icons/bi";
import { FiPhoneForwarded } from "react-icons/fi";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ethereumtoken.json";
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
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

const Bestchoice = [
  {
    num: "01",
    title: "Cost Efficient",
    bg: "#FEEFEB",
    icon: <BsSearch className="text-blue-500 text-4xl" />,
    decs: "Besides being the best ludo app development firm, we gradually offer pocket-friendly ludo game development services.",
  },
  {
    num: "02",
    title: "Timely Delivered",
    bg: "#F0EEFC",
    icon: <BiSupport className="text-blue-500 text-4xl" />,
    decs: "Catering agile development process, we provide timely delivered solutions and satisfaction guaranteed.",
  },
  {
    num: "03",
    title: "Best In The Market",
    bg: "#F2F6E7",
    icon: <TbMicroscope className="text-blue-500 text-4xl" />,
    decs: "We are the best in the market because we provide better, effective, and robust services allude to ludo app development.",
  },
  {
    num: "04",
    title: "Ardent Support",
    bg: "#FFF5E5",
    icon: <FiPhoneForwarded className="text-blue-500 text-4xl" />,
    decs: "We have a dedicated support system by which we deploy unparalleled communication and support for your query and solutions.",
  },
];
const Arena = [
  {
    num: "1",
    icon: <MdGeneratingTokens className="text-blue-400" size={60} />,
    title: "Token Development",
    decs: "Get your token developed based on ethereum token standards with great security deployment and robust  functionality.",
  },
  {
    num: "2",
    icon: <TbExchange className="text-blue-400" size={60} />,
    title: "Token Migration",
    decs: "We can also smoothly migrate, swap, and transit your token to the realm of any blockchain with secured migration principle.",
  },
  {
    num: "3",
    icon: <GiToken className="text-blue-400" size={60} />,
    title: "Cold Storage",
    decs: "Our experts have intuitive hands-on experience designing cold storage hardware that provides security against hackers.",
  },
  {
    num: "4",
    icon: <RxTokens className="text-blue-400" size={60} />,
    title: "Smart Contract Creation",
    decs: "Looking for smart contracts developed for your ETH token? We can do that too… customizable smart contract for your token.",
  },
  {
    num: "5",
    icon: <GiBookPile className="text-blue-400" size={60} />,
    title: "Token Directory",
    decs: "Our seasoned specialists may also help you in listing the created tokens on different crypto exchanges. ",
  },
  {
    num: "6",
    icon: <AiOutlineWallet className="text-blue-400" size={60} />,
    title: "Token Wallet Design",
    decs: "Our token wallet design and development solution gives you instant transactions with high security and easy to use interface.",
  },
];
export default function Ecommerce(props) {
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
        <title>
          Ethereum Token Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Build your own Ethereum-based tokens with the leading Ethereum token development company In India & The USA. We specialize in creating secure, scalable, and customizable tokens tailored to meet your specific needs."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ethereum-token-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="En-us" />
        <meta
          property="og:title"
          content="Ethereum Token Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Build your own Ethereum-based tokens with the leading Ethereum token development company In India & The USA. We specialize in creating secure, scalable, and customizable tokens tailored to meet your specific needs."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ethereum-token-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-11-23T05:32:47+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/ethereum.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="16 minutes" />
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
                heading="Ethereum Token Development Company "
                ptag="We are experts in developing Ethereum tokens, utilizing the expanding Ethereum ecosystem to provide safe and effective sharing, trading, and transactions on the cryptocurrency platform. Our expert services cover a range of Ethereum token specifications, including as ERC20, ERC223, ERC621, ERC721, and ERC827."
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
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Ethereum
                  <span className="font-bold text-blue-500">
                    {" "}
                    Token Development
                  </span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  To help cryptocurrency adoption, we offer Ethereum Token
                  Development Services
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
          heading=" Ethereum Token Development Company"
          ptag="  We are leading the legacy of building a robust and reliable ETH token based on-going technologies. Ethereum token development company can help you acquire custom Ethereum token based on the versatile standards. Combining our specialized blockchain experience, we deploy purpose-driven ETH token development services for your business aimed to improve trust, security, and transparency."
          imgSrc="/images/ethereum-token-development-company.webp"
          imgW={564}
          imgH={559}
          altTag="Ethereum Token Development"
        />
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4">
            <div className="w-full lg:w-1/2 space-y-[14px] text-left bg-[#F45F39]/10 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  Ethereum - An Overview
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                First glanced in a white paper in 2013 by Vitalik Buterin, a
                prominent coder and co-founder of Bitcoin Magazine, is now
                leading cryptocurrency by value and user’s trust. Ethereum is a
                decentralized blockchain platform that doesn’t rely on any
                central authority which gives boost participants the flexibility
                to transact with each other. Prompt peer-to-peer network that
                securely executes and verifies application code, called smart
                contracts.
              </p>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                It has gained tremendous popularity since the community brought
                a vital enhancement called “The Merge” describing moving
                Ethereum from Proof of Work (PoW) to Proof of Stake (PoS).
                Today, it advances its legacy and infrastructure, providing an
                extremely flexible platform to build dApps using the native
                Solidity scripting language and Ethereum Virtual Machine.
                Additionally, ERC-20 token development is much in demand.
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-xl "
                title="Ethereum An Overview"
                alt="Ethereum An Overview"
                src="/images/ethereum-overview.webp"
                height={500}
                width={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title="What Is Ethereum Token?"
                alt="What Is Ethereum Token?"
                src="/images/what-is-ethereum-token.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#F7F5FA]/100 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  What Is Ethereum Token?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Ethereum blockchain tokens, also pronounced as cryptographic
                tokens and cryptocurrency tokens are secured and transferable
                digital assets that are built on Ethereum network based on
                various versatile standards. ERC-20 token development for
                instance. These are non-fungible tokens (NFTs) representing
                digital assets such as collectibles, digital art, sports
                memorabilia, virtual real estate, and items within games.
              </p>
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4">
            <div className="w-full lg:w-1/2 space-y-[14px] text-left bg-[#9A4ECC]/10 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What Is Ethereum Token Development?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Ethereum token development is a service or a solution to get
                developed ETH token based on Ethereum standards using the rich
                Ethereum’s network platform. There various Ethereum token
                standards; ERC20, ERC223, and ERC621, to name a just few. Each
                standard is encrypted and meant for their specific operation of
                smart contract. For instance, ERC-20 token development is used
                for fungible tokens, like voting or virtual currencies while
                ERC-721 token development interface for non-fungible tokens,
                like a deed for artwork or a song.
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
              <Image
                className="rounded-xl "
                alt="Ethereum Token Creation Services"
                src="/images/ethereum-token-creation-services.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex 2xl:justify-start justify-center w-full ">
              <Image
                className="rounded-md "
                title="What Is Ethereum Token?"
                alt="What Is Ethereum Token?"
                src="/img/erc-20-token-wallet-development.webp"
                height={350}
                width={350}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#6C54DE]/10 p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]">
                  Ethereum Token Creation Services
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Development of highly-versatile and secured token based on
                Ethereum network can be developed from our ethereum token
                creation services. We use Ethereum latest technology to build
                ethereum tokens based on business requirements and specific
                needs. We have a huge ethereum technology stack which helps us
                to deploy a thoughtful token creation solutions.
              </p>
            </div>
          </section>
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/images/hire-ethereum-token-development -company.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#522FFF]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Features Of{" "}
                <span className="text-blue-600">Ethereum Token</span> We
                Developed
              </h2>
            </div>
            <div className="relative flex items-center justify-center py-10">
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
                className="w-full flex items-center"
              >
                {JSON_DATA.Features.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="px-4">
                      <div className="p-5 relative bg-slate-100 cursor-pointer rounded-[17px] ">
                        <div className="flex justify-between">
                          <div className="w-20 h-20 bg-[#ffffff] rounded-[17px]  flex justify-center items-center text-[40px] font-semibold text-blue-600">
                            {num}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg pt-4   text-[#0E1F51] font-semibold group-hover:text-white">
                            {title}
                          </h3>
                          <div className="flex justify-start space-x-2">
                            <div className="w-10 h-1 bg-blue-500 rounded-full "></div>
                            <div className="w-6 h-1 bg-blue-500 rounded-full "></div>
                          </div>
                          <div className="space-y-2">
                            <p className="break-all    text-[#000000] group-hover:text-white/90 line-clamp-3">
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
                >
                  <BiChevronRight className="text-[1.4rem]" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem]  ">
                  Ethereum{" "}
                  <span className="text-blue-600">
                    Token Development on Various ERC
                  </span>{" "}
                  Standards
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.MLM.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 space-y-4 bg-slate-100 cursor-pointer rounded-[20px] "
                    >
                      <div className="flex items-center justify-center ">
                        <Image
                          className="items-center object-cover"
                          src={img}
                          alt={title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] text-center">
                        {title}
                      </h3>
                      <p className="font-medium text-center text-black">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={Bestchoice} />
        <Cryptocurrency />
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Ethereum Token Development Company"
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
