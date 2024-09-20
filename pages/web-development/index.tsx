import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import { RiWindow2Line } from "react-icons/ri";
import { FaConnectdevelop, FaCreativeCommonsRemix } from "react-icons/fa";
import {
  MdAnimation,
  MdLaunch,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { SiCraftcms } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/webdevelopment.json";
import TechnoStack from "./components/TechnoStack";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import ContactUsButton from "../components/ContactUsButton";

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
const Advice = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});

const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});

const Platforms = [
  {
    num: "1",
    icon: <MdOutlineComputer className="text-blue-400" size={60} />,
    title: "Website Development Consultancy",
    decs: "We are not here for our business, but for yours first. Take our website development consultancy, where we discuss the website ideas, plan of actions, more engaging features, modern tech to use, what’s more for vast visibility, budgeting, etc. This consultancy is discussing and planning about how to process the website development process further with efficiency.",
  },
  {
    num: "2",
    icon: <MdOutlineDashboardCustomize className="text-blue-400" size={60} />,
    title: "Custom Website Development",
    decs: "Once the plans are discussed, here comes the custom website development services to offer. We understand the business needs and offer solutions tailored to specific requirements. Our agenda is to create solutions based on the purpose-oriented needs and gain attention from targeted audiences. We implement the unique engaging features & functions hook to the visitor’s demands. ",
  },
  {
    num: "3",
    icon: <MdOutlineDesignServices className="text-blue-400" size={60} />,
    title: "Website UX/UI Designs",
    decs: "We create intuitive UX/UI designs of the websites. Our website designing section includes preparing some elements, adding custom designs, and creating the website visually appealing. Our team has professional and skilled website designers to create attractive websites that suit the best of your targeted audience. ",
  },
  {
    num: "4",
    icon: <GrDeploy className="text-blue-400" size={60} />,
    title: "Website Deployment",
    decs: "When the website is developed; we take the responsibility to deploy that on the dedicated browser, or platform. During the initial conceptualization of the website development process, we discuss with clients about the deployment platforms to process things accordingly to deliver the results promptly.",
  },
  {
    num: "5",
    icon: <MdOutlineSupportAgent className="text-blue-400" size={60} />,
    title: "Website Support and Maintenance",
    decs: "Also we take charge to offer support and maintenance services after the website services are deployed. Our team is responsible to check how the website is performing, what are the glitches & issues happening, any features need to integrate, and more. The support and maintenance services are meant to assure that the website is running absolutely fine in the market.",
  },
  {
    num: "6",
    icon: <MdAnimation className="text-blue-500" size={60} />,
    title: "Animation & Graphics Web Design",
    decs: "Our animators and graphic designers have a keen understanding of creating beautiful logos, illustrations, motion graphics and much more you ask for. Besides, compatibility, accessibility, and scalability never gets obstructed.",
  },
];
export default function Webdevelopment(props) {
  let { initialData } = props;
  let {
    Process,
    Solutions,
    Modus,
    Development,
    AchieveMaximum,
    AppProcess,
    WhyChooseComfygen,
    Frequently,
  } = JSON_DATA;
  return (
    <>
      <Head>
        <title>
          Top Websites Development Company In India | Hire Website Developer
        </title>
        <meta
          name="description"
          content="Comfygen is a leading top web development company In India; we offering custom website design and development services. Contact us today for a free web consultation."
        />
        <link rel="canonical" href="https://www.comfygen.com/web-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Websites Development Company In India & The USA | Hire Website Developer"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading web development company In India & The USA; we offering custom website design and development services. Contact us today for a free web consultation."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/web-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/blockchain-mim-software.png"
        />
        <meta property="og:image:width" content="1024" />
        <meta name="language" content="en-us" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>

      <div className="overflow-hidden">
        {/* hero section */}
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
                heading="Website Development Company"
                ptag="We create a professional digital presence with appealing and efficient websites for your business. Comfygen is the best website development company, which understands the requirements, knows the technologies, and implements modern tech-trends to build a competitive custom website. Expand the business and grow customer relationships with our custom website development services at competitive cost. We build what the market needs with our expertise and tech-savvy solutions."
                btnName="Contact Us To Compete Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <Advice
          heading="Our Web Development Agency Offer Real Values"
          ptag="Comfygen is a dedicated web development company offers best website development services using the empowered technologies. We create custom web solutions tailored to business and end-user’s needs. Our professional website developers build intuitive and user friendly solutions to establish a resilient brand image and reliability into the market. Our products and services never fail delivering prompt and quality solutions. With our website development, you can increase conversion rates, customer relationship, and reliability among the users. Be ready to build scalable solutions and forge ahead towards vast expansion to stand in the competitive & engaging digital business world."
          imgSrc="/img/our-web-development-agency-offer-real-values.webp"
          imgW={564}
          imgH={607}
          altTag=" Full-Stack Technologies"
        />
        <ContactFromCenter />
        <div className="space-y-4 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
              Website Development{" "}
              <span className="font-bold text-blue-500"> Services </span> We
              Offer
            </h2>
            <p>
              Our custom website development services are influential enough to
              leave a deep imprint among the users. Our services and solutions
              are well promising to deliver engaging user-experience and
              increased profitability. Find your one-stop solution from the
              wide-array of tailored web development services:
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
            {Platforms.map((elem) => {
              const { title, decs, num, icon } = elem;
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

        <section
          className="w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("images/illuslator/phasebg.webp")` }}
        >
          <div className="w-full py-16 bg-gradient-to-b from-blue-500/80 to-indigo-500/80">
            <div className="space-y-4 text-center text-white w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Custom Website Development Solutions We Provide
              </h2>
              <p className="text-base">
                We understand that every business has unique needs and
                challenges. That's why we offer a range of custom web solutions
                designed to meet your specific requirements and help you achieve
                your goals. Our expert developers leverage the latest
                technologies to create tailored solutions that drive success.
                Here’s what we can do for you:
              </p>
              <div className="grid gap-16 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                {Process.map((elem) => {
                  const { title, num, decs } = elem;
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
                      <div className="text-left">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p>{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <TechnoStack />
        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center lg:w-4/6 mx-auto">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                {" "}
                Latest Tech-Trends{" "}
                <span className="text-blue-500">
                  {" "}
                  in Website Development{" "}
                </span>{" "}
                We Imply{" "}
              </h2>
              <p className="text-base text-slate-800">
                Integrating latest tech-trends in website development will boost
                its performance, improve visibility, increase conversion rates;
                and build competitive web solutions. Hereby, Comfygen never
                fails to satisfy clients with tech-trends. We have
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {Solutions.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white bg-orange-100 rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title="Comfygen Privited Limited"
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 group-hover:text-white text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out  line-clamp-5 group-hover:text-white">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FA]">
          <section className="lg:py-16 py-4 w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                {Modus?.title}
              </h2>
              <p className="text-black text-base text-center">{Modus?.decs}</p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Development.map((elem: any) => {
                const { title, num, img, decs } = elem;
                return (
                  <div
                    key={num}
                    className="rounded-xl bg-white  p-6 cursor-pointer transition-all duration-400 hover:translate-y-2 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 mx-auto p-4 bg-[#eaeefb] rounded-lg ">
                      <Image src={img} alt={title} width="70" height="70" />
                    </div>
                    <div className=" text-center space-y-1 mt-4">
                      <h3 className="text-xl  text-[#222569] text-center group-hover:text-[#2f55d4] font-semibold">
                        {" "}
                        {title}{" "}
                      </h3>
                      <p className="text-center">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        <section className="bg-[#fff]">
          <section className="lg:py-16 py-4 w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                Websites to Achieve Maximum Values from Business
              </h2>
              <p className="text-black text-base text-center">
                In today’s digital age, a well-designed website is a powerful
                tool for driving business growth and achieving maximum value. At
                Comfygen, we specialize in creating websites that not only look
                great but also deliver significant business benefits. Our custom
                web solutions are designed to enhance user experience,
                streamline operations, and boost overall business performance.
                Here’s how our websites add maximum value to your business
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {AchieveMaximum.map((elem: any) => {
                const { title, num, img, decs, icon } = elem;
                return (
                  <div
                    key={num}
                    className="rounded-xl bg-white border-2 border-[#222569] border-dashed  p-6 cursor-pointer transition-all duration-400 hover:translate-y-2 group"
                  >
                    <div className=" text-center space-y-1 mt-4">
                      <h3 className="text-xl  text-[#222569] text-start  font-semibold">
                        {" "}
                        {title}{" "}
                      </h3>
                      <p className="text-start">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
        <TalkExpert />
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Website Development Process We Follow
            </h2>
            <p>
              A structured and transparent development process is key to
              delivering exceptional websites that meet our clients’ needs. Our
              approach ensures that every project is completed on time, within
              budget, and to the highest standards. Here’s a step-by-step
              overview of our website development process:
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {AppProcess.map((elem) => {
              const { title, num, decs } = elem;
              return (
                <div
                  key={num}
                  className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]"
                >
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-bold">
                    {title}
                  </p>
                  <p className="text-base text-slate-800">{decs}</p>
                </div>
              );
            })}
          </div>
        </div>
        <section className="bg-[#F8F9FA] py-10">
          <div className="space-y-4 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Choose Comfygen for Website Development?
              </h2>
              <p className="text-base text-slate-900 md:text-center text-justify tracking-tight">
                Choosing the right partner for your website development is
                crucial for your business success. We stand out by offering
                comprehensive and tailored solutions that meet your unique needs
                and provide best website development services. We are the
                dedicated website development company for your upcoming website
                development projects.{" "}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
              {WhyChooseComfygen.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="space-y-4 p-6 bg-white border border-[#0E1F51] rounded-tl-2xl rounded-br-2xl"
                  >
                    <p className="text-2xl font-[800] text-[#0E1F51]">
                      {title}
                    </p>
                    <p className="text-slate-900">{decs} </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <ContactUsButton
                title={"Let’s Get Your Web Development  Now!"}
                url={"/contact-us"}
              />
            </div>
          </div>
        </section>
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
