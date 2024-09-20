import React, { useRef, useState } from "react";
import {
  MdDeveloperMode,
  MdOutlineSettingsBrightness,
  MdWeb,
} from "react-icons/md";
import Image from "next/image";
import "aos/dist/aos.css";
import { BsExclamationOctagon, BsLayers } from "react-icons/bs";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiExchangeLine, RiTeamLine } from "react-icons/ri";
import { IoLogoDesignernews } from "react-icons/io5";
import { VscExtensions } from "react-icons/vsc";
import { AiOutlineSecurityScan } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/reactjs.json";
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
    icon: <IoLogoDesignernews className="text-blue-400" size={50} />,
    title: "ReactJS UI/UX Development",
    decs: "The latest ReactJS features are used to create highly engaging UI designs and highly engaging web applications.",
  },
  {
    num: "2",
    icon: <MdDeveloperMode className="text-blue-400" size={50} />,
    title: "ReactJS Custom Development",
    decs: "To provide agility to our clients, our expert ReactJS developers create custom applications and solutions.",
  },
  {
    num: "3",
    icon: <MdOutlineSettingsBrightness className="text-blue-400" size={50} />,
    title: "ReactJS Maintenance and Support Services",
    decs: "To ensure the consistent and robust performance of applications, Comfygen offers ReactJS maintenance and support services.",
  },
  {
    num: "4",
    icon: <RiExchangeLine className="text-blue-400" size={50} />,
    title: "ReactJS Migration and Upgrade Services",
    decs: "We Upgrade existing web applications to the ReactJS framework securely with our ReactJS Migration services.",
  },
  {
    num: "5",
    icon: <VscExtensions className="text-blue-400" size={50} />,
    title: "ReactJS Plugins",
    decs: "We Make your ReactJS applications more functional and performant with custom plugins and extensions.",
  },
  {
    num: "6",
    icon: <MdWeb className="text-blue-400" size={50} />,
    title: "Portal Development",
    decs: "We build customizable and extensible large-scale portals based on client requirements, with easy access.",
  },
];

const WhyChoose = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <BsLayers size={60} className="text-blue-500" />,
    title: " A team of qualified IT specialists",
    decs: "Our team comprises more than 20 experienced React JS programmers who build high-performance solutions using well-structured code.",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <BsExclamationOctagon size={60} className="text-blue-500" />,
    title: "Track record of success",
    decs: "With 25+ React app development projects completed, I have gained sufficient experience.",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <RiTeamLine size={60} className="text-blue-600" />,
    title: "English Proficiency",
    decs: "We have a fluent English-speaking development team at Comfygen React. Our accent is clear and easy to understand, even though we don't claim to sound like native speakers.",
  },
  {
    num: "4",
    bg: "#F0F1F2",
    icon: <AiOutlineSecurityScan size={60} className="text-blue-600" />,
    title: "Security and Quality",
    decs: "A global outsourcing company, Comfygen, has obtained certifications for quality management and information security management according to ISO 9001:2015 and ISO/IEC 27001:2013, respectively.",
  },
];

