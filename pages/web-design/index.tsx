import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
import { MdDomainVerification } from "react-icons/md";
import { AiOutlineOneToOne } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { GiPerspectiveDiceThree } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/webdesign.json";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
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

const Feature = [
  {
    num: "1",
    icon: <AiOutlineOneToOne className="text-blue-400" size={60} />,
    title: "One Stop Destination",
    decs: "You can get everything(eCommerce Front end to back end) just under one roof.",
  },
  {
    num: "2",
    icon: <FaPeopleArrows className="text-blue-400" size={60} />,
    title: "Reliable E-Commerce Development Partners",
    decs: "Comfygen is a reliable e-commerce software development company with lots of experience in successfully",
  },
  {
    num: "3",
    icon: <MdDomainVerification className="text-blue-400" size={60} />,
    title: "Quality, Support & Maintenance",
    decs: "We do not leave any stone unturned in providing the best possible solutions with the latest framework and technology for our clients.",
  },
  {
    num: "4",
    icon: <GiPerspectiveDiceThree className="text-blue-400" size={60} />,
    title: "We offer cost-effective services",
    decs: "We offer a full cycle of web design, e-commerce development, integration, and management services to maximize your sales and brand value in the E-Commerce market at an affordable price.",
  },
  {
    num: "5",
    icon: <RiTeamFill className="text-blue-400" size={60} />,
    title: "Team of Certified Developers",
    decs: "We have a team of highly experienced and certified developers having expertise in developing high-end solutions, and customer-oriented strategies which make us the leader in the E-Commerce Development Market",
  },
  {
    num: "6",
    icon: <CiDeliveryTruck className="text-blue-400" size={60} />,
    title: "On-time Delivery",
    decs: "With an analytical process, we never miss any deadline and ensure the on-time delivery of your eCommerce web and app development solutions while maintaining best-quality norms.",
  },
];

