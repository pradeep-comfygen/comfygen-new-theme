import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqMobile = dynamic(() => import("./components/FaqMobile"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("./components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const TechnoStack = dynamic(() => import("./components/TechnoStack"), {
  loading: () => <p>Loading...</p>,
});

const BreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Books",
      item: "https://example.com/books",
    },
  ],
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Mobile App Development Company In India | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Mobile App Development Agency - Mobile Application Development Company",
  image:
    "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Comfygen is a top mobile application development company. We provide the best Mobile application development services and custom mobile app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};

export default function Mobile(props: any) {
  let {
    Why,
    AppService,
    NativeApp,
    Plateform,
    AppProcess,
    TechTrends,
    VariousDomains,
    Choose,
    MobileSolution,
    Solution,
    Hire,
    myList,
  } = JSON_DATA;

  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          Best Custom Mobile App Development Company in India and the USA |
          Comfygen
        </title>
        <meta
          property="og:title"
          content="Mobile App Development Company in India & USA | Comfygen"
        />
        <meta
          name="description"
          content="Comfygen is a leading best custom mobile application development agency in India and USA, that offers iPhone/iOS app and Android app development services and solutions from startup to enterprise-level company. Contact Us today! 
"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Mobile App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile App Development Company in India"
        />
        <meta
          name="summary"
          content="Comfygen is the top mobile app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Development Company"
          content="Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Mobile App Development Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Top Mobile App Development Company in India | Comfygen",
              url: "https://www.comfygen.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              areaServed: [
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
              ],
              sameAs: [
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://www.linkedin.com/company/comfygen-private-limited",
                "https://www.facebook.com/comfygen",
              ],
            }),
          }}
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className="bg-[#1B1C30CC]">
            <LazyLoad height={60} offset={100}>
              <Header />
            </LazyLoad>
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Premier Custom Mobile Application Development Company"
                ptag="Looking for a custom mobile application development company? Comfygen specializes in custom mobile app development services tailored to your unique needs. Recognized by Clutch, GoodFirms, and G2, we are a top-rated custom app development company in India and USA delivering exceptional results."
                ptag1="Our experienced team offers white-label mobile app development, ensuring seamless solutions for businesses and startups. Whether you need custom apps for business or custom mobile application development for startups, our expert developers utilize advanced technologies like Kotlin and Swift to create engaging and efficient applications."
                ptag2="Choose Comfygen for comprehensive custom application development services that turn your vision into reality!"
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>

        <AdviceSection
          heading="Explore Success with Our Mobile App Development Agency"
          ptag="Comfygen is an experienced and established mobile app development agency in Jaipur, which made a reputation in the market by accepting all the challenges though. For us, there are no bars in the mobile app development sector. We have left our footprints in SMBs and Large Scale Enterprises managed complex projects in every domain. Our company tied with super-talented and innovative mobile app developers to build to skyrocket our clientele business. We believe in meeting specific business requirements and provide tailored mobile development solutions based on the needs."
          ptag1="Our approach is our USP, which is to give best to clients, deliver their project on time, make them stand out among the crowded app market, utilize some modern technologies, and effective strategies to raise their business potential and profitability. Our firm works on “Give and Take Policy.” The better results we will provide, the better market value we gain."
          imgSrc="/img/explore-success-with-our-mobile-app-development-agency.webp"
          imgW={564}
          imgH={559}
          altTag="Explore Success with Our Mobile App Development Agency"
        />

        <ContactFromCenter />

        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="text-4xl font-bold text-[#0E1F51] ">
              Mobile App Development Services
            </h2>
            <p className="text-base text-slate-800">
              Comfygen is your stop, where you can avail leverages of all mobile
              app development services in jaipur. We are renowned for creating
              innovative mobile applications that match current market
              standards. Here are the best mobile app development services we
              provide with smoother user experience, security measures, and
              great performance.{" "}
            </p>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {AppService &&
              AppService?.map((elem) => {
                const { title, img, decs, num, urlLink } = elem;
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
                      <a href={urlLink}>{title}</a>
                    </h3>

                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
          </div>
        </section>

        <div className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0 py-6 lg:py-10 ">
          <div className="bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90  flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title={NativeApp?.head}
                alt={NativeApp?.head}
                src={NativeApp?.img}
                height={300}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[5px] text-left">
              <div className="space-y-4">
                <h3 className="text-[24px] lg:text-4xl font-bold text-white">
                  {NativeApp?.head}
                </h3>
                <p className="py-6 text-base font-light text-white">
                  {NativeApp?.para}{" "}
                </p>
              </div>
              <div>
                <Link media="handheld" href={NativeApp?.url} passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    <ImArrowUpRight2 />
                    <span>{NativeApp?.btn}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-6 bg-white">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Mobile App Development Platforms
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              Know where we can build your business presence to gain higher
              values from marketplace:{" "}
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 md:grid-cols-2">
            {Plateform.map((elem) => {
              const { tittle, decs, num, img, url } = elem;
              return (
                <div key={num} className="shadow-xl">
                  <a href={url} title={tittle}>
                    <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                      <div className="flex items-center justify-center h-14 w-14 bg-white rounded shadow-md">
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
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Mobile App Development Process
            </h2>
            <p>
              Comfygen follows proven process of app development to leverage
              businesses with great user-retention:
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {AppProcess.map((elem) => {
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
        <TechnoStack />
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Latest Tech Trends{" "}
              <span className="text-blue-500">
                {" "}
                Involved for Mobile Application
              </span>{" "}
              Development
            </h2>
            <p className="text-base text-slate-800">
              Comfygen believes in providing a futuristic approach to digital
              solutions. We do not only think of today, but we want our
              applications to be sustained in the next-gen market. Here are the
              emerging technologies we follow to sustain values and fit into
              forward-thinking marketplace thoughts.{" "}
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {TechTrends.map((elem) => {
              const { title, stack, num } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div className="shadow-lg p-2 border rounded">
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {title}
                    </h3>
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

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Experience Digitization Across the Globe in Various Domains
            </h2>
            <p className="text-base text-slate-800">
              Our experienced and talented mobile app developers have years of
              experience in the stream. They have extensive experience, in which
              we covered various domains and complexities, and conquered the
              challenges of building mind-blowing mobile applications. Know a
              few industries, where we gained victory with iOS and Android App
              Development:{" "}
            </p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {VariousDomains?.map((elem) => {
              return (
                <div key={elem.num} className="border p-3 space-y-2 shadow">
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                    {elem.title}
                  </p>
                  <p className="text-base text-slate-800">{elem.decs}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <ConnectWithExpertButton
            url={"/contact-us"}
            title={"Want To Get The Best Solution? Connect Us"}
          />
        </div>

        <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="w-full flex flex-col justify-center items-center text-center space-y-2">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
              {Why?.title}
            </h2>
            <p className="text-base text-slate-800">{Why?.decs}</p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {Choose &&
              Choose?.map((elem: any) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2"
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
        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                <div key={MobileSolution?.num} className="space-y-6">
                  <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    {MobileSolution?.head}{" "}
                  </h2>
                  <p className="space-y-0 text-base text-white md:text-xl ">
                    {MobileSolution?.para}{" "}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 ">
                  {Solution &&
                    Solution?.map((mobile) => {
                      return (
                        <div
                          key={mobile.num}
                          className="flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100"
                        >
                          <a href={mobile.url} title={mobile.title}>
                            <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                              <div className="md:bg-white md:p-2 md:rounded-lg">
                                <Image
                                  title={mobile.title}
                                  alt={mobile.title}
                                  src={mobile.img}
                                  height={50}
                                  width={50}
                                />
                              </div>
                              <p className="py-4 text-lg font-semibold text-gray-800">
                                {mobile.title}
                              </p>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>
        <FaqMobile />
        <BlogSection initialData={initialData} />
        {/* </>} */}
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
