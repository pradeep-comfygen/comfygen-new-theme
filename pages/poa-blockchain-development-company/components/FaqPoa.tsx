import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What are the things important for you to be prepared before you can build a PoA chain?",
    desc: "You must provide a blockchain development logo for our team to take an effort into rebranding the docs pages, explorer, status monitoring, and faucet app aspects. You must provide us with a PNG image of the logo. Following that, you must provide us with some other information to get started with the PoA blockchain development services for you, which includes:",
    li: "Give us the coin name song with the ticker and network name. ",
    li1: "Provide us your preferred block time for each of them, where the default time is 15 seconds and the minimum time you can opt for is 3 seconds.",
    li2: "Let us know the total block supply you want to avail with the PoA blockchain development services. ",
    li3: "Give us the Block Explorer domain.  ",
    li4: <p>Install Metamask on your desktop and connect the same with the <a href="/ethereum-blockchain-development-company" className='text-blue-500'>Ethereum blockchain development</a>  to get an address. This address will then be used for receiving the premine coins. Following that, when it is moved onto the network over Metamask, we will be using the address for managing premine coins.</p> ,
    li5: "You will need 4 servers, 2 of which should be set up on CentOS 7, with a minimum RAM of 8GB and 80GB storage, and the other 2 servers should be set on CentOS 7, 4GB RAM, and 40GB storage. Following this, you must provide us with the IP, SSH Username, and Root Password.  ",
    li6: "Configure the domain point explorer for the testnet and mainnet, and prepare the faucet for the testnet. Following that, you must also set the RPC for the mainnet, documentation, status page, and testnet.  ",
    decs: "Our team will be looking after all the important attributes of your PoA blockchain development solutions. If you need any kind of help in order to set up these prerequisites, our experts are here to address your queries and questions.  "
  },
  {
    num: "2",
    title: "What are some of the perks associated with PoA utilization in blockchain?",
    desc: "PoA implementation in blockchain development solutions makes the end product different from others that are built with varying consensus algorithms. Some of the benefits associated with the use of PoA blockchain development solution:",
    li: "You will be liable for processing more transactions every second with the PoA blockchain app development services. ",
    li1: "Less computational resources are required for the sake of executing the transactions, which saves a lot of energy. ",
    li2: "There is no need to install any high-end hardware.",
    li3: <p>The time interval at which the new blocks are being generated is quite predictable. On the other hand, for the PoS and <a href="/pow-blockchain-development-company" className='text-blue-500'>PoW blockchain development services</a>  algorithms, this time will definitely vary.</p> ,
    li4: "Expect a high level of tolerance to the malicious or compromised nodes. The tolerance level will start to drop only if more than 51% of the nodes are compromised within the PoA blockchain development services. We implement a specific ban mechanism for the nodes and disable the approach of revoking the block generation rights.",
  },
  {
    num: "3",
    title: " What are the different use cases associated with the PoA blockchain development?",
    desc: "PoA is favored by the consortium or private blockchains, better known as the players of the banking sector. They use the technology for facilitating the audit of fund movements, mostly for accounting purposes, with reduced expenses. It is imaginable that no banking organization will trust any entity with its own funds or build an internal solution.",
    decs: "You will need a specific clearing network for linking all of the internal tools alongside a registry that coordinates with all the incompatible solutions. With the use of a public blockchain such as Ethereum blockchain development services, Bitcoin blockchain development services, or Ripple blockchain development services, you can consider they are inconceivable, considering the state of the market or refractory mentalities of the overall banking sector. To bring together the actors who can’t trust one another naturally, a PoA blockchain development services is developed, which is considered one of the most credible solutions. "
  },
  {
    num: "4",
    title: "Is the PoA blockchain censorship considered resistant?",
    desc: "All the validating nodes associated with the PoA blockchain development services consist of enhanced power to decide on creating or implementing new blocks. For instance, you can expect to have the possibility of stopping specific transactions, generating conflicts of interest, and then compromising the network’s security. Within the context of nodes being controlled by actors who are not in a bond of trust with one another, they might have certain conflicts of interests. ",
    decs: "Therefore, implementing permanent control and consistent monitoring of the operational validity will ensure the overall stability of your system. Every block validator is encouraged to fulfill the role in a very honest way, as all the other actors will be under constant monitoring. For all the same reasons, every validator implements close monitoring of all the actions taken by the other validators. ",
    decs1: "Banking is one of the sectors that is considered centralized, and the actors operating with the strict legal or contractual framework might lose out a lot due to any adverse malicious attacks. PoA, a blockchain development services, meets individual needs within the framework, and this solution is considered to be a positive evolution towards efficiency without the need for imposing any revolution in terms of usage or any specific paradigm shift. "
  },
  {
    num: "5",
    title: "What are some pros & cons associated with the PoA blockchain development?",
    desc: "Just like any other consensus mechanism, PoA blockchain development also has its own range of pros and cons. One of the several perks of PoA is that it supports faster processing of transactions in comparison to the PoS and PoW. All the authority nodes within PoA are reputable and trusted, so the chances of your blockchain network experiencing a 51% attack are quite less.",
    decs: "On the downside of PoA blockchain development, it is often criticized for being too much centralized than it is expected to be. The blockchain network developed over PoA is only as secure as the authorities themselves are. And this might be considered as one evident point of weakness. It is because if the authorities get compromised, the entire blockchain will follow the same path. "
  },
  {
    num: "6",
    title: "Why choose Comfygen for PoA blockchain development services?",
    desc: <p>Comfygen is probably the best <span className='font-bold'>PoA blockchain development company</span>  that offers you an all-round service where our experts proficiently deal with ideation, setting up prerequisites, and creating a blueprint of the approach, development, testing, deployment, and maintenance. ",
    doc1: "We have a team of outstanding experts who are skilled and trained to offer you uncompromised PoA development services. All you have to do is reach out to our team and discuss your requirements in brief. Once you let us know your requirements, it is our duty to explain you ins & outs of the project and help you take a strong foot forward upon getting your PoA blockchain app developed.</p>,
    doc2: "Apart from that, some of the other reasons why you should choose Comfygen over others are:",
    li: "We are transparent with our clients. ",
    li1: "We offer competitive pricing for our services",
    li2: "We ensure timely delivery. ",
    li3: "We offer consistent monitoring and support, even after deployment. "}
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
           POA Blockchain Development
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