export default function Webdesign(props) {
  let { initialData } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title>Comfygen provides the best web design services in India</title>
          <meta
            name="description"
            content="Comfygen is a leading web design company In India, offering custom UI/UX design services. Our team of experienced designers create professional, user-friendly and visually appealing websites. Contact us today for a free consultation."
          />
          <link rel="canonical" href="https://www.comfygen.com/web-design" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta name="language" content="en-us" />
          <meta
            property="og:title"
            content="India's Best Web Design Services Provider | Comfygen"
          />
          <meta
            property="og:description"
            content="Comfygen is a leading web design company In India & The USA, offering custom UI/UX design services. Our team of experienced designers create professional, user-friendly and visually appealing websites. Contact us today for a free consultation."
          />
          <meta
            property="og:url"
            content="https://www.comfygen.com/web-design"
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
            content="http://www.comfygen.com/_next/image?url=%2Fimages%2Filluslator%2FMobile-UI-UX-Design.png&w=640&q=75?size=1024"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@comfygentech" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="14 minutes" />
        </Head>
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
                heading="Custom Website Design Development Company"
                ptag="Get the India's Best Website Design Development Services and skyrocket your online branding experience with Comfygen. We are the one renowned web designing development company In India & The USA with a portfolio of remarkable online presence experiences in prior projects. Our years of experienced web developers are creative in high rising your online business with user-interactive designs. So it’s the time to launch a website that captures attention with its engaging designs resulting in high conversion rates."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 md:text-[40px] text-[30px] font-bold leading-[3rem] text-[#0E1F51]">
                  Ui/Ux Development Process
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Feature.map((elem) => {
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
              <div className="flex justify-center items-center">
                <ConnectWithExpertButton
                  title={"LET'S CONNECT TO DISCUSS A PROJECT"}
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="w-11/12 mx-auto space-y-5 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <h2 className="text-4xl font-extrabold text-center capitalize text-[#0E1F51]">
            UI/UX Design And Development Services
          </h2>
          <p className=" text-center leading-[24px] text-base">
            We Offer Top-Notch Ui/Ux Design And Development Services. Our Ui/Ux
            Designers Create Intuitive <br />
            And User-Friendly Ui/Ux Design Solutions For Better User Experience
            And Increasing Sales.
          </p>
        </div>
        <div className="py-10 space-y-4 md:space-y-10">
          {/* about comfygen */}
          <div className="">
            <div className="w-11/12 pt-10 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="flex flex-col-reverse items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10 ">
                <div className="w-full mt-10 space-y-6 text-center md:text-left md:mt-0">
                  <div className="space-y-3">
                    <h2 className="text-[#0E1F51] text-4xl font-bold leading-10">
                      Mobile App Ui/Ux Design
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm leading-7 text-gray-800">
                      If you are thinking of developing a{" "}
                      <a
                        href="/mobile-app-development"
                        className="text-blue-500"
                      >
                        mobile app development services
                      </a>
                      , Comfygen will help you to create responsive User
                      Interface designs that grip touchscreen functionality, as
                      well as mobile-first user experiences for custom mobile
                      apps/web apps.
                    </p>
                    <p className="text-sm leading-7 text-gray-800">
                      Our UI/UX designers have experience in creating{" "}
                      <a
                        href="/hybrid-mobile-app-development"
                        className="text-blue-500"
                      >
                        hybrid mobile app development
                      </a>{" "}
                      and cross-platform app development on both{" "}
                      <a
                        href="/android-app-development"
                        className="text-blue-500"
                      >
                        Android app development
                      </a>{" "}
                      and{" "}
                      <a href="/ios-app-development" className="text-blue-500">
                        native iOS app development
                      </a>
                      . We have expertise in handling frameworks like Xamarin,
                      PhoneGap and deep knowledge about Bootstrap and Html5.
                    </p>
                  </div>
                  <div className="flex justify-start items-start ">
                    <ConnectWithExpertButton
                      title={
                        "Hire Mobile App Developer For Next Generation App Development"
                      }
                      url={"/hire-mobile-app-developer"}
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full md:justify-end">
                  <Image
                    src="/images/mobile-app-ui-ux-design.webp"
                    alt="Mobile App Ui/Ux Design"
                    className="w-4/6 rounded-lg"
                    width={2000}
                    height={2000}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <section className="md:flex items-center py-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10 ">
                <div className="flex justify-center lg:justify-start w-full">
                  <Image
                    src="/images/website-design.webp"
                    alt="Website Design"
                    className="w-4/6 rounded-lg"
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="w-full mt-10 space-y-6 text-center md:text-left md:mt-0">
                  <div className="space-y-3">
                    <h2 className="text-[#0E1F51] text-4xl font-bold leading-10">
                      Website Design
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm leading-7 text-gray-800">
                      We develop cutting-edge solutions because of our
                      exceptional designs, a constant pursuit to bring together
                      aim and aesthetic, and utter dedication to keeping updated
                      with the latest technology trends.
                    </p>
                    <p className="text-sm leading-7 text-gray-800">
                      Hire UI/UX designers and developers from us and develop
                      one-of-a-kind websites that will keep you one step ahead
                      of your competitors.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="">
            <section className="flex flex-col-reverse items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex-row md:space-x-10">
              <div className="w-full space-y-1 text-center md:text-left">
                <div className="space-y-3">
                  <h3 className="py-5 text-[40px] font-extrabold leading-10 text-[#0E1F51]">
                    Logo Design
                  </h3>
                </div>
                <p className="text-base text-black">
                  Logo matters a lot. A logo is an immense part of your brand
                  identity that is why you should never underestimate the
                  significance of your logo design.
                </p>
                <p className="text-base text-black">
                  We have a UX/UI designer team that helps you develop a simple
                  yet elegant logo design for your company that will give you a
                  unique identity.
                </p>
                <p className="text-base text-black">
                  We also help you create app icons that creatively use your
                  logo to enhance your brand identity.
                </p>
              </div>
              <div className="flex justify-center w-full mb-10 md:justify-end md:mb-0">
                <Image
                  src="/images/illuslator/logo-design.webp"
                  alt="Logo Design"
                  className="rounded-lg md:w-[510px] md:h-[380px] "
                  width={2000}
                  height={2000}
                />
              </div>
            </section>
          </div>
          <div className="pt-10">
            <section className="flex flex-col items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex-row md:space-x-10">
              <div className="flex justify-center w-full mb-10 md:justify-end md:mb-0">
                <Image
                  src="/images/mobile-user-interface.webp"
                  alt="Mobile User Interface"
                  className="rounded-lg w-6/6"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="w-full space-y-1 text-center md:text-left">
                <div className="space-y-3">
                  <h3 className="py-5 text-[40px] font-extrabold leading-10 text-[#0E1F51]">
                    Mobile User Interface
                  </h3>
                </div>
                <p className="text-base text-black">
                  Logo matters a lot. A logo is an immense part of your brand
                  identity that is why you should never underestimate the
                  significance of your logo design.
                </p>
                <p className="text-base text-black">
                  {" "}
                  We have a UX/UI designer team that helps you develop a simple
                  yet elegant logo design for your company that will give you a
                  unique identity.
                </p>
                <p className="text-base text-black">
                  We also help you create app icons that creatively use your
                  logo to enhance your brand identity.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* <TalkExpert /> */}
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
