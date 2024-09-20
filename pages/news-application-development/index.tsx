import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/newsapp.json";
import Providers from "./components/Providers";
import ModusSection from "./components/ModusSection";
import HireSection from "../components/HireSection";
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
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function News(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          News App and Web App Development Company in India & USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top-class news & Magzine app development company In India & The USA, offers tailored app services for personalized news, alerts, and engaging features. With expertise in app launches, we can create your global news feed app."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/news-application-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="News App and Web App Development Company in India & USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a top-class news & Magzine app development company In India & The USA, offers tailored app services for personalized news, alerts, and engaging features. With expertise in app launches, we can create your global news feed app."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/news-application-development"
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
                heading="News Application Development Company"
                ptag="Do you plan to build a News application with high-performance and efficient processes integrated into it? If you have an idea related to news application development but do not have the human resources to do so, you need to contact our development experts at Comfygen Private Limited. We are the leading news app development service provider in the region, and our team has decades of experience building a news-sharing application from scratch. "
                ptag1="We have an extensive team of more than 150+ full-stack developers who are experienced in creating news applications with tools and latest technology that are updated and recent. Our team is experienced and passionate about creating news applications, and we welcome collaborative efforts to bring innovative ideas to life."
                btnName="Talk with Consultant"
                btnLink="/quote"
              />
            </div>
          </div>
        </div>
        <Advice
          heading="The Best Company For News App Development "
          ptag="As a Newspaper App Development Company in the USA, Comfygen is the best News App Development company in India and the region. We deliver the best results and follow up with timely maintenance and support services 24*7. The range of newspaper application development services that we offer is diverse, and we help our clients get the best output that exceeds their expectations."
          ptag1="As a News and Media App Development Company, we not only create a news app for our client business but also extend timely support and maintenance services so that the applications runs smoothly and is able to captivate the market. With expertise, timely delivery, and extended maintenance services, we are the complete solution for news application development. To create a feasible and useful news app based on your concept idea, you can tap into our top-notch news app development services now! "
          imgSrc="/img/the-best-company-for-news-app-development-img.webp"
          imgW={660}
          imgH={660}
          altTag="News App Development Services"
        />
        <ContactFromCenter />
        <div className="lg:py-16 py-8 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Our High-Quality News Application Development Services
                </h2>
                <p className="text-base text-slate-800">
                  At Comfygen, we include multiple news application development
                  services that focus on creating the best mobile application
                  for your audience. With the help of the services that we
                  offer, you can turn your idea into a feasible product for the
                  market niche.{" "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
                {JSON_DATA.Streamline.map((elem) => {
                  const { title, decs, num, img } = elem;
                  return (
                    <div
                      key={num}
                      className="p-8 drop-shadow-xl relative border-l-4 border-blue-500 bg-slate-100 rounded-[17px] space-y-2"
                    >
                      <div className="">
                        <div className="bg-blue-500 w-20 h-20 p-3 rounded-lg flex justify-center items-center">
                          <img className="w-14 h-14" src={img} alt="" />
                        </div>
                        <h3 className="text-xl mt-3 text-[#0E1F51] font-semibold group-hover:text-white">
                          {title}
                        </h3>
                        <div className="flex justify-start space-x-2 py-2">
                          <div className="w-10 h-1 rounded-full bg-blue-500 "></div>
                          <div className="w-6 h-1 rounded-full bg-blue-500 "></div>
                        </div>
                      </div>
                      <p className="text-[#000000] group-hover:text-white/90">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Get A Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-8 bg-[#223547]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" text-4xl font-bold leading-[3rem] text-[#fff]">
                  Our Top Notch News App Development Solutions
                </h2>
              </div>
              <p className="text-[#fff] text-base  lg:w-4/6 mx-auto text-center">
                Our News App and platform development services are aligned
                towards multiple solutions, and we can customize these solutions
                for multiple platforms. As people use multiple devices in their
                day-to-day lives, multi-platform support is important for the
                amazing news app development solutions we extend. Here are some
                of the top-notch solutions that our News App development team
                has created.
              </p>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Develop.map((elem) => {
                  const { title, decs, img, url } = elem;
                  return (
                    <div className="p-8 space-y-2 border rounded-[20px] transition-all duration-300 hover:translate-y-2  bg-white shadow">
                      <div className="w-20 bg-white h-20 rounded-[17px] border flex justify-center items-center shadow">
                        <img className="w-14 h-14" src={img} alt="" />
                      </div>
                      <div className="pt-2 space-y-4">
                        <a href={url} className="hover:underline">
                          <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 capitalize">
                            {title}
                          </h3>
                        </a>
                        <p className="font-medium text-black  transition duration-200 ease-in-out line-clamp-5 ">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white lg:py-16 py-8">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center bg-[#6091CE] p-14 rounded-[20px]">
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="col-span-2">
                <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-start text-[#fff]  ">
                  Who needs our news application development solutions?
                </h2>
                <p className="text-white text-lg text-start">
                  We have a reputation of being highly reliable as a news app
                  development company. We create news applications for various
                  stakeholders of the news and media sector. We aim to create
                  news applications that can introduce new technologies for
                  broadcasting and mass communication.
                </p>
                <a href="/quote">
                  <button className="bg-white py-3 px-10 text-lg font-semibold flex justify-start mt-6 rounded-full">
                    GET A FREE DEMO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#e4eff1] space-y-6 ">
          <div className="flex flex-col justify-center text-center  lg:w-4/6 mx-auto">
            <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51] capitalize">
              News applications for multiple stakeholders of the media and news
              sector
            </h2>
            <p className="text-slate-800 text-base">
              News is a capsule of information that is needed by people around
              the world. A simple newspaper is read by many, and in the modern
              day, news apps are used by a wide demographic. Here are the
              demographics and needs of the sector as captured in-app features.
            </p>
          </div>
          <div className="grid w-11/12 grid-cols-1 gap-5 mx-auto lg:grid-cols-3 md:grid-cols-2 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-4">
            <div className="bg-[#F45F391A] p-10  rounded-[40px] space-y-5  w-full py-10">
              <div>
                <h3 className="flex px-20 p-0 text-2xl font-bold text-black md:px-2 md:justify-start">
                  News application for the general public{" "}
                </h3>
                <p>
                  The general public uses news apps to remain informed and for
                  infotainment. People have an interest in a lot of social and
                  economic topics that they want to get news on. We create a
                  daily news app that keeps people in touch with reality.{" "}
                </p>
              </div>
              <div className="flex justify-start">
                <ul className="px-6 list-disc">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-green-500/10 p-10  rounded-[40px] space-y-5  w-full py-10">
              <div>
                <h3 className="flex px-20 text-2xl p-0 font-bold text-black md:px-2 md:justify-start">
                  News Applications for Media Professionals
                </h3>
                <p>
                  Media professionals need highly specialized news apps that are
                  targeted toward their field of work and also give them
                  role-based access. We, therefore, create news applications
                  with features that are only meant for professional
                  journalists.
                </p>
              </div>
              <div className="flex justify-start">
                <ul className="px-6 space-y-1 list-disc">
                  {JSON_DATA.myList2.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-purple-500/10 p-10  rounded-[40px] space-y-5  w-full py-10">
              <div>
                <h3 className="flex px-20 text-2xl font-bold p-0 text-black md:px-2 md:justify-start">
                  News Applications for Students{" "}
                </h3>
                <p>
                  Students need news applications on their devices for
                  education, interest development, and preparation for
                  examinations. We create applications that have
                  student-friendly features and also have the feature of
                  personalization so that a student can moderate what he learns.
                </p>
              </div>
              <div className="flex justify-start">
                <ul className="px-6 space-y-1 list-disc">
                  {JSON_DATA.myList3.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Providers />
        <section className="py-10 lg:py-20">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]  capitalize">
                  Our Technology Stack for News App development
                </h2>
                <p className=" text-base leading-[1.5rem]">
                  The news app development process needs a technology stack that
                  can create all the complex back-end and front-end features in
                  the framework. Comfygen uses the most updated and extensive
                  technology stack for news app development so that all the apps
                  that we create have cutting-edge technology empowering them.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Services2.map((elem) => {
                  const { title, bg, img } = elem;
                  return (
                    <div
                      style={{ backgroundColor: `${bg}` }}
                      className="border p-8 space-y-4 rounded-[40px]"
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-20 h-20">
                          <img className="w-16 h-16" src={img} alt="" />
                          {/* <span>{icon}</span> */}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold capitalize">
                          {title}
                        </h3>
                        <p
                          className="text-slate-800"
                          dangerouslySetInnerHTML={{ __html: elem.decs }}
                        ></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#024765]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-20 space-y-6">
            <div className="flex flex-col justify-center text-center space-y-2">
              <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                Why is News App development a good idea for businesses?
              </h2>
              <p className="text-base text-white">
                Businesses that are looking to extend their services and enter
                new areas can think about going for news app development with
                Comfygen. Our services are available to help startups,
                established media houses, and emerging businesses. News
                applications are a great idea because they are wide-ranging and
                have a wider audience. You should use our News app development
                services for the following benefits-{" "}
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.Services.map((elem) => {
                const { num, img, title, decs } = elem;
                return (
                  <div
                    key={num}
                    className="p-8 space-y-4 bg-[#fff] border rounded-[20px] transition-all duration-300 hover:translate-y-2 group group "
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-[#024765] rounded-[8px] p-3 text-xl font-semibold ">
                      <Image
                        width={110}
                        height={110}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#000] transition-all duration-200 text-left">
                        {title}
                      </h3>
                      <p className="font-medium text-left text-black ">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="/contact-us " className="">
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  LET'S CONNECT TO GROW YOUR BUSINESS
                </button>
              </a>
            </div>
          </div>
        </section>
        <div className="bg-[#6284D6]">
          <ModusSection
            Modus={JSON_DATA.head}
            ModusOperandi={JSON_DATA.CardDetails}
          />
        </div>
        <section className="bg-[#223547]  lg:py-16 py-8 ">
          <div className=" ">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  capitalize">
                  Choose our flexible engagement models now!
                </h2>
                <p className="text-white">
                  As the top-rated news app development services provider in the
                  USA, we are poised to help our clients with our top-notch
                  newspaper app solutions and diverse services. Are you looking
                  for a newspaper app development company in the USA that can
                  help you develop a comprehensive news application within a
                  budget? Engage our team through a flexible approach and
                  pocket-friendly plans today.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {JSON_DATA.Chartacterstics.map((elem) => {
                  const { img, title, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-8 space-y-4 bg-white rounded-[15px] relative`}
                    >
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover"
                          width={60}
                          height={60}
                          alt={title}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#3B82F6]">
                          {title}
                        </h3>
                        <div>{decs}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us " className="mt-5">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 lg:py-10 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 ">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  capitalize">
                Why Choose Comfygen as your News App development partner?{" "}
              </h2>
              <p className="text-base text-slate-800">
                As the leading news app development company, we can give you
                many reasons why you should opt for our news app development
                services.{" "}
              </p>
            </div>
            <div className="grid gap-10 py-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:gap-10 ">
              {JSON_DATA.Compliance.map((elem) => {
                const { title, img, num } = elem;
                return (
                  <div
                    key={num}
                    className="bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start"
                  >
                    <Image src={img} alt={title} width={60} height={60} />
                    <h3 className="text-2xl font-extrabold text-black">
                      {" "}
                      {title}
                    </h3>
                    <p
                      className="leading-snug text-black"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section
          className="bg-center bg-no-repeat bg-cover lazyload bg-fixed "
          style={{
            backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")`,
          }}
        >
          <div className="bg-[#000]/90 lg:py-20 py-10">
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>

        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#0E1F51] capitalize">
                  Do you want any more information about our news app
                  development services?
                </h2>
              </div>
              <p className="text-base text-black md:w-[85%]">
                Talk to our news app development team today and learn more about
                our news app development services and how we can help you. We
                are the best team to create the best news application according
                to your project brief. Reach out to us now to hire us today.
              </p>
              <div className="flex justify-start items-star ">
                <a href="/contact-us " className="">
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let's Connect
                  </button>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:w-[70%] lg:justify-end pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Newspaper App Development"
                alt="Newspaper App Development"
                src="/img/do-you-want-any-more-information-about-our-news-app-development-services.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  News App & Web Development Technology"
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
