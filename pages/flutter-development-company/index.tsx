import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiFlutterFill, RiFlutterLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { BiSupport, BiUserCheck } from "react-icons/bi";
import { GiFlexibleStar } from "react-icons/gi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/flutter.json";
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
const HireSection = dynamic(() => import("../components/HireSection"), {
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
const ChooseUs = [
  {
    num: "1",
    icon: <RiFlutterLine className="text-blue-400" size={60} />,
    title: "Flutter Consultation Services    ",
    urlLink:"ca/application-consulting-services",
    decs: "Identify how best to utilize Flutter for your business strategy with our Flutter experts. Whether you are a startup or an enterprise, we can help you with Flutter consultations.    ",
  },
  {
    num: "2",
    icon: <SiAntdesign className="text-blue-400" size={60} />,
    title: "Cross-Platform App Development    ",
    decs: "In addition to building cross-platform apps of exceptional quality, we provide Flutter app development services that save you time and money.    ",
  },
  {
    num: "3",
    icon: <AiOutlineDeploymentUnit className="text-blue-400" size={60} />,
    title: "Flutter Enterprises App Development    ",
    decs: "For large-scale enterprises, our Flutter app developers develop highly interactive, robust, scalable, and secure mobile applications.    ",
  },
  {
    num: "4",
    icon: <TfiSupport className="text-blue-400" size={60} />,
    title: "Flutter App Support & Maintenance    ",
    decs: "We provide 24x7 support and maintenance services for your Flutter app by monitoring its performance and app store compatibility.    ",
  },
  {
    num: "5",
    icon: <CgIfDesign className="text-blue-400" size={60} />,
    title: "Flutter App UI/UX Design    ",
    decs: "Flutter UI/UX designers design visually stunning and easy-to-use applications with flexible user interfaces.    ",
  },
  {
    num: "6",
    icon: <RiFlutterFill className="text-blue-400" size={60} />,
    title: "Hire Flutter Programmers    ",
    decs: "Dedicated Flutter app developers can build high-performance apps for a wide range of industries and domains.    ",
  },
];
const WhyChoose = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <GiFlexibleStar size={60} className="text-blue-500" />,
    title: "Engagement-Models-That-Are-Flexible",
    decs: "Developers can be hired hourly or on a fixed rate basis in fully customized and customer-centric engagement models.",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <HiOutlineCubeTransparent size={60} className="text-blue-500" />,
    title: "Transparency at 100%",
    decs: "Our team and our client are on the same page by following a 100% transparency policy.",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <CiDeliveryTruck size={60} className="text-blue-500" />,
    title: "Deliveries on time",
    decs: "In addition to maintaining the highest standards of quality, we value time and deliver timely deliveries.",
  },
  {
    num: "4",
    bg: "#F0F1F2",
    icon: <BiUserCheck size={60} className="text-blue-500" />,
    title: "Developers with experience",
    decs: "With experience in a wide range of domains, our developers are capable of handling your unique business needs efficiently.  ",
  },
  {
    num: "5",
    bg: "#9A4ECC1A",
    icon: <BiSupport size={60} className="text-blue-500" />,
    title: "Support for technical issues",
    decs: "Whenever you have a technical question, our expert technical support staff will be happy to assist you! Get the best possible solutions through fruitful interaction.  ",
  },
];
export default function MultiChain(props) {
  let { initialData } = props;
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
          Flutter Development Company in India | Create Customized
          Cross-Platform Apps
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Flutter Development Company in India that creates customized cross-platform apps for businesses of all sizes. Get in touch with Comfygen to build your next cross-platform app today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/flutter-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Flutter Development Company in India & USA | Comfygen"
        />
        <meta name="language" content="en-us" />
        <meta
          property="og:description"
          content="Comfygen is a top-rated Flutter app development company In India & The USA. Our specialized team offers tailored Flutter app development services in India for both individuals and organizations. Get in touch with Comfygen to build your next project today. "
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/flutter-development-company"
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
                heading="Flutter App Development Company"
                ptag="We are your ideal partner being the best Flutter App Development Company In India & The USA. Our team of flutter expert developers constantly helps the clients from all the industries to achieve their business goals with user friendly applications for all the digital platforms. Be it a start-up or a large scale enterprise; our flutter developers are prepared to work on unique flutter app development services, & solutions to fulfill the business needs and become a recognisable brand"
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <Advice
          heading="Raise Up Your Business with our Top-Tier Flutter App Development Services"
          ptag=" We Provide end-to-end Flutter app development services, including business idea generation, development, deployment, and support. Also we provide complete UI/UX design, programming, testing, and maintenance services for Flutter apps. Our team of skilled Flutter developers has experience building cross-platform digital experiences that work flawlessly on a variety of devices. Whether you require a Flutter online application or a Flutter mobile application, our developers can provide custom solutions to satisfy your needs. Hire one of our talented Flutter programmers to realize your vision for a digital product and deliver top-notch user experiences."
          imgSrc="/images/flutter-app-development-company.webp"
          imgW={800}
          imgH={800}
          altTag=" Flutter App Development Company"
        />
        <ContactFromCenter />
        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                 Flutter <span className="text-blue-500">Development</span>{" "}
                  Service
                </h2>
                <p className="text-slate-800 text-base">
                  We Provide end-to-end Flutter app development services,
                  including business idea generation, development, deployment,
                  and support.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {ChooseUs.map((elem) => {
                  const { title, icon, decs, num,urlLink } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                      urlLink={urlLink}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                src="/images/cost-of-flutter-app-development.webp"
                alt=" Cost of Flutter App Development"
                className="w-full rounded-md"
                width={1000}
                height={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Cost of Flutter App Development
                </h2>
              </div>
              <p className="text-base text-black   leading-[27px]">
                {` We develop Flutter apps with native performance and flexible UI designs that are highly interactive and functional. With our Flutter app development expertise, we can turn your idea into a profitable and fully-fledged app. Our team has vast Flutter architecture experience and builds apps with interactive UI, high performance, and agile deployment.`}
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">Cost Flutter App Development
          <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex md:flex-row flex-col-reverse md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Flutter App Migration Services
                </h2>
              </div>
              <p className="text-base text-black   leading-[27px]">
                <p>
                  You can migrate your Android and{" "}
                  <a href="/ios-app-development" className="text-blue-500">
                    iOS app development
                  </a>{" "}
                  to Flutter with our help. Taking your existing application
                  across platforms and operating systems is one of our
                  specialties. Our team of Flutter{" "}
                  <a href="/android-app-development" className="text-blue-500">
                    Android app development{" "}
                  </a>{" "}
                  and deployment experts can help you. For platform-agnostic
                  apps, we are the Flutter app development company the world
                  trusts.
                </p>
              </p>
            </div>
            <div className="flex justify-center w-full md:justify-center">
              <Image
                src="/images/flutter-app-migration-services.webp"
                alt=" Flutter App Migration Services"
                className=""
                width={512}
                height={492}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full md:justify-start">
              <Image
                src="/images/flutter-consulting-services.webp"
                alt=" Flutter Consulting Services"
                className="w-full rounded-md"
                width={1000}
                height={279}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Flutter Consulting Services
                </h2>
              </div>
              <p className="text-base text-black   leading-[27px]">
                {` In terms of framework maturity and use cases, Flutter app development has come a long way since its inception. Providing you with assistance in validating your Flutter app idea and ensuring that the framework is the best technical solution for your product idea is our goal.`}
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-flutter-app-developer.webp")`,
            }}
          >
            <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0799C8]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col space-y-2">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]">
                  Why Choose Comfygen For{" "}
                  <span className="text-blue-500"> Your Flutter App </span>{" "}
                  <br /> Development Company?
                </h2>
                <p className="text-slate-800 text-base font-[400px]">
                  With the most advanced technologies, Comfygen strives to
                  provide innovative and better results. Count on us for
                  dependability, trust, and reliability. Keeping up with the
                  latest trends and anticipating changes, we ensure that it is
                  enforced in a way that empowers you digitally.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {WhyChoose.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {icon}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold ">{title}</h3>
                        <p className="break-all text-slate-800 ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Flutter App Development Services"
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
