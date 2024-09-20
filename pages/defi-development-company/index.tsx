import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/defidevelopment.json";
import Link from "next/link";
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
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/defi-dapp-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi dApp Development",
    decs: "We create and deploy DeFi dApps on distributed networks with the assurance of security and scalability. Leverage our DeFi dApp development services for a competitive edge in the DeFi business revolution. Our experts will monitor and track the entire development process for a better-quality outcome. We basically focus on result-driven development procedures.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/defi-token-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Token Development",
    decs: "We can help you create DeFi tokens with relevant functionalities to boost the growth of your DeFi platform worldwide. Our DeFi token development team can help you create DeFi tokens with the best standards of security and quality. We follow the security protocols and quality regulations to deliver what we promise.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/decentralized-exchange-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Decentralized Exchange Development",
    decs: "We can help you build a decentralized finance exchange through which one can trade DeFi tokens and manage wallets. Use our decentralized exchange solutions to cater to the fundamental needs of traders, such as security, transparency, and control. We have a successful record of developing decentralized exchange solutions for various industrial sectors.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/service-for-ico-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Lending Platform Development",
    decs: "Our experts can help you create an intuitive DeFi protocol that provides seamless lending/borrowing facilities. You can welcome millions of unbanked people into the domain of DeFi with flexible and easy-to-use DeFi lending development solutions. We implement strategies for reaching the target audience with quality development and testing approaches.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/deFi-smart-contracts.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Smart Contracts Development",
    decs: "Our DeFi development experts can create Solidity smart contracts development  for your DeFi protocols with desired technical specifications. We also pay attention to the encryption of smart contracts development for your DeFi development initiatives. Overall, we make sure to cut down on the need for intermediaries and focus on reducing costs and accelerating transaction speeds.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/mining-of-crypto-coins.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Wallet Development ",
    decs: "Our DeFi wallet development services help uncover the opportunities to create a user-centric and secure DeFi wallet that will help to empower your customers with complete control over their data and assets. Our experts are trained to offer customized DeFi wallet development services that assure you to develop a high-performance and secure Defi wallet.",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/defi-yield-farming-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Yield Farming Development",
    decs: "Our experts can help you incorporate the facility of yield farming in your DeFi lending protocols. Allow your customers to earn interest through lending their crypto assets, with the value advantages of interoperability and liquidity. So, being a top-tier DeFi yield farming development service provider, we focus on creating platforms that possess all the necessary specifications and functionalities",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/defi-staking-plateform-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Staking Platform Development",
    decs: "Our experts can help you develop an interactive DeFi staking platform on Ethereum or any other blockchain you deem suitable. Our service promises to offer a transparent and safe environment for conducting staking activities. Moreover, you will witness additional advantages of decentralization, enhanced security, liquidity, and ease of use.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/defi-crypto-banking-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Crypto Banking Development",
    decs: "Explore the prospects for another transformative change of financial services with our DeFi crypto banking development services. You can use decentralized online banking services for customers with your own crypto bank. With our service, you can now digitize various traditional bank functions such as borrowing, lending and saving, taking banking activity to the next level",
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/defi-based-derivative-platform-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi-based Derivative Platform Development",
    decs: "We can also support you in developing a DeFi-based derivative platform with the advantage of smart contract automation. By using DeFi derivatives, businesses can leverage smart contracts on blockchain networks to develop and settle contracts. Our experts stay updated with the latest market trends to identify the best elements required for the adoption of your DeFi-based derivative platform.",
  },
  {
    num: "11",
    icon: (
      <Image
        src="/img/defi-synthetic-asset-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Synthetic Asset Development",
    decs: "We can support your DeFi synthetic asset development needs with our team of experienced DeFi developers. Our DeFi synthetic asset development services help keep your customers within the crypto ecosystem. With this development, you can issue tokens which replicate the real-world asset value, for example, commodities, equities, and fiat currencies.",
  },
  {
    num: "12",
    icon: (
      <Image
        src="/img/defi-lottery-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Lottery Development",
    decs: "We can help you create a DeFi lottery dApp or a decentralized lottery system for offering an innovative gateway to DeFi for users. Bring the element of luck into the emerging world of innovative DeFi solutions with DeFi lottery systems. We provide holistic DeFi lottery development services to assist start-ups and established organizations to launch lottery platforms",
  },
  {
    num: "13",
    icon: (
      <Image
        src="/img/defi-insurance-system-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Insurance System Development",
    decs: "We serve DeFi insurance system development solutions for transforming conventional insurance organizations or securing your DeFi protocols and assets. With the backing of DeFi insurance, you can attract more users to DeFi solutions based on trust. Our service will drive your product in the investors' market, grabbing the investors' concentration.",
  },
  {
    num: "14",
    icon: (
      <Image
        src="/img/defi-business-consulting.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "DeFi Business Consulting",
    decs: "Our experienced blockchain developers, architects, and consultants can help you create and deploy your DeFi business model with comprehensive guidance. Our expert consultants have real-world experience in assisting organizations to analyze the DeFi market and help them make the necessary business decisions. Our experts with deep domain knowledge will let your business flourish.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Decentralized Finance (DeFi) Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Are you looking for reliable DeFi Development Services? Give someone the authority your DeFi development project with expert defi developers, ensuring secure and seamless blockchain DEFI development company In India & The USA. Experience top-notch expertise with us. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/defi-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content=" Decentralized Finance (DeFi) Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Are you looking for reliable DeFi Development Services? Give someone the authority your DeFi development project with expert defi developers, ensuring secure and seamless blockchain DEFI development company In Canada & The USA. Experience top-notch expertise with us. Contact us today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/defi-development-company"
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
          content="https://www.comfygen.com/images/Wallet1.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Decentralized Finance (DeFi) Development Company | Hire Top DeFi developer"
        />
        <meta
          property="og:facebook_description"
          content="If you're looking for a DeFi Development Company in India? Hire our expert defi developers for secure and efficient blockchain development solutions."
        />
        <meta
          property="og:twitter_title"
          content="Decentralized Finance DeFi Development Company | DeFi Software Development | Decentralized Finance Development"
        />
        <meta
          property="og:twitter_description"
          content="If you're looking for a Decentralized Finance DeFi Development Company | DeFi Software Development | Decentralized Finance Development in India? Hire our expert defi developers for secure and efficient blockchain development solutions."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Decentralized Finance DeFi Development Company | DeFi Software Development | Decentralized Finance Development"
        />
        <meta
          name="summary"
          content="Blockchain DeFi Development Company | Comfygen Privtate Limited: Are you Looking for a blockchain defi Development Company in India? Hire our expert blockchain defi developers for secure and efficient blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Defi Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Decentralized Finance Development Company"
          content="Comfygen is a World Class Decentralized Finance Development Agency: We Build the Future of Business, One Blockchain crypto defi wallet development services at a Time."
        />
        <meta
          name="category"
          content="DeFi Application Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Decentralized Finance DeFi Development Firm in India"
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
          content="Decentralized Finance Development Services Provider"
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
                heading="DeFi Development Company"
                ptag1="Do you want to unlock the seamless potential of DeFi development with innovative solutions? We can help you tap into the benefits of the DeFi development company In Canada & The USA with our team of experienced DeFi developers. Over the past few years, we have developed the specialization to create scalable, high-performance, and secure DeFi development services. Our broad assortment of DeFi development services follows a client-centric approach to help you achieve your business objectives. Contact us to take your business one step ahead in the DeFi revolution."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Our DeFi Development Services
                </h2>
                <p className="text-base text-slate-800">
                  Being a DeFi development company, our developers have the
                  required expertise to design and develop DeFi products for all
                  industries and help them to get a step ahead of their
                  competitors.{" "}
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
          </div>
        </section>
        <ContactFromCenter />
        <AdviceSection
          heading="We Deliver Customised DeFi Solutions for Your Business"
          ptag="Decentralized Finance has transformed the traditional perceptions about financial services. With the help of DeFi development services, you can find a new approach to financial services. As one of the emerging pioneers in DeFi development, we have consistently sought new opportunities to address clients' challenges. Our team of experts can help any organization, including established corporations and startups, for making the most of DeFi. "
          ptag1="You can rely on our reputation as a leading DeFi development company for digital transformation projects. We support our clients in replacing traditional finance systems with DeFi platforms to offer equitable access to financial services. You can use our customized DeFi solutions to welcome new customers to your business without depending on traditional banking systems. For example, our DeFi dApp development services can allow customers to buy products without a bank account linked to their wallets."
          ptag2="We are committed to delivering customized DeFi solutions that help you achieve your desired business goals. Our DeFi development team strives to enhance large enterprises, smaller financial institutions, and startups with flexibility for monetizing your assets. In addition, we also offer the advantage of building your own DeFi app tailored for translating your innovative ideas into reality."
          imgSrc="/img/we-deliver-customised-deFi-solutions-for-your-business.webp"
          imgW={600}
          imgH={600}
          altTag="We Deliver Customised DeFi Solutions for Your Business"
        />
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />
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
                How Do We Deliver{" "}
                <span className="text-blue-600">Our DeFi Development</span>{" "}
                Services?
              </h2>
              <p className="text-base text-slate-800">
                At Comfygen, we believe in following a user-centric approach for
                all our DeFi development projects. Our DeFi and blockchain
                experts have designed an effective workflow that helps us cater
                to your requirements with an unwavering focus on your business
                objectives.{" "}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {JSON_DATA.LaunchSteps.map((elem) => {
                const { title, num, desc } = elem;
                return (
                  <div className="group border p-6 space-y-4 transition-all duration-20 rounded-[40px]">
                    <div className="flex items-center justify-start">
                      <div className="w-24 h-24  flex justify-center items-center">
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
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/what-are-the-real-world-uses-of-defi-for-your-business.webp"
                alt="Real World Assets for DeFi Development"
                className="rounded-lg"
                width={800}
                height={700}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Real World Assets for DEFI
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Our DeFi development approach has the capability to create RWA
                  (Real World Assets) within crypto, where the tangible assets
                  of the physical world will be tokenized. Upon availing our
                  dedicated services for DeFi Real World Assets, you are open to
                  explore a plethora of benefits:
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
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Find a Faster Way to Enter the Market with Whitelabel Solutions
              </h2>
              <p className="text-base text-slate-800">
                Utilize our white label solutions for faster time to market in
                the domain of DeFi and achieve your business goals.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
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
        <AdviceSection
          heading="DeFi Trading:"
          ptag="DeFi trading is a sophisticated concept that is being implemented at a high scale, and budding entrepreneurs are keen on launching dedicated platforms for it. At Comfygen, we help create the best DeFi trading platforms where individual traders will have complete control over their cryptographic keys, enabling proper custody of their crypto assets."
          ptag1="We will create dedicated smart contracts in order to encourage the execution of DeFi model while processing financial transactions associated with DeFi trading. "
          imgSrc="/img/defi-trading.webp"
          imgW={552}
          imgH={544}
          altTag="DeFi Trading"
        />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Should You Choose Comfygen for DeFi Development?
              </h2>
              <p className="text-base text-slate-800">
                We are a trusted DeFi development company with a team of experts
                who specialize in blockchain technology and DeFi concepts. Our
                DeFi development services offer various value advantages that
                differentiate us from the competition.{" "}
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
              backgroundImage: `url("/img/hire-a-defi-developer.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <FaqSection faqData={JSON_DATA.Frequently} title=" DeFi Development" />
        <TalkExpert />
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
