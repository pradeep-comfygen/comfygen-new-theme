import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import Head from "next/head";
import Cryptocurrency from "../components/Cryptocurrency";
import dynamic from "next/dynamic";
import JSON_DATA from "./polygonblockchain.json";

const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
export default function Polygon(props) {
  let { initialData } = props;
  let {
    Modus,
    myList,
    myList1,
    Frequently,
    Hire,
    Whychoose,
    Bestchoice,
    Service,
    Development,
    Advantage,
    TechTrends,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Polygon Blockchain Development Company | Polygon Blockchain
          Development Services
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Polygon Blockchain Development Company in india and USA. We offer a complete range of Polygon blockchain development services to build scalable, secure, and cost-effective decentralized applications. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/polygon-blockchain-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Polygon Blockchain Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading Levarge Polygon Blockchain Development Company In India & The USA. We offer a complete range of Polygon blockchain development services to build scalable, secure, and cost-effective decentralized applications. Contact us today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/polygon-blockchain-development"
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
          content="https://www.comfygen.com/images/services/Polygon-Blockchain-Development-Services.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Polygon Blockchain Development Company | Polygon Development Company | Polygon NFT Marketplace Development"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen offers a complete range of Polygon blockchain development services for better scalability, usability, robustness in Ethereum solutions."
        />
        <meta
          property="og:twitter_title"
          content="Polygon Blockchain Development Company | Polygon Development Company | Polygon NFT Marketplace Development"
        />
        <meta
          property="og:twitter_description"
          content="Check out our comprehensive Polygon blockchain development services that help different businesses utilize the potential of blockchain technology to the fullest. Let our premium Polygon blockchain development company help you build dApps on blockchain that are suitable for your business"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Polygon Blockchain Development Industry | Polygon Blockchain Development Services"
        />
        <meta
          name="summary"
          content="Polygon Blockchain Development: We Build the Future of Blockchain, the Polygon Blockchain Development team in crafting the future of blockchain through the creation of decentralized applications (DApps) that leverage the capabilities of the Polygon network. "
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a polygon blockchain development agency in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Polygon Blockchain Development Organization in India, USA"
          content="Comfygen is a leading Polygon Blockchain Development Services: Powering the Next Generation of Decentralized Applications"
        />
        <meta
          name="category"
          content="Polygon Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Polygon Blockchain Development Firm in India"
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
          content="Polygon Blockchain Development Services Provider"
        />
      </Head>

      <div className="overflow-hidden">
        {/* hero section */}

        <div
          className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Leverage Polygon Blockchain Development Company for Business Growth"
                ptag="Polygon Blockchain is one of the most influential forces in the world of web3 and blockchain. Now as a developing Polygon Blockchain development company In India & The USA, we want to show you all the advantages of scalable and efficient blockchain development projects. It’s very possible your business wants to use Polygon Blockchain NFT Marketplace Development as a branding tool, with Polygon Blockchain, it could provide better scalability and throughput alongside leveraging the benefits like interoperability and cross-chain compatibility. All this while still being eco-friendly."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>

        <div className="py-20">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-2 text-center md:text-left">
              <div className="space-y-3">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  How Can Your Business Benefit from Polygon?
                </h2>
                <p className="text-base text-slate-800">
                  Your concerns are valid. Before choosing any type of polygon
                  blockchain development platform it’s always good to know what
                  you’re getting into. But first, understand that Polygon
                  blockchain is ideal for processing over 3 million transactions
                  daily on average. On top polygon blockchain development
                  industry there are more than 10,000 dApps for you to use. At
                  Comfygen we can help you capitalize on this impressive
                  transaction processing speed. You’ll be able to process an
                  almost 7000 transaction per second.
                </p>
                <p className="text-base text-slate-800">
                  By using our polygon blockchain development services here at
                  Comfygen, your business can make well use of these benefits:
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-slate-800">
                  {myList1.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsDot className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/how-can-your-bussiness-benefit-from-polygon.webp"
                alt="  How Can Your Business Benefit from Polygon?"
                title="  How Can Your Business Benefit from Polygon?"
                className="rounded-lg "
                width={600}
                height={600}
              />
            </div>
          </section>
        </div>

        <ContactFromCenter />

        <AdviceSection
          heading="Use Polygon to Chart Your Path to Success in Blockchain and Web3"
          ptag="Polygon has emerged as a promising blockchain development solution to the scalability issues plaguing the blockchain and web3 landscape. Getting started in the world of web3 can be a little intimidating. But we’re here to change that. Whether you’re looking for help with Polygon blockchain NFT marketplace development or are just trying to figure things out in general, you can trust us."
          ptag1="We’ll break down all the barriers and make everything easier."
          altTag=" Use Polygon to Chart Your Path to Success in Blockchain and Web3"
          imgW={563}
          imgH={559}
          imgSrc="/img/use-polygon-to-chart-your-path-to-success-in-blockchain-and-web3.webp"
        />

        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="lg:text-4xl text-3xl font-bold text-[#0E1F51] ">
                Polygon Blockchain Development Services
              </h2>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {Service.map((elem) => {
                const { title, img, decs, num, urlLink } = elem;
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
                      <a href={urlLink}>{title}</a>
                    </h3>
                    <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                      {" "}
                      {decs}
                    </p>
                  </div>
                );
              })}
              <div className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200">
                <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                  Talk to Us Now
                </h3>
                <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">
                  As a competent Polygon blockchain development company, we
                  request you tell us about your plans and business goals with
                  Polygon blockchain right now.
                </p>
                <a
                  href="/contact-us"
                  className="flex justify-center items-center  pt-6"
                >
                  <button className="shadow-sm transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-orange-100 group-hover:bg-white rounded cursor-pointer text-black  group">
                    We Bring the Web3 Revolution to Your Doorstep
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <AdviceSection
          heading="Leverage the Full Potential of Polygon Blockchain "
          ptag="We provide a collection of Polygon development services for startups and corporations to help them capitalise on the value-based benefits of Polygon. With years of experience and a team of competent professionals, we can help you integrate your existing applications with Polygon or create new solutions."
          ptag1="As a professional Polygon development company, we aim to help you with a seamless transition to web3 alongside ensuring your success. We help you create scalable and robust web3 solutions at considerably lower costs with Polygon blockchain alongside leveraging the security of Ethereum blockchain."
          altTag="Leverage the Full Potential of Polygon Blockchain"
          imgW={563}
          imgH={559}
          imgSrc="/images/leverage-the-full-potential-of-polygon-blockchain.webp"
        />

        <section className="lg:py-16 py-4 bg-gray-200">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                {Modus?.title}
              </h2>
              <p className="w-5/6 py-6 mx-auto text-base font-medium text-center text-black">
                {Modus?.decs}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-4 md:grid-cols-2 ">
              {Development.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="flex flex-col items-center  p-4 rounded-lg border-2 border-dashed border-[#121212] space-y-2 bg-white shadow-xl"
                  >
                    <h3 className="text-xl font-bold text-black">{title}</h3>
                    <p className="text-base font-medium text-center">{decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Advantages of Choosing Polygon for Blockchain Development
                Projects
              </h2>
              <p className="text-base text-slate-800 md:text-center text-left">
                Polygon is an ideal{" "}
                <a
                  href="/blockchain-development"
                  className="text-blue-600 font-bold hover:underline"
                >
                  blockchain development solution
                </a>{" "}
                to capitalise on the potential of blockchain and web3 in a
                competitive market landscape. The Polygon Disney accelerator
                program is one of the prominent highlights which proves the
                capability of Polygon to support the growth of innovative
                businesses. On top of it, Polygon offers a collection of
                impressive features that can elevate your competitive advantage
                in blockchain and web3 projects.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Advantage.map((polygonblockchain) => {
                return (
                  <div
                    key={polygonblockchain.num}
                    className="border p-3 space-y-2 shadow"
                  >
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {polygonblockchain.title}
                    </p>
                    <p className="text-base text-slate-800">
                      {polygonblockchain.decs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="py-20">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex lg:flex-row flex-col-reverse lg:space-x-10 lg:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <div className="space-y-3">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  How Can the Disney Accelerator Polygon Collaboration Help You?
                </h2>
              </div>
              <p className="text-base text-slate-800">
                The Disney Accelerator Program Polygon collaboration could
                provide a wide range of opportunities for developing innovative
                businesses. The Disney accelerator program is a specialised
                entrepreneurial program which has embraced the layer-2 scaling
                solution of Ethereum for innovation. Polygon would receive
                access to investment capital, mentorship and co-working space at
                the creative campus of Disney.
              </p>
              <p className="text-base text-slate-800">
                Participants in the accelerator program would also have the
                opportunity to learn from top executives at Disney. Apart from
                the Polygon Disney accelerator invitation, Polygon Blockchain
                has entered into collaboration with different companies such as
                Stripe, Meta and Reddit.
              </p>
              <p className="text-base text-slate-800">
                The expansion of Polygon on the mainstream business landscape
                provides opportunities for growth of innovative business ideas.
                You can elevate your business above the competition in your
                respective markets by capitalising on its ecosystem.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
              <Image
                src="/img/how-can-the-disney-accelertor-polygon-collaboration-help-you.webp"
                alt="How Can the Disney Accelerator Polygon Collaboration Help You?"
                title="How Can the Disney Accelerator Polygon Collaboration Help You?"
                className="rounded-lg "
                width={730}
                height={411}
              />
            </div>
          </section>
        </div>

        <div className="py-4 lg:py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  How Do We Engage with Clients?
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  We follow distinct approaches for engaging with our clients to
                  ensure that they get the best results from Polygon projects.
                  Our reputation as a Polygon blockchain development agency
                  offers the assurance of productivity as we approach every
                  project with our dedicated team of development experts. You
                  can choose distinct types of engagement models for your
                  Polygon development projects.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {TechTrends.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="space-y-4 border p-6">
                      <p className="text-2xl font-bold">{title}</p>
                      <p>{decs} </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
            style={{
              backgroundImage: `url("/img/hire-polygon-blockchain-developer.webp")`,
            }}
          >
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0037AC]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={Hire} myList={myList} />
            </section>
          </div>
        </section>
        <Cryptocurrency />
        <WhyChoose Whychoose={Whychoose} Bestchoice={Bestchoice} />
        <FaqSection
          faqData={Frequently}
          title="Polygon Blockchain Development"
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
