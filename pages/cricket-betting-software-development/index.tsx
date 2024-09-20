import Image from "next/image";
import { MdOutlineAdminPanelSettings, MdSportsCricket } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { TbCricket } from "react-icons/tb";
import { BsCurrencyExchange, BsDot } from "react-icons/bs";
import dynamic from "next/dynamic";
import { AiOutlineCheck, AiOutlineCalendar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import JSON_DATA from "./json/cricketbetting.json";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const Panel = dynamic(() => import("../../components/Panel"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const Arena = [
  {
    num: "1",
    icon: <MdSportsCricket className="text-blue-400" size={60} />,
    title: "Multiple Bet Types",
    decs: (
      <p>
        Our best software for cricket betting software development services
        offers a variety of betting options, including H2H, Parlay, Pool
        betting, Handicap, and more. With this system, different{" "}
        <a
          className="text-blue-500"
          href="/sports-betting-software-development"
        >
          Sports betting software development
        </a>{" "}
        strategies can be used seamlessly and big amounts can be won.
      </p>
    ),
  },
  {
    num: "2",
    icon: <MdOutlineAdminPanelSettings className="text-blue-400" size={60} />,
    title: "Admin Dashboard",
    decs: "Admins can track and manage various aspects of the cricket betting software development platform via a comprehensive admin dashboard, including users, transactions, cricket betting development activities, and more. As a result, the admin's task becomes much easier and faster.",
  },
  {
    num: "3",
    icon: <TbCricket className="text-blue-400" size={60} />,
    title: "Real-time Odds",
    decs: "Using the best cricket betting software development services, solutions, players can place bets conveniently and make informed betting decisions with real-time and pre-match odds. Players' engagement is also boosted by this.",
  },
  {
    num: "4",
    icon: <AiOutlineCalendar className="text-blue-400" size={60} />,
    title: "Calendars and Schedule",
    decs: "On an online cricket betting software development platform, bookies can manage tournaments and matches seamlessly and schedule them for users' convenience with the calendar and schedule feature. By doing so, users are able to plan their cricket betting strategies more effectively.",
  },
  {
    num: "5",
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: "Multilingual Support",
    decs: "To ensure that both bettors and bookies can access the cricket betting software development seamlessly, we make sure that our cricket betting software development solutions supports multiple languages. You can use this feature to engage users around the world and build your global presence.",
  },
  {
    num: "6",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Multi-currency Support",
    decs: (
      <p>
        We also provide users with the option to choose from a variety of
        currencies, similar to our multi-language features. Different currencies
        can be selected by users and seamless payments can be made to enjoy the
        betting{" "}
        <a className="text-blue-500" href="/game-development-company">
          game development
        </a>{" "}
        .
      </p>
    ),
    decs1: "Cricket Betting Software Development Services",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;

  let { Modus } = JSON_DATA;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Cricket Betting Software Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen is your premier destination for First-class cricket betting software development services In India & The USA. Elevate your platform with innovative solutions tailored to your needs."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/cricket-betting-software-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Cricket Betting Software Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is your premier destination for First-class cricket betting software development services In India & The USA. Elevate your platform with innovative solutions tailored to your needs."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/cricket-betting-software-development"
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
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Cricket Betting Software Development Industry | Cricket betting software developers"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is a leading Cricket Betting Software Development Company. Hire White-Label Cricket Bookies Software or Custom Cricket Betting Software Developers at comfygen."
        />
        <meta
          property="og:twitter_title"
          content="Top Class Cricket Betting Software Development Organization | Cricket Betting Software Programmers"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is a leading Cricket Betting Software Development Company. Hire White-Label Cricket Bookies Software or Custom Cricket Betting Software Developers at comfygen."
        />
        <meta
          property="schema:type"
          content="Best Cricket Betting Software Development Company, Cricke Betting Software Provider"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Cricket Betting Software Development Organization"
        />
        <meta
          name="summary"
          content="Comfygen is your dependable partner for the creation of Cricket betting Software development company in India, providing first- class Cricket Betting Software Development Services to help your online cricket betting software venture reach new heights."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cricket Betting Software Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Sports Software Development Company"
          content="Comfygen is best sports betting software development company in jaipur, India. Our Sports Betting Software Solutions are cross-platform user-friendly & run efficiently on Windows, Android, and iOS platforms."
        />
        <meta
          name="category"
          content="Leading Cricket Betting Software Devlopment Company"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Cricket Betting Software Devlopment Company Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="article" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
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
                heading="Cricket Betting Software Development Company"
                ptag="Extend your business with the Best Cricket Betting Software Development Company In India & The USA. For the development of cricket betting software development services, Comfygen is your dependable partner. We have years of rich experience in developing cricket betting software development, so we are well-equipped to assist you expand your online cricket betting software development industry by giving you top-notch cricket betting software development services."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                Important Features Of Our Cricket{" "}
                <span className="text-blue-500">
                  {" "}
                  Betting Software Development{" "}
                </span>
              </h2>
              <p className="text-base text-slate-800">
                Our expertise in this area allows us to know what features are
                essential for keeping players engaged and attracting new ones.
                You will gain a competitive advantage by integrating all the
                important and latest features.
              </p>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {Arena.map((elem: any, index: any) => {
                const { title, icon, decs, decs1 } = elem;
                return (
                  <ServiceSection
                    key={index}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                    Ptag1={decs1}
                  />
                );
              })}
            </div>
          </section>
        </div>
        <AdviceSection
          heading="Top Tier Cricket Betting Software Development Industry Services"
          ptag="Do you want to grow your Bettor business by developing an online cricket betting software development industry? Don't know where to begin? Our Cricket betting software development services, solutions cover all aspects of the sport betting. As one of the best iGaming software service providers in India, USA, Comfygen provides innovative and impactful solutions to businesses worldwide. We have ample experience and expertise in building feature-packed and scalable Cricket betting software development companies. In order to attract a large number of bettors and keep them coming back, we help you build advanced cricket betting software in line with your business."
          ptag1="Whether you need White-label cricket betting software development services or custom Cricket betting software development services, we can meet all your needs precisely and to the highest quality. To develop state-of-the-art Cricket Betting software, we have talented  cricket betting software developers and designers who stay current with the latest technologies and trends."
          imgSrc="/images/cricket-betting-software-development-service.webp"
          imgW={556}
          imgH={570}
          altTag="Cricket Betting Software Development Industry Services"
        />
        <div className="py-10">
          <section className="flex flex-col-reverse lg:flex-row items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-10">
            <div className="w-full space-y-[10px] text-left p-[40px] rounded-[40px] ">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51]">
                  Top-notch Cricket Betting Software Development Industry in
                  Jaipur
                </h2>
              </div>
              <p className="text-base text-[#475569] ">
                {" "}
                Betting on cricket has become another rapidly growing trend in
                the wager industry. Businesses around the world are staking
                their claim in the cricket betting software development
                industry. With Comfygen, businesses can have their cricket
                betting software development services developed just the way
                they want it from us. The supreme features of Comfygen include
                anti-risk systems, odds management, and much more, elevating
                your Cricket betting software's compatibility and strength. We
                can help you kick-start your cricket betting software
                development project by providing detailed information about our
                cricket betting software development services.{" "}
              </p>
              <div>
                <h2 className="text-lg lg:text-2xl font-bold text-[#0E1F51]">
                  Bet Management System in Cricket Sports Betting Software
                  Development!
                </h2>
                <p className="text-base text-[#475569]">
                  Our quick and powerful bet management system for cricket
                  betting software development services allows the bettors to
                  place their wagers efficiently on a Cricket sports betting
                  software development platform. We also provide a worthwhile
                  dashboard and feature-rich panels for the benefit of the
                  admins, bookies, and user panel, thereby making our cricket
                  betting software one-of-a-kind!
                </p>
                <div className="flex justify-start  ">
                  <a href="/contact-us " className="mt-5">
                    <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                      Order Here
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full md:justify-start pb-8 lg:pb-0">
              <Image
                className="rounded-md w-full"
                title="Cricket Betting Software Development Company"
                alt="Cricket Betting Software Development Company"
                src="/images/cricket-betting-saftware-development-company.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <section className="py-10 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Benefits Of Our{" "}
                <span className="text-blue-600">
                  Cricket Betting Software Development
                </span>
              </h2>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.Smart.map((elem) => {
                const { title, decs, num, img } = elem;
                return (
                  <div key={num} className="p-3 space-y-4 rounded-[17px]">
                    <div
                      className="w-24 h-24 bg-[#F45F391A] rounded-full  flex justify-center items-center"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="p-3 rounded-full h-16 w-16 flex justify-center">
                        <Image
                          className="w-full"
                          src={img}
                          alt={title}
                          width="200"
                          height="100"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                        {title}
                      </h3>
                      <p className="break-all    text-[#000000] line-clamp-5 group-hover:text-white/90">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <TalkExpert />
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                {Modus?.title}
              </h2>
              <p className="w-5/6 py-6 mx-auto text-base font-medium text-center text-black">
                {Modus?.decs}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Development.map((elem: any) => {
                const { title, num, bg, img } = elem;
                return (
                  <div
                    key={num}
                    style={{ backgroundColor: `${bg}` }}
                    className="flex items-center justify-start p-4 space-x-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="40" height="40" />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 lg:flex lg:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pb-10 lg:pb-0">
            <Image
              className="rounded-md"
              title="Why Choose us as Cricket Betting Software provider "
              alt="Why Choose us as Cricket Betting Software provider "
              src="/images/why-choose-us-as-cricket-software-provider.webp"
              height={500}
              width={500}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
          <div className="w-full space-y-4 text-left">
            <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
              Why Choose Comfgen as Cricket Betting Software Development Service
              Providers
            </h2>
            <p className="text-base text-black ">
              Comfygen has always been a major name in providing Cricket Betting
              software development solutions for clients looking to modernize
              the industry. Our company has developed unrivaled iGaming software
              development company that has robust, scalable, and secure
              features. Using the latest technologies, we develop quality
              cricket betting software with a proven track record of delivering
              quality Cricket betting software development services.
            </p>
            <p className="text-base text-black ">
              Streamline your business with the ultra-intelligent Cricket
              Betting Software Development Solution.
            </p>
            <ul className="space-y-1 w-full text-center text-slate-600">
              {JSON_DATA.myLists.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2 text-slate-600">
                    <AiOutlineCheck className="w-5 h-5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-1 w-full text-center text-slate-600">
              {JSON_DATA.myList2.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2 text-slate-600">
                    <BsDot className="w-8 h-6" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Panel Panelheader={JSON_DATA.Panelheader} />
        <TalkExpert />
        <div
          className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
          style={{
            backgroundImage: `url("/img/hire-mobile-app-developer.webp")`,
          }}
        >
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div>

        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Cricket Betting Software Development"
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
