import Image from "next/image";
import React from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/dpos.json";
import Link from "next/link";
import styles from "./styles.module.css";
import ContactUsButton from "../../components/ContactUsButton";
import Slider from "./components/Slider";
import Providers from "./components/Providers";
import ConnectWithExpertButton from "../../components/button/ConnectWithExpertButton";
import HireSection from "./components/HireSection";
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const TalkExpert = dynamic(() => import("../components/TalkExpert"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const FaqPoa = dynamic(() => import("./components/FaqPoa"), {
  loading: () => <p>Loading...</p>,
});
const Arena = [
  {
    num: "01",
    icon: (
      <Image
        src="/img/consulting-and-advisory-services.webp"
        alt="Consulting and Advisory Services"
        width={60}
        height={60}
      />
    ),
    title: "Consulting and Advisory Services",
    decs: "Our delegated proof of stake development company comes with holistic consulting services to guide businesses through the complexities of DPOS blockchain adoption. Our expert developers provide strategic insights for successful blockchain integration, from feasibility studies and architecture design to protocol selection and implementation strategies",
  },
  {
    num: "02",
    icon: (
      <Image
        src="/img/custom-dpos-blockchain-development.webp"
        alt="Custom DPOS Blockchain Development"
        width={60}
        height={60}
      />
    ),
    title: "Custom DPOS Blockchain Development",
    decs: "Comfygen specializes in designing and developing custom Delegated Proof of Stake (DPOS) blockchain networks. We have tailored-fit solutions to meet specific business requirements. We ensure scalability, efficiency, and security from the basic to integrated advanced algorithms and models.",
  },
  {
    num: "03",
    url: "/smart-contract-development",
    icon: (
      <Image
        src="/img/smart-contract-development-icon-img.webp"
        alt="Smart Contract Development"
        width={60}
        height={60}
      />
    ),
    title: "Smart Contract Development",
    decs: "Comfygen enhances DPOS blockchain functionalities with smart contract development. Leveraging platforms like EOSIO and other DPOS-based frameworks, we create secure and automated contract solutions that streamline transactions and enforce business logic.",
  },
  {
    num: "04",
    icon: (
      <Image
        src="/img/blockchain-security-audits-icon.webp"
        alt="Blockchain Security Audits"
        width={60}
        height={60}
      />
    ),
    title: "Blockchain Security Audits",
    decs: "We conduct thorough security audits that allow us to assess risks and identify vulnerabilities. Our team ensures the integrity and robustness of DPOS blockchain networks, implementing best practices for mitigating potential threats and safeguarding your business assets and data.",
  },
  {
    num: "05",
    icon: (
      <Image
        src="/img/tokenomics-and-economics-design.webp"
        alt="Tokenomics and Economics Design"
        width={60}
        height={60}
      />
    ),
    title: "Tokenomics and Economics Design",
    decs: "Our team assists in designing tokenomics and economic models for DPOS blockchain projects. From token issuance and distribution strategies to incentive structures and governance mechanisms, we optimize economic parameters to align with project goals and community interests.",
  },
];
const Ser = [
  {
    num: "01",
    img: "/img/smart-contract-solutions-icon.webp",
    title: (
      <p>
        <a href="/smart-contract-development">Smart Contract Solutions</a>{" "}
      </p>
    ),
    decs: "",
  },
  {
    num: "02",
    img: "/img/high-scalability-icon.webp",
    title: "High Scalability",
    decs: "",
  },
  {
    num: "03",
    img: "/img/multilateral-ledger-icon.webp",
    title: "Multilateral Ledger",
    decs: "",
  },
  {
    num: "04",
    img: "/img/enterprise-support-icon.webp",
    title: "Enterprise Support",
    decs: "",
  },
  {
    num: "05",
    img: "/img/point-to-point-architecture-icon.webp",
    title: "Point-to-Point Architecture",
    decs: "Enabling point-to-point architecture is a winning move for business owners with their PoA blockchain development project, as this indicates that only the participants of the network will be able to access the transactions that take place. And Comfygen tends to help you implement the same on priority. ",
  },
  {
    num: "06",
    img: "/img/pluggable-consensus-icon.webp",
    title: "Pluggable Consensus",
    decs: "",
  },
];
export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          DPoS Blockchain Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen provide Readymade or custumzation DPOS Blockchain Development services In India & The USA. Contact us today for Hire expert DPoS blockchain"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/dpos-blockchain-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="DPoS Blockchain Development Company | Hire expert DPoS blockchain developers."
        />
        <meta
          property="og:facebook_description"
          content="Take your project to the next level with our exceptional DApp development company. As specialists in DPoS development and DPoS blockchain development, we offer tailored solutions to meet your specific requirements."
        />
        <meta
          property="og:twitter_title"
          content="DPoS development company | DPoS blockchain development company | DApp development company"
        />
        <meta
          property="og:twitter_description"
          content="Experience the difference with our distinguished DPoS blockchain development services. Our committed team offers comprehensive DApp development solutions alongside impeccable DPoS development expertise, positioning us as a notable DPoS blockchain development company."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En-us" />
        <meta
          name="abstract"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company | Hire expert DPoS blockchain developers"
        />
        <meta
          name="summary"
          content="DPoS Blockchain Development Company | Readymade DPoS Blockchain Development Company || Comfygen Privtate Limited: Are you Looking for a Hire expert DPoS blockchain developers in India? Hire expert DPoS blockchain developers for secure and efficient NFT blockchain development solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a DPoS Blockchain Development Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="DPoS Blockchain Development Company"
          content="Comfygen is a World Class DPoS Blockchain Development Industry: We Build the Future of Business, One DPoS Blockchain Development Services at a Time."
        />
        <meta
          name="category"
          content="DPoS Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="DPoS Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
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
                heading="DPOS Blockchain Development Company"
                ptag1="Security of highly confidential information in businesses is paramount. This is where businesses need a robust blockchain solution to manage sensitive data and information without worrying about security. In the evolving landscape of blockchain technology, several consensus algorithms have been developed to address the challenges faced in reaching an agreement in a distributed environment. One such consensus mechanism that has gained popularity is Delegated Proof of Stake (DPoS). "
                ptag2="To help businesses, we have introduced the DPoS blockchain development service at Comfygen. Our strategic service approach aims to accelerate efficiency and scalability. We have a great team of professional developers with expertise in Delegated Proof of Stake (DPoS) blockchain development solutions. Moreover, we have understood that the fast-paced environment demands precision and scalability as the business grows. So, we have started developing the DPOS blockchain as the perfect solution for building apps for enterprises."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Best DPoS Blockchain Development Company"
          ptag="Comfygen stands out as a prominent DPOS blockchain development company that is recognized for innovative solutions and prioritizing a client-centric approach. Our developer team specializes in Delegated Proof of Stake – DPOS consensus mechanisms. Our service excels in creating scalable and highly secure blockchain ecosystems. We offer tailor-fit solutions to diverse business sectors. Our developer team of blockchain DPoS development combines deep technical expertise with a thorough understanding of blockchain strategies to offer robust solutions. Our commitment to excellence is evident in our track record of successful implementations of our DPOS solutions across various industries."
          ptag1="Our service ensures efficiency, transparency, and decentralization. Whether it is creating custom DPOS blockchain networks, optimizing existing infrastructures, or providing comprehensive <a href='/blockchain-consulting-services' class='text-blue-500 font-semibold'> blockchain consulting services</a>, we consistently meet expectations. Our company stands as a trusted partner in the rapidly evolving blockchain landscape."
          imgSrc="/img/what-is-the-Significance-of-poa-blockchain-development.webp"
          imgW={550}
          imgH={500}
          altTag="What is the Significance of POA Blockchain?"
        />

        <ContactFromCenter />
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10 space-y-4">
          <div className="flex flex-col justify-center text-center ">
            <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]">
              Discover Our Services Related To DPOS Blockchain Development
            </h2>
            <p className="text-base text-slate-800">
              Being the most reputed DPoS blockchain development company in the
              USA, we offer top-notch blockchain development solutions to
              businesses. We offer a comprehensive service solution to meet
              specific requirements. Explore our services below;
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
            {Arena.map((elem) => {
              const { title, icon, decs, num, url } = elem;
              return (
                <ServiceSection
                  key={num}
                  Icon={icon}
                  url={url}
                  title={title}
                  Ptag={decs}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <ContactUsButton
              title={"Need Assistance With Your Project"}
              url={"/contact-us"}
            />
          </div>
        </div>

        <section className="lg:py-16 py-4 bg-[#0F192E]">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">
              {JSON_DATA.Major.map((elem: any) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="w-full flex flex-col justify-center items-center text-center space-y-2"
                  >
                    <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-center">
                      {title}
                    </h2>
                    <p className="text-base text-white">{decs}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.OurProven.map((elem) => {
                const { title, decs, num, img } = elem;
                return (
                  <div
                    key={num}
                    className="p-8 rounded-lg border-2 border-dashed border-[#fff] space-y-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center bg-white p-2 rounded-lg">
                        <Image src={img} alt={title} width="40" height="40" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {title}
                      </h3>
                    </div>
                    <div>
                      <p
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: decs }}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <ContactUsButton
                title={"Get A Free Consultation"}
                url={"/contact-us"}
              />
            </div>
          </div>
        </section>
        <div className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Who will Benefit From our DPOS Blockchain Development Solutions?
            </h2>
            <div className="space-y-2">
              <p>
                Our DPOS (Delegated Proof of Stake) blockchain development
                solutions are highly advantageous for various business entities
                within the enterprise and fintech sectors. Cryptocurrency
                exchanges can leverage DPOS for faster transaction processing
                and enhanced security, benefiting from its efficient consensus
                mechanism. In addition, blockchain startups seeking scalable and
                robust infrastructure can find our DPOS solution ideal for
                building decentralized applications (DApps) cost-effectively and
                quickly.
              </p>
              <p>
                Enterprises exploring blockchain for supply chain management
                benefit from our DPOS's consensus solutions in tracking and
                verifying transactions across distributed networks. Furthermore,
                organizations looking to integrate blockchain into governance or
                voting systems need DPOS for its transparency and to prevent
                fraud. Overall, our DPOS blockchain solutions cater to a diverse
                range of businesses seeking advanced blockchain technology for
                improved efficiency and security in their operations.
              </p>
              <div className="pt-4">
                <ContactUsButton title={"Let's Talk"} url={"/contact-us"} />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
            <Image
              src="/img/what-advantages-does-blockchain-technology-have-to-offer.webp"
              alt="Why is PoA Considered the Digital Revolution in the Blockchain Sector?"
              className="rounded-lg"
              width={600}
              height={600}
            />
          </div>
        </div>
        <Slider />
        <Providers />
        <section className="lg:py-16 py-4 bg-[#E9F1FE]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Our Technology Stack for Developing DPOS Blockchain Application
              </h2>
              <p className="text-base text-slate-800">
                Our delegated proof of stake blockchain development firm meets
                all the expectations put on it for the development of the new
                DPOS blockchain app. With different and advanced software
                development technologies and languages, we create DPOS
                blockchain apps that are used by professionals and industry
                stakeholders. We rediscover software development for DPOS
                blockchain applications with an updated technology stack that
                integrates the most important features into the DPOS blockchain
                app.
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 grid-cols-1">
              {JSON_DATA.LatestTechno.map((elem) => {
                const { title, num, decs } = elem;
                return (
                  <div
                    key={num}
                    className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]"
                  >
                    <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">
                      {title}
                    </h2>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-20 bg-[#fff]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Why Do Businesses Want to Use DPOS Blockchain Application
                  Development Services?
                </h2>
                <p className="text-base text-black">
                  Many businesses want to go into the DPOS Consensus sector to
                  create applications that can be used by a wider audience.
                  There are many processes and actions that a DPOS crypto app
                  can automate for the stakeholders. You can use our DPOS
                  blockchain application development services for the following
                  reasons.
                </p>
              </div>
              <div className="grid gap-12 pt-8 text-left lg:grid-cols-3 md:grid-cols-3 mt-5">
                {JSON_DATA.WhyBusinesses.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div
                      className={`${styles.BenefitsCardItem1} border border-[#00000034] rounded-[10px] p-6 `}
                    >
                      <div className={`${styles.BenefitsCardItemImg1} `}>
                        <Image
                          src={img}
                          className="object-cover"
                          width={50}
                          height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl mt-4 font-bold text-[#000] text-start">
                        {title}
                      </h3>
                      <p className=" text-black">{decs}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <ConnectWithExpertButton
                  url={"/contact-us"}
                  title={"Connect with IT Experts"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-16 py-4 bg-[#223547]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Our Working Methodology for Implementing DPOS Blockchain
                Application Development Solutions
              </h2>
              <p className="text-white text-base">
                Our DPOS blockchain development services are offered by trained
                professionals, and we offer them through a streamlined and
                reliable methodology. Our methodology has definite steps and is
                well-managed by our professionals to create the best DPOS
                blockchain application for your company.{" "}
              </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
              {JSON_DATA.WhyChoose.map((ludo) => {
                return (
                  <div
                    key={ludo.num}
                    className="border bg-white border-[#0E1F51] p-8 rounded-tr-[28px] rounded-bl-[28px] space-y-2 shadow"
                  >
                    <h2 className=" text-black text-2xl font-semibold">
                      {ludo.title}
                    </h2>
                    <p className="text-base text-black">{ludo.decs}</p>
                  </div>
                );
              })}
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

        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Make the most of our Flexible Engagement Models{" "}
            </h2>
            <p className="text-base text-slate-800">
              As a DPOS blockchain development firm, we always prioritize our
              clients and engage with them flexibly so that there is a factor of
              mutual benefit in the development process. We consult with our
              clients and help them choose the best engagement model for their
              business.{" "}
            </p>
          </div>
          <div className="grid gap-10 text-left lg:grid-cols-3  xl:gap-16">
            {JSON_DATA.TechTrends.map((elem) => {
              const { title, stack, num } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div className="shadow-lg p-2 border rounded">
                    <h3 className="text-[#0E1F51] text-xl font-bold">
                      {title}
                    </h3>
                  </div>
                  <div className="space-y-2">
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
        </section>

        <section className="bg-[#E9F1FE] lg:py-16 py-8">
          <div className="w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Why choose Comfygen for DPOS blockchain development services?{" "}
              </h2>
              <p className="text-base text-slate-800">
                We are the top DPOS blockchain development agency because of the
                experience and expertise we bring to the table. We offer
                reliable and professional development services for DPOS
                blockchain development and application launch. Here is what sets
                us apart from other companies in the sector-{" "}
              </p>
            </div>
            <div className="grid gap-10 text-left lg:grid-cols-3  xl:gap-10">
              {JSON_DATA.WhychooseDPOS.map((elem) => {
                const { title, stack, num } = elem;
                return (
                  <div key={num} className="bg-white p-7 mt-5">
                    <div className="">
                      <h3 className="text-[#0E1F51] text-xl font-bold">
                        {title}
                      </h3>
                      <p>{stack} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <TalkExpert /> */}
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

        <section className="lg:py-16 py-8">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
              <div>
                <img
                  width={550}
                  className="rounded-[10px]"
                  src="/img/dpos-blockchain-app-development-services.webp"
                  alt=" DPOS blockchain app development services"
                />
              </div>
              <div>
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#000]  ">
                  Is there any other information you need about our DPOS
                  blockchain app development services?{" "}
                </h2>
                <p className="text-base">
                  We are here to address your queries and quench your curiosity
                  related to the DPOS blockchain development field. Consult with
                  our experts and discuss your queries today to learn about our
                  processes and approach in detail. Hire our team now and
                  maximize the potential blockchain technology has for your
                  company with the latest developments.
                </p>
                <div className="flex justify-start items-start mt-5">
                  <ConnectWithExpertButton
                    url={"/contact-us"}
                    title={"Connect with IT Experts"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqPoa />
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
