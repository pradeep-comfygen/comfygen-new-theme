import { useState } from "react";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import { SiNike } from "react-icons/si";
import styles from "./styles.module.css";
import JSON_DATA from "./json/hyperledgerblockchain.json";
import Link from "next/link";
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
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
const BlogSection = dynamic(() => import("../components/BlogSection"), {
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
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const Process = [
  {
    num: "1",
    icon: (
      <Image
        src="/img/hyperledger-blockchain-consultation.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Hyperledger Blockchain Consultation",
    url:"blockchain-consulting-services",
    decs: "Our Hyperledger development services include the facility of consultation for your Hyperledger blockchain project. We identify the Hyperledger development framework that would align with your business use cases alongside offering promising value improvements.",
  },
  {
    num: "2",
    url: "/web-design",
    icon: (
      <Image
        src="/img/ux-and-technical-design.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "UX and Technical Design",
    decs: "We deliver Hyperledger application development solutions complemented with competent UI/UX design services. Our team of Hyperledger developers offers high fidelity designs with a clear outline of technical components, database design and user stories.",
  },
  {
    num: "3",
    icon: (
      <Image
        src="/img/hyperledger-app-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Hyperledger App Development",
    decs: "Our Hyperledger application development services help you leverage different Hyperledger frameworks for creating intuitive dApps. We follow an agile software development methodology to ensure that your Hyperledger dApp serves the expected results.",
  },
  {
    num: "4",
    icon: (
      <Image
        src="/img/hyperledger-smart-ontract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    url: "/smart-contract-development",
    title: "Hyperledger Smart Contract Development",
    decs: "Our Hyperledger smart contract development services help you create custom chaincodes on Hyperledger Fabric. We emphasize comprehensive security and resilience of smart contract code for different use cases including business contracts and asset definitions.",
  },
  {
    num: "5",
    icon: (
      <Image
        src="/img/support-and-maintenance.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Support & Maintenance",
    decs: "As a trusted Hyperledger blockchain development firm, we offer the assurance of post-development services such as continuous maintenance and support. Our support and maintenance services ensure optimal performance of Hyperledger solutions with minimal downtime.",
  },
  {
    num: "6",
    icon: (
      <Image
        src="/img/migration-and-upgrades.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Migration & Upgrades",
    decs: "You can rely on us for assistance in the processes for migrating or integrating legacy solutions into Hyperledger frameworks. We also help you incorporate any modifications to your new Hyperledger dApps.",
  },
  {
    num: "7",
    icon: (
      <Image
        src="/img/proof-of-concept-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Proof of Concept Development (POC)",
    decs: "We simplify the process of blockchain development with Hyperledger by providing working Proof of Concept for your ideas. Our team visualizes the feasibility of a Hyperledger-based blockchain solution with Proof of Concept development services.",
  },
  {
    num: "8",
    icon: (
      <Image
        src="/img/hyperledger-private-blockchain-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Hyperledger Private Blockchain Development",
    decs: "Hyperledger is a popular enterprise blockchain framework for building permissioned blockchains. We help you create a permissioned blockchain customized to your business requirements alongside incorporating essential access and control privileges.",
  },
  {
    num: "9",
    icon: (
      <Image
        src="/img/hyperledger-cryptocurrency-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Hyperledger Cryptocurrency Development",
    decs: "Our Hyperledger development experts also specialize in cryptocurrency development for supporting your transition to the domain of crypto. Capitalize on our cryptocurrency development services for creating unique native tokens for your permissioned blockchains.",
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/hyperledger-and-multichain-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    url: "/multichain-blockchain-development",
    title: "Hyperledger & Multichain Development",
    decs: "Multichain development services help you leverage the benefits of interoperability. We can help you with Hyperledger and Multichain development services for creating private blockchains customized for managing financial transactions of your business.",
  },
  {
    num: "11",
    icon: (
      <Image
        src="/img/hyperledger-wallets-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    url: "/crypto-wallet-development",
    title: "Hyperledger Wallets Development",
    decs: "Our Hyperledger blockchain development solutions also include services for wallets development based on Hyperledger framework. We help our clients in making the most of Hyperledger for developing secure wallets that allow seamless access to digital assets.",
  },
];

export default function Blockchain(props) {
  let { initialData } = props;

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Hyperledger Blockchain Development Company | Comfygen</title>
        <meta
          property="og:title"
          content="Hyperledger Blockchain Development Company In India &  The USA "
        />
        <meta
          name="description"
          content="Are you looking for a trusted Hyperledger blockchain development company? Comfygen is a Top-class Hyperledger Blockchain Development Company in India and the USA. We offer a complete range of Hyperleger blockchain development services to build scalable, secure, and cost-effective decentralized applications. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hyperledger-blockchain-development"
        />
        <meta
          property="og:facebook_title"
          content="Hyperledger Blockchain Development Company | Hire Hyperledger Developers"
        />
        <meta
          property="og:facebook_description"
          content="Hyperledger Blockchain Development Services Contact sales@comfygen.com for Blockchain Development | Hyperledger Development Services Comfygen offers enterprise-grade Hyperledger blockchain development services to transform business processes, making them efficient and transparent."
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:twitter_title"
          content="Hyperledger Blockchain Development Company in the USA and India"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen offers Hyperledger application development services that will let businesses transform their processes making them efficient and transparent. The experts of Comfygen will help you in developing the Blockchain apps using the Hyperledger platform and other development tools."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hyperleger Blockchain Development Industry | Hire Hyperleger Blockchain Development Services"
        />
        <meta
          name="summary"
          content="Hyperledger Application Development Services via Comfygen Privtate Limited: We Build the Future of Blockchain, the Hyperledger Blockchain Development team to shaping the future of blockchain technology through their dedicated efforts in creating innovative solutions and applications on the Hyperledger platform."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Hyperleger blockchain development agency in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hyperledger Blockchain Development Company"
          content="Comfygen is a First Class Hyperledger Blockchain Development Agency: We Build the Future of Business, One Blockchain Solution at a Time."
        />
        <meta
          name="category"
          content="Hyperleger Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Hyperleger Blockchain Development Firm in India"
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
          content="Hyperleger Blockchain Development Services Provider"
        />
      </Head>

      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading="Hyperledger Blockchain Development Company "
              ptag="We can help you explore new horizons with blockchain development on Hyperledger blockchain development services. Make the most of our capabilities for leveraging one of the most secure frameworks to simplify blockchain development company adoption in businesses."
              ptag1="We strive to help every business capitalize on the benefits of a trusted tool for capital markets and global businesses to encourage blockchain adoption. Our team of experts offer Hyperledger blockchain development services for creating secure, scalable and modular Hyperledger blockchain development solutions to empower business transformation."
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <AdviceSection
        heading="No More Compromises on Quality, with Our Hyperledger Blockchain Proficiency!"
        ptag="We are committed to help our clients tap into the true potential of Hyperledger for creating enterprise blockchain development solutions. Our expertise as a Hyperledger blockchain development company could help you capitalize on the latest technologies alongside abundant resources for creating Hyperledger applications. We deliver powerful Hyperledger blockchain development solutions for enhancing business processes with promising improvements in security. On top of it, you can trust our experts for creating Hyperledger blockchain applications development personalized to your business requirements. "
        imgSrc="/img/no-more-compromises-on-quality,-with-our-hyperledger-blockchain-proficiency.webp"
        imgW={550}
        imgH={500}
        altTag="No More Compromises on Quality, with Our Hyperledger Blockchain Proficiency!"
      />

      <ContactFromCenter />
      {/* services */}
      <section className="py-5 lg:py-10 bg-white">
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Gain Insight into Our All-Round{" "}
                <span className="text-blue-600">
                  {" "}
                  Hyperledger Blockchain Development
                </span>{" "}
                Services
              </h2>
            </div>
            <div className="grid  py-0 lg:py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-6">
              {Process.map((elem) => {
                const { title, icon, decs, url, num } = elem;
                return (
                  <ServiceSection
                    url={url}
                    key={num}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="/contact-us">
                <button className="shadow-lg transition-all hover:scale-75 duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let’s connect Now!
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="py-10">
        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Adding Technology to Proficiency: Here’s Our List of Supported
                Hyperledger Blockchain Tools or Frameworks!
              </h2>
              <p className="text-base text-slate-800">
                Our team at Comfygen believes in empowering businesses in almost
                every sector to capitalize on the benefits of Hyperledger. We
                can help you create custom blockchain solutions, based on the
                following Hyperledger frameworks.
              </p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {JSON_DATA.Platforms.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86"
                  >
                    <div className="flex flex-col justify-center items-center p-10 space-y-2">
                      <Image
                        className="object-cover"
                        src={img}
                        alt={title}
                        width={100}
                        height={100}
                      />
                      <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                        {title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                      <p className="tracking-normal text-sm text-white text-justify">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <ModusSection
        Modus={JSON_DATA.Modus}
        ModusOperandi={JSON_DATA.ModusOperandi}
      />
      <TalkExpert />
      <section className="py-20 bg-white">
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-2xl font-bold text-[#0E1F51] ">
              Have a Closer Look at Our Blockchain Development Process of
              Execution for the Hyperledger Blockchain Development Company
            </h2>
            <p className="text-base text-slate-800">
              We follow a simple Hyperledger blockchain development process to
              convert your ideas into reliable, secure and scalable practical
              applications. Our experts rely on the following steps for serving
              high-performance blockchain solutions to our clients.
            </p>
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
      </section>
      <section className="py-6 lg:py-10 bg-gray-100">
        <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 md:space-y-0">
          <div className="w-full space-y-6 text-left">
            <div className="space-y-4">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Offer Reliable Hyperledger Blockchain Development Services to
                Diverse Industries!
              </h2>
            </div>
            <p className="text-base text-black ">
              We have emerged as a reliable Hyperledger development company for
              serving clients with business ventures in different industries.
              Our team of experts has been successful in addressing the
              requirements of our clients with cutting-edge solutions based on
              Hyperledger frameworks. One of the significant traits which helps
              us deliver the best results to our clients in all industries is
              the commitment to quality.
            </p>
            <p className="text-base text-black ">
              We have worked on multiple Hyperledger blockchain development
              projects for different industries, such as,
            </p>
            <div className="w-full text-left">
              <ul className="space-y-1 text-black">
                {JSON_DATA.myList1.map((item, index) => (
                  <li className="flex " key={index}>
                    <span className="pr-4">
                      <SiNike size={26} />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-full lg:justify-end">
            <Image
              className="rounded-md"
              title=" We Offer Reliable Hyperledger Blockchain Development Services to Diverse Industries!"
              alt=" We Offer Reliable Hyperledger Blockchain Development Services to Diverse Industries!"
              src="/img/we-offer-reliable-hyperledger-blockchain-development-services-to-diverse-industries.webp"
              height={650}
              width={650}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </div>
      </section>
      <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center lg:text-center">
          <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            Here’s Our Client-Centric Engagement Models for Hyperledger
            Blockchain Development
          </h2>
        </div>
        <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
          {JSON_DATA.TechTrends.map((elem) => {
            const { title, stack, num } = elem;
            return (
              <div key={num} className={`${styles.letter} space-y-4`}>
                <div className="shadow-lg p-2 border rounded">
                  <h3 className="text-[#0E1F51] text-xl font-bold">{title}</h3>
                </div>
                <div className="space-y-2">
                  <p>{stack} </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <a href="https://api.whatsapp.com/send?phone=919587867258">
            <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Let's Communicate With IT Expert!
            </button>
          </a>
        </div>
      </section>
      <section className="lg:py-10 py-4 bg-white">
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Why Should You Go With Comfygen for Your Hyperledger Blockchain
              Development Needs?
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              At Comfygen, we work continuously to ensure that our Hyperledger
              application development services deliver effective value
              advantages to our clients. As one of the emerging leaders in
              Hyperledger development, we offer the following reasons to choose
              us for your next Hyperledger project.
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
            {JSON_DATA.ChooseComfy.map((elem) => {
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
                    <p className="px-4 py-4 text-black text-justify">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div
          className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
          style={{
            backgroundImage: `url("/img/are-you-looking-to-hire-hyperledger-blockchain-developers-let-comfygen-end-that-search-for-you.webp")`,
          }}
        >
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#08203C]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div>
      </section>
      <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
            <div className="flex xl:py-12">
              <Image
                src="/img/is-there-anything-else-you-need-help-with.webp"
                width={781}
                height={521}
                blurDataURL="URL"
                placeholder="blur"
                loader={uploadcareLoader}
                unoptimized={true}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                alt=" Let's Craft Your Omaha Poker Gaming Experience"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-gray-300 p-6 text-center text-black xl:pl-12 xl:text-left">
              <div className="xl:pl-12 space-y-2">
                <h2 className="mb-6 text-3xl font-bold">
                  Is there Anything Else You Need Help With?
                </h2>
                <p className="">
                  If you have any doubts regarding our Hyperledger blockchain
                  development services, you can always reach us through multiple
                  channels. Get ready for your consultation with our Hyperledger
                  development experts before taking the first step for
                  developing blockchain applications with Hyperledger.
                </p>
                <div className="pt-8">
                  <Link href="/contact-us" passHref={true}>
                    <button
                      type="button"
                      className="rounded-full border-2 border-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900  hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
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
        title="Hyperledger Blockchain Development"
      />
      <BlogSection initialData={initialData} />
    </div>
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
