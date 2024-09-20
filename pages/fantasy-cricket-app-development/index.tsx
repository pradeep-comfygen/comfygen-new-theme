import Image from "next/image";
import {
  MdBatchPrediction,
  MdHighlight,
  MdOutlineLiveTv,
  MdOutlineQuiz,
  MdOutlineScore,
} from "react-icons/md";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { TbListDetails } from "react-icons/tb";
import { BsChatDots, BsCurrencyExchange, BsDot } from "react-icons/bs";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/fantasycricketapp.json";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
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
const Arena = [
  {
    num: "1",
    icon: <MdBatchPrediction className="text-blue-400" size={60} />,
    title: "Playing 11 Prediction",
    decs: "Making an educated guess about the team that will play in the upcoming match. Integrated into the app! With all of their players in the team, the user gets a fair and equal start!",
  },
  {
    num: "2",
    icon: <TbListDetails className="text-blue-400" size={60} />,
    title: "Player details and highlights",
    decs: "Users can view more than just a basic player profile, including insights, their track record, last performances, key factors, and expert opinions.",
  },
  {
    num: "3",
    icon: <MdOutlineQuiz className="text-blue-400" size={60} />,
    title: "Cricket Quiz",
    decs: "Extensive game feature, so users can enjoy themselves besides playing leagues. In addition to earning performance badges and redeemable points, they get to discover how much they know about cricket.",
  },
  {
    num: "4",
    icon: <MdOutlineLiveTv className="text-blue-400" size={60} />,
    title: "Live game status",
    decs: "You can also include live match streaming in your fantasy cricket app development solution, so users can see the action in real-time.",
  },
  {
    num: "5",
    icon: <BsCurrencyExchange className="text-blue-400" size={60} />,
    title: "Reward Points",
    decs: "Participation points, loyalty bonuses, and cash rewards are some of the engagement features that will keep your users coming back for more.",
  },
  {
    num: "6",
    icon: <MdHighlight className="text-blue-400" size={60} />,
    title: "Match results and highlights",
    decs: "The match is reviewed after the end of the match with a scorecard, match statistics, short videos, fantasy league results, performance outcome, and comparison graphs.",
  },
  {
    num: "7",
    icon: <MdOutlineScore className="text-blue-400" size={60} />,
    title: "Winner and score prediction",
    decs: "Teams and individual players will score more, which team will win, who will perform best, etc.",
  },
  {
    num: "8",
    icon: <BsChatDots className="text-blue-400" size={60} />,
    title: "Friend follow and chat model",
    decs: "You can get this add-on feature built for your fantasy sports website just as you can for other social media websites.",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;

  let { Modus } = JSON_DATA;
  return (
    <>
      <Head>
        <title>
          Trusted Fantasy Cricket App Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Comfygen is one of the most trusted, reliable and professional Fantasy Cricket App Development Company In India & The USA. Contact us for Custom Fantasy Cricket App Development Services."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/fantasy-cricket-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Trusted Fantasy Cricket App Development Company In Canada &  The USA"
        />
        <meta
          property="og:description"
          content="Comfygen is one of the most trusted, reliable and professional Fantasy Cricket App Development Company In Canada & The USA. Contact us for Custom Fantasy Cricket App Development Services."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/fantasy-cricket-app-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta name="language" content="En-us" />
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
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Fantasy Cricket App Development Company"
                ptag="Comfygen is the leading creator of Fantasy Cricket software and apps, and we provide innovative solutions to help you take advantage of this cutting-edge trend. Your idea can be turned into an amazing app that is evocative of Draft Kings and other well-known platforms thanks to the great programming talents of our team of knowledgeable and talented fantasy sports website developers."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Features covered in our{" "}
                  <span className="text-blue-500">
                    Fantasy Cricket App & Software{" "}
                  </span>{" "}
                  Solution
                </h2>
              </div>
              <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem: any, index: any) => {
                  const { title, icon, decs } = elem;
                  return (
                    <ServiceSection
                      key={index}
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
        <AdviceSection
          heading="Fantasy Cricket App Development Company in Jaipur"
          ptag="In this day and age, fantasy sports apps are at the core of mobile gaming and entertainment trends. A growing number of businesses are entering the fantasy club actively as they seek to explore newer ideas and use the latest technology. Fantasy Cricket App Development Company in Jaipur are increasingly looking for new ways to make the game more interesting for players."
          ptag1="As a result, Comfygen provides engrossing Fantasy league app development solutions to keep them entertained. With our expertise, we can build hybrid and native mobile apps, backend consoles, web portals, and supporting software for any sports and gaming idea. Depending on your needs, we have a wide range of fantasy cricket app development solutions to choose from. Additionally, we offer website solutions for mobile apps. With the help of our experts, you can streamline the development process so that you can enjoy it later on."
          imgSrc="/img/fantasy-cricket-app-development-comapny-in-jaipur.webp"
          imgW={556}
          imgH={570}
          altTag="Fantasy Cricket App Development Company in Jaipur"
        />
        <div className="py-10">
          <section className="flex flex-col-reverse lg:flex-row items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:space-x-10">
            <div className="w-full space-y-[10px] text-left p-[40px] rounded-[40px] ">
              <div className="space-y-2">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Fantasy Cricket Software Development
                </h2>
              </div>
              <p className="text-base text-[#475569] ">
                In addition to developing mobile applications for sports and
                other industries, Comfygen is one of the leading fantasy cricket
                app development companies. Fantasy sports revenue is predicted
                to reach 10 billion USD by 2028, and there is huge growth ahead.
                Our experts can help you with any idea you may have about this.
                The fantasy sports apps we have delivered to date have performed
                very well.In addition to their in-depth knowledge and great
                skill set, our fantasy sports website builder has experience
                handling multiple projects. For your business, we can develop
                sports mobile apps, Android sports apps, and fantasy sports
                platforms if needed.
              </p>
            </div>
            <div className="flex justify-center w-full md:justify-start pb-8 lg:pb-0">
              <Image
                className="rounded-md w-full"
                title="  Fantasy Cricket Software Development"
                alt="  Fantasy Cricket Software Development"
                src="/img/fantasy-cricket-software-development.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title=" Fantasy Cricket Mobile Application We Developed"
                alt=" Fantasy Cricket Mobile Application We Developed"
                src="/img/fantasy-cricket-mobile-application-we-developed.webp"
                height={600}
                width={555}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left  rounded-[40px]">
              <div className="space-y-2">
                <h2 className="py-2 md:text-4xl text-3xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51] ">
                  Fantasy Cricket Mobile Application We Developed
                </h2>
              </div>
              <p className="text-base  text-[#475569] ">
                As a leading web and application development company, Comfygen
                has helped businesses grow for years. Here are just a few of our
                highly valuable products - the fruits of our exceptional
                technology and breakthrough solutions:.
              </p>
              <div className="w-full text-center md:text-left">
                <ul className="space-y-1 text-slate-600">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li className="flex items-top" key={index}>
                      <span className="">
                        <BsDot size={26} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        <TalkExpert />
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
        <section className="">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-fantasy-cricket-app-and-software-developerr.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51] ">
                Why Choose us for Fantasy Cricket Software & App Development
              </h2>
            </div>
            <p className="text-base text-black ">
              Make your fantasy app idea a lucrative revenue-generating product
              with a flawless Fantasy Sports solution built on top of the finest
              user-experience and segment-leading features!
            </p>
            <ul className="space-y-1 w-full text-center text-slate-600">
              {JSON_DATA.myList2.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="pr-2 text-slate-600">
                    <BsDot className="w-8 h-6" />
                  </span>
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
            <Image
              className="rounded-md"
              title="Why Choose us for Fantasy Cricket Software & App Development "
              alt="Why Choose us for Fantasy Cricket Software & App Development "
              src="/img/why-choose-us-for-fantasy-cricket-software-app-development.webp"
              height={600}
              width={555}
              loader={uploadcareLoader}
              unoptimized={true}
            />
          </div>
        </section>
        <div className="container flex justify-center py-16 space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
          <Image
            width={1400}
            height={1200}
            className="object-cover "
            src="/img/process-developing-fantacu-cricket-software-app.webp"
            alt="react-native-dev"
          />
        </div>
        <section className="bg-gray-100 space-y-10 py-10">
          <div className="flex flex-col justify-center text-center  mx-auto lg:w-4/6">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
              Fantasy <span className="text-blue-600">Cricket App Panels</span>{" "}
              with functions
            </h2>
          </div>
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md"
                title=" Bookie Panel"
                alt=" Bookie Panel"
                src="/images/bookie-panel.webp"
                height={500}
                width={555}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-4 ">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Bookie Panel
                </h2>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    There are a wide variety of games and sports that
                    administrators can manage with online sports betting apps.
                  </p>
                </div>
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    There are different risks involved in sports betting that
                    need to be managed.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    A sports betting mobile application's interactive dashboard
                    can be managed by an administrator.
                  </p>
                </div>
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    Different bookmakers are managed by a sports betting app
                    administrator.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-4 ">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  Admin Panel
                </h2>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4">
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    Bookies can create accounts on the sports betting app. The
                    app makes it easy to manage different user profiles.
                  </p>
                </div>
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    The app allows users to send and receive notifications
                    related to sports betting.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4">
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    There is a real-time feed provided to users of sports
                    betting.
                  </p>
                </div>
                <div className="p-4 space-y-3 bg-white rounded-lg">
                  <p className="text-sm">
                    Through bookie members, provide end users with relevant
                    customer support.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md"
                title="Admin panel"
                alt="Admin panel"
                src="/images/admin-panel.png.webp"
                height={550}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-0">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md object-cover"
                title="user panel"
                alt="user panel"
                src="/images/user-panel.svg"
                height={600}
                width={1000}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-4 ">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl font-bold text-[#0E1F51]">
                  User Panel
                </h2>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4">
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="text-sm">
                    Easy creation and registration of bet accounts. Real-time
                    feeds and updates about different sports activities.
                  </p>
                </div>
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="line-clamp-3 text-sm">
                    Increase revenue for app owners while providing users with
                    an enhanced betting experience.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4">
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="text-sm">
                    Purchases made through the app.Easy navigation ensures ease
                    of use for end users.
                  </p>
                </div>
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="line-clamp-3 text-sm">
                    Sports and games can be betted using real money or virtual
                    money. Providing protection against fraud and money loss for
                    users.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 pt-4">
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="text-sm">
                    Betting tips to improve your experience.
                  </p>
                </div>
                <div className="p-4 space-y-2 bg-white rounded-lg">
                  <p className="line-clamp-3 text-sm">
                    Using the calendar and schedule, users can find out what
                    sports and events are coming up
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Fantasy Cricket App Development"
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
