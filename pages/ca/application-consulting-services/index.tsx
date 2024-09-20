import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { ImArrowUpRight2 } from "react-icons/im";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import JSON_DATA from "./json/applicationConsulting.json";
import LazyLoad from "react-lazy-load";
import HeroSectionForApplicationConsult from "./HeroSectionForApplicationConsult";
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../../components/Header"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const FaqSection = dynamic(() => import("../components/FaqSection"), {
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
const GetinTouch = dynamic(() => import("../components/Getintouch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Mobile(props) {
  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
        Application Consulting Services - Comfygen 📲🤝
        </title>
        <meta
          property="og:title"
          content="Mobile App Development & consulting services Company 📲🤝"
        />
        <meta
          name="description"
          content="Comfygen provide best mobile app consulting services with 15+ Experience Experts Centric provides app consulting to mobile app development. Get consult with us today!  "
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/application-consulting-services"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Consulting Services & mobile App Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our Consultancy expert in mobile app development, delivering custom mobile application services, user-friendly app development solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Custom Mobile Application Development & Consulting Services"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Custom mobile application development and consultancy company in India & the USA that offers iPhone/iOS, Android app development consulting services from startup to enterprise level Business."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile Application Consulting Services And App Development Company in India and USA"
        />
        <meta
          name="summary"
          content="Comfygen Pvt. LTD. is the best custom mobile app development Firm and Top-notch mobile app Consultant service provider in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development & App consultancy agency in Bharat, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Consulting and application Development Company"
          content="Comfygen is a top-notch Mobile app development and Consultancy services organization in the USA & India. Get ahead of the competition with the top mobile app development services, company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development & Application Consulting Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subtitle" content="Mobile App Consulting Services & Mobile app Development Organization" />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Mobile App Development & Consultancy app services Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <section
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className="bg-[#1B1C30CC]">
            <LazyLoad height={60} offset={100}>
              <Header />
            </LazyLoad>
            <div className="md:py-28 py-5">
              <HeroSectionForApplicationConsult
                heading="Application Consulting Services"
                ptag="Comfygen helps clients acknowledge different business plans, possible exposures, and promising mobile application development consulting services to grow and level up among impeccable and settled market competitors. We are a proficient mobile app development company with many years of experienced developers and market researchers to provide mobile app development consultancy services to learn what’s best for the specific niche-oriented business. "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </section>

        <AdviceSection
          heading="Leading in the Futuristic Market with Promising Mobile App Consultancy  "
          ptag="Comfygen is an 8+ years experienced IT firm that has acquired the talents of 10 to 15+ years of experienced developers, researchers, and analysts. This company is more focused on delivering quality over quantity. We cater mobile app consulting services to clients with optimum innovative approaches to development, deployment, and even post-deployment support & maintenance. Our mobile app developers are attentive to cutting-edge technologies and trending techs to build robust mobile applications that carry the potential to engage users in the long run. "
          ptag1="Not only the expertise we have, but our team of IT engineers also understands every domain, niche, and industrial type. Every industry is revolutionized by technological advancements and unique ideations. Our app development consultants are well-versed in the current revolutions and possible futuristic changes. Therefore, they can comment better on the clientele’s app development idea and suggest bright application consultancy to build a potent mobile application that fulfills every need with vast engagement. "
          ptag2='Book your application consulting services today to take the business forward and grow in the market with advanced methods and technologies.'
          imgSrc="/img/leading-the-future-with-application-consultancy-excellence.webp"
          imgW={664}
          imgH={859}
          altTag="Leading the Future with Application Consultancy Excellence"
        />
        <ContactFromCenter />
        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="space-y-4 text-center ">
            <h2 className="text-4xl font-bold text-[#0E1F51] ">
              Our Mobile App Development Consultancy Services
            </h2>
            <p className="text-base text-slate-800">
              The mobile app development idea and application integration services need to be evaluated in certain ways. Here are the top-notch strategic mobile application development consulting services we provide to assess the app development requirements.

            </p>
          </div>
          <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
            {JSON_DATA.AppService.map((elem) => {
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
                  <p className="font-medium text-left text-black  transition duration-200 ease-in-out" dangerouslySetInnerHTML={{ __html: elem.decs }}></p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0 py-6 lg:py-10 ">
          {JSON_DATA.NativeApp.map((mobile) => {
            return (
              <div
                key={mobile.num}
                className="bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90  flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center"
              >
                <div className="flex justify-center w-full md:justify-start">
                  <Image
                    className="rounded-md"
                    title={mobile.head}
                    alt={mobile.head}
                    src={mobile.img}
                    height={300}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                <div className="w-full space-y-[5px] text-left">
                  <div className="space-y-4">
                    <h3 className="text-[24px] lg:text-4xl font-bold text-white">
                      {mobile.head}
                    </h3>
                    <p className="py-6 text-base font-light text-white">
                      {mobile.para}{" "}
                    </p>
                  </div>
                  <div>
                    <Link media="handheld" href={mobile.url} passHref={true}>
                      <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        <ImArrowUpRight2 />
                        <span>{mobile.btn}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-6 bg-white">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Industries We Serve
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
              Our team is committed to assist companies to achieve their
              objectives with effective use of the latest technology. With
              expertise spanning across multiple sectors, we have a proven track
              record of delivering innovative and successful solutions in
              various industry such as:{" "}
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {JSON_DATA.Plateform.map((elem) => {
              const { tittle, decs, num, img, url } = elem;
              return (
                <div key={num} className="shadow-xl rounded-xl">
                  <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                    <div className="flex items-center justify-center h-14 w-14 bg-white rounded shadow-md">
                      <Image
                        className="rounded-md"
                        alt={tittle}
                        src={img}
                        height={512}
                        width={512}
                        loader={uploadcareLoader}
                        unoptimized={true}
                      />
                    </div>
                    <a href={url} className="hover:text-blue-600 text-white text-lg font-bold hover:underline">

                      {tittle}
                    </a>
                  </div>
                  <div className="px-4 py-4 ">
                    <p className="text-black text-justify">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <section className="bg-[#F8F9FA] py-10">
          <div className="space-y-4 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Our Consultancy Approach
              </h2>
              <p className="text-base text-slate-900 md:text-center text-justify tracking-tight">
                At Comfygen, we believe in fostering a collaborative environment
                where your vision is our roadmap. Here's a deeper dive into our
                proven approach that gets you involved every step of the way:
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
              {JSON_DATA.ConsultacnyApproach.map((elem) => {
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
          </div>
        </section>
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Latest Technology Trends{" "}
              <span className="text-blue-500">We Adopt for Application</span>{" "}
              Development
            </h2>
            <p className="text-base text-slate-800">
              Comfygen is widely known for its extensive knowledge of various
              technologies essential for application consulting services. Let's
              delve into a detailed analysis, highlighting crucial aspects:
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TechTrends.map((elem) => {
              const { title, stack, num, url } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div className="shadow-lg p-2 border rounded">
                    <a className="text-[#0E1F51] text-xl font-bold hover:underline" href={url}>
                      {title}
                    </a>
                  </div>
                  <div className="space-y-2">
                    <p dangerouslySetInnerHTML={{ __html: elem.stack }}></p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="">
            {JSON_DATA.Why.map((elem: any) => {
              const { title, num, decs } = elem;
              return (
                <div
                  key={num}
                  className="w-full flex flex-col justify-center items-center text-center space-y-2"
                >
                  <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                    {title}
                  </h2>
                  <p className="text-base text-slate-800">{decs}</p>
                </div>
              );
            })}
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {JSON_DATA.Choose.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div
                  key={num}
                  className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2"
                >
                  <div className="flex items-center  space-x-2">
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="60" height="60" />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                  <div>
                    <p>{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Application Consulting Services"
        />
        <GetinTouch />
        <BlogSection initialData={initialData} />
        {/* </>} */}
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
