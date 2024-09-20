import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "Why should I choose DPOS over other consensus mechanisms? ",
    desc: "To make the consensus and POW process scalable and efficient within a workflow, it is best to choose a DPOS blockchain application development company and go for such an application that is enabled with DPOS technology. "
  },
  {
    num: "2",
    title: "Which applications can the DPOS blockchain technology be integrated into? ",
    desc: "DPOS blockchain technology can be best for apps that are made for financial services, advanced gaming, voting management, and even supply chain management",
  },
  {
    num: "3",
    title: "What is the time required by your team to develop a DPOS blockchain application?",
    desc: "The time taken by our team at Comfygen to create a DPOS blockchain application can vary depending on the complexity of the app structure and features. The technology and tools that the development team uses and the improvements made in the framework also determine the time taken. The app development process can take from 3 to 9 months, based on the level of app you want to create.",
  },
  {
    num: "4",
    title: "What are the areas that affect the cost of the DPOS blockchain app development process?",
    desc: "From development to licensing and compliance, Infrastructure planning, and maintenance, there are many areas that affect the final cost of the DPOS blockchain project. "
  },
  {
    num: "5",
    title: "What kind of support does your team offer after the launch of the DPOS blockchain app?",
    desc: "The post-launch support for the DPOS blockchain app can include maintenance, technical support, troubleshooting, and timely upgrades to the launched app framework so the app can maintain its performance over time.",
  }
];
export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
           frequently asked questions (FAQs)
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, decs, decs1, doc1,doc2 , li, li1, li2, li3, li4, li5, li6  } = elem;
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
                    <p>{doc1}</p>
                    <p>{doc2}</p>
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
