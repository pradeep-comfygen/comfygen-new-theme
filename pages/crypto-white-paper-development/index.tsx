import Image from "next/image";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { useRouter } from "next/router";
import { IoStarSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiCrop2Fill, RiDeviceLine, RiExchangeFill } from "react-icons/ri";
import { ImCircleLeft } from "react-icons/im";
import { TiStopwatch } from "react-icons/ti";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowhitepaper.json";
const FaqSection = dynamic(() => import("../components/FaqSection"), {
  loading: () => <p>Loading...</p>,
});
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
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
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const WhycomfygenSection = dynamic(
  () => import("../components/WhycomfygenSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <p>Loading...</p>,
});
const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Services = [
  {
    num: "01",
    url: "/cryptocurrency-mlm-software-development",
    icon: <RiCrop2Fill size={50} className="text-blue-500" />,
    title: "Cryptocurrency",
    decs: "The adroit whitepaper writers at our company provide us with a clear explanation of cryptocurrency's use cases in a whitepaper.",
  },
  {
    num: "02",
    icon: <ImCircleLeft size={50} className="text-blue-500" />,
    title: "ICO",
    decs: "With our ICO white paper writing services, you can raise funds with your ICO platform in the most elegant way.",
  },
  {
    num: "03",
    url: "/cryptocurrency-exchange-development",
    icon: <RiExchangeFill size={50} className="text-blue-500" />,
    title: "Crypto Exchange   ",
    decs: "Crypto exchange white paper writing services from our dedicated whitepaper writers revitalize your crypto exchange platform.",
  },
  {
    num: "04",
    url: "/nft-marketplace-development-company",
    icon: <FaPaperPlane size={50} className="text-blue-500" />,
    title: "NFT",
    decs: "By utilizing our well-written NFT whitepaper writing services, we assure you that you will experience success in your NFT project without any hassles. ",
  },
  {
    num: "05",
    url: "/defi-development-company",
    icon: <RiDeviceLine size={50} className="text-blue-500" />,
    title: "DeFI ",
    decs: "We can offer you the stunning DeFi white paper writing services that will clearly explain why your platform is the right investment for your investors.",
  },
  {
    num: "6",
    icon: <TiStopwatch size={50} className="text-blue-500" />,
    title: "STO",
    decs: "STO whitepaper writing services from us will help you meet your business goals in a timely manner.",
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
          Crypto White Paper Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen offers industry-leading white paper creation services by Blockchain technical writers, specialized in blockchain projects like ICOs and STOs. Contact us for best white paper development company In India & The USA to showcase your project uniquely."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/crypto-white-paper-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="language" content="en-us" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Crypto White Paper Development Company in India | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen offers industry-leading white paper creation services by Blockchain technical writers, specialized in blockchain projects like ICOs and STOs. Contact us for high-quality white paper development company In India & The USA to showcase your project uniquely."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/crypto-white-paper-development"
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
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Crypto White Paper Development Company"
                ptag="Comfygen is a top provider of whitepaper writing services, focusing in producing interesting and educational white papers that make companies stand out. Our knowledgeable writers know how to create white papers that successfully capture users' interest and offer insightful information about your company."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 text-4xl text-[#0E1F51] font-bold leading-[3rem]  ">
                  Crypto{" "}
                  <span className="text-blue-600">White Paper Development</span>{" "}
                  Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Services.map((elem) => {
                  const { title, icon, decs, num, url } = elem;
                  return (
                    <ServiceSection
                      key={num}
                      url={url}
                      Icon={icon}
                      title={title}
                      Ptag={decs}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <AdviceSection
          head="We are White Paper Development Company"
          heading="  White Paper Development Company"
          ptag="Comfygen takes extensive research, as well as knowledge of solution architecture and token economics, to write a white paper. Using deep domain knowledge and working with our subject matter experts, our technical white paper writers produce detailed, technical white papers with verifiable statistical information. Additionally to content creation, our white paper development process includes white paper design services to ensure that your document is visually appealing to potential investors as well as content-rich."
          imgSrc="/images/white-paper-development-company.webp"
          imgW={580}
          imgH={559}
          altTag=" White Paper Development Company"
        />
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-28 lg:space-y-4">
            <div className="flex justify-center w-full lg:justify-start">
              <Image
                className="rounded-md "
                title=" White Paper Development Company"
                alt=" White Paper Development Company"
                src="/img/white-paper-development.webp"
                height={600}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full space-y-[14px] text-left bg-[#F45F391A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]  ">
                  White Paper Development Company
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Writing a white paper requires a lot of research, time, and
                knowledge of the domain you are writing about. Moreover, it
                requires proficiency in writing, which can be demonstrated by
                choosing the right format or structuring the content in a
                particular way. It's the job of professionals who know what
                they're doing and are skilled at making technical aspects of any
                line of work understandable and intriguing to their readers.
              </p>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                To accomplish this task perfectly, you need to work with the
                best ICO/IDO white paper writing services. An example of a
                company that consistently illustrates its projects in the best
                possible way is Comfygen India.
              </p>
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row  lg:space-x-28 lg:space-y-4">
            <div className="w-full space-y-[14px] text-left bg-[#be70f31A] p-[40px] rounded-[40px]">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold text-[#0E1F51]  ">
                  White Paper Writing Services India
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Writing a white paper requires a lot of research, time, and
                knowledge of the domain you are writing about. Moreover, it
                requires proficiency in writing, which can be demonstrated by
                choosing the right format or structuring the content in a
                particular way. It's the job of professionals who know what
                they're doing and are skilled at making technical aspects of any
                line of work understandable and intriguing to their readers.
              </p>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                We can assist you with writing cryptocurrency white papers that
                will ensure the success of your project. We present your idea
                most vividly in our white paper in order to convert the reader
                into an investor.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                className="w-full rounded-md "
                title="  White Paper Writing Services India"
                alt="  White Paper Writing Services India"
                src="/images/white-paper-writting-service.webp"
                height={600}
                width={600}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </section>
        </div>
        <section className="py-10">
          <div
            className="bg-center bg-no-repeat bg-cover lazyload"
            style={{
              backgroundImage: `url("/img/hire-cryptocurrency-white-paper.webp")`,
            }}
          >
            <div className="py-10 bg-no-repeat bg-cover lg:py-20 ">
              <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#960B0B]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
                <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
              </section>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gray-100">
          <div className="space-y-10  mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto ">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Our Crypto
                <span className="text-[#3B82F6] px-2">
                  {" "}
                  White Paper Creation{" "}
                </span>{" "}
                Process
              </h2>
              <p className="text-base text-slate-800">
                There should be technical details in a white paper, but it
                should also be easy to understand by the general public. Using
                authoritative information, we create white papers that are
                equally accessible to investors with less knowledge.
              </p>
            </div>
            <section className="items-center space-y-10  lg:flex lg:space-x-28 lg:space-y-4">
              <div className="flex justify-center w-full lg:justify-start">
                <Image
                  className="rounded-md"
                  title=" Our Crypto White Paper Creation Process"
                  alt=" Our Crypto White Paper Creation Process"
                  src="/img/our-crypto-white-paper-creation-process.webp"
                  height={600}
                  width={600}
                  loader={uploadcareLoader}
                  unoptimized={true}
                />
              </div>
              <div>
                <ul className="space-y-5">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li className="flex" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <IoStarSharp className="w-4 h-4" />
                      </span>
                      {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </section>
        <TalkExpert />
        <WhycomfygenSection
          Qa={JSON_DATA.Qa}
          Whycomfygen={JSON_DATA.Whycomfygen}
        />
        <WhyChoose
          Whychoose={JSON_DATA.Whychoose}
          Bestchoice={JSON_DATA.Bestchoice}
        />
        <Cryptocurrency />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="White Paper Development"
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
