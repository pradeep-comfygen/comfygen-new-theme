import { useState } from 'react';

const Frequently = [
  {
    num: "1",
    title: "What platforms and blockchain networks do NFT Token Development Companies support?",
    desc: "The NFT Token Development Company is expertise and skilled in blockchain development company and other decentralized development solutions. They can work on multiple platforms and blockchain networks; such as Ethereum, BSC, Polygon, Solana, Avalanche, and Harmony.",
  },
  {
    num: "2",
    title: "Do NFT Token Development Companies provide consultation on NFT token standards?",
    desc: "The NFT Token Development Company will provide you consultation for the design and development of the tokens, and also advise you with the best suited token standards, security measures, and other decentralized development solutions. "
  },
  {
    num: "3",
    title: "How long does it take to build NFT Tokens?",
    desc: "It won’t take longer. The NFT Token Development Company will take nearly a week or 10 days to build the NFT Token. From the comprehensive ideologies to setting up the business model to the creation to deployment; the decentralized and blockchain solutions development company will do everything possible.",
  },
  {
    num: "4",
    title: "What is the cost of NFT Token Development?",
    desc: "The average cost of NFT Token Development will be $50000. This cost may increase, which varies upon different factors; such as: Platform, technology, design & user interface, features & functionalities, security practices, and even the compliance requirements."
  },
  {
    num: "5",
    title: "Can NFT Token Development Companies assist with token minting and issuance?",
    desc: "Obviously yes, the NFT Token Development Companies are expert and aware of all the decentralized aspects. They know about development, token minting, token insurance, and other NFT Service solutions. So if you take assistance from the developers, then feel free to come to consult. Our expert professionals will assist with proficient solutions about token minting and insurance."
  },
  {
    num: "6",
    title: "Will the NFT Token Development Company provide maintenance and support after deployment?",
    desc: "Yes, the NFT Token Development Company will provide maintenance and support. It is our responsibility to provide support and maintenance after deployment, so that the token will run smoothly with no technical glitches and bugs."
  },
  {
    num: "7",
    title: "What are the best practices for NFT token development?",
    desc: "NFT tokens can be created through various blockchain platforms; and every platform has its own token standardization. The most common token standards are ERC-721 and ERC-1155, which is on Ethereum. It is very important to choose the right compatibility with different blockchain platforms and marketplaces."
  },
  {
    num: "8",
    title: "What is the process of NFT Token Development?",
    desc: "The NFT Token Development Services follow a certain process, and following that the NFT token will be created. Here is the process of token development-",
    li: "Foremost, the developers will do requirement analysis. They will gather requirements, check upon the features to integrate, and also create plans for further development process.",
    li2: "Later it continues with designing, where the developer will get done with smart contract application documentation, data flow chart, designing the architecture of NFT wallet development, and work on the data protection & security measures. ",
    li3: "Now it comes to the development, where the technology integrates and the development process will take place. Also in this stage, the errors will be identified for the rectification.",
    li4: "Once the design and development tasks are done, the NFT Token will be deployed by the developers on its main network.",
    li5: "Once the NFT token is deployed; then blockchain developers will update new features and also prioritize the backlogs for processing the token smoothly in the marketplace. ",
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
            NFT Marketplace Development
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
                    <ul className='px-3'>
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
