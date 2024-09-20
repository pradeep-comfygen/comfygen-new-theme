import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/mobile.json";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const FinaceSection = dynamic(() => import("./components/FinanceSection"), {
  loading: () => <p>Loading...</p>,
});

const WhycomfygenSection = dynamic(
  () => import("./components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const TalkExpert = dynamic(() => import("./components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const TechnoStack = dynamic(() => import("./components/TechnoStack"), {
  loading: () => <p>Loading...</p>,
});

const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/extended-market-reach.webp"
        alt="Extended Market Reach"
        width={60}
        height={60}
      />
    ),
    title: "Extended Market Reach",
    decs: "The foremost reason to choose a fintech or loan lending mobile app development agency is the opportunity for tapping into the opportunity for accessing a larger market. Users prefer mobile apps for accessing financial services as they offer flexibility and the assurance of faster access to updated information. With a fintech mobile app, businesses can reach more users and increase revenue.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/better-user-engagement.webp"
        alt="Better User Engagement"
        width={60}
        height={60}
      />
    ),
    title: "Better User Engagement",
    decs: "The next important aspect in creating fintech apps revolves around attracting and retaining users with the best customer experiences. The value advantages of finance application development services not only focus on accessibility but also on improving user engagement. Experienced FinTech mobile app developers can create fintech apps with intuitive user experiences that provide opportunities for better user engagement.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/promotes-financial-inclusion.webp"
        alt="Promotes Financial Inclusion"
        width={60}
        height={60}
      />
    ),
    title: "Promotes Financial Inclusion",
    decs: "The reasons for investing in the services of a financial application developer also point to the opportunity for promoting financial inclusion. Finance apps that run on mobile devices and operating systems can encourage more users to connect with banking services. It can help businesses in effective marketing of your business as a platform for offering equal opportunity to everyone.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/improved-speed-of-financial-services.webp"
        alt="Improved Speed of Financial Services"
        width={60}
        height={60}
      />
    ),
    title: "Improved Speed of Financial Services",
    decs: "You can also utilise the services of a fintech app development firm to improve the speed of access to financial services. Businesses can leverage fintech apps to provide faster transaction settlement and easier transfer of funds. On top of it, businesses can utilise loan lending app development services to enable faster review of loan applications as compared to traditional banks.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/security-and-risk-management.webp"
        alt="CSecurity and Risk Management"
        width={60}
        height={60}
      />
    ),
    title: "Security and Risk Management",
    decs: "The advantages of fintech app development not only ensure security for users but also for businesses. You can notice the effectiveness of safeguards such as two-factor authentication for security to users that build trust in fintech apps. In addition, a reliable finance app development service provider also helps in effective evaluation of risks. As a result, businesses could stay updated with the best practices for risk management.    ",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/efficient-data-management.webp"
        alt="Efficient Data Management"
        width={60}
        height={60}
      />
    ),
    title: "Efficient Data Management",
    decs: "The benefits of finance app development for your business also focus on offering effective data management solutions. Data management could help in improving customer experience and business productivity. It can help in avoiding fragmentation of data and also lowers operational costs alongside improving productivity.",
  },
];

const Finance = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/defi-dapp-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Frontend Programming",
    decs: "Our developers use programming languages such as HTML, CSS, JavaScript and HTML5. In addition, we also leverage JavaScript frameworks such as Angular, React, Meteor, Ember, Vue and NEXT for creating finance apps. ",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/defi-token-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Backend Programming",
    decs: "We specialise in banking and finance app development with our capabilities to use the top backend programming languages. You can rely on our expertise in languages such as PHP, Microsoft.NET, Go, Python, Node.js and Java for backend programming.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/decentralized-exchange-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Mobile and Desktop Frameworks",
    decs: "We utilise the latest frameworks for fintech app development on mobile and desktop devices to ensure that your fintech apps work seamlessly across different platforms. We specialise in Android, iOS, Xamarin and Cordova for mobile development and C++, Python and QT for desktop app development.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/service-for-ico-development.webp"
        alt="Casino Game Development Company in India"
        width={60}
        height={60}
      />
    ),
    title: "Cloud Database Technology",
    decs: "Our finance app development services stand out in the market for offering the benefits of cloud computing. Our developers have expertise in cloud platforms such as AWS, Google Cloud Platform and Azure for capitalising on the benefits of scalable cloud storage for fintech apps.    ",
  },
];

