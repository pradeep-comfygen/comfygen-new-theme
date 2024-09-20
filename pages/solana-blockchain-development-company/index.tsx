import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/solanatoken.json";
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
const FaqSolanoBlock = dynamic(() => import("./components/FaqSolanoBlock"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/solana-blockchain-consulting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Consulting",
    url: "blockchain-consulting-services",
    decs: "Our Solana blockchain consulting services would help you understand why you might need Solana blockchain app development services and how it can benefit you!.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/cardano-smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain dApp Development",
    decs: "We have a team of proficient experts to help you build & launch high-performance dApps over the Solana blockchain development related to payments, stablecoins, etc.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/solana-blockchain-nft-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain NFT Marketplace Development",
    decs: "If you ever dreamt of having a dedicated Solana Blockchain NFT marketplace, we will help you create one over the Solana blockchain development services.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/solana-blockchain-spl-token-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain SPL Token Development",
    decs: "Our experts will help the clients tokenize their current assets with the help of Solana blockchain Solana Program Library tokens. It can be further seamlessly exchanged in any white-label DEX platform which improves security and high throughput.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/solana-blockchain-wallet-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Wallet Development",
    decs: "One of the biggest USPs of Comfygen is to provide you with your preferred blockchain mobile application development or web wallet development services for handling the Solana dApps or other associated blockchain development projects. This development will make your transaction much more secure and encrypted. ",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/solana-blockchain-smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Smart Contract Development",
    decs: "Our experts craft powerful and highly efficient smart contracts using Solana blockchain development. In case you have any project related to NFT Development Services, Web3 Development Services, and DeFi Development services, we provide you with the best auditing and Solana smart contract development solutions. ",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/solana-blockchain-defi-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Defi Development",
    decs: "For you to leverage the benefits of DeFi development technology or to enthrall lenders and borrowers, we will be helping you build a diverse range of DeFi loan app development platforms or other such systems over the Solana blockchain development Services provider will help you out. ",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/solana-blockchain-node-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Node Development",
    decs: "We can assist you in connecting with the Solana blockchain development network to create various blockchain development services or secure the network using our solana blockchain node development services.  With this, we will offer security configurations to restrict unauthorized access to the nodes.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/solana-blockchain-game-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Game Development",
    decs: "We have the proficiency to help you launch NFT-based game development to promote an ecosystem of interactive gaming. This development solution brings both transparency and immutability to gaming assets. ",
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/solana-blockchain-infrastructure-and-utility-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Solana Blockchain Infrastructure & Utility Development",
    decs: "By implementing the Solana blockchain development solutions, we can help you develop Web3 development solution infrastructure and utility as well . We have a multidisciplinary team of Solana developers who are experts in enterprise-grade development to offer a delightful user experience",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    Hire,
    myList,
    LatestTechno,
    WhyChoose,
    myList3,
    TecnologisStack,
    LeadingSoftware,
    ChooseComfy,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Solana Blockchain Development Company in India and the USA | Comfygen
        </title>
        <meta
          name="description"
          content="Explore the world of Solana blockchain with Comfygen's expert Solana blockchain developers, providing bespoke Solana blockchain development solutions, and services designed to meet your unique business needs and objectives. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/solana-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Comfygen: Offering top-notch Solana blockchain development services at the best rates."
        />
        <meta
          property="og:facebook_description"
          content="Comfygen opens doors to harnessing the potential of dApps and executing impactful marketing campaigns through its Solana blockchain development services, offering a powerful combination of technology and marketing for your business success."
        />
        <meta
          property="og:twitter_title"
          content="Comfygen: 250+ Blockchain Developers dedicated to delivering full spectrum Solana Blockchain Development Services."
        />
        <meta
          property="og:twitter_description"
          content="With a team of 250+ Blockchain Developers, Comfygen stands as a premier Solana Blockchain Development Company, delivering a full spectrum of Solana Blockchain Development Services to startups, enterprises, and businesses, ensuring a comprehensive approach to development needs"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Solana Blockchain Development Company | Solana Blockchain Development Services | Solana Blockchain Development Solutions"
        />
        <meta
          name="summary"
          content="Solana Blockchain Development Company | Comfygen Privtate Limited: Are you Looking for a Solana Blockchain Development Company in India? Hire our expert Solana Blockchain developers for secure and efficient blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Solana Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Solana Blockchain Development Company"
          content="Comfygen is a World Class Solana Blockchain Development Agency: We Build the Future of Business, One Solana Blockchain Development Company at a Time."
        />
        <meta
          name="category"
          content="Solana Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Solana Blockchain Development Firm in India"
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
          content="Solana Blockchain Development Services Provider"
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
                heading="Solana Blockchain Development Company "
                ptag1="We at Comfygen help startups, businesses, and enterprises to develop efficient and user-friendly ecosystems using Solana blockchain development services. Our Solana blockchain development solution includes dApp development, support for decentralized gaming applications, solana smart contract development, and Solana blockchain consulting. Our high-end services have:"
                li="A dedicated team of solana blockchain experts."
                li1="Affordable pricing for Solana Blockchain Development Services."
                li2="Opportunity to save 60% on solana blockchain development costs."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="We Provide Unmatched Solana Blockchain Development Proficiency!"
          ptag="Our team of experts creates the best dApps using Solana's scalability, security, and speed. We are skilled in using Solana blockchain development workflows, tools, and client SDKs to create customized solana blockchain development solutions for our clients, from Web3 development services to DeFi development services to NFTs development services. At Comfygen, we provide a full suite of blockchain development services to all businesses of various sectors, types, and sizes."
          imgSrc="/img/we-provide-unmatched-solana-blockchain-development-proficiency.webp"
          imgW={550}
          imgH={500}
          altTag="We Provide Unmatched Solana Blockchain Development Proficiency!"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem] ">
                  Have a Closer Look at What We Have to Offer Within Solana
                  Blockchain Development Services!
                </h2>
                <p className="text-base text-slate-800">
                  We at Comfygen, being as a reputed Solana development company
                  provides the below services to business of different sizes
                  from various industries.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num ,url} = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                      url={url}
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

        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-2xl font-bold text-[#0E1F51] ">
              Embrace the Technology Stack We Use for Approaching Solana
              Blockchain Development!
            </h2>
            <p className="text-base text-slate-800">
              Every strong decentralized development solution needs proper
              backing through powerful technologies. Therefore, Comfygen also
              uses powerful blockchain development tools, technologies, and
              coding languages to make Solana blockchain development services
              work out efficiently for your business operations.
            </p>
          </div>
          <div className="grid gap-8 pt-8  lg:grid-cols-2 grid-cols-1 xl:gap-12">
            {LeadingSoftware.map((elem) => {
              const { title, img, num, decs } = elem;
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
                  <p>{decs}</p>
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
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Why are Businesses Inclined Towards{" "}
              <span className="text-blue-500">
                Adopting Solana Blockchain Development{" "}
              </span>
              Solutions?
            </h2>
            <p className="text-base text-slate-800">
              Solana Blockchain Development Solution is one of the out-of-box
              solutions that provide the best solana blockchain development
              features to all the businesses to grow their business. It is one
              of the most popular blockchain development platforms in the
              market.
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
                    <p className="flex items-start">{omaha.stack} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Our Execution Process
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
        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/solana-blockchain-development-service-provider-to-diverse-industries.webp"
                alt="  Get Insight into Our Hands-On Expertise in Providing Solana Blockchain Development Service Provider to Diverse Industries!"
                className="rounded-lg"
                width={904}
                height={740}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Get Insight into Our Hands-On Expertise in Providing Solana
                Blockchain Development Service Provider to Diverse Industries!
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Comfygen is keen on providing the best quality Solana
                  blockchain app development service provider to clients from
                  diverse blockchain development industries. And in this quest,
                  we have been staying updated with our approach towards
                  utilizing the right technology stack for meeting the
                  respective demands of our clients. The best thing about
                  Comfygen as leading solana blockchain development company and
                  our experts is strive to meet the deadlines on priority,
                  irrespective of the complexity of the Solana blockchain
                  development project or the industry it belongs to. And that is
                  what sets us apart from the others in the market:
                </p>
                <ul className="space-y-2 text-left">
                  {myList3.map((item, index) => (
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

        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Approaching the Solana Blockchain Development Projects With
                Diverse Engagement Models
              </h2>
              <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                We as a leading Solana development company have a experience
                resources who can handles all your project at ease. Our experts
                will help you and support you throughout the development
                process, making the product's launch smooth.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {ChooseComfy.map((elem) => {
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
                      <p className="px-4 py-4 text-black text-justify">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <TalkExpert />
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Should You Choose Comfygen Above Others for Solana
                Blockchain Development?
              </h2>
              <p className="text-base text-slate-800">
                Our Solana Blockchain Development service offerings concerning
                Solana blockchain development prove our expertise in the domain.
                But, if you still intend to learn more about why you should be
                inclined towards hiring Comfygen over others for your blockchain
                development requirements, here are a few reasons for you to
                count on:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {WhyChoose.map((ele) => {
                return (
                  <div key={ele.num} className="border p-3 space-y-2 shadow">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {ele.title}
                    </p>
                    <p className="text-base text-slate-800">{ele.decs}</p>
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
              backgroundImage: `url("/img/hire-solana-blockchain-developer.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#3FB0EF]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
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
                  src="/img/is-there-anythings-else-you-want-to-know-comfygen-solana-blockchain-development.webp"
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
                    Is There Anything Else You Want to Know About Comfygen’s
                    Solana Blockchain Development?
                  </h2>
                  <p className="">
                    If you are yet to know something else about Solana
                    blockchain app development solutions and how Comfygen
                    promises high-end performance from the end solution, connect
                    with us today, and we shall attend to all your queries or
                    questions. Once you know enough about how Solana blockchain
                    is important for your business operations, we can start with
                    the further steps for your development process.
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
        <FaqSolanoBlock />
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
