import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/taxi.json";
import styles from "./styles.module.css";
import Tech from "./components/tech";
import SocialTab from "./components/SocialTab";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";

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
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});

export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    Arena,
    Chartacterstics,
    Qa,
    Whycomfygen,
    WhyChoosed,
    Hire,
    myList,
    Frequently,
    Solution,
  } = JSON_DATA;
  return (
    <>
      <Head>
        <title>
          Best Taxi App Development Company In India & The USA | Taxi App
          Developer
        </title>
        <meta
          name="description"
          content="Transform your taxi business with Comfygen. Comfygen is a top Taxi App Development Company In India & The USA. Contact us today for a free consultation!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Taxi App Development Company In India & The USA | Taxi App Developer"
        />
        <meta
          property="og:description"
          content=" Transform your taxi business with Comfygen. Comfygen is a sophisticated Taxi App Development Company In India & The USA. Contact us today for a free consultation!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="language" content="en-us" />
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
                heading="Taxi App Development Company"
                ptag="Do you want to build a taxi booking application? We are the best taxi app development company from In India & The USA to customize ride booking experience. Comfygen can build super-efficient carpooling app development services, ride sharing app development services, and other taxi booking applications with some unique and innovative features deployed on Android taxi app development, iOS taxi app development, and web taxi app development platforms. The top-notch experienced mobile app developers are working here following advanced and current market-based tech trends to transform technology solutions."
                ptag1="We have the knowledge, skills, and expertise to create robust applications that last years in the marketplace with vast engagement. Be ready for the user-friendly and innovative taxi booking mobile apps development services."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <section>
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 space-y-4">
            <div className="grid gap-10 pt-10 text-left lg:grid-cols-2 md:grid-cols-1 xl:gap-10 flex items-center ">
              <div>
                <img
                  src="/img/discover-feasible-expansions-in-business.webp"
                  width={585}
                  height={559}
                  alt="The Best E-commerce Apps for a Delightful User Experience"
                />
              </div>
              <div>
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Discover Feasible Expansions in Business with On-Demand Taxi
                  Booking Application Development
                </h2>
                <p className="text-base">
                  Taxi booking market is projected to grow US$6.05Bn by 2024,
                  based on Statista Research. No wonder, entrepreneurs want to
                  build a super-classy app keeping market standards in mind.
                  Comfygen, as a top-notch taxi booking app development agency
                  in jaipur, is here to support those entrepreneurs with some
                  mind-blowing innovative ideas, some efficient app consultation
                  services, and agile development processes. Yes, we are the
                  best taxi app development company in India, Jaipur, which can
                  make a robust application with some advanced features. Our
                  taxi app development agency can offer a range of taxi
                  applications development services and solutions; such as
                  carpooling app development services, women-friendly taxi
                  booking app development services, bike taxi booking app
                  development services, commercial transportation app
                  development services, and more.{" "}
                </p>
                <p>
                  Comfygen has 10+ years of experience{" "}
                  <a
                    href="/hire-mobile-app-developer"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    mobile app developers
                  </a>{" "}
                  in its team. They are not only expert in their domains, but
                  experienced to tackle major complicated tasks though. Our
                  company can handle simplistic or complex mobile app
                  development projects; therefore we can stand at the
                  exceptional expectations of clients to build efficient and
                  uniquely designed taxi booking app development services that
                  target a vast audience with high-level engagement. You can
                  trust on us, when we say “We Can Do.” Our company has the
                  caliber, talent, skills, and resources; which never fails at
                  satisfying the clients with our excellent creations with
                  innovations.{" "}
                </p>
              </div>
            </div>
            <div className="grid pt-4 pb-10 gap-10 text-left lg:grid-cols-1 md:grid-cols-1 xl:gap-10"></div>
          </div>
        </section>
        <ContactFromCenter />
        <section className="py-10 bg-[#EAEAEA]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 space-y-4">
            <div className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                World-Class{" "}
                <span className="text-blue-600">
                  Taxi App Development Services
                </span>{" "}
                for Top-Tier RideSharing App Development
              </h2>
              <p className="text-slate-800 text-base">
                We understand the surging needs and On demand of taxis booking
                app development services in urban areas, as well as in the
                developing cities. Every person is seeking to make their travel
                app development convenient, and that is raising the On demand of
                taxi booking app development simultaneously. We have the
                offerings of top-tier on demand cab booking app development
                services. Our experts cater to the best taxi app development
                services with user-friendly and engaging features &
                functionalities. Our taxi booking app development services and
                solutions will provide hassle-free travel experience with
                AI-Driven advancements.
              </p>
            </div>
            <div className="grid  text-left lg:grid-cols-3 md:grid-cols-2 mt-5 ">
              {Arena.map((elem: any) => {
                const { img, title, num } = elem;
                return (
                  <div
                    key={num}
                    className={`${styles.CardItem} w-full flex flex-col justify-center items-center text-center space-y-2 p-6 `}
                  >
                    <div className="w-20 h-20 bg-[#0E1F51] rounded-full flex justify-center items-center">
                      <img src={img} width={50} height={50} />
                    </div>
                    <h2 className=" font-bold 2xl:text-xl xl:text-lg text-lg text-[#0E1F51] text-center">
                      {title}
                    </h2>
                    <p
                      className="text-base text-slate-800"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Tech />
        <SocialTab />
        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <div
          className="bg-center bg-repeat bg-fixed "
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#14141c]/95">
            <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div>
                    <div className="flex flex-col space-y-2">
                      <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                        On-Demand{" "}
                        <span className="text-[#AF67C2]">Taxi Booking</span> App
                        Development Process
                      </h2>
                      <p className="text-white">
                        Our taxi booking app development company follows a
                        full-fledged streamlined process to continue with agile
                        taxi app development. The process won’t let clients
                        down, and even keep everything in the loop with them to
                        run seamlessly:{" "}
                      </p>
                      <img
                        className="rounded-lg"
                        src="/img/taxi-process.webp"
                        alt="Taxi Booking"
                      />
                      <div className="flex justify-start items-center mt-5">
                        <ConnectWithExpertButton
                          url={
                            "https://api.whatsapp.com/send?phone=919587867258"
                          }
                          title={"Talk To Consultant"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto `}
                    >
                      {WhyChoosed.map((elem) => {
                        const { title, img, num } = elem;
                        return (
                          <div
                            key={num}
                            className="group border-b-4 border-[#473a92] pb-6 space-y-4 transition-all duration-200  cursor-pointer "
                          >
                            <div className="flex items-center justify-start">
                              <div className="flex items-center justify-center gap-3 ">
                                <Image
                                  src={img}
                                  alt=""
                                  width={40}
                                  height={40}
                                />
                                <h3 className="text-2xl text-white font-semibold ">
                                  {title}
                                </h3>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <p
                                className="break-all text-white"
                                dangerouslySetInnerHTML={{ __html: elem.decs }}
                              ></p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Why is Comfygen the{" "}
                  <span className="text-blue-600">Best Taxi Booking</span> App
                  Development Company In Jaipur, India?
                </h2>
                <p>
                  We are not the ones just with taxi booking app development
                  services, but we are the ones with proficient expertise in it.
                  Comfygen won’t fail in its clientele projects, because our
                  client’s success is what makes us remarkable in the market for
                  our taxi booking app development services:{" "}
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={elem.img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={elem.title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{elem.title}</h3>
                      <p
                        className="text-base text-slate-800"
                        dangerouslySetInnerHTML={{ __html: elem.decs }}
                      ></p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                <div className="space-y-6">
                  <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                    Other Industries We Serve
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 ">
                  {Solution.map((mobile) => {
                    return (
                      <div
                        key={mobile.num}
                        className="flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100"
                      >
                        <a href={mobile.url}>
                          <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                            <div className="md:bg-white md:p-2 md:rounded-lg">
                              <Image
                                title={mobile.title}
                                alt={mobile.title}
                                src={mobile.img}
                                height={50}
                                width={50}
                              />
                            </div>
                            <p className="py-4 text-lg font-semibold text-gray-800 ">
                              {mobile.title}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection faqData={Frequently} title="" />
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
