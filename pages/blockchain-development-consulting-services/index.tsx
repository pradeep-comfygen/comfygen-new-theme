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
import styles from './styles.module.css'

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
const Advice = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})



const Service = [
  {
    "num": "1",
    "img": "/img/tactics-and-strategy-analysis.webp",
    "title": "Tactics and Strategy Analysis",
    "decs": "It is vital to understand your perspective, ideas, and final goals from the blockchain app development consulting service solution. Therefore, our experts will gather and learn about clients requirements and analyze their objectives to plan for further consultation & development process. The pre-assessment process of similar blockchain app development solutions and case studies will take how your product will step further with more scalable results."
  },
  {
    "num": "2",
    "img": "/img/custom-application-development.webp",
    "title": "Custom Mobile Application Development",
    "decs": <p> Our company believes in providing tailored blockchain app development solutions based on business-oriented needs. To maximize the revenue through blockchain development services, it is very important to create custom <b> blockchain mobile application development services</b> based on specific requirements. We will provide you the ideas, strategies, custom blockchain development process and product; which results in optimizing the business process</p>
  },
  {
    "num": "3",
    "img": "/img/fast-poc-creation.webp",
    "title": "Fast POC Creation",
    "decs": "Our main focus is on your business objectives, for which our experts will create a Proof of Concept (POC) to prove how blockchain development agency products will benefit your business. On the basis of POC, blockchain app development consultants will suggest and showcase actual potential of your project. It does not only end at proving the blockchain app development ecosystem results, but the professionals will explain how the ecosystem will function with business processes."
  },
  {
    "num": "4",
    "img": "/img/blockchain-service-solution-consultancy.webp",
    "title": "Blockchain App Development Service & Solution Consultancy",
    "decs": "The blockchain app development consulting experts will tell you about the loopholes that exist in current business functions, and then analyze how blockchain app development solutions will work to add value into the business scalability and profitability. We thoroughly analyze which blockchain application suits best for certain business processes for better optimization functioning."
  },
  {
    "num": "5",
    "img": "/img/training,-guidance-and-advice.webp",
    "title": "Training, Guidance and Advices ",
    "decs": "After keenly observing the suggested blockchain application development services for your business, we will develop a robust blockchain application development solution. After blockchain app development ends, here comes the training part given by our experts to your business team. We will provide training for using blockchain software development to run the blockchain app development solution seamlessly in your business. Along with training, we are available for guidance and invaluable advice helps them to work with accuracy."
  },
  {
    "num": "6",
    "img": "/img/mvp-development.webp",
    "title": "Blockchain MVP Development",
    "decs": "We are one among the top blockchain app development consulting companies, which believes in showcasing the visualized results before the project takes into the under-development stage. Our Blockchain Minimum Viable Product (MVP) development Process will give you a clear picture to transform your business next-level. It is the right of clients to know the return on investment to integrate the blockchain app development solution into the system. "
  }
]

const hiringprocess = [
  {
    "num": "1",
    "title": "Discovering the Power of Blockchain Tech",
    "img": "/img/discovering-the-power-of-blockchain-tech.webp",
    "decs": <p>Our team of seasoned blockchain experts helps businesses dive into the world of blockchain app development industry, unlocking its potential for <a href="https://www.comfygen.com/blog/real-world-asset-tokenization-on-blockchain-development/" className="text-blue-500">Real-World Asset Tokenization on Blockchain Development</a>  and benefits.</p>
  },
  {
    "num": "2",
    "title": "Savings That Make Sense",
    "img": "/img/savings-that-make-sense.webp",
    "decs": "By cutting out the middleman and pinpointing inefficiencies in how businesses run, blockchain app development solutions not only streamline operations but also bring down costs."
  },
  {
    "num": "3",
    "title": "Smooth Processes",
    "img": "/img/smooth-processes.webp",
    "decs": "Blockchain-based development solutions are like a well-oiled machine for business processes. They make transactions faster and more efficient, giving your operations a boost"
  },
  {
    "num": "4",
    "title": "Stay Ahead in the Game Among Competition",
    "img": "/img/stay-ahead-in-the-game-among-competition.webp",
    "decs": "Embracing blockchain isn't just smart—it's a game-changer. It gives businesses a competitive edge by boosting transparency, efficiency, and overall security."
  },
  {
    "num": "5",
    "title": "High Security and Safety ",
    "img": "/img/high-security-and-safety.webp",
    "decs": "Blockchain tech is like a fortress for your data. With its decentralized ledger, every transaction is securely recorded, adding an extra layer of protection."
  },
  {
    "num": "6",
    "title": "Enhanced Data Privacy",
    "img": "/img/enhanced-data-privacy.webp",
    "decs": "Worried about data privacy? Blockchain app development agency has got you covered. It ensures that sensitive information is shared securely, keeping your data confidential and private."
  }
]

