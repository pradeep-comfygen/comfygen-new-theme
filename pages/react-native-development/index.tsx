import React, { useState } from "react";
import { MdCallMade } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  RiBuilding4Line,
  RiCustomerServiceLine,
  RiUserStarLine,
} from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { AiOutlineInteraction } from "react-icons/ai";
import { CgUiKit } from "react-icons/cg";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/reactnative.json";

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
const AdviceSection = dynamic(() => import("../components/Advice"), {
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
    icon: <SiReact className="text-blue-400" size={50} />,
    title: "Development of React Native applications",
    decs: "Using our improved methodologies and out-of-the-box approach using React Native, we turn your business needs into highly productive and profitable mobile app ecosystems. ",
  },
  {
    num: "2",
    icon: <RiBuilding4Line className="text-blue-400" size={50} />,
    title: "Apps built with React Native for iOS and Android",
    decs: "Optimize your mobile development processes using React Native to build native apps for Android and iOS. Our hybrid apps can deliver exceptional UI and feature-rich functionality that many hybrid apps cannot.",
  },
  {
    num: "3",
    icon: <AiOutlineInteraction className="text-blue-400" size={50} />,
    title: "Services for integration and migration",
    decs: "Our experts have hands-on experience with both integration and migration. Our team uses React Native to build a wide range of applications. Additionally, we are adept at migrating apps from other platforms without losing data.",
  },
  {
    num: "4",
    icon: <RiUserStarLine className="text-blue-400" size={50} />,
    urlLink:"ca/application-consulting-services",
    title: "Consulting on React Native",
    decs: "From product concept to rollout, our experts help you develop a product concept that meets your requirements.To achieve your corporate goals, we carefully examine the information provided by clients.",
  },
  {
    num: "5",
    icon: <CgUiKit className="text-blue-400" size={50} />,
    title: "UI/UX",
    decs: "With Comfygen, you will get the most engaging and creative user experience with the React Native library. To ensure UI/UX gaps are filled, we strive to deliver a real-time experience across multiple devices.",
  },
  {
    num: "6",
    icon: <BiSupport className="text-blue-400" size={50} />,
    title: "Support and Maintenance Services",
    decs: "The need for care and control after the release of a product cannot be overstated. In order to ensure that your product functions as expected after launch, we provide post-launch support and maintenance.",
  },
];

