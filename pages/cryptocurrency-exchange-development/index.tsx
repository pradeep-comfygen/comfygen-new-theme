import Image from "next/image";
import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import {
  AiFillStar,
  AiOutlineDeploymentUnit,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { BiCoin } from "react-icons/bi";
import { TbCurrencyBitcoin } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptoexchange.json";
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
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const SliderSection = dynamic(() => import("../components/SliderSection"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "1",
    icon: <BiCoin className="text-blue-400" size={50} />,
    title: "Creation Of Tokens",
    decs: "The creation of tokens is based on the Ethereum blockchain. Assets should be able to be spent anywhere and at any time through tokenization. Depending on your requirements, our Ethereum developers will create custom tokens.",
  },
  {
    num: "2",
    icon: <AiOutlineSecurityScan className="text-blue-400" size={50} />,
    title: "Development Of Security Tokens",
    decs: "Using the exchange, you can tokenize assets and trade them. We use Ethereum, one of the most popular blockchains, to create tokens, and we can also leverage other blockchains.",
  },
  {
    num: "3",
    icon: <AiOutlineDeploymentUnit className="text-blue-400" size={50} />,
    title: "Development Of P2P Exchanges",
    decs: "As a result of P2P exchange, people can connect directly with people in a decentralized trading environment, while the Admin owns the Escrow system.",
  },
  {
    num: "4",
    icon: <BsCurrencyExchange className="text-blue-400" size={50} />,
    title: "Development Of Centralized Exchanges",
    decs: "Provide centralized crypto exchanges with a powerful engine for order matching and transaction processing to provide a secure trading platform for potential users.",
  },
  {
    num: "5",
    icon: <TbCurrencyBitcoin className="text-blue-400" size={50} />,
    title: "Exchange Platform For Bitcoin ",
    decs: "Our team of skilled developers and programmers assists our customers in creating a highly secure Bitcoin exchange website that speeds up transactions as a top cryptocurrency exchange website creation company.",
  },
  {
    num: "6`",
    icon: <MdOutlineDeveloperMode className="text-blue-400" size={50} />,
    title: "Developing Decentralized Applications",
    decs: "As a custom decentralized Blockchain application developer and infrastructure support provider, we’re committed to bringing speed to your business while keeping you ahead of the competition.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Cryptocurrency Exchange Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen is Leading Cryptocurrency Exchange Development Company In India & The USA, offering top-rated cryptocurrency exchange development services with the best developers. Affordable white-label cryptocurrency exchange development solutions available. Hire our expert Crypto Developers."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/cryptocurrency-exchange-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="En-us" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cryptocurrency Exchange Development Company In India &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is Leading Cryptocurrency Exchange Development Company In India & The USA, offering top-rated cryptocurrency exchange development services with the best developers. Affordable white-label cryptocurrency exchange development solutions available. Hire our expert Crypto Developers.  "
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/cryptocurrency-exchange-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:07:49+00:00"
        />
        <meta
          property="og:image"
          content="s/images/Cryptocurrency-Exchange-service.png?size=1024"
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
                heading="Cryptocurrency Exchange Development Company"
                ptag="Elevate your cryptocurrency exchange business with Comfygen, the industry's leading crypto exchange platform development firm. Specializing in secure and private cryptocurrency exchange development services, we provide custom white-label cryptocurrency exchange software development tailored to your unique business needs. Our team of professionals guides you to choose the best software program for your bitcoin exchange development, ensuring industry-best solutions that align with your requirements and budget."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/images/cryptocurrency-exchange-development.webp"
                Width={601}
                Height={590}
                altTag="Cryptocurrency Exchange Development"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51] ">
                  Services for{" "}
                  <span className="text-blue-600">Crypto Exchange</span>{" "}
                  Development
                </h2>
              </div>
              <div className="grid gap-10 py-4 lg:py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
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
          heading="Cryptocurrency Exchange development Company"
          ptag="In the Best cryptocurrency exchange developmentindustry, Comfygen is a leading company. Leading the cryptocurrency exchange development industry with customer value, Comfygen is climbing high."
          ptag1=" Cryptocurrencies are one of today’s hottest financial trends. Digital currencies are replacing centralized bank-controlled currencies such as dollars, Euros, rupiahs, et al. with decentralized peer-to-peer exchanges. Bitcoin, Ethereum, Litecoin, Dash, and other cryptocurrencies are exchanged through cryptocurrency exchanges."
          imgSrc="/images/crypto-exchange.webp"
          imgW={564}
          imgH={559}
          altTag="Developmen Opportunity"
        />
        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:space-x-8 md:space-y-0">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <h2 className="text-[#0E1F51] text-[30px] lg:text-[40px] font-bold">
                Development Opportunity For Cryptocurrency Exchanges
              </h2>
              <p className="text-base text-black/80 ">
                In recent years, cryptocurrency has consolidated its position as
                a secure, accelerated, and transparent transaction platform.
                Cryptocurrencies are transforming the traditional financial
                paradigm because of these benefits. The crypto exchange market
                is worth billions of dollars, so action is key to creating new
                revenue streams for your company.
              </p>
              <p className="text-base text-black/80">
                As an investment option, cryptocurrencies are considered to be a
                good choice. The favorable market conditions drive traders to
                invest in digital currencies via crypto exchange software. As a
                result, cryptocurrency exchange software developmenthas become
                increasingly popular.
              </p>
              <p className="text-base text-black/80">
                The crypto exchange market is worth billions of dollars, so
                action is key to creating new revenue streams for your company.
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/images/development-opportunity.webp"
                alt="Developmen Opportunity"
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
        {/* <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 bg-white">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center">
              <p className="text-lg font-medium capitalize   text-blue-600">
                Planning
              </p>
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Features Of  <span className="text-blue-600">Our Crypto Exchange</span> Software</h2>
            </div>
            <div className="flex justify-center items-center py-10 relative">
              <div className="absolute z-20 mr-4 top-40 -left-6">
                <button title="previous" onClick={previous} className="px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 ">
                  <BiChevronLeft className='text-[1.4rem]' />
                </button>
              </div>
              <Slider ref={sliderRef} {...settingstwo} className="w-full flex items-center h-[21rem]">
                {Features.map((elem) => {
                  const { title, num, desc } = elem;
                  return (
                    <div key={num} className='px-4'>
                      <div className="p-6 relative bg-slate-100 cursor-pointer rounded-[17px] ">
                        <div className='flex justify-between'>
                          <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center">
                            <span className="text-blue-500 text-4xl font-semibold">{num}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg pt-4   text-[#0E1F51] font-semibold group-hover:text-white">{title}</h3>
                          <div className="flex justify-start space-x-2">
                            <div className="w-10 h-1 rounded-full bg-blue-500"></div>
                            <div className="w-6 h-1 rounded-full bg-blue-500"></div>
                          </div>
                          <div className="space-y-2">
                            <p className="break-all    text-[#000000] group-hover:text-white/90">{desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>);
                })}
              </Slider>
              <div className="absolute top-40 -right-4">
                <button onClick={next} className="px-5 py-3 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 " aria-label={'this is right btn '}><AiOutlineRight /></button>
              </div>
            </div>
          </div>
        </section> */}
        <SliderSection
          Sliderdata={JSON_DATA.Sliderdata}
          Sliderheader={JSON_DATA.Sliderheader}
        />
        <div className="py-10">
          <section className="flex flex-col-reverse lg:flex-row items-start space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left pt-5 md:pt-0">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Features of a Decentralized Cryptocurrency Exchange
                </h2>
              </div>
              <p className="text-base text-black/70">
                Make your business more efficient by hiring our expert
                blockchain developers. Using our decentralized exchange,
                transactions can be carried out on a peer-to-peer basis to their
                full potential. We have delivered more than 21 decentralized
                exchange solutions to clients in the last few years.
              </p>
              <ul className="space-y-2 text-left">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex text-black/80" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <AiFillStar className="w-4 h-4" />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/images/cryptocurrency-exchange.webp"
                alt="Cryptocurrency Exchange"
                title="Cryptocurrency Exchange"
                className="rounded-lg w-[70%]"
                width={600}
                height={600}
              />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-start space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                src="/images/exchange-development.webp"
                alt="Crypto Exchange Development Company in India"
                title="Altcoin Development Company"
                className="rounded-lg w-[80%]"
                width={512}
                height={512}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <div className="space-y-3">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Crypto Exchange Development Company in India
                </h2>
              </div>
              <p className="text-base text-black/70">
                Comfygen has granted cryptocurrency traders a whole new way to
                trade cryptocurrencies with an unparalleled vision and strong
                market performance through its dedicated team. The company is a
                pioneer in developing cryptocurrency exchanges in India, looking
                into the future to foster its development.
              </p>
              <p className="text-base text-black/70">
                A white-label cryptocurrency exchange software solution that
                offers customized and scalable features at a 7% lower cost. With
                a focus on connectivity, security, and seamless integration, our
                blockchain development team provides you with a cryptocurrency
                exchange platform.
              </p>
              <ul className="space-y-2 text-left">
                {JSON_DATA.myList2.map((item, index) => (
                  <li className="flex text-black/80" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <AiFillStar className="w-4 h-4" />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <section className=" py-10 bg-[#F8FAFC]">
          <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                White Label{" "}
                <span className="text-blue-600">Cryptocurrency Exchange </span>{" "}
                <br /> Development{" "}
              </h2>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.Label.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-3 space-y-4   cursor-pointer rounded-[17px]"
                  >
                    <div className="">
                      <Image
                        className="rounded-md"
                        title={title}
                        alt={title}
                        src={img}
                        height={100}
                        width={100}
                        loader={uploadcareLoader}
                        unoptimized={true}
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg   text-slate-900 font-semibold group-hover:text-white">
                        {title}
                      </h3>
                      <p className="break-all    text-[#000000] group-hover:text-white/90 line-clamp-4">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <section className="py-10">
          <div
            className="bg-center bg-cover bg-no-repeat lazyload lg:py-20  py-10"
            style={{ backgroundImage: `url("/img/crypto-tokenn.webp")` }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#4800A1CC]/90 backdrop-blur-md p-8 lg:p-20 rounded-2xl">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <Cryptocurrency />
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=" Cryptocurrency Exchange Development"
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
