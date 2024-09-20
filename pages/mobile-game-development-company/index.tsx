import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/mobile.json";

const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const TechnoStack = dynamic(() => import("./components/TechnoStack"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("./components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const FinaceSection = dynamic(() => import("./components/FinanceSection"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Mobile(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Best Mobile Game Development Company In India & The USA</title>
        <meta
          property="og:title"
          content="Best Mobile Game Development Company In India & The USA | Comfygen"
        />
        <meta
          name="description"
          content="Do you want to hire a mobile game development company in India or the USA? Discover industry leaders known for cutting-edge technology and creativity. Develop your mobile game vision across iOS, Android, and web platforms with our expert developers"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-game-development-company"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Mobile App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content=" Mobile App Development Company" />
        <meta
          name="summary"
          content="Comfygen is the top mobile app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Development Company"
          content="Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company in the USA. Our expert team can bring your ideas to Business Goal."
        />
        <meta name="category" content="Mobile App Development Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Mobile App Development Company" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-36 py-10">
              <HeroSectionForm
                heading="Mobile Game Development Company"
                ptag="Mobile games are the most preferred pastime of millions of smartphone users worldwide. As a matter of fact, mobile game studios have gained formidable traction in recent times for coming up with innovative games. Businesses can leverage mobile games as an effective tool for reaching their target audience, where they spend most of their time."
                ptag1="With the right mobile game development service provider In India & The USA by your side, you can create mobile games that will open new channels of revenue for your business. We offer the assurance of comprehensive expertise in developing mobile games according to your desired specifications."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>
        <AdviceSection
          heading="Overview of Comfygen: Your Mobile Game Development Partner"
          ptag="Comfygen is a pioneering mobile game development company in India with a team of dedicated experts striving to create custom mobile games tailored to the needs of clients. We have been riding the wave of innovative changes in the domain of mobile game development with a consistent focus on improvement. "
          ptag1="Our team of mobile game developers seeks the best results for clients by employing the latest technologies for designing and creating mobile games. We can serve as your mobile game development partner, beginning from the first consultation. You can rely on our guidance for successful execution and management of all stages of game development, alongside ensuring effective deployment of mobile games.    "
          imgSrc="/images/overview-of-comfygen-your-mobile-game-development-partner.webp"
          imgW={700}
          imgH={700}
          altTag="Overview of Comfygen: Your Mobile Game Development Partner"
        />
        <ContactFromCenter />
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  The Mobile Game Development Landscape
                </h2>
                <p className="text-base text-black">
                  The search for a reliable partner to help you create mobile
                  games must have been driven by some reason. If you take a look
                  at the existing mobile gaming app development landscape, you
                  will find multiple mobile game design trends and preferences.
                  For example, new technologies such as blockchain, AR, and VR
                  provide new prospects for creating improved gameplay
                  experiences in mobile games.{" "}
                </p>
                <p className="text-base text-black">
                  On top of it, mobile games also serve as additional streams of
                  revenue for businesses, alongside offering the benefits of
                  targeted marketing. The growing demand for a mobile game
                  development company validates the fact that businesses need
                  mobile gaming apps now more than ever. The services of a
                  mobile gaming app development studio can help not only create
                  engaging mobile games but also adapt to emerging trends.
                </p>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg  rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                  Let's Communicate With IT Expert!
                </a>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title=" The Mobile Game Development Landscape"
                alt=" The Mobile Game Development Landscape"
                src="/images/the-mobile-game-development-landscape.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="space-y-4 text-center col-span-3">
              <h2 className="text-4xl font-bold text-center text-[#0E1F51] ">
                Services Offered
              </h2>
              <p className="text-base text-slate-800 text-center ">
                We are a trusted platform for mobile game development services
                specializing in creating high-fidelity games for different
                mobile platforms. Our developers have honed their skills in
                working with different game development technologies and
                frameworks to offer a comprehensive collection of game
                development services.{" "}
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
              {JSON_DATA.AppService.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <>
                    <div
                      key={num}
                      className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] transition-all duration-700 ease-in-out"
                    >
                      <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#FFEDD5] group-hover:bg-white rounded-full  ">
                        <Image
                          width={35}
                          height={35}
                          src={img}
                          alt={title}
                          title={title}
                          className=""
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] group-hover:text-white transition-all duration-200 text-center">
                        {title}
                      </h3>
                      <p className="font-medium text-center text-black group-hover:text-white break-all transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        {/* <WhycomfygenSection Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} /> */}
        <TechnoStack />
        <section
          className="py-4 lg:py-20  bg-start bg-cover  bg-fixed   "
          style={{ backgroundImage: `url("/img/games-bg.webp")` }}
        >
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem]  ">
                  Trends in <span className="text-[#BA68C8]">Mobile Game </span>{" "}
                  Development
                </h2>
                <p className="text-base text-white">
                  Mobile games play a vital role in entertaining millions of
                  users all over the world. They have become an integral part of
                  everyday lives of people, alongside serving as major tools for
                  shaping popular culture. As the popularity of mobile games
                  continues to increase, it is reasonable to look for emerging
                  trends that can help you create immersive gameplay
                  experiences.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Arena.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      img={img}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-start bg-cover bg-fixed  "
          style={{ backgroundImage: `url("/img/game-roadmapp-bg.webp")` }}
        >
          <div className=" bg-[#000]/80">
            <div className=" py-10  w-11/12 space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
              <div className="flex flex-col justify-center lg:text-center">
                <h2 className="py-4 text-[#BA68C8] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                  Game Development <span className="text-white"> Process</span>
                </h2>
                <p className="text-base text-white  ">
                  The effectiveness of our mobile game developers comes from
                  following a straightforward game development process. We
                  utilize a proven and tested roadmap for developing mobile
                  games from the ideas you have in mind for your project. The
                  roadmap follows all the essential milestones in a mobile
                  gaming app development project with precision and planning.{" "}
                </p>
              </div>
              <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
                <div className={`${styles.Roadmapcontainer}`}>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockright}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Overview of the Game Development Lifecycle</h3>
                      <p>
                        TYou might be wondering about the necessity of learning
                        about the game development lifecycle for mobile games.
                        The review of steps in the game development lifecycle
                        can help you learn about the important requirements at
                        each stage of the project and the expected deliverables
                        in each phase.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Steps</h3>
                      <p>
                        TThe step-by-step breakdown of the mobile game
                        development process could provide an explanation for our
                        effectiveness in creating mobile games. You can find the
                        following steps in our workflow for developing your
                        mobile games.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockright}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Conceptualization and Idea Generation</h3>
                      <p>
                        The first step in the process of developing mobile games
                        focuses on conceptualization and creation of new ideas
                        for mobile games. In the pre-production stage, our best
                        mobile game developers understand your requirements and
                        create the fundamental design and storyline for the
                        game. Our developers also define the rules of the game
                        alongside determining the important technical
                        requirements for developing the game.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Game Design</h3>
                      <p>
                        Our mobile game development services stand out for our
                        unique approach to creating designs for your game. We
                        specialize in mobile game design by transforming the
                        concept finalized in the conceptualization stage into a
                        functional design. It can help us design the core loop,
                        mechanics, economics, and levels of the game alongside
                        other features and systems. Our developers also ensure
                        documentation of all the design specifications in the
                        game development document or GDD.{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockright}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Development</h3>
                      <p>
                        We create the different modules of the game in the
                        development stage by utilizing the technical design
                        document. Our top mobile game developers have the
                        expertise and creativity required to design alluring
                        game aesthetics. With years of experience in developing
                        different types of mobile games, our developers can
                        create assets for the game according to your
                        requirements. Our developers also help you create new
                        levels, mechanisms, objects, and obstacles in the game.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Testing and Quality Assurance</h3>
                      <p>
                        Our workflow for creating mobile games also involves a
                        comprehensive emphasis on testing and quality assurance.
                        We are one of the top mobile game studios with a
                        dedicated quality assurance team to implement stringent
                        tests for identifying errors and bugs in mobile games.
                        Proactive QA helps us ensure timely detection of issues
                        before deploying your mobile games on different
                        platforms. We also utilize testing as a vital tool for
                        performance optimization of mobile games.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockright}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Deployment</h3>
                      <p>
                        We are a dedicated mobile game development service
                        provider and could help you release your mobile gaming
                        apps on targeted platforms. During the deployment
                        process, we also pay attention to the post-production
                        issues that could influence the success of the mobile
                        games. Our experts focus on ensuring that your mobile
                        games do not present any issues with accessibility on
                        Google Play Store and Apple App Store.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                  >
                    <div className={`${styles.marker}`}></div>
                    <div className={`${styles.timelinecontent}`}>
                      <h3>Post-Launch Support</h3>
                      <p>
                        The final step in our mobile game development workflow
                        focuses on offering support after the launch on your
                        desired platform. We use advanced techniques for
                        understanding the preferences of users through
                        comprehensive evaluation of user feedback and analytics
                        data. It helps us stay updated with the requirements of
                        clients and understand the need for proactive support
                        and maintenance in mobile games. Our experts are just a
                        call away from offering exclusive support services
                        whenever you need them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <a href="/contact-us">
                  <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let's Communicate With IT Expert!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className={`${styles.ShouldSec} w-full py-16`}>
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Industry-specific Game Development Services
                </h2>
                <div>
                  <p className="text-base">
                    We are capable of creating different types of mobile games
                    for various industries. Our expertise in mobile game design
                    can work in your favor across different segments in the
                    mobile gaming ecosystem. We can help you create different
                    user experiences with each type of gaming app based on your
                    individual needs.
                  </p>
                </div>
                <div className="grid gap-10 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                  {JSON_DATA.Process.map((elem) => {
                    const { title, num, decs } = elem;
                    return (
                      <div
                        key={num}
                        className="flex space-x-6 items-left drop-shadow-2xl"
                      >
                        <div className={`${styles.card}`}>
                          <div className={`${styles.cardbody}`}>
                            <h2
                              className={`${styles.cardtitle} text-lg font-semibold`}
                            >
                              {title}
                            </h2>
                            <p className={`${styles.cardtext} text-black`}>
                              {decs}
                            </p>
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
        <section className="py-10  bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Engagement Models
                </h2>
                <p className="text-base text-slate-800">
                  We are one of the credible mobile game studios you can trust
                  to craft new and innovative mobile games. Our different
                  engagement models can help you make the most of our services
                  according to your budget and preferences. You can avail of our
                  services through different engagement models that have unique
                  specifications about how you have to pay for our services.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Finance.map((elem) => {
                  const { title, decs, num } = elem;
                  return <FinaceSection key={num} title={title} Ptag={decs} />;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Why Choose Us
              </h2>
              <p className="text-base text-slate-800">
                The selection of a mobile game development service provider can
                be a difficult challenge for many people. You can find the ideal
                solution to such challenges by overcoming the limitations
                associated with development of mobile games. We stand out in the
                mobile gaming app development market by offering unique value
                advantages.{" "}
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.LeadingSoftware.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className={`${styles.fintechCard} ,${styles.fintechCard1} p-6 space-y-4 bg-white border rounded-xl group  transition-all duration-200`}
                  >
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="bg-start bg-cover bg-fixed  space-y-10 py-10 "
          style={{ backgroundImage: `url("/img/hire--game-banner.webp")` }}
        >
          <div className="items-center  xl:flex xl:space-x-10 xl:space-y-0">
            <div className="flex flex-col  justify-center w-full lg:justify-start space-y-2">
              <img
                src="/img/game-bg-sec.webp"
                alt="Game Image"
                width={470}
                height={562}
              />
            </div>
            <div className={`w-full space-y-4 ${styles.hiringsec}`}>
              <div className="">
                <div className=" text-center ">
                  <h2 className="text-4xl font-bold text-[#fff] text-start ">
                    {" "}
                    <span className="text-[#BA68C8]">
                      Hiring Game Development
                    </span>{" "}
                    Experts
                  </h2>
                  <p className="text-base text-white text-start mt-3">
                    Do you want to hire mobile game developers to transform your
                    next big idea into a popular gaming app? We can help you
                    pick the best professionals for mobile gaming app
                    development with proven expertise in game development. Our
                    mobile gaming app development experts have honed their
                    skills through years of involvement in different types of
                    game development projects.
                  </p>
                </div>
                <div className="grid gap-4 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-8">
                  {JSON_DATA.GameDevelopmentExperts.map((elem) => {
                    const { title, decs, num } = elem;
                    return (
                      <div
                        key={num}
                        className="p-6 space-y-2 bg-white border rounded-xl group  transition-all duration-200"
                      >
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                          {title}
                        </h3>
                        <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                          {decs}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex items-center">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Additional Information
                </h2>
                <div className="space-y-2">
                  <p className="text-base text-black text-justify">
                    If you have any additional queries about our services, then
                    you can talk to our experts to learn more about our
                    expertise in mobile gaming app development.
                  </p>
                  <div className="pt-4">
                    <a href="/contact-us">
                      <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                        Let’s Discuss
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/images/additional-information.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={700}
              />
            </div>
          </section>
        </div>
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