const Business = [
  {
    "num": "1",
    "img": "/img/ethereum-blockchain-development-company.webp",
    "url": "/ethereum-blockchain-development-company",
    "title": "Ethereum Blockchain Development Company",
    "decs": <p>A public, decentralized platform for <a className="text-blue-500" href="/dapp-development-company">dApps development</a> </p>
  },
  {
    "num": "2",
    "img": "/img/hyperledger-blockchain-development-company.webp",
    "url": "/hyperledger-blockchain-development",
    "title": "Hyperledger Blockchain Development Company",
    "decs": "A group effort utilizing open-source blockchains to create blockchain applications of business caliber"
  },
  {
    "num": "3",
    "img": "/img/hyperledger-blockchain-development-company.webp",
    "title": "Corda Blockchain Development Company",
    "decs": "Corda is a business-focused open-source blockchain platform."
  },
  {
    "num": "4",
    "img": "/img/substrate-blockchain-development-company.webp",
    "url": "/substrate-development-company",
    "title": "Substrate Blockchain Development Company",
    "decs": "Substrate is a framework for blockchain development. With Substrate, ink!, and RUST, we construct relay chains, parachains, cross-chain bridges, and dApps development."
  },
  {
    "num": "5",
    "img": "/img/avalanche-blockchain-development-company.webp",
    "title": "Avalanche Blockchain Development Company",
    "decs": "Blockchain Developers can create unique blockchain development networks for both private and permissionless deployments using the Avalanche protocol."
  },
  {
    "num": "6",
    "img": "/img/polka-dots-blockchain-development-company.webp",
    "title": "Polka Dots Blockchain Development Company",
    "decs": "An open-source web3 blockchain development network called Polkadot blockchain development facilitates connectivity and interoperability."
  },
  {
    "num": "7",
    "img": "/img/near-protocol-blockchain-development-company.webp",
    "title": "NEAR Protocol Blockchain Development Company",
    "decs": <p>NEAR is a layer 1 blockchain development with  <a className="text-blue-500" href="/smart-contract-development">smart-contract</a> capability created to facilitate the creation of next-generation decentralized applications.</p>
  },
  {
    "num": "8",
    "img": "/img/hedera-blockchain-development-company.webp",
    "title": "Hedera Blockchain Development Company",
    "decs": "Hedera is the most equitable, quick, and secure acrylic graph DLT solution for creating high-speed, EVM-compatible blockchain systems."
  },
  {
    "num": "9",
    "img": "/img/tezos-blockchain-development-company.webp",
    "title": "Tezos Blockchain Development Company",
    "decs": <p>An Open-Source <a href="/nft-marketplace-development-company" className="text-blue-500">NFT Marketplace development</a>  for Decentralized Applications and Assets Is Tezos </p>
  }
]

