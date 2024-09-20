import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/hireBlockchain.json";
import OurGames from "./components/OurGames";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  ssr: false,
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
export default function Mobile(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Hire Dedicated Blockchain Developers In India & The USA | Comfygen
        </title>
        <meta
          property="og:title"
          content="Hire Dedicated Blockchain Developers in India | Comfygen"
        />
        <meta
          name="description"
          content="Looking to hire dedicated blockchain developers From In India & The USA? Comfygen offers dedicated blockchain development services, delivering cutting-edge solutions tailored to your business needs. Tap into Comfygen Global Network to Hire a Dedicated Blockchain Programmer Today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-blockchain-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Elevate Your Blockchain Development Projects with Comfygen Experienced Blockchain Developers - Start Building Now!"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          property="og:twitter_title"
          content="The Best Blockchain Developers For Hire In India | Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Hire Expert Blockchain Developers with Comfygen: Secure, Scalable Solutions for Your Business. Find Top Talent Globally & Launch Your Project Today!."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta
          name="summary"
          content="Empower Your Business with Secure and Scalable Blockchain Applications Designed by Experienced Blockchain Developers."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Blockchain Application Developer Company in India startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hire Blockchain Developer or Programmer from India"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          name="category"
          content="BLOCKCHAIN DEVELOPERS: Hire blockchain developers skilled in building decentralized app for blockchain development protocols like Ethereum Blockchain app development, Hyperledger Blockchain app development, Polkadot Blockchain app development, Stellar Blockchain app development, Tezos Blockchain app development, Neo Blockchain app development, etc. by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Blockchain dedicated mobile app developers in India - Best Dedicated Blockchain app developers in Jaipur, India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
      </Head>
      <div className="overflow-hidden">
        <section
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Hire Blockchain Developers "
                ptag="Secure your business with blockchain technology integration in the existing digital solutions. Hire blockchain developers skilled in building effective decentralized applications for blockchain protocols; such as Ethereum, Polkadot, Tezos, Hyperledger, Stellar, Neo, and More. However, we have full-stack blockchain developers to build smart contracts for your organization.”"
                ptag1="Comfygen is here to help, build, and grow securing the transactional flow. Let’s consult and find the solution."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#DBEAFE]">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-14 ">
            <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              <div className="space-y-4 text-center md:col-span-2 pt-20">
                <h2 className="text-4xl font-bold text-start text-[#0E1F51] ">
                  {" "}
                  <span className="text-[#BE5EBC]">
                    Comfygen Is Your Trusted Blockchain
                  </span>{" "}
                  <br /> Development Partner{" "}
                </h2>
                <p className="text-base text-slate-800 text-start">
                  {" "}
                  Comfygen is a reputable Blockchain development company that
                  provides thorough assistance for any kind of
                  Blockchain-related work. Our full-stack blockchain programmers
                  are skilled in both starting and managing ongoing projects
                  related to blockchain development.{" "}
                </p>
              </div>

              {JSON_DATA.AppService.map((elem) => {
                const { title, img, decs, num, url } = elem;
                return (
                  <>
                    <a href={url}>
                      <div
                        key={num}
                        className="p-6 space-y-4 bg-white border rounded-xl  group hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] transition-all duration-700 ease-in-out"
                      >
                        <div className="flex items-center m-auto	 justify-center w-16 h-16 p-2 text-xl font-semibold bg-[#FFEDD5] group-hover:bg-white rounded-full">
                          <Image
                            width={30}
                            height={30}
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
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <ContactFromCenter />
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <OurGames />
        <AdviceSection
          heading="Build Blockchain MVP For Further Project Anticipation"
          ptag="Gain the confidence of investors with your blockchain concept. There are many dishonest scams in the current digital economy. Even potential investors with years of experience in the market have fallen victim to scams and lost money by putting their trust in dishonest partners. Before contributing even a small amount to your proposal, investors consider it twice or more. One of the main causes of the decline in potential investors is the immaturity of the product."
          ptag1="Making a flawless MVP proves that your idea is viable. MVP makes your idea stand out from the crowd and raises the likelihood of success. The MVP demands work, money, and time to complete. However, it also boosts your idea's confidence, helps you avoid a lot of risks, and inspires possible investors to believe you."
          imgSrc="/img/build-blockchain-mvp-for-further-project-anticiption.webp"
          imgW={564}
          imgH={559}
          altTag="Build Blockchain MVP For Further Project Anticipation"
        />

        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                {JSON_DATA.MobileSolution.map((mobile) => {
                  return (
                    <div key={mobile.num} className="space-y-6">
                      <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                        {mobile.head}{" "}
                      </h2>
                      <p className="space-y-0 text-base text-white md:text-xl ">
                        {mobile.para}{" "}
                      </p>
                    </div>
                  );
                })}
                <div className="grid grid-cols-2 gap-4 py-5 lg:grid-cols-6 md:grid-cols-3 ">
                  {JSON_DATA.Solution.map((mobile) => {
                    return (
                      <div
                        key={mobile.num}
                        className="flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100"
                      >
                        <a href={mobile.url}>
                          <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                            <div className="md:bg-white md:p-2 md:rounded-lg">
                              <Image
                                title={mobile.title}
                                alt={mobile.title}
                                src={mobile.img}
                                height={50}
                                width={50}
                              />
                            </div>
                            <p className="py-4 text-lg font-semibold text-gray-800 ">
                              {mobile.title}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Advantages of Blockchain Based Decentralized Applications
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {JSON_DATA.Plateform.map((elem) => {
                const { tittle, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className=" border-t-[8px] rounded	border-[#BA68C8] "
                  >
                    <a>
                      <div className="items-center text-center px-4 py-3 space-x-3 ">
                        <h3 className="text-lg mt-3 font-semibold text-black">
                          {tittle}
                        </h3>
                      </div>
                      <div className="">
                        <p className="s text-black text-center">{decs}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="/contact-us">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F8F8]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center space-y-4">
              <h2 className="text-[#0E1F51] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Why Choose Comfygen to Hire{" "}
                <span className="text-blue-500">
                  {" "}
                  Blockchain Developers in{" "}
                </span>
                India?
              </h2>
              <p className="text-base text-slate-800">
                Comfygen is well known for providing comprehensive, specially
                designed blockchain application development services to satisfy
                the rising need for innovative company requirements. Hire
                blockchain developers from us to easily integrate the
                cutting-edge technology. We have created the safest and most
                safeguarded decentralized blockchain applications in the world.{" "}
              </p>
              <p className="text-base text-slate-800">
                From strategic planning and legal advice to implementation and
                marketing, we are capable of offering blockchain-as-a-service
                and managing every aspect of adoption. Comfygen has experience
                creating blockchain applications that your users will want to
                use again and again while abiding by all technological
                requirements. Our expertise in blockchain technology allows us
                to create cutting-edge apps with superior security.
              </p>
            </div>
            <div className="grid gap-6  py-10 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8">
              {JSON_DATA.TechTrends.map((elem) => {
                const { title, stack, num, img } = elem;
                return (
                  <div key={num} className={`${styles.letter} space-y-4`}>
                    <Image
                      className="rounded-md flex items-center p-1 mx-auto bg-[#BA68C8]	 justify-center"
                      alt={img}
                      src={img}
                      height={50}
                      width={50}
                      loader={uploadcareLoader}
                      unoptimized={true}
                    />
                    <div className=" ">
                      <h3 className="text-[#0E1F51]  text-center text-xl font-bold">
                        {title}
                      </h3>
                    </div>
                    <div className=" text-center">
                      <p>{stack} </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <a href="https://api.whatsapp.com/send?phone=919587867258">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
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
