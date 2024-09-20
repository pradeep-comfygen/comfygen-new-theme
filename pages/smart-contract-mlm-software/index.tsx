import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/smartcontractmlm.json";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Arena = [
  {
    num: "1",
    url: "/tron-token-development",
    icon: (
      <Image
        src="/img/tron-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "It is ready to launch TRON MLM Software to deliver decentralized solutions into the MLM Business through TRON Blockchain network. The users can connect in matrix schemes to receive TRX tokens for passive income via referring TRON Network to people.",
    title: "Tron Smart Contract MLM Software",
  },
  {
    num: "2",
    url: "/ethereum-token-development",
    icon: (
      <Image
        src="/img/ethereum-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "Ethereum Smart Contract Based MLM Software is a ready to launch software with MLM business script developed on Ethereum Blockchain Network. With the Ethereum MLM Software, you can initiate with your own new 60% decentralized solutions and other MLM business platforms; such as LionShare, Doubleway, Million Money, Forsage, Etrix, XOXO Network, etc.",
    title: "Ethereum Smart Contract MLM Software",
  },
  {
    num: "3",
    url: "/cryptocurrency-mlm-software-development",
    icon: (
      <Image
        src="/img/cryptocurrency-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "We develop super-efficient cryptocurrency MLM Software with all the testing and maintenance handled appropriately, which enables the client’s business to stand at the best in cryptocurrency multi-level marketing zone. Get the best white-label MLM cryptocurrency solutions with our expertised support to gain high-level business profits",
    title: "Cryptocurrency Smart Contract MLM Software",
  },
  {
    num: "4",
    url: "/blockchain-development",
    icon: (
      <Image
        src="/img/blockchain-smart-contract-mlm-software.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    decs: "We build result-oriented white label blockchain smart contract MLM software, which is considered completely transparent decentralized solutions. It is completely secured and immutable smart contract based solutions. Moreover, our Ethereum and TRON smart contract MLM Software enable the businesses for hassle-free calculations and automated transactions.",
    title: "Blockchain Smart Contract MLM Software",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    WhyChoose,
    Hire,
    myList,
    myList3,
    Frequently,
    Whitelabel,
    SmartContractFeatures,
    SmartProcess,
    TecnologisStack,
  } = JSON_DATA;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>
          Smart Contract MLM Software Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen is a smart contract-based MLM development company In India & The USA, offering best-in-class smart contract MLM software and custom MLM platforms with integrated solutions. Get Today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/smart-contract-mlm-software"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Smart Contract MLM Software Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a smart contract-based MLM development company In India & The USA, offering best-in-class smart contract MLM software and custom MLM platforms with integrated solutions. Get Today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/smart-contract-mlm-softwaret"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>

      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Smart Contract MLM Software Development Company"
                ptag="Connect with us, and we will help you to build efficient Smart Contracts MLM Software on various Blockchain networks Ethereum, TRON, EOS, etc."
                ptag1="Looking for the top-tier Smart Contract MLM Software Development Company In India & The USA? We Comfygen take the responsibility to assist you with new BTC & ETH technologies, cutting-edge decentralized solutions, and agile development services in the Multi-Level Marketing Software. Our proficient blockchain developers will integrate latest techs for easier tracking, avoiding malpractices, secured transactions, and assured data safety in your business."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <Advice
          heading=" Smart Contract Based MLM Software"
          ptag="Launch your custom-based smart contract MLM software with Comfygen to structure your business gaining credibility in the blockchain development industry. Call it as Smart Contract Based MLMs or Decentralized Cryptocurrency MLMs; we drive our clientele businesses by blockchain smart contracts (Ethereum, TRON, EOS.) We will use smart contact software into MLM businesses empowering trust among the users, eliminate the centralized authority, and lower the transactional risks. Get ready to explore more, secure more, and boost financial operations with improved decentralized solutions automating ETH & TRX transactions. Comfygen is happy to serve immutability and transparency between the business operations and users to boost retention of users."
          imgSrc="/img/smart-contract-based-mlm-software.webp"
          imgW={564}
          imgH={559}
          altTag="Smart Contract Based MLM Software"
        />
        <ContactFromCenter />
        <section className="py-10">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 lg:text-4xl text-3xl font-bold leading-[3rem] text-[#0E1F51]">
                  Build{" "}
                  <span className="text-blue-600">
                    Smart Contract Based MLM Software{" "}
                  </span>{" "}
                  on Different Blockchain Network
                </h2>
                <p className="text-base text-slate-800 ">
                  Smart Contract Based MLM Software is an excellent
                  decentralized solution, which is an instant multi-level
                  marketing strategy empowered by Blockchain Smart Contracts
                  built on various blockchain networks; such as Ethereum, TRON,
                  EOS, and more. Mostly, Ethereum Smart Contract Based MLM
                  Business is widely known, but now TRON Smart Contract MLM
                  Software is also getting into use oftenly.{" "}
                </p>
                <p className="text-base text-slate-800 ">
                  Here are multiple blockchain network to integrate with Smart
                  Contract MLM Software:{" "}
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num, url } = elem;
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
            </div>
          </div>
        </section>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Features of Smart Contract MLM Software
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {SmartContractFeatures.map((elem) => {
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

        <div className="py-10">
          <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row space-y-10  lg:flex lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left  lg:p-6 rounded-3xl">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                Benefits of Smart Contract in MLM Software
              </h2>
              <p className="text-base text-left text-black/80">
                Avail the possible leverages of Smart Contract Based MLM
                Software for businesses. So here are the benefits our clientele
                base can fetch from our expertised team.
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
            <div className="flex justify-center w-full lg:justify-end lg:pb-0 pb-6">
              <Image
                src="/img/benefits-of-smart-contract-in-mlm-software.webp"
                alt="Best Casino Game Developers"
                className="rounded-lg"
                height={453}
                width={600}
              />
            </div>
          </section>
        </div>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center lg:w-4/6 mx-auto text-center space-y-4 ">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Smart{" "}
                <span className="text-blue-600">
                  Contract Based MLM Development
                </span>{" "}
                Services
              </h2>
            </div>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              {Whitelabel.map((elem) => {
                const { title, num, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex justify-start items-center rounded-full space-x-3 py-3 px-3"
                      style={{ backgroundColor: `${bg}` }}
                    >
                      <div className="flex items-center justify-center font-semibold bg-white rounded-full shadow-xl h-14 w-14">
                        <p className="text-xl text-right ">{num}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Advice
          heading="White Label Smart Contract MLM Software"
          ptag="We provide the best standards white label smart contract MLM software with customizable solutions based on clientele business needs. It is the time when you need to change the designs, and rebrand your business updated with next-generation technologies. We integrate some super-efficient blockchain technology, which enables the smart contract based cryptocurrency MLM software to set up a streamlined foundation in the business."
          ptag1="Comfygen helps our clients to make their business run seamlessly with transparency. The software users can access and track every transaction of business. When our expertized technology builds transparency into the operations; this automatically builds up the user's trust and gains credibility for your business. Be ready to implement white label smart contract MLM software development solutions into your smart contract MLM software for more reach and profits."
          imgSrc="/img/white-label-smart-contract-mlm-software.webp"
          imgW={564}
          imgH={559}
          altTag="White Label Smart Contract MLM Software"
        />

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Latest Tech-Trends Included in{" "}
              <span className="text-blue-500">Smart Contract based MLM </span>{" "}
              Software
            </h2>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-2  xl:gap-10">
            {TecnologisStack.map((elem) => {
              const { title, stack, stack1, stack2, stack3, num } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p>{stack} </p>
                    <p>{stack1} </p>
                    <p>{stack2} </p>
                    <p>{stack3} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Smart Contract Based MLM Software Development Process
              </h2>
              <p className="text-base text-slate-800 text-center">
                Do you want to get one dedicated custom smart contract MLM
                software development takes place for your business. Know its
                development process
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {SmartProcess.map((smartcontractmlm) => {
                return (
                  <div
                    key={smartcontractmlm.num}
                    className="border p-3 space-y-2 shadow transition-all hover:scale-105 duration-700 hover:bg-sky-100"
                  >
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {smartcontractmlm.title}
                    </h3>
                    <p className="text-base text-slate-800">
                      {smartcontractmlm.decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col space-y-2">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Choose Comfygen for{" "}
                  <span className="text-blue-500">
                    Smart Contract MLM Software{" "}
                  </span>{" "}
                  Development?
                </h2>
                <p className="text-base text-slate-800">
                  Definitely you need the reasons to trust on our Smart Contract
                  Based MLM Software Development Company. We have some reasons
                  to prove our worth in market;
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {WhyChoose.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          <Image
                            src={img}
                            alt={title}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold ">{title}</h3>
                        <p className="break-all text-slate-800 ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-blockchain-developers-to-develop-agile-smart-contract-mlm-software.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-emerald-500/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={Frequently}
          title="Smart Contract Based MLM Software"
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
