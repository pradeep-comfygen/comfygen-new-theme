import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ecommerceapp.json";
import styles from "./styles.module.css";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
import Slider from "./components/Slider";
import Providers from "./components/Providers";

const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const FaqBlockChain = dynamic(() => import("./components/FaqBlockChain"), {
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
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("./components/Advice"), {
  loading: () => <p>Loading...</p>,
});

export default function Ecommerce(props) {
  let { initialData } = props;

  let { Hire, myList, WhyChoosed } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Best Dating App Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top online dating app development company In India & The USA, we redefine global connection with cutting-edge online dating app development services. We Develop dating apps like Tinder, Badoo & Bumble or a fully custom dating mobile applications. Contact us now for Uniting hearts across borders is our passion."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/dating-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Dating App Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a top online dating app development company In India & The USA, we redefine global connection with cutting-edge online dating app development services. We Develop dating apps like Tinder & Bumble or a fully custom dating mobile applications. Contact us now for Uniting hearts across borders is our passion."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/dating-app-development"
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
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Dating App Development Company"
                ptag="Comfygen is a top class dating app development company that delivers the best end product to its clients at all times. Our team of developers are in touch with the latest trends of AI and ML to create innovative and interactive dating apps along with use of Blockchain, creating the most secure dating apps. Our mobile app developers have quite a good hand on Augmented reality and virtual reality to create apps that make virtual relationships more real and humane for users of dating apps."
                ptag1="Comfygen has a proven track record of delivering exceptional dating app development services to clients across various industries. We are proud to have been recognized as a top-class dating app development company, with a 4.8/5 rating on Clutch and Good Firm."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/e-commerce-app-web-development.webp"
                Width={534}
                Height={544}
                altTag="Dating App Development Services"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Best Dating Application Development Company"
          ptag="Comfygen is the best dating application development company if you are searching for one to create a new dating app in the US and Canadian markets. The team of developers at Comfygen has successfully completed many projects in the dating app development sector, and they will bring years of experience accumulated from the work they have done to date."
          ptag1="Our team has more than 15 years of combined experience, and every project has been successful in our portfolio. By collaborating with Comfygen, you secure a competitive advantage over your competitors and contemporaries. You hire a team of professionals who have worked successfully with hundreds of clients in the US and Canadian Industry."
          ptag2="If you're looking to develop a cutting-edge dating app that leverages the latest technologies, Comfygen is the partner you can trust. Contact us today to discuss your project and let us help you create the ultimate dating experience for your users."
          imgSrc="/img/dating-mobile-app-development-company-in-india-and-the-usa.svg"
          imgW={833}
          imgH={625}
          altTag="Dating Mobile App Development Company in India and the USA"
        />
        <ContactFromCenter />
        <section className="lg:py-16 py-8 bg-[#151B22]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className=" text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                  Our Services Related to Dating App Development
                </h2>
                <p className="text-white text-base">
                  As the leading company for dating application development
                  services, we offer the following development-oriented services
                  to our clients and partner companies. Our services are
                  targeted toward helping companies grow and realize the
                  potential of using a dating app for revenue generation as a
                  digital product.
                </p>
              </div>
              <div className="grid  text-left lg:grid-cols-2 md:grid-cols-2 mt-5 gap-7 ">
                {JSON_DATA.Arena.map((elem: any) => {
                  const { img, title, num, desc, urlLink } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.foodcard} w-full flex bg-white rounded-xl  flex-col justify-center  p-8 relative mt-5`}
                    >
                      <div className="mt-2">
                        <img src={img} alt={title} />
                      </div>
                      <h2 className=" font-bold 2xl:text-3xl xl:text-3xl text-lg text-slate-800 text-start mt-4 ">
                        <a href={urlLink}>{title}</a>
                      </h2>
                      <div className="space-y-1">
                        <p className="text-base text-slate-800">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Our Top Notch Custom Dating Application Development Solutions{" "}
                </h2>
                <p>
                  Comfygen is a top dating mobile app development company that
                  has been active in the USA market for years. With years of
                  experience and the latest technologies, we create customized
                  solutions for mobile dating app development. We take up the
                  client brief and create an assortment of features that can be
                  integrated into a customized dating app framework.{" "}
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mb-5">
                {JSON_DATA.Chartacterstics.map((elem) => {
                  const { img, title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B82F6]">
                        {title}
                      </h3>
                      <div>
                        <p className="break-all text-slate-800 line-clamp-5">
                          {decs}
                        </p>
                      </div>
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

        <section
          className="lg:bg-center  bg-left bg-repeat bg-fixed py-10 lg:py-20 "
          style={{ backgroundImage: `url("/img/dating-bg-2.svg")` }}
        >
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 py-4">
            <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-12  items-center">
              <div className="col-span-6">
                <div className=" ">
                  <div className="flex flex-col justify-center text-start  mx-auto">
                    <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                      Who Can Take Advantage of our Dating App Development
                      Solutions?
                    </h2>
                    <p className="text-base text-white">
                      We are a renowned dating app development company in the
                      USA and India. Our dating app development solutions are
                      targeted towards multiple stakeholders of the dating app
                      ecosystem. We aim to offer our dating app development
                      solutions to companies and startups that are ready to hire
                      our services for their next project. Our dating app
                      development solutions are adaptable and flexible.
                    </p>
                    <p className="text-base text-white">
                      We have helped startups and mid-scale businesses transform
                      with our dating app development services, helping them tap
                      into the revenue generation scope that dating apps bring
                      to the fore. Our dating app development services can help
                      you create the following solutions{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Slider />
        <Providers />
        <div
          className="bg-center bg-repeat bg-fixed "
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#222222]/95">
            <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div>
                    <div className="flex flex-col space-y-2">
                      <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                        Our Technology Stack for Delivering Dating Applications
                      </h2>
                      <p className="text-white">
                        For online dating app development, we use the most
                        updated and useful technology stack. We use high-end
                        programming languages, advanced and multi-purpose tools,
                        and runtime environments to create new dating apps that
                        can be used across multiple platforms and devices.{" "}
                      </p>
                      <img
                        className="rounded-lg"
                        src="/img/technology-we-used-to-build-a-dating-img.webp"
                        alt="Taxi Booking"
                      />
                      <div className="flex justify-start items-center mt-5">
                        <a href="https://api.whatsapp.com/send?phone=919587867258">
                          <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                            Talk To Consultant
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto `}
                    >
                      {WhyChoosed.map((elem) => {
                        const { title, img, decs, num } = elem;
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
                              <p className="break-all text-white ">{decs}</p>
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
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Why do businesses want to invest in dating application
                  development?
                </h2>
                <p>
                  Dating app development is a relatively new concept that is
                  very profitable at this time. We have worked with a lot of
                  startups and established companies to create dating apps that
                  have received much love from their user base. Here are the
                  reasons why most companies are trying to invest in dating
                  application development.{" "}
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Features.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCard11} border-2 border-[#B266C1] p-6 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#B266C1]">
                        {title}
                      </h3>
                      <div>
                        <p className="break-all text-slate-800 line-clamp-5">
                          {decs}
                        </p>
                      </div>
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
        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Emerging Technologies We Leverage For Dating App Development
                </h2>
                <p className="text-base text-white">
                  The team at Comfygen deals with all the emerging technologies
                  that have been dominant in the software development services
                  sector. The app development process we use includes all the
                  technology trends that are needed to improve an app.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
                {JSON_DATA.FoodAppMaker.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={`${styles.BenefitsCardItem} relative`}>
                      <div className={`${styles.BenefitsCardItemImg} relative`}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#fff] text-start">
                        {title}
                      </h3>
                      <div className="mt-3">
                        <p className="break-all text-white text-start ">
                          {decs}
                        </p>
                      </div>
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

        <section className="py-10 lg:py-20 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Features Of Our Web3 Dating Platform
                </h2>
                <p className="text-base text-black">
                  We follow the Web3 dating app development process to create
                  beautiful and interactive dating apps that are a step ahead of
                  their counterparts. We include new features and interesting
                  app layouts by using notable Web3 trends into the application
                  framework. Here are the top Web3 capabilities that we can
                  include in the app that we develop for your company.{" "}
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-3 mt-5">
                {JSON_DATA.FeaturesWeb3.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCardItem1} border border-[#00000034] rounded-[10px] p-6 `}
                    >
                      <div className={`${styles.BenefitsCardItemImg1} `}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={35}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl mt-4 font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <p className=" text-black">{decs}</p>
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

        <section className="py-10 lg:py-20 bg-[#223547]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  ">
                  Our Working Methodology for Implementing Dating App
                  Development Solutions
                </h2>
                <p className="text-base text-white">
                  At Comfygen, we take up on-demand online dating app
                  development with a streamlined and well-defined approach. Our
                  developers, specializing in dating application development,
                  follow a particular approach to create amazing dating app
                  layouts and systems that are ready and marketable. Here is a
                  glimpse of our approach that we follow at Comfygen.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-1">
                {JSON_DATA.WhyChooseDating.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={`${styles.WhyChooseDatingItem} relative`}>
                      <div>
                        <Image
                          src={img}
                          className="object-cover"
                          width={60}
                          height={60}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#fff] text-start mt-4">
                        {title}
                      </h3>
                      <div className="mt-3">
                        <p className=" text-white text-start ">{decs}</p>
                      </div>
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

        <section className="py-10 lg:py-20 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Why Choose Comfygen For The Dating App Development Process?
                </h2>
                <p className="text-base text-black">
                  As a dating app development company, we are the top choice for
                  leading companies, startups, and established businesses.
                  Comfygen is a highly efficient team of developers that
                  includes experts, consultants, and professionals who can help
                  you complete the dating app development project on time for
                  launch.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.WhyChooseComfygen.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border p-8 rounded-[14px]">
                      <div>
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl mt-3 font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <div className="">
                        <p className=" text-start ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <TalkExpert />
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

        <section className="lg:py-16 py-8">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <img
                  width={400}
                  src="/img/explore-our-dating-app-clone.webp"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Are you in search of more information on Dating app
                  development services?
                </h2>
                <p className="text-base">
                  To learn more about the dating application development
                  services we offer, discuss with our team and consult with our
                  consultants today. We will be happy to hear from you
                </p>
                <div className="flex justify-start items-start mt-5">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"Connect with IT Experts"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqBlockChain />
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
