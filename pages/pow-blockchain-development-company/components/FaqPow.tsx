import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What is the role of Proof of Work in preventing double spending?",
    desc: "Proof of Work could help in preventing double-spending by ensuring that creating fake transactions would require more time and resources. Miners have to find the answers for complex math problems to generate the hash required for adding new blocks. Therefore, miners would need a significant amount of computing resources and energy to add valid transactions to the blockchain. Miners have to spend resources to solve cryptographic equations quickly before other miners."
  },
  {
    num: "2",
    title: "What is the use of Proof of Work on Bitcoin?",
    desc: "Bitcoin utilizes the Proof of Work or POW consensus algorithm for adding a new block at a gap of 10 minutes. It works by modifying the difficulty of mining Bitcoin according to the pace at which miners can add blocks. On the other hand, the hash computations become more complex when mining speed increases abruptly. Similarly, the hash computations become simpler when the mining speed is slower than expected. ",
  },
  {
    num: "3",
    title: " What are the limitations of POW blockchains?",
    desc: "The discussions about Proof of Work blockchains generally cover the limitations associated with them. One of the prominent limitations associated with Proof of Work blockchains is the need for more mining power and energy consumption. Therefore, it creates issues of affordability for miners interested in leveraging POW blockchains for their personal benefits. The problems with Proof of Work blockchains also point to the expensive transaction fees alongside slower transaction speeds. Most important of all, Proof of Work is considerably slower than Proof of Stake blockchains and also presents issues of adaptability. "
  }
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <div className='flex flex-col justify-center items-center text-center space-y-3'>
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
              Here are some frequently asked
              <b className="font-bold text-blue-600"> questions (FAQs) regarding </b>
              POW Blockchain Development
            </h2>
            <p className='text-base  text-slate-800'>We know that you must have a lot of questions on your mind when you want POW blockchain development services. Here are some of the popular questions on POW blockchain technology that you might have on your mind now.</p>
          </div>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, decs, decs1, li, li1, li2, li3, li4, li5, li6 } = elem;
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
                    <ul className='px-3 space-y-2'>
                      <li>{li}</li>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                      <li>{li5}</li>
                      <li>{li6}</li>
                    </ul>
                    <p>{decs}</p>
                    <p>{decs1}</p>
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
