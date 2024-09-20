import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/mobile.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import ContactUsButton from "../components/ContactUsButton";
import TransitionButton from "../components/TransitionButton";

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
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const ModusSection = dynamic(() => import("../components/ModusSection"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("./components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
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

const BreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Books",
      item: "https://example.com/books",
    },
  ],
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Mobile App Development Company | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  brand: "Comfygen",
  name: "Mobile App Development Agency - Mobile Application Development Company",
  image:
    "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  description:
    "Comfygen is a top mobile application development company. We provide the best Mobile application development services and custom mobile app development services to enterprises & startups worldwide.",
  aggregateRating: {
    "@type": "aggregateRating",
    ratingValue: "4.9",
    reviewCount: "1124",
  },
};
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/social-engagement.webp"
        alt="Social engagement"
        width={60}
        height={60}
      />
    ),
    title: "Social engagement",
    decs: "A social network app development company could help you achieve better social engagement with the target audience. Social network app development can help in refining the quality of interactions with customers and business stakeholders. Your business could use social media as a distinct platform for familiarizing with customers as an independent business.",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/website-traffic.webp"
        alt="Website Traffic"
        width={60}
        height={60}
      />
    ),
    title: "Website Traffic ",
    decs: "The most effective reason to invest in media app development would point to improving website traffic. When you offer social networking solutions with features that promote your business and improve user engagement, then you can achieve the best results. Such methods can help in increasing website traffic, which would also contribute to the ranking of your business among other websites and your competitors.",
  },
  {
    num: "03",
    icon: (
      <Image
        src="/img/targeted-advertisements.webp"
        alt="Targeted advertisements"
        width={60}
        height={60}
      />
    ),
    title: "Targeted advertisements",
    decs: "Another reason to invest in social messaging app development is to draw attention towards targeted advertisements. Social media serves as a major influence on the audience of every business and your business could also embrace the same idea for reaching out to more users. The advantages of targeted advertisements also help in adding another source of personalization in marketing initiatives. ",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/better-conversions.webp"
        alt="Better conversions"
        width={60}
        height={60}
      />
    ),
    title: "Better conversions",
    decs: "The right social networking app could help you improve the reach of your business and also enhance its visibility among the target audience. With a powerful social media app, you can leverage the potential of collaboration with other social networks to achieve better conversions. You can leverage a social media app development agency to create an app that capitalizes on latest trends to attract customers and improve your conversion rates. ",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/new-revenue-streams01.webp"
        alt="New revenue streams"
        width={60}
        height={60}
      />
    ),
    title: "New revenue streams",
    decs: "The services of social application development experts can help in generating new revenue streams through social media. You can empower your social app with powerful features that offer innovative solutions to generate revenue. Social apps are no longer limited to communication between users and you can integrate new functionalities that can appeal to a larger user base.",
  },
  {
    num: "06",
    icon: (
      <Image
        src="/img/customer-retention.webp"
        alt="Customer retention "
        width={60}
        height={60}
      />
    ),
    title: "Customer retention ",
    decs: "One of the most notable highlights of social media app development is the value advantage of customer retention. When you offer exactly what the customers want, they are more likely to stay with your brand. For example, you can serve targeted ads, new offers, or personalized messages that contribute value to customers. The right social network development agency could help you hold the attention of your target audience and ensure that you can sustain your source of revenue. ",
  },
];

