import React, { useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import { RiGameFill, RiHistoryFill, RiTableAltLine } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { FiAirplay } from "react-icons/fi";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "./json/video.json";
import WhiteNavButton from "../components/button/WhiteNavButton";
import GradientNavButton from "../components/GradientNavButton";

const ModusSection = dynamic(() => import("../components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
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
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function rummy(props) {
  let { initialData } = props;

  let {
    Service,
    Process,
    Modus,
    ModusOperandi,
    Business,
    hiringprocess,
    Frequently,
  } = JSON_DATA;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>
          Best Video Game development company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Want to develop Video Game Development Services is our specialty at Comfygen is a leading Video Game Development Company In India & The USA. We offers best online video game development services with top-rated video game developers."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/video-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Video Game development company In Canada &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Want to develop Video Game Development Services is our specialty at Comfygen is a leading Video Game Development Company In Canada & The USA. We offers best online video game development services with top-rated video game developers."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/video-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T07:02:07+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/video-game.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top-class Video Game Development Company in Jaipur, India | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen offers the most exclusive and unique video game development that help businesses get the most advantage of industry."
        />
        <meta
          property="og:twitter_title"
          content="Best Video Game Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen provides the best video game development services in India. Also offers the most exclusive and unique video game development that help businesses get the most advantage of industry."
        />
        <meta
          property="schema:type"
          content="Top Sports Betting Website Development Industry in Jaipur"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content="Video Game Development Organization" />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of Video game development company in India, providing first-rate Video Game Development services to help your online Video Game venture reach new heights."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Video Game Development company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Video Game Development Company"
          content="Comfygen is best Video Game Development Company in jaipur, India. Our Video Game Development Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta name="category" content="Video Game Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Video Game Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Video Game Development" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="overflow-hidden">
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
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Video Game Development Company"
                ptag="Join us on this exciting journey of Video game development Company In Canada & The USA and let Comfygen elevate your gaming project to new heights of excellence. Contact us today to begin your partnership with the industry leader."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <Advice
          head="Introduction"
          heading="A Prelude to Extravagance"
          ptag="Welcome, distinguished connoisseurs, to the mesmerizing realm of ComfyGen, a visionary and
          illustrious video game development enterprise that ceaselessly transcends the boundaries of
          creativity and innovation. Join us as we embark on an odyssey through the captivating
          intricacies of video game development, peering behind the curtain to witness the untold
          narrative of ComfyGen's ascendancy as a preeminent arbiter of game development excellence."
          imgSrc="/images/a-prelude-to-extravagance.webp"
          imgW={531}
          imgH={449}
          altTag="A Prelude to Extravagance"
        />
        <ContactFromCenter />
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="lg:text-4xl text-3xl font-bold text-[#0E1F51]">
                Various Services offered by Us for Video Game Development
              </h2>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {Service.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {" "}
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: `url("/img/why-choose-comfygen-for-your-video-game-development-needs.webp")`,
          }}
        >
          <div className=" bg-[#1B1C30CC] py-10">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              {/* text-section */}
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Why Choose ComfyGen for Your Video Game Development Needs?
                </h2>
                <p className="text-base">
                  In the ever-evolving landscape of video game development,
                  finding the right partner to bring your gaming visions to life
                  is crucial. ComfyGen stands out as a premier choice, offering
                  a myriad of reasons why you should entrust your game
                  development endeavors to our experienced team. Here are the
                  compelling reasons why you should choose ComfyGen. Choosing
                  the right game development partner can make all the difference
                  in the success of your project. With ComfyGen's exceptional
                  track record, unwavering commitment to quality, and passion
                  for innovation, you can trust us to transform your game idea
                  into a remarkable reality. Don't settle for mediocrity. Choose
                  ComfyGen for a game development experience that exceeds your
                  expectations and delivers unforgettable gaming experiences.
                  Contact us today to discuss your game development needs and
                  embark on an extraordinary journey with us.
                </p>
                <div className="grid gap-16 py-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                  {Process.map((video) => {
                    const { title, num, decs, decs1 } = video;
                    return (
                      <div
                        key={num}
                        className="flex space-x-6 items-left drop-shadow-2xl"
                      >
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white rounded-full bg-white/20">
                            {num}
                          </div>
                        </div>
                        <div className="text-left space-y-2">
                          <h2 className="text-lg font-semibold">{title}</h2>
                          <div>
                            <p className="">{decs}</p>
                            <p className="">{decs1}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-10">
          <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: `url("/img/have-project.webp")` }}
            >
              <section className="px-3 py-6">
                <div className="flex justify-between items-center text-center">
                  <h3 className="text-3xl font-semibold leading-none text-white">
                    Have a Query?
                  </h3>
                  <div className="">
                    <WhiteNavButton title={"Let’s Talk"} url={"/contact-us"} />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>

        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Discover the Excellence of ComfyGen: An Industry-Leading Game
                  Development Company
                </h2>
              </div>
              <p className="text-base text-black md:w-[85%]">
                In the competitive landscape of game development, ComfyGen
                stands tall as an industry-leading company that consistently
                sets new benchmarks of excellence. With our unwavering
                commitment to innovation, quality, and client satisfaction, we
                have established ourselves as a trusted partner for turning
                gaming visions into reality.
              </p>
              <div className="flex flex-row">
                <GradientNavButton
                  title={"Let's Discuss"}
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                />
              </div>
            </div>
            <div className="flex justify-center md:w-[70%] lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Discover the Excellence of ComfyGen: An Industry-Leading Game Development Company"
                alt="Discover the Excellence of ComfyGen: An Industry-Leading Game Development Company"
                src="/img/discover-the-excellence-of-comfygen-an-industry-leading-game-development-company.webp"
                height={407}
                width={613}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />
        <TalkExpert />
        <section
          className="bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: `url("/img/exploring-the-video-game-development-process.webp")`,
          }}
        >
          <div className="py-10 bg-black/50">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-4 bg-gradient-to-r from-[#16BDFA]/40 to-[#BE5EBC]/50 p-8">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Exploring the Video Game Development Process
                </h2>
                <p className="text-base text-white">
                  Welcome to our guide on the fascinating world of video game
                  development! Whether you're an aspiring game developer or
                  simply curious about the behind-the-scenes process, we've got
                  you covered. Here are some key pointers to help you understand
                  the intricate journey of bringing a video game to life:
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Business.map((video) => {
                  const { title, decs, decs1, num } = video;
                  return (
                    <div className="p-6 space-y-4  transition-all duration-200 border">
                      <div className="flex items-center justify-center font-semibold bg-white rounded-full shadow-xl h-14 w-14">
                        <p className="text-xl text-right ">{num}</p>
                      </div>
                      <h3 className="text-xl font-extrabold text-[#fff] transition-all duration-200">
                        {title}
                      </h3>
                      <p className="font-medium text-[#fff] break-all transition duration-200 ease-in-out  line-clamp-5">
                        {decs}
                      </p>
                      <p className="font-medium text-[#fff] break-all transition duration-200 ease-in-out  line-clamp-5">
                        {decs1}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto space-y-4">
                <p className="text-base text-white">
                  Remember, game development is a collaborative and iterative
                  process that requires passion, creativity, and technical
                  expertise. By understanding these key pointers, you'll gain
                  insights into the intricate journey of creating captivating
                  video game experiences. Enjoy exploring the exciting world of
                  game development!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="flex justify-center md:w-[70%] lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Welcome to ComfyGen's Hiring Hub: Where Talent Meets Innovation!"
                alt="Welcome to ComfyGen's Hiring Hub: Where Talent Meets Innovation!"
                src="/img/welcome-to-comfygen-hiring-hub-where-talent-meets-innovation.webp"
                height={450}
                width={455}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Welcome to ComfyGen's Hiring Hub: Where Talent Meets
                  Innovation!
                </h2>
              </div>
              <p className="text-base text-black md:w-[85%]">
                At ComfyGen, we believe that great video games are born from the
                collective brilliance of talented individuals. If you're
                passionate about crafting immersive gaming experiences and want
                to join a dynamic team that values creativity and innovation,
                you've come to the right place.
              </p>
              <div className="flex flex-row">
                {/* <a href='https://api.whatsapp.com/send?phone=919587867258' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a> */}
                <GradientNavButton
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                  title={"Get a QUOTE"}
                />
              </div>
            </div>
          </div>
        </section>
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Here's{" "}
                  <span className="text-blue-600">
                    what you need to know about{" "}
                  </span>{" "}
                  our hiring process
                </h2>
              </div>
              <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
                {hiringprocess.map((video) => {
                  const { title, decs, decs1, img } = video;
                  return (
                    <div className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86">
                      <div className="flex flex-col justify-center items-center p-10">
                        <Image
                          className="object-cover"
                          src={img}
                          alt={title}
                          width={100}
                          height={100}
                        />
                        <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                          {title}
                        </h3>
                      </div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-center items-center space-y-2 transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                        <p className="tracking-normal text-sm text-white">
                          {decs}
                        </p>
                        <p className="tracking-normal text-sm text-white">
                          {decs1}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-md "
              style={{
                backgroundImage: `url("/images/glance-for-top-class-bg.webp")`,
              }}
            >
              <section className="px-3 py-2 lg:px-14 lg:py-20">
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-3xl font-semibold leading-none text-white">
                      Glance for a Top-class Video Game Programmer?
                    </h3>
                    <p className="text-base text-white">
                      Ready to embark on an epic adventure in game development?
                      Join the ComfyGen family and be part of a team that
                      creates games players love.
                    </p>
                    <div className="flex items-center justify-center pt-4">
                      <WhiteNavButton
                        title={"Click Here"}
                        url={"/contact-us"}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <FaqSection faqData={Frequently} title="Video Game Development" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
