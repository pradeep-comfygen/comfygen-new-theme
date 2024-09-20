import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import styles from "./styles.module.css";
import LazyLoad from "react-lazy-load";
import Link from "next/link";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Process from "./components/Process";
import Providers from "./components/Providers";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
const ModusSection = dynamic(() => import("../components/ModusSectionNew"), {
  loading: () => <p>Loading...</p>,
});

export default function Ecommerce(props) {
  const [game, setGame] = useState<any>({});
  let { initialData } = props;

  let {
    Chartacterstics,
    Services,
    ModusOperandi,
    Modus,
    GetDoctor,
    OnDemandDoctor,
    AppService,
    engagementModels,
    Methodology,
    myList,
    Hire,
    Frequently,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          No. 1 Telemedicine App Development Company In India & The USA |
          Comfygen
        </title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/telemedicine-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best TeleMedicine App Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen as a Leading  TeleMedicine App Development Services in India. Enhance and update your  TeleMedicine App  app with our expertise. Tap into Comfygen Global Network to Hire a Medicine On-Demand app developers or Programmer Today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/telemedicine-app-development"
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
          content="For hospitals and clinics, Comfygen provides feature-rich telemedicine app development services and solutions in India and the USA. Request a quote today."
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top TeleMedicine App  App Development Company In India!"
        />
        <meta
          property="og:facebook_description"
          content="As the on-demand  TeleMedicine App  Development Company in India, Comfygen offers Top-Notch Online Medicine Booking Application Development Services in India for Android app development and iOS app development platform."
        />
        <meta
          property="og:twitter_title"
          content="The Best  TeleMedicine App  App | On-Demand TeleMedicine App Development Company | Online Dr Booking App development Services | Medicine Scheduling App India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen offer top-notch  TeleMedicine App Development Services in India, specializing in creating medical applications for Medicine, clinics, and hospitals. We are dedicated to enhancing and updating your  TeleMedicine App  app. Find Top Talent Globally & Launch Your Project Today!"
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content=" TeleMedicine App Development Company |  TeleMedicine App  App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch  TeleMedicine App Development Services in India, specializing in creating medical applications for Medicine , clinics, and hospitals. Our expert team is dedicated to enhancing and updating your  TeleMedicine App  app to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Hussen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom  TeleMedicine App  App Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand TeleMedicine App Development Company in India"
          content="Are you looking to hire the best On-Demand TeleMedicine App Development Agency in India for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="On-Demand TeleMedicine App Development Company In jaipur: Find Expert On-Demand App Developers for Medicine Booking Apps with Expertise in Android app development and iOS app development! We are providing you a better  TeleMedicine App Development Service in India. We help to develop medical applications for Medicine, clinics, hospitals. Our skilled team helps you to develop the updated version of your  TeleMedicine App  app."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Medicine On-Demand App Design and User Experience company in Jaipur, India - We builds unique online  TeleMedicine App  booking applications for hospitals, clinics, and individual Medicine."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:country-name"
          content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150"
        />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best  TeleMedicine App  App development Company India | offshore  TeleMedicine App  App developer or Programmers"
        />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div className="relative">
          <Image
            alt="Herosection"
            src={"/img/hero-section-bg.webp"}
            quality={100}
            fill
            sizes="100vw"
            style={{
              zIndex: -99999,
            }}
          />
          <div className=" bg-[#1B1C30CC]">
            <LazyLoad>
              <Header />
            </LazyLoad>
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Telemedicine App Development Company "
                ptag="Telemedicine is the easiest way to reach your patients and create a new channel for delivering your services. Healthcare organizations, doctors, and support staff can rely on telemedicine app development services to create user-friendly and innovative apps. We aim to redefine the conventional narratives about healthcare services with new features and easier workflows."
                ptag1="Our team of experienced app developers can translate your business requirements into fully functional and intuitive apps with unique user experiences. We have been consistently serving our clients with the best results in telemedicine app development to help them adapt to new trends in healthcare and technology."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <Advice
          heading="Most Trusted Telemedicine App Development Company"
          ptag="Comfygen has always strived to serve as a valuable companion on your journey to achieve digital transformation. With our experience in telehealth app development, we are prepared to take on any new challenge that comes our way. We have strengthened our reputation as a trusted app development company with more than 300 successfully completed projects and over 250+ happy clients. Our expertise in telemedicine software development revolves around the 15+ years of professional experience of our app developers."
          ptag1="We stand out as the first choice to create a telemedicine app and embrace the benefits of technology in healthcare at cost-effective prices with the assurance of distinctive advantages over your competitors."
          imgSrc="/img/most-trusted-telemedicine-app-development-company-image.webp"
          imgW={533}
          imgH={506}
          altTag="Most Trusted Telemedicine App Development Company"
        />

        <ContactFromCenter />
        {/* services */}
        <section className=" bg-[#060E41]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-20 space-y-6">
            <div className="flex flex-col justify-center text-center space-y-2">
              <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                An Array of Diverse{" "}
                <span className="text-[#BC5FBD]">
                  {" "}
                  Telehealth App Development
                </span>{" "}
                Services for You
              </h2>
              <p className="text-base text-white">
                As one of the most reliable destinations for development of
                telemedicine apps in India, we offer the following services for
                anyone interested in revolutionizing the healthcare industry.
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {Services.map((elem) => {
                const { num, img, title, decs, urlLink } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border rounded-[40px] transition-all duration-300 hover:translate-y-2 group group "
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold ">
                      <Image
                        width={110}
                        height={110}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">
                      <a href={urlLink}>{title}</a>
                    </h3>
                    <p className="font-medium text-left text-white  ">{decs}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center">
              <ConnectWithExpertButton
                url={"/contact-us"}
                title={"LET'S CONNECT TO GROW YOUR BUSINESS"}
              />
            </div>
          </div>
        </section>

        <div className="bg-[#6284D6]">
          <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />
        </div>

        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-16">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/who-should-use-our-telemedicine-app-development-dolutions99.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="bg-[#085FCC] rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Do You Want More Information on Our Telemedicine Development Services?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#060E41] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Who Should Use Our Telemedicine App Development Solutions?
                  </h2>
                  <p className="">
                    The key factor that differentiates our telemedicine app
                    development solutions is the assurance of effective
                    experiences for all users. We specialize in telemedicine
                    application software development and pay special attention
                    to the preferences of our different target audiences.
                    Furthermore, our expertise in healthcare app development
                    empowers us to create telemedicine apps that improve value
                    for doctors, patients, support staff, and healthcare
                    organizations or clinics.{" "}
                  </p>
                  <div className="pt-8">
                    <ConnectWithExpertButton
                      url={"/contact-us"}
                      title={"Get A Free Consultation"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className=" bg-center bg-fixed bg-cover "
          style={{
            backgroundImage: `url("/img/doctor-booking-app-development-process.webp")`,
          }}
        >
          <div className="bg-[#120933]/95 py-14">
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Diverse Functionalities in Telemedicine Apps for Everyone{" "}
                </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">
                  We have worked on app development projects across different
                  domains of healthcare, such as clinical app development and
                  pharmacy app development. Our telehealth development company
                  can cater to your diverse requirements for entering into the
                  telemedicine space. We can help you create different types of
                  telemedicine solutions with advanced feature sets according to
                  your requirements.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 xl:gap-10 gap-10 py-10 text-left">
                {GetDoctor.map((item) => {
                  const { title, num, decs } = item;
                  return (
                    <div
                      key={num}
                      className="space-y-2 rounded-tl-[55px]	 rounded-br-[55px] border p-8 bg-[#02122D]"
                    >
                      <p className="text-2xl font-bold text-white">{title}</p>
                      <p className="text-[#fff] transition duration-200 ease-in-out">
                        {decs}
                      </p>
                      <ul className="list-disc px-6 text-white">
                        {item.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Get Started"}
                />
              </div>
            </section>
          </div>
        </div>
        <Providers />

        <section
          className=" bg-center bg-fixed bg-cover "
          style={{ backgroundImage: `url("/img/get-doctor-bg.webp")` }}
        >
          <div className="bg-[#161f33]/80 py-14">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Our Technology Stack for Telemedicine App Development
                </h2>
                <p className="text-white">
                  We claim to be a leading telemedicine app development company
                  in India for any healthcare organization, clinic, or doctor
                  with our innovative solutions. Our experts use the latest
                  technology stack to help you create fast, resilient,
                  interoperable, and secure telemedicine apps. We pay attention
                  to the latest trends and identify the technologies that can
                  help us improve telemedicine apps according to existing and
                  emerging needs in the healthcare sector. The special picks in
                  our telehealth app development technology stack can create
                  strong foundations for transforming the healthcare sector with
                  digital technology.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={60}
                          height={60}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B82F6]">
                        {title}
                      </h3>
                      <div>{decs}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-[#223547]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-20">
            <div className="flex flex-col justify-center items-center mx-auto space-y-4">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Why Do Businesses Need Telemedicine App Development?
              </h2>
              <p className="text-base text-white text-center">
                Telemedicine apps can set new milestones for innovation in the
                field of healthcare. Healthcare organizations, patients,
                doctors, and support staff can discover new ways to redefine
                their experiences and productivity. Our telehealth development
                company can help businesses capitalize on a wide range of
                benefits.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {OnDemandDoctor.map((doctor) => {
                return (
                  <div
                    key={doctor.num}
                    className="border p-10 bg-white space-y-2 shadow rounded  group"
                  >
                    <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center text-white text-[30px]">
                      <img src={doctor.img} className="w-10 h-10" />
                    </div>
                    <h3 className="text-black text-xl font-bold">
                      {doctor.title}
                    </h3>
                    <div
                      className="text-[#000] transition duration-200 ease-in-out group-hover:text-black"
                      dangerouslySetInnerHTML={{ __html: doctor.decs }}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton url={"/quote"} title={"ENQUIRE NOW"} />
            </div>
          </div>
        </section>

        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-20 ">
          <div className="space-y-4 text-center col-span-3">
            <h2 className="text-4xl font-bold text-center text-[#0E1F51] ">
              Our Methodology for Telemedicine App Development
            </h2>
            <p className="text-base text-slate-800 text-center ">
              We follow a strategic approach in our methodology to create
              telemedicine applications that cater to the needs of our clients.
              Our telemedicine app development services have always contributed
              to the success of our customers with new advantages. The trusted
              methodology allows us to fulfill every client requirement while
              creating an efficient, productive, and feature-rich telemedicine
              app.
            </p>
          </div>
          <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
            {AppService.map((elem) => {
              const { title, img, decs, num, url } = elem;
              return (
                <>
                  <a
                    href={url}
                    key={num}
                    className=" p-6 space-y-4 bg-[#F1F5F9] border-[#0E1F51] border rounded-xl hover:translate-y-3  transition-all duration-700 ease-in-out"
                  >
                    <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#0E1F51]  rounded-full  ">
                      <Image
                        width={35}
                        height={35}
                        src={img}
                        alt={title}
                        title={title}
                        className=""
                      />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0E1F51] group-hover:text-white transition-all duration-200 text-center">
                      {title}
                    </h3>
                    <p className="font-medium text-center text-black group-hover:text-white break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </a>
                </>
              );
            })}
          </div>
        </div>

        <section className="bg-[#060E41]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Choose Your Desired Engagement Models for Our Services
              </h2>
              <p className="text-base text-white">
                Comfygen offers the flexibility to choose any engagement model
                that fits your needs and taps into the potential of our
                telehealth development services. You can pick any engagement
                model for telemedicine app development with us by your side.
              </p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
              {engagementModels.map((model, index) => (
                <div
                  key={index}
                  className={`p-12 ${index === 0 ? "xl:rounded-l-full" : index === 2 ? "xl:rounded-r-full" : ""} flex justify-center items-center flex-col bg-white space-y-2`}
                >
                  <Image src={model.image} alt="" width={100} height={100} />
                  <div className="space-y-2 text-center">
                    <div className="bg-[#060E41] p-1 rounded">
                      <h2 className="text-white text-xl font-bold">
                        {model.title}
                      </h2>
                    </div>
                    <p className="text-base text-black">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-no-repeat bg-cover ">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
            <div className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]  ">
                Why Choose Comfygen to{" "}
                <span className="text-[#B266C1]"> Create Telemedicine </span>{" "}
                Apps?
              </h2>
              <p className="text-base text-slate-800">
                We simplify the journey of developing telemedicine apps for our
                clients with unique value-based advantages. Our valuable
                customers recommend us for developing telemedicine solutions
                owing to the following reasons.
              </p>
            </div>
            <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
              {Methodology.map((elem) => {
                const { img, title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className={`${styles.BenefitsCardItem} relative`}
                  >
                    <div className={`${styles.BenefitsCardItemImg} relative`}>
                      <Image
                        src={img}
                        className="object-cover"
                        width={35}
                        height={50}
                        alt={title}
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-2xl font-bold text-[#fff] text-start">
                        {title}
                      </h3>
                      <p className="break-all text-white text-start ">
                        {" "}
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <ConnectWithExpertButton
                url={"/contact-us"}
                title={"Connect with IT Experts"}
              />
            </div>
          </div>
        </section>

        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>

        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/do-you-want-more-information-on-our-telemedicine-development-service.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="bg-[#085FCC] rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Do You Want More Information on Our Telemedicine Development Services?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#060E41] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Do You Want More Information on Our Telemedicine Development
                    Services?
                  </h2>
                  <p className="">
                    Reach out to our experts for your initial consultation and
                    discover the best ways to create a telehealth app that fits
                    your business goals. Use our expertise in telemedicine app
                    design and development with the best technology stack to
                    create powerful telemedicine apps right now.{" "}
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

        <TalkExpert />
        <FaqSection faqData={Frequently} title="" />
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
