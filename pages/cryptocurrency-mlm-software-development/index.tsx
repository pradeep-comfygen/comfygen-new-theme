import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptomlmsoftware.json";
import Link from "next/link";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Cryptocurrency = dynamic(() => import("./components/Cryptocurrency"), {
  loading: () => <p>Loading...</p>,
});

const ModusSection = dynamic(() => import("../components/ModusSection"), {
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
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
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

const businessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  priceRange: "$20-$550",
  image: "https://www.comfygen.com/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
  name: "Top Cryptocurrency MLM Software Development Company In India",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar,",
    addressLocality: "Vaishali Nagar, Near D A V Centenary Public School",
    addressRegion: "Jaipur, Rajasthan",
    postalCode: "302021",
    addressCountry: "IN",
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Saddam Husen",
    },
  },
  url: "https://www.comfygen.com/cryptocurrency-mlm-software-development",
  telephone: "+91 9587867258, +1 5145659471",
};

const ldJsonData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
      url: "https://www.comfygen.com/cryptocurrency-mlm-software-development",
      name: "Cryptocurrency MLM Software Development Company | Comfygen",
      isPartOf: {
        "@id": "https://www.comfygen.com/#website",
      },
      primaryImageOfPage: {
        "@id":
          "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage",
      },
      image: {
        "@id":
          "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage",
      },
      thumbnailUrl: "https://www.comfygen.com/svg/comfygen-logo.svg",
      dateModified: "2023-09-15T06:58:46+00:00",
      description:
        "A top provider of cryptocurrency MLM software is Comfygen. We provide complete solutions for the development of cryptocurrency MLM software, including custom MLM software development, white-label cryptocurrency software development, and blockchain-based MLM software development services. Our skilled developers guarantee transparency, security, and effectiveness in managing MLM activities and commission payouts. Hire our bitcoin MLM software developers to design a solution specifically for your company.",
      breadcrumb: {
        "@id":
          "https://www.comfygen.com/cryptocurrency-mlm-software-development/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.comfygen.com/cryptocurrency-mlm-software-development/",
          ],
        },
      ],
    },
    {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id":
        "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage",
      url: "https://www.comfygen.com/img/cryptocurrency-mlm-software-development-company.webp",
      contentUrl:
        "https://www.comfygen.com/img/cryptocurrency-mlm-software-development-company.webp",
      width: 365,
      height: 250,
      caption:
        "Best Cryptocurrency MLM Software Development Company | crypto based mlm software",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.comfygen.com/cryptocurrency-mlm-software-development/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cryptocurrency MLM Software Development Company | Hire Cryptocurrency MLM Software Developers",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.comfygen.com/#website",
      url: "https://www.comfygen.com/",
      name: "Comfygen - Blockchain and Game AI Development Company",
      description: "Simple | Secure | Successive",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.comfygen.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
  ],
};

