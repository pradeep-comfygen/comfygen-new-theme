import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What is the literal definition of smart contract development?",
    desc: "Smart contracts are better known as computer programs that can execute all by themselves by enforcing the terms set within the code only when the pre-set conditions are met by the users. It is one of the most renowned solutions that is used in integration with blockchain apps to ensure that all the contract’s conditions are met without the need for any intermediaries. ",
    li1: "If you are new to smart contract development and lack knowledge about its technicalities and applications, we are here to help you with the needful. Comfygen, being the best smart contract development company in India, offers you all-round guidance on what a smart contract is and how it works before you get started with your development project. ",
  },
  {
    num: "2",
    title: "What is the dedicated importance of smart contracts?",
    desc: "The importance of smart contracts is associated with the need to eliminate the need for middlemen in processing diverse business transactions. It means you won’t need any kind of broker or lawyer to take part in any agreement. Thus, you will be able to save immense money and time while getting your specific business agreements or transactions processed. ",
    li1: "Beyond being able to automate specific functionalities within the business operations, you will also be able to promote more transparency and better security. Thus, this is what makes smart contracts important across almost all industries, such as real estate, insurance, finance, healthcare, and others. ",
  },
  {
    num: "3",
    title: "What industries does Comfygen serve with its smart contract services?",
    desc: "Some of the industries that we serve at Comfygen for offering our smart contract development services include:",
    li1: "Government Sector- We have helped various government institutes create immutable or transparent records for tax collection, voting, or property management.",
    li2: "Media Sector- Our team has extended its support for helping media firms protect the copyrights of their creators and acquire relevant compensation for the work they do.",
    li3: "Real Estate Sector- Comfygen has made it easy for several real estate businesses to automate their property-related transactions through smart contracts, such as ownership transfer upon the exchange of funds. ",
    li4: "Healthcare Sector- Medical data is now made shareable across various healthcare researchers or service providers with our efficient smart contract development services.",
    li5: "Insurance Sector- We have helped our insurance industry clients develop smart contracts to automate the claims processing aspects for faster service executions. ",
  },
  {
    num: "4",
    title: "How are you assisting your clients with smart contract solutions?",
    desc: "At Comfygen, we have leading experts in the business who are proficient in designing, developing, and deploying customised smart contracts. This shall help you meet all of your specific business necessities and avail yourself of an experienced development journey for smart contracts. Our experts are highly proficient in using blockchain technology and provide necessary support to you throughout the process and beyond deployment as well.",
  },
  {
    num: "5",
    title: "What is the process that your experts at Comfygen follow for smart contract development?",
    desc: "The strategic and systematic process that we follow at Comfygen for your smart contract development needs are:",
    li1: "We try to understand the client's requests thoroughly.",
    li2: "We make efforts to learn about the business better before approaching the design process.",
    li3: "After making the architecture, we approach the coding stage and start writing the smart contracts. ",
    li4: "We will then run tests to specify if there are any vulnerabilities.",
    li5: "Deployment can now be approached alongside consistent maintenance.",
  },
  {
    num: "6",
    title: "How much time will you need to deliver the smart contract?",
    desc: "Our team is quite strict about meeting deadlines without neglecting the quality or performance of the smart contracts. ",
    li1: "However, we will still have to have a look at the requirements or complexity of the project to give you an estimated deadline.",
    li2: "The development time can range from a couple of days to several weeks, depending on what your requirements are. We will be providing you with realistic deadlines to ensure that your project gets delivered on time and within the specific budget. ",
  },
  {
    num: "7",
    title: "What is the ultimate role of smart contracts within the blockchain concept?",
    desc: "The ultimate role of smart contracts is to be the backbone of blockchain technology. This, being utilised, ensures a secure or transparent environment for promoting transactions, which you can execute automatically without taking the assistance of any mediators.",
    li1: "Moreover, smart contracts leveraging the potential of the blockchain concept will ensure that the digital assets being transferred can’t be tampered with. Blockchain and smart contracts are also meant to boost the cost-effectiveness & service efficiency of businesses by automating their operations.",
  },
  {
    num: "8",
    title: "Are you ok with signing the NDAs?",
    desc: "Yes, we do value the urge for our clients to protect their data and keep it confidential. Therefore, we readily sign the NDAs to create a positive rapport with our clients.",
  },
  {
    num: "9",
    title: "What is the most preferable blockchain platform at Comfygen?",
    desc: "At Comfygen, most of our clients prefer Ethereum as a priority for developing their smart contracts for dedicated business requirements. This popularity is mostly due to the strong infrastructure of Ethereum, alongside its support for diverse coding languages and an extensive community.",
    li1: "Apart from Ethereum, some of the other blockchain platforms, such as Binance Smart Chain, TRON, and others, are also gaining a bit of popularity in recent times. It is mostly because people are finding Ethereum to be packed with immense traffic of smart contracts by various businesses.",
  },
  {
    num: "10",
    title: "What is your overall cost of developing smart contracts?",
    desc: "Just like deciding on the timelines, we must run our required assessments on your project to provide custom price quotes. These quotations will be based on the work effort required for a specific project, alongside its complexity. ",
    li1: "You can always get in touch with us to get a free consultation about your needs or requirements and acquire the price quote right away.",
  },
  {
    num: "11",
    title: "What is the technical process of writing smart contracts over Ethereum?",
    desc: "If you want to get a glimpse at the technical process of writing smart contracts over the Ethereum network, the steps for creating the same ERC20 tokens using smart contract code are as follows:",
    li1: "First, a wallet is created over the meta-mask. ",
    li2: "One test network will be selected in the next step, and some dummy Ethers will be added to the wallet.",
    li3: "The editor remix approach will be used for writing the smart contracts with the use of Solidity coding language. ",
    li4: "Next, the .sol extension file will be created. ",
    li5: "Thus, the sample smart contract development code for creating ERC20 tokens is completed here.",
    li6: "The contract will then be deployed to production.",
  },
  {
    num: "12",
    title: "Is there any specific way for smart contracts to be validated during operations?",
    desc: "Yes, the smart contracts that are stored over the blockchain network of your choice will be validated through the specific network nodes using consensus. It means that agreements and codes that are embedded within the digital contract cannot be tampered with or changed once they have been deployed. Thus, it ensures efficient security and integrity for your smart contracts. ",
  },
  {
    num: "13",
    title: "What does the future hold for smart contract development?",
    desc: "Being one of the top smart contract development companies, Comfygen believes that these digital contracts will continue to grow in the future alongside technological advances. So far, the automation prospects of smart contracts are quite limited, but in the future, the scope of its utilisation might spread across various processes. Don't worry, as Comfygen will be ready to help you integrate the right smart contract to meet diverse automation purposes without fail. ",
  },
  {
    num: "14",
    title: "Can the smart contracts developed by you handle diverse cryptocurrencies?",
    desc: "Yes, our experts have the proficiency to add the right programming efforts onto the digital contract for automatically managing various crypto assets. In this way, smart contracts developed by us are made efficient enough to handle different cryptocurrencies.",
    li1: "For instance, you can place a request to us to create a smart contract for automating the conversion of one crypto asset to another with respect to specific conditions.",
  },
  {
    num: "15",
    title: "How secure are the smart contracts developed by your firm?",
    desc: "At Comfygen, we ensure the security of smart contracts by adding efficiency to the codes and their implementation. When the contract is written with utmost proficiency by our experts, you can expect it to offer you the highest degree of protection or security.",
    li1: "Our developers make sure to leave no room for vulnerabilities within the smart contract code, ensuring no exploitation or hacking attempts can get through. ",
  },
  {
    num: "16",
    title: "How do smart contracts differ from that of conventional contracts?",
    desc: "Smart contracts are meant to provide you with an enhanced performance, better in comparison to that of conventional contracts. It is mostly because smart contracts will help you automate the processes, minimise human errors, and reduce overall transaction costs.",
  },
  {
    num: "17 ",
    title: " How can you develop smart contracts by implementing regulatory compliance?",
    desc: "We program smart contracts to enforce compliance with specific regulations by implementing various conditions or rules that reflect the set regulatory requirements. For instance, we can create a smart contract for the financial sector to program it for enforcing KYC regulations or AML regulations.",
  },
  {
    num: "18",
    title: "Can we use smart contracts alongside conventional contracts?",
    desc: "Smart contracts can definitely be used in conjunction with conventional contracts to complement or enhance the functionalities. ",
  },
  {
    num: "19",
    title: " Can we make use of smart contracts for dApps?",
    desc: "Yes, the use of smart contracts is liable for DeFi apps, such as borrowing or lending platforms. Moreover, smart contracts are also used for developing many other platforms, which are also referred to as dApps",
  },
  {
    num: "20",
    title: "Are smart contracts capable of handling disputes?",
    desc: "We can help program smart contracts with certain parameters such that it would work as an automated mechanism for promoting dispute resolution. Thus, smart contracts do have the feasibility to sort out disputes.",
  },
  {
    num: "21",
    title: "What are the coding languages you prefer for developing smart contracts?",
    desc: "At Comfygen, our expert digital contract developers are proficient with various programming languages, such as Solidity, Rust and Vyper.",
  },
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
            Smart Contract Development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, li5, li6, } = elem;
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
                      <li>{li5}</li>
                      <li>{li6}</li>
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
