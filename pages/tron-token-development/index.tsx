import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiRemixiconLine, RiTerminalBoxLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSearch } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import dynamic from "next/dynamic";
import { FiPhoneForwarded } from "react-icons/fi";
import { TbMicroscope } from "react-icons/tb";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import JSON_DATA from "./data.json";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("../components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
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

const Arena = [
  {
    num: "1",
    icon: <RiTerminalBoxLine className="text-blue-400" size={50} />,
    title: "Tron Token Creation",
    decs: "Smart contract functionality enabled tron token creation deployed along with custom substitutes.",
  },
  {
    num: "2",
    icon: <RiRemixiconLine className="text-blue-400" size={50} />,
    title: "ICO Development",
    decs: "Raise investment, increase capitalization and whatnot through the tron ICO deployment solution that we provide.",
  },
  {
    num: "3",
    icon: <CiWallet className="text-blue-400" size={50} />,
    title: "Tron Wallet Design",
    decs: "Tron token development solution includes wallet development services for your token management. ",
  },
  {
    num: "4",
    icon: <MdOutlineGeneratingTokens className="text-blue-400" size={50} />,
    title: "Tron Token Transfer",
    decs: "Get easily transfer your tron token into other currencies or coins as per your needs without breaching any snag. ",
  },
];

const Bestchoice = [
  {
    num: "01",
    bg: "#FEEFEB",
    icon: <BsSearch className="text-blue-500 text-4xl" />,
    title: "Cost Efficient",
    decs: "Besides being the best ethereum token development firm, we gradually offer pocket-friendly token development services.",
  },
  {
    num: "02",
    bg: "#F0EEFC",
    title: "Timely Delivered",
    icon: <BiSupport className="text-blue-500 text-4xl" />,
    decs: "Catering agile development process, token design and deployment process is achieved in time, hence timely delivery guaranteed.",
  },
  {
    num: "03",
    bg: "#F2F6E7",
    title: "Best In The Market",
    icon: <TbMicroscope className="text-blue-500 text-4xl" />,
    decs: "We are best in the market because we provide better, effective, and robust services alludes to blockchain development.",
  },
  {
    num: "04",
    bg: "#FFF5E5",
    title: "Ardent Support",
    icon: <FiPhoneForwarded className="text-blue-500 text-4xl" />,
    decs: "We have a dedicated support system by which we deploy unparalleled communication and support for your query and solutions.",
  },
];

export default function Tron(props) {
  let { initialData } = props;

  let {
    Hire,
    Whychoose,
    myList,
    Whycomfygen,
    Qa,
    Modus,
    High,
    ModusOperandi,
    Frequently,
    NewSections,
  } = JSON_DATA;

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
          Tron Token Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Want to work with a trusted Tron token development company from India or the USA? We develop TRC20, TRC10, and TRC721 crypto tokens on Tron's blockchain network."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/tron-token-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="En-us" />
        <meta
          property="og:title"
          content="Tron Token Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Looking for a reliable Tron token development company In India & The USA? Our Tron blockchain services include custom token creation, smart contract development, ICO/STO development, and more."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/tron-token-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-11-23T09:59:35+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/tron.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="22 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div className="relative">
          <Image
            alt="Herosection"
            src={"/img/hero-section-bg.webp"}
            quality={100}
            fill
            sizes="100vw"
            style={{
              zIndex: -99999,
            }}
          />
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Tron Token Development Company"
                ptag="We specialize in developing Tron tokens using the very powerful Tron technology. Tron provides a strong ecosystem for blockchain applications as an open-source blockchain-based operating system. Using the most recent technology and industry best practices, our team creates intelligent and user-friendly TRON-based tokens."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={NewSections} />
        <ContactFromCenter />
        {/* services */}
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Our Top Notch
                  <span className="font-bold text-blue-500">
                    {" "}
                    Tron Token Development
                  </span>{" "}
                  Services
                </h2>
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
          </section>
        </div>
        <AdviceSection
          head="We are Tron Token Development Company"
          heading="Tron Token Development Company"
          ptag="We are leading Tron token development company deals in design, creation, and development of token and wallet solutions using Tron’s blockchain networks and others. We offer TRC standards token development services including TRC10, TRC20, and TRC wallet."
          ptag1="With our token development services, you can unfold a leap of unlikely benefits for your business such as development of Dapps using the TRON ecosystem, smart contract enabled, TRC based wallet for effective management, and much more."
          imgSrc="/img/tron-token-company-development.webp"
          imgW={564}
          imgH={559}
          altTag=" Tron Token Development Company"
        />
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-28 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title="What is Tron"
                alt="What is Tron"
                src="/images/tron-development.webp"
                height={511}
                width={488}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What Is TRON?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Observed as an open-source blockchain-based operating system,
                smart contract functionality, proof-of-stake principle, and
                convenience of blockchain networks help businesses to develop
                superfast and flexible DApps with capability of easy token and
                coin trading facility. Tron token referred to as TRX. It is much
                similar to Ethereum, EOS, and similar alternatives. This has
                been invented with specific intention, likely having specific
                protocols.
              </p>
            </div>
          </section>
        </div>
        <div className="py-3 lg:py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[40px] rounded-[40px] m-3">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What is TRC10 and TRC20?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                TRC10 is one of the most common and used token functionality in
                the Tron blockchain network. It is easy to create, mine, and
                adopt. Also, few basic coding knowledge is required, hence
                extremely easy to create your own Tron tokens.
              </p>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                TRC20 is just an advanced version of its predecessor, provides
                all-in-one function specifications and the power of a smart
                contract-based token ecosystem.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md w-[80%]"
                title="What is TRC10 and TRC20?"
                alt="What is TRC10 and TRC20?"
                src="/images/tron-sugarfree.webp"
                height={254}
                width={254}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="py-3 lg:py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-28 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title="What Makes TRON Token So Popular?"
                alt="What Makes TRON Token So Popular?"
                src="/images/what-makes-tron-token-so-popular.webp"
                height={350}
                width={350}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#6C54DE1A] p-[40px] rounded-[40px]">
              <div className="space-y-4">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What Makes TRON Token So Popular?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                TRX is no doubt a very popular token and used by many people.
                Though it’s easy to create and trade, people use it to share
                content such as documents, movies, and other content, and get
                paid in Tron. This thing gave rise to integrating Bittorrent as
                well.
              </p>
            </div>
          </section>
        </div>
        <div className="py-3 lg:py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px]  text-left bg-[#82AB101A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  Tron Token Development Cost
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Get your tron token developed at an affordable pricing plan and
                charges from us. We have experienced crypto developers that
                could eagerly design custom TRON token, coin, and wallet with
                impregnable security. Our pricing notion bundled Smart Contract
                Development, Secure Wallet, PRE-ICO Strategy, Smart Contract
                Development, and more.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title=" Tron Token Development Cost"
                alt=" Tron Token Development Cost"
                src="/img/tron-token-development.webp"
                height={323}
                width={299}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-3 bg-white">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <p className="text-lg font-medium capitalize text-blue-600">
                Planning
              </p>
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Features of{" "}
                <span className="text-blue-500"> TRON Token We </span>{" "}
                Development
              </h2>
            </div>
            <div className="flex  justify-center items-center py-10 relative md:mx-0 mx-4">
              <div className="absolute z-20 mr-4 lg:top-30 top-[12rem] -left-4">
                <button
                  onClick={next}
                  className="bg-blue-600 text-white px-4 py-2 w-50 rounded-full"
                  aria-label="name"
                >
                  <AiOutlineLeft />
                </button>
              </div>
              <Slider
                ref={sliderRef}
                {...settingstwo}
                className="w-full flex items-center"
              >
                {High.map((elem) => {
                  const { title, decs, number, num } = elem;
                  return (
                    <div key={num} className="px-4">
                      <div className="p-6 space-y-4 relative bg-slate-100 cursor-pointer rounded-[17px]">
                        <div className="w-24 h-24 bg-[#ffffff] rounded-[17px]  flex justify-center items-center text-[48px] font-bold">
                          <span className="text-blue-600"> {number}</span>
                        </div>
                        <div>
                          <h3 className="text-lg pt-4   text-[#0E1F51] font-semibold group-hover:text-white">
                            {title}
                          </h3>
                          <div className="flex justify-start pt-4 space-x-4">
                            <div className="w-10 h-1 bg-blue-500 rounded-full "></div>
                            <div className="w-6 h-1 bg-blue-500 rounded-full "></div>
                          </div>
                          <ul>
                            <li className="flex items-center pt-2">{decs}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div className="absolute md:top-30 top-[12rem]  md:-right-6 -right-6">
                <button
                  onClick={next}
                  className="bg-blue-600 text-white px-4 py-2 w-50 rounded-full"
                  aria-label="name"
                >
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[20px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  Tron TRC10 Token Development
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Tron token development includes specialized TRC10 token creation
                as per its standards and rules. TRC10 enables peer-to-peer
                transactions at zero gas fees. Get TRC10 developed from us at
                pocket-friendly rates.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title="Tron TRC10 Token Development"
                alt="Tron TRC10 Token Development"
                src="/img/create-your-own-ethereum-token.webp"
                height={450}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-28 lg:space-y-4">
            <div className="flex justify-center w-full ">
              <Image
                className="rounded-md "
                title=" Tron TRC20 Token Development"
                alt=" Tron TRC20 Token Development"
                src="/img/tron-trc20-token-development.webp"
                height={323}
                width={299}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[20px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  Tron TRC20 Token Development
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                TRC20 is not similar to TRC10 and hence not easy to develop. It
                demands high-skilled technology and hands-on experience on the
                same. We develop highly reliable and secured TRC20 tokens as per
                its standards and rules.
              </p>
            </div>
          </section>
        </div>
        <div className="py-3 lg:py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#6C54DE1A] p-[40px] rounded-[40px]">
              <div className="space-y-4">
                <h2 className="md:text-2xl text-xl md:leading-[40px] font-semibold text-[#0E1F51]  ">
                  Create your own Tron Token ( Hire Tron Token Developer)
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Developing a TRON token could offer your business a seamless way
                to interact with the blockchain ecosystem. Trading gets easier
                with no transaction fees involved though TRON blockchain
                network. We can help you get your first Tron token as per your
                choice. We offer custom tron token development services for your
                business. Talk to our expert for a briefing and more.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className=" rounded-md "
                title="Create your own Tron Token ( Hire Tron Token Developer)"
                alt="Create your own Tron Token ( Hire Tron Token Developer)"
                src="/img/tron-trc10-token-development.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/images/token-development-application-developers.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#893EE7]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={Hire} myList={myList} />
              </section>
            </div>
          </div>
        </section>
        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />
        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <WhyChoose Whychoose={Whychoose} Bestchoice={Bestchoice} />
        <Cryptocurrency />
        <TalkExpert />
        <FaqSection faqData={Frequently} title="Token Development Company" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
