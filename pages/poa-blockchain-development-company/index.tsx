import Image from "next/image";
import React from "react";
import Head from "next/head";
import { BsDot, BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./poa.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import BlueButton from "../components/button/BlueButton";
import ContactUsButton from "../components/ContactUsButton";
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
const FaqPoa = dynamic(() => import("./components/FaqPoa"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    url: "/ethereum-token-development",
    icon: (
      <Image
        src="/img/forking-ethereum-blockchain-development-services.webp"
        alt="Forking Ethereum Blockchain"
        width={60}
        height={60}
      />
    ),
    title: "Forking Ethereum Blockchain Development Services",
    decs: (
      <p>
        Comfygen provides you with the flexibility of forking the Ethereum
        blockchain development services with the use of PoA blockchain
        development services as the consensus algorithm. We will be copying the
        current state of the Ethereum blockchain blockchain development services
        and preparing a duplicate version of it for making necessary changes in
        the next stages.
      </p>
    ),
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/branding-explorer-icon.webp"
        alt="Branding Explorer"
        width={60}
        height={60}
      />
    ),
    title: "Branding Explorer",
    decs: "We provide you with a branding or blockchain development services explorer for allowing the users to visualize, extract, or review the various metrics or blockchain development networks, consisting of information associated with transaction history, cryptocurrency development transactions, transaction fees, and crypto wallet balances. We implement the customizable and white-label blockchain explorer. ",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/network-status-monitoring.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Network Status Monitoring",
    decs: "We provide you with network status monitoring blockchain app development services with the use of branding explorer, which will listen to various events and then provide certain visualization of various transactions that are processed, queued, or received. Later, these transactions are grouped in the face of a new block. ",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/brand-block-explorer-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Brand Block Explorer ",
    decs: (
      <p>
        We will integrate a brand block explorer into your PoA blockchain
        development project, which is an online tool that would enable you to
        search the real-time or past information associated with a{" "}
        <span className="font-bold">blockchain app development agency</span> .
        For instance, you can search for data that relates to blocks, addresses,
        transactions, and others.{" "}
      </p>
    ),
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/blockchain-documentation-services.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain Documentation Services",
    decs: (
      <p>
        We provide impeccable documentation or record-keeping services alongside
        our <span className="font-bold">Proof of Authority </span> blockchain
        development agency. As this technology tends to create a tamper-proof
        transaction ledger, we ensure that the process documentation is recorded
        and stored securely. Clarity and precision are ensured to maintain the
        information integrity and eliminate the risk of unauthorized errors.
      </p>
    ),
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/blockchain-&-faucet-app-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Testnet Blockchain & Faucet App Development",
    decs: "We will be creating an identical copy of the blockchain development services solution and will then be testing out various new features or products before they can be implemented into the main blockchain app development. Following that, we can also create faucet apps, which would reward specific users with small crypto amounts as rewards for completing specific tasks. ",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/metamask-integration-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Metamask Integration",
    decs: (
      <p>
        Our{" "}
        <span className="font-bold">PoA blockchain development service</span> is
        made compatible with that of Metamask, with just the effort of changing
        the network. Metamask is a popular{" "}
        <a href="/crypto-wallet-development" className="text-blue-500">
          cryptocurrency wallet{" "}
        </a>{" "}
        that is used for interacting with the Ethereum blockchain development
        services. We enable features onto our blockchain development services
        solution, which would enable you to configure the Metamask wallet with
        just a single click.{" "}
      </p>
    ),
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/ethereum-dApps-and-contracts.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Integration with Ethereum dApps and Contracts",
    decs: (
      <p>
        Comfygen implements its PoA blockchain development solutions to create
        apps that will be compatible with all the{" "}
        <a href="/dapp-development-company" className="text-blue-500">
          dApps blockchain development services
        </a>{" "}
        or{" "}
        <span className="font-bold">
          smart contracts blockchain development services
        </span>{" "}
        that are built over dApps blockchain development services.
      </p>
    ),
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/blockchain-aPI-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain API Development",
    decs: (
      <p>
        If you seek <span className="font-bold">PoA blockchain features</span>{" "}
        in your dedicated applications, we implement powerful APIs that can be
        used in diverse ways. Thus, our team will be helping you create
        blockchain development APIs for developing dApps blockchain development
        services, storing data securely, powering{" "}
        <a
          href="/blog/real-world-asset-tokenization-on-blockchain-development/"
          className="text-blue-500"
        >
          crypto real world assets tokenization
        </a>{" "}
        , or developing{" "}
        <a href="/defi-development-company" className="text-blue-500">
          Decentralized Finance blockchain development services
        </a>{" "}
        .{" "}
      </p>
    ),
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/virtual-node-Development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Virtual Node Development",
    decs: (
      <p>
        We can help you build around 5 virtual nodes for the dedicated status
        monitoring page to support the marketing boost requirements you have for
        your{" "}
        <span className="font-bold">
          Proof of Authority blockchain development services, solutions{" "}
        </span>{" "}
        Our node integration will distribute data across different nodes
        following a finer granularity with the use of single-token architecture.
        .{" "}
      </p>
    ),
  },
  {
    num: "11",
    icon: (
      <Image
        src="/img/encouraging-interoperability-icon.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Encouraging Interoperability",
    decs: (
      <p>
        {" "}
        <span className="font-bold">
          We bring in all the technologies such as{" "}
          <a href="/game-development-company" className="text-blue-500">
            Game blockchain development services
          </a>{" "}
          , Web3 blockchain development services, smart contracts blockchain
          development services,{" "}
          <a href="/metaverse-development" className="text-blue-500">
            Metaverse blockchain development services
          </a>{" "}
          , dApps blockchain development services, and other such toolsets to
          ensure interoperability of them with that of Ethereum blockchain
          development services
        </span>{" "}
        and other such EVM chains.
      </p>
    ),
  },
];

const Ser = [
  {
    num: "01",
    img: "/img/smart-contract-solutions-icon.webp",
    title: (
      <p>
        <a href="/smart-contract-development">Smart Contract Solutions</a>{" "}
      </p>
    ),
    decs: (
      <p>
        We implement our PoA blockchain development approach to help you
        automate most of the complex tasks within your business operations and
        speed them up by using airtight smart contracts blockchain development
        services built over the blockchain development services. And we make it
        possible with our{" "}
        <span className="font-bold">PoA blockchain development solution</span> .{" "}
      </p>
    ),
  },
  {
    num: "02",
    img: "/img/high-scalability-icon.webp",
    title: "High Scalability",
    decs: (
      <p>
        Most of the public blockchains have failed to be used in enterprise{" "}
        <a className="text-blue-500" href="/mobile-app-development">
          mobile application development services
        </a>{" "}
        , usually because they lack the scalability aspects in them. Therefore,
        we bring to you the PoA blockchain development solutions that are widely
        popular for their high-end scalability, which would provide operational
        efficiency for your business.{" "}
      </p>
    ),
  },
  {
    num: "03",
    img: "/img/multilateral-ledger-icon.webp",
    title: "Multilateral Ledger",
    decs: (
      <p>
        With our{" "}
        <span className="font-bold">
          readymade Proof of Authority blockchain development{" "}
        </span>{" "}
        solution, you can expect to enable the participants of the network to
        maintain copies of all the associated transactions that they check or
        inspect. Thus, the participants no longer have to be only the observer
        of the transactions but can also store them to better analyze them over
        time.
      </p>
    ),
  },
  {
    num: "04",
    img: "/img/enterprise-support-icon.webp",
    title: "Enterprise Support",
    decs: (
      <p>
        At Comfygen, we bring in the highest form of privacy, scalability, and
        security with the PoA blockchain development services to complement the
        efficacies of{" "}
        <span className="font-bold">
          enterprise mobile applications development agency
        </span>{" "}
        Under this development service, we deliver quality enterprise support to
        boost functionality and operational approaches with customizable
        solutions.
      </p>
    ),
  },
  {
    num: "05",
    img: "/img/point-to-point-architecture-icon.webp",
    title: "Point-to-Point Architecture",
    decs: "Enabling point-to-point architecture is a winning move for business owners with their PoA blockchain development project, as this indicates that only the participants of the network will be able to access the transactions that take place. And Comfygen tends to help you implement the same on priority. ",
  },
  {
    num: "06",
    img: "/img/pluggable-consensus-icon.webp",
    title: "Pluggable Consensus",
    decs: (
      <p>
        The{" "}
        <span className="font-bold">
          custom PoA blockchain development solution
        </span>{" "}
        offered by our experts will allow you to implement pluggable consensus.
        It means you will be able to make necessary changes to the blockchain
        development platform without experiencing much downtime. Thus, it would
        keep your business up and running at all times.
      </p>
    ),
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  let { LatestTechno, WhyChoose, Major } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          POA Blockchain Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen provide Readymade or custumzation POA Blockchain Development services In India & The USA. Contact us today for Hire expert POA blockchain developers.!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poa-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="POA Blockchain Development Company | Hire expert POA blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in POA development and POA blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="POA development company | POA blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished POA blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable POA development expertise, positioning us as a notable POA blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company | Hire expert POA blockchain developers"
        />
        <meta
          name="summary"
          content="POA Blockchain Development Company | Readymade POA Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert POA blockchain developers in India? Hire expert POA blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a POA Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="POA Blockchain Development Company"
          content="Comfygen is a World Class POA Blockchain Development Industry: We Build the Future of Business, One POA Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="POA Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="POA Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
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
                heading="POA Blockchain Development Company "
                ptag1="What Advantages Does Blockchain Technology Have to Offer?"
                ptag2="Blockchain Development Technology is the revolution that introduces security, transparency, traceability, and trust for the data that is being shared across diverse business networks. Following that, its purpose of execution is to introduce cost savings with enhanced efficiencies. The blockchain development company attributes being implemented for businesses make use of an immutable and shared ledger, which can only be accessed by the validated or approved members with the given permission. Upon leveraging the decentralized concept of blockchain development technology, you can avail traceability and end-to-end visibility. At Comfygen, we have been bringing in a quality approach for blockchain development services, solutions to ensure the utmost security for the business transactions you make. We can help you develop games, NFT game development, DeFi development services, solutions, and much more to make them compatible with smart contracts blockchain development, metaverse blockchain development, and other latest technology development solutions."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <section className="md:py-20 bg-white">
          <div className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                What Advantages Does Blockchain Technology Have to Offer?
              </h2>
              <div className="space-y-2">
                <p>
                  Blockchain Development Technology is the revolution that
                  introduces security, transparency, traceability, and trust for
                  the data that is being shared across diverse business
                  networks. Following that, its purpose of execution is to
                  introduce cost savings with enhanced efficiencies.{" "}
                </p>
                <p>
                  The blockchain development company attributes being
                  implemented for businesses make use of an immutable and shared
                  ledger, which can only be accessed by the validated or
                  approved members with the given permission. Upon leveraging
                  the decentralized concept of blockchain development
                  technology, you can avail traceability and end-to-end
                  visibility.
                </p>
                <p>
                  At Comfygen, we have been bringing in a quality approach for{" "}
                  <a
                    href="/blockchain-development"
                    className="text-blue-500 font-semibold"
                  >
                    blockchain development services
                  </a>{" "}
                  , solutions to ensure the utmost security for the business
                  transactions you make. We can help you develop games, NFT game
                  development, DeFi development services, solutions, and much
                  more to make them compatible with smart contracts blockchain
                  development, metaverse blockchain development, and other
                  latest technology development solutions.
                </p>
                <div className="pt-4">
                  <BlueButton title={"LET'S TALK"} url={"/contact-us"} />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/what-advantages-does-blockchain-technology-have-to-offer.webp"
                alt="Why is PoA Considered the Digital Revolution in the Blockchain Sector?"
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>

        <AdviceSection
          heading="What is the Significance of POA Blockchain Development? "
          ptag="Proof of Authority, or PoA Blockchain development, is a popular algorithm or consensus mechanism that is used with blockchains for delivering faster transactions."
          ptag1="Proof of Authority, or PoA Blockchain development, is a popular algorithm or consensus mechanism that is used with blockchains for delivering faster transactions."
          ptag2="The utilization of PoA in blockchain development services, solutions doesn’t depend solely on the nodes for solving complex mathematical problems. Instead, it uses a diverse set of authorities, with explicit permission, to create new blocks and then secure the linked blockchain development services."
          imgSrc="/img/what-is-the-Significance-of-poa-blockchain-development.webp"
          imgW={550}
          imgH={500}
          altTag="What is the Significance of POA Blockchain?"
        />

        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Why is PoA Considered the Digital Revolution in the Blockchain
                Development Sector?
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  PoA Blockchain development makes use of pre-approved
                  validators with access to specific blockchain development
                  software for organizing various transactions into specific
                  blocks.{" "}
                </p>
                <p className="text-base text-black text-justify">
                  The introduction to PoA blockchain development is the ideology
                  to meet business needs using blockchain app development
                  services, solutions and with the ability to handle
                  confidential data without any security hassle.
                </p>
                <p className="text-base text-black text-justify">
                  Comfygen, being the best{" "}
                  <a
                    href="/poa-blockchain-development-company"
                    className="text-blue-600"
                  >
                    Proof of Authority blockchain development company
                  </a>{" "}
                  , provides you with quality solutions with all features and
                  functionalities guaranteed.
                </p>
                <div className="pt-4">
                  <BlueButton title={"Let’s Discuss"} url={"/contact-us"} />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/Why-is-PoA-Considered-the-Digital-Revolution-in-the-Blockchain-Development-Sector.webp"
                alt="Why is PoA Considered the Digital Revolution in the Blockchain Sector?"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </section>
        </div>

        <ContactFromCenter />

        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]">
                  Explore Our PoA Blockchain Development Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num, url } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      url={url}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
              <div className="flex justify-center">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"NEED ASSISTANCE WITH YOUR PROJECT"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-[#0F192E]">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              {Major.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-2"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-white">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Ser.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-8 rounded-lg border-2 border-dashed border-[#fff] space-y-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center bg-white p-2 rounded-lg">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {title}
                      </h3>
                    </div>
                    <div>
                      <p className="text-white">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <ConnectWithExpertButton
                url={"/contact-us"}
                title={"Get A Free Consultation"}
              />
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-[#E9F1FE]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Here’s Our Array of Some Special Offers for You to Count On!
              </h2>
              <p className="text-base text-slate-800">
                Comfygen has curated certain offers for you to attain the
                flexibility of adapting your specific requirements associated
                with PoA blockchain development services.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 grid-cols-1">
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

        <section className="lg:py-16 py-4 bg-[#E9F1FE]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Hire Comfygen for PoA Blockchain Development?
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {WhyChoose.map((ludo) => {
                return (
                  <div
                    key={ludo.num}
                    className="border border-[#0E1F51] p-4 rounded space-y-2 shadow"
                  >
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
              title={"Want To Get The Best Solution?</br>Connect Us"}
            />
          </div>
        </section>

        <FaqPoa />
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
