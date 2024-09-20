import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/mobile.json";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("./components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
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

const Whycomfygen = [
  {
    num: "1",
    title: "Android App Development",
    desc: (
      <p>
        {" "}
        We build super-efficient mobile apps that cater to your business needs
        enriched with features of{" "}
        <Link
          href="/android-app-development"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          {" "}
          Android App Development Services.
        </Link>
        .
      </p>
    ),
  },
  {
    num: "2",
    title: "Kotlin App Development",
    desc: (
      <p>
        We develop the best mobile application development services, solutions
        with user-friendly features tailored to customer’s business needs with
        Kotlin App Development Services.{" "}
      </p>
    ),
  },
  {
    num: "3",
    title: "React Native App Development ",
    desc: (
      <p>
        Our App developers are skilled with{" "}
        <Link
          href="/react-native-development"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          {" "}
          React Native App Development Services
        </Link>
        . , who’s developers super experience apps in lesser time with
        cost-effective measures for both platforms.
      </p>
    ),
  },
  {
    num: "4",
    title: "Flutter App Development",
    desc: (
      <p>
        We develop widget friendly{" "}
        <Link
          href="/flutter-development-company"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          mobile applications
        </Link>
        . , which are interactive enough to make it user’s retentive.{" "}
      </p>
    ),
  },
  {
    num: "5",
    title: "Augmented reality (AR) and Virtual Reality (VR) ",
    desc: (
      <p>
        ,Our mobile application development services are developed with enriched
        features of AR App Development Services and VR App Development Services,
        which enable the users to gain vast friendly experience and improved
        functionalities.{" "}
      </p>
    ),
  },
  {
    num: "6",
    title: "iOS App Development",
    desc: (
      <p>
        We have a full-stack mobile app development team, which builds
        interactive{" "}
        <Link
          href="/ios-app-development"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          iOS App Development Services
        </Link>
        ., Solutions with scalable and reliable results.{" "}
      </p>
    ),
  },
  {
    num: "7",
    title: "Ionic App Development",
    desc: (
      <p>
        To build highly performing apps with cost-effective cross-platform
        technologies basis using the advanced Ionic App Development Services.{" "}
      </p>
    ),
  },
  {
    num: "8",
    url: "/iot-development-company",
    title: "IoT App Development",
    desc: (
      <p>
        Our mobile app development solution team builds smart mobile
        applications based on{" "}
        <Link
          href="/ios-app-development"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          IoT development services{" "}
        </Link>
        ., solutions, which helps the users smoothly navigate every command to
        their devices.{" "}
      </p>
    ),
  },
  {
    num: "9",
    title: "Xamarin App Development",
    desc: (
      <p>
        Comfygen has extensively experienced app developers, who are capable of
        building super-efficient applications that cater to clientele needs.
      </p>
    ),
  },
];

const AppService = [
  {
    num: "01",
    img: "/img/custom-native-mobile-apps.webp",
    title: "Custom Native Mobile App Development Services ",
    decs: (
      <p>
        {" "}
        Our app developers are very creative, who are experienced to build
        innovative mobile applications. We have a team to work on clients'
        custom needs and build native apps with flawless{" "}
        <Link
          href="/web-design"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          Ui/Ux Development.
        </Link>
        .Be ready for better performance and high security, and gain reliable
        user’s retention to the mobile apps.{" "}
      </p>
    ),
  },
  {
    num: "02",
    img: "/img/cross-platform-app-development.webp",
    title: "Cross-Platform App Development",
    decs: (
      <p>
        We have well-versed app developers, who can build top-notch mobile
        applications functions at multiple operating systems. Our skilled app
        developers have the capabilities to create{" "}
        <Link
          href="/hybrid-mobile-app-development"
          passHref={true}
          className="text-blue-600 font-bold hover:underline"
        >
          Hybrid App Development Services
        </Link>
        . for iOS App Development and Android App Development with the
        implementation of new technologies.{" "}
      </p>
    ),
  },
  {
    num: "03",
    url: "",
    img: "/img/application-testing.webp",
    title: "Application Testing ",
    decs: (
      <p>
        Our dedicated mobile app developers for hire ensures to deliver the
        application with flawless user interface easily navigational on
        different devices. We test the application on different screen sizes, at
        different platforms, technically strong, test for the bugs, highly
        compatible, fly functional, and reliable for the use.
      </p>
    ),
  },
  {
    num: "04",
    img: "/img/mobile-app-support-and-maintenance1.webp",
    title: "Mobile App Support and Maintenance ",
    decs: (
      <p>
        We deliver post deployment services, in which our app development
        support and maintenance team ensures to increase the user’s retention,
        and perform the technologies according to the industry standards.{" "}
      </p>
    ),
  },
];

