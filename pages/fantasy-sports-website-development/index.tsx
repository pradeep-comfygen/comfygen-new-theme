import React from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { AiOutlineDatabase } from "react-icons/ai";
import dynamic from "next/dynamic";
import { VscCircleFilled, VscGist, VscReferences } from "react-icons/vsc";
import { MdDrafts, MdLeaderboard, MdPayment } from "react-icons/md";
import { RxDot } from "react-icons/rx";
import { TbCircleDot } from "react-icons/tb";
import JSON_DATA from "./json/fantasysportswebsite.json";
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
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
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
const ChooseUs = [
  {
    num: "1",
    icon: <AiOutlineDatabase className="text-blue-400" size={60} />,
    title: "Manual and Integrated Data Feeds",
    decs: "We have partnered with reliable data feed providers in order to provide both manual and integrated data feeds for our fantasy sports website.",
  },
  {
    num: "2",
    icon: <MdDrafts className="text-blue-400" size={60} />,
    title: "Draft Types",
    decs: "For daily fantasy sports and auction, offline and live drafts for season-long fantasy sports, we can create multiple draft styles such as auto draft, salary cap, quick draft, pick 'em.",
  },
  {
    num: "3",
    icon: <MdPayment className="text-blue-400" size={60} />,
    title: "Multiple Payment Options",
    decs: "For convenient transactions, we offer fiat and cryptocurrency payment options on our fantasy sports website.",
  },
  {
    num: "4",
    icon: <VscGist className="text-blue-400" size={60} />,
    title: "Easy to Use CMS",
    decs: "Using the content management system on our fantasy sports website, you can make small changes to the platform.",
  },
  {
    num: "5",
    icon: <MdLeaderboard className="text-blue-400" size={60} />,
    title: "Leaderboards",
    decs: "Our fantasy sports website creates state-of-the-art leaderboards by employing different dimensions and filters.",
  },
  {
    num: "6",
    icon: <VscReferences className="text-blue-400" size={60} />,
    title: "Referral Bonus",
    decs: "With referral bonuses, you increase the number of new users on your platform by leveraging existing users.",
  },
];
export default function Fantasy(props) {
  let { initialData } = props;

  let { Modus } = JSON_DATA;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Fantasy Sports Website Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen is a great fantasy sports website development company In India & The USA. Our fantasy website developers use cutting-edge technology to create solutions that are in sync with the current trends."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/fantasy-sports-website-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="En-us" />
        <meta
          property="og:title"
          content="Fantasy Sports Website Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is a great fantasy sports website development company In Canada & The USA. Our fantasy website developers use cutting-edge technology to create solutions that are in sync with the current trends."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/fantasy-sports-website-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:04:03+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/mltichain-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
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
                heading="Fantasy Sports Website Development Company"
                ptag="Cricket, Football, Badminton, Tennis, and Boxing are among the few of the sports that are supported by Comfygen's comprehensive platform, which was developed specifically for the building of fantasy sports websites development services In Canada & The USA. By offering live prediction questions in addition to the usual fantasy games, we hope to increase user involvement."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Features Covered in{" "}
                  <span className="text-blue-600">Fantasy Sports</span> Website
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {ChooseUs.map((elem) => {
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
        <Advice
          heading="Fantasy Sports Website Development Company"
          ptag="Our team at Comfygen, a leading fantasy sports website development company, creates highly functional and visually appealing fantasy football websites.
          Our fantasy soccer developers create user-friendly interfaces and designs based on deep understanding of user preferences. Now is the time to take your fantasy football experience to the next level!"
          imgSrc="/img/fantasy-sports-website-development-company.webp"
          imgW={555}
          imgH={600}
          altTag="Fantasy Sports Website Development Company"
        />
        <section className="py-10">
          <div className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10">
            <div className="w-full text-left">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Fantasy Sports Website Design
              </h2>
              <p className="text-base text-slate-800">
                {`In addition to fantasy sports development services for all these sports, we also offer horse racing, football, soccer, hockey, and kabaddi. A key indicator of our success is customer satisfaction, which is part of our philosophy. In order to help businesses reach more customers, we develop social fantasy sports websites that connect sports fans around the world.The fantasy cricket app developers at our company have developed a range of fantasy sports websites featuring seamless payment integration, intuitive user interfaces, robust security, and multiplatform compatibility.`}
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                src="/img/fantasy-sports-website-design.webp"
                alt="Fantasy Sports Website Design"
                className="rounded-md"
                width={555}
                height={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              <div className="w-full md:text-left">
                <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                  {Modus?.title}
                </h2>
                <p className="w-5/6 py-6 mx-auto text-base font-medium text-center text-black">
                  {Modus?.decs}
                </p>
              </div>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Development.map((elem: any) => {
                const { title, num, bg, img } = elem;
                return (
                  <div key={num}>
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="flex items-center justify-start p-4 space-x-4 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <TalkExpert />
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image
                src="/img/sports-betting-software-solution.webp"
                alt="Sports Betting Software Solutions"
                className="rounded-lg"
                height={450}
                width={450}
              />
            </div>
            <div className="w-full space-y-4 text-left">
              <div>
                <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Sports Betting Software Solutions
                </h2>
                <p className="text-base text-slate-800">
                  With a wide selection of sports betting games available on the
                  market, we can cater to personalised needs as well. There is a
                  buzz in the market for these types of sports betting.{" "}
                </p>
              </div>
              <ul className="list-disc px-4 space-y-1 text-slate-800">
                {JSON_DATA.myList1.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Our Fantasy Sports Website Development Solutions
                </h2>
              </div>
              <ul className="space-y-2">
                {JSON_DATA.myList3.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscCircleFilled className="w-4 h-4" />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/our-fantasy-sports-website-development-solutions.webp"
                alt="Our Fantasy Sports Website Development Solutions"
                className="rounded-lg"
                height={596}
                width={450}
              />
            </div>
          </section>
        </div>
        <div className="py-10 bg-gray-100">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full pb-6 lg:pb-0">
              <Image
                src="/img/why-choose-fantasy-sports-website-development.webp"
                alt="Why Choose us for Fantasy Sports Website Development"
                className="rounded-lg"
                height={600}
                width={555}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Why Choose us for Fantasy Sports Website Development
              </h2>
              <p className="text-base text-left text-black/80">
                In the past, you had to call a bookmaker to bet on sports. Now
                you can bet by clicking on your mobile screen, and you will not
                miss out on any chances.Apps like dream 11 for cricket have made
                their remarkable mark in the market, so you don't have to rely
                on a mediator to place your bet.Depending on your requirements,
                fantasy sports website developers develop an app. For making
                your dream app a reality, contact us to bring your dream to
                life.Top fantasy sports website development companies create
                fantasy sports websites to integrate with your project.
              </p>
              <ul className="space-y-2">
                {JSON_DATA.myList2.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <RxDot className="w-4 h-4" />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="flex justify-center items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10ss">
          <Image
            src="/img/key-benefit-of-our-fantacy-sports-website.webp"
            alt="Key banefit of our fantacy sports website "
            height={1300}
            width={1300}
          />
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-fantasy-sports-web-development.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#F45F39CC] backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Top Sports & Non-Sports we cover in our website
                </h2>
              </div>
              <ul className="space-y-2">
                {JSON_DATA.myList4.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}>
                    <span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <TbCircleDot className="w-4 h-4" />
                    </span>
                    {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/top-sports-non-sports-we-cover-in-our-website.webp"
                alt="Top Sports & Non-Sports we cover in our website"
                className="rounded-lg"
                height={600}
                width={555}
              />
            </div>
          </section>
        </div>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Fantasy Sports Website Development"
        />
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
