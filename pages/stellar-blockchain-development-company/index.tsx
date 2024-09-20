import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/stellar.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

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
const FaqStellar = dynamic(() => import("./components/FaqStellar"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/stellar-consulting-services.webp"
        alt="Stellar Consulting Services"
        width={60}
        height={60}
      />
    ),
    title: "Stellar Consulting Services",
    url:"blockchain-consulting-services",
    decs: "We provide you with expert consultation services to help you determine your requirements associated with Stellar blockchain development. We offer a data-driven and success-centric strategy to our clients and help them with a blueprint of approach for their dedicated Stellar blockchain project.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/stellar-dapp-development.webp"
        alt="Stellar dApp Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar dApp Development",
    decs: "By using the Horizon, SDKs, and API server of Stellar, we have the proficiency to help you develop secure and robust dApps that integrate with the diverse financial tools of your business. This will help you handle the financial aspects of your system in a more feasible manner.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/stellar-token-development.webp"
        alt="Stellar Token Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar Token Development",
    decs: "We bring to you simplified yet sophisticated Stellar blockchain development solutions for creating tokens that can be made suitable for diverse use cases, including ICOs and STOs. For instance, you can make custom tokens using Stellar blockchain development solutions for almost all assets, digital currency or fiat currency.",
  },
  {
    num: "04",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/stellar-smart-contract-development.webp"
        alt="Stellar Smart Contract Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar Smart Contract Development",
    decs: "Our team of professionals, experienced with Stellar blockchain development proficiency, offer you secured and sophisticated smart contracts over private or public blockchains with the use of the Soroban platform. We focus on this composition of executed and connected transactions through various constraints.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/stellar-wallet-development.webp"
        alt="Stellar Wallet Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar Wallet Development",
    decs: "Storing digital currency can now be made easier as we are extending our Stellar blockchain development services to provide you with dedicated wallet applications. Stellar Wallet Development will let users send and receive borderless transactions across the globe at any scale.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/stellar-maintenance-and-upgrades.webp"
        alt="Stellar Maintenance and Upgrades"
        width={60}
        height={60}
      />
    ),
    title: "Stellar Maintenance and Upgrades",
    decs: "We take optimal care of providing your Stellar blockchain apps with the highest form of maintenance and dedicated support services to keep the app upgraded without any downtime. Our experts keep an eye on the latest trends and improvements to implement necessary changes. ",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/stellar-deFi-development.webp"
        alt="Stellar DeFi Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar DeFi Development",
    decs: "Our team will provide you with the Stellar blockchain development solutions for making DeFi apps, such as lending platforms, NFTs, exchanges, payment solutions, or others. We have successfully developed several DeFi applications with successful results since our business establishment.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/stellar-ico-sto-development.webp"
        alt="Stellar ICO/STO Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar ICO/STO Development",
    decs: "We have the capacity to fulfill all the complex requirements that you have linked to the ICO or STO development over the Stellar blockchain. As Stellar blockchain development solutions are considered faster, cheaper, and more scalable, it is quite popular to be used for ICOs or STOs.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/stellar-p2p-lending-app-development.webp"
        alt="Stellar P2P Lending App Development"
        width={60}
        height={60}
      />
    ),
    title: "Stellar P2P Lending App Development",
    decs: "Comfygen provides you with the proficiency to develop peer-to-peer lending applications over the Stellar platform, which will enable the users to either lend or borrow money without depending upon any usual financial institution for tracking the transactions. aiding in direct communication.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    LaunchSteps,
    Hire,
    myList,
    LatestTechno,
    WhyChoose,
    myList3,
    Major,
    Service,
    TecnologisStack,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Stellar Blockchain Development Company | Stellar Development Services
        </title>
        <meta
          name="description"
          content="Comfygen is Leading Stellar Blockchain Development Company in India and the USA. Hire our best Stellar blockchain developers who are well-versed in the modularity of the Stellar SDK framework, and build secure, robust, and future-ready Decentralized App Development (dApps) and Blockchain Development. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/stellar-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Stellar Development Services | HIRE Stellar DEVELOPERS | Stellar blockchain framework | Stellar Blockchain Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose Stellar blockchain development company to establish a customized and self-sustaining Stellar SDK framework. We stand as a prominent Stellar blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Stellar Development Services | HIRE Stellar DEVELOPERS | Stellar blockchain framework | Stellar Blockchain Technology | Stellar Blockchain development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our Stellar developers who are well-versed to establish a customized and self-sustaining Stellar SDK framework. We stand as a prominent Stellar blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Stellar Blockchain Development Industry | Stellar Development Services"
        />
        <meta
          name="summary"
          content="Choose Stellar blockchain development to establish a customized and self-sustaining Stellar SDK framework. We stand as a prominent Stellar Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Stellar Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Stellar Development Company in India, USA"
          content="Comfygen is a leading White label Stellar Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Stellar Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Stellar Blockchain Development Firm in India"
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
          content="Stellar Blockchain Development Services Provider"
        />

        <meta
          property="og:url"
          content="https://www.comfygen.com/stellar-blockchain-development-company"
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
                heading="Stellar Blockchain Development Company in India"
                ptag="We are helping clients adopt the efficacies of Stellar blockchain and scale their capacities in terms of security, privacy, operational efficiency, and scalability. "
                ptag1="Comfygen, being the best Stellar blockchain development company, offers you the utmost expertise in carrying out development projects. With us at your back, you will be able to build dedicated DeFi solutions. Stellar blockchain is considered a decentralized concept that facilitates the transaction and creation of money in its digital representations. Comfygen helps you create a secured financial workflow and create dedicated FinTech apps alongside custom payment applications."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Prepare for the Future with Stellar Blockchain Development"
          ptag="You can trust Comfygen to offer you unparalleled development services for meeting your specific Stellar blockchain needs. We offer the best Stellar blockchain development solutions that are packed with impeccable features or futuristic DeFi apps to support the trading of diverse digital assets and transactions beyond geographical limitations. We make use of our Stellar blockchain development expertise to create DeFi solutions for not just established enterprises but also for startups."
          ptag1="Whether you are in search of complex payment systems or want to develop dedicated smart contracts, the use of Stellar blockchain development solutions by Comfygen can be your winning move. "
          imgSrc="/img/prepare-for-the-future-with-stellar-blockchain-development.webp"
          imgW={550}
          imgH={500}
          altTag="Prepare for the Future with Stellar Blockchain Development"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Our Stellar Blockchain Development Services
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
            <Link href="/contact-us" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Contact Now
              </span>
            </Link>
          </div>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full flex flex-col justify-center items-center text-center space-y-4">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                {Major?.title}
              </h2>
              <p className="text-base text-slate-800">{Major?.decs}</p>
            </div>
            <div className="grid  gap-10  md:grid-cols-2 grid-cols-1">
              {Service.map((elem: any) => {
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
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col text-center justify-center items-center space-y-2">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                What Are The Reasons to{" "}
                <span className="text-blue-600">
                  Choose Stellar Blockchain{" "}
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
              Our{" "}
              <span className="text-blue-500">
                Stellar Blockchain Development{" "}
              </span>{" "}
              Process{" "}
            </h2>
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
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/empowering-multiple-industries-with-the-potential-of-stellar.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={700}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Empowering Multiple Industries with the Potential of Stellar
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Comfygen has been providing impeccable service proficiency
                  with respect to Stellar blockchain development solutions
                  across diverse industries. We have dedicated experts who are
                  trained and skilled to handle the diverse needs associated
                  with Stellar blockchain for clients from different industry
                  domains. In this way, we ensure flawless Stellar blockchain
                  development solutions, irrespective of whether the project is
                  simple or complex.
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
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Flexible Engagement Models of Your Choice
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
                Why Choose Comfygen for Stellar Blockchain Development?
              </h2>
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
              backgroundImage: `url("/img/hire-professional-expert-in-stellar-blokchain-development.webp")`,
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
                  src="/img/do-you-want-to-learn-more-about-us.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Do You Want to Learn More About Us?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#27A0F9] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Do You Want to Learn More About Us?
                  </h2>
                  <p className="">
                    In case you have any other queries related to our Stellar
                    blockchain development services or technology utilization,
                    you can connect with our team of experts right away. We will
                    help you understand the potential of Stellar and how it can
                    help your business grow. Once you have gained insight into
                    how the Stellar blockchain development solution will turn
                    out to be productive for your business, we can then discuss
                    moving forward with your specific project.
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
        <FaqStellar />
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
