import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nfttoken.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { SiNike } from "react-icons/si";
import { BsFillStarFill } from "react-icons/bs";
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
const FaqNftToken = dynamic(() => import("./components/FaqNftToken"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/nft-token-development.webp"
        alt="NFT Token Development"
        width={60}
        height={60}
      />
    ),
    title: "NFT Token Development",
    decs: "Here you have prominent NFT Token Development Services where you can create customized NFT Tokens, and be part of the non-fungible token marketplace development company. It allows the users to mint their tokens at the NFT development platform for real world assest and virtual world assets. ",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/nft-marketplace-building.webp"
        alt="NFT Marketplace Building"
        width={60}
        height={60}
      />
    ),
    title: "NFT Marketplace Building",
    decs: "We are the top-notch NFT Token Development Company helping you to create your own NFT marketplace development services with all necessary features and functionalities ensuring that users will take appropriate leverages of minting including NFT Token Development Agency.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/nft-smart-contract-audits.webp"
        alt="NFT Smart Contract Audits"
        width={60}
        height={60}
      />
    ),
    title: "NFT Smart Contract Audits",
    decs: "Our NFT Development Services include the auditing that continuously leads to maintain and support the NFT Marketplace in the non-fungible token market development ensures for its primal functionalities. It keeps ensuring the monitoring, so that NFT Tokens and NFT Marketplaces run appropriately.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/nft-marketplace-support.webp"
        alt="NFT Marketplace Support"
        width={60}
        height={60}
      />
    ),
    title: "NFT Marketplace Support",
    decs: "The non-fungible token development company provides for NFT Marketplace support services, and specialize in building enterprise-level decentralized development solutions from its designing to its agile development processing that enables the clients to market with extended time and maximize their ROI.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/nft-consulting-services.webp"
        alt="NFT Consulting Services"
        width={60}
        height={60}
      />
    ),
    title: "NFT Consulting Services",
    decs: "NFT consulting services provider expert guidance and assistance for businesses and individuals dealing with non-fungible tokens (NFTs). Blockchain Consultants possess extensive knowledge of blockchain technology, NFT marketplace development, and legal regulations. They can help clients with NFT strategy, creation, marketing, sales, and portfolio management.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/tokenization-of-assets.webp"
        alt="Tokenization of Assets"
        width={60}
        height={60}
      />
    ),
    title: "Tokenization of Assets",
    decs: "  Our experts can help you to convert tangible assets into digital tokens through real world asset tokenization. This innovative approach enables secure ownership, trading, and tracking on a blockchain development network opening up opportunities for real world asset management, fractionalized ownership, and increased liquidity. We offer guidance on legal aspects, NFT smart contract development, and token integration into marketplaces.",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/crypto-collectibles.webp"
        alt="Crypto Collectibles"
        width={60}
        height={60}
      />
    ),
    title: "Crypto Collectibles",
    decs: "The team of skilled developers can help bring your unique crypto collectibles to life. From digital artwork to music tracks and in-game items, we'll work with you to create high-quality digital assets and ensure secure ownership and transfer through smart contracts. The world of crypto-collectibles offers exciting opportunities for creators and collectors to monetize and engage.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/identity-management.webp"
        alt="Identity Management"
        width={60}
        height={60}
      />
    ),
    title: "Identity Management",
    decs: "Specialists are skilled in creating blockchain-based identity development solutions that enable individuals and entities to have complete control over their data and maintain autonomy over their digital identities. We can assist you in establishing a reliable and secure identity management system that meets your unique needs in the decentralized world.",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/peer2peer-exchange.webp"
        alt="Peer2Peer Exchange"
        width={60}
        height={60}
      />
    ),
    title: "Peer2Peer Exchange ",
    decs: "Our team specializes in creating P2P exchanges that revolutionize NFT trading. By removing intermediaries, users can directly exchange their real world assets, making the process seamless and empowering. We take care of the technical aspects, guaranteeing a secure and efficient trading experience for your community or the wider market.",
  },
  {
    num: "10",
    icon: (
      <Image
        src="/img/nft-maintenance-and-support.webp"
        alt="NFT Maintenance & Support"
        width={60}
        height={60}
      />
    ),
    title: "NFT Maintenance & Support",
    decs: "NFT Maintenance and support services guarantee the durability and safety of your NFT assets, preserving their worth and availability. We offer a wide range of NFT token development services, such as NFT smart contract development upgrades, vulnerability evaluation, and continuous technical support, to ensure the prosperity of your NFTs in the constantly changing digital world.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          NFT Token Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top NFT Token development company In India & The USA. We deliver comprehensive Smart NFT Token Development Services tailored to startups, enterprises, and businesses, ensuring cutting-edge solutions across the board."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-token-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Token Development Company | Create NFT Token | NFT Development services | NFT Software Development | Non Fungible Token Development"
        />
        <meta
          property="og:facebook_description"
          content="As an NFT token development company, we offer comprehensive NFT development services, creating non-fungible tokens for various purposes, including games, metaverse, real estate, and more, leveraging our experienced developers and a coherent roadmap for seamless NFT creation."
        />
        <meta
          property="og:twitter_title"
          content="NoN Fungible Token Development Company | NFT Token Development Service"
        />
        <meta
          property="og:twitter_description"
          content="Our NFT token development company, Comfygen, offers cutting-edge NFT token creation services and solutions for a wide range of industries, including sports, arts, music, games, fashion, and more. Based in New York, USA, we serve clients worldwide and can help you launch a custom NFT Marketplace at the right time."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="non fungible token development company | NFT Token Development Company | NFT Token Development Services"
        />
        <meta
          name="summary"
          content="NFT Token Development Company | Comfygen Privtate Limited: Are you Looking for a NFT Token Development Services in India? Hire our expert nft token developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a NFT Token Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Token Development Company"
          content="Comfygen is a World Class NFT Token Development Industry: We Build the Future of Business, One NFT Token Development Services at a Time."
        />
        <meta name="category" content="NFT Token Development Organisation" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="NFT Token Development Firm in India" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="NFT Token Development Service Provider"
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
                heading="NFT Token Development Company"
                ptag1="The most scaled non-fungible token known for being the secured cryptographic token trending highest in the digital marketplace. Do you want to create such a profitable and distinguishable non-fungible token platform? Comfygen is your go-to platform renowned as the best NFT Token Development Company following DNFT protocol for design and agile NFT token development services. Even more, we have the potential to create customized NFT token development integrated with all necessary and trending features. Our expert blockchain developers can create unique NFT tokens that drive success to your NFT token development projects."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Are You Ready To Launch NFT Tokens for Your Business?"
          ptag="Comfygen is your reliable partner for NFT Token Development Solutions. We create impeccable non-fungible token development services to our respective global clientele base. Our company has the resources and blockchain technology empowerment to transform your NFT ideas into reality. No wonder, NFT is ruling the blockchain world used in several decentralized fields; such as blockchain gaming, digitization, art, and more. So here we take the ownership to build the most authentic and irresistible NFT Marketplaces and NFT Tokens on the incredible blockchain development networks, like Ethereum blockchain development, Tron blockchain development, Solana blockchain development, Ripple blockchain development, Binance blockchain development, EOS blockchain development, etc. "
          imgSrc="/img/are-you-ready-to-launch-nft-tokens-for-your-business.webp"
          imgW={550}
          imgH={500}
          altTag="Are You Ready To Launch NFT Tokens for Your Business?"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center space-y-2">
                <h2 className="text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Our Trustworthy NFT Token Development Services
                </h2>
                <p className="text-base text-slate-800">
                  The expert non-fungible token development team that works for
                  customized NFT tokens development delivers some innovative NFT
                  tokens development services that add value to the
                  decentralized development solutions. We help our clients to
                  take leverage from our super-functional NFT token development
                  and manage the digital real world assets very securely.
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
        <AdviceSection
          heading="What are NFTs?"
          ptag="Anything that can be converted into digital assets or digital formats can be called as non fungible token (NFT). NFTs can be anything; such as drawings, movies, GIFs, pictures, selfies, in-game objects, tweets, and even music. People can trade through all these things with the use of cryptocurrency development company. The primary objective of NFT is to prove one’s ownership for the specific asset."
          ptag1="These tokens are non-exchangeable, meaning you cannot exchange these with any other alternative. NFTs are built with blockchain development technology assistance which adhere to the ownership of any specific asset. It is a secured ownership always recorded in ledger with one person only. This is the reason why NFTs are most secure and popular."
          imgSrc="/img/what-are-nfts.webp"
          imgW={550}
          imgH={500}
          altTag="What are NFTs?"
        />
        <section className="py-6 lg:py-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4">
          <div className="items-center space-y-10  flex lg:flex-row flex-col-reverse lg:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Benefits of NFT Tokens
                </h2>
              </div>
              <p className="text-base text-black ">
                Benefits of NFT Tokens state how much the assets are valued,
                which comes from its collectibility and potential future scope.
                We would like to provide glimpse to let you know its worth:{" "}
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
                title="Blockchain based Solution"
                alt="Benefits of nft tokens"
                src="/img/benefits-of-nft-tokens.webp"
                height={500}
                width={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="items-center space-y-10  flex lg:flex-row flex-col-reverse lg:space-x-10 md:space-y-0 pt-6">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md"
                title=" Blockchain and NFT Token Relationship"
                alt=" Blockchain and NFT Token Relationship"
                src="/img/blockchain-and-nft-token-relationship.webp"
                height={500}
                width={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Blockchain and NFT Token Relationship
                </h2>
              </div>
              <p className="text-base text-black ">
                Everyone confuse NFT Tokens with Crypto. That’s not true, but
                NFT has some relations with blockchain development services.
                Let’s know how:{" "}
              </p>
              <div className="w-full text-left">
                <ul className="space-y-1 text-black">
                  {JSON_DATA.myList2.map((item, index) => (
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
          </div>
        </section>
        <div className="py-4 lg:py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  How NFT Tokens are Different from Crypto?
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  Either NFT or Crypto both share similar blockchain
                  technologies, that is why both attract similar audiences. NFT
                  is a part of crypto culture, and buying-selling them will take
                  the use of cryptocurrency development services. Still know
                  some important and unique attributes of NFTs:
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.CryptoUser.map((elem) => {
                  const { title, num } = elem;
                  return (
                    <div key={num} className="space-y-4 border p-6">
                      <p className="text-2xl font-bold">{title}</p>
                      <ul className="space-y-2 text-left">
                        {elem.pList.map((item, index) => (
                          <li
                            className="flex text-base text-black/80"
                            key={index}
                          >
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
              <div className="">
                <a href="/contact-us">
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Get Your NFT Token Now!
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-4 bg-gray-200">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Our Prominent NFT Token Development Process
              </h2>
              <p className="text-base text-slate-800">
                Comfygen is confident in delivering prominent NFT Token
                Development services with the assistance of its expert IT
                Professionals. It is our responsibility to provide excellent NFT
                Development experience following exceptional process-
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.LatestTechno.map((elem) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA] bg-white"
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
          <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0 py-4">
            <p className="text-2xl font-bold">Have a Query?</p>
            <div>
              <Link href="/contact-us" passHref={true}>
                <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                  Contact Now
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Latest Technologies To{" "}
                <span className="text-blue-500">
                  {" "}
                  Integrate Into NFT Token{" "}
                </span>{" "}
                Development
              </h2>
              <p className="text-base text-slate-800">
                Explore the world of NFT token production with Comfygen and
                enjoy the simple integration of the latest technologies.
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.ProcessNFT.map((elem) => {
                const { title, img, decs, num } = elem;
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
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-gray-100">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              {JSON_DATA.Major.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-4"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {JSON_DATA.Service.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 rounded-lg border-2 border-dashed border-[#121212] space-y-2"
                  >
                    <div className="flex items-center  space-x-3">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                How does Comfygen help in NFT Token Development?
              </h2>
              <p className="text-base text-slate-800">
                Do you know, Comfygen is the right non fungible token
                development platform which can support you in building excellent
                NFT Tokens. We have the expert IT Blockchain professionals, who
                can give you the best nft development solutions:
              </p>
            </div>
            <div className="grid  gap-10  md:grid-cols-2 grid-cols-1">
              {JSON_DATA.WhyChoose.map((nfttoken) => {
                return (
                  <div
                    key={nfttoken.num}
                    className="border p-3 space-y-2 shadow"
                  >
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {nfttoken.title}
                    </p>
                    <p className="text-base text-slate-800">{nfttoken.decs}</p>
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
        <FaqNftToken />
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
