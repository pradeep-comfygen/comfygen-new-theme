import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const stacks = [
  {
    title: "Blockchain", data: [
      { img: "/img/stackimg/binance.svg", title: "Binance", url: "#" },
      { img: "/img/stackimg/coinbase.svg", title: "Coinbase", url: "#" },
      { img: "/img/stackimg/ethereum.svg", alt: 'Ethereum', title: "Ethereum", url: "/ethereum-token-development", },
      { img: "/img/stackimg/ethers-js.svg", title: "Ethers JS", url: "#", },
      { img: "/img/stackimg/walletconnect.svg", title: "walletconnect", url: "#", },
      { img: "/img/stackimg/trust-wallet.svg", title: "trust wallet ", url: "#", },
      { img: "/img/stackimg/solona.svg", title: "Solana", url: "/solana-token-development", },
      { img: "/img/stackimg/polygon.svg", title: "Polygon", url: "/polygon-blockchain-development", }
    ]
  },
  {
    title: "Frontend", data: [
      { img: "/svg/tech/html5-original.svg", title: "HTML5", url: "#" },
      { img: "/svg/tech/css3-original.svg", title: "CSS3", url: "#" },
      { img: "/svg/tech/nextjs-original.svg", title: "nextjs", url: "/next-js-development", },
      { img: "/svg/tech/react-original.svg", title: "react js", url: "react-js-development", },
      { img: "/svg/tech/tailwindcss-plain.svg", title: "tailwindcss", url: "#", },
      { img: "/svg/tech/angularjs-original.svg", title: "angular js", url: "#", },
      { img: "/svg/tech/javascript-original.svg", title: "javascript", url: "#", },
      { img: "/svg/tech/nodejs-original.svg", title: "nodejs", url: "node-js-development", },
    ]
  },
  {
    title: "Programming", data: [
      { img: "/images/unity-stack-technology.webp", title: "Unity", url: "#" },
      { img: "/images/java-script.webp", title: "Java", url: "#" },
      { img: "/images/three-js-stack-technology.webp", url: "#", title: "Three.js", },
      { img: "/images/unreal-engine-stack-technology.webp", url: "#", title: "Unreal Engine", },
      { img: "/images/dot-net-stack-technology.webp", url: "#", title: ".Net", },
      { img: "/images/c++-stack-technology.webp", url: "#", title: "C++", },
      { img: "/images/c-sharp-stack-technology.webp", url: "#", title: "C#", },
      { img: "/images/python-stack-technology.webp", url: "/python-development", title: "Python", },
    ]
  },
  {
    title: "Database", data: [
      { img: "/svg/tech/mongodb-original.svg", title: "MongoDB", url: "#" },
      { img: "/svg/tech/googlecloud-original.svg", title: "Google Cloud", url: "#" },
      { img: "/svg/tech/azure-original.svg", title: "azure", url: "#" },
      { img: "/svg/tech/nginx-original.svg", title: "nginx", url: "#" },
      { img: "/svg/tech/digitalocean-original.svg", title: "digital ocean", url: "#" },
      { img: "/svg/tech/mysql-original-wordmark.svg", title: "mysql", url: "#" },
      { img: "/svg/tech/amazonwebservices-original.svg", title: "webservices", url: "#" },
      { img: "/svg/tech/firebase-plain.svg", title: "amazon", url: "#" },
    ]
  },
];



