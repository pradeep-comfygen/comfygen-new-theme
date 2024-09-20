import Image from "next/image";
import { MdOutlineSms } from 'react-icons/md';
import Cryptocurrency from '../components/Cryptocurrency';
import Head from "next/head";
import { BiSupport } from "react-icons/bi";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { BsWallet } from "react-icons/bs";
import { CgSmartphoneChip, CgSmartHomeLight } from "react-icons/cg";
import { FaAudible } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { ImDatabase, ImWhatsapp } from "react-icons/im";
import { FiCodepen } from "react-icons/fi";
import dynamic from "next/dynamic";
import Link from "next/link";
import JSON_DATA from "./json/smartcontractdev.json"
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})
const NewSection = dynamic(() => import('../components/NewSection'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const Process = [
  {
    num: "1",
    icon: <CgSmartphoneChip className="text-blue-400" size={50} />,
    title: "Development Of Smart Contracts",
    decs: "Every industry uses smart contracts differently depending on the size and design of the company. Regardless of the industry, we design and build cutting-edge smart contracts at",
  },
  {
    num: "2",
    icon: <CgSmartHomeLight className="text-blue-400" size={50} />,
    title: "Auditing smart contract.",
    decs: "The code that underpins the conditions of a smart contract is examined by developers during an audit. Our professional audit team checks smart contract security vulnerabilities using top-notch human and aut",
  },
  {
    num: "3",
    icon: <FaAudible className="text-blue-400" size={50} />,
    title: "Optimization of smart contracts",
    decs: "Our team identifies specific flaws and expensive models, along with ways to optimize and improving smart contracts. The loop is optimized, inaccessible or dead code is removed, and generic features such as short-",
  },
  {
    num: "4",
    icon: <TiContacts className="text-blue-400" size={50} />,
    title: "DApps with smart contracts",
    decs: 'An Ethereum-based platform can host a DApp logic and backend protocol as a smart contract. Performance, quality, and responsiveness of Dapps are ensured by our smart contract solution',
  },
  {
    num: "5",
    icon: <MdOutlineSms className="text-blue-400" size={50} />,
    title: "DEX Smart Contract",
    decs: "To ensure the security of decentralized ECO systems' exchange operations, we develop decentralized exchange smart contracts that ensure end-user data privacy, private key architecture, business logic, and data maintenance.",
  },
  {
    num: "6",
    icon: <BsWallet className="text-blue-400" size={50} />,
    title: "Digital wallet smart contract",
    decs: "Multi-signature digital wallets designed by our engineers are capable of storing and safeguarding digital assets as well as enabling smart contract transactions using blockchain smart contracts.",
  },

];
const Bestchoice = [
  {
    num: "01",
    icon: <RiCheckboxMultipleBlankLine className="text-blue-400" size={50} />,
    bg: "#F45F391A",
    title: "Experts in blockchain technology",
    decs: "We Experienced developers will analyze your business needs and deliver you with the best results for your blockchain project.",
  },
  {
    num: "02",
    icon: <ImDatabase className="text-blue-400" size={50} />,
    bg: "#9A4ECC1A",
    title: "Maintenance & Support",
    decs: "We provide support at every stage of the project with a support team and a feasible maintenance plan.",
  },
  {
    num: "03",
    bg: "#2390FB1A",
    icon: <BiSupport className="text-blue-400" size={50} />,
    title: "Reliability meets creativity",
    decs: "In order to ensure that our clients are getting the most value for their money, we use the latest technologies on the market.",
  },
];
const Business = [
  {
    num: "1",
    icon: <RiCheckboxMultipleBlankLine className="text-blue-400" size={50} />,
    bg: "#F45F391A",
    title: "Accounts with multiple signatures",
    decs: "Member approval is required before funds can be transferred from the main account. Multisig contracts provide decentralized control of funds, which makes them an excellent solution for asset sharing. Each sensitive transaction requires the approval of several parties, so multi-signature contracts prevent single points of failure",
  },
  {
    num: "2",
    icon: <ImDatabase className="text-blue-400" size={50} />,
    bg: "#9A4ECC1A",
    title: "Storage",
    decs: "The storage capacity of smart contracts is extensive, and they can maintain their persistence for a long period of time. In the same way as Ethereum (ETH), blockchain data is immutable, unique, and cannot be altered in any way. A set of parameters can be set to keep, update, and automatically release records.",
  },
  {
    num: "3",
    bg: "#2390FB1A",
    icon: <BiSupport className="text-blue-400" size={50} />,
    title: "Support from third parties",
    decs: "The use of smart contracts eliminates third-party involvement, but not entirely. Different roles are played by them within the network. To create a contract, a lawyer is required rather than drafting a separate agreement to understand the conditions. In addition, smart contracts can communicate with each other in a network similar to software libraries.",
  },
  {
    num: "4",
    bg: "#82AB101A",
    icon: <FiCodepen className="text-blue-400" size={50} />,
    title: "Financial obligations coding",
    decs: 'It is primarily used to manage usage agreements that financial commitments are coded. Smart contracts can be encoded with reimbursement rules, for instance, when a person requests insurance.'
  },
];

export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://www.comfygen.com/xmlrpc.php" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <title>Smart Contract Development | Professional Blockchain Contract Development Services</title>
        <meta name="description" content="Get reliable and secure smart contract development services from our expert blockchain developers. Our team can help you design, deploy and maintain custom smart contracts. Get in touch now to learn more!" />
        <link rel="canonical" href="https://www.comfygen.com/smart-contract-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Smart Contract Development | Professional Blockchain Contract Development Services" />
        <meta property="og:description" content="Get reliable and secure smart contract development services from our expert blockchain developers. Our team can help you design, deploy and maintain custom smart contracts. Get in touch now to learn more!
" />
        <meta property="og:url" content="https://www.comfygen.com/smart-contract-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:12:49+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/services/smart-contract.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='Smart Contract Development Services'
                ptag='For companies using private, public, or hybrid blockchains, our smart contract development services provide a game-changing option. Businesses may change their operations by automating procedures, optimizing workflows, and cutting costs with our expertise.'
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/img/smart-contract.webp'
                Width={594}
                Height={594}
                altTag="Smart Contract Development Services" />
            </div>
          </div>
        </div>
        <NewSection NewSection={JSON_DATA.NewSections} />
        <ContactFromCenter />
        {/* services */}
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Smart <span className="text-blue-600">Contract Development</span> Services
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
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
        <AdviceSection
          heading=' Smart Contracts are the Future'
          ptag=' Smart contracts are self-executing, self-enforcing protocols governed by explicit terms and conditions that can transform how agreements are made across many industries, including real estate, supply chain, telecom, manufacturing, healthcare, and others. Comfygen is an experienced smart contract development company with a deep understanding of diverse businesses and industries. Our team of smart contract developers is capable of creating an outstanding computer-based protocol to automate business transactions.'
          imgSrc='/img/smart-contract-development.webp'
          imgW={574}
          imgH={567}
          altTag='Development of Hyperledger smart contracts' />
        <div className="py-10">
          <section className="items-center flex flex-col-reverse lg:flex-row space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-3">
                <h3 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Nft smart contract <br />  development in India
                </h3>
              </div>
              <p className="text-base text-black">
                Smart Contracts are self-executing digital contracts developed on the blockchain network mainly for immutability and security. The smart contract can be signed by two parties without a third party's involvement. Funds are transferred automatically between parties when such requirements and criteria are met. A Smart Contract's data is stored in the ledger, which makes them more secure.</p>
            </div>
            <div className="flex justify-center w-full lg:justify-end">
              <Image
                src="/img/nft-smart-contract.webp" alt=" nft smart contract " className="w-[70%]" width={580} height={584} />
            </div>
          </section>
        </div>
        <div className="py-10">
          <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pb-6 lg:pb-0">
              <Image src="/img/your-smart.webp" alt=" SET UP YOUR SMART CONTRACT" width={500} height={500} />
            </div>
            <div className="w-full space-y-6 text-left">
              <div className="space-y-3">
                <h3 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  SET UP YOUR SMART <br /> CONTRACT
                </h3>
              </div>
              <p className="text-base text-black">
                Smart contract development, security audit services, and solutions are offered by Comfygen, a leading smart contract development company. Whether you need smart contracts built for your existing blockchain or new smart contracts developed for your company, we specialize in developing self-executing digital contracts. By implementing the bug-free smart contract, we help you propel your business to new heights. Avalanche, Fantom, Binance Smart Chain, and Polygon are just a few of the blockchain platforms our experts have experience designing smart contracts on.
              </p>
              <button>
                <Link href="https://api.whatsapp.com/send?phone=919587867258" passHref={true} target="_blank" className=" bg-[#1D2D5B] space-x-3 flex justify-center items-center py-2 px-5 rounded-3xl">
                  <p className="text-white text-md font-normal ">CONNECT ON WHATSAPP</p>
                  <div className="flex justify-center items-center">
                    <ImWhatsapp className="text-white" />
                  </div>
                </Link>
              </button>
            </div>
          </section>
        </div>
        <section className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-smart.webp")` }}>
          <div className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#1D2D5B]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Smart Contract <span className="text-blue-600">Programming Languages Our</span>  Experts Use
                </h2>
              </div>
              <div className="grid gap-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Contract.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="p-3 space-y-4   cursor-pointer rounded-[17px]">
                      <div className="w-24 h-24 bg-[#F45F391A] rounded-full  flex justify-center items-center" style={{ backgroundColor: elem.bg }}>
                        <div className='p-2 bg-white rounded-full h-14 w-14'>
                          <p className='text-[26px] font-bold text-center text-[#1E293B]'>{num}</p>
                        </div>
                      </div>
                      <div className='space-y-4'>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                          {title}
                        </h3>
                        <p className="break-all    text-[#000000]  group-hover:text-white/90 line-clamp-4">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Our <span className="text-blue-600">Smart Contract Development</span> Process
                </h2>
              </div>
              <div className="grid gap-10  text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Smart.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="p-8 space-y-4  cursor-pointer rounded-[40px] transition-all duration-200 border">
                      <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center border border-[#0000001A]">
                        <span className="text-blue-600 text-3xl font-bold" > {num}  </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {title}
                      </h3>

                      <p className="font-medium text-black break-all transition duration-200 ease-in-out line-clamp-5">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className=" text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Why does your <span className="text-blue-600">Business need Smart Contract</span> Application
                </h2>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {Business.map((elem) => {
                  const { title, icon, decs } = elem;
                  return (
                    <div className="p-8 space-y-4  cursor-pointer rounded-[40px] transition-all duration-200 " style={{ backgroundColor: elem.bg }}>
                      <div className="w-20 h-20 bg-[#ffffff] rounded-[17px] flex justify-center items-center border border-[#0000001A]">
                        <span> {icon}</span>
                      </div>
                      <h3 className="text-lg font-extrabold text-[#1D2D5B] transition-all duration-200">
                        {title}
                      </h3>

                      <p className="font-medium text-black break-all transition duration-200 ease-in-out  line-clamp-5">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={Bestchoice} />
        <TalkExpert />
        <div className="">
          <div className="py-10 bg-[#F5F5F5]">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">Blockchain <span className="text-blue-600"> Smart Contract Development</span> Process</h2>
            <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row md:space-y-0 py-6">
              <div className="w-full space-y-6 text-left">
                <h3 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Development of Hyperledger smart contracts
                </h3>
                <p className="text-base leading-7 text-black">With Comfygen, businesses across various industries can deploy enterprise-grade Blockchain technologies. At Comfygen, we have the expertise to transform your enterprise ecosystem into a cutting-edge, secure, and auditable one with Hyperledger Blockchain.</p>
                <p className="text-base leading-7 text-black">We developed robust and valuable DApps for companies with our expertise in Hyperledger Fabric, Sawtooth, and similar frameworks. The goal of using Hyperledger frameworks, tools, and libraries is to enable enterprise-grade business solutions to as many businesses as possible.</p>
              </div>
              <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
                <Image src="/img/development.webp" alt="TYPES OF SMART CONTRACTS" className="" width={400} height={400} />
              </div>
            </section>
          </div>
          <div className="py-10 ">
            <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex md:space-y-0">
              <div className="flex justify-center w-full lg:justify-start pb-10 lg:pb-0">
                <Image src="/img/ethereum.webp" alt="Ethereum Smart Contract Development" className="" width={350} height={350} />
              </div>
              <div className="w-full space-y-6 text-left">
                <div className="space-y-3">
                  <h3 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    Ethereum Smart Contract Development
                  </h3>
                </div>
                <p className="text-base leading-7 text-black">
                  Smart contracts can be created and run on blockchain platforms. On Ethereum Smart Contract Development, you can also run any program since it is one of the blockchain platforms that allow arbitrary code execution.
                </p>
                <p className="text-base leading-7 text-black">
                  In addition to crowdfunding, bidding, permissioning, and dApps, At Comfygen, we have a team of competent contract developers who develop secure and efficient smart contracts. Consult us if you are interested in developing Ethereum smart contracts for your business operations.
                </p>
              </div>
            </section>
          </div>
          <div className="py-10 bg-[#F5F5F5]">
            <section className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row md:space-y-2">
              <div className="w-full space-y-6 text-left">
                <h3 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  MultiChain Smart Contract Development
                </h3>
                <p className="text-base leading-7 text-black">
                  Smart legal contracts, the most common type of smart contracts, are subject to the same laws as their traditional counterparts (valid offers and acceptances, consideration, capacity, and legality), and they set out the manner in which parties will be held responsible for fulfilling their end of the deal. Smart contracts are legally enforceable when set up properly and require the parties to fulfill their obligations; failure to fulfill obligations may result in legal action being taken automatically against the party that is in breach by the smart contract.</p>
              </div>
              <div className="flex justify-center w-full lg:justify-end pb-10 lg:pb-0">
                <Image
                  src="/img/multichain-smart.webp"
                  alt="MultiChain Smart Contract Development"
                  className="" width={400} height={400} />
              </div>
            </section>
          </div>
        </div>
        <Cryptocurrency />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Smart Contract Development Services" />
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