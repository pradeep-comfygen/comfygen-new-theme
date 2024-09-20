import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { BiMobileVibration } from "react-icons/bi";
import { ImArrowUpRight2 } from "react-icons/im";
import {
  RiBitCoinLine,
  RiCompasses2Line,
  RiCopperCoinLine,
  RiStackFill,
  RiWindow2Line,
} from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import JSON_DATA from "./index.json";
import LazyLoad from "react-lazy-load";
import PortfolioSec from "./components/PortfolioSec";
import ProcessSec from "./components/ProcessSec";
import WhyChooseUs from "./components/WhyChooseUs";
import IndustriesServe from "./components/IndustriesServe";
import TechStack from "./components/TechStack";
import Faq from "./components/Faq";
import FormSec from "./components/FormSec";
import Blog from "./components/Blog";
import ClientTestimonials from "./components/ClientTestimonials";
import Footer from "./components/Footer";


const HeroSection = dynamic(() => import("./components/HeroSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSection1 = dynamic(() => import("./components/HeroSection1"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("./components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home(props: any) {
  let { initialData } = props;
  const [typedText] = useState("");
  const [game, setGame] = useState<any>({});
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const [show, setshow] = useState(true);
  const websiteJsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Best Blockchain, Custom E commerce, Web and Mobile App Development Company in the USA | Comfygen",
    url: "https://www.comfygen.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const iconComponents = {
    RiCompasses2Line,
    RiBitCoinLine,
    RiStackFill,
    AiOutlineShoppingCart,
    BiMobileVibration,
    RiWindow2Line,
    RiCopperCoinLine,
    IoGameControllerOutline,
    FaHandHoldingHeart
  };

  return (
    <>
      <Head>
        <title>
          New Comfygen Theme
        </title>
      </Head>

      <LazyLoad height={60} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">

        <div
          className="relative"
        // style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <Image
            alt="Herosection"
            src={"/image/hero-section-image2.webp"}
            quality={100}
            fill
            sizes="100vw"
            style={{
              zIndex: -99999,
            }}
          />
          <div className="bg-[#26304F]/45">
            <div className="md:py-28 py-5 space-y-10 ">
              <HeroSection
                heading={typedText}
                isHome={true}
                Provider
                ptag="Businesses can benefit from our Blockchain, Games,
               Ecommerce, and Web and Mobile Apps solutions by operating
               more efficiently and effectively. As the future unfolds,
             we will be able to provide our clients with formidable
             positions."
                btnName="Let's Discuss"
                btnLink="/contact-us"
                imgSrc="/"
                Width={568}
                Height={644}
                altTag="blockchain-technology"
              />
              {/* <HeroSection1 /> */}
            </div>
          </div>
        </div>
        <section className="bg-white lg:py-16 py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
              <div>
                <h3 className="text-[#3192FF] font-extralight text-xl">About Company</h3>
                <img className="w-16" src="/image/about-us-line.svg" alt="" />
                <h2 className="xl:text-4xl text-3xl text-[#0E1F51] mt-3 font-bold">Exceptional Services We Offer  </h2>
                <div className="space-y-2 mt-1">
                  <p className="text-base text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
                  <p className="text-base text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
                  <p className="text-base text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
                </div>
                <div>
                  <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                    Explore More <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
                </div>
              </div>
              <div>
                <img className="w-full" src="/image/about-us-img.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-10 bg-[#F9F9FB]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 ">
            <div className="titleRow ">
              <div className="menus-block my-auto">
                <h3 className="title-bg">Services</h3>
                <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">Exceptional Services We Offer  </h2>
                <p className="text-lg text-center font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, excepturi in incidunt, possimus suscipit neque quia nihil, enim alias perspiciatis iusto voluptatem sunt commodi et aliquam exercitationem nostrum. Maxime!</p>
              </div>
            </div>
            <div className="bg-center bg-no-repeat bg-cover ">
              <div className="flex flex-col lg:flex-row py-10  crypto lg:space-x-6 ">
                <div className="lg:w-[40%] w-full text-left  flex justify-center items-center md:mb-0 mb-6 ">
                  <div className="space-y-4 w-full">
                    {JSON_DATA.CryptoAltcoin.map((elem: any, index: any) => {
                      const { title, icon } = elem;
                      return (
                        <div key={index}>
                          <button
                            onClick={() => {
                              setCryptoAltcoin(elem);
                            }}
                            className={
                              title === cryptoAltcoin.title
                                ? "text-black text-[18px] flex items-center border border-[#00000018] text-start font-semibold bg-white px-4 gap-2 py-3 rounded-[4px] w-full services-tab relative"
                                : "text-black text-[18px] flex items-center  border border-[#00000018] text-start font-semibold bg-white px-4 gap-2 py-3 rounded-[4px] w-full"
                            }
                          >
                            <img className="w-8 h-8 rounded-full" src={icon} alt="" /> {title}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-center w-full md:justify-start items-start bg-[#26314F] md:px-14 px-6 py-16 services-sec mt-5 lg:mt-0 relative">
                  <div className="space-y-8 md:space-y-4 z-50">
                    <div className="space-y-2">
                      <h5 className="md:text-[16px] text-[14px] font-semibold text-[#fff] ">
                        {cryptoAltcoin && cryptoAltcoin.subtitle
                          ? cryptoAltcoin.subtitle
                          : "All Service And Solutions At One Place"}
                      </h5>
                      <h3 className="text-3xl font-bold text-white ">
                        {cryptoAltcoin && cryptoAltcoin.title
                          ? cryptoAltcoin.title
                          : "Mobile App Development"}
                      </h3>
                      <p className="text-base text-white">
                        {cryptoAltcoin && cryptoAltcoin.decs
                          ? cryptoAltcoin.decs
                          : "Passion is the key to outstanding accomplishments! Comfygen enables niche industries with excellent mobile application development services, solutions inspired by the essence of creativity. Our custom mobile app developers have system architect-level experience and are more likely to 'get it right the first time.' Not only do they understand your goals better, but they can also identify gaps and omissions in your requirements and find the best mobile application development service provider for you"}
                      </p>
                    </div>
                    <div className="flex items-center justify-start ">
                      <Image
                        className="object-cover "
                        title="Crypto Token Development"
                        alt={
                          cryptoAltcoin && cryptoAltcoin.title
                            ? cryptoAltcoin.title
                            : "Crypto Token Development"
                        }
                        src={
                          cryptoAltcoin && cryptoAltcoin.img
                            ? cryptoAltcoin.img
                            : "/img/crypto-token=-development.webp"
                        }
                        width={200}
                        height={324}
                        loading="lazy"
                        loader={uploadcareLoader}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 action-sec relative bg-[#26314F] rounded-[24px]">
            <div className="lg:py-12 py-8 lg:px-14 px-8">
              <div className="space-y-3 mt-1">
                <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-bold">Let’s Build the Future of Technology Together</h2>
                <p className="text-lg text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod  distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
              </div>
              <div>
                <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                  Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSec />
        <section className="bg-white lg:py-16 py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="titleRow mb-10">
              <div className="menus-block my-auto">
                <h3 className="title-bg">Process</h3>
                <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-center font-bold">Our Working Process</h2>
                <p className="text-lg text-center font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni, excepturi in incidunt, possimus suscipit neque quia nihil, enim alias perspiciatis iusto voluptatem sunt commodi et aliquam exercitationem nostrum. Maxime!</p>
              </div>
            </div>
            <ProcessSec/>
          </div>
        </section>
        <WhyChooseUs/>
        <IndustriesServe/>
        <TechStack/>
        <Faq
          faqData={JSON_DATA.Frequently}
          title=" About Blockchain Technology"
        />
          <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 action-sec relative bg-[#26314F] rounded-[24px]">
            <div className=" lg:py-12 py-6 lg:px-14 px-8 lg:flex gap-8 items-center ">
              <div className="space-y-3 lg:w-[70%] w-full">
                <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-bold">Let’s Build the Future of Technology Together</h2>
                <p className="text-lg text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit non ab officiis, distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod  distinctio exercitationem eum similique obcaecati repellat tenetur nihil adipisci consectetur rem labore quod nesciunt ullam voluptatem? Iure, laudantium.</p>
                <div>
                <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                  Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
              </div>
              </div>
              <div className="lg:w-[30%] w-full mx-auto flex justify-center lg:mt-0 mt-5">
                 <img className="action-img" src="/image/call-to-action.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
        <FormSec/>
        <Blog/>
        <ClientTestimonials/>
        <Footer/>

        {false && show ? (
          <div className="fixed flex items-center justify-center w-10/12 p-4 bottom-8 left-10">
            <div className="z-10 p-2 space-y-2 bg-white border border-gray-800 rounded-md shadow-md shadow-black/50 md:flex lg:p-4 md:space-y-0">
              <div>
                <h5 className="mb-2 text-sm font-medium leading-tight text-gray-900 md:text-base">
                  This website uses cookies.
                </h5>
                <p className="pr-5 text-xs text-gray-900 lg:text-sm">
                  {
                    "We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data"
                  }
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-out rounded-md"
                >
                  {" "}
                  Decline{" "}
                </button>
                <button
                  onClick={() => setshow(!show)}
                  type="button"
                  className="w-full inline-block px-3 md:px-6 md:py-2.5 py-2 bg-[#161616]/50 text-white font-medium text-xs leading-tight capitalize transition duration-150 ease-in-ou rounded-md"
                >
                  {" "}
                  Accept
                </button>
              </div>
            </div>
          </div>
        ) : null}
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

