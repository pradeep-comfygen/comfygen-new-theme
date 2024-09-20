import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/startApp.json";
import LazyLoad from "react-lazy-load";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../../components/Header"), {
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

const Portfolio = dynamic(() => import("./components/Portfolio"), {
  loading: () => <p>Loading...</p>,
});

const Technologies = dynamic(() => import("./components/Technologies"), {
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

export default function Mobile(props) {
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
          Startup App Development Company in India and the USA | Comfygen
        </title>
        <meta
          name="description"
          content="Take your business to the next level with a reliable startup app development company in India and the USA. We can turn your vision into a successful reality with our expert front-end and back-end development skills. Contact us today for a free consultation."
        />
        <link
          rel="canonical"
          href="https://comfygen.com/ca/startup-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top-notch Startup App Development Agency In India"
        />
        <meta
          property="og:facebook_description"
          content="Our specialty lies in crafting mobile apps for startups in the USA. With our expert front-end and back-end development skills, we can transform your vision into a thriving reality, bringing your app to life with precision and finesse."
        />
        <meta
          property="og:twitter_title"
          content="Best App Development Company For Startups in the USA"
        />
        <meta
          property="og:twitter_description"
          content="Elevate your business with a reliable startup app development company. Our seasoned developers will bring your vision to life, providing the expertise needed to turn your ideas into a successful reality. Find Top Talent Globally & Launch Your Project Today!"
        />
        <meta property="schema:type" content="Website, Article" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        {/* <meta name=”robots” content=”imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1”/> */}
        <meta
          name="abstract"
          content="Startup mobile App development company | Startup mobile App development service provider | Comfygen"
        />
        <meta
          name="summary"
          content="Empower your business with the support of a trusted startup app development company. Our team of experienced developers is dedicated to translating your vision into a reality, leveraging their expertise to create innovative and impactful solutions tailored to your specific business needs."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Startup mobile App development Services & Solutions startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="A Top Custom Startup mobile App development Company in India and the USA"
          content="Are you looking to hire the best leading Best App Development Company For Startups for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="Transform your business trajectory with a reputable startup app development company. Our seasoned developers are poised to actualize your vision, orchestrating a harmonious blend of creativity and technical proficiency to propel your ideas into a successful and distinctive reality."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Craft a unique and seamless user experience with a trusted startup app development company. Our seasoned developers are dedicated to materializing your vision, harmonizing creativity and technical expertise to bring your ideas to life in a user-friendly and distinctive manner."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        {/* <meta name='og:country-name' content="US","CA","DE"/> */}
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Hire Best Startup mobile App development agency In India | dedicated startup app developers"
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
                heading="StartUp Mobile App Development Company"
                ptag="Build an innovative and revenue generating mobile app for startup with Comfygen. We are the top-notch startup mobile app development company in India and the USA, leveraging the emerging businesses to build scalable mobile applications for their startups using cutting edge technologies and modern new practices. Our mobile app developers are evolving with time, and using trending technologies, such as AR/VR, Blockchain, Cyber Security, Gamifications, Metaverse for seamless user experience and vast traction."
                ptag1="We promise the startup mobile app development to pitch targeted audiences and beat the competitors. Consult now to generate innovative ideas and transform them in real."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>
        <AdviceSection
          heading="Transform The Startup Ideas into Monetized App Solutions"
       
          ptag='Comfygen never fails satisfying the clientele needs, as we have the team of expert <a class="text-blue-700" href="/hire-mobile-app-developer" > mobile app developers for startups </a> , who evolve with time in a tech-savvy environment.'
          ptag1="We develop mobile apps for startups fulfilling the tailored needs and requirements of the clients to grow their business. We use cutting edge technologies, as well as implement modern technologies to make the app development solution more engaging. Trust on our experienced resources, we will build impeccable startup app solutions for you to establish good recognition in the marketplace."
          ptag2="Priorly to this, our app development team has given mobile app development consultancies to the startups, and today they have built a good business with the help of innovative ideas and our expertise."
          ptag3="Be ready to create an engaging and market demanding mobile application for your startup business to fetch vast tractions from the audience. Foremost, it is suggestive to consult, it is our promise you will get more clarifications and assurance on your ideas. "
          imgSrc="/img/transform-the-startup-ideas-into-monetized-app-solutions.webp"
          imgW={564}
          imgH={559}
          altTag="Startup mobile App development Services"
        />
        {/* {loaded && <> */}
        <ContactFromCenter />
        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="text-4xl font-bold text-[#0E1F51] ">
              Our Startup App Development Services
            </h2>
            <p className="text-base text-slate-800">
              We are a renowned mobile app development company for startups to
              convert your ideology concepts into realistic revenue-generating
              app solutions. Be it the application to resolve any problem, serve
              end-users with services, create innovative apps for engagement -
              We won’t fail delivering end-to-end impeccable app solutions.
            </p>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.AppService.map((elem) => {
              const { title, img, decs, num,urlLink } = elem;
              return (
                <div
                  key={num}
                  className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 p-3 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
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
                  <p className="font-medium text-left text-black  transition duration-200 ease-in-out">
                    {decs}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        {/* <Technologies/> */}
        {/* <div className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0 py-6 lg:py-10 ">
          {
            JSON_DATA.NativeApp.map(mobile => {
              return (
                <div key={mobile.num} className="bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90  flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center">
                  <div className="flex justify-center w-full md:justify-start">
                    <Image className="rounded-md" title={mobile.head} alt={mobile.head} src={mobile.img} height={300} width={400} loader={uploadcareLoader} unoptimized={true} />
                  </div>
                  <div className="w-full space-y-[5px] text-left">
                    <div className="space-y-4">
                      <h3 className="text-[24px] lg:text-4xl font-bold text-white">{mobile.head}</h3>
                      <p className="py-6 text-base font-light text-white">{mobile.para} </p>
                    </div>
                    <div>
                      <Link media="handheld" href={mobile.url} passHref={true}>
                        <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                          <ImArrowUpRight2 />
                          <span>{mobile.btn}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div> */}
        <section className="lg:py-10 py-6 bg-[#F3F4F6]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 ">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Technologies We Use for Startup App Development
              </h2>
              <div>
                <h2 className=" text-2xl lg:text-3xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51] mt-2">
                  Modern Tech Trends We Use
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  First and foremost, our team of professionals creates
                  excellent apps for startups and makes sure they run incredibly
                  effectively. We ensure perfection at every stage by utilizing
                  the newest tools and techniques.
                </p>
              </div>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.Plateform.map((elem) => {
                const { tittle, decs, num, img } = elem;
                return (
                  <div key={num} className="shadow-xl">
                    <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                      <div className="flex items-center justify-center h-16 w-16 p-2 bg-white rounded shadow-md">
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
        <Portfolio />
        <section
          className="w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("images/illuslator/phasebg.webp")` }}
        >
          <div className="w-full py-16 bg-gradient-to-b from-blue-500/80 to-indigo-500/80">
            <div className="space-y-4 text-center text-white w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div>
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Mobile App Development For StartUp Process
                </h2>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                {JSON_DATA.Processess.map((elem) => {
                  const { title, num, decs } = elem;
                  return (
                    <div
                      key={num}
                      className="flex space-x-6 items-left drop-shadow-2xl"
                    >
                      <div>
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white rounded-full bg-white/20">
                          {num}
                        </div>
                      </div>
                      <div className="text-left">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p>{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Industries Where We Serve
            </h2>
            <p>
              Our company shares interest in various industries to deliver
              startup app development services. We build robust apps for
              different industries
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-1">
            {JSON_DATA.AppProcess.map((elem) => {
              // const { title, num, decs, urls } = elem;
              return (
                <div
                  key={elem.num}
                  className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA] cursor-pointer"
                >
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                    {elem.title}
                  </p>
                  <p className="text-base text-slate-800">{elem.decs}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div>

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              How Comfygen Is{" "}
              <span className="text-blue-500"> Your Ideal Choice </span> for
              Startup App Development?{" "}
            </h2>
            <p className="text-base text-slate-800">
              Comfygen specializes in helping startups bring their mobile app
              ideas to life. With our expertise in mobile app development, we
              guide startups through every stage of the process, from ideation
              to deployment, ensuring a seamless and successful journey to
              market.
            </p>
          </div>
          <div className="grid gap-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TechTrends.map((elem) => {
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

        {/* <TechnoStack /> */}

        {/* <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Experience Digitization Across the Globe in Various Domains
            </h2>
            <p className="text-base text-slate-800">Our experienced and talented mobile app developers have years of experience in the stream. They have extensive experience, in which we covered various domains and complexities, and conquered the challenges of building mind-blowing mobile applications. Know a few industries, where we gained victory with iOS and Android App Development:  </p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {
              JSON_DATA.VariousDomains.map(mobile => {
                return (
                  <div key={mobile.num} className="border p-3 space-y-2 shadow">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{mobile.title}</p>
                    <p className="text-base text-slate-800">{mobile.decs}</p>
                  </div>
                );
              })
            }
          </div>
        </div> */}
        {/* <div className="flex justify-center items-center ">
          <Link href='/contact-us' passHref={true}>
            <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Want To Get The Best Solution? Connect Us
            </button>
          </Link>
        </div>

        <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="">
            {JSON_DATA.Why.map((elem: any) => {
              const { title, num, decs } = elem;
              return (
                <div key={num} className="w-full flex flex-col justify-center items-center text-center space-y-2">
                  <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                    {title}
                  </h2>
                  <p className="text-base text-slate-800">{decs}</p>
                </div>
              );
            })}
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {JSON_DATA.Choose.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div key={num} className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2">
                  <div
                    className="flex items-center  space-x-2">
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
        </section> */}
        {/* <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                {
                  JSON_DATA.MobileSolution.map(mobile => {
                    return (
                      <div key={mobile.num} className='space-y-6' >
                        <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">{mobile.head}  </h2>
                        <p className="space-y-0 text-base text-white md:text-xl ">{mobile.para} </p>
                      </div>
                    );
                  })
                }
                <div className='grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 '>
                  {
                    JSON_DATA.Solution.map(mobile => {
                      return (
                        <div key={mobile.num} className='flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100'>
                          <a href={mobile.url} title={mobile.title}>
                            <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                              <div className='md:bg-white md:p-2 md:rounded-lg'>
                                <Image title={mobile.title} alt={mobile.title}
                                  src={mobile.img} height={50} width={50} />
                              </div>
                              <p className='py-4 text-lg font-semibold text-gray-800 '>{mobile.title}</p>
                            </div>
                          </a>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <TalkExpert />

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
