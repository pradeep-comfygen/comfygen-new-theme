import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
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
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/action-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Action Game",
    decs: "In the gaming industry, action games have become popular worldwide. NFTs offer endless possibilities in this realm, allowing us to transform your gaming resources into extraordinary digital assets. We can bring your characters to life, unleash their unique powers, and immortalize them as NFTs. Additionally, we can convert your hardware and tickets into NFTs, creating opportunities for a wide audience to explore and enjoy. Join us on this exciting journey as we revolutionize the gaming industry.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/adventure-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Adventure Game",
    decs: "Adventure games like Minecraft and The Walking Dead allow you to explore immersive virtual environments. Tickets, costumes, upgrades, and maps are among the gaming materials available in our marketplace to help you improve your gameplay. With our exclusive assortment, you can take your gaming experience to the next level. Our marketplace provides everything you need for an outstanding gaming experience, whether you're exploring enormous landscapes or combating undead.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/pvp-battles-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "PVP Battles Game",
    decs: "Play intense PvP games on dynamic platforms, acquire upgrades, customize your character, master unique powers, and wield a powerful array of weaponry. Tokenize your virtual resources for exclusive deals and possibilities by converting them into valuable NFTs. Step into the ring and enjoy the amazing possibilities that lie ahead.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/arcade-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Arcade Game",
    decs: "Arcade games are a fascinating addition to gaming that bring joy to a large number of gamers. Our company goes a step further by embedding NFTs into your gaming experience, transforming your game into a world of one-of-a-kind digital items. Our team provides a smooth transition, transforming your game into a refuge for NFT fans. NFTs will help you advance in your gaming sector!",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/board-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Board Game",
    decs: "Looking for a fun and interesting activity to do with your friends and family? Take a look at online table and board games! You may have a local area gaming experience from the comfort of your own home with options like ludo. Furthermore, each player is given the opportunity to develop their own distinct personality, providing an extra dimension of fun and excitement to the game. With the possibility to use custom NFTs within the game, you can completely personalize it. So, why delay? Gather your loved ones and begin playing right now.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/casino-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Casino Game",
    decs: "Join us today for an unforgettable gaming experience and immerse yourself in the hottest NFT trend on our platform. Use NFTs as a payment method and become the proud owner of digital assets while playing club games like Casino. Within our virtual clubs, you can enjoy exclusive benefits and bonuses. Don't pass up this chance to have a gaming experience like no other!",
  },
  {
    num: "07",
    icon: (
      <Image
        src="/img/card-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Card Game",
    decs: "Our platform blends online gaming with NFTs, providing gamers with a one-of-a-kind possibility to profit while playing the game. With a vast selection of NFT trading cards available on our marketplace, it's the ideal location to start developing your collection. Join us today for a fresh take on conventional gaming.",
  },
  {
    num: "08",
    icon: (
      <Image
        src="/img/fantasy-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Fantasy Game",
    decs: "Are you a fan of dream sports events such as Dream 11? Do you like the financial independence that comes with picking your own squad and players and playing for pay? We have some great news to share with you! We've created a system that will take your fantasy sports experience to the next level. We can now convert your players and teams to NFTs, which will improve your gaming experience while also providing you with extra awards. So, what are you holding out for? Join us and reach new heights in your ideal sports journey!",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/racing-game.webp"
        alt="Casino Game Development Company in India"
        width={100}
        height={100}
      />
    ),
    title: "Racing Game",
    decs: "Looking for a thrilling gaming experience that appeals to players of all ages? Take a look at racing games! These exhilarating games have the potential to captivate a large audience, and we have something unique to offer. Introducing our exclusive line of NFTs, which includes high-quality automobiles and bicycles, as well as their expertly created accessories. Each item is custom-made to your specific preferences and to improve your game performance. Prepare to be immersed in a world of high-speed exhilaration like never before!",
  },
];
export default function Ecommerce(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Best NFT Game Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading NFT Game Development Company In India & The USA that delivers the end-to-end finest NFT Game Development Services to build state-of-the-art NFT games. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-game-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Game Development Company | NFT Game Company | Build NFT Game | NFT Game Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT Game development services backed by tailored technologies. Whether you need NFT Game development Organization or want to develop an NFT Game from the ground up, our rich experience NFT Game developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT Game development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Game Development Company | NFT Game Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Game Developers who possess the expertise to establish a robust and launch your own NFT Game that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Game blockchain technology. These NFT Game developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="NFT Game Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Game Development Company that offers the best NFT Game Development Services & NFT Game Development Solutions to Create NFT Game."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Game Development Company in India, USA"
          content="Comfygen is a prominent nft Game development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT Game development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT Game development company in the world"
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
          content="Best NFT Game Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-game-development-company"
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

      {/* hero section */}
      <div
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading="NFT Game Development Company"
              ptag1="What’s left to wait now? Call us, and discuss about the ideas and plans striking your head. Consult about the decentralized gaming ideologies with experienced IT Experts; who can suggest for the best NFT Game Development Services & solutions resulting profitability in your software."
              ptag="NFT Game Development is booming at vastest scale, and its user’s count is constantly rising unimaginably. Comfygen is the one-stop NFT Game Development Company In India & The USA provides agile development solutions and user-friendly UX/UI for seamless gameplay. We have skilled NFT Game Developers integrate some latest technologies, use advanced blockchain frameworks, and take leverages from tokenisation standards in the gaming development platforms."
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden bg-no-repeat bg-fixed bg-cover"
        style={{ backgroundImage: `url("/gif/nft-game-background.webp")` }}
      >
        <div className="bg-black/80">
          <AdviceSection
            heading="Presenting The Reliable NFT Game Development Company"
            ptag="We are pioneers in the creation of immersive NFT games that will take you to a whole new world of excitement and adventure. We specialize in producing innovative and exciting gaming experiences powered by non-fungible tokens as a leading game development firm. We bring to life virtual landscapes where you can unleash your imagination and go on fascinating expeditions using our knowledge and ingenuity. Join us on this remarkable trip as our cutting-edge NFT games transform the gaming market."
            imgSrc="/img/presenting-the-reliable-nft-game-development-company.webp"
            imgW={550}
            imgH={500}
            altTag="Presenting The Reliable NFT Game Development Company"
          />
          <ContactFromCenter />
          {/* services */}
          <section className="py-4 lg:py-10">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">
                    NFT Game Development Services
                  </h2>
                </div>
                <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                  {Arena.map((elem) => {
                    const { title, icon, decs } = elem;
                    return (
                      <div className="relative w-full">
                        <div className="absolute -right-4 -bottom-4 bg-white/60 h-full w-full rounded-xl md:flex hidden"></div>
                        <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                          <div className="w-28 h-28 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center rotate-12">
                            <span> {icon}</span>
                          </div>
                          {/* <div className="h-2 w-20 bg-black/60"></div> */}
                          <div className="text-2xl font-extrabold text-white">
                            {title}
                          </div>
                          <p className="leading-snug text-gray-400">{decs}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <AdviceSection
            heading="WHITE LABEL NFT GAME DEVELOPMENT SOLUTIONS"
            ptag="Using a white label NFT game development solution can transform the journey of prospective game creators. These solutions include a pre-built game engine, a diverse variety of NFT assets, and tools for managing the economy of your game. Saving time and money by not having to create a custom NFT game from scratch is one of the benefits. Using current materials, you may easily construct a professional-looking game. These solutions also provide a high level of flexibility, allowing you to select from a variety of game templates and modify them to your exact requirements and creative vision. You may also use your own logo and artwork to give your game a personal touch. Finally, white label solutions are user-friendly, making them available to everyone, regardless of prior game development knowledge. Even beginners may design and launch their own NFT game with confidence."
            imgSrc="/img/white-label-nft-game-development-solutions.webp"
            imgW={550}
            imgH={500}
            altTag="WHITE LABEL NFT GAME DEVELOPMENT SOLUTIONS"
          />
          <section className="lg:py-16 py-4 ">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Features of NFT Game Development
                </h2>
              </div>
              <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.LatestTechno.map((elem) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className="border p-3 space-y-2 shadow-lg shadow-[#fff]/70 border-l-[16px] rounded-tl-3xl rounded-br-3xl border-[#16BDFA] bg-white"
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
          <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
            <p className="text-2xl font-bold text-white">Have a Query?</p>
            <div>
              <Link href="/contact-us" passHref={true}>
                <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                  Contact Now
                </span>
              </Link>
            </div>
          </div>
          <section className="py-20 ">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center ">
                <h2 className="text-4xl font-bold text-[#ffffff] ">
                  NFT Game Development Process
                </h2>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.ProcessNFT.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-6 space-y-4 bg-[#201325] border rounded-xl group hover:bg-white transition-all duration-200"
                    >
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-white group-hover:bg-[#201325] rounded-full bg-gradient-to-t">
                        <Image
                          width={100}
                          height={100}
                          src={img}
                          alt={title}
                          title={title}
                          className="w-16"
                        />
                      </div>
                      <h3 className="text-lg font-extrabold group-hover:text-[#0E1F51] transition-all duration-200 text-left text-white">
                        {title}
                      </h3>
                      <p className="font-medium text-left text-white group-hover:text-black break-all transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                New technologies have been implemented in the development of NFT
                games
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 divide-y divide-x">
              {JSON_DATA.TecnologisStack.map((nftmarketplace) => {
                return (
                  <div
                    key={nftmarketplace.num}
                    className="p-6 text-center bg-white space-y-2 hover:bg-[#000000]/60 transition-all duration-300 ease-in-out group"
                  >
                    <Image
                      src={nftmarketplace.img}
                      alt={nftmarketplace.title}
                      className="mx-auto"
                      width={400}
                      height={200}
                    />
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-lg group-hover:text-white">
                      {nftmarketplace.title}
                    </h3>
                    <p className="group-hover:text-white">
                      {" "}
                      {nftmarketplace.stack}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="py-10">
            <div
              className="lg:py-20 py-10 bg-center bg-no-repeat bg-cover lazyload "
              style={{
                backgroundImage: `url("/img/hire-nft-game-developers.webp")`,
              }}
            >
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#070008]/50 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </section>
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Why Choose Us for NFT Game Development
              </h2>
            </div>
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-3">
              <div className="xl:space-y-10 space-y-4">
                {JSON_DATA.WhyChoose.slice(0, 3).map((nftmarketplace) => {
                  return (
                    <div
                      key={nftmarketplace.num}
                      className="border p-6 space-y-2 shadow bg-black rounded-tl-[40px] rounded-br-[40px] hover:rounded-none transition-all duration-200 ease-in-out"
                    >
                      <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                        {nftmarketplace.title}
                      </p>
                      <p className="text-base text-[#fff]">
                        {nftmarketplace.decs}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/gif/vision-transformed.webp"
                  alt="VR"
                  className="w-full"
                />
              </div>
              <div className="xl:space-y-10 space-y-4">
                {JSON_DATA.WhyChoose.slice(3, 6).map((nftmarketplace) => {
                  return (
                    <div
                      key={nftmarketplace.num}
                      className="border p-6 space-y-2 shadow bg-black rounded-tl-[40px] rounded-br-[40px] hover:rounded-none transition-all duration-200 ease-in-out"
                    >
                      <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                        {nftmarketplace.title}
                      </p>
                      <p className="text-base text-[#fff]">
                        {nftmarketplace.decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-4">
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
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Develop Other Games{" "}
              </h2>
            </div>
            <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
              {JSON_DATA.GameCardData.slice(0, 6).map((elem) => {
                const { title, url, img } = elem;
                return (
                  <div className="w-full ">
                    <Link href={url} passHref={true}>
                      <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                        <img
                          src={img}
                          alt={title}
                          className="h-64 w-full ml-auto mr-auto"
                        />
                        <div className=" p-4 bg-blue-500 flex flex-col">
                          <div>
                            <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                              {title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}

              {showContent ? (
                <>
                  {JSON_DATA.GameCardData.slice(6, 17).map((elem) => {
                    const { title, url, img } = elem;
                    return (
                      <div className="w-full ">
                        <Link href={url} passHref={true}>
                          <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                            <img
                              src={img}
                              alt={title}
                              className="h-64 w-full ml-auto mr-auto"
                            />
                            <div className=" p-4 bg-blue-500 flex flex-col">
                              <div>
                                <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                                  {title}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>

            {showContent ? (
              <div className="flex justify-center items-center">
                <button
                  className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                  onClick={() => setShowContent(!showContent)}
                >
                  Load Less
                </button>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <button
                  className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                  onClick={() => setShowContent(!showContent)}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  NFT Game Development "
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
