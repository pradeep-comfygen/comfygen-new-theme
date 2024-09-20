import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ethereumblock.json";
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
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/ethereum-blockchain-consulting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Blockchain Consulting",
    url:"blockchain-consulting-services",
    decs: "You might have many queries about your Ethereum development project before taking the first step. Our Ethereum blockchain consulting services could help you connect with experts and find relevant answers to your doubts without delays.",
  },
  {
    num: "02",
    url: "/dapp-development-company",
    icon: (
      <Image
        src="/img/ethereum-dapps-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum dApps Development",
    decs: "Decentralized applications are the most important component for transforming business applications with blockchain. Our Ethereum dApp development services could help you create a fully functional dApp for your business with zero downtime. ",
  },
  {
    num: "03",
    url: "/ethereum-token-development",
    icon: (
      <Image
        src="/img/ethereum-token-developments.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Token Development",
    decs: "If you want to create ERC-20, ERC-777, ERC-865, or ERC-224 tokens, then our Ethereum developers could help you. We create Ethereum-based tokens with powerful in-built security measures and safeguards against prominent security risks.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/ethereum-network-launch.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Network Launch",
    decs: "Our Ethereum blockchain development agency also specializes in launching private networks on Ethereum. You can rely on our experts to launch a private, scalable, and secure network on Ethereum blockchain with exclusive benefits.",
  },
  {
    num: "05",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/ethereum-smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Smart Contract Development",
    decs: "With expertise in developing multiple customized smart contracts for different projects, our Ethereum developers could create the best Solidity smart contracts. We ensure that you get secure and cost-effective smart contracts according to your needs.",
  },
  {
    num: "06",
    url: "/nft-marketplace-development-company",
    icon: (
      <Image
        src="/img/ethereum-nft-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum NFT Marketplace Development",
    decs: "We also specialize in developing decentralized and customizable NFT marketplaces with easy-to-use interfaces. Set a new milestone with your own NFT marketplace and attract your audience to capitalize on an emerging web3 trend.",
  },
  {
    num: "07",
    url: "/defi-development-company",
    icon: (
      <Image
        src="/img/ethereum-deFi-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum DeFi Development",
    decs: "Our Ethereum development services also include DeFi development services that can help you create a new generation of Ethereum-based financial apps. We can help you incorporate appealing features such as bridges, swaps, yield farming, and staking for your DeFi apps.",
  },
  {
    num: "08",
    url: "/game-development-company",
    icon: (
      <Image
        src="/img/ethereum-game-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Game Development",
    decs: "Step into the web3 revolution with the support of our Ethereum blockchain development firm for designing and launching Ethereum-based decentralized games. We help you incorporate popular models such as play-to-earn and play-to-own in your web3 games.",
  },
  {
    num: "09",
    url: "/mobile-app-development",
    icon: (
      <Image
        src="/img/ethereum-mobile-app-development-porting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Mobile App Development Porting",
    decs: "Our Ethereum blockchain development service list also includes app porting to help you with faster and more secure porting of your applications to the Ethereum blockchain. Revolutionize your business infrastructure with Ethereum by using our app porting services.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Ethereum Blockchain Development Services | Hire Ethereum blockchain
          developer
        </title>
        <meta
          name="description"
          content="Let us help you develop an Ethereum blockchain that will transform your business. With end-to-end solutions for secure Ethereum blockchain applications, Comfygen leads the revolution in Ethereum blockchain development. Hire the best Ethereum blockchain developer and revolutionize your digital ecosystem. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://comfygen.com/ethereum-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Empower Your Vision: Unleash the Potential of Ethereum Blockchain Development"
        />
        <meta
          property="og:facebook_description"
          content="Experience the expertise of Comfygen's Ethereum development services, offering proofs of concept, pilots, and full-scale solutions. Consult with our experts today and harness the true potential of blockchain technology."
        />
        <meta
          property="og:twitter_title"
          content="Industry-Driven Excellence: Tailored Ethereum Application Development Services"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen delivers industry-driven Ethereum application development services, crafting enterprise solutions and DApps with unique blockchain features. Experience excellence tailored to your industry needs."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Ethereum blockchain development company | Ethereum blockchain development Services | Ethereum blockchain development Service Provider"
        />
        <meta name="summary" content="Ethereum blockchain development Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Ethereum blockchain development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Ethereum blockchain development Company"
          content="Comfygen is a World Class Ethereum blockchain development Industry: We Build the Future of Business, One Ethereum blockchain development Services at a Time."
        />
        <meta
          name="category"
          content="Ethereum blockchain development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Ethereum Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Ethereum Blockchain Development Service Provider"
        />
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
                heading="Ethereum Blockchain Development Company"
                ptag1="Discover your ability to stay updated with the latest blockchain and web3 trends with our Ethereum blockchain development services. We are a popular Ethereum blockchain development company with experience in navigating the Ethereum ecosystem for delivering scalable and secure blockchain solutions. Our comprehensive Ethereum app development services can help you become a trendsetter in decentralized technology."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="We Provide Unmatched Proficiency with Our Ethereum Blockchain Development Services!"
          ptag="Our Ethereum development experts are skilled at delivering proofs of concept, pilots, and comprehensive Ethereum blockchain solutions. We have helped clients build powerful decentralized business applications by leveraging the full potential of Ethereum blockchain. As one of the leading service providers for Ethereum dApp development, Comfygen strives to achieve robust business solutions according to your requirements. Hire our Ethereum developers to capitalize on their expertise in utilizing effective development tools and frameworks."
          imgSrc="/img/we-provide-unmatched-proficiency-with-our-ethereum-blockchain-development-services.webp"
          imgW={550}
          imgH={500}
          altTag="We Provide Unmatched Proficiency with Our Ethereum Blockchain Development Services!"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Explore Our List of Practical and Demanding Ethereum
                  Blockchain Development Services
                </h2>
                <p className="text-base text-slate-800">
                  We have always sought excellence in delivering Ethereum
                  blockchain solutions for different verticals worldwide
                  according to your custom requirements. You can trust our
                  certified Ethereum developers to access a broad range of
                  Ethereum blockchain development services according to your
                  desired specifications.
                </p>
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
                const { title, decs, num, img, url } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 rounded-lg border-2 border-dashed border-[#121212] space-y-2"
                  >
                    <div className="flex items-center  space-x-2">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <a
                        href={url}
                        className="hover:underline underline-offset-2"
                      >
                        <h3 className="text-base font-bold text-black">
                          {title}
                        </h3>
                      </a>
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
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why are Businesses Keen to Availing Ethereum Blockchain
                Development Solutions?
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Benefits.map((elem) => {
                const { tittle, decs, num, img } = elem;
                return (
                  <div key={num} className="shadow-xl">
                    <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                      <div className="flex items-center justify-center h-14 w-14">
                        <Image
                          className="rounded-md"
                          alt={tittle}
                          src={img}
                          height={512}
                          width={512}
                          loader={uploadcareLoader}
                          unoptimized={true}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {tittle}
                      </h3>
                    </div>
                    <div className="px-4 py-4 ">
                      <p className="">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-2xl font-bold text-[#0E1F51] ">
              Have a Closer Look at Our Methodology for Approaching Ethereum
              Blockchain Development Services!
            </h2>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.LeadingSoftware.map((elem) => {
              const { title, img, num } = elem;
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
                  <ul className="space-y-2 text-left">
                    {elem.pList.map((item, index) => (
                      <li className="flex text-base text-black/80" key={index}>
                        <span className="pr-2 mt-1.5 text-[#4f4f50]">
                          <BsFillStarFill className="w-4 h-4" />
                        </span>
                        {item}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-offer-our-impeccable-ethereum-blockchain-development-services-to-diverse-industries.webp"
                alt="  We Offer Our Impeccable Ethereum Blockchain Development Services to Diverse Industries!"
                className="rounded-lg"
                width={904}
                height={740}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Offer Our Impeccable Ethereum Blockchain Development Services
                to Diverse Industries!
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  As the business landscape changes consistently, the Ethereum
                  blockchain development industry faces new challenges. We can
                  help you make the most of Ethereum development services for
                  creating solutions that not only help you improve but also
                  simplify your workflows with a competitive advantage. Our
                  Ethereum development experts have worked on projects for
                  clients from different industries, such as,
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
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-6">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Explore Our Highly Sophisticated Engagement Models!
            </h2>
            <p className="text-base text-slate-800">
              We offer an exclusive advantage to hire Ethereum blockchain
              developer expertise for your projects according to your needs. We
              offer three different customer-centric engagement models to
              deliver the best results for your Ethereum development project.
            </p>
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
        <TalkExpert />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Rely on Comfygen for Ethereum Blockchain Development?
              </h2>
              <p className="text-base text-slate-800">
                Comfygen is one of the leading pioneers for different types of
                Ethereum blockchain services, including token development, dApps
                development, and consulting. We have been successful in
                fulfilling the expectations of our clients with some prominent
                value-based benefits.
              </p>
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
              backgroundImage: `url("/img/give-your-ethereum-blockchain-utilization-a-boost-by-hiring-our-proficient-developers.webp")`,
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
                  src="/img/is-there-any-other-information-we-can-help-you-with.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="  Is There Any Other Information We Can Help You With?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#C00974] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Is There Any Other Information We Can Help You With?
                  </h2>
                  <p className="">
                    Our excellence in delivering Ethereum blockchain development
                    services continues to grow with every new project. As one of
                    the leading blockchain networks, Ethereum provides unlimited
                    possibilities for revolutionizing digital transformation of
                    your business. If you want to learn more about our Ethereum
                    development services, then you can connect with us through
                    your preferred channels right now.
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
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Ethereum Blockchain Development"
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
