import Image, { ImageLoaderProps } from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/clicnicalApp.json";
import styles from "./styles.module.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { ImRedo2 } from "react-icons/im";
import Link from "next/link";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Providers from "./components/Providers";

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
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});

export default function ClinicalApp(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Best Clinical Application Development Company in India | Comfygen
        </title>
        <meta
          name="description"
          content="I founded Comfygen, one of the best clinical application development company In India & The USA, that uses innovative technology to transform healthcare Industry. Let's work together to shape healthcare delivery's future."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/clinical-application-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Online Clinical Application Development Company In India!"
        />
        <meta
          property="og:facebook_description"
          content="As the premier Clinical Application Development Company in India, Comfygen delivers top-notch Online Clinical Application Development Services for both Android and iOS platforms. Our team of experts combines state-of-the-art software development with deep industry knowledge to create custom clinical applications that revolutionize patient care, streamline clinical workflows and access healthcare services. Let Comfygen be your partner in shaping the future of digital healthcare solutions."
        />
        <meta
          property="og:title"
          content="Best Clinical Application Development Company In India & The USA"
        />
        <meta
          property="og:twitter_description"
          content="Discover top-notch Online Clinical App Development Services from Comfygen In India & The USA for both Android and iOS platforms. Our expertise combines Clinical Application Development and Clinical Software Development to revolutionize patient care and streamline healthcare services. Let us be your partner in shaping the future of digital healthcare solutions!"
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
          content="Clinical Application Development Company | Clinical App Development Services | Comfygen"
        />
        <meta
          name="summary"
          content="We offer top-notch Clinical Application Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Clinical Application to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom Clinical Application and Software Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="On-Demand Clinical App Development Company in India"
          content="Are you looking to hire the best Clinical Application Development Agency In India & The USA for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="Clinical Application Development Company In India & The USA : Find Expert Clinical Application and Software Developers for Clinical Application and Software development services with Expertise in Android app development and iOS app development! We are providing you a better Clinical Application Development Service in India. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Clinical Application."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Clinical Application Design and User Experience company In India & The USA- We builds unique online Clinical Application for patients, doctors and healthcare providers, and individual doctors."
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
          content="Hire Best Clinical Application Development Company In India & The USA| offshore Clinical Application developer or Programmers"
        />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Clinical Application Development Company"
                ptag="If you are a doctor and looking to digitize your clinic then we will be the perfect partner for you. 
At Comygen, we create progressive and intuitive clinical software development services, solutions that improve patient outcomes, automate administrative workflows, and ensure data security. Our team of 15+ years of experienced developers is able to provide clinical application development services. We can help to develop innovative, secure and user friendly clinical apps to refine the user experience of your patients, doctors and healthcare providers. We are your reliable clinical application development company in the USA that not only develops top-notch mobile app development services as well as we help you to grow your business to 10x. "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Best Clinical Application Development Company"
          ptag="Comfygen is the only best option if you are looking for a India base reputable clinical app development company in India, and the USA. We are a renowned mobile software and application development company with 300+ projects delivered, 280 satisfied clients and have a team of 15+ years of experienced app and web programmers. We help in clinical application and software development services and make it a viable solution to bring your <a href='/healthcare-app-development' class='text-blue-600 font-bold hover:underline'> healthcare app development services </a>  closer to patients where they need them. "
          ptag1="By working with Comfygen Private Limited, you can get the advantages of getting top-notch clinical application development services and most cost effective    <a href='/mobile-app-development' class='text-blue-600 font-bold hover:underline'> mobile app development services </a> as compared to your competitors and this is what makes you stand out in your healthcare app development industry."
          imgSrc="/img/best-clinical-app-development-company-img.webp"
          imgW={800}
          imgH={800}
          altTag="Best Clinical App Development Company"
        />
        <ContactFromCenter />
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Our Services related to{" "}
              <span className="text-blue-500">Clinical App</span> Development{" "}
            </h2>
            <p className="text-base text-slate-800">
              Being the most renowned clinical app development company in the
              USA, we provide the below mentioned services to our client for
              seamless experience.
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TecnologisStack.map((omaha) => {
              return (
                <div key={omaha.num} className={`${styles.letter} space-y-4`}>
                  <div>
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      <a href={omaha.urlLink}>{omaha.title}</a>
                    </h3>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: omaha.stack }}></p>
                </div>
              );
            })}
          </div>
        </section>
        <section className=" bg-[#0F192E]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
            <div className="space-y-6">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Our Top-Notch Custom Clinical Application Development
                  Solutions
                </h2>
                <p className="text-base text-white">
                  Comfygen is one of the{" "}
                  <a
                    className="text-blue-500"
                    href="/clinical-application-development"
                  >
                    credible clinical app development agency in the USA
                  </a>{" "}
                  with years of experience in crafting different types of
                  healthcare app development services. We have a vision to
                  transform all aspects of the best healthcare app development
                  industry with our clinical app development services. The
                  assortment of features in our clinical mobile app development
                  enhances the quality of experiences for everyone in the
                  healthcare sector.
                </p>
              </div>
              <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.Services.map((elem) => {
                  const { title, img, decs, num, url } = elem;
                  return (
                    <div
                      key={num}
                      className="p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group  group "
                    >
                      <a href={url}>
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold ">
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
                          className="font-medium text-left text-white  transition duration-200 ease-in-out"
                          dangerouslySetInnerHTML={{ __html: elem.decs }}
                        ></p>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/quote" className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S CONNECT TO GROW YOUR BUSINESS
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/who-can-take-our-clinical-apps-developement-solution.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt="Who Can Take Our Clinical Apps Development Solutions?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#16969F] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Who Can Take Our Clinical Apps Development Solutions?
                  </h2>
                  <p className="">
                    Our reputation as one of the most reliable clinical
                    application development firms in India revolves around our
                    capabilities to offer diverse solutions. We aim to offer
                    clinical application development services solutions that can
                    become an integral aspect of the broader healthcare
                    ecosystem. Our team has gained expertise by working with
                    different clients, including{" "}
                    <a
                      className="text-black font-bold hover:underline"
                      href="/doctor-appointment-app-development"
                    >
                      doctors booking app development
                    </a>{" "}
                    , pharmacies app development and patients app development.{" "}
                  </p>
                  <p className="">
                    We have also helped transform pharmacies, prescription
                    systems, EHR mechanisms, and medical delivery app
                    development systems with the value of customisation. Our
                    clinical mobile app development services and solutions can
                    help you create the following types of clinical application
                    development services.
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
        <Providers />

        <section
          className="bg-center bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: `url("/img/features-in-clinical-apps-you-should-look-for.webp")`,
          }}
        >
          <div className="py-10 bg-[#000000]/80 ">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]">
                    Features in{" "}
                    <span className="text-[#BA68C8]"> Clinical Apps </span> you
                    should look for!{" "}
                  </h2>
                  <p className="text-base text-[#fff]">
                    Comfygen is your trusted partner for developing clinical
                    apps with a wide range of features. Our Clinical application
                    development services and solutions can help in creating
                    enhanced workflow management in clinics with remote access
                    to the best clinical application development services. The
                    features in clinical app development can vary from the
                    perspective of users, such as patients and healthcare
                    development providers.
                  </p>
                </div>
                {JSON_DATA.CryptoUser.map((elem, index) => (
                  <div
                    key={elem.num}
                    className={`lg:space-y-0 space-y-10 border p-6 bg-[#DBEAFE] rounded-xl lg:flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="w-full">
                      <h3 className="text-2xl font-bold">{elem.title}</h3>
                      <p className="text-base text-black">{elem.decs}</p>
                      <ul className="space-y-2">
                        {[
                          elem.item,
                          elem.item1,
                          elem.item2,
                          elem.item3,
                          elem.item4,
                          elem.item5,
                          elem.item6,
                          elem.item7,
                        ]
                          .filter(Boolean)
                          .map((item, index) => (
                            <li
                              key={index}
                              className="flex text-base text-black/80"
                            >
                              <span className="pr-2 mt-1.5 text-[#4f4f50]">
                                <ImRedo2 className="w-4 h-4 text-[#BA68C8]" />
                              </span>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="w-full">
                      <Image
                        className="rounded-md"
                        title="Custom Sports Betting App Development"
                        alt=""
                        src={elem.img}
                        height={500}
                        width={500}
                        loader={uploadcareLoader}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center items-center">
                  <a href="/contact-us">
                    <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                      SCHEDULE A CALL
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <div
          className="bg-center bg-repeat bg-fixed "
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#14141c]/95">
            <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]">
                      Our Technology Stack for{" "}
                      <span className="text-[#AF67C2]">
                        {" "}
                        Delivering Clinical Application{" "}
                      </span>
                    </h2>
                    <p className="text-white">
                      Our clinical application development services stand up to
                      the expectations of our clients as we leverage a
                      comprehensive technology stack. With different types of
                      proven and tested technologies, we can create clinical
                      apps that are interoperable, secure, fast and robust. We
                      emphasise innovation above everything else to create
                      clinical apps that align with existing needs and emerging
                      market trends. Our technology stack can fuel a long-term
                      and forward-thinking strategy to achieve improvements in
                      healthcare operations.
                    </p>
                    <img
                      className="rounded-lg"
                      src="/img/our-technology-stack-for-delivering-clinical-application.webp"
                      alt="Our Technology Stack for Delivering Clinical Application
"
                    />
                    <div className="flex justify-start items-center mt-5">
                      <a href="https://api.whatsapp.com/send?phone=919587867258">
                        <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                          Talk To Consultant
                        </button>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[720px] overflow-auto `}
                  >
                    {JSON_DATA.WhyChoosed.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div
                          key={num}
                          className="group border-b-4 border-[#473a92] pb-6 space-y-4 transition-all duration-200  cursor-pointer  "
                        >
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <Image src={img} alt="" width={40} height={40} />
                              <h3 className="text-2xl text-white font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p
                              className="text-white "
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

        <section className="py-20 bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 ">
            <div className="flex flex-col justify-center items-center mx-auto space-y-4">
              <h2 className="xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51] md:text-center text-start">
                Why Do Businesses Want to Use Clinical Application Development ?
              </h2>
              <p className="text-base text-slate-800 text-center">
                Businesses in the domain of healthcare can use our clinical
                application development services to create new clinical apps
                that redefine productivity, efficiency, resource usage and
                patient experiences. You can use our healthcare app development
                services to make the most of the following advantages.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.OnDemandDoctor.map((doctor) => {
                return (
                  <div
                    key={doctor.num}
                    className="border p-8 space-y-2 shadow transition-all hover:scale-105 duration-700 bg-[#223547] rounded-tl-[30px]  rounded-br-[30px] "
                  >
                    <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-2xl font-semibold">
                      {doctor.title}
                    </h3>
                    <p className="text-base text-white">{doctor.decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <a href="/quote " className="mt-5">
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  ENQUIRE NOW
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
            <div className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#fff]  ">
                Our Working Methodology for
                <span className="text-[#B266C1]">
                  {" "}
                  Implementing Clinical application{" "}
                </span>{" "}
                Development Solutions.
              </h2>
              <p className="text-base text-white">
                We have built our reputation as a trusted clinical application
                development company in the USA with a proven and tested
                workflow. Our methodology for creating and deploying clinical
                apps has helped us cater to the needs of multiple clients with a
                broad range of advantages.{" "}
              </p>
            </div>
            <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.Methodology.map((elem) => {
                const { img, title, decs } = elem;
                return (
                  <div className={`${styles.BenefitsCardItem} relative`}>
                    <div className={`${styles.BenefitsCardItemImg} relative`}>
                      <Image
                        src={img}
                        className="object-cover"
                        width={35}
                        height={50}
                        alt={title}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#fff] text-start">
                      {title}
                    </h3>
                    <div className="mt-3">
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
              <a href="/contact-us " className="mt-5">
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Connect with IT Experts
                </button>
              </a>
            </div>
          </div>
        </section>
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 py-10">
          <div className="flex flex-col justify-center text-center ">
            <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]">
              Make the Most of{" "}
              <span className="text-[#BA68C8]">Our Flexible Engagement</span>{" "}
              Models!{" "}
            </h2>
            <p className="text-base text-slate-800">
              At Comfygen, you can find a different view of the clinical
              application development industry with easier access to different
              engagement models. We offer flexible engagement models that you
              can choose according to your needs.{" "}
            </p>
          </div>
          <div className="grid gap-8 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-8 ">
            {JSON_DATA.High1.map((elem) => {
              const { title, decs, num } = elem;
              return (
                <div
                  key={num}
                  className="p-6 space-y-4 relative bg-[#DBEAFE] cursor-pointer rounded-[17px]"
                >
                  <div className="w-20 h-20 bg-[#ffffff] rounded-[17px]  flex justify-center items-center text-[40px] font-bold text-blue-600">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-lg text-[#0E1F51] font-semibold group-hover:text-white text-start">
                      {title}
                    </h3>
                    <div className="flex justify-start pt-2 space-x-4">
                      <div className="w-10 h-1 bg-blue-500 rounded-full "></div>
                      <div className="w-6 h-1 bg-blue-500 rounded-full "></div>
                    </div>
                    <p className="flex items-center pt-1 text-start ">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <a href="/contact-us">
              <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                Get A Free Consultation
              </button>
            </a>
          </div>
        </div>
        <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          <div className="flex flex-col justify-center text-center ">
            <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]">
              Why Choose Comfygen for{" "}
              <span className="text-[#BA68C8]">Clinical Application </span>{" "}
              Development?{" "}
            </h2>
            <p className="text-base text-slate-800">
              We have earned the tag of the top clinical software development
              company with our capabilities and experience. You can rely on our
              experts to develop clinical apps by making the most of the
              following advantages.
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
            {JSON_DATA.Arena.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <ServiceSection key={num} img={img} title={title} Ptag={decs} />
              );
            })}
          </div>
        </div>
        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/images/is-there-any-other-information-we-can-help-you-with.webp"
                  width={800}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt=" Do you want to learn more about our services?"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#2A3D65] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Do You Want Any Other Information about our Clinical App
                    Development Services?
                  </h2>
                  <p className="">
                    Consult with our experts and find the best way to develop
                    powerful clinical app development services tailored to your
                    business requirements. Make the most of our proficiency in
                    clinical software design, development and maintenance by
                    leveraging the latest technologies right away.{" "}
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
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
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
