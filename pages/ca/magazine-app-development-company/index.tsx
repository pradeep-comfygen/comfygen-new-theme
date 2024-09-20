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
const Header = dynamic(() => import("../../components/Header"), {
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
const Advice = dynamic(() => import("../components/Advice"), {
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

export default function News(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Magazine App Development Company in India & USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a top-class news & Magzine app development company In India & The USA, offers tailored app services for personalized news, alerts, and engaging features. With expertise in app launches, we can create your global news feed app."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/magazine-app-development-company"
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
          content="https://www.comfygen.com/ca/magazine-app-development-company"
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
                heading="Magazine App Development Company"
                ptag="Want to enhance your reader engagement and content distribution on digital platforms? Time to develop a comprehensive magazine app. It will be a great way to enhance accessibility for users and reach a huge audience base. At Comfygen, we provide full-fledged solutions to develop a holistic magazine app to help publishers reach a global audience. With the integration of interactive features, our expert developer team will help you craft a creative and user-friendly application that will encourage viewers to turn into your daily readers."
                ptag1="We have more than 15 years of experience in app development, specializing in diverse app development. We follow innovative approaches and keep up with the latest application development trends in magazines to develop the best magazine apps with top-notch applications."
                btnName="Talk with Consultant"
                btnLink="/quote"
              />
            </div>
          </div>
        </div>
        <Advice
          // head="News App development Company"
          heading="Reputed Magazine App Development Company"
          ptag="At Comfygen, our reputable magazine app development team offers quality and state-of-the-art digital solutions to meet the changing needs of publishers and readers. Our developers are skilled in transforming traditional print magazines into engaging digital experiences with our comprehensive app development approach. Our service focuses on user-centric design and cutting-edge technology to create magazine apps. Moreover, we collaborate closely with our clients in order to understand their unique requirements. Our developer team excels in integrating interactive features such as multimedia content, social sharing capabilities, and personalized reader experiences to maximize user engagement and retention."
          ptag1="We stick to industry best practices and stay updated on technological advancements driven by a commitment to quality and innovation when developing magazine apps. We help develop apps from scratch and enhance existing platforms with our upgraded solutions. Being a trusted Magazine App Development organization, we provide complete support to our clients. So, if you are looking forward to building an app that adapts to changing reader preferences and technological advancements, get in touch with us."
          imgSrc="/img/reputed-magazine-app-development-company.svg"
          imgW={660}
          imgH={660}
          altTag="magazine app development"
        />
        <ContactFromCenter />
        <div className="lg:py-16 py-8 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Our Services Related to Magazine App Development
                </h2>
                <p className="text-base text-slate-800">
                  Our company offers a comprehensive suite of services related
                  to magazine app development solutions designed to meet the
                  diverse needs of publishers looking to enter or expand in the
                  digital realm:
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
                  Explore Our High-Quality Custom Magazine App Development
                  Solutions
                </h2>
              </div>
              <p className="text-[#fff] text-base  lg:w-4/6 mx-auto text-center">
                Being reputable and highly experienced in the app development
                industry, we are masters in offering customized solutions. Our
                high-quality magazine app development solutions are crafted to
                enhance the digital publishing and reading experience. We
                combine innovative features with robust functionality in order
                to engage readers and drive business productivity
              </p>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Develop.map((elem) => {
                  const { title, decs, img } = elem;
                  return (
                    <div className="p-8 space-y-2 border rounded-[20px] transition-all duration-300 hover:translate-y-2  bg-white shadow">
                      <div className="w-20 bg-white h-20 rounded-[17px] border flex justify-center items-center shadow">
                        <img className="w-14 h-14" src={img} alt="" />
                      </div>
                      <div className="pt-2 space-y-4">
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 capitalize">
                          {title}
                        </h3>

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
            <div className="grid lg:grid-cols-3 grid-cols-1 space-y-5">
              <div className="lg:col-span-2">
                <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-start text-[#fff]  ">
                  Business Sector We Serve Our Magazine App Development
                  Solutions!
                </h2>
                <p className="text-white text-lg text-start">
                  We serve a diverse range of business sectors with our magazine
                  app development solutions. It is valuable across various
                  industrial sectors where content distribution, engagement, and
                  audience reach are crucial. Industries that publish online
                  content and media benefit from digital platforms. We serve the
                  education sector, which needs magazine apps for academic
                  journals and research publications. Our service is also
                  crucial for healthcare sectors who need apps for medical
                  journals and patient education materials.
                </p>
                <p className="text-white text-lg text-start">
                  We even serve corporate sectors that want to publish internal
                  newsletters, training materials, and industry insights. The
                  magazine app is also beneficial for travel and lifestyle
                  sectors, as it allows them to use apps for destination guides
                  and lifestyle magazines. Overall, we aim to enhance
                  communication, knowledge sharing, and audience engagement from
                  our magazine app development service in order to boost reach
                  and engagement.
                </p>
                <a href="/quote">
                  <button className="bg-white py-3 px-10 text-lg font-semibold flex justify-start mt-6 rounded-full">
                    GET A FREE DEMO
                  </button>
                </a>
              </div>
              <div className="grid-cols-1">
                <img
                  className="w-[250px] mx-auto"
                  src="/img/our-magazine-app-development-solutions.svg"
                  alt="Magazine App Development Company in India"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#e4eff1] space-y-6 ">
          <div className="flex flex-col justify-center text-center  lg:w-4/6 mx-auto">
            <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51] capitalize">
              Magazine Apps for Digital Publishing Service Providers
            </h2>
            <p className="text-slate-800 text-base">
              The expert developer team of our magazine app development company
              specializes in creating magazine apps for various industrial
              sectors. We will help you create the different variants with
              customized solutions to meet specific needs.
            </p>
          </div>
          <div className="grid w-11/12 grid-cols-1 gap-5 mx-auto lg:grid-cols-3 md:grid-cols-2 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-4">
            <div className="bg-[#F45F391A] p-10  rounded-[40px] space-y-5  w-full py-10">
              <div>
                <h3 className="flex px-20 p-0 text-2xl font-bold text-black md:px-2 md:justify-start">
                  Magazine Apps for Media
                </h3>
                <p>
                  Our news & magazine app development revolutionizes the media
                  industry by offering interactive content, personalized
                  experiences, and real-time updates. We enhance reader
                  engagement with multimedia features like videos and
                  animations, provide analytics for targeted advertising, and
                  enable seamless subscription management.
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
                  Magazine Apps for the Entertainment Industry
                </h3>
                <p>
                  Our magazine app development company in the USA for the
                  entertainment industry features exclusive interviews,
                  behind-the-scenes footage, interactive quizzes, and real-time
                  updates on movies, TV shows, music, and celebrity news.
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
                  Magazine Apps for Education
                </h3>
                <p>
                  We can customize magazine apps for education to offer curated
                  articles, expert insights, interactive learning modules, and
                  real-time updates on academic trends, research breakthroughs,
                  and educational resources for students, educators, and
                  researchers.
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
                  Our Technology Stack for Magazine Application
                </h2>
                <p className=" text-base leading-[1.5rem]">
                  We use advanced technology stacks in order to build a robust
                  magazine application that supports scalability, user
                  engagement, and seamless content delivery. Here is an overview
                  of the technology stack our developers are specialized in:
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {JSON_DATA.Services2.map((elem) => {
                  const { title, bg, img, decs } = elem;
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
                How Do Businesses Get Benefits From Magazine Application
                Development?
              </h2>
              <p className="text-base text-white">
                Our Magazine App Development Services are beneficial for various
                business sectors. It aids in modernizing the distribution of
                news, current affairs, and other content to enhance reader
                engagement, reduce costs, and open new opportunities for revenue
                generation and market expansion. Here are the benefits our
                business gets from our magazine app development service:
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
            Modus={JSON_DATA.Modus}
            ModusOperandi={JSON_DATA.ModusOperandi}
          />
        </div>
        <section className="bg-[#223547]  lg:py-16 py-8 ">
          <div className=" ">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff]  capitalize">
                  Explore Our Flexible Magazine App Engagement Models!
                </h2>
                <p className="text-white">
                  At Comfygen, we offer different models of digital magazine
                  apps that cater to different audience preferences and business
                  strategies. Go through our models in detail;
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
                Why Choose Comfygen for Magazine Application Development?{" "}
              </h2>
              <p className="text-base text-slate-800">
                At Comfygen, we will witness great experience in magazine
                application development. We let our clients focus on the core
                competencies of their business and leave their app development
                in our expert's hands. Here are the compelling reasons to hire
                us:{" "}
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
                  Contact Us and Get Other Information about our Magazine App
                  Development Services
                </h2>
              </div>
              <p className="text-base text-black md:w-[85%]">
                Contact our Magazine App Development Company in India today to
                learn more about our development services. Get an idea about our
                customized solutions and the cutting-edge technologies we
                implement. We are here to help you develop your desired magazine
                app to meet your target viewer needs.
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
                alt="magazine app development company in the usa"
                src="/img/magazine-app-development-services.svg"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <TalkExpert />
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
