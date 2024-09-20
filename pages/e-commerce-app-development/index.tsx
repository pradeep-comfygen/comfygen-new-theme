import Image from "next/image";
import { MdFeaturedPlayList } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Head from "next/head";
import { FaRegNewspaper } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { RxComponent1 } from "react-icons/rx";
import { CgStack } from "react-icons/cg";
import { IoGridOutline } from "react-icons/io5";
import { RxDot } from "react-icons/rx";
import dynamic from "next/dynamic";
import EcomCom from "../components/EcomCom";
import JSON_DATA from "./json/ecommerceapp.json";
import Service from "./components/Service";
import TechnoStack from "./components/TechnoStack";
import HireSection from "./components/HireSection";
import Portfolio from "./components/Portfolio";
import ServiceCard from "./components/ServiceCard";
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
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Arena = [
  {
    src: "/img/user-friendly-interface.webp",
    head: "User-Friendly Interface:",
    decs: "Intuitive design ensuring seamless navigation and enhanced user experience.",
  },
  {
    src: "/img/secure-payment-gateways.webp",
    head: "Secure Payment Gateways",
    decs: " Integration of trusted payment gateways for safe and hassle-free transactions.",
  },
  {
    src: "/img/product-search-and-filters.webp",
    head: "Product Search and Filters:",
    decs: "Advanced search functionalities and filters for efficient product discovery.",
  },
  {
    src: "/img/order-tracking.webp",
    head: "Order Tracking:",
    decs: "Real-time tracking of orders from placement to delivery for enhanced customer satisfaction.",
  },
  {
    src: "/img/inventory-management-icon.webp",
    head: "Inventory Management",
    decs: "Automated management system to streamline inventory tracking and updates.",
  },
  {
    src: "/img/customer-support-integration.webp",
    head: "Customer Support Integration",
    decs: "24/7 support features including live chat and ticketing system for prompt assistance.",
  },
  {
    src: "/img/mobile-compatibility.webp",
    head: "Mobile Compatibility",
    decs: " Responsive design ensuring optimal performance across all mobile devices.",
  },
  {
    src: "/img/multi-language-and-currency-support.webp",
    head: "Multi-Language and Currency Support",
    decs: "Localization capabilities to cater to a global audience with diverse preferences.",
  },
  {
    src: "/img/social-media-integration.webp",
    head: "Social Media Integration",
    decs: "Seamless integration with social media platforms for enhanced marketing and customer engagement.",
  },
  {
    src: "/img/analytics-and-reporting.webp",
    head: "Analytics and Reporting",
    decs: "Comprehensive analytics tools to track sales, customer behavior, and performance metrics for informed decision-making.",
  },
];

const Advanced = [
  {
    img: "/img/ai-ml-icon.webp",
    head: "AI/ML",
    decs: "Our eCommerce solutions leverage AI and machine learning to personalize user experiences, predict consumer behavior, and streamline operations. By analyzing vast datasets, we enhance product recommendations, optimize marketing strategies, and automate processes, ensuring dynamic responsiveness to market trends and customer preferences.",
  },
  {
    img: "/img/blockchain-icon-img.webp",
    head: "Blockchain",
    decs: "Implementing blockchain technology ensures transparency, security, and traceability in transactions within our eCommerce platforms. It establishes immutable records, enhances payment security, and builds trust among users and partners. Smart contracts facilitate seamless automated processes, reducing costs and mitigating fraud risks, reinforcing our commitment to secure and efficient eCommerce experiences.",
  },
  {
    img: "/img/metaverse-icon-img.webp",
    head: "Metaverse",
    decs: "As pioneers in eCommerce innovation, we integrate metaverse technologies to create immersive shopping experiences. Virtual environments enable customers to interact with products in lifelike settings, fostering engagement and brand loyalty. From virtual stores to interactive product showcases, we redefine eCommerce by bridging the gap between digital and physical realms, setting new standards in online retail.",
  },
  {
    img: "/img/data-analytics-icon-img.webp",
    head: "Data Analytics",
    decs: "Our eCommerce solutions harness advanced data analytics to glean actionable insights from customer interactions and market trends. By employing robust analytics tools, we optimize sales strategies, enhance customer satisfaction, and refine operational efficiencies. Real-time analytics empower agile decision-making, ensuring our platforms adapt swiftly to evolving demands and deliver personalized experiences that resonate with our clientele.",
  },
  {
    img: "/img/cloud-computing-img-icon.webp",
    head: "Cloud Computing",
    decs: "Utilizing cloud computing infrastructure enhances scalability, flexibility, and reliability across our eCommerce platforms. By migrating to cloud-based solutions, we ensure seamless performance, secure data storage, and cost-effective operations. Cloud services facilitate rapid deployment of updates and expansions, supporting our commitment to delivering agile, resilient, and always-accessible eCommerce solutions",
  },
];
const Why = [
  {
    img: "/img/expertise-in-diverse-technologies.webp",
    head: "Expertise in Diverse Technologies",
    decs: "We excel in leveraging AI, blockchain, and cloud computing to create scalable and secure eCommerce solutions that elevate user experiences and drive business growth.",
  },
  {
    img: "/img/customized-approach.webp",
    head: "Customized Approach",
    decs: "Our tailored development strategies ensure each eCommerce app is meticulously crafted to meet specific business objectives and user expectations, fostering long-term success.",
  },
  {
    img: "/img/proven-track-record.webp",
    head: "Proven Track Record",
    decs: "With a portfolio of successful projects and satisfied clients, we demonstrate our ability to deliver on-time, within budget, and with superior quality.",
  },
  {
    img: "/img/focus-on-user-experience.webp",
    head: "Focus on User Experience (UX)",
    decs: "We prioritize intuitive design and seamless navigation, enhancing user satisfaction and engagement to maximize conversion rates and customer retention.",
  },
  {
    img: "/img/end-to-end-service.webp",
    head: "End-to-End Service",
    decs: "From initial concept to post-launch support, our comprehensive services cover every aspect of eCommerce app development, ensuring a smooth and successful project lifecycle.",
  },
  {
    img: "/img/continuous-innovation.webp",
    head: "Continuous Innovation",
    decs: "We stay ahead of industry trends and technology advancements, incorporating the latest innovations to keep our clients at the forefront of digital commerce.",
  },
];

