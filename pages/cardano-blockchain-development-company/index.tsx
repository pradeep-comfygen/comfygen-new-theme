import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cardano.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
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
const FaqCardano = dynamic(() => import("./components/FaqCardano"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/cardano-dapp-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano dApp Development",
    decs: "As you all know, the momentum of dApps is quite high in the blockchain market, and businesses across all domains are adopting them on priority. With Comfygen offering you Cardano blockchain development services, you can get the best dApps to meet your business requirements and advance the market position.",
  },
  {
    num: "02",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/cardano-smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Smart Contract Development",
    decs: "Our team at Comfygen is aware of how perfect the Cardano smart contracts can be, which would allow you to conduct quick, safe, and transparent operations. Considering that, we are providing the best skillset in order to deliver the best smart contract development solutions to meet your project expectations. ",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/cardano-token-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Token Development",
    decs: "We can leverage the potential of the Cardano ecosystem to deliver you a native token based on the infrastructure.This approach will help our clients launch their specific token for the crypto project without the need for any smart contract development. Our team will supervise the entire development process.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/cardano-integration-services.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Integration Services",
    decs: "Our team has the proficiency to tailor a custom software product to meet the business context and integrate the same into your IT infrastructure for aligning the Cardano blockchain app with your existing tech stack. We intend to provide you with a smooth integration with all regulatory compliance met.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/cardano-metaverse-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Metaverse Development",
    decs: "If you want to deliver immersive experiences for your users in a virtual world, then you can seek metaverse development as part of your Cardano blockchain solution. We have dedicated experts to offer you the flexibility of creating your dedicated Cardano metaverse solutions with all the features obtained.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/Cardano-DeFi-Development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano DeFi Development",
    decs: "Our Cardano blockchain development services can offer you a profound DeFi app to ensure your smart contracts have a core focus depending on the financial policies. We can implement lending, borrowing, and staking features in your Cardano DeFi app. We ensure the development of innovative platforms that redefine user interaction with digital assets. ",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/cardano-digital-wallet-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Digital Wallet Development",
    decs: "Cardano is a very demanding blockchain technology that is being leveraged for making very efficient digital wallets. It would help you store your respective crypto assets securely within the wallet. At Comfygen, we provide you with the right tools and expertise to get a secure Cardano wallet on demand.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/Cardano-DEX-Development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano DEX (Decentralized Exchange) Development",
    decs: "We use this technology to build new financial marketplaces. With our expert Cardano blockchain development services, you can expect to build high-performance exchange platforms, which would empower all financial institutions to deploy their products easily and quickly.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/cardano-nft-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano NFT Marketplace Development",
    decs: "We will be assisting you in utilizing the Cardano blockchain technology to support the creation and launch of NFT marketplaces based on the blockchain architecture. Thus, you can conclude to get the best marketplace that will replicate better usability and quality.",
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/Cardano-Blockchain-Consulting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Blockchain Consulting",
    url:"blockchain-consulting-services",
    decs: "We also tend to offer you a detailed Cardano blockchain consulting service to help you and your team understand the technology and its utilization. Following that, we will be helping you strategize the high-performance project that you expect to scale your business operations.",
  },
  {
    num: "11",
    icon: (
      <Image
        src="/img/cardano-smart-contract-audits.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Smart Contract Audits",
    decs: "Our team offers an affordable & secured auditing service for assessing if the Cardano development of smart contracts has been efficient or not. Moreover, we also recommend updates or changes for the smart contracts if it isn’t performing as they are expected to. ",
  },
  {
    num: "12",
    icon: (
      <Image
        src="/img/cardano-web3-application-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cardano Web3 Application Development",
    decs: "If you seek to attain a Cardano blockchain app, it will be smart to get a Web3 application over this decentralized network. Comfygen provides you with the flexibility of using Cardano blockchain development services to provide you with the best quality Web3 apps.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Cardano Blockchain Development Company | Cardano Development Services
        </title>
        <meta
          name="description"
          content="Comfygen is Leading Cardano Blockchain Development Company in India and the USA. Hire our best Cardano blockchain developers who are well-versed in the modularity of the Cardano SDK framework, and build secure, robust, and future-ready Decentralized App Development (dApps) and Blockchain Development. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/cardano-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Cardano Development Services | HIRE Cardano DEVELOPERS | Cardano blockchain framework | Cardano Blockchain Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose Cardano blockchain development company to establish a customized and self-sustaining Cardano SDK framework. We stand as a prominent Cardano blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Cardano Development Services | HIRE Cardano DEVELOPERS | Cardano blockchain framework | Cardano Blockchain Technology | Cardano Blockchain development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our Cardano developers who are well-versed to establish a customized and self-sustaining Cardano SDK framework. We stand as a prominent Cardano blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Cardano Blockchain Development Industry | Cardano Development Services"
        />
        <meta
          name="summary"
          content="Choose Cardano blockchain development to establish a customized and self-sustaining Cardano SDK framework. We stand as a prominent Cardano Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cardano Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Cardano Development Company in India, USA"
          content="Comfygen is a leading White label Cardano Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Cardano Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Cardano Blockchain Development Firm in India"
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
          content="Cardano Blockchain Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/cardano-blockchain-development-company"
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
                heading="Cardano Blockchain Development Company"
                ptag1="If you intend to step into the blockchain market with your dedicated application, we can help you bring out the best Cardano solution on demand. Connect with our team of experts, and we shall help create a blueprint to help you derive the best Cardano blockchain development solution."
                ptag="A Cardano blockchain app can help you leverage the potential of this emerging technology and help you set your business on a winning stage. But, in the quest to utilize the power of blockchain with the Cardano utilization, we will demand professional support from a team of proficient developers, testers, and project managers. And Comfygen is the right Cardano blockchain development agency to meet your needs for you."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Custom Cardano Development Services by Experts"
          ptag="Comfygen, being the best Cardano blockchain development firm, has been in the technological innovation space for a long time now. Over time, our skilled experts have gained immense knowledge about the constantly evolving blockchain technology and have the potential to deliver custom and top-end Cardano blockchain development solutions. This shall help you get a high-performance product that meets your specific project vision and needs."
          ptag1="Working with us will offer you the liberty to access the unrivaled expertise we possess in the field of blockchain and the utilization of Cardano in particular. Our job is to provide you with end-to-end services, starting with planning for your dedicated Cardano blockchain app and executing the development, testing, and deployment tasks. "
          imgSrc="/img/custom-cardano-development-services-by-experts.webp"
          imgW={550}
          imgH={500}
          altTag="Custom Cardano Development Services by Experts"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Our Cardano Blockchain Development Services{" "}
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
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
        <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
          <p className="text-2xl font-bold">Have a Query?</p>
          <div>
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Contact Now
              </span>
            </Link>
          </div>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              {JSON_DATA.Major.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-2"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Service.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 rounded-lg border-2 border-dashed border-[#121212] space-y-2"
                  >
                    <div className="flex items-center  space-x-2">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                    <div>
                      <p>{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Why Should You Choose{" "}
                <span className="text-blue-500"> Cardano Development </span>{" "}
                Services?
              </h2>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.LaunchSteps.map((elem) => {
                const { title, img, desc, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Our <span className="text-blue-500">Cardano Development </span>{" "}
              Process !{" "}
            </h2>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TecnologisStack.map((omaha) => {
              return (
                <div key={omaha.num} className={`${styles.letter} space-y-4`}>
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {omaha.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-start">{omaha.stack} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-introduce-the-power-of-cardano-in-different-industries.webp"
                alt=" We Introduce the Power of Cardano in Different Industries"
                className="rounded-lg"
                width={904}
                height={740}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Introduce the Power of Cardano in Different Industries
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  At Comfygen, we have been providing our Cardano blockchain
                  development services to a plethora of clients from diverse
                  industries. We have dedicated industry experts to take on the
                  respective projects and make sure to leave no loopholes or
                  loose ends in the overall development process.
                </p>
                <p className="text-base text-black text-justify">
                  Some of the industries that we cater our Cardano blockchain
                  development services to are:
                </p>
                <ul className="space-y-2 text-left">
                  {JSON_DATA.myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="/contact-us">
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Choose Your Desired Engagement Model for Cardano Development
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
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
        <TalkExpert />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Choose Comfygen for Cardano Development Services?
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
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/hire-cardano-blockchain-developers-for-the-web3-transformation.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/do-you-want-to-learn-more-about-our-services.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt=" Do you want to learn more about our services?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#33145f] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Do you want to learn more about our services?
                  </h2>
                  <p className="">
                    If you want to learn more about our Cardano blockchain
                    development services, our team is here to explain the
                    technology in detail. Once you feel convinced about using
                    Cardano as your priority blockchain network, we shall then
                    approach you to discuss your project requirements and goals.
                  </p>
                  <div className="pt-8">
                    <Link href="/contact-us" passHref={true}>
                      <button
                        type="button"
                        className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Get in touch now.
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqCardano />
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
