import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/dapp.json";
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
        src="/img/mvp-consulting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "MVP Consulting",
    decs: "We stand out from the crowd in offering exceptional MVP consulting services to our clients for dApp development projects. Our dApp development experts use their knowledge of new market trends to analyse the probabilities of success with your ideas. We can also help you in identification of potential stakeholders, definition of technical components and selection of an ideal blockchain platform according to client requirements.",
  },
  {
    num: "02",
    url: "/web-design",
    icon: (
      <Image
        src="/img/ui-design.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "UI Design",
    decs: "Our approach to build a dApp gives the additional advantage of a systematic and structured process for designing the user interface of the dApps. We aim to create user interfaces that are simple and easy to understand. You can onboard users to your dApps effectively with flexible options for navigating different features through the user interface.  We focus on the target audience and implement the design approaches accordingly.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/dex-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DEX Development",
    decs: "Our team has great expertise and extensive knowledge of the DEX development process. We can help you create customised and scalable decentralized exchanges or DEX platforms with support for peer-to-peer transactions. Our custom dApp development expertise helps us create DEX platforms that can adapt to different business use cases. Our DEX platforms could support connectivity with external exchanges through APIs and shared order books.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/dapp-consultation.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "dApp Consultation",
    decs: "Our dApp consultation services could help you create a dApp with the efficient use of resources. You can talk to our experts about your idea for a decentralized app to find the chances of success. We guide you through the technical and business aspects of the project, alongside helping you identify the ideal blockchain platform for developing dApps.",
  },
  {
    num: "05",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/images/icons/smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Smart Contract Development",
    decs: "Decentralized application development projects rely on smart contracts, and we specialise in custom smart contract development tasks. Our developers specialise in writing the code, developing, integrating, testing and deploying smart contracts on different blockchain networks. You can also rely on us for optimization of existing smart contracts to achieve specific features. We will also handle the launch and after-maintenance of the development.",
  },
  {
    num: "06",
    url: "/game-development-company",
    icon: (
      <Image
        src="/img/gaming-app-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Gaming App Development",
    decs: "We help you leverage our dApp game development expertise to step into the domain of web3 gaming. Our gaming app development services include the use of AR and VR alongside spatial computing technologies for creating immersive games. We also utilise 3D creation tools and techniques for creating engaging and interactive gaming apps with support for play-to-earn and play-to-own models.",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/dapp-maintenance.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "dApp Maintenance",
    decs: "Our relationship with clients does not end with the delivery of dApp development solutions according to their requirements. We also support our clients after product delivery with end-to-end maintenance services. You can capitalise on our dApp maintenance services to ensure that your dApp works seamlessly in all scenarios without any complications. We will be available 24/7 to offer maintenance support.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/dapp-upgrade.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "dApp Upgrade",
    decs: "We also provide dApp upgrade services that have been tailored to help you ensure that your dApps are up-to-date with the latest features. Our seamless upgrades are essential for ensuring minimal downtime for your dApps alongside extracting maximum performance from the dApp. We will conduct timely upgrades to ensure that your dApp stays on top in a rapidly evolving market.  ",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/dapp-porting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "dApp Porting",
    decs: "You can rely on our decentralized application development services for porting your existing dApps into different blockchains. It helps you in exploring new markets and reaching new audiences. Our team of dApp development experts can use their experience working with different blockchain platforms and advanced tools for porting dApps to new environments.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          dApp Development Company in In India & The USA | Hire dApp Developer
        </title>
        <meta
          name="description"
          content="Comfygen is the leading dApp Development Company In India & The USA. We offer dApp Development services that assure secure and scalable solutions for businesses. Get in touch today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/dapp-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Looking for dApp Development Services | Hire Top dApps developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen provide top-notch dApp development services to help startups and enterprises build scalable and robust decentralized applications that run on peer to peer network."
        />
        <meta
          property="og:twitter_title"
          content="dApps Development Company | Hire dApps Development Company"
        />
        <meta
          property="og:twitter_description"
          content="If you're looking for a dApp Development Company | dApps Development Services in India? Hire our expert dApp developers for secure and efficient blockchain development solutions."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Decentralized application development | dApp Development Company | dApp developers | dApp Development Services"
        />
        <meta
          name="summary"
          content="Blockchain dApp Development Company | Comfygen Privtate Limited: Are you Looking for a blockchain dApp Development Company in India? Hire our expert blockchain dApp developers for secure and efficient blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a dApp Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Decentralized Application Development Company"
          content="Comfygen is a World Class Decentralized Application Development Agency: We Build the Future of Business, One blockchain dapp development company at a Time."
        />
        <meta
          name="category"
          content="Decentralized Application Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Decentralized application development Firm in India"
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
          content="Decentralized application development Services Provider"
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
                heading="dApp Development Company"
                ptag1="We are a trusted dApp development company In Canada & The USA for creating secure, scalable and high-performance dApps for joining the web3 revolution. Our team of dApp development experts gives you an opportunity to prepare your business for emerging trends in web3. We can develop decentralized applications for different industries with the advantage of specialised knowledge of consensus algorithms, decentralized storage and web3 principles."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Experience Our Uncompromised dApp Development Expertise!"
          ptag="We are one of the pioneers in delivering dApp development services with a client-centric approach. Our experience in creating the backend code for dApps and intuitive, user-friendly interfaces boosts the quality of our results in dApp development. We can also leverage our business acumen to create custom dApps that help your business grow. You can rely on our decentralized application development expertise to translate your ideas into ready-to-use dApps with seamless user experiences."
          imgSrc="/img/experience-our-uncompromised-dapp-development-expertise.webp"
          imgW={550}
          imgH={500}
          altTag="Experience Our Uncompromised dApp Development Expertise!"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Providing Unmatched Proficiency with our Different Dedicated
                  dApp Development Services{" "}
                </h2>
                <p className="text-base text-slate-800">
                  Comfygen strives to achieve excellence as a decentralized
                  application development company with a specialisation in
                  delivering a broad range of dApp development services. We
                  bring you dApp development expertise in different areas to
                  help you achieve transformative and successful results for
                  your business.
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
        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Here’s Our Technical Tool-Stack That Supports Our Profound dApp
                Development Services
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
                    <div className="flex items-center space-x-2 w-full p-2.5 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                        {title}
                      </h3>
                    </div>
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
              The Back-End{" "}
              <span className="text-blue-500">
                Coding Language Proficiency We Have{" "}
              </span>{" "}
              for Service Assistance!{" "}
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
        <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4">
          <div className="">
            {JSON_DATA.FrontEnd.map((elem: any) => {
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
          <div className="grid  gap-10 lg:grid-cols-2 grid-cols-1 bg-blue-900 lg:p-10 p-6">
            {JSON_DATA.Stack.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div key={num} className="p-4 space-y-4 hover:shadow-2xl">
                  <div className="flex items-center  space-x-4">
                    <div className="flex items-center justify-center bg-white p-2 rounded">
                      <Image src={img} alt={title} width="80" height="80" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div>
                    <p className="text-white text-base">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4">
          <div className="">
            {JSON_DATA.Cloud.map((elem: any) => {
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
          <div className="grid  gap-10 lg:grid-cols-2 grid-cols-1 bg-gradient-to-tr from-sky-300 to-blue-800 lg:p-10 p-6">
            {JSON_DATA.DataBase.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div key={num} className="p-4 space-y-4 hover:shadow-2xl">
                  <div className="flex items-center  space-x-4">
                    <div className="flex items-center justify-center bg-white p-2 rounded">
                      <Image src={img} alt={title} width="80" height="80" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div>
                    <p className="text-white text-base">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                How Does dApp Development Benefit the Businesses?
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
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-2xl font-bold text-[#0E1F51] ">
              Have a Closer Look at Our Methodology for Developing Your dApps!
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
                src="/images/comfygen-is-renowned-across-various-industries-for-its-outstanding-dapp-development-services.webp"
                alt=" We Introduce the Power of Cardano in Different Industries"
                className="rounded-lg"
                width={904}
                height={740}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Comfygen is Renowned Across Various Industries for its
                Outstanding dApp Development Services!
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  {" "}
                  We are a reliable decentralized application development
                  company for helping businesses across different industries
                  capitalise on the business value of dApps. Our dApps could
                  help your business adapt to emerging technology trends with
                  end-to-end solutions that offer scalability and security. We
                  cater to the requirements of decentralized application
                  development in different industries, such as,
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
              Here are Our Business-Centric Engagement Models!
            </h2>
            <p className="text-base text-slate-800">
              We provide flexible business-centric engagement models that help
              you choose the best path for your business to leverage our dApp
              development services with optimal use of resources.
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
                Why Rely on Comfygen for dApps Development?
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
              backgroundImage: `url("/images/hire-dapp-developer.webp")`,
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
                  src="/images/is-there-any-other-information-we-can-help-you-with.webp"
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
              <div className="flex h-full items-center rounded-lg bg-[#2A3D65] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Is There Any Other Information We Can Help You With?
                  </h2>
                  <p className="">
                    We are a trusted choice among top dApp development platforms
                    with a broad range of services. You can explore the details
                    of our services, such as dApp consultation and porting, to
                    learn more about the depth of our expertise in dApp
                    development. If you want any other information, then you can
                    reach out to us through your preferred channels right now.
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
          title="dApp Development Services"
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
