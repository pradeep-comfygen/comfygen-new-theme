import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const stacks = [
  {
    type: "blockchain", items: [
      { img: "/img/stackimg/binance.svg", alt: 'Binance', title: "Binance", url: "#", num: "1" },
      { img: "/img/stackimg/coinbase.svg", alt: 'Coinbase', title: "coinbase", url: "#", num: "2" },
      { img: "/img/stackimg/ethereum.svg", alt: 'Ethereum', title: "Ethereum", url: "/ethereum-token-development", num: "3" },
      { img: "/img/stackimg/ethers-js.svg", alt: 'Ethersjs', title: "Ethers JS", url: "#", num: "4" },
      { img: "/img/stackimg/walletconnect.svg", alt: 'Walletconnect', title: "walletconnect", url: "#", num: "5", },
      { img: "/img/stackimg/trust-wallet.svg", alt: 'Trust Wallet', title: "trust wallet ", url: "#", num: "6" },
      { img: "/img/stackimg/solona.svg", alt: 'Solona', title: "Solana", url: "/solana-token-development", num: "7" },
      { img: "/img/stackimg/polygon.svg", alt: 'Polygon', title: "Polygon", url: "/polygon-blockchain-development", num: "8" }
    ]
  },
  {
    type: "frontend", items: [
      { img: "/svg/tech/html5-original.svg", alt: 'Html5', title: "html5", url: "#", num: "1" },
      { img: "/svg/tech/css3-original.svg", alt: 'Css3', title: "css3", url: "#", num: "2" },
      { img: "/svg/tech/nextjs-original.svg", alt: 'Nextjs', title: "nextjs", url: "/next-js-development", num: "3" },
      { img: "/svg/tech/react-original.svg", alt: 'React', title: "react js", url: "react-js-development", num: "4" },
      { img: "/svg/tech/tailwindcss-plain.svg", alt: 'Tailwindcss', title: "tailwindcss", url: "#", num: "5" },
      { img: "/svg/tech/angularjs-original.svg", alt: 'Angularjs', title: "angular js", url: "#", num: "6" },
      { img: "/svg/tech/javascript-original.svg", alt: 'Javascript', title: "javascript", url: "#", num: "7" },
      { img: "/svg/tech/nodejs-original.svg", alt: 'Nodejs', title: "nodejs", url: "node-js-development", num: "8" },
    ]
  },
  {
    type: "programming", items: [
      { num: "1", img: "/images/unity-stack-technology.webp", url: "#", title: "Unity" },
      { num: "2", img: "/images/java-script.webp", url: "#", title: "Java", },
      { num: "3", img: "/images/three-js-stack-technology.webp", url: "#", title: "Three.js", },
      { num: "4", img: "/images/unreal-engine-stack-technology.webp", url: "#", title: "Unreal Engine", },
      { num: "5", img: "/images/dot-net-stack-technology.webp", url: "#", title: ".Net", },
      { num: "6", img: "/images/c++-stack-technology.webp", url: "#", title: "C++", },
      { num: "7", img: "/images/c-sharp-stack-technology.webp", url: "#", title: "C#", },
      { num: "8", img: "/images/python-stack-technology.webp", url: "/python-development", title: "Python", },
    ]
  },
  {
    type: "database", items: [
      { img: "/svg/tech/mongodb-original.svg", alt: 'Mongodb', title: "mongodb", num: "1", url: "#" },
      { img: "/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', title: "google Cloud", num: "2", url: "#" },
      { img: "/svg/tech/azure-original.svg", alt: 'Azure', title: "azure", num: "3", url: "#" },
      { img: "/svg/tech/nginx-original.svg", alt: 'Nginx', title: "nginx", num: "4", url: "#" },
      { img: "/svg/tech/digitalocean-original.svg", alt: 'Digitalocean', title: "digital ocean", num: "5", url: "#" },
      { img: "/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', title: "mysql", num: "6", url: "#" },
      { img: "/svg/tech/amazonwebservices-original.svg", alt: 'Amazonwebservices', title: "webservices", num: "7", url: "#" },
      { img: "/svg/tech/firebase-plain.svg", alt: 'amazon', title: "amazon", num: "8", url: "#" },
    ]
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);

  return (
    <div className="space-y-2 mx-auto xl:w-9/12 xl:w-5/6 w-11/12 bg-white py-10">
      <div className="flex flex-col justify-center text-center mx-auto">
        <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
        Von uns eingesetzte Entwicklungstechnologien
        </h2>
        <p className='text-base text-slate-800'>
        Wir sind bestrebt, modernste Technologien zur Entwicklung von Blockchain-Lösungen zu nutzen und stellen sicher, dass wir keinen Spielraum für weniger als die besten Blockchain-Anwendungen lassen. Durch den Einsatz modernster Entwicklungstechnologien können wir innovative, sichere und skalierbare Blockchain-Lösungen liefern, die Ihre Erwartungen erfüllen und übertreffen.
        </p>
      </div>
      <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-10 justify-start xl:w-[40%] w-full">
          {["Blockchain Frameworks", "Frontend Frameworks", "Programming Languages", "Databases"].map((title, index) => (
            <span
              key={index}
              onClick={() => setTech(tech === index ? 0 : index)}
              className={`${tech === index ? "bg-blue-600 border border-blue-600 text-white" : "bg-transparent text-blue-600 border border-blue-600"
                } px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full`}
            >
              {title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
          {stacks[tech]?.items.map((item, index) => (
            <Link key={index} href={item.url} passHref={true}>
              <div className="flex flex-col justify-center items-center rounded-lg bg-white space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
                <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                  <Image src={item.img} alt={`${item.type} ${item.num}: ${item.alt}`} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="/quote">
          <button className="shadow-2xl relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded cursor-pointer text-white w-fit group">
            Get A Free Consultation
          </button>
        </a>
      </div>
    </div>
  );
}
