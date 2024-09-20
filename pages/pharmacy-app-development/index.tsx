import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./pharmacyApp.json";
import styles from "./styles.module.css";
import Link from "next/link";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import HealthcarePortfolio from "../components/HealthcarePortfolio";
import AdviceSectionForPharmacy from "./components/AdviceSectionForPharmacy";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("./components/ServiceSection"), {
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
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});

export default function ClinicalApp(props: any) {
  let { initialData } = props;
  let {
    Frequently,
    OnDemandDoctor,
    WhyChoosed,
    Hire,
    myList,
    Services,
    Arena,
    TecnologisStack,
    timelineItems,
    Compliance,
  } = JSON_DATA;

  const portfolioData = {
    title: "Our Pharmacy App Development Portfolio",
    subtitle: "My Meds Pharma Care",
    description:
      "A cutting-edge application that offers users seamless and efficient pharmacy delivery, My Meds Pharma Care offers a seamless and efficient pharmacy delivery experience. Using blockchain technology, this iOS and Android app, developed with extensive experience in both native and hybrid development, enhances its capabilities. As a result of difficulties leaving their homes or accessing traditional pharmacies, the app is thoughtfully designed to meet the needs of those patients who may have difficulty obtaining essential medications.",
    buttonText: "Contact Us",
    buttonLink: "/contact-us",
    imageUrl: "/img/my-meds-pharma-care.svg",
    imageAlt: "pharmacy app development services",
  };

  return (
    <>
      <Head>
        <title>
          Best Pharmacy App Development Company In India and USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen as an online pharmacy app development company In India & The USA with secure, user-centric whitelabel medicine delivery app development solutions for medical stores, ensuring seamless integration and custom pharmacy delivery app development."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/pharmacy-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Online Pharmacy App Development Company In USA!"
        />
        <meta
          property="og:facebook_description"
          content="As the premier Pharmacy App Development Company in USA, Comfygen delivers top-notch Online Pharmacy App Development Services for both Android and iOS platforms. Our team of experts combines state-of-the-art software development with deep industry knowledge to create custom Pharmacy Apps that revolutionize patient care, streamline Pharmacy workflows and access healthcare services. Let Comfygen be your partner in shaping the future of digital healthcare solutions."
        />
        <meta
          property="og:title"
          content="Best Pharmacy App Development Company In India &  The USA"
        />
        <meta
          property="og:twitter_description"
          content="Discover top-notch Online Pharmacy App Development Services from Comfygen in USA for both Android and iOS platforms. Our expertise combines Pharmacy App Development and Pharmacy Software Development to revolutionize patient care and streamline healthcare services. Let us be your partner in shaping the future of digital healthcare solutions!"
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="robots"
          content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta
          name="abstract"
          content="Pharmacy App Development Company | Pharmacy App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch Pharmacy App Development Services in USA, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Pharmacy App to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Pharmacy App and Software Development Services & Solutions in USA! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand Pharmacy App Development Company in USA"
          content="Are you looking to hire the best Pharmacy App Development Agency in USA for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="Pharmacy App Development Company In India: Find Expert Pharmacy App and Software Developers for Pharmacy App and Software development services with Expertise in Android app development and iOS app development! We are providing you a better Pharmacy App Development Service in USA. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Pharmacy App."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Pharmacy App Design and User Experience company in India, USA - We builds unique online Pharmacy App for patients, doctors and healthcare providers, and individual doctors."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          name="og:country-name"
          content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta
          property="og:type"
          content="Hire Best Pharmacy HeroSectionFormApp Development Company USA | offshore Pharmacy App developer or Programmers"
        />
      </Head>

      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Pharmacy App Development Company"
                ptag="When it comes to creating a pharmacy app, it's essential to find a mobile app development company that understands the unique requirements of the healthcare industry. Comfygen stands out as a specialized developer for healthcare IT, excelling in both app and web development. With a notable presence on platforms like Practo, Lybrate, Netmeds, CVS Pharmacy, Capsule Pharmacy, PharmEasy as well as being featured on Clutch, GoodFirms, and recognized as a top app and web developer, Comfygen's expertise is widely acknowledged."
                ptag1="Their 15+ years of experience in the industry is backed by a team of skilled developers, well-versed in the latest tech trends. Comfygen has successfully built applications leveraging cutting-edge technologies such as AI/ML, Blockchain, IoT, AR/VR, and even emerging concepts like Metaverse and Generative AI. This wealth of experience and technical proficiency positions Comfygen as a go-to choice for those seeking a comprehensive and innovative solution for pharmacy app development."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <AdviceSectionForPharmacy
          heading="Best Pharmacy Delivery app Development Company"
          ptag="You can trust Comfygen to deliver outstanding pharmacy delivery app development solutions that drive success in the healthcare It industry. As a team of experienced healthcare app developers, we integrate Artificial Intelligence in the healthcare, <a href='https://www.comfygen.com/blog/machine-learning-in-healthcare/' class='text-blue-600'>Machine Learning in the healthcare</a> , and Blockchain security technologies in the healthcare to ensure your app is future-proof, innovative, and secure."
          ptag1="With expertise in Augmented Reality and Virtual Reality, we craft immersive experiences that set your medicine delivery app apart in the competitive market. Whether you're aiming to launch in the public health sector or expand your online pharmacy business, our scalable and feature-rich solutions are designed to meet your specific needs."
          imgSrc="/img/online-pharmacy-app-development-company.svg"
          imgW={1300}
          imgH={1300}
          altTag="pharmacy app development company"
        />

        <div className="py-10 lg:py-20 bg-gray-100">
          <section className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto lg:flex space-x-0 lg:space-x-10 md:space-y-0">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <div className="space-y-4">
                  <p className="text-xl font-light text-blue-600 ">
                    {props.head}{" "}
                  </p>
                  <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
                    Online Pharmacy App Development Company
                  </h2>
                </div>
                <p className="text-base text-black">
                  We are an innovative online pharmacy app development company
                  in India and USA with a successful record in delivering mobile
                  app development services, solutions for renowned pharma
                  companies and innovative startups. We have a team of 15+ years
                  experienced developers and designers. We are a renowned{" "}
                  <a
                    href="https://www.comfygen.com/"
                    className="text-blue-600 capitalize"
                  >
                    mobile app and web development company
                  </a>{" "}
                  with 400+ projects delivered, 315 satisfied clients.
                </p>
                <p className="text-base text-black">
                  We are committed to continuous innovation in the
                  pharmaceutical industry at Comfygen, as one of the leading
                  <a
                    href="https://www.comfygen.com/hire-mobile-app-developer"
                    className="text-blue-600 capitalize px-1"
                  >
                    pharmacy mobile app developers.
                  </a>
                  Our commitment to pushing the boundaries of online pharmacy
                  application development company specializing in healthcare IT
                  solutions, has enabled us to create cutting-edge products that
                  enhance the quality of life for our clients and the wider
                  population. With cutting-edge technology at our pharmacy app
                  development company, we are empowering lives through the power
                  of the internet.
                </p>
                <p className="text-base text-black">
                  You can use our pharmacy app development service, solutions to
                  improve the lives of your customers. We cater to different
                  types of pharmacy businesses such as single pharmacy stores,
                  chain of pharmacy stores and startups aiming to make a change.
                  Capitalize on our medicine delivery app development expertise
                  to integrate value-based features in pharmacy apps.
                </p>
                <p className="text-base text-black"></p>
                <p className="text-base text-black ">{props.ptag3}</p>
              </div>
            </div>
            <div className="flex justify-center 2xl:justify-start w-full lg:w-1/2 pb-10 lg:pb-0">
              <img
                className="max-w-[768px]"
                src="/img/online-pharmacy-app-development-company.webp"
              />
            </div>
          </section>
        </div>

        <ContactFromCenter />

        <section className=" lg:py-16 py-10 bg-[#223547]">
          <div className=" w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                A Pharmacy App Development Company Offers A Variety of Services
              </h2>
              <p className="text-base text-white">
                As a leading pharmacy app development company in India and the
                USA, Comfygen is your top choice for creating robust and
                seamless medicine delivery app development services on Android
                or iOS platform. We strive to deliver the best pharmacy
                application development services, offering unmatched speed,
                efficiency, and feature-rich solutions that ensure your medicine
                delivery app stands out.
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
              {TecnologisStack.map((omaha) => {
                return (
                  <div key={omaha.num} className="bg-white rounded-[20px] p-6">
                    <div className="bg-[#223547] w-20 h-20 rounded-lg p-2">
                      <img className="w-16 h-16" src={omaha.img} alt="" />
                    </div>
                    <h3 className="text-[#0E1F51] text-2xl font-bold mt-5">
                      <a href={omaha.urlLink}>{omaha.title}</a>
                    </h3>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{ __html: omaha.stack }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className=" bg-[#0F192E]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 space-y-6">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Revealing Our Online Pharmacy App Development Robust Features
              </h2>
              <p className="text-base text-white">
                We have specialized in the art of On-Demand Pharmacy App
                Development with the conviction to serve our clients with
                effective{" "}
                <a
                  href="https://www.comfygen.com/blog/pharmacy-app-development-features-benefits-process-and-cost/"
                  className="cursor-pointer text-blue-600"
                >
                  Online Pharmacy App Development Features.
                </a>{" "}
                With our years of experience, we have figured out the essential
                set of features that you would need in every e-pharmacy
                application to make it successful.
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {Services.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className={`${styles.letterr} 
                  p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group  group `}
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#fff] rounded-lg">
                      <Image
                        width={120}
                        height={120}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p
                      className="font-medium text-left text-white break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton
                url={"/quote"}
                title={"LET'S CONNECT TO GROW YOUR BUSINESS"}
              />
            </div>
          </div>
        </section>

        <HealthcarePortfolio
          title={portfolioData.title}
          subtitle={portfolioData.subtitle}
          description={portfolioData.description}
          buttonText={portfolioData.buttonText}
          buttonLink={portfolioData.buttonLink}
          imageUrl={portfolioData.imageUrl}
          imageAlt={portfolioData.imageAlt}
        />

        <section className="bg-[#0F192E] lg:py-16 py-8">
          <div className="py-10 w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:text-center mb-5">
              <h2 className=" text-[#fff] xl:text-4xl text-3xl w-70 font-bold xl:leading-[3rem] capitalize">
                Our Online Pharmacy App Development Process
              </h2>
              <p className="text-base text-white mb-5">
                We are an emerging competitor to top pharma app development
                agencies such as emedstore global pharma IT Company with the
                goal to achieve excellence in customer service. Our app
                developers have been consistently trying to enhance our
                development process with special attention to all stages of
                development.
              </p>
            </div>

            <div className="">
              <div className={`${styles.maintimeline}`}>
                {timelineItems.map((item, index) => (
                  <div key={index} className={`${styles.timeline}`}>
                    <div className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>
                        {item.year}
                      </span>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>{item.title}</h3>
                        <p
                          className={`${styles.description}`}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a href="https://api.whatsapp.com/send?phone=919587867258">
                <button className="shadow-2xl hover:scale-75 tranWe specialize in Healthcare IT Solutions to provide best pharmacy delivery apps with the help of customized pharmacy app development services approaches. Our consultants are reliable experts in the pharmaceutical and healthcare IT industry with in-depth awareness of latest technology trends. You can use our pharmacy app consulting services to determine the ideal course of action for developing your own online medicine delivery app development services, solutions. With the help of our pharmacy app consulting service, you can overcome the initial roadblocks in the app and web development process. Most important of all, our clients can leverage the mobile application consulting service by experts to discover optimal routes for success. sition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 lg:py-16 py-8">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 ">
            <div className="flex flex-col justify-center items-center mx-auto space-y-4">
              <h2 className="xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51] md:text-center text-start">
                Types of On-Demand Pharmacy App Development
              </h2>
              <p className="text-base text-slate-800 text-center">
                Working with our best pharmacy app development company in India,
                we give you the advantage of choosing between different types of
                on-demand pharmacy app development services. You can rely on us
                to create the ideal custom pharmacy app development according to
                your business goals and requirements.
              </p>
            </div>
            <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
              {OnDemandDoctor.map((doctor) => {
                return (
                  <div
                    key={doctor.num}
                    className="border p-8 space-y-2 shadow transition-all hover:scale-105 duration-700 bg-[#223547] rounded-tl-[30px] rounded-br-[30px]"
                  >
                    <h3 className="bg-clip-text text-white text-2xl font-semibold">
                      {doctor.title}
                    </h3>
                    <p className="text-base text-white">{doctor.decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton url={"/quote"} title={"ENQUIRE NOW"} />
            </div>
          </div>
        </section>

        <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          <div className="flex flex-col justify-center text-center ">
            <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]">
              Why Choose Comfygen for an Online Pharmacy App Development Company
              ?
            </h2>
            <p className="text-base text-slate-800">
              We are a leading{" "}
              <a href="#">online pharmacy app development company </a> with
              years of rich experience in creating mobile apps for the
              healthcare and pharmaceutical Industry. As an industry leader, we
              strive to deliver state-of-the-art products and services
              customized to your online pharmacy application development
              requirements.
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
            {Arena.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <ServiceSection key={num} img={img} title={title} Ptag={decs} />
              );
            })}
          </div>
        </div>

        <div
          className="bg-center bg-repeat bg-fixed"
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#14141c]/95">
            <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]">
                      Pharmacy App Tech Stack{" "}
                    </h2>
                    <p className="text-white">
                      The secret behind our reputation as a powerful{" "}
                      <b className="px-1">
                        on-demand pharmacy app development company
                      </b>{" "}
                      is hidden in our pharmacy app tech stack. We leverage the
                      best libraries and frameworks for web-based and desktop
                      app development to deliver identically effective
                      experiences across all platforms.
                    </p>
                    <img
                      className="rounded-lg"
                      src="/img/pharmacy-app-tech-stack.webp"
                      alt="Pharmacy App Tech Stack"
                    />
                  </div>
                  <div
                    className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto `}
                  >
                    {WhyChoosed.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div
                          key={num}
                          className="group border-b-4 border-[#fff] pb-6 space-y-4 transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <div className="w-16 h-16 flex justify-center items-center bg-white rounded-full ">
                                <Image
                                  src={img}
                                  className=""
                                  alt=""
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <h3 className="text-2xl text-white font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <p
                              className="text-white"
                              dangerouslySetInnerHTML={{ __html: elem.decs }}
                            ></p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <TalkExpert />

        <section className="py-4 lg:py-10 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 ">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                Compliance Requirements For An E-Pharmacy App
              </h2>
              <p className="text-base text-slate-800">
                We guarantee credibility in our e-pharmacy app development
                services by following the important guidelines and regulations
                for pharmaceutical/healthcare app development services and
                safeguarding important information of users. Our services align
                with the following important regulations to avoid any type of
                legal liabilities for your pharmacy applications.
              </p>
            </div>
            <div className="grid gap-10 py-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:gap-10 ">
              {Compliance.map((elem) => {
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
        </section>

        <div className="bg-[#fff] lg:py-20 py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>

        <FaqSection faqData={Frequently} title="" />
        <TalkExpert />
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
