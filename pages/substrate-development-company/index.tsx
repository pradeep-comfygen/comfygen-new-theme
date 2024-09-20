import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/substrate.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

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
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSubstrate = dynamic(() => import("./components/FaqSubstrate"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/cross-chain-bridges.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cross-Chain Bridges",
    decs: "Our job is to deliver high-performance and robust cross-chain bridges with the help of the Substrate framework that has XCMP to process the exchange of assets across blockchains. With this, you can ensure seamless asset or information exchange across diverse blockchains.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/sidechain-intergration.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Sidechain Integration",
    decs: "Our proficient developers can support the integration of the current Substrate DeFi app or relay chain with Polkadot or other chains to promote better interoperability. We can incorporate a pre-existing Substrate-powered relay chain to connect to other chains ",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/relay-chain-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Relay Chain Development",
    decs: "Depending on what your specific use cases are, we have the capabilities and skills to tailor the Substrate blockchain development approach accordingly to get you your relay chains. We will enhance scalability by processing transactions in multiple chains.",
  },
  {
    num: "04",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/stackimg/smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Smart Contract Development",
    decs: "Every Substrate developer at Comfygen is aware of using Parity’s ink in order to create or write smart contracts over the dedicated Substrate blockchain. Using this, you will be able to execute your business logic within the relay chain.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/parachain-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Parachain Development",
    decs: "We build relay chains and para chains with the use of Substrate technology is one among many of our USPs, as we decode every layer of this framework before using them for our blockchain development needs. We ensure to improve interoperability with this development.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/pallets-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Pallets Development",
    decs: "With the use of Rust coding language, we will help you integrate new pallets into the current Substate framework. This will enable you to add new consensus algorithms, which would support you in creating NFTs.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    Modus,
    ModusOperandi,
    LaunchSteps,
    Hire,
    myList,
    LatestTechno,
    WhyChoose,
    myList3,
    TecnologisStack,
  } = JSON_DATA;
  return (
    <>
      <Head>
        <title>
          Substrate Blockchain Development Company | Substrate Development
          Services
        </title>
        <meta
          name="description"
          content="Comfygen is Leading Substrate Blockchain Development Company in India and the USA. Hire our best Substrate blockchain developers who are well-versed in the modularity of the Substrate SDK framework, and build secure, robust, and future-ready Decentralized App Development (dApps) and Blockchain Development. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/substrate-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Substrate blockchain framework | Substrate Blockchain Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose Substrate blockchain development company to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Substrate blockchain framework | Substrate Blockchain Technology | Substrate Blockchain development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our Substrate developers who are well-versed to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Substrate Blockchain Development Industry | Substrate Development Services"
        />
        <meta
          name="summary"
          content="Choose Substrate blockchain development to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Substrate Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Substrate Development Company in India, USA"
          content="Comfygen is a leading White label Substrate Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Substrate Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Substrate Blockchain Development Firm in India"
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
          content="Substrate Blockchain Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/substrate-development-company"
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
                heading="Substrate Development Company"
                ptag="Irrespective of how complex your substrate blockchain solution requirement is, we have the right set of proficient experts who would help execute your needs without fail."
                ptag1="At Comfygen, our intent is to leverage the flexibility, modularity, and interoperability of the Substrate SDK framework that is designed with the use of Rust language. Our developers have the right proficiency to build customized and future-proof decentralized apps and blockchains. So far in the industry, we have built more than 200 digital solutions and 50 blockchain projects."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/cryptocurrency-wallet.webp"
                Width={578}
                Height={557}
                altTag="Substrate Development Company"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Our Expertise in Substrate Blockchain Development is Unmatched!"
          ptag="Experts at Comfygen have the ability to develop or design robust blockchain projects by using the Substrate, which is a powerful technology that can accelerate the overall development process. We have been harnessing the power and flexibility of the Substrate toolkit to introduce all the necessary or foundation layers of your project, to make it run your network, and application consensus blockchain layers feasibly. In short, we bring to you future-proof and customizable Substrate blockchain apps."
          imgSrc="/img/our-expertise-in-substrate-blockchain-development-is-unmatched.webp"
          imgW={550}
          imgH={500}
          altTag="Our Expertise in Substrate Blockchain Development is Unmatched!"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Explore Our Dedicated Substrate Development Services
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
        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />
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
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col text-center justify-center items-center space-y-2">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                Why do Businesses Find it{" "}
                <span className="text-blue-600">
                  Necessary to Seek Substrate Blockchain{" "}
                </span>{" "}
                Development?
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {LaunchSteps.map((elem) => {
                const { title, num, desc } = elem;
                return (
                  <div className="group border p-6 space-y-4 transition-all duration-20 hover:bg-gray-100">
                    <div className="flex items-center justify-start">
                      <div className="w-24 h-24  flex justify-center items-center border">
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
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              The Process We Follow for{" "}
              <span className="text-blue-500">
                Executing Substrate Blockchain{" "}
              </span>{" "}
              Development!{" "}
            </h2>
            <p>
              Comfygen adopts a very holistic approach towards executing
              Substrate blockchain development. And to help you understand the
              process better, here are the steps we follow:
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {TecnologisStack.map((omaha) => {
              return (
                <div key={omaha.num} className={`${styles.letter} space-y-4`}>
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {omaha.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-start">
                      <span className="px-1">
                        <BsDot size={20} />
                      </span>{" "}
                      {omaha.stack}{" "}
                    </p>
                    <p className="flex items-start">
                      <span className="px-1">
                        <BsDot size={20} />
                      </span>{" "}
                      {omaha.stack1}{" "}
                    </p>
                    <p className="flex items-start">
                      <span className="px-1">
                        <BsDot size={20} />
                      </span>{" "}
                      {omaha.stack2}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-attend-the-substrate-development-needs-for-diverse-industries.webp"
                alt="We Attend the Substrate Development Needs for Diverse Industries!"
                className="rounded-lg"
                width={800}
                height={700}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Attend the Substrate Development Needs for Diverse
                Industries!
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  When you choose Comfygen for your Substrate blockchain
                  development necessities, you can be sure of the fact that our
                  team prioritizes quality over everything else. Our blockchain
                  engineers are quite used to the technology and its core
                  elements to help you develop an astounding Substrate
                  blockchain app, irrespective of the industry you belong to.
                </p>
                <p className="text-base text-black text-justify">
                  Some of the industries that we have attended with our
                  Substrate blockchain development services are:
                </p>
                <ul className="space-y-2 text-left">
                  {myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>
                      {item}
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
                Our Different Substrate Development Engagement Models!
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {LatestTechno.map((elem) => {
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
                Why Choose Comfygen for Substrate Blockchain Development?
              </h2>
              <p className="text-base text-slate-800">
                Comfygen is undoubtedly the best Substrate development company,
                with a team of skilled experts working tirelessly to analyze
                your business requirements and give you the best blockchain
                solutions to meet your needs. But, if you want to know a bit
                more about why you must choose us over the others for your next
                Substrate development project:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {WhyChoose.map((ludo) => {
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
            <ConnectWithExpertButton
              url={"https://api.whatsapp.com/send?phone=919587867258"}
              title={"Want To Get The Best Solution? Connect Us"}
            />
          </div>
        </section>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/we-have-the-best-skilled-and-experienced-substrate-blockchain-developers-for-your-diverse-projects.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={Hire} myList={myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/is-there-anything-else-that-you-want-to-know-about-us.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Is There Anything Else that You Want to Know About Us?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#33145f] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Is There Anything Else that You Want to Know About Us?{" "}
                  </h2>
                  <p className="">
                    We hope this information about Comfygen has convinced you
                    about our capabilities and potential as a Substrate
                    blockchain development company. Still, if you have any
                    queries or questions regarding our service proficiency, the
                    technology we use, or the process we follow, feel free to
                    get in touch with us today!
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
        <FaqSubstrate />
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
