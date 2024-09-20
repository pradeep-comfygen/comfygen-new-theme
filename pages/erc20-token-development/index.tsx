import Image from "next/image";
import React, { useState, useRef } from "react";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { RiFolderTransferFill, RiRemixiconFill } from "react-icons/ri";
import { FiPhoneForwarded } from "react-icons/fi";
import { BiMovie, BiSupport } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { TbMicroscope } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import JSON_DATA from "./json/erc20token.json";

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
    icon: <BiMovie className="text-blue-400" size={50} />,
    title: "ERC20 Token Creation",
    decs: "Developing world-class ERC20 token for Ethereum using our seasoned Ethereum token developers. ",
  },
  {
    num: "2",
    icon: <RiRemixiconFill className="text-blue-400" size={50} />,
    title: "ICO Development   ",
    decs: "We also create an ICO platform for easy, fast, and simplest deployment and raising investment for better results.    ",
  },
  {
    num: "3",
    icon: <FaWallet className="text-blue-400" size={50} />,
    title: "Token Wallet Design    ",
    decs: "ERC20 token development solution includes wallet development services for your token management.     ",
  },
  {
    num: "4",
    icon: <RiFolderTransferFill className="text-blue-400" size={50} />,
    title: "ERC20 Token Transfer    ",
    decs: "We also provide major token transferable solutions to keep your business functions smooth and growing.     ",
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
        <title>Top ERC-20 Token Development Company In India | Comfygen</title>
        <meta
          name="description"
          content="Create custom ERC-20 tokens with Comfygen today! We're India base leading ERC-20 token development company, for secure and scalable Ethereum-based solutions tailored to your needs."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/erc20-token-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="En-us" />
        <meta
          property="og:title"
          content="Top ERC-20 Token Development Company | Build Custom Ethereum Tokenszz"
        />
        <meta
          property="og:description"
          content="Create custom ERC-20 tokens with Comfygen today! We're India & The USA base leading ERC-20 token development company, for secure and scalable Ethereum-based solutions tailored to your needs."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/erc20-token-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-11-23T04:20:07+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/erc20.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="16 minutes" />
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
                heading="ERC-20 Token Development Company"
                ptag="We at Comfygen are experts in ERC-20 Token Development Company In India & The USA, and provide specialized design and development services In India & The USA. On the Ethereum network, ERC-20 tokens are frequently used because they can perform the necessary tasks for smart contracts."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
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
                    ERC20 Token{" "}
                  </span>{" "}
                  Development Services
                </h2>
                <p className="text-base text-slate-800">
                  To help cryptocurrency adoption, we offer ERC20 Token
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
          </section>
        </div>
        <AdviceSection
          head="We are  ERC20 Token Development Company "
          heading="ERC20 Token Development Company"
          ptag=" We are the best ERC20 token development company providing your business ability to participate in the crypto world using your own ERC20 token in hand. Create your token like ERC20 on Ethereum blockchain with security and a range of robust functions. For security, we use 50+ security parameters to help develop a rigid and strengthen ERC20 token. This gives you the chief ability to invest in Ethereum blockchain confidently for a range of various needs."
          imgSrc="/img/erc-20-token-development-company.webp"
          imgW={572}
          imgH={502}
          altTag="Token Development Company"
        />
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-20 bg-white">
          <div className="flex flex-col justify-center text-center">
            <p className="text-lg font-medium capitalize   text-blue-600">
              Planning
            </p>
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Features of <span className="text-blue-600">Token</span>{" "}
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
              {JSON_DATA.High.map((elem) => {
                const { title, decs, number, num } = elem;
                return (
                  <div key={num} className="px-4">
                    <div className="p-6 space-y-4 relative bg-slate-100 cursor-pointer rounded-[17px]">
                      <div className="w-24 h-24 bg-[#ffffff] rounded-[17px]  flex justify-center items-center text-[48px] font-bold text-blue-600">
                        {number}
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
        </section>
        <section className="flex  py-10 justify-satrt mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="items-center space-y-10 2xl:w-4/6 xl:w-4/6 md:flex md:space-x-10 md:space-y-0 bg-[#FF8008]/10 rounded-[50px] py-4 px-4">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/img/what-is-erc-20-token.webp"
                alt=" What Is ERC20 Token?"
                className="w-full"
                height={600}
                width={600}
              />
            </div>
            <div className="w-full space-y-6 text-center md:text-left">
              <h2 className="text-xl font-extrabold leading-10 text-black">
                What Is ERC20 Token?
              </h2>
              <p className="text-base text-black">
                ERC stands for Ethereum Request for Comment and the number ‘20’
                is the proposal identification number used in many scenarios on
                the Ethereum blockchain.{" "}
              </p>
              <p className="text-base text-black">
                In the Ethereum network, ERC20 defines a set of rules which is
                required to follow for a token to be acknowledged. ERC20 token
                alludes the power of Fungible tokens (interchangeable with
                another token), they have a property that makes each token
                similar to other token in the blockchain asset
              </p>
            </div>
          </div>
        </section>
        <div className="flex justify-end  py-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <section className="items-center  space-y-10 2xl:w-4/6 xl:w-4/6 md:flex md:space-x-10 md:space-y-0 bg-[#B662BF1A] rounded-[50px] py-4 px-4">
            <div className="flex justify-center md:justify-start ">
              <Image
                src="/img/ethereum-token-creation-service9.webp"
                alt=" Ethereum Token Creation Services"
                className="full"
                height={400}
                width={300}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="text-xl font-extrabold leading-10 text-black">
                {" "}
                Ethereum Token Creation Services
              </h2>
              <p className="text-base text-black">
                Development of highly-versatile and secured token based on
                Ethereum network can be developed from our ethereum token
                creation services. We use Ethereum latest technology to build
                ethereum tokens based on business requirements and specific
                needs. We have a huge ethereum technology stack which helps us
                to deploy thoughtful token creation solutions.{" "}
              </p>
            </div>
          </section>
        </div>
        <div className="flex py-10 justify-satrt mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <section className="items-center space-y-10 2xl:w-4/6 xl:w-4/6 md:flex md:space-x-10 md:space-y-0 bg-[#6C54DE]/10 rounded-[50px] py-4 px-4">
            <div className="flex justify-center md:justify-start ">
              <Image
                src="/img/erc-20-token-wallet-development.webp"
                alt="ERC 20 Token Wallet Development"
                className="full"
                height={250}
                width={250}
              />
            </div>
            <div className="w-full space-y-6 text-center md:text-left">
              <h2 className="text-xl font-extrabold leading-10 text-black">
                ERC 20 Token Wallet Development
              </h2>
              <p className="text-base text-black">
                Similar to blockchain wallets, ERC20 are also digital wallets
                that store and manage all Ethereum and ERC-20 token
                functionality. We as a leading ERC20 token wallet development
                company design versatile and secured wallet creation using the
                Ethereum network, technologies, and skills. Our wallet creation
                solution gives you a span of features at ease.
              </p>
            </div>
          </section>
        </div>
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem]  ">
                  Ethereum Token{" "}
                  <span className="text-blue-600">
                    {" "}
                    Development on Various ERC{" "}
                  </span>{" "}
                  Standards
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.MLM.map((elem) => {
                  const { title, img, decs } = elem;
                  return (
                    <div className="p-8 space-y-4 bg-slate-100 cursor-pointer rounded-[20px] ">
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
                      <p className="font-medium text-center text-black break-all line-clamp-6 ">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <Cryptocurrency />
        <div className="py-10 bg-[#F1F5F9]">
          <section className="items-center flex flex-col-reverse lg:flex-row space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:space-x-28 lg:space-y-4 ">
            <div className="w-full space-y-[14px] text-left  rounded-[40px]">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Create your own ERC 20 Token ( Hire ERC 20 Token Developer)
              </h2>
              <p className="ttext-base text-black ">
                Developing a ERC 20 Token could offer your business a seamless
                way to interact with the blockchain ecosystem. Trading gets
                easier with no transaction fees involved though TRON blockchain
                network. We can help you get your first ERC 20 Token as per your
                choice. We offer custom ERC 20 Token development services for
                your business. Talk to our expert for a briefing and more.
              </p>
              <div className="pt-4">
                <a href="/contact-us">
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                    Let’s Discuss
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                className="rounded-md "
                alt="Create your own ERC 20 Token ( Hire ERC 20 Token Developer)"
                src="/img/create-your-own-erc-20-token.webp"
                height={600}
                width={555}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={Bestchoice} />
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="erc-20 Development Company"
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
