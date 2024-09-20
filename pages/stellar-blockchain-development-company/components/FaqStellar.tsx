import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What are the potential perks of using Stellar blockchain development solutions for your project?",
    desc: "As the market for digital currency has seen a significant boost in recent years, the demand for its utilization is increasing with every passing year. Therefore, blockchain technology is now used for attending to those demands, and Stellar is considered an open-source blockchain development technology, allowing you to leverage the power of this modern technology. And Comfygen tends to provide you with expert services to bring in the remarkable capabilities of Stellar blockchain for your business system."
  },
  {
    num: "2",
    title: " Does Comfygen provide professional consulting on choosing Stellar blockchain development?",
    desc: "Yes, Comfygen does offer a consulting service for you to identify the right blockchain for your development project. In case you are in a dilemma of whether or not Stellar is the right blockchain for your development project, connect with us today, and we shall help you understand its true potential for your business requirements.",
    li1: "Beyond consultation, we also help you design a roadmap for approaching the development process and then instruct our developers to be strict on it. In this way, we will be assisting you with not just consulting services for Stellar blockchain development solutions but also development and deployment."
  },
  {
    num: "3",
    title: "What is the optimal way of approaching the creation of the Stellar blockchain app?",
    desc: "The best way to approach the development of the Stellar blockchain app is to install the SDK for the dedicated technology that you intend to use & connect to the Horizon network. Now, you will then be creating assets and accounts, following which you must define the transaction costs and execute the multiple transactions. You must be able to create the payment transaction and then monitor the system.",
    li1: "At Comfygen, we provide you with proactive Stellar blockchain app development services with the help of proficient experts in their respective development domains over the blockchain network. "
  },
  {
    num: "4",
    title: "How much will it cost to hire your Stellar blockchain development team for my project?",
    desc: "There is no fixed cost for hiring our Stellar blockchain app development services, as our pricing is decided based on various factors associated with your project. For instance, we will take note of the project scope, tech stack being used, workforce required, preferred engagement model, business goals, and others.",
    li1: "Don’t worry, as we are destined to keep the price as reasonable as possible without compromising on the quality of work. Our team is proficient enough to implement a proper balance between offering affordable service quotations and optimal quality. "
  },
  {
    num: "5",
    title: "How long will it take for you to get a Stellar blockchain development project ready for deployment?",
    desc: "The overall time needed to complete a Stellar blockchain development project depends on the scope. But, to give you a better insight, an average duration can somewhere be around a few weeks or a few months. We do integrate the agile development methodology for delivering projects on time with the best quality standards.",
  },
  {
    num: "6",
    title: "What are the specific types of transactions that the Stellar blockchain development solutions have to offer?",
    desc: "The Stellar development solutions have the ability to provide you with high-end transaction capabilities. Whether you intend to send out cryptocurrencies, digital currency, or fiat currency, using Stellar blockchain solutions, you will be able to do it quite conveniently and safely from almost anywhere around the globe."
  },
  {
    num: "7",
    title: "Why should one choose Comfygen for Stellar blockchain development solutions?",
    desc: "Comfygen offers you a one-stop hub for hiring the best industry-wise experts to understand your specific business requirements and how Stellar blockchain apps can help you with them. We have diverse engagement models to help attend to the specific requirements of clients and offer them a team of proficient developers to analyze their requirements and execute the development process within the decided roadmap.",
    li1:"Beyond developing your Stellar blockchain app, we also run tests before deployment and continuous maintenance after launch to ensure it performs optimally as expected."
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
            Stellar Blockchain Development
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
                    <ul>
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
