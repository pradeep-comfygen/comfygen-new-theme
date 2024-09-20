import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What is a DEX Development Company?",
    desc: "A DEX development company assists businesses in developing and launching decentralized exchanges (DEXs). DEXs are exchanges between peers that allow users to trade cryptocurrencies without the assistance of a middleman.",
  },
  {
    num: "2",
    title: "How can a DEX Development Company help in building a decentralized exchange?",
    desc: "Working with a DEX development company offers numerous benefits for building a decentralized exchange. They handle smart contract design, frontend and backend infrastructure, testing, deployment, ongoing support, and maintenance. They also guide blockchain network selection and marketing strategies. Collaborating with a DEX development company allows for the efficient and timely creation of a secure and reliable DEX platform.",
   
  },
  {
    num: "3",
    title: "What are the key services offered by a DEX Development Company?",
    desc: "To ensure a secure and efficient decentralized exchange experience, a DEX development business provides smart contract development, frontend development, backend infrastructure, testing, and deployment, as well as continuous support and maintenance.",

  },
  {
    num: "4",
    title: "How does a DEX Software Development Company create decentralized crypto exchange software solutions?",
    desc: "A DEX software firm creates and implements frontend, backend, and smart contract components in its innovative decentralized cryptocurrency exchange platform. In addition, they provide marketing, cross-chain assistance, liquidity aggregation, token economics design, and decentralized governance. They want to transform decentralized exchanges.",
    
  },
  {
    num: "5",
    title: "What is White Label Decentralized Exchange Software Development?",
    desc: "White-label DEX software development offers businesses a convenient and cost-effective solution for entering the DEX market. Employing pre-built platforms allows businesses to focus on creating a smooth user experience and developing their brand while saving time and money. This makes it possible for companies to enter the market while retaining their own identities."
  },
  {
    num: "6",
    title: " How does a White Label Decentralized Exchange Development Company create white-label solutions?",
    desc: "White-label solutions with a pre-built platform and customizable branding are provided by a leading DEX development company. From development to launch, they offer steadfast assistance to ensure a flawless experience. Have faith in them to realize your vision."
  },
  {
    num: "7",
    title: "What are the benefits of using a white-label decentralized exchange software development company? ",
    desc: "Picking out a white label The DEX software development company provides secure and adaptable options, a lower risk profile, access to knowledge and assistance, economical and effective solutions, and the chance to outperform the competition. You may concentrate on expanding your company and accomplishing your objectives by giving your software development to a reliable source."
  },
  {
    num: "8",
    title: "How does a DEX Development Firm contribute to the DEX Development Industry?",
    desc: "Through innovation, increased security, and improved user accessibility, DEX development companies propel the industry's growth and prosperity. They place a high priority on security in order to foster confidence and make DEXs user-friendly by providing clear interfaces and instructive materials. A decentralized financial system needs liquidity and acceptance, which they aggressively promote to draw in users and investors.",
    
  },
  {
    num: "9",
    title: " What are the essential features of decentralized exchange software solutions?",
    desc: "Smart contracts, an intuitive front end, a scalable back end, liquidity pools, robust security protocols, and transparent transaction data are some of the features of decentralized exchange (DEX) software systems."
  },
  {
    num: "10",
    title: "How can a Decentralized Exchange Development Company ensure security in DEX applications",
    desc: "A DEX development company can use strategies like monitoring smart contracts, performing penetration tests, providing bug bounty programs, utilizing multi-signature wallets, keeping money in cold storage, and regularly releasing security upgrades to maintain security in DEX apps."
  },
  {
    num: "11",
    title: "What is the role of a Decentralized Exchange Development Organisation in the market?",
    desc: "DEX development organizations innovate and enhance the security, scalability, and usability of DEXs, building trust through audits and transparency. They educate users and promote adoption through marketing and advocacy. They play a crucial role in developing and maintaining secure, user-friendly DEX platforms while promoting their benefits."
  },
  {
    num: "12",
    title: "Can you explain the process of decentralized cryptocurrency exchange development?",
    desc: "Plan and collect DEX requirements, create Solidity contracts, design user interfaces, construct infrastructure, test and deploy DEX, and offer continuous maintenance and support.",
  },
  {
    num: "13",
    title: "What are the advantages of building a decentralized exchange application? ",
    desc: "DEX apps provide enhanced security, transparency, user control, accessibility, and innovation. They eliminate single points of failure, store funds in separate wallets, and execute trades using smart contracts. Transactions are recorded on the blockchain for transparency, and users have complete asset control. DEXs are accessible to anyone online and continuously evolving to offer dynamic opportunities.",
  },
  {
    num: "14",
    title: "What services are included in decentralized exchange development services?",
    desc: "Decentralized exchange development services typically comprise smart contract development, user interface design, backend infrastructure development, testing and deployment of the exchange, and continuous support and maintenance.",
  },
  
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
          FAQs
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, } = elem;
              return (
                <div key={index} className="bg-white border cursor-pointer w-full rounded-lg"
                  onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                  <div className="flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg">
                    <h3 className="w-full text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={currentCount === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={currentCount === index ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40" : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                    <p>{desc}</p>
                    <ul className='px-3'>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
