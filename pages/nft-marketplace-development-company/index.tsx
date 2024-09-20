import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nftmarketplace.json";
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
const FaqNft = dynamic(() => import("./components/FaqNft"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/nft-consultation.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "NFT Consultation",
    decs: "Experts at building unique, secure, and scalable NFT marketplaces for companies of all sizes, Comfygen is a top company. Our committed experts are committed to providing our clients with the tools they need to thrive in the quickly changing NFT industry. We provide development services using a collaborative approach since we understand that every company has different needs. Through proactive client engagement, we gain a comprehensive understanding of their goals and objectives, which empowers us to provide customized solutions that meet their unique needs.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/decentralized-nft-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Decentralized NFT Marketplace Development",
    decs: "Our decentralized services for developing NFT marketplaces allow consumers total authority over their resources. Our platform, which is based on blockchain technology, guarantees safe and open transactions. Users are free to select their preferred payment methods and set their own prices. We design the ideal NFT marketplace with customization options to meet your demands. Our services offer a safe and user-friendly platform for purchasing, selling, and trading NFTs, giving users unmatched control and authority.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/metaverse-nft-marketplace-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Metaverse NFT Marketplace Development",
    decs: "Our group will design an NFT marketplace that is unique to you and represents your target demographic, brand, and ideal user experience. We will create an aesthetically pleasing and intuitive interface for your NFTs using advanced technologies. With comprehensive search tools, customizable profiles, social sharing, and safe payment processing, we hope to deliver an immersive experience. To improve user engagement, gamification, and social aspects will also be included. Scalability, security, and optimal performance will be our top priorities during development, and we'll provide continuous assistance. To sum up, we are committed to creating a unique NFT marketplace.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/nft-smart-contract-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "NFT Smart Contract Development",
    decs: "Our group specializes in creating and examining smart contracts, which are agreements that run automatically in accordance with conditions specified in code. We put a high priority on these contracts' accuracy and dependability by thoroughly testing them and fixing any problems. Our perfect execution guarantees safe and efficient operation, minimizing the likelihood of any disruptions. We offer a reliable choice for companies and people looking to use blockchain technology.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/nft-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "NFT Development",
    decs: "Our developers are very adept in integrating state-of-the-art token production capabilities into your NFT marketplace so that customers can easily convert their valued assets into tokens. We make sure your marketplace stays ahead of the curve and offers a flawless user experience by integrating advanced technologies. Our team will collaborate directly with you to develop a simple and easy-to-use token creation process, all the while putting strong security measures in place to safeguard user information and assets. With our experience, you can elevate your market and maintain its leadership in the NFT sector.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/nft-wallet-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "NFT Wallet Development",
    decs: "We are pleased to introduce our innovative NFT Storage Solution, designed to make it easier to store your priceless NFT data safely and securely. With our advanced method, you can quickly and simply safeguard your image, video, and audio assets on IPFS, ensuring their easy access and long-term preservation. With our advanced solution, bid adieu to the complexities of traditional storage techniques and welcome the future of NFT administration.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Best NFT Marketplace Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is an Eminent NFT Marketplace Development Company In India & The USA, that delivers the finest end-to-end NFT Marketplace Development Services. We helps you to create and launch your own NFT marketplace application that gives your customers a seamless buying experience. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-marketplace-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="NFT Marketplace Development Company | NFT Marketplace Company | Build NFT Marketplace | NFT Marketplace Developer"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in delivering full-spectrum NFT marketplace development services backed by tailored technologies. Whether you need NFT marketplace development Organization or want to develop an NFT marketplace from the ground up, our rich experience NFT marketplace developers successfully cater to evolving and modern business needs. Our knowledge, experience, and expertise have helped us position ourselves as the best NFT marketplace development agency today!"
        />
        <meta
          property="og:twitter_title"
          content="NFT Marketplace Development Company | NFT Marketplace Development Services"
        />
        <meta
          property="og:twitter_description"
          content="When seeking to hire NFT Marketplace Developers who possess the expertise to establish a robust and launch your own NFT marketplace that gives your customers a seamless buying experience, it's essential to find professionals who are adept in NFT Marketplace blockchain technology. These NFT Marketplace developers should have a deep understanding of blockchain technology, smart contracts, user experience (UX) design, security and compliance, and decentralized storage solutions like IPFS."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="NFT Marketplace Development Company | NFT Software Development"
        />
        <meta
          name="summary"
          content="Choose Comfygen is a top NFT Marketplace Development Company that offers the best NFT Marketplace Development Services & NFT Marketplace Development Solutions to Create NFT Marketplace."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a White-label NFT Development Platform Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="NFT Marketplace Development Company in India, USA"
          content="Comfygen is a prominent nft marketplace development company,helping businesses to Launch and deploy NFT trading platforms in coordination with certified NFT developers in the USA, UK, and India."
        />
        <meta
          name="category"
          content="NFT marketplace development company in the worldwide"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Complete NFT marketplace development company in the world"
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
          content="Best NFT Marketplace Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/nft-marketplace-development-company"
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
                heading="NFT Marketplace Development Company"
                ptag1="Searching for a business that specializes in creating NFT marketplaces? You've found it! We offer the ideal remedy for you. Our expert team is dedicated to creating innovative NFT marketplaces that will revolutionize the way you buy, sell, and exchange digital assets. Our advanced technology and unrivaled expertise offer a seamless and secure experience for both buyers and sellers. Bid adieu to conventional markets and welcome the era of digital ownership. Have faith in Comfygen to realize your vision for the NFT marketplace."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/cryptocurrency-wallet.webp"
                Width={578}
                Height={557}
                altTag="NFT Marketplace Development Company"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Your Trusted Partner for NFT Marketplace Development"
          ptag="Leading company Comfygen specializes in building unique, secure, and scalable NFT marketplaces for companies of all sizes. Our team of bright and motivated engineers is committed to providing our clients with the resources they require to thrive in the quick-paced NFT industry. Since every firm has different needs, we approach our development services cooperatively. Working closely with our clients allows us to completely understand their goals and requirements, allowing us to design a solution that is uniquely suited to satisfy each individual's demands."
          imgSrc="/img/your-trusted-partner-for-nft-marketplace-development.webp"
          imgW={550}
          imgH={500}
          altTag="Your Trusted Partner for NFT Marketplace Development"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  NFT Marketplace Development Services
                </h2>
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
          heading="White Label NFT Marketplace Development"
          ptag="There is a ready-made NFT marketplace for companies who want to build their own identity. Customization is simple when using white-label NFT marketplace development services. For companies looking to swiftly establish their own NFT marketplace without devoting a significant amount of time and capital to it, this is the best choice."
          ptag1="White label The capabilities provided by NFT marketplace development services are extensive. Custom branding and designs, the creation of smart contracts, interaction with well-known payment gateways, extensive security and performance testing, and easy deployment and maintenance are a few of these. Companies can anticipate a complete solution that satisfies their unique requirements."
          imgSrc="/img/white-label-nft-marketplace-development.webp"
          imgW={550}
          imgH={500}
          altTag="White Label NFT Marketplace Development"
        />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Features of NFT Marketplace Development Company
              </h2>
              <p className="text-base text-slate-800">
                In the dynamic NFT ecosystem, Comfygen is a shining example of
                excellence where innovation is king. Being a global pioneer in
                NFT marketplace platform development, we incorporate the latest
                technologies to give these marketplaces outstanding
                functionality and an unmatched user experience.
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
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Blockchain Software{" "}
                <span className="text-blue-500">
                  {" "}
                  Leading Secured Business{" "}
                </span>{" "}
                Operations
              </h2>
              <p className="text-base text-slate-800">
                Blockchain technology promotes multiple leverages to businesses
                and also revamp its operations with cost-effective measures,
                less time-consumption, build trust in the organization
                ecosystem, and more. Know the best ways how the{" "}
                <b>decentralized solutions</b> can transform businesses through
                blockchain development services:
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

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Latest Technology Trends in NFT Marketplaces:
            </h2>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TecnologisStack.map((nftmarketplace) => {
              return (
                <div
                  key={nftmarketplace.num}
                  className={`${styles.letter} space-y-4`}
                >
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {nftmarketplace.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p> {nftmarketplace.stack} </p>
                    <p> {nftmarketplace.stack1} </p>
                    <p> {nftmarketplace.stack2} </p>
                    <p> {nftmarketplace.stack3} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/create-your-own-mft-marketplace-with-comfygen.webp"
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
                    Create Your Own NFT Marketplace with Comfygen
                  </h2>
                  <p className="">
                    Comfygen is a team of knowledgeable developers that
                    specializes in NFT marketplaces a nd provides excellent
                    services at a reasonable cost. Custom design, smart contract
                    development, payment gateway integration, security testing,
                    and maintenance are among the services they offer. For
                    reputable and high-quality NFT marketplaces, trust Comfygen.
                    Select Comfygen for the development of your own NFT
                    marketplace because they possess the know-how, dedication,
                    and experience necessary to build a successful platform that
                    suits your particular requirements.
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
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Discover why we're your go-to NFT Marketplace Development
                Company
              </h2>
              <p className="text-base text-slate-800">
                If you are in search of a trustworthy company that specializes
                in developing NFT marketplaces, your search ends here with
                Comfygen! With our vast experience, unmatched knowledge, and
                unwavering commitment to excellence, we are the ideal choice for
                fulfilling all your NFT requirements.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.WhyChoose.map((nftmarketplace) => {
                return (
                  <div
                    key={nftmarketplace.num}
                    className="border p-3 space-y-2 shadow"
                  >
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {nftmarketplace.title}
                    </p>
                    <p className="text-base text-slate-800">
                      {nftmarketplace.decs}
                    </p>
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
        {/* <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lazyload" style={{ backgroundImage: `url("/img/hire-a-defi-developer.webp")` }} >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section> */}
        <FaqNft />
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