export default function Altcoin(props) {
  let { initialData } = props;
  let { Frequently, myList, Hire, NewSections } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Top React Native Development Company | Custom React Native App
          Development
        </title>
        <meta
          name="description"
          content="Looking for a reliable Indian React Native development company in India to build custom apps for your business? Contact us today for a free consultation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-native-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top React Native Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading React Native Development Company in India, widely known for its expertise to build web and mobile app development  for your business. Contact us today."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-native-development"
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
        <meta name="language" content="en-us" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/react-native-development"
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
                heading="React Native Development Company"
                ptag="Comfygen is ready to build highly functional and user friendly applications with React Native Service Technology. Our experts use React to develop highly functioning cross-platform mobile applications boosting the productivity of client’s business. We are your top tech partner for the React Native App Development Services promising to provide end-to-end solutions using remarkable coding standards and interactive UI/UX designs."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  <span className="text-[#3B82F6]"> Our React Native</span>{" "}
                  Development Services
                </h2>
                <p className="text-base text-slate-800">
                  We can help you build a high-performing application utilizing
                  cutting-edge technologies, from designing an intuitive user
                  interface to building multi-platform applications for iOS and
                  Android.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Services.map((elem) => {
                  const { icon, title, decs, num,urlLink } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                      urlLink={urlLink}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <AdviceSection
          head="We are Development Company"
          heading="React Native app Development Company"
          ptag="  React Native brings together the best of native development and React, a JavaScript library for building user interfaces. Create Android, iOS, Web, and UWP applications. React Native is flexible and scale able, so you can adapt it as much or aslittle as you need. Boost your distribution and exposure. Get a better understanding of your users data to enhance your
          marketing efforts and interactions."
          ptag1=" You can build anything mobile-worthy, whether its a news aggregator, ride-sharing service, or anything else. You will make the right choice when you choose React Native."
          imgSrc="/images/react-native-app-development-company.webp"
          imgW={564}
          imgH={559}
          altTag="React Native app Development Company"
        />
        <div className="container flex justify-center w-11/12 py-10 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <Image
            width={800}
            height={800}
            className="object-cover "
            src="/images/react-native-dev.webp"
            alt="react-native-dev"
          />
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/images/hire-react-native-app-developer-india.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0037AC]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <div className="py-10">
          <div className="py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 md:space-y-10">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <div className="space-y-3">
                    <h3 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                      We Provide React Native App Migration Services
                    </h3>
                    <p className="">
                      As Businesses need to keep up with the technological
                      landscape as it evolves. For modernizing legacy apps,
                      React Native is the best solution. With powerful legacy
                      app modernization services, we can help you re-configure
                      your legacy apps or convert them completely to React
                      Native for better UI and UX. Businesses have benefited
                      from React Native in a number of ways, including:
                    </p>
                  </div>
                </div>
                <div>
                  <Link href="/about-us" passHref={true}>
                    <div className="py-6">
                      <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-blue-600 rounded-full cursor-pointer group">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        know More
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex lg:justify-end justify-center w-full pb-10 lg:pb-0">
                <Image
                  width={500}
                  height={500}
                  src="/images/migration-services.webp"
                  alt="We Provide React Native App Migration Services"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="py-10">
          <div className="py-10 bg-gray-100">
            <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex md:space-x-10 md:space-y-0">
              <div className="flex justify-center w-full md:justify-start pb-10 lg:pb-0">
                <Image
                  width={500}
                  height={500}
                  src="/images/react-native-consulting-services.webp"
                  alt="React Native Consulting Services"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full space-y-6 text-left">
                <h3 className="text-[40px] font-bold leading-10 text-[#0E1F51]">
                  React Native Consulting Services
                </h3>
                <p className="text-[16px] font-[500px] text-[#000000]">
                  Build cross-platform applications with a native look and feel
                  by hiring React Native consultants. In order to build a simple
                  yet intuitive application, we'll guide you through a detailed
                  guide after accurately identifying your venture requirements.
                </p>
                <div className="flex items-center justify-start p-4 space-x-6 bg-white rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RiCustomerServiceLine className="text-[3.5rem] text-blue-600 " />
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
            </section>
          </div>
        </div>
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-2xl"
              style={{
                backgroundImage: `url("/images/react-native-app-development.webp")`,
              }}
            >
              <div className="bg-gradient-to-b from-[#0C0A81]/70 to-[#A46BF2]/70 rounded-2xl py-10 ">
                <div className="flex flex-col items-center justify-between px-5 py-3 space-y-3 md:flex-row lg:px-20 md:px-10 md:space-y-0">
                  <div className="w-full">
                    <Image
                      width={400}
                      height={400}
                      src="/images/react-native-development.webp"
                      alt="react-native-development"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="text-white md:text-[40px] text-[30px] font-bold">
                      Kickstart Your Dream Project With Us
                    </h4>
                    <p className="text-white text-[16px] pt-4">
                      We have worked with some of the best innovative ideas and
                      brands in the world across industries.
                    </p>
                    <Link href="/contact-us " passHref={true}>
                      <div className="py-6">
                        <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-96 group-hover:h-96 opacity-10"></span>
                          <MdCallMade />
                          <span>Initiate a Partnership</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="py-10">
          <div className="py-10">
            <section className="flex flex-col-reverse items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
              <div className="w-full py-4 space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <h4 className="text-[40px] font-bold leading-10 text-[#0E1F51]">
                    Cost of React Native App Development
                  </h4>
                </div>
                <div className="space-y-3 ">
                  <p className="text-[16px] font-[500px] text-[#222222]">
                    The React Native framework is free and open-source. The
                    development of your idea will require the assistance of a
                    team of experts. It is possible to accomplish this by
                    building up your own team or outsourcing your entire
                    project.
                  </p>
                  <p className="text-[16px] font-[500px] text-[#222222]">
                    If you are looking to implement a number of features in your
                    project, you will have to invest a certain amount of money
                    in a team. The hourly rate of the software developers you
                    want will determine your level of investment.
                  </p>
                  <p className="text-[16px] font-[500px] text-[#222222]">
                    Depending on your project, you may have to build and develop
                    with React Native. As a result, the costs may be similar to
                    those associated with software development.
                  </p>
                </div>
                <Link href="/contact-us" passHref={true}>
                  <div className="py-6">
                    <div className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg text-white bg-blue-600 rounded-full cursor-pointer group">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      Get Quotation
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center w-full lg:justify-end">
                <Image
                  width={500}
                  height={500}
                  src="/images/react-native-consulting-service.webp"
                  alt="react-native-consulting-service"
                  className="rounded-lg"
                />
              </div>
            </section>
          </div>
        </div>
        <TalkExpert />

        <FaqSection
          faqData={Frequently}
          title=" React Native App Development Services"
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