export default function Mobile(props) {
  let { initialData } = props;
  let {
    Whycomfygen,
    Qa,
    Hire,
    myList,
    myList3,
    Modus,
    ModusOperandi,
    Frequently,
    AppService,
    LeadingSoftware,
    Process,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Social Media App Development Company In India & The USA | Comfygen
        </title>
        <meta
          property="og:title"
          content="Social Media App Development Company In India & The USA | Comfygen"
        />
        <meta
          name="description"
          content="Comfygen is a leading top-notch social media app development company In India & The USA that we offer a range of top social networking app development solutions & services. Contact Comfygen & hire dedicated app developers."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/social-media-app-development"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Development Services | Best App Development Company"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Mobile App Development Agency India & USA | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta name="abstract" content=" Mobile App Development Company" />
        <meta
          name="summary"
          content="Comfygen is the top mobile app development Industry in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Development Company"
          content="Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company in the USA. Our expert team can bring your ideas to Business Goal."
        />
        <meta name="category" content="Mobile App Development Company" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="Mobile App Development Company" />
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
                heading="Social Media App Development Company"
                ptag="Stand out from the crowd with a prominent social media presence tailored to your brand values and identity. Comfygen as a leading Social Media App Development company In India & The USA. We helps you to build social media application development services according to the latest conventions, powered by cutting-edge technologies, and designed for user engagement. Reach out to our experts and find the best roadmap to develop your social networking app development.”"
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
          heading="Redefine the Standards and Experience of Social Connectivity with Our Top-Notch  Social Media App Development Services"
          ptag="We are a leading social media app development agency with expertise in creating trendy social media applications development services, solutions that can enhance your brand recognition. Our social app development experts have the capability to anticipate latest trends and utilize new technologies for creating applications that can offer immersive experiences to users.  "
          ptag1="We believe in the power of social media to transform the conventional approaches to digital interactions among people. If you are a business owner seeking opportunities for expansion or a startup seeking new customers, we can help you establish a strong social media presence that appeals to your target audience.
          "
          imgSrc="/img/redefine-the-standards-and-experience.webp"
          imgW={564}
          imgH={559}
          altTag="App Developers to Build Interactive Mobile Apps"
        />
        <ContactFromCenter />
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Customized Social Media Networking App Development Solutions
                  for Enhancing Your Competitive Advantage
                </h2>
                <p className="text-base text-black">
                  Social media networks have become a significant necessity for
                  people as well as businesses worldwide. You would need
                  professional social app development services to ensure that
                  you capitalize on the benefits of social media presence. The
                  creation of social media apps that reflect the identity of
                  your business can be more than a mere investment for your
                  business.{" "}
                </p>
                <p className="text-base text-black">
                  We are the top social network app development company you can
                  trust for creating different types of social media apps. Our
                  team of highly proficient designers and developers has worked
                  on multiple social app development projects for clients from
                  different industries. We have proved our excellence in
                  delivering high-quality social media apps personalized to the
                  needs of clients to enhance their competitive advantage.{" "}
                </p>
              </div>
              <div className="flex flex-row">
                <TransitionButton
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                  title={"Let's Communicate With IT Expert!"}
                />
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="Customized Social Media Networking"
                alt="Customized Social Media Networking "
                src="/img/features-for-empowering-your-social-media-apps.webp"
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
                Our{" "}
                <span className="text-[#BE5EBC]">
                  Social Media App Development
                </span>{" "}
                <br></br> Services
              </h2>
              <p className="text-base text-slate-800 text-center ">
                We offer an assortment of social media app development services
                designed to help you expand your business, improve your
                credibility, and boost customer service. All of our social media
                app development services are managed by experts who know the
                ideal ways to connect your business with the world.{" "}
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-8 py-10">
              {AppService.map((elem) => {
                const { title, img, decs, num, urlLink } = elem;
                return (
                  <div
                    key={num}
                    className=" p-6 space-y-4 bg-white border rounded-xl hover:translate-y-3 group   transition-all duration-700 ease-in-out  "
                  >
                    <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#FFEDD5]  rounded-full  ">
                      <Image
                        width={30}
                        height={30}
                        src={img}
                        alt={title}
                        title={title}
                        className=""
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] g transition-all duration-200 text-center">
                      <a href={urlLink}>{title}</a>
                    </h3>
                    <p className="font-medium text-center text-black g break-all transition duration-200 ease-in-out">
                      {decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />

        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />

        <section className="py-4 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                  Why Should You Invest in{" "}
                  <span className="text-[#BA68C8]">
                    Social Media App Development Services?
                  </span>
                </h2>
                <p className="text-base text-slate-800">
                  You should rely on social network app development services to
                  achieve a strong online presence. Social media networks can
                  help in learning about customers and analyzing their behavior
                  and patterns for making better decisions. Learn about some of
                  the top benefits of social media app development services for
                  businesses.{" "}
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
        <TechnoStack />
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Comfygen - where your social media app vision is brought to
                  life with precision, passion, and unparalleled proficiency
                </h2>
                <p className="text-base text-black">
                  The most noticeable value advantage of working with Comfygen
                  for custom social media app development is personalization.
                  Our experts listen to all your requirements and prepare
                  personalized solutions tailored to your expectations. On top
                  of that, we specialize in Android social networking app
                  development and creation of social apps for other operating
                  systems. The commitment of our experts to deliver social
                  networking apps that not only meet your requirements but also
                  align with the latest trends serves as a promising advantage
                  of working with us.{" "}
                </p>
              </div>
              <div className="flex flex-row">
                <TransitionButton
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                  title={"Let's Communicate With IT Expert!"}
                />
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="comfygen where your social media app"
                alt="comfygen where your social media app"
                src="/img/comfygen-where-your-social-media-app-vision-is-brought-to-life-with-precision-passion-and-unparalleled-proficiency.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>

        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/we-serve-the-social-network-app-development-needs-in-different-industries.webp"
                alt="we serve the social network app development"
                className="rounded-lg"
                width={600}
                height={700}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                We Serve the Social Network App Development Needs in Different
                Industries
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  Our social media app development services can help in
                  preparing your business for the challenges of social media
                  marketing. We offer social networking mobile apps and web
                  solutions that could empower businesses in different
                  industries.
                </p>
                <ul className="space-y-2 text-left">
                  {myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <MdKeyboardArrowRight className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <ContactUsButton
                    url={"/contact-us"}
                    title={"Let’s Discuss"}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-[#DBEAFE]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Our Approach to
                <span className="text-blue-500">
                  {" "}
                  Social Media App Development
                </span>
              </h2>
              <p className="text-base text-slate-800">
                We have become the best social network app development company
                for offering a unique approach to social media app development.
                Our social media app development services stand up to the test
                of quality with a clear roadmap.{" "}
              </p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div>
                <div className={`${styles.roadmap} `}>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>1</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center `}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          <a href="ca/application-consulting-services">
                            Planning and ideation
                          </a>
                        </div>
                        In the first step, our social media app developer team
                        determines your requirements, parameters and objectives
                        of the social media app. We also determine the target
                        market for the app, the platforms on which it would run,
                        and the features and functionalities you need in the
                        app.
                      </div>
                      <div>
                        <img
                          src="/img/planning-and-ideation.webp"
                          alt="idea-generation-and-planning"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>2</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/planning-design.webp"
                        alt="idea-generation-and-planning"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Design
                        </div>
                        The design phase of our social network mobile app
                        development process focuses on creating the user
                        interface and visual design of the social app. Our
                        design team creates wireframes to illustrate the design
                        and features of the app. We create the prototypes and
                        test them from perspective of users for creating simple
                        designs.
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>3</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Development
                        </div>
                        The development phase emphasizes the creation of
                        frontend and backend of the social media app. In this
                        stage of social network application development, we use
                        API integration and programming languages for building
                        the functionalities of the social app such as user
                        authentication and social sharing.
                      </div>
                      <img
                        src="/img/development-phase.webp"
                        alt=" Development"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>4</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/approach-testing.webp"
                        alt="Testing"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Testing
                        </div>
                        Our effectiveness as a custom social media app
                        development agency also revolves around testing to
                        ensure that your social networking app offers seamless
                        experiences. We have a qualified QA team for conducting
                        end-to-end testing to ensure that your social media app
                        works as intended before deploying the app.
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>5</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Deployment and launch
                        </div>
                        The deployment and launch phase of our social app
                        development services involves deploying the application
                        on selected platforms. We release the app as a beta
                        version to check whether the existing app design can
                        work according to your expectations. It helps in
                        implementing the necessary fixes before final launch.
                      </div>
                      <img
                        src="/img/Deployment-and-launch.webp"
                        alt="Deployment and launch"
                        width={150}
                        height={150}
                      />
                      <div></div>
                    </div>
                  </div>
                  <div className={`${styles.point} `}>
                    <div className={`${styles.pointindex} `}>6</div>
                    <div
                      className={`${styles.roamapConn} flex item-center items-center gap-6`}
                    >
                      <img
                        src="/img/maintenance-and-support1.webp"
                        alt="Maintenance and support"
                        width={150}
                        height={150}
                      />
                      <div className={`${styles.pointtext} `}>
                        <div
                          className={`${styles.pointlabel} text-[#0E1F51] flex items-center gap-2 text-xl font-bold `}
                        >
                          Maintenance and support
                        </div>
                        Once the app has been launched, we pay attention to the
                        maintenance and support services. Our team monitors the
                        app to check whether it performs according to desired
                        functionalities and also reviews user feedback to
                        improve the functionality of the app. We also align
                        social apps with most recent platform upgrades and
                        technology trends.
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ContactUsButton
                url={"https://api.whatsapp.com/send?phone=919587867258"}
                title={"Let's Communicate With IT Expert!"}
              />
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Make the Most of Our Services{" "}
                <span className="text-blue-500">
                  {" "}
                  with Flexible Engagement Models{" "}
                </span>
              </h2>
              <p className="text-base text-slate-800">
                You can avail of our social network app development services
                with different types of engagement models. We offer three
                different engagement models tailored to the preferences and
                requirements of clients with varied expectations.
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {LeadingSoftware.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
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
        <section
          className="w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("images/illuslator/phasebg.webp")` }}
        >
          <div className="w-full py-16 bg-gradient-to-b from-blue-500/80 to-indigo-500/80">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Why Should You Choose Comfygen for Social Media App
                  Development?
                </h2>
                <p className="text-base">
                  Comfygen is a reliable destination for social messaging app
                  development and creation of different types of social media
                  apps. We offer multiple reasons for choosing our services in
                  the form of exclusive value advantages to our clients.
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
          </div>
        </section>
        <section className="py-10 bg-[#DBEAFE]">
          <div className="">
            <section className="w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Why Should You Choose Our Social Media Developers?
                </h2>
                <p className="text-base text-black">
                  You should choose our social media app development experts for
                  the assurance of exceptional service quality in creating a
                  social media app. We select every developer in our team after
                  a comprehensive vetting process that involves evaluation of
                  candidates on different parameters. On top of it, we also
                  encourage continuous development of our social media app
                  developers to help them deliver the best results for our
                  clients.
                </p>
              </div>
              <div className="flex flex-row">
                <TransitionButton
                  url={"https://api.whatsapp.com/send?phone=919587867258"}
                  title={"Let's Communicate With IT Expert!"}
                />
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="Why Should you choose our social media developers"
                alt=" social medi developers"
                src="/img/why-should-you-choose-our-social-media-developers.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <div className="bg-[#DBEAFE] backdrop-blur-md ">
          <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10 ">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
                <div className="flex xl:py-12">
                  <Image
                    src="/img/do-you-have-any-other-questions-about-our-social-media-app-development-expertise.webp"
                    width={800}
                    height={521}
                    blurDataURL="URL"
                    placeholder="blur"
                    loader={uploadcareLoader}
                    unoptimized={true}
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                    alt=" Do You Have More Questions on Metaverse Game Development Services?"
                  />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                <div className="flex h-full items-center rounded-lg bg-[#BA68C8]/40 p-6 text-center text-white xl:pl-12 xl:text-left">
                  <div className="xl:pl-12 space-y-2">
                    <h2 className="mb-6 text-3xl font-bold">
                      Do You Have Any Other Questions About Our Social Media App
                      Development Expertise?
                    </h2>
                    <p className="">
                      As one of the leading destinations for social network app
                      development services, we have proven our capabilities for
                      delivering effective results for different types of apps.
                      If you have any questions about our capability in social
                      media app development, then you must consult with our
                      experts right now.
                    </p>
                    <div className="pt-8">
                      <Link href="/contact-us" passHref={true}>
                        <button
                          type="button"
                          className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Get in touch now.
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <TalkExpert />
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