const WhyChoose = [
  {
    "num": "01",
    "icon": "/img/extended-market-reach.webp",
    "title": "Finance App Development ",
    "decs": <p>Blockchain assistance and service integration in the Blockchain <a href="/finance-app-development" className="text-blue-500">finance App Development</a>  sector will build security, transparency, and record-keeping.</p>
  },
  {
    "num": "02",
    "icon": "/img/promotes-financial-inclusion.webp",
    "title": "Telecommunication ",
    "decs": "In Telecom, Blockchain Technologies can help with roaming settlement, security, SLA monitoring, and data immutability."
  },
  {
    "num": "03",
    "icon": "/img/improved-speed-of-financial-services.webp",
    "title": "Start-Ups",
    "decs": "With the help of blockchain products, the start-ups can access the fundraising opportunities, exploring new marketplaces, and agile project development."
  },
  {
    "num": "04",
    "icon": "/img/security-and-risk-management.webp",
    "title": "Manufacturing",
    "decs": "If the blockchain solutions are integrated into the manufacturing process, then it leads to ensure quality control and safety protocols. "
  },
  {
    "num": "05",
    "icon": "/img/efficient-data-management.webp",
    "title": "Supply-Chain",
    "decs": " Smart Contracts into supply chain enforce automations, security, transparency, and improvement in supply chain operations."
  },
  {
    "num": "06",
    "icon": "/img/extended-market-reach.webp",
    "title": "HealthCare",
    "decs": <p>Blockchain app development services solutions in the <a href="/healthcare-app-development" className="text-blue-500">healthcare app development industry</a>  will ensure informative transparency and ensure high security of medical data and reduce insurance fraud.</p>
  }
]

