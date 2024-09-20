import React, { useRef, useState } from "react";
import { MdDevicesOther } from "react-icons/md";
import Image from "next/image";
import "aos/dist/aos.css";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiTeamLine } from "react-icons/ri";
import { BiChevronLeft, BiChevronRight, BiSupport } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineUngroup } from "react-icons/ai";
import { CgPlug } from "react-icons/cg";
// import { HiOutlineIdentification } from "react-icons/hi2";
// import { BsExclamationOctagon, BsLayers, } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nextjs.json";
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
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
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
    img: "/img/development-of-next-Js-web-applications.svg",
    title: "Development of Next Js web applications",
    decs: "The Next Js framework can be used to build static and dynamic web applications that are easy to update, have fast page load times and generate quicker time-to-market. ",
  },
  {
    num: "2",
    img: "/img/strategy-and-planning.svg",
    title: "Strategy and planning",
    decs: "We Develop a strategy that will meet the needs of your company and produce the best results.  ",
  },
  {
    num: "3",
    img: "/img/services-for-app-upgrades.svg",
    title: "Services for app upgrades",
    decs: "In order to stay up-to-date as technology changes, we offer fast and effective upgrade services. ",
  },
  {
    num: "4",
    img: "/img/arcticons-game-plugins.svg",
    title: "Development of plugins",
    decs: "To ensure seamless performance, we develop customized plugins or provide suitable ones.    ",
  },
  {
    num: "5",
    img: "/img/services-for-developing-ssrs.svg",
    title: "Services for developing SSRs",
    decs: "Utilize high-quality apps and websites that are SEO-friendly for improving user engagement and conversion rates.  ",
  },
  {
    num: "6",
    img: "/img/maintenance-and-support-icon.svg",
    title: "Maintenance and support",
    decs: "We offer 24x7 support to ensure that your product performs consistently are of high quality, and functions efficiently.",
  },
];
const WhyChoosed = [
  {
    num: "1",
    bg: "#F45F391A",
    // icon: <BsLayers size={60} className="text-blue-500" />,
    title: "An approach that is user-oriented",
    decs: " End-users are at the heart of all applications developed by our team.",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    // icon: <BsExclamationOctagon size={60} className="text-blue-500" />,
    title: "A transparent process",
    decs: "Our clients can count on us for honesty and openness in all that we do, from pricing to discussing project objectives.",
  },
  {
    num: "3",
    bg: "#82AB101A",
    // icon: <RiTeamLine size={60} className="text-blue-600" />,
    title: "Solutions tailored to your needs",
    decs: "We are flexible in meeting the needs of each business because we have years of experience in adapting to every unique idea.",
  },
  {
    num: "4",
    bg: "#9E9E9E1A",
    // icon: <RiTeamLine size={60} className="text-blue-600" />,
    title: "Technology that is cutting-edge",
    decs: "Make sure your apps are secure, fast, and perform flawlessly by using proven technologies, frameworks, and libraries.",
  },
];
export default function Altcoin(props) {
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
          Best NextJS Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Crafting high-speed, custom, and feature-rich websites and applications is our specialty at Comfygen. Elevate your business with seamlessly navigable and user-friendly apps through our Next.js Development Services."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/next-js-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best NextJS Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Crafting high-speed, custom, and feature-rich websites and applications is our specialty at Comfygen. Elevate your business with seamlessly navigable and user-friendly apps through our Next.js Development Services."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/next-js-development"
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
          content="https://www.comfygen.com/images/next-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name="language" content="en-us" />
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
                heading="Next.js Development Company"
                ptag="Receive exceptional and reliable products with the Next JS technologies at Comfygen. Our skilled Next JS developers use a quick JavaScript framework promising server-rendered solutions to the clientele base. We have the potential to build high-speed, customized and features enriched webs and apps with the highest quality maintained possible. Get your business ready with super easy navigational and user friendly apps through Comfygen Next JS Development Services."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Next.JS <span className="text-blue-600">Development</span>{" "}
                  Services
                </h2>
                <p className="text-base text-slate-800">
                  Using Next Js, we cater to the diverse needs of clients around
                  the globe with our high-quality and expert development
                  services.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 ">
                {Services.map((card) => (
                  <div
                    key={props.key}
                    className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group "
                  >
                    <a
                      href={props.url}
                      title="service cards"
                      className="space-y-4"
                    >
                      <div className="w-20 h-20 p-3 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                        <img className="w-30 h-30" src={card.img} alt="" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {card.title}
                      </h3>
                      <p className="text-black transition duration-200 ease-in-out">
                        {card.decs}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Advice
          heading=" Next.JS Development Services in India"
          ptag="Comfygen provides fast and scalable server-side application development services using Next.js, one of the fastest JavaScript frameworks. Using Next.js, our developers build applications that are feature-rich, high-speed, and customized for your business. The main goal of our company is to create interactive, innovative, and bespoke applications for your business. The entire development process at Comfygen is designed to be smooth, high-performing, and scalable. Hot reloading, reusable elements, pre-rendering, and other features of Next.js are utilized. Get a robust business solution for your business with Comfygen's Next.js development service. Comfygen offers a variety of engagement models depending on your budget and requirements. You can get the best solutions from us irrespective of the domain or industry you're in."
          imgSrc="/img/next.JS-development-services.svg"
          imgW={564}
          imgH={624}
          altTag="Next.JS Development"
        />
        <WhyChoose
          Whychoose={JSON_DATA.Whychoose}
          Bestchoice={JSON_DATA.Bestchoice}
        />
        <section className="w-11/12 py-10 mx-auto bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Our Top{" "}
                <span className="text-blue-500">Next.JS Development </span>{" "}
                <br />
                Services
              </h2>
              <p className="text-base text-slate-800">
                By creating a tailored user experience focused on targeted
                users, Next JS increases conversion rates and enhances sales. In
                addition, it has other advantages.
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
                        className="p-3 relative bg-slate-100 cursor-pointer rounded-[17px] h-80"
                        style={{ backgroundColor: elem.bg }}
                      >
                        <div className="top-0 text-right text-[48px] font-bold text-blue-600   w-24 h-24 bg-[#ffffff] rounded-[17px] flex justify-center items-center">
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
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-nextjs-developer.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0E1F51]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                className="rounded-md"
                title=" Next.js Software Development"
                alt=" Next.js Software Development"
                src="/img/next.js-software-development.webp"
                height={500}
                width={500}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] ">
                  Next.js Software Development
                </h2>
              </div>
              <p className="text-base text-black ">
                Bringing your vision to life with our expertise We at
                Comfortygen focus on satisfying our clients at every step of the
                process while delivering more than their expectations. Using the
                latest technology, we develop and deploy web services, always
                focusing on the big picture!
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-left">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  What Makes Us Your{" "}
                  <span className="text-[#3B82F6]"> Next.JS Development</span>{" "}
                  Company of Choice?
                </h2>
                <p className="text-base text-slate-800">
                  We help you achieve faster time-to-market by leveraging
                  Next.Js.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
                {WhyChoosed.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {/* {icon} */}
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
          title="Next.js Development"
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
