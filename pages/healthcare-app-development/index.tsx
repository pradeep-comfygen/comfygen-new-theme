import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/healthCare.json";
import { IoArrowRedo } from "react-icons/io5";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Tabs from "./components/Tabs";
import StickySidebar from "./components/StickySidebar";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
import { url } from "inspector";

const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
const GuidSectionhealthcare = dynamic(
  () => import("./components/GuidSectionhealthcare"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Best Healthcare App development company | Comfygen",
  url: "https://www.comfygen.com/healthcare-app-development",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen - Best Healthcare App Development Service Provider",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_/?hl=en",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const productSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Healthcare Mobile App Development Company - Medical Health App Development Service",
  image:
    "https://www.comfygen.com/img/we-are-the-healthcare-app-development-service-providers-evolving-healthcare-industry.webp",
  description:
    "Comfygen is a Leading custom healthcare app development company in India & the USA- Innovating digital health app development solutions for better patient care. Contact us for Hire top-notch healthcare app developers to reach your business goals faster.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1125",
  },
};

const areaServed = {
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
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/custom-healthcare-software-development-solution.webp"
        alt="Health Tracking"
        width={60}
        height={60}
      />
    ),
    title: "Custom Healthcare Software Development Solution",
    decs: "Custom healthcare app development solutions are proficient solutions to fulfill certain needs of healthcare app development service providers; such as automating some regular tasks to enhance efficiency and better patient care. No matter what the aim or the client’s organization, we will build the best custom medical software development services, solutions for streamlined healthcare outcomes.",
  },
  {
    num: "02",
    url: "/telemedicine-app-development",
    icon: (
      <Image
        src="/img/telemedicine-app-development-solution.webp"
        alt="Fix your Appointment"
        width={60}
        height={60}
      />
    ),
    title: "Telemedicine App Development Solution",
    decs: "We build telemedicine apps, enabling healthcare service providers to offer online consultations, treatments, and diagnoses. Also, integrating AI and ML in your software will improve the efficiency and accuracy of treatment along humongous databases. Using our advanced healthcare applications will allow physicians and doctors to communicate via catching eye-to-eye to improve patient content.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/chronic-disease-app-development-dolution.webp"
        alt="Video App Development Consultation"
        width={60}
        height={60}
      />
    ),
    title: "Chronic Disease App Development Solution",
    decs: "Now, doctors and patients can altogether handle their critical health conditions at home with the special chronic disease mHealth apps. Moreover, we can build an AI-based chronic disease application enabling doctors to have deep critical insights into patients resolving their problems in a few minutes while sitting in their comfort space.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/wellness-apps-development-solution.webp"
        alt="Patient’s Data Storage"
        width={60}
        height={60}
      />
    ),
    title: "Wellness Apps Development Solution",
    decs: "None is unaware of the wellness apps. Millions of users are easing and improving their lifestyles with such apps. We can build an app using some advancements in that; be it apps like Wellness App RTM. The app will allow physicians to track the non-physiological activities of patients to gain more info on what measures are impacting patient’s conditions and overall health.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/mhealth-apps-development-solution.webp"
        alt="Symptom-Checker (ai-Driven) "
        width={60}
        height={60}
      />
    ),
    title: "mHealth Apps Development Solution",
    decs: "We improve the collaboration between patients and doctors through our efficient and feature-enriched mHealth apps. Additionally, our healthcare app developers can integrate some advancements and tech trends; such as patient wellness, AI in apps, self-monitoring, BigData, Chatbots, etc to make it more engaging and workable. We have the expertise to make the mHealth app more feasible for real-time health condition tracking to ensure good health for our patients.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/medicine-billing-software-development-solution.webp"
        alt="Medication Reminders"
        width={60}
        height={60}
      />
    ),
    title: "Medicine Billing Software Development Solution",
    decs: "Comfygen can build great and intuitive medicine billing software, which saves lots of time and even the cost of not paying other third parties. We have the expertise to add extra features and design with some custom ideas to make the billing process much easier. Also, the automation through billing software will make things better and allow us to focus on other important things. .",
  },
  {
    num: "07",
    url: "/laboratory-app-development",
    icon: (
      <Image
        src="/img/laboratory-information-management-system.webp"
        alt="Health Tracking"
        width={60}
        height={60}
      />
    ),
    title: "Laboratory Information Management System (LIMS)",
    decs: "Depending on the size of the lab and their specializations, we build a healthcare applications and software solutions for information management as part of our healthcare solution development services. We, as a leading healthcare app development firm, create scalable and flexible LIMS systems to monitor laboratory storage and inventory, data integrity, security, and protocol executions.",
  },
  {
    num: "08",
    url: "/pharmacy-app-development",
    icon: (
      <Image
        src="/img/pharmacy-management-system-development-solution.webp"
        alt="Fix your Appointment"
        width={60}
        height={60}
      />
    ),
    title: "Pharmacy Management System Development Solution",
    decs: "It is tough to manage a pharmacy, but with the Pharmacy Management System that’s possible. Our pharma software will track orders placed, inventory left, what are the sales, and many other things. These software are enough to manage the whole pharmacy operations with no hassle. Moreover, support the real-time communication with the software to manage things well. ",
  },
  {
    num: "09",
    icon: (
      <Image
        src="/img/wearable-app-development-solution.webp"
        alt="Video App Development Consultation"
        width={60}
        height={60}
      />
    ),
    title: "Wearable App Development Solution",
    decs: "Well, it is not possible to visit doctors for every small health-related symptom. So here are our wearable apps, implemented with common yet advanced features to tell how the overall health is doing. Also, one can acknowledge their heart health, oxygen level, beats, fitness level, any allergies identified, etc. All traceable healthcare measures help in continuously improving the body's fitness levels. ",
  },
  {
    num: "10",
    url: "/doctor-appointment-app-development",
    icon: (
      <Image
        src="/img/doctor-appointment-booking-app-development-solution.webp"
        alt="Patient’s Data Storage"
        width={60}
        height={60}
      />
    ),
    title: "Doctor Appointment App Development Solution",
    decs: " Doctor Booking Apps enable patients to save their time and allow doctors to manage & streamline patients’ visits. We can add certain features; such as scheduling doctor visits based on a patient's time, medicine delivery at home, prescriptions and reports saved in the application, and voice & video conference calls. Our apps are fully beneficial to the purpose of doctors and patients;. They can streamline things to prevent hassles during the booking, visiting, and treatment process.",
  },
];
const Industry = [
  {
    src: "/img/finance-icon-img.webp",
    dec: "Finance",
    url: "/finance-app-development",
  },
  {
    src: "/HealthCare-Icon/arts-entertainment.png",
    dec: "Arts and Entertainment",
  },
  {
    src: "/HealthCare-Icon/automotive.png",
    dec: "Automotive",
  },

  {
    src: "/HealthCare-Icon/crypto&blockchain.png",
    dec: "Cryptocurrency and Blockchain",
    url: "/blockchain-development",
  },
  {
    src: "/HealthCare-Icon/ecommerce.png",
    dec: "E-commerce",
    url: "/e-commerce-app-development",
  },
  {
    src: "/HealthCare-Icon/education.png",
    dec: "Education",
    url: "/ca/education-app-development-company",
  },

  {
    src: "/img/communiaction.webp",
    dec: "Communiaction",
  },
  {
    src: "/HealthCare-Icon/foodandBeverage.png",
    dec: "Food and Beverage",
    url: "/food-delivery-app-development",
  },
  {
    src: "/HealthCare-Icon/govt.andPublicServices.png",
    dec: "Government and Public Services",
  },
  {
    src: "/HealthCare-Icon/Health.png",
    dec: "Health",
    url: "/healthcare-app-development",
  },
  {
    src: "/img/manufacturing-icon.webp",
    dec: "Manufacturing",
  },
  {
    src: "/img/transportation-icon.webp",
    dec: "Transportation",
    url: "/taxi-app-development-company",
  },
  {
    src: "/HealthCare-Icon/newsAndMedia.png",
    dec: "News and Media",
    url: "/news-application-development",
  },
  {
    src: "/HealthCare-Icon/realEstate.png",
    dec: "Real Estate",
  },
  {
    src: "/HealthCare-Icon/sportsAndFitness.png",
    dec: "Sports and Fitness",
  },
  {
    src: "/HealthCare-Icon/supplyChainAndLogistics.png",
    dec: "Supply Chain and Logistics",
  },

  {
    src: "/HealthCare-Icon/Travel.png",
    dec: "Travel and Hospitality",
  },
];

