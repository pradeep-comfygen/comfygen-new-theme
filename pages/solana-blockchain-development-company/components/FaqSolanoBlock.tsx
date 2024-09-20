import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What is the Solana blockchain, and how is it different from other platforms?",
    desc: "Solana is undoubtedly one of the high-end blockchain development platforms designed to develop decentralized cryptocurrencies and applications. It uses a PoH consensus algorithm for achieving enhanced thoughts at lowered transaction costs. Unlike all the other blockchains, Solana tends to achieve faster and more scalable products, which can support ample transactions every second.",
  },
  {
    num: "2",
    title: "What are the best perks of using Solana blockchain for development projects?",
    desc: "Some of the benefits associated with using the Solana blockchain for your development projects include the following:",
    li: "High throughput",
    li1: "Lowered transaction fees",
    li2: "Smooth scaling",
    li3: "Improved timekeeping",
    li4: "Stake-based selection of transaction validators",
    li5: "Enhanced focus on GPU optimization for enhanced performance"
  },
  {
    num: "3",
    title: "Is Solana secure enough for building the dApps?",
    desc: "Solana uses PoH and PoS consensus mechanisms for securing the blockchain network, which is enough to offer astounding security for smart contracts and dApps altogether. It also gets a big group of legitimate validators, chosen based on stake, to help manage security and decentralization. "
  },
  {
    num: "4",
    title: "Is it possible to move a dApp built on one blockchain to Solana?",
    desc: "Yes, you can move your dApp from one blockchain to Solana, which is called the migration process. For this, all the smart contracts will be written again to make them compatible with Solana’s coding languages. At Comfygen, we have the right libraries or tools, which we can use to execute this migration in no time by addressing all the challenges that come through."
  }
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
            Here are some frequently asked
            <b className="font-bold text-blue-600"> questions (FAQs) regarding </b>
            Cardano Blockchain Development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li, li1, li2, li3, li4, li5 } = elem;
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
                    <ul>
                      <li>{li}</li>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                      <li>{li5}</li>
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