export default function rummy(props) {
  let { initialData } = props;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Comfygen Blockchain Consulting Services</title>
        <meta name='description' content="Empower Your Business with Comfygen Blockchain Consulting Development Services. Comfygen provide best blockchain consulting services to help you select blockchain development platform, types of blockchain and get ultimate guide you through top blockchain development agency. Contact us today!" />
        <link rel='canonical' href='https://www.comfygen.com/blockchain-consulting-services' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Empower Your Business Vision: Unleash the Potential of Blockchain Consulting Development Services" />
        <meta property="og:facebook_description" content="Unlock the potential of blockchain with our specialized consulting and development services, delivering tailored solutions and industry-leading expertise for a seamless integration into your business." />
        <meta property="og:twitter_title" content="Industry-Driven Excellence: Tailored blockchain consulting and development service provider" />
        <meta property="og:twitter_description" content="Empower your business with our expert blockchain consulting and development services, tailored to drive innovation and growth while ensuring regulatory compliance and industry-specific solutions. Trusted by clients for our proven track record and deep expertise in blockchain technology." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='En' />
        <meta name='abstract' content='Leading Blockchain Consulting Company' />
        <meta name='summary' content='Leading Blockchain Consulting Firm' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a comprehensive blockchain consulting service Company in India, the USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Leading Blockchain Consulting Company' content="Empowering businesses with cutting-edge blockchain consulting services and solutions and Comfygen's expert consulting services to drive innovation and sustainable growth in the digital economy." />
        <meta name='category' content='Blockchain Consulting Services - Blockchain Consulting Solution' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Blockchain Consulting Services - Blockchain Consulting Development Solution Firm in India' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Blockchain Consulting Development Service Provider' />
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
                heading="Blockchain App Development Consulting Services "
                ptag="Don’t you wanna explore more security and transparency into your business? Well, Comfygen is your one stop for blockchain app consulting development and advisory services."
                ptag1="Our IT Experts will help to empower your organization via providing best blockchain app consulting and development services. It’s the time to harness blockchain potential with its encrypted data and security leveled up technologies."
                ptag2="Here your organization needs to explore the white-label blockchain consulting development services and take vast possible leverages experience with blockchain development technology; such as long-lasting business gain, innovation, better performance, and sustainability in the technical sphere."
                li="Start Conversing with our Blockchain Experts!!!"
                btnName="Discuss Now"
                btnLink="/contact-us"
                imgSrc="/images/video-development-company.webp"
                Width={654}
                Height={495}
                altTag="video Game Development"
              />
            </div>
          </div>
        </div>

        <Advice
          heading='Let’s Discuss About Blockchain App Development Consulting with Us'
          ptag="Comfygen offers complete blockchain app development consulting services and solutions, which allow your business to avail leverages with new blockchain app development technologies and more secured transactions. Our blockchain app development team enables us to fulfill business goals with various opportunities, which takes into account the latest blockchain app development technology trends."
          ptag1="We are the top notch blockchain app development consulting services, where our blockchain consultants are keen to do well-versed market research, Blockchain app development, and testing the blockchain app development ecosystem. Additionally, our qualified and classified blockchain developers know the latest tech integration to make your decentralized blockchain app development solutions competitive and engaging in the marketplace."
          ptag2="Being one of the best blockchain app development company, we know the space, loopholes, and best practices to build a great decentralized product. The IT experts will create an absolute blockchain app development services and solution having scope to stand in future as well. Step ahead for consulting your ideas, and meet with specific business oriented suggestions with a finely executed plan."
          imgSrc='/img/decentralized-exchange-development-firm.webp'
          imgW={850}
          imgH={800}
          altTag='Let’s Discuss About Blockchain Development Consulting with Us'
        />
        <ContactFromCenter />
        <section className="py-4 lg:py-20 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/img/decentralized-exchange-img.webp")` }} >
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem] ">Blockchain Consulting and Development Services </h2>
                <p className="text-base text-black">Know what blockchain app development Consulting Services you will receive from us to take the decision wisely for Comfygen known as the best blockchain app development technology consulting company:</p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-2 md:grid-cols-2 xl:gap-10">
                {Service.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group ">

                      <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                        <img src={img} width={50} height={50} />

                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {title}
                      </h3>
                      <p className="text-black transition duration-200 ease-in-out">
                        {decs}
                      </p>


                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="https://api.whatsapp.com/send?phone=919587867258" className="mt-5">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S CONNECT TO DISCUSS A PROJECT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-center bg-cover  bg-fixed" style={{ backgroundImage: `url("/img/know-how-the-blockchain-consultancy-process.webp")` }}>
          <div className=" bg-[#121620]/95 py-20">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              {/* text-section */}
              <div className="space-y-4 text-center text-white">
                <h2 className="py- text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">Know How The  <span className="text-[#B464C0]">Blockchain Consultancy Process</span> </h2>
                <p className='text-base'>Before you invest your earned money into our blockchain development consulting service solution, we are honored to share about how our experts process consulting services. Some certain steps are comprised by the blockchain developers to offer consultation to our respective clients:</p>
                <div className="grid gap-16 py-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                  {
                    JSON_DATA.Process.map(video => {
                      const { title, num, decs, } = video;
                      return (
                        <div key={num} className="flex space-x-6 items-left drop-shadow-2xl border-white border-2 p-8 rounded-tl-3xl rounded-br-3xl group">
                          <div>
                            <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white rounded-full bg-white/20 group-hover:bg-[#B464C0]">{num}</div>
                          </div>
                          <div className="text-left space-y-2">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <div>
                              <p className="">{decs}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="">
                  <a href="/contact-us" >
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

        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">

                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Benefits of   <span className="text-[#B266C1]">Blockchain App Development</span> Consulting Solutions
                </h2>
                <p>Know how your business can take advantage from Blockchain Consultants</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {hiringprocess.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className={`${styles.BenefitsCard1} border-2 border-[#B266C1] p-6 space-y-4 bg-white rounded-[15px] relative`}>
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover" width={50} height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#B266C1]">{title}</h3>
                      <div>
                        {decs}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us ' className="mt-5" >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-center bg-cover  bg-fixed " style={{ backgroundImage: `url("/img/different-blockchain-platforms-where-we-work.webp")` }}>
          <div className="py-10 bg-black/95">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-4  p-8">
              <div className="flex flex-col justify-center text-center  mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold  ">
                  Different Blockchain Development Platforms Where We Work
                </h2>
                <p className="text-base text-white">A variety of well-liked and exciting Layer-1 and Layer-2 blockchain systems are used by our advisors. We are aware of the special qualities and constraints of every platform, and we can advise you on the one that will work best for your particular use case.</p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">

                {Business.map(video => {
                  const { title, decs, url, num, img } = video;
                  return (
                    <div key={num} className="p-6 space-y-4  rouneded transition-all duration-200 border">
                      <div className="flex items-center justify-center font-semibold bg-white rounded-md shadow-xl h-20 w-20">
                        <Image src={img} alt={title} width={60} height={60} />
                      </div>
                      <div>
                        <a href={url} className=" text-[#fff]">
                          <h3 className="text-xl font-semibold  transition-all duration-200">
                            {title}
                          </h3>
                        </a>
                      </div>
                      <p className="font-medium text-[#fff]  transition duration-200 ease-in-out ">
                        {decs}
                      </p>
                    </div>
                  );
                })}

              </div>
              <div className="flex justify-center">
                <a href='/quote' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 lg:py-10 bg-[#DBEAFE]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 ">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-2 text-2xl lg:text-4xl text-[#0E1F51] font-bold  leading-tight lg:leading-[3rem]  ">Industries Getting Leverages from   <span className='text-[#BA68C8]'>Blockchain Consulting Services</span> </h2>
                <p className="text-base text-slate-800">There are various industries, where blockchain app development service products can suit and build strength to the businesses. Here are the industries where we serve:   </p>
              </div>
              <div className="grid gap-10 py-10 text-center lg:grid-cols-3 md:grid-cols-2 xl:gap-10 ">
                {WhyChoose.map((elem) => {
                  const { title, icon, decs } = elem;
                  return (
                    <div className='bg-[#F8F9FE] border border-[#516DF6] text-gray-50 rounded-xl p-8 space-y-3 text-start'>

                      <img src={icon} width={50} height={50} alt="" />
                      <h3 className="text-2xl font-extrabold text-black"> {title}</h3>
                      <p className="leading-snug text-black">  {decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="bg-center bg-no-repeat bg-cover lazyload" style={{ backgroundImage: `url("/img/hire-blockchain-consultants-at-comfygen.webp")` }} >
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
                <p className="text-base text-black">Crypto app development and Blockchain app development will definitely increase value in the business due to enabling more security and transparency. On the same side, using this technology also requires professional assistance because of the complex and diversified tech stacks. So here at Comfygen, we have gathered a fully experienced and expert team of Blockchain Consultants and Developers, who are not only knowledgeable but creative to innovate some extra-ordinary solutions though. </p>
                <p className="text-base text-black">It does not matter whether you are running an SME or it is a large-scale enterprise, we have super-efficient methods and techs to improve any business to its next level. Our blockchain developers go through the necessary clientele requirements, understand and learn about their goals, and later they commit to build certain quality and featured blockchain development solutions based on their custom needs. You can trust Comfygen, and we ensure that your trust is sustained is our responsibility for our healthy long-term relationship.</p>
                <ul className="px-3 list-disc space-y-1">
                  <li>Fully-Secured Data Security Protocols</li>
                  <li>From Custom Consultation to Deployment, We Handle the Whole</li>
                  <li>No Restrictions with Time-Zones, Customer Support is accessible anytime</li>
                  <li>Result-Driven Solutions with Problem-Solving Creativity</li>
                </ul>
              </div>
              <div className="flex flex-row">
                <a href='/quote' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-center bg-cover  bg-fixed " style={{ backgroundImage: `url("/img/different-blockchain-platforms-where-we-work.webp")` }} >
          <div className="bg-[#111B28]/95 py-10">
            <TalkExpert />
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