export default function Mobile(props) {
  let { initialData } = props;
  let {
    Frequently,
    AppService,
    Hire,
    myList,
    Compliance,
    Streamlined,
    Integrate,
    High1,
    mHealth,
    
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Best Custom Healthcare App Development Company In India & The USA |
          Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a Leading Best custom Healthcare App Development Company In India & The USA - Innovating digital and custom healthcare app development services for better patient care. Contact us for Hire top-notch healthcare mobile app developers to reach your business goals faster."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/healthcare-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Optimizing Digital Health Experiences: Comfygen is best Healthcare Mobile App Development Expertise"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen custom healthcare mobile app development expertise focuses on optimizing digital health app development services experiences through advanced mobile app development services, solutions. We leverage technology to bridge the gap between healthcare app development service providers and patients, fostering enhanced communication,data-driven insights, and improved care outcomes."
        />
        <meta
          property="og:twitter_title"
          content="Healthcare Mobile App Development Services Innovation: Hire Top-Notch Healthcare App Developers in the United States at Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen empowers healthcare Mobile app development company in India & the USA innovation by offering top-notch healthcare mobile app development services. Our dedicated team of healthcare app developers combines healthcare expertise with technical prowess to build customized mobile app development that align with your business goals, enhancing patient care and operational efficiency."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content="Top rated Healthcare App & Software Development Services"
        />
        <meta
          name="summary"
          content="Through our healthcare software development services, we prioritize quality to deliver robust mobile infrastructure tailored for both healthcare providers and patients, ensuring seamless integration and optimal functionality."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Healthcare Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Best Healthcare Mobile App Development Services"
          content="Comfygen, a prominent healthcare mobile app development company in India & the USA, is at the forefront of revolutionizing patient care through cutting-edge digital health app development solutions. Our innovative approach enhances patient engagement, streamlines healthcare operations, and delivers superior care experiences."
        />
        <meta
          name="category"
          content="Patient Care: Healthcare Mobile App Development Services, Solutions by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Healthcare dedicated mobile app developers in India - Best healthcare app developers in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Healthcare Mobile Application Programmers India & USA | offshore healthcare software Programmers"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServed) }}
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-10">
              <HeroSectionForm
                heading="Custom Healthcare App Development Company"
                ptag="We are a highly qualitative and reliable custom healthcare app development service that develops mHealth apps and telemedicine solutions for startups, SMEs, and large-scale enterprises. Our mHealth app solutions empower healthcare professionals and patients by offering custom healthcare software development services. Our healthcare mobile app developers are taking leverage from cutting-edge and futuristic technologies with some dynamic impactful changes."
                ptag2="We build end-to-end healthcare solutions like apps like Practo, Doctolib, Netmeds, etc. We are proud to have been recognized as a top-notch healthcare app development company in India, with a 4.8/5 rating on Clutch and Good Firm. Get a free consultation to see how a custom healthcare app development services and solutions can transform your organization. Let's connect and conceptualize your development journey with us.
                "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>
        <AdviceSection
          heading="mHealth App Development Revolutionising Healthcare Industry"
          ptag="We are the best healthcare app development company in India, building custom medical apps to provide efficient custom and whitelabel healthcare app development services to patients. Our approach and technical advancements have helped healthcare businesses lead improved daily operations and offer smooth patient care services."
          ptag1="Comfygen is the best custom healthcare app development company in India, enabling the industry to unlock potential opportunities with vast expansions. Our Application and software development company is the solution for all healthcare organizations and patients, and shaping a new era. We are trying to bring concurrent revolutions in the segment, and evolving the way of providing services and treatments."
          ptag2="Do you want to build your own mHealth apps? Connect our trusted healthcare software development company. We will provide you with impressive mHealth app development services and solutions fixing loopholes and generating more revenue into the business."
          imgSrc="/img/we-are-the-healthcare-app-development-service-providers-evolving-healthcare-industry.webp"
          imgW={700}
          imgH={700}
          altTag="healthcare mobile app development company"
        />

        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:py-16 py-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
            <div>
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                We Are The Healthcare App Development Service Providers
              </h2>
              <p className="text-base">
                Traditional hospital management software companies have always
                been tedious. Comfygen is your go-to place to build efficient
                mHealth applications; be it appointment management,{" "}
                <a
                  href="/medicine-delivery-app-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  on demand medicine delivery app development
                </a>
                , health monitoring apps, wearable mHealth apps, or any other to
                improve the regular operations at low cost in your healthcare
                business.
              </p>
              <p className="text-base">
                We have expert{" "}
                <a
                  href="/hire-mobile-app-developer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  healthcare mobile app developers
                </a>{" "}
                to build medical apps leveraging their business to streamline
                operations, track every activity, and provide a seamless user
                experience. No matter what the Mobile app development challenges
                or complexities are, we can build custom healthcare app
                development ideas into reality after having years of experience
                to balance the organizational workflow. Above all, we are
                stepping along the{" "}
                <a
                  href="https://www.comfygen.com/blog/trends-in-healthcare-app-development/"
                  className="text-blue-600 font-bold hover:underline"
                >
                  modern mHealth app trends
                </a>{" "}
                and integrating technologies such as; BigData Development, IoT
                Development, and Blockchain Development solutions in apps to
                make them more secure and reliable.
              </p>
              <p>
                If you have any plans regarding mHealth app development,{" "}
                <a href="/quote" className="text-blue-600">
                  consult with our development team
                </a>{" "}
                . We will share proficient solution ideas to benefit your
                business with more growth.
              </p>
              <div className="flex justify-start items-start mt-5"></div>
            </div>
            <div>
              <img
                width={550}
                className="rounded-[10px] flex justify-end"
                src="/img/we-are-the-healthcare-app-development-service-providers.svg"
                alt="We Are The Healthcare App Development Service Providers Evolving Healthcare Industry"
              />
            </div>
          </div>
        </div>
        <ContactFromCenter />
        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14">
            <div className="space-y-4 text-center col-span-3">
              <h2 className="text-4xl font-bold text-center text-[#0E1F51]">
                Healthcare App Development Services to Acquire
              </h2>
              <p className="text-base text-slate-800 text-center ">
                We can provide you with different custom healthcare app
                development services based on clientele requirements and their
                business needs. Also, the dedicated development team enables
                using modern technologies and solid methods to bring prompt
                results from our mHealth app development solutions:
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
              {AppService.map((elem) => {
                const { title, img, decs, num, url, urlLink } = elem;
                return (
                  <div
                    key={num}
                    className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group transition-all duration-700 ease-in-out"
                  >
                    <div className="flex items-center m-auto justify-center w-20 h-20 p-2 text-xl font-semibold bg-[#FFf] border border-[#00000017] rounded-full">
                      <Image
                        width={50}
                        height={50}
                        src={img}
                        alt={title}
                        title={title}
                        className=""
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51]  transition-all duration-200 text-center">
                        <a href={urlLink}>{title}</a>
                      </h3>
                      <p
                        className="font-medium text-center text-black  break-all transition duration-200 ease-in-out"
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-16 bg-[#F8F9FE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]">
                  Healthcare App Development Solutions We Build{" "}
                </h2>
                <p className="text-base text-slate-800">
                  Our healthcare app development solutions enable the medical
                  industry to prevent disruptions and grant secured &
                  streamlined healthcare. Explore the revolutions to find out
                  new possible successes in your organization.{" "}
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3  grid-cols-1 xl:gap-10">
                {Arena.map((elem) => {
                  const { title, icon, decs, num, url } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                      url={url}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-8">
          <div className="flex flex-wrap 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 bg-[#DBEAFE] p-12 rounded-[16px]">
            <div>
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                Custom Healthcare Solutions Based on Ideas
              </h2>
              <p>
                Our healthcare software development solutions services do not
                end here. We have a development team to cater to custom
                healthcare app development services depending upon clientele and
                organization requirements. We can bring seamless processes into
                the systems with other kinds of apps; such as clinical
                assistance apps, drug inventory tracking software, medical
                research apps, symptom checker apps, etc.{" "}
              </p>
              <p>
                Consulting with us is your first step, and we take charge of
                building super-efficient healthcare app development solutions to
                fulfill the needs of the organization
              </p>
              <div className="pt-8">
                <Link href="/contact-us" passHref={true}>
                  <button
                    type="button"
                    className="rounded-full border-2 border-[#000] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-[#000] transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#000]  hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Get in touch now.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 lg:py-16 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Features to Include in Healthcare App Solutions
                </h2>
                <p className="text-base text-slate-800">
                  Comfygen is your trusted healthcare app development company in
                  the USA, that promises to make the applications highly secure,
                  performing, and problem-solving. We streamlined and automate
                  the process by implementing certain features in the healthcare
                  software development solutions:
                </p>
              </div>
              <div className="grid gap-10 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-10 ">
                {mHealth.map((elem) => {
                  const { title, img, num } = elem;
                  return (
                    <div
                      key={num}
                      className="bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start"
                    >
                      <Image src={img} alt={title} width={60} height={60} />
                      <h3 className="text-2xl font-extrabold text-black">
                        {" "}
                        {title}
                      </h3>
                      <p
                        className="leading-snug text-black"
                        dangerouslySetInnerHTML={{ __html: elem.decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <Tabs />

        <section
          className="bg-center bg-no-repeat bg-cover bg-fixed"
          style={{ backgroundImage: `url("/img/healthcare-bg.webp")` }}
        >
          <div className="py-16 bg-[#DBEAFE]/90">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">
                    Be Ready to Access Compliance Friendly Healthcare App
                    Solutions
                  </h2>
                  <p className="text-base text-slate-800">
                    Before building healthcare app development solutions, the
                    most imperative prerequisite is to follow the compliances.
                    While developing Healthcare medical software development
                    solutions, it is crucial to adhere to various regulations
                    and guidelines to ensure the safety and security of user
                    data and compliance with industry standards. You can always
                    rely on us to ensure that your product complies with all
                    applicable laws and industry standards. Comfygen knows about
                    it, which is why we prioritize building mHealth app
                    development services and solutions following all the
                    compliances; such as:
                  </p>
                </div>
                <div className="grid gap-8 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-8 ">
                  {Compliance.map((elem) => {
                    const { title, decs, img } = elem;
                    return (
                      <div
                        key={img}
                        className="p-6 relative bg-slate-100 rounded-[17px]"
                      >
                        <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center text-[40px] font-bold text-blue-600">
                          <img className="w-14 h-14" src={img} alt="" />
                        </div>
                        <div>
                          <h3 className="text-xl text-[#0E1F51] font-bold group-hover:text-white text-start">
                            {title}
                          </h3>
                          <p
                            className="pt-1 text-start"
                            dangerouslySetInnerHTML={{ __html: decs }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"SCHEDULE A CALL"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-8 bg-[#F6F5F5]  ">
          <h2 className="text-3xl py-4 lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#000]">
            Our Portfolio for Healthcare App Development
          </h2>
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 border-2 border-[#fff] bg-[#6896AF] p-10 rounded-[20px]">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
              <div className="lg:col-span-3">
                <div className="flex">
                  <img
                    width={400}
                    className="mx-auto"
                    src="img/healthSphere-innovations.webp"
                    alt=""
                  />
                </div>
                <p className="text-base text-white">
                  HealExcella is a current healthcare application designed to
                  streamline affected person management and enhance get right of
                  entry to to healthcare services. The app serves as a complete
                  platform where customers can schedule appointments, consult
                  with healthcare professionals, manage their medical records,
                  and receive personalized health insights. Tailored to satisfy
                  the desires of both patients and healthcare providers,
                  HealExcella is focused on improving first-class of care whilst
                  making sure a continuing user experience.
                </p>
              </div>
              <div className="bg-[#024765] py-10 px-4 rounded-lg">
                <div>
                  <div className="bg-white  p-4 rounded-lg">
                    <h2 className="text-base pb-2">Technology Used</h2>
                    <div className="flex lg:gap-6 justify-start ">
                      <img
                        className="w-14 h-14"
                        src="/img/android-icon.webp"
                        alt=""
                      />
                      <img
                        className="w-14 h-14"
                        src="/img/ios-icon-img.webp"
                        alt=""
                      />
                      <img
                        className="w-12 h-14"
                        src="/img/node-js-icon-img.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-base text-white pb-2">
                    Key Features of Our Doctor Appointment App
                  </h2>
                  <ul className="text-white">
                    <li className="text-base font-normal">
                      1. Appointment Scheduling:{" "}
                    </li>
                    <li className="text-base font-normal">2. Telemedicine: </li>
                    <li className="text-base font-normal">
                      3. Electronic Health Records (EHR):
                    </li>
                    <li className="text-base font-normal">
                      4. Personalized Health Insights:
                    </li>
                    <li className="text-base font-normal">
                      5. Prescription Management:{" "}
                    </li>
                    <li className="text-base font-normal">
                      6. Multi-language Support:
                    </li>
                    <li className="text-base font-normal">
                      7. Push Notifications:{" "}
                    </li>
                  </ul>
                  <div className="flex justify-start w-full items-center ">
                    <a href="/contact-us" className="mt-5">
                      <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                        Get a Free Demo
                      </button>
                    </a>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-8">
          <div className="">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">
                    Streamlined Healthcare App Development Process We Follow
                  </h2>
                  <p className="text-base text-slate-800">
                    Comfygen never fails in serving clients with the excellent
                    and agile Healthcare App development services and solutions.
                    We are known to be the{" "}
                    <a
                      href="/healthcare-app-development"
                      className="text-blue-500"
                    >
                      {" "}
                      best healthcare app development agency in India
                    </a>{" "}
                    for providing a streamlined process of development with no
                    hassle and mistakes. Know our sophisticated process of
                    mHealth app development process:
                  </p>
                </div>
                <div className="grid gap-8 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-8 ">
                  {Streamlined.map((elem) => {
                    const { title, decs, img } = elem;
                    return (
                      <div
                        key={img}
                        className="p-10 relative  border border-[#0000004b] rounded-[17px]"
                      >
                        <div className="mb-4">
                          <img className="w-14 h-14" src={img} alt="" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-xl text-[#0E1F51] font-bold group-hover:text-white text-start">
                            {title}
                          </h3>
                          <p
                            className="pt-1 text-start"
                            dangerouslySetInnerHTML={{ __html: decs }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"SCHEDULE A CALL"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] lg:py-16 py-8">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <h2 className="text-4xl font-bold text-[#000] text-start border-b-4 pb-3 ">
              INDUSTRY VERTICALS
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
              {Industry.map((item, index) => (
                <a href={item.url} key={index}>
                  <div className="space-y-2 bg-[#ECEDFE] border text-center p-6 rounded-lg">
                    <img
                      className="flex justify-center mx-auto w-20 h-20"
                      src={item.src}
                      alt={item.dec}
                    />
                    <h3 className="lg:text-2xl text-base font-normal">
                      {item.dec}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* <section className='lg:py-16 py-8 bg-[#0E1F51]'>
          <div className='flex flex-wrap 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 bg-[#F3F4FB] py-4 px-10 rounded-[16px]'>
            <div className='grid grid-cols-3 max-auto gap-8 items-center'>
              <div className='col-span-2 '>
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]">Technology Used for Healthcare App Development</h2>
                <p>Comfygen provides cutting-edge healthcare app development services, and solutions, where we embark on our healthcare software development with the best tech-stacks to make it globally approachable. Some technologies are right here to let our clients know where they are heading: </p>
                <div className="pt-8">
                  <Link href="/contact-us" passHref={true}>
                    <button type="button"
                      className="rounded-full border-2 border-[#000] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-[#000] transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#000]  hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                      data-te-ripple-init data-te-ripple-color="light">
                      Get in touch now.
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="/img/technology-used.svg" alt="best healthcare app development company" />
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-4 lg:py-16  bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Trending Technologies We Integrate in mHealth Apps
                </h2>
                <p className="text-base text-slate-800">
                  Creating a successful mHealth app requires utilizing trending
                  technologies to make it market-compatible and competitive. We
                  use Big data, AR/VR, AI/ML, Blockchain, IoMT, and more to
                  build impressive and engaging mHealth applications.
                </p>
              </div>
              <div className="grid gap-8 py-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:gap-8 ">
                {High1.map((elem) => {
                  const { title, decs, num, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-6 space-y-4 relative bg-slate-100 cursor-pointer rounded-[17px]"
                    >
                      <div className="w-20 h-20 bg-[#ffffff] rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-blue-600">
                        {num}
                      </div>
                      <div className="space-y-2">
                        <a href={url} className="hover:underline">
                          <h3 className="text-lg text-[#0E1F51] font-semibold group-hover:text-white text-start">
                            {title}
                          </h3>
                        </a>
                        <div className="flex justify-start space-x-4">
                          <div className="w-10 h-1 bg-blue-500 rounded-full "></div>
                          <div className="w-6 h-1 bg-blue-500 rounded-full "></div>
                        </div>
                        <p
                          className="text-start "
                          dangerouslySetInnerHTML={{ __html: decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Get A Free Consultation"}
                />
              </div>
            </div>
          </div>
        </section>

        <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>

        <section className="bg-center bg-white bg-cover bg-fixed">
          <div className="py-16">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">
                    Better Care with Healthcare App Development Services from
                    Comfygen{" "}
                  </h2>
                  <p className="text-base text-slate-800">
                    Comfygen has the experience and expertise and follows a
                    committed streamlined healthcare app development process to
                    offer excellence in services and solutions. With our
                    cutting-edge technologies and expert methods; we create a
                    competitive mHealth app to stand out from the crowd.{" "}
                  </p>
                </div>
                <div className="grid gap-8 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-8 ">
                  {Integrate.map((elem) => {
                    const { title, decs, img } = elem;
                    return (
                      <div
                        key={img}
                        className="p-6 relative bg-slate-100 rounded-[17px]"
                      >
                        <Link passHref={true} href={"/"} className="space-y-4">
                          <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center text-[40px] font-bold text-blue-600">
                            <img className="w-14 h-14" src={img} alt="" />
                          </div>
                          <div>
                            <h3 className="text-xl text-[#0E1F51] font-bold group-hover:text-white text-start">
                              {title}
                            </h3>
                            <p
                              className="pt-1 text-start"
                              dangerouslySetInnerHTML={{ __html: decs }}
                            ></p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"SCHEDULE A CALL"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection faqData={Frequently} title="" />
        <GuidSectionhealthcare />
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