export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    // <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white  py-10">
    //   {Panelheader.map((elem: any) => {
    //     const { title, } = elem;
    //     return (
    //       <div className="flex flex-col justify-center text-center  mx-auto">
    //         <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
    //           {title}
    //         </h2>
    //       </div>
    //     );
    //   })}
    //   <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
    //     <div className="flex flex-col items-start space-y-10  justify-start xl:w-[40%]  w-full">
    //       <span
    //         onClick={() => setTech(tech === 0 ? 0 : 0)}
    //         className={
    //           tech === 0
    //             ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //             : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //         }
    //       >
    //         Blockchain Frameworks
    //       </span>
    //       <span
    //         onClick={() => setTech(tech === 1 ? 0 : 1)}
    //         className={
    //           tech === 1
    //             ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //             : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //         }
    //       >
    //         Frontend Frameworks
    //       </span>
    //       <span
    //         onClick={() => setTech(tech === 2 ? 0 : 2)}
    //         className={
    //           tech === 2
    //             ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //             : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //         }
    //       > Programming Languages
    //       </span>
    //       <span
    //         onClick={() => setTech(tech === 3 ? 0 : 3)}
    //         className={
    //           tech === 3
    //             ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //             : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
    //         }
    //       > Databases
    //       </span>
    //     </div>
    //     <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
    //       {tech === 0 ? (
    //         <>
    //           {BlockchainStack.map((elem: any) => {
    //             const { img, num, title, url, bg } = elem;
    //             return (
    //               <Link href={url} passHref={true}>
    //                 <div
    //                   key={num}
    //                   className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
    //                 >
    //                   <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
    //                     <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
    //                   </div>
    //                   <div>
    //                     <h3 className="text-lg font-semibold text-black">
    //                       {title}
    //                     </h3>
    //                   </div>
    //                 </div>
    //               </Link>
    //             );
    //           })}
    //         </>
    //       ) : null}

    //       {tech === 1 ? (
    //         <>
    //           {FrontendStack.map((elem: any) => {
    //             const { img, title, num, url, bg } = elem;
    //             return (
    //               <Link href={url} passHref={true}>
    //                 <div
    //                   key={num}
    //                   className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
    //                 >
    //                   <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
    //                     <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
    //                   </div>
    //                   <div>
    //                     <h3 className="text-lg font-semibold text-black">
    //                       {title}
    //                     </h3>
    //                   </div>
    //                 </div>
    //               </Link>
    //             );
    //           })}
    //         </>
    //       ) : null}

    //       {tech === 2 ? (
    //         <>
    //           {ProgrammStack.map((elem: any) => {
    //             const { img, num, title, bg, url } = elem;
    //             return (
    //               <Link href={url} passHref={true}>
    //                 <div
    //                   key={num}
    //                   className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
    //                 >
    //                   <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
    //                     <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
    //                   </div>
    //                   <div>
    //                     <h3 className="text-lg font-semibold text-black">
    //                       {title}
    //                     </h3>
    //                   </div>
    //                 </div>
    //               </Link>
    //             );
    //           })}
    //         </>
    //       ) : null}
    //       {tech === 3 ? (
    //         <>
    //           {DatabaseStack.map((elem: any) => {
    //             const { img, num, title, bg, url } = elem;
    //             return (
    //               <Link href={url} passHref={true}>
    //                 <div
    //                   key={num}
    //                   className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
    //                 >
    //                   <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
    //                     <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
    //                   </div>
    //                   <div>
    //                     <h3 className="text-lg font-semibold text-black">
    //                       {title}
    //                     </h3>
    //                   </div>
    //                 </div>
    //               </Link>
    //             );
    //           })}
    //         </>
    //       ) : null}

    //     </div>
    //   </div>
    // </div>

    <div className="space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white py-10">
      <div className="flex flex-col justify-center text-center mx-auto">
        <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Blockchain Development Tech Stack We Use
        </h2>
      </div>
      <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-10 justify-start xl:w-[40%] w-full">
          {stacks.map((stack, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={`${tech === index ? "bg-blue-600 text-white" : "bg-transparent text-blue-600"
                } border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full`}
            >
              {stack.title} Frameworks
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
          {stacks[tech].data.map((elem, index) => (
            <Link key={index} href={elem.url} passHref>
              <div className="flex flex-col justify-center items-center rounded-lg bg-white space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
                <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                  <Image src={elem.img} alt={elem.title} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{elem.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