const schema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Best Mobile App Developer Company, Services | Comfygen",
  url: "https://www.comfygen.com/hire-mobile-app-developer",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const Organization = {
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

const product = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Mobile App Development Agency - Mobile Application Development Company",
  image:
    "https://demov.comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Hiring app developers with top-notch skills in Native and Cross-platform mobile development technologies is crucial for creating high-quality mobile applications that deliver on their intended purpose. Comfygen, as a reputable and experienced app development company, offers a range of mobile app development services, including cross-platform and native app development, to help businesses acquire a competitive edge in the market. By choosing to hire app developers from Comfygen, you can rest assured that your project will be in safe hands. Our team of certified and full-stack mobile app developers has extensive experience in developing high-performance mobile applications using the latest technologies and trends. We take a value-led and user-focused approach to mobile application development, ensuring that your app meets the unique needs and preferences of your target audience.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "51",
  },
};

const Organizationschema = {
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
};
const WebsiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Hire Dedicated Mobile App Developer | Hire Dedicated App Engineers Team in the USA Comfygen",
  url: "https://www.comfygen.com/hire-mobile-app-developer",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Hire Mobile App Developers | Offshore App Programmers | Comfygen
        </title>

        <meta
          property="og:title"
          content="Hire Mobile App Developers | Offshore App Programmers | Comfygen"
        />
        <meta
          name="description"
          content="Hire dedicated mobile app developers / programmers from India for creating secure, scalable mobile applications for all devices. Hire App Programmers for your project. Contact us today to get started!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-mobile-app-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile Application Development for Your Business | Hire Mobile Application Developers"
        />
        <meta
          property="og:facebook_description"
          content="Our certified Mobile app developers at Comfygen are the best app developers / programmers for startups, Enterprises the various industry. Hire mobile App Developers in India, In the USA from Comfygen on a monthly & Hourly basis from leading Mobile app development company in India & the USA."
        />
        <meta
          property="og:twitter_title"
          content="Metaverse Development Company in the United States"
        />
        <meta
          property="og:twitter_description"
          content="Our certified hire dedicated mobile app developers at Comfygen are the top mobile app developers / programmers for startups, Enterprises the various industry. Hire mobile App Developers in India, In the USA from Comfygen on a monthly & Hourly basis from leading Mobile app development company in India & the USA."
        />
        <meta property="schema:type" content="Website" />
        <meta property="schema:type" content="Website" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Top rated hire dedicated mobile app developers"
        />
        <meta
          name="summary"
          content="Advantages of hiring dedicated mobile app developers: Expertise, Flexibility, Cost-effectiveness, Better communication, Greater accountability, Access to a wider talent pool, Improved scalability, Increased security, Better time zone compatibility, More control over IP etc.."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hire Mobile App Developer"
          content="By hiring a dedicated application developer, you can ensure that your application is designed with the user in mind, resulting in a more enjoyable and effective user experience. Expert devs = higher quality apps;
        Customization = tailored to your audience; Better UX = higher user engagement"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire dedicated mobile app developers in India - Hire Mobile app developer in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Mobile Application Developers India | Offshore Application Programmers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Organizationschema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Hire Mobile App Developers"
                ptag="Comfygen has the top-tier mobile app development engineers with 15+ extensive years of experience. We have an established and master-mind skilled team able to create futuristic mobile applications with the use of modernized technologies. Our agenda is very simple yet most significant; “Satisfy the clients with robust applications, and retention of users with great experience.””"
                ptag1="Hurry up, and hire mobile app developers with vast knowledge and creativity at Comfygen, and adhere to the valuable and worthy mobile app development service experience. We work on the tailored needs of clients meeting client’s and all their business requirements."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>
        <AdviceSection
          heading="App Developers to Build Interactive Mobile Apps "
          ptag="Every mobile app developer at Comfygen is certified, and worked with many mobile app development projects in various domains. You do not have to think twice after we get your project in hand, because we keep complete transparency with agile mobile application development services offering. Our agenda is clear and ensures to deliver the highest quality application, which can rule in the marketplace with other competitors."
          ptag1="Our engineers breakthrough very smartly into the latest technologies, and build mobile applications really demanding and needy to users. We compose our agile development process and strategize apps in a way to make it seamlessly navigational to users. Comfygen is very dedicated to its app development services, solutions process for creating a powerful boost to your business and transforming into a brand. "
          imgSrc="/img/app-developers-to-build-interactive-mobile-apps.webp"
          imgW={564}
          imgH={559}
          altTag="App Developers to Build Interactive Mobile Apps"
        />
        <ContactFromCenter />

        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              <div className="space-y-4 text-center col-span-2 pt-20">
                <h2 className="text-4xl font-bold text-start text-[#0E1F51] ">
                  {" "}
                  <span className="text-[#BE5EBC]">
                    Mobile App Development
                  </span>{" "}
                  <br></br> Services to Offer{" "}
                </h2>
                <a href="https://www.comfygen.com/mobile-app-development">
                  <p className="text-base text-slate-800 text-start">
                    {" "}
                    which specializes in building super apps to match your
                    business requirements. We build any type of{" "}
                    <Link
                      href="/mobile-app-development"
                      passHref={true}
                      className="text-black font-bold hover:underline"
                    >
                      mobile applications{" "}
                    </Link>
                    . with smooth user-interface and easier navigations. What’s
                    the wait now? Access to our mobile app development services
                    to touch the top heights of the marketplace.{" "}
                  </p>
                </a>
              </div>

              {AppService.map((elem) => {
                const { title, img, decs, num, url } = elem;
                return (
                  <>
                    <div
                      key={num}
                      className="p-6 space-y-4 bg-white border rounded-xl  group hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] transition-all duration-700 ease-in-out"
                    >
                      <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#FFEDD5] group-hover:bg-white rounded-full">
                        <Image
                          width={30}
                          height={30}
                          src={img}
                          alt={title}
                          title={title}
                          className=""
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] group-hover:text-white transition-all duration-200 text-center">
                        {title}
                      </h3>
                      <p className="font-medium text-center text-black group-hover:text-white break-all transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <WhycomfygenSection Qa={JSON_DATA.Qa} Whycomfygen={Whycomfygen} />
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Do Businesses Need Mobile <br></br> Applications?
              </h2>
              <p className="text-base text-slate-800 md:text-center text-justify tracking-tight w-50">
                In the contemporary business landscape, mobile application
                development industry have become essential tools for companies
                to thrive and stay competitive. Here are six key reasons why
                businesses need mobile applications:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-3">
              {JSON_DATA.Plateform.map((elem) => {
                const { tittle, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className=" border-t-[8px] rounded	border-[#BA68C8]"
                  >
                    <a>
                      <div className="items-center text-center px-4 py-3 space-x-3 ">
                        <h3 className="text-lg mt-3 font-semibold text-black">
                          {tittle}
                        </h3>
                      </div>
                      <div className="">
                        <p className="s text-black text-center">{decs}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="/contact-us">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className="flex flex-col  mx-auto space-y-2">
              <h2 className="text-3xl lg:text-4xl text-center font-bold leading-[2rem] lg:leading-[3rem] text-[#000]">
                <span className="text-[#BA68C8] ">Process of</span> Mobile App
                Development
              </h2>
              <p className="text-black text-center">
                Know how our proficient IT Mobile App Developers process with
                our agile development:
              </p>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-1  xl:gap-8">
              <div>
                <div className={`${styles.roadmap} `}>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>1</div>
                    <div
                      className={`${styles.roamapConn} flex  item-center items-center `}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Idea Generation and Planning
                        </div>
                        The mobile app development agency process typically
                        begins with brainstorming and idea generation. Mobile
                        app developers and stakeholders collaborate to identify
                        the app's purpose, target audience, and key features.
                        Planning involves outlining the app's functionality,
                        user interface, and overall structure.
                      </div>
                      <div>
                        <img
                          src="/img/planning-and-ideation.webp"
                          alt="idea-generation-and-planning"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>2</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/planning-design.webp"
                        alt="idea-generation-and-planning"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Design and Prototyping:
                        </div>
                        Once the concept is defined, designers create wireframes
                        and prototypes to visualize the app's user interface
                        (UI) and user experience (UX). This phase focuses on
                        creating a design that is both aesthetically pleasing
                        and user-friendly, ensuring a seamless interaction for
                        the end-users.
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>3</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Development and Coding:
                        </div>
                        The actual coding of the mobile app takes place during
                        this phase. Developers use programming languages such as
                        Java development services (for Android app development)
                        or Swift development services (for iOS app development)
                        to build the mobile applications functionality. They
                        work on integrating features, implementing back-end
                        systems, and ensuring the app's compatibility with
                        various devices and screen sizes.
                      </div>
                      <img
                        src="/img/development-phase.webp"
                        alt=" Development"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>4</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/approach-testing.webp"
                        alt="Testing"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Testing:
                        </div>
                        Rigorous testing is crucial to identify and rectify
                        bugs, glitches, and usability issues. Quality Assurance
                        (QA) teams perform various tests, including
                        functionality testing, performance testing, and user
                        acceptance testing. This phase ensures that the app
                        meets the specified requirements and functions reliably
                        across different devices{" "}
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>5</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Deployment:
                        </div>
                        After successful testing, the mobile app development
                        services, solutions are ready for deployment. Our Mobile
                        app developers submit the application to the respective
                        app stores (e.g., Apple App Store, Google Play Store)
                        for review and approval. Once approved, the app becomes
                        available for download and installation by users.
                      </div>
                      <img
                        src="/img/Deployment-and-launch.webp"
                        alt="Deployment and launch"
                        width={150}
                        height={150}
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>6</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/maintenance-and-support1.webp"
                        alt="Maintenance and support"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Maintenance and Updates:
                        </div>
                        The mobile app development agency process doesn't end
                        with deployment. Continuous maintenance is essential to
                        address user feedback, fix any emerging issues, and
                        ensure compatibility with new devices or operating
                        system updates. Hire Mobile App Developers also release
                        periodic updates to introduce new features, enhance
                        performance, and address security vulnerabilities.
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Why is Comfygen the Right Platform to Hire{" "}
                <span className="text-blue-500"> Mobile App Developers?</span>
              </h2>
              <p className="text-base text-slate-800">
                Hiring mobile application developers from Comfygen will bring
                immense leverage to your business. We work on diverse verticals
                and build robust mobile application development service
                providers that cater to market standards and needs.
              </p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-3  xl:gap-8">
              {JSON_DATA.TechTrends.map((elem) => {
                const { title, stack, num, img } = elem;
                return (
                  <div key={num} className={`${styles.letter} space-y-4`}>
                    <Image
                      className="rounded-md flex items-center m-auto	 justify-center"
                      alt={img}
                      src={img}
                      height={50}
                      width={50}
                      loader={uploadcareLoader}
                      unoptimized={true}
                    />
                    <div className=" ">
                      <h3 className="text-[#0E1F51]  text-center text-xl font-bold">
                        {title}
                      </h3>
                    </div>
                    <div className=" text-center">
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
          </div>
        </section>

        <div className="grid gap-8 py-10 text-left lg:grid-cols-1 lg:gap-14  w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
          {JSON_DATA.NativeApp.map((portfolio) => {
            return (
              <>
                <div
                  key={portfolio.num}
                  className="border border-[#BE5EBC] shadow-sm shadow-[#16BDFA] flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center lg:space-x-10 space-x-0 lg:space-y-0 space-y-4"
                >
                  <div className="flex justify-center w-full md:justify-start">
                    <Image
                      className="rounded-md w-full"
                      title={portfolio.head}
                      alt={portfolio.head}
                      src={portfolio.img}
                      height={600}
                      width={600}
                      loader={uploadcareLoader}
                      unoptimized={true}
                    />
                  </div>
                  <div className="w-full space-y-[5px] text-left">
                    <div className="space-y-4">
                      <h3 className="text-[24px] lg:text-4xl font-bold text-black">
                        {portfolio.head}
                      </h3>
                      <p className="py-6 text-base font-light text-black">
                        {portfolio.para}{" "}
                      </p>
                    </div>
                    <div>
                      <Link
                        media="handheld"
                        href={portfolio.url}
                        passHref={true}
                      >
                        <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full  text-center hover:text-white  cursor-pointer w-fit group">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-20"></span>
                          <ImArrowUpRight2 />
                          <span>{portfolio.btn}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <TalkExpert />
        {/* <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div> */}
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
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
