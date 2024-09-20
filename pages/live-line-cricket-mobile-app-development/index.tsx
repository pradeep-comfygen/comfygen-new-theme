import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdLiveTv, MdOutlineScore, MdOutlinePoll } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { VscMultipleWindows } from "react-icons/vsc";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/livelinecricketmobile.json";
const CricketCom = dynamic(() => import("../components/CricketCom"), {
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
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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

const Arena = [
  {
    num: "1",
    icon: <CiMobile2 className="text-blue-400" size={60} />,
    title: "Mobile App Features That Make Live Line Cricket Viral.",
    decs: "There is no point in developing cricket mobile apps unless they provide real-time excitement and engagement.",
  },
  {
    num: "2",
    icon: <MdOutlineScore className="text-blue-400" size={60} />,
    title: "Real-Time Score",
    decs: "Our API integration allows you to integrate our modern-tech into your app and provide users with live line cricket in real-time. We believe that your cricket fans shouldn't miss anything during a live match.",
  },
  {
    num: "3",
    icon: <RiCheckboxMultipleBlankLine className="text-blue-400" size={60} />,
    title: "Match Statistics",
    decs: "True sports fans know how important this feature is. Match statistics allow fans to view information about upcoming matches, previous matches, records, player statistics, and team drafts.",
  },
  {
    num: "4",
    icon: <MdLiveTv className="text-blue-400" size={60} />,
    title: "Live Ball-to-Ball Commentary",
    decs: "Live cricket matches can be made twice as enjoyable with a captivating commentary. Thus, sports fans are able to follow every moment of the game on their mobile devices thanks to this feature.",
  },
  {
    num: "5",
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: "Multilingual Support",
    decs: "Cricket is a game of togetherness. In light of this, there should be no language restriction on a live cricket scores mobile app. Due to our multilingual support, our apps can display data in virtually any regional language.",
  },
  {
    num: "6",
    icon: <MdOutlinePoll className="text-blue-400" size={60} />,
    title: "Live Polls",
    decs: "A high level of engagement is required when developing custom sports mobile apps. App users can vote in real-time on match and player predictions with the live polls feature.",
  },
  {
    num: "7",
    icon: <VscMultipleWindows className="text-blue-400" size={60} />,
    title: "Multiple Sports & Leagues",
    decs: "It is possible for cricket fans to enjoy football as well. With this feature, sports fans can follow scores across multiple sports and leagues directly from their smartphones.",
  },
];

export default function Ecommerce(props) {
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
          Cricket Fast Line Mobile App Development Company in India & USA
        </title>
        <meta
          name="description"
          content="Looking to develop a Cricket Fast Live Line Mobile App? Our team of expert Mobile app developers can create a top-rated Cricket Fastline APi and applications that provides real-time scores, news, player stats, and more. Contact us today for a app consultation."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cricket Fast Line Mobile App Development Company in India & USA"
        />
        <meta
          property="og:description"
          content="Looking to develop a Cricket Fast Live Line Mobile App? Our team of expert Mobile app developers can create a top-rated Cricket Fastline APi and applications that provides real-time scores, news, player stats, and more. Contact us today for a app consultation."
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/live-line-cricket-mobile-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T11:48:00+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/cricket.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="11 minutes" />
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
                heading="Cricket Fast Live Line Mobile App Development Company"
                ptag="To meet the demands of cricket fans, we provide services for Fast Live Line Cricket Mobile Application Development. Our team specializes in developing engaging mobile applications for cricket fans that include real-time information, live scores, match schedules, player statistics, and other features."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/cricket-live-line-app-and-web-development.webp"
                Width={671}
                Height={459}
                altTag="Cricket Live Line Mobile App Development"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center">
                <h2 className="pt-4 text-[40px]  font-bold text-[#0E1F51]   ">
                  Make the most popular{" "}
                  <span className="text-blue-500">
                    mobile <br /> app for cricket live
                  </span>{" "}
                  line
                </h2>
              </div>
              <p className="text-base font-medium">
                You can develop a Live Line Cricket app just in time for the
                upcoming sports season!{" "}
              </p>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Arena.map((elem) => {
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
          </section>
        </div>

        <div className="py-10 bg-gray-100">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full">
              <Image
                src="/img/mobile-cricket-app.webp"
                alt=" Develop the most downloaded mobile cricket app"
                className="rounded-md pb-10 lg:pb-0"
                width={300}
                height={300}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  Develop the most downloaded mobile cricket app
                </h2>
              </div>
              <p className="text-base text-black ">
                {`The three keys to success in cricket are performance, precision, and perseverance. A live line cricket mobile app would be appreciated by countless cricket fans around the world. With features such as real-time live line updates, live commentary, multiple sport live lines, expert polls, public polls, and live chat, cricket enthusiasts can experience the same thrill they would get sitting in the stands of a cricket stadium.`}
              </p>
              <div className="flex items-center justify-start p-4 space-x-6 bg-white rounded-lg">
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
          </section>
        </div>

        <section className="w-11/12 py-10 mx-auto bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center">
              <p className="text-lg font-medium text-blue-600 capitalize  ">
                Planning
              </p>
              <h2 className="pt-4 text-3xl font-bold text-[#0E1F51]   ">
                Features of{" "}
                <span className="text-blue-500">Live Cricket Score </span>{" "}
                <br /> Mobile Apps
              </h2>
              <p className="pt-4 text-base font-normal text-black">
                All features are designed to help the business grow
                exponentially while keeping the thrill of the game alive on the
                go.
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

        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-[32px] text-base font-[600px] leading-[30px] text-[#0E1F51]  ">
                  What makes Comfygen the best app development company for Live
                  Line Cricket?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                You can maximize your business's ROI and thrill your fans with
                custom mobile apps from Comfygen.
              </p>
              <div className="w-full text-center md:text-left">
                <ul className="space-y-1 text-slate-600">
                  {JSON_DATA.myList.map((item, index) => (
                    <li className="flex items-center " key={index}>
                      <span className="pr-4">
                        <BsDot size={26} />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start pb-10 lg:pb-0">
              <Image
                className="w-full rounded-md"
                title=" What Is Cricket Data API?"
                alt=" What Is Cricket Data API?"
                src="/images/what-is-cricket-data-api.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title="Multiple sports support"
                alt="Multiple sports support"
                src="/images/multiple-sports-support.webp"
                height={250}
                width={250}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#9A4ECC1A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-[32px] text-base font-[600px] leading-[30px] text-[#0E1F51]  ">
                  Multiple sports support
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                How important is it to you that your live Cricket score mobile
                app also covers T10 Leagues? No worries, we've got you covered!
                For almost all major sports, Comfygen offers custom live line
                mobile app development.
              </p>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                For almost all major sports, Comfygen offers custom live line
                mobile app development.
              </p>
              <div className="w-full text-center md:text-left">
                <ul className="space-y-1 text-slate-600">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li className="flex items-center " key={index}>
                      <span className="pr-4">
                        <BsDot size={26} />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="py-20 bg-gray-100">
          <section className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                src="/images/cricket-fast-live-line-api-development.webp"
                alt="In order to develop Fast Line Cricket apps, we follow a specific process"
                className="rounded-md"
                width={800}
                height={800}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                  In order to develop Fast Line Cricket apps, we follow a
                  specific process
                </h2>
              </div>
              <div className="text-base text-black ">
                <ul>
                  {JSON_DATA.myList2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-start p-4 space-x-6 bg-white rounded-lg">
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
          </section>
        </div>
        <CricketCom />

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Cricket Fast Line App"
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
