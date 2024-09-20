import React, { useState } from "react";
import {
  MdOutlineSettingsSuggest,
  MdOutlineSupportAgent,
  MdTransform,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import { BsDot } from "react-icons/bs";
import { BiConversation, BiRadioCircleMarked, BiStar } from "react-icons/bi";
import { TbCircleDot } from "react-icons/tb";
import Head from "next/head";
import { DiNodejsSmall } from "react-icons/di";
import { FiPackage } from "react-icons/fi";
import { SiConvertio } from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineApi } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nodejs.json";
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
const Services = [
  {
    num: "1",
    icon: <DiNodejsSmall className="text-blue-400" size={50} />,
    title: "Node.Js Custom Development",
    decs: "We as a Node.js Development Company Provide our clients with high-performing, scalable, secure, and user-friendly business apps tailored to their needs.",
  },
  {
    num: "2",
    icon: <BiConversation className="text-blue-400" size={50} />,
    title: "Node.Js Consulting",
    decs: "Our Node.JS Consulting Services are cost-effective and seamless across the globe, depending on the project specifications and business vertical. ",
  },
  {
    num: "3",
    icon: <AiOutlineApi className="text-blue-400" size={50} />,
    title: "API Integration And Development",
    decs: "The Node.js programmers at our company are adept at developing API-based Node.js solutions that are scalable and resilient.",
  },
  {
    num: "4",
    icon: <FiPackage className="text-blue-400" size={50} />,
    title: "Package Development",
    decs: "Node.js developers at our company have a wealth of experience creating reusable packages.",
  },
  {
    num: "5",
    icon: <SiConvertio className="text-blue-400" size={50} />,
    title: "Node.Js Application Migration",
    decs: "Utilize the benefits of our expertise by migrating any existing framework application to Node.js.",
  },
  {
    num: "6",
    icon: <MdOutlineSupportAgent className="text-blue-400" size={50} />,
    title: "Node.JS Maintenance And Support",
    decs: "We as a Node.js Development Company provide complete support and maintenance services to make sure your Node.js applications are regularly updated, scalable, and performing well.",
  },
];
const ChooseUs = [
  {
    num: "1",
    icon: <MdTransform className="text-blue-400" size={50} />,
    bg: "#FEEFEB",
    title: "Engagement-Models-With-Flexibility",
    decs: "Developers can be hired hourly or on a fixed rate basis for customized and customer-centric engagement models.",
  },
  {
    num: "2",
    icon: <MdOutlineSupportAgent className="text-blue-400" size={50} />,
    bg: "#F0EEFC",
    title: "Transparency at its best",
    decs: "Our team and clients are always on the same page because of our 100% transparency policy.",
  },
  {
    num: "3",
    icon: <GiNetworkBars className="text-blue-400" size={50} />,
    bg: "#F3F7E7",
    title: "Developers with experience",
    decs: "The developers on our team have years of experience in a wide range of business domains and handle your unique business needs efficiently.",
  },
  {
    num: "4",
    icon: <CiDeliveryTruck className="text-blue-400" size={50} />,
    bg: "#F1F5F9",
    title: "Deliveries on time",
    decs: "By following the highest quality standards, we value time and are particular about timely deliveries.",
  },
  {
    num: "5",
    icon: <MdOutlineSettingsSuggest className="text-blue-400" size={50} />,
    bg: "#E9F4FF",
    title: "Support for technical issues",
    decs: "We have expert technical support staff to help you with any technical questions! Obtain the best possible solution through fruitful interaction.",
  },
];
export default function Altcoin(props) {
  let { initialData } = props;

  const [currentCount, setCurrentCount] = useState(0);

  return (
    <>
      <Head>
        <title>
          Node.Js Development Company In India & The USA | Hire Node.Js
          Developer
        </title>
        <meta
          name="description"
          content="Comfygen know as best Node.js development company In India & The USA, We offers expert Node.js development services to build fast and scalable server-side applications using the latest Node.js technologies."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/node-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Node.Js Development Company In India & The USA | Hire Node.Js Developer"
        />
        <meta
          property="og:description"
          content="Comfygen know as best Node.js development company In India & The USA, We offers expert Node.js development services to build fast and scalable server-side applications using the latest Node.js technologies."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/node-js-development"
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
          content="https://www.comfygen.com/images/node-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
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
                heading="Node.js Development Company"
                ptag="As the leading Node JS Development Company In India & The USA, Comfygen delivers reliable and scalable software solutions in real time. Book the consultation call with our experts Node JS Developers to meet your business goals and fulfill the requirements. We are your one stop destination to build super functioning and advance skilled custom webs and apps with crafted Node JS Solutions. We are a company providing efficient solutions to plan and execute your business needs."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        {/* services */}
        <section className="py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-3">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  <span className="text-blue-500">Node.js Development</span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  Our Node.js development services meet business objectives by
                  combining technology expertise and business acumen.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
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
        {/* solution  */}
        <Advice
          head="Node.Js development Company"
          heading=" Best Node.Js Development Solutions Provider"
          ptag="We are the provider of Node.js Development Solutions with up-to-date knowledge and advanced skills, we are always prepared to create server-side applications and backend solutions. We are the NodeJS development company you need if you want a powerful Node.JS API or to migrate your existing backend system to NodeJS."
          ptag1="Comfygen provides feature-rich, high-performance, and scalable Node.js web and mobile applications.JS."
          imgSrc="/images/best-nodejs-development-solutions-provider.webp"
          imgW={557}
          imgH={449}
          altTag="Best Node.Js Development Solutions Provider"
        />
        <section className="py-20 bg-[#41549E]">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            {/* text-section */}
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-extrabold text-white capitwhitealize">
                Node.js and IoT – Perfect for each other
              </h2>
              <div className="flex justify-center"></div>
              <p className="text-white">
                When we talk about the Internet of Things, various devices like
                sensors, beacons, transmitters, and so on must be connected. The
                Node.js platform is suitable for handling such interconnected
                devices that generate a lot of data transactions. Due to the
                fact that Node.js works with streams, readable and writable
                channels, this is the case.{" "}
              </p>
              <p className="text-white">
                We are the provider of Node.js Development Solutions with
                up-to-date knowledge and advanced skills, we are always prepared
                to create server-side applications and backend solutions. We are
                the NodeJS development company you need if you want a powerful
                Node JS API or to migrate your existing backend system to
                NodeJS.
              </p>
              <p className="text-white">
                Node.js has the advantage of supporting JavaScript. Using and
                understanding it is very simple. IoT development is made easier
                with Node.js' capability to collect data, communicate
                effectively and quickly, analyze, and act. Node.js is
                well-suited for developing IoT applications in this manner.
              </p>
              <p className="text-white">
                Whether you want to integrate Node.js into your existing system
                for scalability and feature richness or build new applications
                from scratch, we can help you drive maximum ROI.
              </p>
            </div>
          </section>
        </section>
        <section className="py-20">
          <div className="items-center justify-between w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                src="/images/nodejs-web-development-services.webp"
                alt="Node.js web Development services"
                className="rounded-lg"
                height={500}
                width={500}
              />
            </div>
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h2 className="text-[40px] font-extrabold leading-10 text-[#0E1F51]">
                  Node.js web Development services
                </h2>
              </div>
              <p className="text-base ">
                Discover our extensive Node js web Development services for
                building mobile, web, and cloud applications.
              </p>
              <div>
                <ul className="space-y-2">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <TbCircleDot className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-2 text-center mx-auto lg:w-4/6">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Pros and Cons of Using Node js
              </h2>
              <p className="text-base text-slate-800">
                Javascript is executed outside the browser using Node.js, making
                it a general-purpose language that you can take full advantage
                of. With Node.js, you can build data-heavy websites or real-time
                applications as well as increase the app's speed and security.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="w-11/12 pt-10 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col items-center py-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10 ">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                src="/images/node-js-pros.webp"
                alt="Pros:"
                className="rounded-lg w-6/6"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full mt-10 space-y-6 text-center md:text-left md:mt-0">
              <div className="space-y-3">
                <h2 className="text-4xl font-bold leading-10 text-gray-800">
                  Pros:
                </h2>
              </div>
              <div>
                <ul className="space-y-2">
                  {JSON_DATA.Pros.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BiRadioCircleMarked className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex  lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h2 className="text-4xl font-semibold leading-10 text-black">
                  {" "}
                  Cons:
                </h2>
              </div>
              <div>
                <ul className="space-y-2">
                  {JSON_DATA.Cons.map((item, index) => (
                    <li className="flex text-left" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsDot className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center w-full md:justify-end 2xl:justify-center pb-10 lg:pb-0">
              <Image
                src="/images/node-js-cons.webp"
                alt="Cons:"
                className="rounded-lg"
                height={500}
                width={500}
              />
            </div>
          </div>
        </section>

        <Advice
          heading=" Node.js developers"
          ptag=" The Node JS framework is one of the most popular frameworks out there. As a result, most of our web applications are developed using it in the back-end. Companies can launch outstanding applications thanks to its platform's speed and performance. Expertise for the job can be difficult to find at a reasonable price, however. In order to build a powerful backend for the project, an expert in node js is needed."
          ptag1=" The annual salary for a remote Node js developer should be between $31,680 and $150,000. The cost of remote Node js developers ranges from $22 to $80 per hour. By understanding why developer hourly wages differ, you can make better decisions."
          imgSrc="/images/nodejs-developers.webp"
          imgW={560}
          imgH={331}
          altTag="Node.js developers"
        />

        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/images/hire-nodejs-developer.webp")`,
            }}
          >
            <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#5EA70F]/80 backdrop-blur-md p-10 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start lg:pb-0 pb-10">
              <Image
                src="/images/node-s-development-services-in-india.webp"
                alt="Node.JS Development Services in India"
                className="rounded-lg"
                height={600}
                width={600}
              />
            </div>
            <div className="w-full space-y-6 text-center lg:w-1/2 md:text-left">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold leading-10 text-[#0E1F51]">
                  {" "}
                  Node.JS Development Services in India
                </h2>
              </div>
              <div className="space-y-5 text-left">
                <p>
                  Providing high-performance custom digital products for
                  companies of all sizes - from small companies to large
                  enterprises - our team consists of Node.js developers, UI/UX
                  designers, QA specialists, and developers across various
                  technologies to help clients stay ahead of the competition.
                </p>
                <p>We provide the following Node.js development services: </p>
              </div>
              <div>
                <ul className="space-y-2">
                  {JSON_DATA.Development.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BiStar className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-20">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center lg:w-1/2 md:text-left">
              <div className="space-y-3">
                <h2 className="text-4xl font-extrabold leading-10 text-[#0E1F51]">
                  What is the process for working with us?
                </h2>
              </div>
              <p className="text-base text-black">
                Check out the Engagement Models{" "}
              </p>

              <div className="flex justify-center md:justify-start">
                <Link
                  href="/contact-us/#form"
                  passHref={true}
                  className="group [transform:translateZ(0)] px-6 py-3 rounded-full overflow-hidden  relative before:absolute cursor-pointer before:bg-blue-500   before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 text-blue-600 border-blue-500 border"
                >
                  <span className="relative z-0 transition duration-500 ease-in-out group-hover:text-white ">
                    Request a quote.
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 md:justify-start">
              <Image
                src="/images/process-for-working-with-node-js.webp"
                alt="What is the process for working with us?"
                className="rounded-lg"
                height={400}
                width={400}
              />
            </div>
          </div>
        </section>

        <div className="py-10">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-left lg:w-4/6">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  {" "}
                  Why Choose Us for{" "}
                  <span className="text-[#3B82F6]"> Your Node.Js </span>{" "}
                  Development Service ?
                </h2>
                <p className="text-base text-slate-800">
                  With the most advanced technologies, Comfygen strives to
                  provide innovative and better results. Count on us for
                  dependability, trust, and reliability. Keeping up with the
                  latest trends and anticipating changes, we ensure that it is
                  enforced in a way that empowers you digitally.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
                {ChooseUs.map((elem) => {
                  const { title, icon, decs, bg } = elem;
                  return (
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="space-y-0 text-left transition duration-150 scale-100 bg-white  rounded-[40px] cursor-pointer p-10 relative"
                    >
                      <div className="w-20 h-20 bg-[#ffffff] rounded-[17px]  flex justify-center items-center">
                        <span>{icon}</span>
                      </div>
                      <h3 className="text-xl font-extrabold pt-3 text-[#0E1F51] ">
                        {title}
                      </h3>
                      <p className="font-medium text-black break-all line-clamp-4">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <TalkExpert />

        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  Node.JS Development Solutions"
        />

        {/* </div> */}
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
