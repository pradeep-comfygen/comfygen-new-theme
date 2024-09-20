import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hireDotNet.json";
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
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("./components/FaqSection"), {
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
    num: "01",
    icon: (
      <Image
        src="/img/health-tracking.webp"
        alt="Health Tracking"
        width={60}
        height={60}
      />
    ),
    title: "Transparency",
    decs: "Comfygen and the developers here believe in transparency with clients. We acknowledge the client's efforts and investment; therefore our team stays in touch and tells them about every progress and even the shortcomings we are struggling with during project building. ",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/fix-your-appointment.webp"
        alt="Fix your Appointment"
        width={60}
        height={60}
      />
    ),
    title: "Available All Time",
    decs: "Client’s investment is a hopt to build something great in the market; that is why we satisfy them in resolving all their doubts anytime to make them feel connected. We are available 24*7 for the calls and meetings to help clients understand and clarify their confusions. ",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/video-consultation.webp"
        alt="Video App Development Consultation"
        width={60}
        height={60}
      />
    ),
    title: "Cost-Effective Solutions ",
    decs: "Comfygen is not a money-digger, but we are the quality diggers and enhancers. Our approach is always towards building the best and most prominent software under the best possible budget. So we are the cost effective solution for you; where not even a single penny will be invested without any reason.",
  },
];
export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Hire .Net Developer | ASP.NET Developers In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Looking to hire skilled .NET or ASP.NET developers for software development In India & The USA? Trust Comfygen to complete your project on time. Explore cost-effective ASP.NET development by hiring us."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-dot-net-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Optimizing Digital Health Experiences: Comfygen's Hire .Net Developer Expertise"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen's Hire .Net Developer expertise focuses on optimizing digital health app development services experiences through advanced mobile app development services, solutions. We leverage technology to bridge the gap between healthcare app development service providers and patients, fostering enhanced communication,data-driven insights, and improved care outcomes."
        />
        <meta
          property="og:twitter_title"
          content="Hire .Net Developer Services Innovation: Hire Top-Notch Healthcare App Developers in the United States at Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen empowers Hire .Net Developer company in India & the USA innovation by offering top-notch Hire .Net Developer services. Our dedicated team of healthcare app developers combines healthcare expertise with technical prowess to build customized mobile app development that align with your business goals, enhancing patient care and operational efficiency."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content="Top rated Healthcare App & Software Development Services"
        />
        <meta
          name="summary"
          content="Through our healthcare software development services, we prioritize quality to deliver robust mobile infrastructure tailored for both healthcare providers and patients, ensuring seamless integration and optimal functionality."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Healthcare Mobile Application Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Best Hire .Net Developer Services"
          content="Comfygen, a prominent Hire .Net Developer company in India & the USA, is at the forefront of revolutionizing patient care through cutting-edge digital health app development solutions. Our innovative approach enhances patient engagement, streamlines healthcare operations, and delivers superior care experiences."
        />
        <meta
          name="category"
          content="Patient Care: Hire .Net Developer Services, Solutions by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Healthcare dedicated mobile app developers in India - Best healthcare app developers in the USA, the UK"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hire Best Healthcare Mobile Application Programmers India & USA | offshore healthcare software Programmers"
        />
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
                heading="Hire .Net Developer"
                ptag="Our.NET developers are capable of producing powerful enterprise programs, user-friendly mobile app development services and solutions, and amazing online applications. The skilled developers are here to create scalable, dependable, and user-friendly online applications. Our team of more than fifty+. Hire a dot net programmer from us, who works hard to give clients all over the world the finest, most elegant, and most agile .NET software solutions. Comfygen is the top .NET development company In India & The USA, takes a practical approach to development. Our distinctive selling point is our secure and effective .NET."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row py-10 md:space-x-10 md:space-y-0">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="/img/prominent-healthcare-application-development.webp"
              alt=" Build an Online Doctor Appointment App Development for Scaling Healthcare Business "
              className="rounded-lg"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full space-y-4 md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Comfygen - Your Leading Partner to Hire ASP Dot Net Developer
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">
                Comfygen has deep knowledge and expertise in blockchain and
                decentralized applications. Take advantage of our skilled
                professional's knowledge and talent. Consult and understand
                which the best blockchain solution is right to build for your
                organization, resolve the technology challenges, and empower
                your business with rising potentials and profits. Improve the
                performance and credibility of your organization in the tech era
                with our comprehensive blockchain consulting services.
              </p>
              <p className="text-base text-black text-justify">
                Within our projected project deadlines, our Asp.Net experts will
                work 100% accurately on your development project. Just tell us
                what kind of development experience you need, and we'll provide
                you with a list of candidates that is sorted to meet your
                project. It is not worth waiting, so tap and hire asp dot net
                developer:
              </p>
              <ul className="list-disc	px-4">
                <li>Excellent value for the money</li>
                <li>Talented and committed personnel</li>
                <li>
                  No overhead and over 100+ developers are ready to get hired
                </li>
                <li>Smooth onboarding</li>
              </ul>
              <div className="py-4">
                <a href="/contact-us">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S TALK
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="space-y-4 text-center col-span-3">
              <h2 className="text-4xl font-bold text-center text-[#0E1F51] ">
                .Net Development Services to Explore
              </h2>
              <p className="text-base text-slate-800 text-center ">
                We are able to provide a wide range of.NET development services
                in the.NET Domain because of our technical proficiency and use
                of the agile development technique. We provide the following
                tactful solutions when you work with our.NET programmers:
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
        <TechnoStack />
        <section className="py-4 lg:py-10 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                How to Connect With Our{" "}
                <span className="text-[#BA68C8]">ASP .Net Developers?</span>{" "}
              </h2>
              <p className="text-base text-slate-800">
                Do you want to hire <b>dedicated asp net developers</b> in
                India? Comfygen should be your one-stop destination, as we have
                experienced and expert developers to conquer in the marketplace
                with our development process. Connect with our skilled team
                seamlessly:
              </p>
            </div>
            <div className="grid gap-10 py-10 text-center lg:grid-cols-2 md:grid-cols-2 xl:gap-10 ">
              {JSON_DATA.mHealth.map((elem) => {
                const { title, img, decs } = elem;
                return (
                  <div className="bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start">
                    <Image src={img} alt={title} width={60} height={60} />
                    <h3 className="text-2xl font-extrabold text-black">
                      {" "}
                      {title}
                    </h3>
                    <p className="leading-snug text-black"> {decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-4 lg:py-10 bg-[#060E41]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 ">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem]  ">
                Why Hire ASP .Net Developers{" "}
                <span className="text-[#BA68C8]"> from Comfygen?</span>{" "}
              </h2>
              <p className="text-base text-white">
                Comfygen never fails at satisfying its clients base, because we
                have the knowledge, skills, and most importantly dedication to
                build something incredible and competitive to the marketplace.{" "}
                <b>Hire a dot net programmer</b>, and get the best software
                solutions for the business.{" "}
              </p>
              <p className="text-base text-white">
                Know how can we be your #No:1 choice for hiring:
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
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
            <div className="flex justify-center items-center">
              <a href="https://api.whatsapp.com/send?phone=919587867258">
                <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  LET'S TALK
                </button>
              </a>
            </div>
          </div>
        </section>

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
