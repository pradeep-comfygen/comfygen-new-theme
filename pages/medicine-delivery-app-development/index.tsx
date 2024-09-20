import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/teleMedicine.json";
import styles from "./styles.module.css";
import LazyLoad from "react-lazy-load";
import { RiCustomerServiceLine } from "react-icons/ri";
import Link from "next/link";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Process from "./components/Process";
import { MdOutlineCardMembership } from "react-icons/md";
import Providers from "./components/Providers";

const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});

const AppointmentProcess = dynamic(
  () => import("./components/AppointmentProcess"),
  {
    loading: () => <p>Loading...</p>,
  }
);

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

const ModusSection = dynamic(() => import("./components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});

export default function Ecommerce(props) {
  let { initialData } = props;

  let { Chartacterstics } = JSON_DATA;
  return (
    <>
      <Head>
        <title>
          On demand Medicine Delivery App Development Company in India
        </title>
        <meta
          name="description"
          content="You can start an online pharmacy delivery business with Comfygen's customized app development for iOS and Android. Take your medicine delivery services to the next level with our customized apps."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/medicine-delivery-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top Medicine Delivery App Company In India and the USA | Best Medicine Delivery App Development Service Provider"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen specializes in assisting entrepreneurs in establishing their online medicine delivery ventures. Our seasoned team offers bespoke Medicine delivery app development solutions for iOS and Android platforms, guaranteeing smooth and effective medicine delivery applications and Software experiences tailored to meet your specific business requirements. Elevate your services with Comfygen Pvt. Ltd. innovative and reliable app development expertise."
        />
        <meta
          property="og:twitter_title"
          content="Online Medicine Delivery App: Tailored App Development Services / Solutions by Comfygen Private Limited"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen provides expert support for launching your online medicine delivery business. Our app development services offer tailored solutions for both iOS and Android platforms, ensuring seamless and efficient medicine delivery experiences. Building a Strong Foundation for Your Project with comfygen."
        />
        <meta
          property="schema:type"
          content="Best Unveiling Excellence: Discover the Top Medicine Delivery App Development Services"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en_us" />
        <meta
          name="abstract"
          content="Medicine App Development Organization | World Best Medicine Delivery App Builder | Comfygen"
        />
        <meta
          name="summary"
          content="Build your pharmacy delivery app with Comfygen, top medicine delivery app development company. We offer a feature-rich medicine delivery app solution. Comfygen is a reliable and trusted name in the industry, specializing in assisting entrepreneurs in establishing their online medicine delivery ventures. Our seasoned team offers bespoke app development solutions for iOS and Android platforms, guaranteeing smooth and effective medicine delivery experiences tailored to meet your specific business requirements. Elevate your services with Comfygen's innovative and reliable app development expertise.."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Medicine App Development Company In India and The USA, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Medicine Delivery App Development Services Company In India"
          content="Comfygen: Comfygen is a well-established and trustworthy pharmacy delivery app development service provider known for empowering entrepreneurs in launching their online medicine delivery businesses. Our experienced team excels in crafting Customized Medicine Delivery App Development solutions for iOS and Android platforms, ensuring seamless and efficient medicine delivery experiences tailored to your unique business needs. Elevate your services with Comfygen's cutting-edge and dependable app development expertise."
        />
        <meta
          name="category"
          content="Leading medicine delivery app development company In India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="On-Demand medicine delivery app development"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <LazyLoad>
              <Header />
            </LazyLoad>
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Medicine Delivery App Development Company"
                ptag="Make your pharmacy business more accessible by integrating the on-demand medicine delivery app solution. Do you want to become a top destination for medicine delivery in the USA? Our expertise as a healthcare Industry gives us an additional advantage in creating effective medicine delivery application development. Comfygen has worked with many hospitals, pharmacy startups, and chain of pharmacy stores to develop medicine delivery applications featuring exclusive traits."
                ptag1="We strive to create apps that offer a blend of usability and easier access to different types of pharmacy delivery app development services. With us, you don’t have to worry about access to over-the-counter or prescription medicines. Our experts have earned 15+ experience working on the development of different types of healthcare applications. We can help you make the most of trusted and effective resources to create pharmacy delivery applications that boost your sales and revenue."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <Advice
          heading="Transform the Traditional Approaches to Healthcare with Our Mobile Apps"
          ptag="The digital transformation of different aspects of healthcare has invited attention to the possibilities of changing the way medicines reach people. Mobile and web-based apps can help customers buy the medicines they need and get them delivered to their homes instantly."
          ptag1="Comfygen medicine delivery app development company offers a new definition of the accessibility of medicines with innovative solutions. With our medicine delivery app development services, you can garner more popularity in local markets and explore opportunities for growth in global markets. "
          ptag2="Comfygen enables businesses in the pharmacy sector to discover the best ways to capitalize on innovation. We specialize in the creation of intuitive mobile and web-based, Medicine mobile delivery apps that attract users with their unique features. Take your first step towards taking your pharmacy business closer to your customers with our pharmacy delivery apps right now."
          imgSrc="/img/transform-the-traditional-approaches-to-healthcare-with-our-mobile-apps.svg"
          imgW={533}
          imgH={506}
          altTag="Transform the Traditional Approaches to Healthcare with Our Mobile Apps"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="bg-[#024765]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-20 space-y-6">
            <div className="flex flex-col justify-center text-center space-y-2">
              <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Client-centric Medicine Delivery App Development Services
              </h2>
              <p className="text-base text-white">
                We have gained the trust of our clients by offering medicine
                delivery app development services tailored to their needs and
                business goals. The following list of different
                pharmacy/medicine delivery app development services.
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.Services.map((elem) => {
                const { num, img, title, decs, urlLink } = elem;
                return (
                  <div
                    key={num}
                    className="p-8 space-y-4 bg-[#fff] border rounded-[20px] transition-all duration-300 hover:translate-y-2 group group "
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-[#024765] rounded-[8px] p-3 text-xl font-semibold ">
                      <Image
                        width={110}
                        height={110}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#000] transition-all duration-200 text-left">
                        <a href={urlLink}>{title}</a>
                      </h3>
                      <p className="font-medium text-left text-black ">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="/contact-us " className="">
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  LET'S CONNECT TO GROW YOUR BUSINESS
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-8">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center bg-[#6091CE] p-14 rounded-[20px]">
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="col-span-2">
                <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-start text-[#fff]  ">
                  Boost Your Business With Our Whitelabel Medicine Delivery App
                </h2>
                <p className="text-white text-lg text-start">
                  Get your medicine delivery business to the next level and
                  provide an outstanding customer experience by taking advantage
                  of this opportunity. At Comfygen, we specialize in providing
                  cutting-edge white label medicine delivery app development
                  solutions that empower pharmacies to elevate their services
                  and reach a wider customer base. The mobile apps we provide to
                  pharmacies enable them to offer seamless access to quality
                  medicines and enhance patient safety, thereby revolutionizing
                  how pharmacies serve their patients. To get started on your
                  online app development project, contact the medicine delivery
                  app development company today.
                </p>
                <p className="text-white text-lg text-start font-bold">
                  We offer a white label medicine delivery app that includes the
                  following:
                </p>
                <ul className="text-white text-start space-y-2 mt-2">
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img
                      className="w-6 h-6"
                      src="/img/list-icon.svg"
                      alt=""
                    />{" "}
                    User-Friendly Interface
                  </li>
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img className="w-6  h-6" src="/img/list-icon.svg" alt="" />
                    Real-Time Prescription Fulfillment
                  </li>
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img
                      className="w-6  h-6"
                      src="/img/list-icon.svg"
                      alt=""
                    />{" "}
                    Secure Payment Gateway
                  </li>
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img
                      className="w-6  h-6"
                      src="/img/list-icon.svg"
                      alt=""
                    />{" "}
                    Inventory Management
                  </li>
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img
                      className="w-6  h-6"
                      src="/img/list-icon.svg"
                      alt=""
                    />{" "}
                    Customizable Branding
                  </li>
                  <li className="flex gap-2 items-center">
                    {" "}
                    <img
                      className="w-6  h-6"
                      src="/img/list-icon.svg"
                      alt=""
                    />{" "}
                    Multi-Platform Compatibility
                  </li>
                </ul>
                <button className="bg-white py-3 px-10 text-lg font-semibold flex justify-start mt-6 rounded-full">
                  GET A FREE DEMO
                </button>
              </div>
              <div>
                <img
                  className="w-full"
                  src="/img/boost-your-business-with-our-whitelabel-wedicine-welivery-app.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#6284D6]">
          <ModusSection
            Modus={JSON_DATA.Modus}
            ModusOperandi={JSON_DATA.ModusOperandi}
          />
        </div>
        <section className="bg-[#223547]  lg:py-16 py-8 ">
          <div className=" ">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Who Should Go for Our Medicine Delivery App Development
                  Solutions?
                </h2>
                <p className="text-white">
                  We have become a top medicine delivery app development company
                  in India and the USA with our skills and capabilities to
                  offer different mobile app and web solutions. Our experts make
                  us a powerful online medicine delivery app development company
                  with the resources required to stand out in the continuously
                  evolving Healthcare industry. We have adapted our
                  Pharmacy/medicine delivery app development services to fit
                  within the scope of requirements for different types of
                  clients.
                </p>
                <p className="text-white">
                  At Comfygen, you can find the finest pharmacy delivery
                  applications development services for different types of
                  businesses, including standalone pharmacy stores, pharmacy
                  marketplaces, pharmacy store chains, and e-pharmacy startups.
                  Our services aim to create innovative medicine delivery apps
                  that can address your business goals alongside delivering
                  seamless services to users.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-8 space-y-4 bg-white rounded-[15px] relative`}
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
                      <div>
                        <h3 className="text-2xl font-bold text-[#3B82F6]">
                          {title}
                        </h3>
                        <div>{decs}</div>
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
          </div>
        </section>
        <Providers />

        <section className="py-10 lg:py-20 bg-no-repeat bg-cover ">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
            <div className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]  ">
                Technology Stack for Creating Advanced Pharmacy Delivery Apps
              </h2>
              <p className="text-base text-slate-800">
                We can develop medicine delivery applications personalized to
                the needs of our clients by using an advanced technology stack.
                The power of new technologies, tools, and frameworks helps us
                create delivery apps that offer better interoperability, speed,
                and security. We also prioritize innovation to develop pharmacy
                delivery apps that can adapt to new market trends and changes in
                customer behavior. Our experts bring you the best of new
                technologies to create useful medicine delivery apps with
                advanced features.
              </p>
            </div>
            <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.Methodology.map((elem) => {
                const { img, title, decs, num } = elem;
                return (
                  <div key={num} className={`${styles.BenefitsCardItem} `}>
                    <div>
                      <Image
                        src={img}
                        className="object-cover"
                        width={50}
                        height={50}
                        alt={title}
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-2xl font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <div
                        className="text-black text-start"
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></div>
                      {/* <p className=' text-black text-start '> {decs}</p> */}
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
        <section className=" bg-[#223547]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-20">
            <div className="flex flex-col justify-center items-center mx-auto ">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Why Should Pharmacy Businesses Utilize Online Medicine Delivery
                App Development?
              </h2>
              <p className="text-base text-white text-center">
                Every business in the pharmacy industry must look for new
                opportunities to stay relevant in the market. Our online
                medicine delivery app development company gives the perfect
                option to all types of pharmacy businesses to improve their
                efficiency, customer experience, productivity, and resource
                utilization. Any business that wants to make a mark in the
                domain of pharmacy delivery can capitalize on diverse
                advantages.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.OnDemandDoctor.map((doctor) => {
                return (
                  <div
                    key={doctor.num}
                    className="border p-8 bg-white space-y-2 shadow rounded-[20px]  group"
                  >
                    <div className="bg-[#223547] w-16 h-16 rounded-full flex items-center justify-center text-white text-[30px]">
                      <img src={doctor.img} className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-black text-2xl font-bold">
                        {doctor.title}
                      </h3>
                      <div
                        className="text-[#000] font-normal transition duration-200 ease-in-out group-hover:text-black"
                        dangerouslySetInnerHTML={{ __html: doctor.decs }}
                      ></div>
                    </div>
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

        <section className="lg:py-16 py-8 bg-[#F6F5F5]  ">
          <h2 className="text-4xl font-bold text-center py-4 text-[#0E1F51] ">
            Our Portfolio for medicine delivery app
          </h2>
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 border-2 border-[#fff] bg-[#6896AF] p-10 rounded-[20px]">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
              <div className="lg:col-span-3">
                <div className="flex flex-wrap">
                  {/* <img width={500} src="/img/doctor-appointment-portfolio-image.webp" alt="" /> */}
                  <img
                    className="w-full mx-auto "
                    src="/img/portfolio-for-medicine-delivery-app.webp"
                    alt=""
                  />
                </div>
                <p className="text-base text-white">
                  At Comfygen Private Limited, we take pride in our strong
                  portfolio of innovative medicine distribution apps. Our
                  solutions are designed to bring revolution in health service
                  by ensuring timely delivery of medicines at your doorstep.
                  With a user-friendly interface, secure payment gateway,
                  real-time tracking, and seamless integration with health
                  service providers, our app fulfils all your medicine-related
                  needs. Trusted by leading pharmacies and health service
                  organizations, we combine modern technology with unmatched
                  customer service to improve patient care. Know how Comfygen
                  can change your health service experience along with our
                  modern medicine and vitamin solutions. Contact us today!
                </p>
              </div>
              <div className="bg-[#024765] py-10 px-4 rounded-lg h-fit">
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
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-base text-white pb-2">
                    Key Features of Our Medicine Delivery App
                  </h2>
                  <ul className="text-white">
                    <li className="text-base font-normal">
                      1. User Registration and Profile Management
                    </li>
                    <li className="text-base font-normal">
                      2. Medicine Search and Catalog{" "}
                    </li>
                    <li className="text-base font-normal">
                      3. Prescription Upload and Verification
                    </li>
                    <li className="text-base font-normal">
                      4. Order Management
                    </li>
                    <li className="text-base font-normal">
                      5. Delivery Management
                    </li>
                    <li className="text-base font-normal">
                      6. Payment Gateway Integration
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

        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-20 ">
          <div className="space-y-4 text-center col-span-3">
            <h2 className="text-4xl font-bold text-center text-[#0E1F51] ">
              Our Proven and Tested Approach for the Implementation of <br />{" "}
              Pharmacy Delivery Apps
            </h2>
            <p className="text-base text-slate-800 text-center ">
              We have been working on enhancing our capabilities as a{" "}
              <a
                href="/healthcare-app-development"
                className="text-black font-bold"
              >
                healthcare app development company{" "}
              </a>{" "}
              with different types of apps. Our methodology to create pharmacy
              delivery apps gives us an additional edge to create delivery apps
              tailored for success.
            </p>
          </div>
          <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
            {JSON_DATA.AppService.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <>
                  <div
                    key={num}
                    className=" p-6 space-y-4 bg-[#fff] border-[#0E1F51] border rounded-xl hover:translate-y-3  transition-all duration-700 ease-in-out"
                  >
                    <div className="flex items-center m-auto	 justify-center w-20 h-20 p-3 text-xl font-semibold bg-[#0E1F51]  rounded-full  ">
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
                      <h3 className="text-2xl font-extrabold text-[#0E1F51] group-hover:text-white transition-all duration-200 text-center">
                        {title}
                      </h3>
                      <p className="font-medium text-center text-black group-hover:text-white  transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <a href="/quote " className="mt-5">
              <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3  space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                SCHEDULE A CALL
              </button>
            </a>
          </div>
        </div>
        <div className=" bg-center bg-fixed bg-cover ">
          <div className="bg-[#6896AF] py-14">
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Why Should You Trust Comfygen to Create Pharmacy Delivery
                  Apps?
                </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">
                  We have become one of the top companies for medicine delivery
                  apps that offer reliable and transparent services. Our experts
                  can ensure that you have the opportunity to capitalize on
                  different advantages.{" "}
                </p>
              </div>
              <div className="grid lg:grid-cols-3 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.GetDoctor.map((item) => {
                  const { title, num, decs } = item;
                  return (
                    <div
                      key={num}
                      className="space-y-2 rounded-tl-[55px]	 rounded-br-[55px] border p-8 bg-[#02122D]"
                    >
                      <p className="text-2xl font-bold text-white">{title}</p>
                      {/* <p className="text-[#fff] transition duration-200 ease-in-out">{decs}</p> */}
                      <div
                        className="text-[#fff] transition duration-200 ease-in-out"
                        dangerouslySetInnerHTML={{ __html: item.decs }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <a href="/contact-us">
                  <button className="shadow-2xl  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Get Started
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>
        <TalkExpert />

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
                  src="/img/do-you-want-more-informatio.webp"
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
                    Do You Want More Information about Medicine Delivery App
                    Development Services?
                  </h2>
                  <p className="">
                    Reach out to our experts through the channels of your choice
                    and make the most of our expertise in developing medicine
                    delivery apps right now.
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
