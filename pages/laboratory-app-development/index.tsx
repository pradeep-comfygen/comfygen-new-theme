import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/pharmacyApp.json";
import styles from "./styles.module.css";
import Link from "next/link";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Portfolio from "./components/Portfolio";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("./components/ServiceSection"), {
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
const BlogSection = dynamic(() => import("../components/BlogSection"), {
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
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const SocialTab = dynamic(() => import("./components/SocialTab"), {
  loading: () => <p>Loading...</p>,
});

export default function ClinicalApp(props) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Laboratory Mobile App Development Company In India & The USA
        </title>
        <meta
          name="description"
          content="Providing cost-effective healthcare laboratory app development for laboratories via developing mobile applications and websites, Comfgen is India's best laboratory application development company."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/laboratory-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Laboratory App and Web Development Company In Canada & The USA  | Top-Notch Laboratory App Development Service Provider"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is dedicated to crafting the best laboratory mobile app development services & solutions and most comprehensive healthcare mobile apps. Our latest innovation integrates online pharmacy services, virtual doctor consultations, lab appointments, and seamless access to lab tests. By addressing the industry-wide challenge of accommodating diverse patient needs, we are revolutionizing the healthcare landscape. Don't hesitate—reach out to us now for a free demo, and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="og:twitter_title"
          content="Online Laboratory App Development Company: Tailored App Development Services / Solutions by Comfygen Private Limited"
        />
        <meta
          property="og:twitter_description"
          content="At Comfygen, we redefine healthcare mobile apps with an innovative integration of online pharmacy, doctor consultations, lab appointments, and tests. Addressing the challenge of accommodating a diverse patient base, our comprehensive solution aims to revolutionize the healthcare industry. Contact us now for a free demo and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="schema:type"
          content="Best Unveiling Excellence: Discover the Top Laboratory Website Development | Laboratory App Development Services"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En" />
        <meta
          name="abstract"
          content="Laboratory Website Development Organization |  Canada & The USA  Best Laboratory App Development Builder | Comfygen"
        />
        <meta
          name="summary"
          content="Comfygen is a reliable and trusted name in the industry, specializing in assisting entrepreneurs in establishing their online laboratory website development Firm. Our seasoned team offers bespoke app development solutions for iOS and Android platforms, guaranteeing smooth and effective laboratory website development experiences tailored to meet your specific business requirements. Elevate your services with Comfygen's innovative and reliable Mobile app development expertise."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Laboratory App Development Company Canada & The USA , firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Laboratory App Development Services Company In Canada & The USA ' content='Comfygen is a well-established and trustworthy provider known for empowering entrepreneurs in launching their online Laboratory Website Development businesses. Our experienced team excels in crafting Customized Laboratory Application Development solutions for iOS and Android platforms, ensuring seamless and efficient Healthcare industry experiences tailored to your unique business needs. Elevate your services with Comfygen's cutting-edge and dependable app development expertise." />
        <meta
          name="category"
          content="Leading Laboratory App Development Company In Canada & The USA "
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="No. 1 Laboratory App Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
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
                heading="Laboratory App Development Company "
                ptag="Comfygen can build impeccable and cost-efficient laboratory app software to manage the business and patients operations smoothly. We use the cutting-edge technologies, implement modern tech-trends, and follow the industrial compliances to create an user-friendly app solution. We are a well-known laboratory app development company, as we’ve helped many laboratories to build interactive and great user-experienced Laboratory Information management Software (LIMS) solutions."
                ptag2="Connect us, and take the laboratory app development consultancy to know what leverages you can opt for. "
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Build Laboratory Apps for Scalable Businesses and Management"
          ptag="Comfygen is your go-to-platform to discuss ideas on laboratory app development. We have years of experience, knowledge, talent, and skills to create robust lab-related mobile applications. Our expert development team adheres to the efficient technologies and works on user-experience to build an interactive laboratory application."
          ptag1="We have dedicated, as well as innovative laboratory app developers; who knows what the market demands, knows what attracts potential users, and how to make the app sustainable in the marketplace. Also, our laboratory mobile app development services don’t charge greedily. We have the best laboratory app development solutions at the right and competitive cost. So make your labs secure, reliable, and easily manageable with our app solutions.  "
          ptag2="We promise to make the labs operate easily, aligning the tasks management, helping patients simply take lab services, and allowing the dedicated end-users to gain engaging & fulfilling experience. "
          imgSrc="/img/Build-Laboratory-Apps-for-Scalable-Businesses-and-management.webp"
          imgW={800}
          imgH={800}
          altTag="Best Online Pharmacy App Development Company"
        />
        <ContactFromCenter />
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Laboratory{" "}
              <span className="text-blue-500"> App Development Services</span>{" "}
              We Deliver{" "}
            </h2>
            <p className="text-base text-slate-800">
              We can provide you streamlined and efficient laboratory app
              development services, where everything goes flawlessly. Your apps
              will work in the market with competence for growth
            </p>
          </div>
          <div className="grid gap-8 py-10 text-left lg:grid-cols-2  xl:gap-10">
            {JSON_DATA.TecnologisStack.map((omaha) => {
              return (
                <div key={omaha.num} className={`${styles.letter} space-y-4`}>
                  <h3 className="text-[#0E1F51] text-xl font-bold">
                    <a href={omaha?.urlLink}>{omaha.title}</a>
                  </h3>
                  <p
                    className=""
                    dangerouslySetInnerHTML={{ __html: omaha.stack }}
                  ></p>
                </div>
              );
            })}
          </div>
        </section>
        <section className=" bg-[#0F192E]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 space-y-6">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Laboratory App Solutions We Build{" "}
              </h2>
              <p className="text-base text-white">
                Comfygen has in-depth knowledge of laboratory businesses, and
                our expert developers know how to build different types of
                laboratory app solutions to sort multiple tasks among the
                operations. Learn about our solutions and know which one’s is
                your current need:{" "}
              </p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.Services.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group  group "
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold ">
                      <Image
                        width={140}
                        height={140}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-20"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p
                      className="font-medium text-left text-white break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-5">
              <a href="/quote" className="mt-5">
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  LET'S CONNECT TO GROW YOUR BUSINESS
                </button>
              </a>
            </div>
          </div>
        </section>
        <div
          className="bg-center bg-repeat bg-fixed "
          style={{ backgroundImage: `url("/img/grid-box-dark.svg")` }}
        >
          <div className="bg-[#fff]/95">
            <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#000]">
                      Laboratory App{" "}
                      <span className="text-[#AF67C2]">
                        Features To Include
                      </span>
                    </h2>
                    <p className="text-black">
                      Features must add in laboratory apps during development to
                      make them more engaging and problem resolving. Let’s
                      figure it out:
                    </p>
                    <img
                      className="rounded-lg"
                      src="/img/laboratory-aapp-features-to-include.webp"
                      alt="Pharmacy App Tech Stack"
                    />
                    <div className="flex justify-start items-center mt-5">
                      <a href="https://api.whatsapp.com/send?phone=919587867258">
                        <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                          Talk To Consultant
                        </button>
                      </a>
                    </div>
                  </div>
                  <div
                    className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[600px] overflow-auto `}
                  >
                    {JSON_DATA.WhyChoosed.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div
                          key={num}
                          className="group border-b-4 border-[#473a92] pb-6 space-y-4 transition-all duration-200  cursor-pointer  "
                        >
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <Image src={img} alt="" width={40} height={40} />
                              <h3 className="text-2xl text-black font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div>
                            <p
                              className="text-black "
                              dangerouslySetInnerHTML={{ __html: elem.decs }}
                            ></p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <SocialTab />
        <div className="space-y-4 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-16">
          <div className="flex flex-col justify-center text-center ">
            <h2 className="py-2 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-[#0E1F51]">
              Modern Tech-Trends in{" "}
              <span className="text-[#BA68C8]">
                Laboratory App Development for
              </span>{" "}
              Industrial Evolutions
            </h2>
            <p className="text-base text-slate-800">
              Modern technologies are changing the way of digitization. These
              tech-trends are evolving laboratory industries via easing the
              operations and automating the processes
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
            {JSON_DATA.Arena.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <ServiceSection key={num} img={img} title={title} Ptag={decs} />
              );
            })}
          </div>
        </div>
        <section className="bg-[#F3F4F6] py-16">
          <div className=" w-11/12 space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl w-70 font-bold xl:leading-[3rem] capitalize">
                Laboratory App Development Process To Follow
              </h2>
              <p className="text-base text-slate-800">
                We build laboratory mobile applications and software following a
                certain qualified and tested process. This app development
                process can build super-efficient and scalable app solutions run
                in the marketplace with engagement among the end- users
              </p>
            </div>
            <div>
              <div className={`${styles.maintimeline} mt-16`}>
                {JSON_DATA.timelineItems.map((item, index) => (
                  <div key={index} className={`${styles.timeline}`}>
                    <div className={`${styles.timelinecontent}`}>
                      <span className={`${styles.timelineyear}`}>
                        {item.year}
                      </span>
                      <div className={`${styles.content}`}>
                        <h3 className={`${styles.title}`}>{item.title}</h3>
                        <p
                          className={`${styles.description}`}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a href="https://api.whatsapp.com/send?phone=919587867258">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="py-4 lg:py-14 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 ">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">
                Why Comfygen Should Be Your{" "}
                <span className="text-[#BA68C8]">
                  {" "}
                  Choice for Laboratory App
                </span>{" "}
                Development?
              </h2>
              <p className="text-base text-slate-800">
                Comfygen has experience and expertise. Moreover, the expert
                healthcare mobile app developers sitting with us have talent of
                modern practices and cutting edge technologies to create
                innovative app solutions. Our laboratory app development company
                is the best and we have the reasons to provide it
              </p>
            </div>
            <div className="grid gap-10 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-10 ">
              {JSON_DATA.Compliance.map((elem) => {
                const { title, img, num } = elem;
                return (
                  <div
                    key={num}
                    className="bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start"
                  >
                    <Image src={img} alt={title} width={60} height={60} />
                    <h3 className="text-2xl font-extrabold text-black">
                      {" "}
                      {title}
                    </h3>
                    <p
                      className="leading-snug text-black"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
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

        <Portfolio />
        {/* <TalkExpert /> */}
        {/*     
        <div className='bg-[#fff] lg:py-20 py-10' >
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </section>
        </div> */}
        {/* </section> */}
        <FaqSection faqData={JSON_DATA.Frequently} title="" />
        <TalkExpert />
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