export default function ReactJS(props) {
  let { initialData } = props;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          ReactJS Development Company In India & The USA | Hire React Developers
        </title>
        <meta
          name="description"
          content="Comfygen is a leading ReactJS development company In India & The USA, with a team of expert React developers who specialize in creating high-quality, scalable, and performance-driven ReactJS applications."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ReactJS Development Company In India & The USA | Hire React Developers "
        />
        <meta
          property="og:description"
          content="Comfygen is a leading ReactJS development company In India & The USA, with a team of expert React developers who specialize in creating high-quality, scalable, and performance-driven ReactJS applications."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-js-development"
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
          content="https://www.comfygen.com/images/react-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name="language" content="en-us" />
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
                heading="React.js Development Company"
                ptag="Partner with Comfygen and get easy navigable apps adhering to a trustable React JS Development Company In India & The USA. We are responsible for building responsive and high performing web apps with interactive user interfaces meeting all your business needs. Opt our flexible and quick React JS development services with the expertise of skilled developers to reach desired scalability."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/reactjs-development-company.webp"
                Width={599}
                Height={638}
                altTag="ReactJS Development Company"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        {/* services */}
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-3 text-center">
              <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  ReactJS <span className="text-blue-600">Development</span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  Our company provides innovative web application development
                  services using React JS development environment.
                </p>
              </div>

              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Services.map((elem) => {
                  const { icon, title, decs, num } = elem;
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
        <Advice
          heading=" Best ReactJS Development Service Provider"
          ptag=" Our React.js development company knows how to fully advantage of this software development technology. Due to its virtual DOM, React.js ensures high performance and beautiful user interfaces. It simplifies and speeds up the development process by allowing the reusing of existing components. Using React, our developers can deliver robust web applications that integrate SEO seamlessly, are easy to migrate, and are fast to debug."
          imgSrc="/images/reactJS-development-service.webp"
          imgW={400}
          imgH={670}
          altTag="Best ReactJS Development Service Provider"
        />
        <section className="py-10">
          <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                src="/images/reactjs-web-development.webp"
                alt=" ReactJS web application development"
                className="rounded-md pb-10 lg:pb-0"
                width={500}
                height={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <p className="text-blue-600 font-semibold text-[18px]">
                ReactJS App development Company{" "}
              </p>
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  ReactJS web application development
                </h2>
              </div>
              <p className="text-base text-black">
                {` We Provide full-service web application development, including business analysis, user interface, user experience design, front-end and back-end development, testing, and support.`}
              </p>
              <p className="text-base text-black">
                {`Our architects and engineers are experienced in developing scalable, robust, and secure web applications of any complexity:`}
              </p>
              <ul className="list-disc px-4">
                {JSON_DATA.myList2.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Advantages of Using React.JS
                </h2>
              </div>
              <p className="text-base text-black">
                {`JS libraries such as React are a favorite of the Comfygen development team.`}
              </p>

              <ul className="list-disc px-4">
                {JSON_DATA.myList1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex lg:justify-end justify-center w-full lg:w-1/2 pb-6 lg:pb-0">
              <Image
                src="/img/advantages-of-using-reactjs.webp"
                alt="Advantages of Using React.JS"
                className="rounded-md"
                width={500}
                height={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <section
          className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
          style={{
            backgroundImage: `url("/img/hire-reactjs-web-developer.webp")`,
          }}
        >
          <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#1C7AEBCC]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </div>
        </section>

        <section className="w-11/12 py-10 mx-auto bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                {" "}
                React.JS{" "}
                <span className="text-blue-500"> Development Services </span> in
                India
              </h2>
              <p className="text-base text-slate-800 ">
                Our React.JS Experts develop APIs according to the requirements
                of different pieces of programming. A part of the application
                can be accessed via APIs, or assistance can be accessed remotely
                via APIs.
              </p>
            </div>
            <div className="relative flex items-center justify-center py-10">
              <div className="absolute z-10 md:-left-6 -left-4">
                <div
                  onClick={previous}
                  className="px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500"
                >
                  <BiChevronLeft className="text-[1.4rem]" />
                </div>
              </div>
              <Slider
                ref={sliderRef}
                {...settingstwo}
                className="flex items-center w-full"
              >
                {JSON_DATA.Planning.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="px-4">
                      <div
                        className="p-3 relative bg-slate-100 cursor-pointer rounded-[17px] h-96"
                        style={{ backgroundColor: elem.bg }}
                      >
                        <div className="top-0 text-right text-[48px] font-bold text-blue-500   w-24 h-24 bg-[#ffffff] rounded-[17px] flex justify-center items-center">
                          {num}
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg pt-4   text-[#0E1F51] font-semibold group-hover:text-white">
                            {title}
                          </h3>
                          <div className="flex justify-start space-x-2">
                            <div className="w-10 h-1 bg-blue-600 rounded-full "></div>
                            <div className="w-6 h-1 bg-blue-600 rounded-full "></div>
                          </div>
                          <div className="space-y-2">
                            <p className="break-all   text-[#000000] group-hover:text-white/90">
                              {decs}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
              <div className="absolute -right-4">
                <div
                  onClick={next}
                  className="px-4 py-2 text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500"
                >
                  <BiChevronRight className="text-[1.4rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-left">
                <h4 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Choose Us As Your{" "}
                  <span className="text-[#3B82F6]">
                    React.JS Development Company?
                  </span>
                </h4>
                <p className="text-base text-slate-800">
                  As one of the leading React.js app development companies,
                  Comfygen has earned a reputation for excellence. Our customers
                  appreciate our front-end, back-end, and interactive user
                  interface development services. Comfygen's customers choose us
                  for the following reasons:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
                {WhyChoose.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {icon}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold ">{title}</h3>
                        <p className="break-all text-slate-800 ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  ReactJS Development Technology"
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
