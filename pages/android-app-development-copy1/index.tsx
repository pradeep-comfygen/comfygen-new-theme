import "aos/dist/aos.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { RiCustomerService2Line, RiTeamLine } from "react-icons/ri";
import { AiOutlineAntDesign, AiOutlineDeploymentUnit } from "react-icons/ai";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { CgCast } from "react-icons/cg";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import NewSection from "../components/NewSection";
import JSON_DATA from "./json/android.json"
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const Services = [
  {
    num: "1",
    icon: <HiOutlineCalendarDays className="text-blue-500" size={50} />,
    title: "Android App Planning and Idealization",
    decs: "The first step is for our mobile app development team to get acquainted with your project idea and its objectives. We will refine the plan and prepare a detailed insight before creating a design for every page. Our Android development services will then develop the app according to the wireframe.",
  },
  {
    num: "2",
    icon: <AiOutlineAntDesign className="text-blue-400" size={50} />,
    title: "Android App Design And Development",
    decs: "Designing the app is the next step. This phase consists of adding graphics, icons, and features to produce an app that is visually appealing. During this stage, we will also implement server-side elements and add the required functions to the app.",
  },
  {
    num: "3",
    icon: <AiOutlineDeploymentUnit className="text-blue-400" size={50} />,
    title: "Android App Testing & Deployment",
    decs: "The testing team will conduct the necessary revisions at this stage to ensure the app runs smoothly. After all issues are resolved, the app will receive the final touches",
  },
];
const WhyChoosed = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <CgCast size={60} className="text-blue-500" />,
    title: "Transparency at 100%",
    decs: " During the entire development cycle, we provide our clients with full visibility into the progress of the project.",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <RiCustomerService2Line size={60} className="text-blue-500" />,
    title: "Support for technical issues",
    decs: "Our technical support team gives you a seamless experience by answering all of your questions and doubts.",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <RiTeamLine size={60} className="text-blue-600" />,
    title: "Experience of more than six years",
    decs: "Having a team of experienced Android app developers who are familiar with Android development frameworks, we are one of the top Android app development companies in India, the USA, and the UAE.    ",
  },



];
export default function MultiChain(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>
          Trusted Android App Development Company | Innovative Android App Solutions
        </title>
        <meta
          name="description"
          content="Get started with Android App Development and create innovative mobile apps that engage your users. Learn how to build Android apps from scratch, design user-friendly interfaces, and optimize for performance."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/android-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Trusted Android App Development Company | Innovative Android App Solutions"
        />
        <meta
          property="og:description"
          content="Get started with Android App Development and create innovative mobile apps that engage your users. Learn how to build Android apps from scratch, design user-friendly interfaces, and optimize for performance."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/android-app-development"
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
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }} >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='Android App Development Company                '
                ptag="Our staff is available to assist you whenever you require from our  Android app development company. We are a leading provider of Android app development services with a talented and committed staff that excels at offering distinctive solutions. You may rely on us to provide custom Android applications of the highest caliber."
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/img/android-app-development-company.webp'
                Width={656}
                Height={685}
                altTag="Android App Development Company" />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51] ">
                  Android
                  <b className="font-bold text-blue-500"> App Development </b>{" "}
                  Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs} />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <AdviceSection
          head='Android App development Company '
          heading='  Best Android App Development Service Provider'
          ptag='  Our services are not limited to smartphones. We have extensive Android app development experience across a wide range of Android devices and platforms.'
          ptag1='Our full-cycle custom Android app development process has helped us gain a deep understanding of Android. Android Wear, Android TV, Smartphones, Android tablets, and Android tablets have all been explored as possible solutions.'
          imgSrc='/img/best-android-app-development-service-provider.webp'
          imgW={564}
          imgH={559}
          altTag='  Best Android App Development Service Provider' />
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />
        <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-android-mobile-app-developer.webp")` }}>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#F45F39CC] backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <AdviceSection
          heading='Android web application development'
          ptag="At Comfygen Softwares' android app developers create apps that not only deliver utility, but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Android apps for hundreds of businesses across a wide range of industries over the course of more than a decade."
          ptag1='The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning, IoT, augmented reality, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition.We are known for our compromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned.'
          imgSrc='/img/android-web-application-devlopment.webp'
          imgW={564}
          imgH={607}
          altTag='Android web application development' />
        <div className="py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col  space-y-2">
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Why choose us for your <span className="text-blue-600">Android App   <br />Development</span> service?
                </h2>
                <p>Considering there are numerous Android app development companies around the world, you probably wonder why you should hire us. Below are some of the top reasons why we are better than our competitors:</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {WhyChoosed.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <div key={num}
                      className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer " style={{ backgroundColor: elem.bg }}
                    >
                      <div className="flex items-center justify-start">
                        <div className="flex items-center justify-center w-24 h-24">
                          {icon}
                        </div>
                      </div>
                      <div className='space-y-3'>
                        <h3 className="text-lg font-semibold ">
                          {title}
                        </h3>
                        <p className="break-all text-slate-800 ">
                          {decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=" Android App Development Services" />
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
