import Image from "next/image";
import Cryptocurrency from "../components/Cryptocurrency";
import Head from "next/head";
import { BsFillStarFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import dynamic from "next/dynamic";
import Link from "next/link";
import JSON_DATA from "./json/smartcontractdev.json";

const FaqSmartContract = dynamic(
  () => import("./components/FaqSmartContract"),
  {
    loading: () => <p>Loading...</p>,
  }
);
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
const Process = [
  {
    num: "1",
    icon: (
      <Image
        src="/images/icons/ethereum.webp"
        alt="Ethereum"
        width={60}
        height={60}
      />
    ),
    title: "Ethereum Smart Contract Development",
    decs: "Using Ethereum for smart contract development is our prime USP, and Comfygen has always taken a stronger leap with it to help your projects turn out to be immensely successful. As Ethereum Smart Contract Development is one of the most well-known blockchain development networks for smart contract development company, we are offering a full-fledged core team to look after the ideal utilisation of this technology for getting your project ready.",
  },
  {
    num: "2",
    icon: (
      <Image src="/images/icons/tron.webp" alt="TRON" width={60} height={60} />
    ),
    title: "TRON Smart Contract Development",
    decs: "We are providing you with the feasibility of choosing TRON Smart Contract Development as your blockchain technology for developing smart contracts. Our team has dedicated TRON smart contract development experts who will take up your project, break it down into understandable segments, and help you with coding, compiling, testing, and deploying your smart contract.",
  },
  {
    num: "3",
    icon: (
      <Image
        src="/images/icons/binance.webp"
        alt="Binance"
        width={60}
        height={60}
      />
    ),
    title: "Binance Smart Contract Development",
    decs: "Binance is one of the easiest technologies or networks over a blockchain development company that can be used for making Binance Smart Contract Development. Comfygen is quite proficient with handling the technicalities associated with Binance Smart Chain for developing high-performance smart contracts",
  },
  {
    num: "4",
    icon: (
      <Image
        src="/images/icons/polygon.webp"
        alt="Polygon"
        width={60}
        height={60}
      />
    ),
    title: "Polygon Smart Contract Development",
    decs: "Polygon, being backed by the security layers of Ethereum Smart Contract Development, can be your next big pick for getting your smart contracts developed. Our experts are skilled in leveraging the potential of Polygon Smart Contract Development and its interoperability functionalities to help you create a smart contract over this blockchain development network where the traffic is moderate and well-managed.",
  },
];
const Business = [
  {
    num: "1",
    icon: (
      <Image
        src="/img/dedicated-team-of-developers.webp"
        alt="Dedicated Team of Developers"
        width={60}
        height={60}
      />
    ),
    bg: "#F45F391A",
    title: "Dedicated Team of Smart Contract Developers",
    decs: "We assign you dedicated smart contract development programmers based on the type of blockchain development you choose to base it on. With our core members, your business will acquire enough help through innovative smart contract development solutions that would benefit you from leveraging the various benefits of decentralisation techniques. When we allot a dedicated team of smart contract developers for your project, they shall exclusively work just for your project without taking up other responsibilities.",
  },
  {
    num: "2",
    icon: (
      <Image
        src="/img/extending-the-team.webp"
        alt="Extending the Team"
        width={60}
        height={60}
      />
    ),
    bg: "#9A4ECC1A",
    title: "Extending The Team",
    decs: "At Comfygen, we have the liberty of allowing the clients to seek team extension  solutions from us. Here, we help businesses expand their current development capabilities for scaling smart contract development projects. All our experienced smart contract developers will seamlessly integrate with your current in-house team to assist your business in acquiring high-quality smart contracts development company.",
  },
  {
    num: "3",
    bg: "#2390FB1A",
    icon: (
      <Image
        src="/img/project-based-model.webp"
        alt="Project-Based Model"
        width={60}
        height={60}
      />
    ),
    title: "Project-Based Model",
    decs: "In our smart contract development service execution models, we have a project-based engagement approach as well, which shall help the business launch modern smart contract development services or products efficiently and quickly. At Comfygen, our project-based smart contract development service execution enables us to understand your requirements better. As a result of which, we deliver more premium outcomes associated with smart contracts development company.",
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  let {
    SmartFeatures,
    Whychoose,
    Hire,
    myList,
    myList3,
    Bestchoice,
    Development,
    SmartProcess,
  } = JSON_DATA;

  return (
    <>
      <Head>
        <title>
          Smart Contract Development Company In India & The USA | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen is a leading Smart Contract Development Company In India & The USA. We provides DeFi smart contract development services such as Ethereum, Hedera Hashgraph, Baseline, Hyperledger, EOS, Polkadot, Corda, Quorum Blockchain projects. Contact Us Today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Smart Contract Development Company In India &  The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading Smart Contract Development Company In India & The USA. Get reliable and secure smart contract development services from our expert blockchain developers. We offer full-stack smart contract development and auditing for Ethereum, Hedera Hashgraph, Baseline, Hyperledger, EOS, Polkadot, Corda, Quorum Blockchain projects. Contact Us Today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/smart-contract-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:12:49+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/services/smart-contract.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Smart Contract Development Company | Hire Our smart contract developer | Smart contract development company India"
        />
        <meta
          property="og:facebook_description"
          content="Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta
          property="og:twitter_title"
          content="Smart Contract Development Company India | Smart Contract Developer in India | Hire Blockchain Smart Contract Developer"
        />
        <meta
          property="og:twitter_description"
          content="Looking to engage a premier Smart Contract Development Company in India? Hire our seasoned Smart Contract Developers proficient in blockchain technology for unparalleled expertise in smart contract development."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Blockchain Smart Contract Development Industry | Hire Blockchain Smart Contract Development Services"
        />
        <meta
          name="summary"
          content="Smart Contract Development Services via Comfygen Privtate Limited: Are you Looking for a Smart Contract Development Company in India? Hire our expert smart contract developers for secure and efficient blockchain solutions."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Smart Contract Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Smart Contract Development Company"
          content="Comfygen is a First Class Smart Contract Development Agency: We Build the Future of Business, One Blockchain Smart Contract Development Solution at a Time."
        />
        <meta
          name="category"
          content="Smart Contract Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Smart Contract Development Firm in India"
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
          content="Smart Contract Development Services Provider"
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
                heading="Smart Contract Development Company "
                ptag="We strive to help enterprises across different sectors to implement the best smart contract development solutions that will help them to fill the expertise gap."
                ptag1="At Comfygen, we intend to provide you with the best smart contract development solutions In India & The USA with the help of our best-skilled team of smart contract developers. Our blockchain developers have core proficiency in handling diverse smart contract development projects and work round the clock to deliver the best for your requirements."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading="Step Into Our Proficiency in Smart Contract Development Services"
          ptag="We at Comfygen, help to create smart contracts by implementing blockchain technology. Whether you are looking to boost your enterprise workflows or are willing to bring in some innovative smart contract solutions to market, our experienced developers can help to automate the process. Our team of developers has the experience and skills to deliver the smart contract development products that help your business to scale seamlessly."
          imgSrc="/img/step-into-our-Proficiency-in-smart-contract-development-services.webp"
          imgW={574}
          imgH={567}
          altTag="Step Into Our Proficiency in Smart Contract Development Services"
        />
        <ContactFromCenter />
        {/* services */}
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Choose Your Preferred{" "}
                  <span className="text-blue-600">
                    Blockchain Technology, and We Shall Embark
                  </span>{" "}
                  on Developing Your Smart Contract Over It!
                </h2>
                <p className="text-base text-slate-800">
                  Comfygen understands the core need for automation across
                  diverse blockchain based smart contract development industries
                  or business domains. May it be finance smart contracts
                  development, real estate smart contracts development,
                  healthcare smart contracts development, or any other smart
                  contracts development industry, we have been offering our core
                  expertise in the field of smart contract development company
                  to improve the respective operations and make the businesses
                  avail the perks of decentralisation and digitalisation
                  altogether. If you want to get started with the quest of
                  introducing proficient automation for your business sector,
                  you must decide on the blockchain technology you want the
                  smart contracts development to be based on.
                </p>
                <p className="text-base text-slate-800">
                  Here are some of the blockchain technologies that we support
                  for our smart contract development services:
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Process.map((elem) => {
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
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Have a Look at the Features{" "}
                  <span className="text-blue-600">
                    {" "}
                    You Acquire Upon Availing of Our Smart Contract{" "}
                  </span>{" "}
                  Development!{" "}
                </h2>
              </div>
              <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
                {SmartFeatures.map((elem) => {
                  const { title, img, decs, num } = elem;
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
                      <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                        <p className="tracking-normal text-sm text-white text-justify">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <TalkExpert />
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                What are the Perks of Seeking Smart Contract Development
                Services?
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">
                  If you are still in a dilemma of whether or not you should get
                  in touch with us to commence with your smart contract
                  development project, here are a few benefits that might just
                  convince you to get started with it:
                </p>
                <ul className="space-y-2 text-left">
                  {myList3.map((item, index) => (
                    <li className="flex text-base text-black/80" key={index}>
                      <span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/what-are-the-Perks-of-seekng-contract-development-servide.webp"
                alt="What are the Perks of Seeking Smart Contract Development Services?"
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </section>
        </div>
        <section className="lg:py-16 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                Have a Look at Our Core Smart Contract Development Services!
              </h2>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {Development.map((elem: any) => {
                const { title, num, img } = elem;
                return (
                  <div key={num}>
                    <div className="flex items-center  p-4 rounded-lg border-2 border-dashed border-[#121212] space-x-2">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <AdviceSection
          heading="We Have Been Handling Smart Contract Development Projects of Varying Complexities!"
          ptag=" At Comfygen, we have been serious about maintaining quality and preciseness with every smart contract development project we take up. We have been handling clients from diverse smart contract development industries with different sets of requirements but have fulfilled them all with utmost priority. The best thing about our smart contract development services is that we try to meet the deadlines on priority without losing our pace on meeting quality expectations."
          ptag1="We have a team of dedicated smart contract developers who make use of the latest technologies not just to deliver great products but also to make them efficient and secure. Irrespective of how complex a smart contract development project might be, we make a tailored approach to meet the unique necessities of businesses from various domains. So, we await your smart contract development service request for a highly functional smart contract development company, despite the industry you belong to."
          imgSrc="/img/we-have-been-handling-smart-contract-development-project-of-varying-complexities.webp"
          imgW={574}
          imgH={567}
          altTag="We Have Been Handling Smart Contract Development Projects of Varying Complexities!"
        />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Get an Insight into Our Diverse{" "}
                  <span className="text-blue-600">
                    Engagement Models for Your Smart Contract
                  </span>{" "}
                  Project!
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Business.map((elem) => {
                  const { title, icon, decs } = elem;
                  return (
                    <div
                      className="p-8 space-y-4  cursor-pointer rounded-[40px] transition-all duration-200 "
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center border border-[#0000001A]">
                        <span> {icon}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#1D2D5B] transition-all duration-200">
                        {title}
                      </h3>

                      <p className="font-medium text-black break-all transition duration-200 ease-in-out">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-10 bg-cover bg-no-repeat bg-center lg:block hidden"
          style={{
            backgroundImage: `url("/img/type-of-satta-matka-games-we-covered.webp")`,
          }}
        >
          <div className="space-y-10  w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                Have a Closer Look at{" "}
                <span className="text-blue-600">
                  {" "}
                  Our Professional Smart Contract{" "}
                </span>{" "}
                Development Process!
              </h2>
              <p className="text-base text-slate-800">
                To help you with added clarity on our proficiency in the field
                of smart contract development company, have a look at the
                sophisticated smart contract development process that we tend to
                implement for every new project:
              </p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2  md:gap-10 gap-8 py-10 ">
              {SmartProcess.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className=" w-full p-6 text-white space-y-4 bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90 relative rounded-lg hover:scale-105 transition duration-300 "
                  >
                    <h3 className="text-xl font-bold ">{title}</h3>
                    <p>{decs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <WhyChoose Whychoose={Whychoose} Bestchoice={Bestchoice} />
        <section
          className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10"
          style={{
            backgroundImage: `url("/img/hire-our-tech-centric-smart-contract-developers-to-scale-your-business-operations.webp")`,
          }}
        >
          <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#1D2D5B]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </div>
        </section>
        <div className="py-10 bg-gray-200">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pb-6 lg:pb-0">
              <Image
                src="/img/your-smart.webp"
                alt=" SET UP YOUR SMART CONTRACT"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-3">
                <h3 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Do You Still Want to Know Anything About Us?
                </h3>
              </div>
              <p className="text-base text-black">
                In case you still have some queries associated with our smart
                contract development services, you can always connect with us in
                an instant. When you are ready, we can go ahead and discuss your
                requirements and needs to move ahead with the project.
              </p>
              <button>
                <Link
                  href="https://api.whatsapp.com/send?phone=919587867258"
                  passHref={true}
                  target="_blank"
                  className=" bg-[#1D2D5B] space-x-3 flex justify-center items-center py-2 px-5 rounded-3xl"
                >
                  <p className="text-white text-md font-normal ">
                    CONNECT ON WHATSAPP
                  </p>
                  <div className="flex justify-center items-center">
                    <ImWhatsapp className="text-white" />
                  </div>
                </Link>
              </button>
            </div>
          </section>
        </div>

        <Cryptocurrency />
        <FaqSmartContract />
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