const Services = [
  {
    num: "1",
    url: "/tron-token-development",
    img: "/img/tron-mlm-software.webp",
    title: "TRON MLM Software ",
    decs: (
      <p>
        TRON has the potential to unleash super-productive and profitable deals
        in upcoming years guaranteed. The TRON MLM Software will provide users
        higher scalability, and even more this software module can imply 4000
        transactions per second. Knowing the master benefits of{" "}
        <a href="/tron-token-development" className="text-blue-500">
          TRON MLM Software development services
        </a>{" "}
        module; there are 0 fees charged for the users.
      </p>
    ),
  },
  {
    num: "2",
    url: "/ethereum-token-development",
    img: "/img/ethereum-mlm-software-service.webp",
    title: "Ethereum MLM Software",
    decs: (
      <p>
        It is an optimum blockchain network to build agile decentralized
        application development services; such as{" "}
        <a
          href="/ethereum-blockchain-development-company"
          className="text-blue-500"
        >
          Ethereum blockchain development services
        </a>{" "}
        . Every MLM Company entrepreneur needs Ethereum MLM Software development
        services because of the SMART Contract inclusions, which executes all
        the functions of smart contract based mlm software development services
        on pre-set immutable conditions.
      </p>
    ),
  },
  {
    num: "3",
    url: "#",
    img: "/img/eos-mlm-software.webp",
    title: "EOS MLM Software",
    decs: "EOS MLM Software is known for attracting a huge customer’s base due to its negligible transaction fees and higher operational scalability. It works on a lower latency period, and also supports a huge user base with the operations functionality at an optimum speed. EOS MLM Software is the most demanding cryptocurrency model to implement in the business.  ",
  },
  {
    num: "4",
    url: "#",
    img: "/img/bitcoin-mlm-software.webp",
    title: "Bitcoin MLM Software",
    decs: "Bitcoin MLM Software is the one head of all blockchain development networks in all of its encryption models. When the system is operated by multi-nodal operations, this MLM Software gives a boost to data breach and protects it to one extent. ",
  },
  {
    num: "5",
    url: "#",
    img: "/img/cryptocurrency-mlm-software.webp",
    title: "Cryptocurrency MLM Software ",
    decs: "Every millennial Blockchain MLM Software development company of today’s time uses crypto MLM Software for their business operations. They eliminate manual functions to operate their fiat currencies. The best cryptocurrency MLM Software development services is their way to streamline productivity, and also generate a secure way to build passive income.",
  },
  {
    num: "6",
    url: "#",
    img: "/img/blockchain-mlm-software.webp",
    title: "Blockchain MLM Software",
    decs: "A blockchain-based MLM Software brings credibility and relief among the platform users. This Blockchain MLM Application Development Services is reliable, transparent in nature, entitles vast protocols; which ensures for the intense safety and security. It is guaranteed that Crypto-based MLM Software ensures security and profitability in MLM companies. ",
  },
  {
    num: "7",
    url: "/solana-token-development",
    img: "/img/solana-mlm-software.webp",
    title: "Solana MLM Software",
    decs: (
      <p>
        Building Smart Contracts on SOL helps the businesses to expand their
        user-base.{" "}
        <a
          href="/solana-blockchain-development-company"
          className="text-blue-500"
        >
          Solana blockchain-based Smart Contract MLM Development{" "}
        </a>{" "}
        establishes trust among the users for the dedicated platform. Comfygen
        promises to build the platform with high-level security.
      </p>
    ),
  },
  {
    num: "8",
    url: "/polygon-blockchain-development",
    img: "/img/polygon-mlm-software.webp",
    title: "Polygon MLM Software",
    decs: (
      <p>
        Smart Contract Based MLM Software on Polygon development services is
        entirely based on an unhackable and multi-tested MLM Platform. It is a
        stable{" "}
        <a href="/polygon-blockchain-development" className="text-blue-500">
          Polygon Blockchain MLM Software Development Solution
        </a>{" "}
        that ensures 100% transparent and trustable platform guarantees for 10x
        quicker MLM Software. It is designed on the basis of user-centric
        measurements with seamless{" "}
        <a href="/web-design" className="text-blue-500">
          UX/UI
        </a>{" "}
        .
      </p>
    ),
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Best Crypto MLM Software Development Company In India & The USA
        </title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/cryptocurrency-mlm-software-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Crypto MLM Software Development Company In India &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is Leading cryptocurrency MLM Software Development company In India & The USA. We offer white label blockchain based bitcoin mlm software on tron, ethereum, BSC, Matic and SOL. Contact us today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/cryptocurrency-mlm-software-development"
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

        <meta
          name="description"
          content="Comfygen is Leading cryptocurrency MLM Software Development company In India & The USA. We offer white label blockchain based bitcoin mlm software on tron, ethereum, BSC, Matic and SOL. Contact us today!"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract Based MLM Software Development | Bitcoin MLM software | Comfygen Private Limited"
        />
        <meta
          property="og:facebook_description"
          content="We are a leading Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract-Based MLM Software Development | Bitcoin MLM software development company from India for your business."
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Crypto MLM Software development company in the USA, the UK, and India | We provide white-label blockchain-based Crypto MLM software solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is the No. 1 best cryptocurrency mlm software development company in India offer smart contract-based crypto mlm software on Tron, Ethereum, BSC, Matic, and SOL services to startups and dealings Worldwide"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Cryptocurrency MLM Software Development Industry"
        />
        <meta
          name="summary"
          content="Comfygen is the Leading World-class Cryptocurrency MLM Software Development Company in India, USA."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cryptocurrency MLM Software Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Cryptocurrency MLM Software Development Company"
          content="Comfygen is a leading White label Bitcoin MLM Software Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Cryptocurrency MLM Software Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Cryptocurrency MLM Software Development Firm in India"
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
          content="Cryptocurrency MLM Software Development Services Provider"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
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
                heading="Cryptocurrency MLM Software Development Company"
                ptag="Comfygen is a leading Cryptocurrency MLM Software Development Company In India & The USA, builds reliable and standardized bitcoin on the technologies, such as Trone MLM Software Development, Ethereum MLM Software Development, Solana MLM Software Development, Binance MLM Software Development and Polygon blockchain MLM Software Development with highly secured mechanisms used. Our Crypto MLM Software enables for tamper-proof calculations and automated transactions without any human-errors made in the backend functions. Our expert cryptocurrency-based developers can efficiently manage the MLM business seamlessly."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/accelerate-yor-earning-with-blockchain-mlm-software-technology.webp"
                alt=" Accelerate Your Earnings with Blockchain MLM Software Technology "
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Accelerate Your Earnings with Blockchain Based MLM Software
                Development Technology
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Multi-Level Marketing is a source to boost up clientele
                  business to far beyond success. All you need to do is to
                  perform marketing strategically. The modernisation, new
                  technologies, latest trends, and unique marketing ways;
                  putting all together can expand the business with constant
                  productive actions. We are the one platform for all clients to
                  provide best white label blockchain based MLM software
                  development services, solutions with the integration of BTC
                  and ETH cryptocurrencies into your MLM businesses{" "}
                </p>
                <p className="text-base text-black text-justify">
                  MLM strategies are made to increase business productivity and
                  sales. The Crypto-based MLM Software Development Company is
                  making extraordinary turnovers with the help of cryptocurrency
                  integrations in their business model. These businesses are
                  building opportunities for the distributors to make regular
                  revenue according to their production basis.
                </p>
                <p className="text-base text-black text-justify">
                  {" "}
                  Do you want your business to take the chance of implementing
                  crypto-MLM Strategies? Comfygen is #No1 Crypto-based MLM
                  Software Development Company in India enabling the business to
                  gain maximum values with clarifications and transparency.{" "}
                </p>
              </div>
            </div>
          </section>
        </div>

        <ContactFromCenter />
        {/* services */}
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          <div className="space-y-6">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Smart Contract Based{" "}
                <span className="text-blue-600">
                  {" "}
                  Cryptocurrency MLM Software Development{" "}
                </span>{" "}
                Services
              </h2>
              <p className="text-base text-slate-800">
                Choose our sophisticated productive Smart Contract Based
                Cryptocurrency MLM Software Development Services to chase
                futuristic profitable business model
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.Services.map((elem) => {
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
                    <p
                      className="font-medium text-left text-black break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
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
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Types of<span className="text-blue-600"> MLM Software</span>{" "}
                  Development
                </h2>
                <p className="text-base text-slate-800">
                  Clients can select one certain MLM Software according to the
                  requirements. Select one from the displayed below
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {JSON_DATA.MLM.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="p-4 relative bg-slate-100 rounded-[17px] space-y-6 "
                    >
                      <div className="space-y-2">
                        <h3 className="text-lg  text-[#0E1F51] font-semibold group-hover:text-white">
                          {title}
                        </h3>
                        <div className="flex justify-start space-x-2">
                          <div className="w-10 h-1 rounded-full bg-blue-500 "></div>
                          <div className="w-6 h-1 rounded-full bg-blue-500 "></div>
                        </div>
                      </div>
                      <p className=" text-[#000000] group-hover:text-white/90">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Top - Tier Features of Cryptocurrency MLM Software Development
              </h2>
              <p className="text-base text-slate-800">
                To make your Crypto MLM Software agile and highly productive,
                must add some features shown right below by our expert expert
                blockchain developers-
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.CryptoFeatures.map((elem) => {
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
        <ModusSection
          Modus={JSON_DATA.Modus}
          ModusOperandi={JSON_DATA.ModusOperandi}
        />

        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Latest technologies Implementation in Crypto MLM Software
              </h2>
              <p className="text-base text-slate-800 text-center">
                Comfygen believes in building products that match currency
                market standards and tech trends. The blockchain developers
                urges to create something really impressive with futuristic
                approaches.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.LatestTechno.map((cryptomlmsoftware) => {
                return (
                  <div
                    key={cryptomlmsoftware.num}
                    className="border p-3 space-y-2 shadow transition-all hover:scale-105 duration-700 hover:bg-sky-100"
                  >
                    <Link
                      passHref={true}
                      href={cryptomlmsoftware.url}
                      className="space-y-2"
                    >
                      <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                        {cryptomlmsoftware.title}
                      </h3>
                      <p className="text-base text-slate-800">
                        {cryptomlmsoftware.decs}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <WhyChoose
          Whychoose={JSON_DATA.Whychoose}
          Bestchoice={JSON_DATA.Bestchoice}
        />

        <Cryptocurrency />

        <TalkExpert />
        <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lg:py-20 py-10 relative">
            <Image
              src="/img/hire-crypto-developers-to-develop-cutting-edge-mlm-software.webp"
              alt="Image Description"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              loading="lazy"
            />
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#000]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Crypto MLM Software Development Services"
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
