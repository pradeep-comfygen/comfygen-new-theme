import React, { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbMicroscope } from "react-icons/tb";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { GiContract } from "react-icons/gi";
import { CgSmartHomeCooker, CgSmartphoneChip } from "react-icons/cg";
import { SiGoogleoptimize } from "react-icons/si";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/defismart.json";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
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
const Services = [
  {
    num: "1",
    icon: <GiContract className="text-blue-400" size={50} />,
    title: "Smart Contract Architecture",
    decs: "To ensure the quality of our smart contract code, we follow resilient smart contract architecture practices.",
  },
  {
    num: "2",
    url: "/smart-contract-development",
    icon: <CgSmartphoneChip className="text-blue-400" size={50} />,
    title: "Smart Contract Development",
    decs: "We Provide state-of-the-art self-executing smart contracts that integrate a wide range of features for a variety of industries.",
  },
  {
    num: "3",
    icon: <CgSmartHomeCooker className="text-blue-400" size={50} />,
    title: "Smart Contract Audit    ",
    decs: "We Assist businesses with meticulous smart contract audits and carry out a full security audit of their smart contracts.    ",
  },
  {
    num: "4",
    icon: <SiGoogleoptimize className="text-blue-400" size={50} />,
    title: "Smart Contract Optimization",
    decs: "With the help of optimization techniques, our certified smart contract developers optimize smart contracts to reduce both average gas fees and computational requirements.",
  },
];
const WhyChoosed = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <BsSearch size={60} className="text-blue-500" />,
    title: "Team of Experts",
    decs: "You will be able to refine your offering, suggest the best tech approach, and even set up communities and campaigns with the help of 500 experts.",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <BiSupport size={60} className="text-blue-500" />,
    title: "Full support ",
    decs: "Launching a product is only the beginning of our work. So you can focus on growing your business, we provide extensive post-delivery services .",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <TbMicroscope size={60} className="text-blue-600" />,
    title: "Developing rapidly",
    decs: "Your target audience will benefit from customized products. The development and deployment of an application is smooth and accelerated when a roadmap is in place.",
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
          DeFi Smart Contract Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Get professional and secure DeFi smart contract development solutions from our expert blockchain developers. We provide custom DeFi smart contract development solutions tailored to your specific needs for your business. Get in touch now!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/defi-smart-contract-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="en-us" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DeFi Smart Contract Development Company In Canada &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Get professional and secure DeFi smart contract development solutions from our expert blockchain developers. We provide custom DeFi smart contract development solutions tailored to your specific needs for your business. Get in touch now!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/defi-smart-contract-development"
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
                heading="DeFi Smart Contract Development Company "
                ptag="Our field of expertise as a top DeFi Smart Contract Development Company In Canada & The USA, Comfygen offering cutting-edge defi smart contract development solutions that transform traditional company procedures. With our knowledge, you may put an end to burdensome paperwork and adopt a quicker, more transparent, and secure method of conducting business."
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
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Our Top Notch
                  <span className="text-blue-600"> Our DeFi Based </span> Smart
                  Contract Solutions
                </h2>
              </div>
              <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
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
          </div>
        </section>
        <AdviceSection
          head="Smart Contract development Company "
          heading=" What is Smart Contract Development"
          ptag="In areas such as real estate, supply chain, telecom, manufacturing, healthcare, and more, smart contracts have the potential to revolutionize the way contracts are made. Smart contracts are self-executing and self-enforcing protocols governed by explicit terms and conditions."
          ptag1="As an experienced smart contract development company, Comfygen has extensive experience crafting smart contracts for a variety of industries and business models. Using our skilled smart contract developers, we create outstanding computer-based protocols that automate business transactions."
          imgSrc="/img/what-is-smart-contract-development.webp"
          imgW={564}
          imgH={559}
          altTag=" What is Smart Contract Development"
        />
        <WhyChoose
          Whychoose={JSON_DATA.Whychoose}
          Bestchoice={JSON_DATA.Bestchoice}
        />
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
              Benefits of <span className="text-[#3B82F6]"> DeFI Smart </span>{" "}
              Contract
            </h2>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              {JSON_DATA.Banefit.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div key={num} className="">
                    <div
                      className="flex justify-start items-center rounded-full  space-x-3 py-3 px-3"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-center font-semibold bg-white rounded-full shadow-xl h-14 w-14">
                        <p className="text-xl text-right ">{num}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <div className="px-4 py-4 ">
                      <p className="px-4 py-4 text-black">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 bg-white">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
              <p className="text-lg font-medium capitalize   text-blue-600">
                Planning
              </p>
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Our{" "}
                <span className="text-blue-500">DeFi Contract Development</span>{" "}
                Process
              </h2>
              <p className="text-base text-slate-800">
                To help you navigate the smart contract development process, we
                devise a coherent roadmap
              </p>
            </div>
            <div className="flex  justify-center items-center py-10 relative">
              <div className="absolute z-20 mr-4 lg:top-30 -left-6">
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
                className="w-full flex items-center h-[25rem]"
              >
                {JSON_DATA.High.map((elem) => {
                  const { title, decs, number, decs1, decs2, num } = elem;
                  return (
                    <div key={num} className="px-4">
                      <div className="p-3 space-y-4 relative bg-slate-100 cursor-pointer rounded-[17px] h-96">
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
                            <li className="flex items-center pt-2"> {decs1}</li>
                            <li className="flex items-center pt-2"> {decs2}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div className="absolute ml-4 lg:top-30 -right-6">
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
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col  space-y-2">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Choose us For{" "}
                  <span className="text-blue-500">DeFi Smart Contract </span>{" "}
                  <br /> Development company ?
                </h2>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
                {WhyChoosed.map((elem) => {
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
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Defi Smart Contract Development"
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
