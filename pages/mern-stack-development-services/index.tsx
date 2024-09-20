import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";
import { AiOutlineSolution } from "react-icons/ai";
import Head from "next/head";
import { useState } from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiCustomerServiceLine, RiLeafLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/mernstack.json";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Services2 = [
  {
    num: "1",
    icon: <MdOutlineDesignServices className="text-blue-400" size={50} />,
    title: "Maintenance and support of technical equipment",
    decs: "Our employees will be available to assist you with your development queries once we have completed the project development from Comfygen.",
  },
  {
    num: "2",
    icon: (
      <HiOutlinePresentationChartLine className="text-blue-400" size={50} />
    ),
    title: "Implementation of React JS on the web",
    decs: "The MERN web application development process uses React JS. Whenever you have a React JS web development requirement, we can create it for you.",
  },
  {
    num: "3",
    icon: <RiLeafLine className="text-blue-400" size={50} />,
    title: "Development of MongoDB applications",
    decs: "MongoDB development and support will be enabled for you when we implement MongoDB in your project. ",
  },
  {
    num: "4",
    icon: <AiOutlineSolution className="text-blue-400" size={50} />,
    title: "E-commerce solution using MERN",
    decs: "It is also possible to develop e-commerce applications using the MERN stack. If you are interested in getting a customized E-commerce solution in the MERN stack, you can contact us.",
  },
  {
    num: "5",
    icon: <IoLogoNodejs className="text-blue-400" size={50} />,
    title: "Express JS development",
    decs: "MERN Stack development includes Express JS; we have the experts to handle Express JS development",
  },
  {
    num: "6",
    icon: <ImStack className="text-blue-400" size={50} />,
    title: "MERN Stack web development ",
    decs: (
      <p>
        With MERN stack{" "}
        <a href="/web-development" className="text-blue-600">
          web development
        </a>{" "}
        , you can build a full stack of components inside a single platform.
      </p>
    ),
  },
];
export default function Stack(props) {
  let { initialData } = props;

  useEffect(() => {
    AOS.init();
  }, []);
  const [currentCount, setCurrentCount] = useState(0);
  return (
    <>
      <Head>
        <title>
          Full Stack MERN Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading MERN Stack development company In India & The USA. We offers full-stack development services to build scalable and robust web applications using MongoDB, Express, React, and Node.js technologies."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mern-stack-development-services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Full Stack MERN Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading MERN Stack development company In India & The USA. We offers full-stack development services to build scalable and robust web applications using MongoDB, Express, React, and Node.js technologies."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/mern-stack-development-services"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="http://www.comfygen.com/images/illuslator/mern-stack.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="MERN Stack Development Company"
                ptag="Comfygen is here to service provider of custom web application development with the combination of MERN Stack Development Services and Solutions. Be ready for the enhanced user experiences, high performing functionalities, scalability and improvised user engagement with the skilled MERN Stack Developers from In India & The USA. Experience the excellent potential of MERN Development Technologies."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/mern-stack-development-company.webp"
                Width={585}
                Height={625}
                altTag="MERN Stack Development Company"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py- text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  MERN <span className="text-blue-600">Stack Development </span>{" "}
                  Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services2.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-10 md:px-0">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                className="rounded-md"
                title=" MERN Stack Achivments?"
                alt=" MERN Stack Achivments?"
                src="/images/best-mern-stack-development-service-provider.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

            <div className="w-full lg:w-1/2 space-y-6 text-left lg:px-5">
              <h2 className="text-4xl font-bold text-[#0E1F51] space-y-4">
                MERN Stack Achivments?
              </h2>
              <div>
                <ul className=" space-y-5 text-base list-decimal">
                  {JSON_DATA.myList2.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-start space-x-6 bg-white rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <RiCustomerServiceLine className="text-[3.5rem] text-blue-500 " />
                </div>
                <div>
                  <h3 className="text-[#0E1F51] text-lg font-extrabold ">
                    Get Instant Professional Advice
                  </h3>
                  <p className="text-sm">
                    Ready to Help :
                    <span className="font-bold text-blue-600">
                      <a href="tel:9587867258"> +91 9587867258</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  MERN Stack Software Development
                </h2>
              </div>
              <p className="text-base text-black ">
                Create feature-rich web apps with{" "}
                <a
                  href="/mern-stack-development-services"
                  className="text-blue-500"
                >
                  MERN Stack Development
                </a>{" "}
                Services Comfygen has expertise in MongoDB, Express.js,{" "}
                <a href="/react-js-development" className="text-blue-500">
                  React.js
                </a>{" "}
                , and{" "}
                <a href="/node-js-development" className="text-blue-500">
                  NodeJS
                </a>{" "}
                , the underlying technologies of the MERN Stack. Our clients
                benefit from our use of the MERN stack to build customized
                solutions. The web solutions we provide are tailored to fit the
                needs of your business.
              </p>
            </div>
            <div className="flex justify-center w-full md:w-1/2 2xl:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Mern Stack Software Devlopment"
                alt="Mern Stack Software Devlopment"
                src="/images/mern-stack-software-development.webp"
                height={400}
                width={300}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <Advice
          head="We are  Mern Stack Development Company "
          heading="Best MERN Stack Development Service Provider"
          ptag="We provide highly efficient and scalable MERN Stack development services to help you stay ahead of the competition. We are uniquely positioned to design robust web applications for a wide range of requirements thanks to our professional MERN Stack developers and proven operational models. You can work with our professional MERN Stack developers, software engineers and experts for the development of your project. A wide range of clients and top companies trust Comfygen. Make your work easier and more effective by hiring MERN stack developers."
          imgSrc="/img/best-mern-stack-development-service-provider.webp"
          imgW={585}
          imgH={559}
          altTag="Best Mern Stack Devlopment Service Provider"
        />

        <section className="px-5 py-10 lg:px-0">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <p className="text-xl font-light text-blue-600 ">
                  MERN Stack development Company{" "}
                </p>
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Benefits of MERN Stack Development?
                </h2>
              </div>
              <div>
                <ul className="space-y-5 list-disc">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 md:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Benefits of MERN Stack Development?"
                alt="Benefits of MERN Stack Development?"
                src="/images/benefits-of-mern-stack-development.webp"
                height={559}
                width={585}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <div className="py-10">
          <section
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-mern-stack-developer.webp")`,
            }}
          >
            <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#82AB10CC] backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </div>
          </section>
        </div>

        <section className="w-11/12 pt-10 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col-reverse items-center py-10 space-y-10 lg:flex-row md:space-y-0 lg:space-x-10 ">
            <div className="w-full lg:w-1/2 space-y-6 text-center md:text-left md:mt-0">
              <div className="space-y-3">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  MERN Stack Development Services in India
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-sm leading-7 text-gray-800">
                  With Comfygen's highly efficient and scalable MERN Stack
                  development services, you'll stay ahead of your competitors.
                  We are able to design robust web apps for a wide range of
                  requirements due to our professional MERN stack developers,
                  proven operational models, and in-depth domain expertise.
                  Providing reliable, round-the-clock support and leveraging the
                  power of MongoDB, Express.js, React, and Node.js, we're a
                  leading MERN stack development company with clients worldwide.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/mern-stack-development-india-transformed.webp"
                alt="MERN Stack Development Services in India"
                className="rounded-lg "
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-y-0">
            <div className="flex justify-center w-full">
              <Image
                src="/images/customized-mern-stack.webp"
                alt="Get Your Own Customized MERN Stack  Development Solution At Comfygen"
                className=""
                height={400}
                width={400}
              />
            </div>
            <div className="space-y-6 lg:w-[80%] w-full md:text-left text-center">
              <div className="space-y-3">
                <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Get Your Own Customized MERN Stack Development Solution At
                  Comfygen
                </h2>
              </div>
              <p className="text-base text-slate-800">
                Comfygen is a full-service digital consultancy and software
                development company providing top-notch web and mobile app
                solutions for all business heads, SMEs, and new startups to
                globally-dispersed clients.
              </p>
              <p className="text-base text-slate-800">
                Being India’s leading MERN stack development company, we help
                you leverage the best features of MERN(MongoDB, Express.js,
                React, and Node.js) stack technology with scalable, reliable,
                and round-the-clock support.
              </p>
              <p className="text-base text-slate-800">
                We help your business to break new ground, together and stay
                ahead of the competition with highly efficient MERN Stack
                development services. Our professional MERN Stack developers are
                known for developing top-notch software solutions as well as
                mobile apps to match your business requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-blue-400 to-indigo-800">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            {/* text-section */}
            <div className="space-y-2 text-center">
              <h2 className=" py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Why Opt Mern Stack Development <br /> For Your Business?
              </h2>
              <p className="text-base text-white">
                In the present day scenario of tech trends with millions of
                customers demanding mobile apps and web solutions, it is a
                complex task to choose the right stack of technology for your
                business requirement.
              </p>
              <p className="text-base text-white">
                MERN is a collection of four frameworks(MongoDB - database tool,
                ExpressJS - web framework, ReactJS - front-end JavaScript
                framework, NodeJS - back-end JavaScript platform). It provides
                an end-to-end framework for quick and easy development that is
                one of the main reasons behind its evolving vogue.
              </p>
            </div>
            <div className="grid gap-10 pt-8 text-sm lg:grid-cols-6 md:grid-cols-2 xl:gap-8">
              {JSON_DATA.Business.map((elem) => {
                const { img, title } = elem;
                return (
                  <div className="p-6 space-y-4 transition duration-150 bg-white cursor-pointer bg-opacity-20 rounded-xl drop-shadow-2xl hover:-translate-y-6">
                    <Image
                      src={img}
                      alt={title}
                      title="Mern Stack Development"
                      className="mx-auto"
                      height={200}
                      width={200}
                    />
                    <p className="font-medium text-center text-white">
                      {title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="py-4 space-y-4 w-4/6 mx-auto  text-center">
              <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Why Choose Us As{" "}
                <span className="text-blue-500">
                  {" "}
                  Your MERN Stack Development
                </span>{" "}
                Company?
              </h2>
              <p className="text-base text-slate-800">
                Our MERN Stack development company in India leverages the rich
                capabilities of the MERN (MongoDB, NodeJS, Express JS, and React
                JS) stack, along with years of technical expertise. Your
                business requirements can be met with our feature-rich and
                highly functional web apps.As a MERN Stack partner, we ensure
                that your projects are delivered within the deadline and in a
                cost-effective manner.
              </p>
            </div>
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2 divide-x-1">
              {JSON_DATA.ChooseUs.map((elem) => {
                const { title, bg, num } = elem;
                return (
                  <div
                    style={{ backgroundColor: `${bg}` }}
                    className="flex justify-start items-center rounded-full space-x-3 py-3 px-4"
                  >
                    <div className="flex items-center justify-center font-semibold bg-white rounded-full shadow-xl h-14 w-14">
                      <p className="text-xl text-right">{num}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  What exactly is MERN Stack?
                </h2>
              </div>
              <p className="text-base text-black ">
                The abbreviation MERN stands for MongoDB, Express.js, ReactJS,
                and Node.js. The combination of these four frameworks makes MERN
                Stack a powerful tool to create high-performing web and mobile
                apps.
              </p>
              <p className="text-base text-black ">
                MERN Stack is open source technology that is based on
                JavaScript. Our MERN Stack developers are well-equipped with the
                features of these frameworks. They make sure to develop reliable
                and robust mobile app solutions that stand out in the crowd and
                deliver the best to your customers.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-start pb-6 lg:pb-0">
              <Image
                className="rounded-md"
                title="  What exactly is MERN Stack?"
                alt="  What exactly is MERN Stack?"
                src="/img/what-exactly-mern-stack.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  MERN Stack Development "
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
