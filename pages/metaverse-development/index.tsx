import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaverse.json";
import Link from "next/link";
import styles from "./styles.module.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsFillStarFill } from "react-icons/bs";
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
export default function Ecommerce(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;

  const countryNames = [
    "US",
    "CA",
    "GB",
    "AD",
    "AU",
    "AT",
    "BS",
    "BH",
    "IO",
    "KM",
    "CU",
    "AR",
    "CW",
    "CY",
    "DK",
    "DM",
    "EG",
    "FK",
    "FI",
    "FR",
    "DE",
    "GR",
    "GL",
    "HK",
    "IS",
    "IN",
    "ID",
    "IT",
    "JP",
    "JE",
    "JO",
    "KW",
    "KG",
    "KR",
    "MX",
    "FM",
    "NZ",
    "NI",
    "OM",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RU",
    "SA",
    "SG",
    "SE",
    "SZ",
    "CH",
    "TH",
    "TR",
    "TN",
    "UA",
    "UM",
    "AE",
    "039",
    "155",
    "154",
    "151",
    "150",
  ];

  const metaTags = countryNames.map((country, index) => (
    <meta key={index} name="og:country-name" content={country} />
  ));

  const websiteData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Top Metaverse App Development Company | Comfygen",
    url: "https://www.comfygen.com/metaverse-development",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const productData = {
    "@context": "http://www.schema.org",
    "@type": "product",
    brand: "Comfygen",
    name: "Best Metaverse App Development Company - Metaverse App Development Services",
    image:
      "https://www.comfygen.com/metaverse/tap-in-to-world-of-metaverse.webp",
    description:
      "Comfygen Private Limited is top Metaverse Application Development Company. We provide the best Metaverse application development services to enterprises & startups worldwide.",
    aggregateRating: {
      "@type": "aggregateRating",
      ratingValue: "4.9",
      reviewCount: "1124",
    },
  };
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comfygen",
    legalName: "Comfygen Pvt. Ltd.",
    url: "https://www.comfygen.com/",
    logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
    foundingDate: "2019",
    founders: [
      {
        "@type": "Person",
        name: "Saddam Husen",
      },
      {
        "@type": "Person",
        name: "Saddam Husen",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
      addressLocality: "Vaishali Nagar",
      addressRegion: "Jaipur, Rajasthan, India",
      postalCode: "302021",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+91 9587867258",
      email: "sales@comfygen.com",
    },
    sameAs: [
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://www.facebook.com/comfygen",
    ],
  };
  return (
    <>
      <Head>
        <title>
          Metaverse Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top metaverse development company In India & The USA, we offers a range of metaverase developement and consulting services with expertise in VR, blockchain, Metaverse Healthcare, and AR development. Contact us to launch future-ready metaverse projects"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/metaverse-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Metaverse Development Services | Metaverse App Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Punter with the best metaverse application development company– a leading top metaverse development company offering an array of metaverse development services with end-to-end expertise. With metaverse app development, turn ideas into reality!"
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Metaverse development company in the United States, Comfygen provide you top notch services of metaverse development platform services and solutions with bets metaverse development Programmers"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta name="abstract" content="Leading Metaverse Development Agency" />
        <meta name="summary" content="Leading Metaverse Development Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Metaverse Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Leading Metaverse Development Company"
          content="Empowering businesses with cutting-edge Metaverse Development Services and solutions and Comfygen's expert metverse blockchain consulting services to drive innovation and sustainable growth in the digital economy."
        />
        <meta
          name="category"
          content="Metaverse Development Services - Metaverse Development Solution"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best Metaverse Development Company - Metaverse Development Solution Firm in India, The USA, UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Metaverse Development Service Provider"
        />
        {metaTags}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
      </Head>

      {/* hero section */}
      <div
        className="bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
      >
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-36 py-5">
            <HeroSectionForm
              heading="Metaverse Development Company"
              ptag="If you are looking for a metaverse development company In India & The USA, then you are at the right place. We are that company which you are looking for to launch the future-ready Metaverse development services. We help you with this launch by supporting the technical and development needs for the project."
              ptag1="Our team has good experiences in virtual reality development, blockchain development and augmented reality development and can help to develop metaverse development services & solutions components."
              btnName="Discuss Now"
              btnLink="/contact-us"
            />
          </div>
        </div>
      </div>
      <div
        className="overflow-hidden bg-no-repeat bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("/gif/metaverse-page.webp")` }}
      >
        <div className="bg-black/80">
          <AdviceSection
            heading="Tap in to world of Metaverse Development Company"
            ptag="Whether you are a startup and funded business, if you are trying to redefine the virtual world, then Comfygen has an experienced team that helps to make it happen. Why do you need to choose us? Well, We think BIG or you can say that we think FUTURE with a pinch of business to it. We build metaverse development services work and bring a real impact for your business."
            imgSrc="/metaverse/tap-in-to-world-of-metaverse.webp"
            imgW={550}
            imgH={500}
            altTag="Tap in to world of Metaverse Development Company"
          />
          <ContactFromCenter />
          {/* services */}
          <section className="py-4 lg:py-10">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center space-y-2">
                  <h2 className="text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">
                    Ways to Embrace the Metaverse with Our Metaverse Development
                    Company
                  </h2>
                  <p className="text-base text-white">
                    You can trust us for any metaverse software development
                    services projects. Our team of experienced Metaverse
                    developers helps to design and develop and embrace the
                    technology of the future with our metaverse development
                    services.
                  </p>
                </div>
                <div className="grid gap-10 lg:p-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                  {JSON_DATA.EmbraceMeta.map((elem) => {
                    const { title, num, decs, url } = elem;
                    return (
                      <div
                        key={num}
                        className="p-4 bg-black shadow-[#BE5EBC] shadow-md transition-all duration-300 ease-in-out"
                      >
                        <a href={url}>
                          <div className="space-y-2">
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-bold">
                              {title}
                            </h2>
                            <p className="text-base text-white">{decs}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="lg:py-16 py-4 bg-white">
            <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
              <div className="">
                {JSON_DATA.ImmersiveMetaverse.map((elem: any) => {
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
                {JSON_DATA.Experience.map((elem: any) => {
                  const { title, decs, num, img, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2"
                    >
                      <div className="flex items-center  space-x-2">
                        <div className="flex items-center justify-center ">
                          <Image src={img} alt={title} width="60" height="60" />
                        </div>
                        <a
                          href={url}
                          className="hover:underline underline-offset-2"
                        >
                          <h3 className="text-base font-bold text-black">
                            {title}
                          </h3>
                        </a>
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
          <section className="lg:py-16 py-4 bg-[#08011E]/50">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center space-y-3">
                <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                  Why Do Businesses Want to Use Metaverse Blockchain technology?
                </h2>
                <p className="text-base text-white">
                  Metaverse is the New thing in today's era. 8 out of 10
                  businesses want to enter the metaverse era. So if you are
                  looking for big opportunities, then our developer can provide
                  great analysis and strategy.
                </p>
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
                  Working Methodology for Implementing Metaverse Blockchain
                  Development Solutions
                </h2>
                <p className="text-base text-white">
                  You can enhance your metaverse features without integration
                  services. We have a full proof working methodology that will
                  help to implement Metaverse Blockchain development agency in
                  an easy and cost effective way.
                </p>
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
          <div className="md:py-10 bg-gray-100 py-4">
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
              <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
                <Image
                  src="/metaverse/we-serve-comprehensive-metaverse-blockchain-development-services-for-different-industries.webp"
                  alt=" We Serve Comprehensive Metaverse Blockchain Development Services for Different Industries"
                  className="rounded-lg"
                  width={904}
                  height={740}
                />
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  We Serve Comprehensive Metaverse Blockchain Development
                  Services for Different Industries
                </h2>
                <div className="space-y-2">
                  <p className="text-base text-black text-justify">
                    We specialise in metaverse software development for
                    empowering businesses across different industries to
                    capitalise on the transformative power of the metaverse
                    development services. Our business-centric metaverse
                    development services & solutions can help in redefining
                    business processes for different industries, such as,{" "}
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
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <h2 className="text-3xl lg:text-4xl  font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Make the Most of Our Flexible Engagement Models!
              </h2>
              <p className="text-base text-white">
                We are the best Metaverse app development firm for choosing your
                desired engagement model according to your specific
                requirements. Our experts can support you in different ways
                tailored to your budget and business goals.
              </p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
              <div className="p-12 xl:rounded-l-full  flex justify-center items-center flex-col bg-white space-y-2">
                <Image
                  src="/img/blockstack.webp"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="space-y-2 text-center">
                  <div className="bg-[#150441]/80 p-1 rounded">
                    <h2 className="text-white text-xl font-bold">
                      Project-based Model
                    </h2>
                  </div>
                  <p className="text-base text-black">
                    We follow a project-based engagement model that can help
                    businesses in launching new products or services
                    efficiently. Our project-based model can help you leverage
                    the expertise of our workforce for specific projects.
                  </p>
                </div>
              </div>
              <div className="p-12   flex justify-center items-center flex-col bg-white space-y-2">
                <Image
                  src="/metaverse/dedicated-development-team.webp"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="space-y-2 text-center">
                  <div className="bg-[#150441]/80 p-1 rounded">
                    <h2 className="text-white text-xl font-bold">
                      Dedicated Development Team
                    </h2>
                  </div>
                  <p className="text-base text-black">
                    We also offer dedicated metaverse development expertise to
                    help your business create innovative metaverse development
                    services & solutions. You can have experts working
                    continuously on metaverse projects for your business
                    alongside delivering high-quality solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="p-12 xl:rounded-r-full  flex justify-center items-center flex-col bg-white space-y-2">
                <Image
                  src="/metaverse/team-extension.webp"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="space-y-2 text-center">
                  <div className="bg-[#150441]/80 p-1 rounded">
                    <h2 className="text-white text-xl font-bold">
                      Team Extension
                    </h2>
                  </div>
                  <p className="text-base text-black">
                    Our metaverse development company also offers team extension
                    services that can help your business expand its development
                    capabilities. We offer vetted experts who work in
                    collaboration with your team for metaverse development
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                Why Choose Comfygen for Metaverse Blockchain Development?
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 divide-y divide-x">
              {JSON_DATA.TecnologisStack.map((metaverse) => {
                return (
                  <div
                    key={metaverse.num}
                    className="p-6 text-center bg-white space-y-2 hover:bg-[#000000]/60 transition-all duration-300 ease-in-out group"
                  >
                    <Image
                      src={metaverse.img}
                      alt={metaverse.title}
                      className="mx-auto"
                      width={400}
                      height={200}
                    />
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-lg group-hover:text-white">
                      {metaverse.title}
                    </h3>
                    <p className="group-hover:text-white">
                      {" "}
                      {metaverse.stack}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

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
          <section className="py-10">
            {/* <div className="lg:py-20 py-10 bg-center bg-no-repeat bg-cover lazyload " style={{ backgroundImage: `url("/img/hire-nft-game-developers.webp")` }}> */}
            <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#070008]/50 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
            {/* </div> */}
          </section>
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className="flex flex-col justify-center items-center text-center mx-auto space-y-2">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Why Should You Hire Our Metaverse Development Experts?
              </h2>
              <p className="text-white">
                At Comfygen, we are best at delivering comprehensive Metaverse
                development solutions to all our clients, ensuring our clients'
                budgets. Even we go above and beyond with our agile development
                process and deliver exceptional business results. The backbone
                of exceptional results is our top-notch Metaverse developers,
                and here is the reason why you should hire metaverse developers:
              </p>
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
                  src="/img/spider-man.webp"
                  alt="spider-man"
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
          <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
                <div className="flex xl:py-12">
                  <Image
                    src="/metaverse/do-you-want-other-information-aboutour-metaverse-development-services.webp"
                    width={800}
                    height={521}
                    blurDataURL="URL"
                    placeholder="blur"
                    loader={uploadcareLoader}
                    unoptimized={true}
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                    alt="  Is There Any Other Information We Can Help You With?"
                  />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                <div className="flex h-full items-center rounded-lg bg-[#150441]/40 p-6 text-center text-white xl:pl-12 xl:text-left">
                  <div className="xl:pl-12 space-y-2">
                    <h2 className="mb-6 text-3xl font-bold">
                      Do You Want Any Other Information about our Metaverse
                      Development Services?
                    </h2>
                    <p className="">
                      You can reach out to us through your preferred channels to
                      seek information about our metaverse development services.
                      Talk to our experts and find the ideal answers to your
                      doubts about metaverse development projects before you
                      begin one.
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
        </div>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Metaverse Development"
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
