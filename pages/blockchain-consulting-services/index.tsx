import React, { useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "./json/blockchainconsulting.json";
import Link from "next/link";

const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
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
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});

export default function rummy(props) {
  let { initialData } = props;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>
          Blockchain Consulting by Comfygen | Blockchain Consulting Services
        </title>
        <meta
          name="description"
          content="Comfygen offers comprehensive blockchain consulting services to assist clients, aiding in platform selection, blockchain type determination, and engaging with Indian and United Stats Members Blockchain development company. For further details or queries, feel free to"
        />
        <link
          rel="canonical"
          href="https://comfygen.com/blockchain-consulting-services"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Empower Your Business Vision: Unleash the Potential of Blockchain Consulting Development Services"
        />
        <meta
          property="og:facebook_description"
          content="Unlock the potential of blockchain with our specialized consulting and development services, delivering tailored solutions and industry-leading expertise for a seamless integration into your business."
        />
        <meta
          property="og:twitter_title"
          content="Industry-Driven Excellence: Tailored blockchain consulting and development service provider"
        />
        <meta
          property="og:twitter_description"
          content="Empower your business with our expert blockchain consulting and development services, tailored to drive innovation and growth while ensuring regulatory compliance and industry-specific solutions. Trusted by clients for our proven track record and deep expertise in blockchain technology."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En" />
        <meta name="abstract" content="Leading Blockchain Consulting Company" />
        <meta name="summary" content="Leading Blockchain Consulting Firm" />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive blockchain consulting service Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="language" content="en-us" />
        <meta
          name="Leading Blockchain Consulting Company"
          content="Empowering businesses with cutting-edge blockchain consulting services and solutions and Comfygen's expert consulting services to drive innovation and sustainable growth in the digital economy."
        />
        <meta
          name="category"
          content="Blockchain Consulting Services - Blockchain Consulting Solution"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Blockchain Consulting Services - Blockchain Consulting Development Solution Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Blockchain Consulting Development Service Provider"
        />
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
                heading="Blockchain Consulting Services"
                ptag="Comfygen has deep knowledge and expertise in blockchain and decentralized applications. Take advantage of our skilled professional's knowledge and talent. Consult and understand which the best blockchain solution is right to build for your organization, resolve the technology challenges, and empower your business with rising potentials and profits. Improve the performance and credibility of your organization in the tech era with our comprehensive blockchain consulting services."
                li="Start Conversing with our Blockchain Experts!!!"
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <Advice
          heading="Let’s Discuss About Blockchain Development Consulting with Us"
          ptag="Comfygen offers complete blockchain consulting services and solutions, which allow your business to avail leverages with new blockchain technologies and more secured transactions. Our blockchain app development team enables us to fulfill business goals with various opportunities, which takes into account the latest blockchain development technology trends."
          ptag1="We are the top notch blockchain consulting services, where our blockchain consultants are keen to do well-versed market research, Blockchain app development, and testing the blockchain app development ecosystem. Additionally, our qualified and classified blockchain developers know the latest tech integration to make your decentralized blockchain app development services competitive and engaging in the marketplace."
          ptag2="Being one of the best blockchain app development company, we know the space, loopholes, and best practices to build a great decentralized product. The IT experts will create an absolute blockchain app development services and solution having scope to stand in future as well. Step ahead for consulting your ideas, and meet with specific business oriented suggestions with a finely executed plan."
          imgSrc="/img/lets-discuss-about-blockchain-development-consulting-with-us.webp"
          imgW={620}
          imgH={449}
          altTag="Let’s Discuss About Blockchain Development Consulting with Us"
        />
        <ContactFromCenter />

        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-20">
          <div className="space-y-4 text-center ">
            <h2 className="lg:text-4xl text-3xl font-bold text-[#0E1F51] ">
              Blockchain Consulting and Development Services{" "}
            </h2>
            <p>
              Know what blockchain Consulting Services you will receive from us
              to take the decision wisely for Comfygen known as the best
              blockchain app development technology consulting company:
            </p>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.Service.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <div
                  key={num}
                  className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                    <Image
                      width={100}
                      height={100}
                      src={img}
                      alt={title}
                      title={title}
                      className="w-16"
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                    {title}
                  </h3>
                  <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                    {" "}
                    {decs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <section
          className="bg-center bg-cover  bg-fixed"
          style={{
            backgroundImage: `url("/img/know-how-the-blockchain-consultancy-process.webp")`,
          }}
        >
          <div className=" bg-[#1B1C30CC] py-10">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              {/* text-section */}
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Know How The Blockchain Consultancy Process
                </h2>
                <p className="text-base">
                  Before you invest your earned money into our blockchain
                  development consulting service solution, we are honored to
                  share about how our experts process consulting services. Some
                  certain steps are comprised by the blockchain developers to
                  offer consultation to our respective clients:{" "}
                </p>
                <div className="grid gap-16 py-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                  {JSON_DATA.Process.map((video) => {
                    const { title, num, decs } = video;
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
                        <div className="text-left space-y-2">
                          <h2 className="text-lg font-semibold">{title}</h2>
                          <div>
                            <p className="">{decs}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                  <a href="/contact-us">
                    <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-slate-900 w-fit group">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      Let’s Talk
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Benefits of{" "}
                <span className="text-blue-600">
                  Blockchain App Development Consulting{" "}
                </span>
                Solutions
              </h2>
              <p>
                Know how your business can take advantage from Blockchain
                Consultants
              </p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {JSON_DATA.hiringprocess.map((video) => {
                const { title, decs, img, num } = video;
                return (
                  <div
                    key={num}
                    className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86"
                  >
                    <div className="flex flex-col justify-center items-center p-10">
                      <Image
                        className="object-cover"
                        src={img}
                        alt={title}
                        width={100}
                        height={100}
                      />
                      <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                        {title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 p-4 flex flex-col justify-center items-center space-y-2 transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                      <p className="tracking-normal text-sm text-white">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <TalkExpert />
        <section
          className="bg-center bg-cover  bg-fixed "
          style={{
            backgroundImage: `url("/img/different-blockchain-platforms-where-we-work.webp")`,
          }}
        >
          <div className="py-10 bg-black/50">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-4 bg-gradient-to-r from-[#16BDFA]/40 to-[#BE5EBC]/50 p-8">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Different Blockchain Development Platforms Where We Work
                </h2>
                <p className="text-base text-white">
                  A variety of well-liked and exciting Layer-1 and Layer-2
                  blockchain systems are used by our advisors. We are aware of
                  the special qualities and constraints of every platform, and
                  we can advise you on the one that will work best for your
                  particular use case.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.businessData.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 space-y-4  transition-all duration-200 border"
                  >
                    <div className="flex items-center justify-center font-semibold bg-white rounded-md shadow-xl h-24 w-24">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      {item.url ? (
                        <a
                          href={item.url}
                          className="text-xl font-extrabold  transition-all duration-200 hover:underline underline-offset-2 text-[#fff]"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="text-xl font-extrabold  transition-all duration-200 text-[#fff]">
                          {item.title}
                        </p>
                      )}
                    </div>
                    <div
                      className="text-[#fff] transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: item.decs }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                  href="/quote"
                  className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                  Get a QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Industries Getting Leverages from Blockchain Consulting Services
              </h2>
              <p className="text-base text-slate-800">
                There are various industries, where blockchain app development
                service products can suit and build strength to the businesses.
                Here are the industries where we serve:
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.WhyChoose.map((item, index) => (
                <div key={index} className="border p-3 space-y-2 shadow">
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                    {item.title}
                  </p>
                  <p
                    className="text-base text-slate-800"
                    dangerouslySetInnerHTML={{ __html: item.decs }}
                  ></p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center pt-10">
            <Link
              href="https://api.whatsapp.com/send?phone=919587867258"
              target="_blank"
              passHref={true}
            >
              <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                Want To Get The Best Solution? Connect Us
              </button>
            </Link>
          </div>
        </section>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/hire-blockchain-consultants-at-comfygen.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#010754]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="flex justify-center  lg:justify-start pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="How Comfygen Can Help in Blockchain Consulting"
                alt="How Comfygen Can Help in Blockchain Consulting"
                src="/img/how-comfygen-can-help-in-blockchain-consulting.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  How Comfygen Can Help in Blockchain Consulting?
                </h2>
                <p className="text-base text-black">
                  Crypto app development and Blockchain app development will
                  definitely increase value in the business due to enabling more
                  security and transparency. On the same side, using this
                  technology also requires professional assistance because of
                  the complex and diversified tech stacks. So here at Comfygen,
                  we have gathered a fully experienced and expert team of
                  Blockchain Consultants and Developers, who are not only
                  knowledgeable but creative to innovate some extra-ordinary
                  solutions though.
                </p>
                <p className="text-base text-black">
                  It does not matter whether you are running an SME or it is a
                  large-scale enterprise, we have super-efficient methods and
                  techs to improve any business to its next level. Our
                  blockchain developers go through the necessary clientele
                  requirements, understand and learn about their goals, and
                  later they commit to build certain quality and featured
                  blockchain development solutions based on their custom needs.
                  You can trust Comfygen, and we ensure that your trust is
                  sustained is our responsibility for our healthy long-term
                  relationship.
                </p>
                <ul className="px-3 list-disc space-y-1">
                  <li>Fully-Secured Data Security Protocols</li>
                  <li>
                    From Custom Consultation to Deployment, We Handle the Whole
                  </li>
                  <li>
                    No Restrictions with Time-Zones, Customer Support is
                    accessible anytime
                  </li>
                  <li>
                    Result-Driven Solutions with Problem-Solving Creativity{" "}
                  </li>
                </ul>
              </div>
              <div className="flex flex-row">
                <a
                  href="/quote"
                  className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
                  Get a QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Blockchain consulting Services"
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