const Industry = [
  {
    src: "/img/finance-icon-img.webp",
    dec: "Finance",
  },
  {
    src: "/img/healthcare-icon.webp",
    dec: "Healthcare",
  },
  {
    src: "/img/education-icon-img.webp",
    dec: "Education",
  },
  {
    src: "/img/communiaction.webp",
    dec: "Communiaction",
  },
  {
    src: "/img/manufacturing-icon.webp",
    dec: "Manufacturing",
  },
  {
    src: "/img/transportation-icon.webp",
    dec: "Transportation",
  },
  {
    src: "/img/real-estate.webp",
    dec: "Real Estate",
  },
  {
    src: "/img/energy-img.webp",
    dec: "Energy",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Top E-Commerce App Development Company in India and the USA | Build
          Online Store Today!
        </title>
        <meta
          name="description"
          content="We are a Best E-Commerce app development company In India & The USA, offering customized E-Commerce app and web development services & solutions to help you build your online store. Contact us today for a free app consultation services!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/e-commerce-app-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta name="language" content="en-us" />
        <meta
          property="og:title"
          content="Best E-Commerce App Development Company in India & USA | Comfygen"
        />
        <meta
          property="og:description"
          content="We are a Best E-Commerce app development company In India & The USA, offering customized E-Commerce app and web development services & solutions to help you build your online store. Contact us today for a free app consultation services!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/e-commerce-app-development"
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
                heading="eCommerce App Development Company"
                ptag="Comfygen is here to provide satisfying eCommerce experiences for businesses and customers. "
                ptag1="We claim to be the right choice being the best eCommerce app development company; where our experts build eCommerce mobile app solutions catering all specific business needs, fulfilling user’s demands, and giving tough competition to the competitors. We are experienced in building eCommerce web applications and mobile apps using next-gen technologies, and possible engaging features implementation. Our eCommerce mobile app development is focused on delivering seamless retail operations on digital platforms improving sales and market traction. "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <section className="bg-[#D8EEFF] lg:py-14 py-8">
          <div className="mx-auto w-11/12 2xl:w-9/12 xl:w-5/6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <img
                  className="rounded-tr-[5px] rounded-tl-[50px] h-[100%] object-cover"
                  src="/img/we-are-your-best-ecommerce-agency.webp"
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  We are Your Best eCommerce Agency - Consult First Decide Later
                </h2>
                <p className="text-slate-800 text-base">
                  The eCommerce market size is anticipated to reach USD 62415.2
                  Billion by 2031 with a CAGR of 11%. Along with the increased
                  demand; we need variations, innovations, and creative
                  engagement in our eCommerce app solutions, and that’s where
                  Comfygen steps in.
                </p>
                <p className="text-slate-800 text-base">
                  We are a well-talented and experienced eCommerce app
                  development company, which uses the best technologies,
                  implement the trending techs, add engaging user-friendly
                  features, and do more customizations to make the app solutions
                  highly performable in the marketplace.
                </p>
                <p className="text-slate-800 text-base">
                  We have a team of 100+ professionally trained expertised
                  eCommerce developers, who know the best to do. Our priority is
                  to create a secured and seamless backend & frontend that is
                  lacking with abandonments and boost conversions, loyalty, and
                  customer acquisition.{" "}
                </p>
                <p className="text-slate-800 text-base">
                  With the embracing of advanced technologies in the fluctuating
                  marketplace, we work on the tech-trends to make it more
                  engageable and interactive. Our eCommerce mobile apps are
                  integrated with AR/VR, Metaverse, Blockchain, and other
                  trending techs to influence the end-users. Comfygen is here to
                  provide you with the customized best eCommerce development
                  services for startups and large-scale enterprises on Android
                  and iOS platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <Service />
        <section className="py-10 bg-[#EFF9FF]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Features Implemented in{" "}
                  <span className="text-blue-600"> Your E-Commerce App </span>{" "}
                  Solutions
                </h2>
                <p className="text-slate-800 text-base">
                  Our eCommerce app solutions are equipped with essential
                  features like user-friendly interfaces, secure payment
                  gateways, advanced search capabilities, real-time order
                  tracking, and robust inventory management. Additionally, we
                  offer seamless customer support, mobile compatibility,
                  multi-language/currency support, social media integration, and
                  comprehensive analytics tools for optimal performance and user
                  satisfaction.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Arena.map((item) => (
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/20 border transition-all duration-300 hover:translate-y-2 group p-8 rounded-lg ">
                    {/* <span className="text-3xl text-[#000] font-normal bg-white shadow-lg rounded-full p-3 ">{item.number}</span> */}
                    <img src={item.src} width={50} height={50} alt="" />
                    <div className="mt-3">
                      <h3 className="text-xl text-black ">{item.head}</h3>
                      <p className="text-base">{item.decs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TechnoStack />
        <section className="lg:py-14 py-8">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div>
              <h2 className="text-4xl font-bold text-[#0E1F51] text-center ">
                Advanced Latest Technology-Trends We Integrate in our eCommerce
                App Solutions
              </h2>
              <p className="text-base text-black text-center">
                Explore our commitment to innovation with advanced technologies
                driving our eCommerce solutions. From AI and blockchain to
                emerging trends like metaverse, data analytics, and cloud
                computing, we harness these tools to optimize performance,
                security, and user engagement across platforms
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {Advanced.map((item) => (
                <div className="bg-white p-8 drop-shadow-xl border rounded group border-b-8 border-b-[#0E1F51] rounded-b-[20px]">
                  <div className="relative w-16 h-16 rounded-lg bg-[#0E1F51] p-3">
                    <img
                      width={60}
                      height={60}
                      src={item.img}
                      alt=""
                      className="transform transition-transform duration-500 group-hover:rotate-180"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-2xl text-[#0E1F51] font-bold">
                      {item.head}
                    </h2>
                    <p className="text-base text-black">{item.decs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />
        <section
          className="w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("images/illuslator/phasebg.webp")` }}
        >
          <div className="w-full py-16 bg-gradient-to-b from-blue-500/80 to-indigo-500/80">
            <div className="space-y-4 text-center text-white w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div>
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  eCommerce App Development Process We Follow
                </h2>
                <p className="text-base">
                  Discover our streamlined eCommerce app development process,
                  meticulously crafted to deliver scalable, secure, and
                  user-centric solutions. From inception to deployment, our
                  method ensures efficiency, transparency, and adherence to
                  industry best practices.
                </p>
              </div>
              <div className="grid gap-16 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                {JSON_DATA.Process.map((elem) => {
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

        <section className="bg-white lg:py-14 py-8">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <h2 className="text-4xl font-bold text-[#000] text-start border-b-4 pb-3 ">
              INDUSTRY VERTICALS
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-10 mt-10">
              {Industry.map((item) => (
                <div className="space-y-2 bg-[#ECEDFE] border text-center p-6 rounded-lg">
                  <img
                    className="flex justify-center mx-auto w-20 h-20"
                    src={item.src}
                    alt=""
                  />
                  <h3 className="lg:text-2xl text-base font-normal">
                    {item.dec}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-8 bg-[#05164D]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="lg:w-[70%] w-[100%] space-y-2">
              <h2 className="text-4xl font-bold text-[#fff] text-start ">
                Why is Comfygen the Best eCommerce App Development Company?
              </h2>
              <p className="text-base text-white text-start">
                At Comfygen, we stand out as the premier eCommerce app
                development company due to our unwavering commitment to
                excellence. With a proven track record of delivering innovative
                solutions tailored to client needs, we combine cutting-edge
                technologies, meticulous craftsmanship, and unparalleled
                customer support to drive business success and exceed
                expectations.{" "}
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {Why.map((item) => (
                <div className="bg-[#F4F4F4] p-8  rounded  rounded-tl-[26px] rounded-br-[26px]">
                  <div className="relative w-20 h-20 flex justify-center p-4 rounded-full  bg-[#05164D]">
                    <img
                      width={50}
                      height={50}
                      src={item.img}
                      alt=""
                      className="transform transition-transform duration-500 group-hover:rotate-180"
                    />
                  </div>
                  <div className="mt-4">
                    <h2 className="text-2xl font-bold">{item.head}</h2>
                    <p className="text-base text-black">{item.decs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="ecommerce app Development Services"
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