export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Finance App Development Company In India & The USA | Comfygen
        </title>
        <meta
          property="og:title"
          content="Finance App Development Company In India & The USA | Comfygen"
        />
        <meta
          name="description"
          content="Comfygen is the best Finance app development company In India & The USA, we provide top mobile fintech/financial app development services. Hire Dedicated Finance app developer Today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/finance-app-development"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Finance App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert Finance app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Finance App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Finance application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content=" Finance App Development Company" />
        <meta
          name="summary"
          content="Comfygen is the top Finance app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Finance application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Finance Application Development Company"
          content="Comfygen is a top-notch Finance app development organization in the USA. Get ahead of the competition with the top Finance app development company in the USA. Our expert team can bring your ideas to Business Goal."
        />
        <meta name="category" content="Finance App Development Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Finance App Development Organization" />
        <meta name="FinanceOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Finance App Development Company" />
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
                heading="Finance app Development Company"
                ptag="Invest in a credible finance app development industry In India & The USA and stay on top of new developments and industry trends with Comfygen. Bring your customers closer and move above your competition with the help of smart Finance / FinTech apps development services, solutions that redefine the accessibility of financial services development. Consult with our experts now and create a finance app development service, solutions with the latest innovative functionalities for your business right now."
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/img/mobile-app-development.webp"
                Width={406}
                Height={597}
                altTag="Best Mobile App Development Company"
              />
            </div>
          </div>
        </section>
        <AdviceSection
          heading="Unlock the Value Advantages of Fintech with Reliable Finance App Development Services"
          ptag="Fintech app development services is the new innovative trend that has been driving the transformation of banking and financial services. The importance of finance app development has gained formidable attention in recent times, with a special focus on the value advantages. For example, fintech can help a business offer a dedicated payment app or integration of insurance solutions for their products.  "
          ptag1="On top of it, the flexibility for adding new technologies such as blockchain, cryptocurrency, and IoT in the world of finance can enable faster financial transactions and better security. The adoption of new technologies in financial application development has empowered businesses to reevaluate the industry from a new perspective. As one of the leading companies for developing finance apps, we help you unlock all these advantages alongside other value benefits for your business venture."
          imgSrc="/img/unlock-the-value-advantages-of-fintech-with-reliable-finance-app-development-services.webp"
          imgW={700}
          imgH={700}
          altTag="App Developers to Build Interactive Mobile Apps"
        />
        <ContactFromCenter />
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Develop Smarter Financial Solutions for Your Business with
                  Fintech App Development Services
                </h2>
                <p className="text-base text-black">
                  We are a trusted{" "}
                  <a href="#" className="text-[#2563EB]">
                    fintech app development company
                  </a>{" "}
                  with a specialization in transformation of payment systems and
                  banking tools. Our experts can help you create
                  high-performance financial app development solutions for
                  streamlining financial operations. We have earned experience
                  in providing client-centric development services for creation
                  of powerful fintech apps.
                </p>
                <p className="text-base text-black">
                  Our experts invest continuous efforts in research, innovation
                  and invention that help us gain the identity of a reputed
                  fintech development agency. We rely on a long-term approach
                  that sets us apart from the competition as we focus on helping
                  our clients in the long run. We can help you develop smart
                  financial apps that offer seamless user experiences and data
                  security.{" "}
                </p>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                  Let's Communicate With IT Expert!
                </a>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="  Develop Smarter Financial Solutions for Your Business"
                alt=" How To Create A Token On Solana Blockchain? OR (What are the Advantages of using Solana to Create Tokens?)"
                src="/img/develop-smarter-financial-solutions-for-your-business-with-fintech-app-development-services.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="space-y-4 text-center col-span-3">
              <h2 className="text-4xl font-bold text-center text-[#0E1F51] ">
                {" "}
                Our
                <span className="text-[#BE5EBC]">
                  {" "}
                  Finance App Development
                </span>{" "}
                <br></br> Services
              </h2>
              <p className="text-base text-slate-800 text-center ">
                As one of the leading destinations for{" "}
                <a href="#" className="text-[#2563EB]">
                  Banking and Finance app Development
                </a>{" "}
                , we offer a broad range of development solutions that fuel the
                transformation of conventional financial services. Our fintech
                app development solutions can help you with benefits such as
                high performance, scalability and security against prominent
                security threats. Let us show you what you can find in our suite
                of fintech development services.
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 py-10">
              {JSON_DATA.AppService.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <>
                    <div
                      key={num}
                      className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group  transition-all duration-700 ease-in-out"
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
                      <h3 className="text-lg font-extrabold text-[#0E1F51]  transition-all duration-200 text-center">
                        {title}
                      </h3>
                      <p className="font-medium text-center text-black  break-all transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <TechnoStack />
        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Why Should You Invest in a{" "}
                  <span className="text-[#BA68C8]">
                    Financial Application Development
                  </span>{" "}
                  Industry?{" "}
                </h2>
                <p className="text-base text-slate-800">
                  You might think of multiple reasons to invest in banking and
                  finance app development, such as better efficiency and
                  productivity. Fintech apps could present new avenues for
                  transforming user experiences in the domain of financial
                  services. On top of it, you can find many other promising
                  benefits with fintech mobile apps.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((elem) => {
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
            </div>
          </div>
        </section>
        <section className="py-10  bg-[#F3F4F6]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Technology Stack Used for{" "}
                  <span className="text-[#BA68C8]">
                    Finance App Development Services
                  </span>
                </h2>
                <p className="text-base text-slate-800">
                  We are a reputed provider of mobile app development financial
                  services with a specialisation in using an effective
                  technology stack. Our developers use the latest technologies
                  to improve the quality and performance of fintech apps.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Finance.map((elem) => {
                  const { title, icon, decs, num } = elem;
                  return (
                    <FinaceSection
                      key={num}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Comfygen- Translate Your Ideas for an Innovative Fintech App to
                Reality with Unparalleled Accuracy, Passion and Expertise
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  We are a trusted fintech app development firm for giving life
                  to your innovative ideas for creating fintech apps and
                  transforming the conventional perspectives on financial
                  services. Our workflow emphasises the requirements of clients
                  for creating personalised fintech apps designed according to
                  their preferences.
                </p>
                <p className="text-base text-black text-justify">
                  Our experience in banking and finance app development has also
                  empowered us to adapt to emerging trends by leveraging latest
                  technologies. The dedication of our experts has helped us
                  cater to the requirements of clients with high-end solutions
                  that offer seamless user experiences, security and
                  scalability.
                </p>
                <div className="pt-4">
                  <a href="/contact-us">
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/comfygen-translate-your.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={700}
              />
            </div>
          </section>
        </div>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-offer-fintech-app-development-services-for-different-finance-verticals.webp"
                alt="Empowering Multiple Industries with the Potential of Stellar"
                className="rounded-lg"
                width={600}
                height={700}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Offer Fintech App Development Services for Different Finance
                Verticals
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Our finance & banking app development services are designed to
                  help businesses step up to the challenges of adapting to the
                  wave of fintech revolution. We provide finance mobile app
                  development services for businesses across different verticals
                  in the domain of finance.
                </p>
                <ul className="space-y-2 text-left">
                  {JSON_DATA.myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <MdKeyboardArrowRight className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <a href="/contact-us">
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          className="bg-start bg-cover  bg-fixed bg-[#120933]  "
          style={{ backgroundImage: `url("/img/roadmapp-bg.webp")` }}
        >
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#BA68C8] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Our Workflow for
                <span className="text-white">
                  {" "}
                  Finance Mobile App Development
                </span>
              </h2>
              <p className="text-base text-white  ">
                We are committed to delivering the best quality of financial
                software application development with our streamlined workflow.
                Our capability for creating a cross-platform finance app or a
                P2P lending application revolves primarily around a step-by-step
                approach to creating efficient fintech solutions.
              </p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div className={`${styles.Roadmapcontainer}`}>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockright}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Analysis of Client Requirements</h3>
                    <p>
                      The first step in our approach to finance application
                      development services focuses on collecting and
                      understanding the requirements of the clients and their
                      business goals. We also focus on interpretation of market
                      trends and the essential compliance requirements for
                      creating a clear and strategic roadmap for the fintech
                      development project.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>
                      <a href="ca/application-consulting-services">
                        Strategy Planning
                      </a>
                    </h3>
                    <p>
                      The next step in our fintech app development workflow
                      emphasises preparation of a strategy for the development
                      project. Our development team includes experienced
                      financial app developers with comprehensive knowledge
                      regarding the fintech industry. They select the right
                      technology stack, prepare the project timeline and
                      allocate necessary resources for the project.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockright}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>User Interface and User Experience</h3>
                    <p>
                      The effectiveness of our financial mobile app development
                      services comes from the capabilities of experts for
                      creating efficient UI/UX designs. We can prepare intuitive
                      UI/UX designs that can grab the attention of users and
                      offer a seamless experience. In the design stage, we
                      prepare wireframes and prototypes for understanding the
                      effectiveness of the layout and outline of the design.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Development</h3>
                    <p>
                      In the development stage, we utilise our best fintech app
                      developers for writing codes that can support the frontend
                      and backend programming of fintech applications. Our
                      fintech developers follow the latest industry trends and
                      ensure compliance with standards and regulations for
                      creating secure and scalable fintech apps.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockright}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Testing and Deployment</h3>
                    <p>
                      We improve the workflow of our fintech and on-demand
                      banking application development with the support of
                      experienced testing professionals. Comprehensive quality
                      tests help us in verifying the functionality, performance,
                      usability and security of fintech mobile apps. We also
                      offer support for launching fintech apps on iOS and
                      Android as well as cloud platforms.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.timelineblock} ${styles.timelineblockleft}`}
                >
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Support and Maintenance</h3>
                    <p>
                      The final aspect of the workflow of our finance app
                      development services is the assurance of support and
                      maintenance services. We offer continuous support to
                      ensure that your fintech apps are free of errors. Regular
                      maintenance for your fintech apps also helps in
                      incorporating latest features, updates and security
                      patches for meeting new user expectations and market
                      trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a href="/contact-us">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden  text-sm font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Capitalise on Our Fintech Expertise{" "}
                <span className="text-[#BA68C8]">
                  with Different Engagement Models{" "}
                </span>{" "}
              </h2>
              <p className="text-base text-slate-800">
                We are a trusted firm for fintech app development with the
                flexibility for choosing different engagement models. Our
                engagement models are designed by keeping the specific
                requirements and preferences of clients in mind.
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.LeadingSoftware.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className={`${styles.fintechCard} ,${styles.fintechCard1} p-6 space-y-4 bg-white border rounded-xl group  transition-all duration-200`}
                  >
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className={`${styles.ShouldSec} w-full py-16`}>
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Why Should You Choose Comfygen for Finance App Development?
                </h2>
                <p className="text-bold">
                  Why Should You Choose Our Fintech Mobile App Developers?
                </p>
                <div>
                  <p className="text-base">
                    We claim to be an efficient financial mobile app development
                    service provider with the capabilities of an efficient team
                    of developers. Our Fintech Mobile App Developers invest
                    efforts and commitment to achieving the desired results for
                    clients in every project. Most important of all, our hiring
                    process involves the selection of candidates on the basis of
                    different parameters. We also foster continuous professional
                    development of our team to ensure the best results for our
                    clients.
                  </p>
                  <p>
                    Comfygen is also a competent finance app development service
                    provider with fluency in creating different types of FinTech
                    apps. We have different reasons for selecting our services.{" "}
                  </p>
                </div>
                <div className="grid gap-10 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                  {JSON_DATA.Process.map((elem) => {
                    const { title, num, decs } = elem;
                    return (
                      <div
                        key={num}
                        className="flex space-x-6 items-left drop-shadow-2xl"
                      >
                        <div className={`${styles.card}`}>
                          <div className={`${styles.cardbody}`}>
                            <h2
                              className={`${styles.cardtitle} text-lg font-semibold`}
                            >
                              {title}
                            </h2>
                            <p className={`${styles.cardtext} text-black`}>
                              {decs}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-[#DBEAFE]">
          <div className="">
            <section className="w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
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
