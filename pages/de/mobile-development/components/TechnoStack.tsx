import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const stacks = [
  {
    type: "blockchain", items: [
      { img: "/img/stackimg/binance.svg", alt: ' SwiftLint', title: " SwiftLint", url: "#", num: "1" },
      { img: "/img/stackimg/coinbase.svg", alt: 'Objective-C', title: "Objective-C", url: "#", num: "2" },
      { img: "/img/stackimg/ethereum.svg", alt: ' RxSwift', title: " RxSwift", url: "/ethereum-token-development", num: "3" },
      { img: "/img/stackimg/ethers-js.svg", alt: 'CircleCI', title: "CircleCI", url: "#", num: "4" },
      { img: "/img/stackimg/walletconnect.svg", alt: 'Swift', title: "Swift", url: "#", num: "5", },
      { img: "/img/stackimg/trust-wallet.svg", alt: 'SwiftUI', title: "SwiftUI ", url: "#", num: "6" },
      { img: "/img/stackimg/solona.svg", alt: 'CocoaPods', title: "CocoaPods", url: "#", num: "7" },
    ]
  },
  {
    type: "frontend", items: [
      { img: "/svg/tech/html5-original.svg", alt: 'Java', title: "Java", url: "#", num: "1" },
      { img: "/svg/tech/css3-original.svg", alt: ' Kotlin', title: " Kotlin", url: "#", num: "2" },
      { img: "/svg/tech/nextjs-original.svg", alt: 'Fastlane', title: "Fastlane", url: "#", num: "3" },
      { img: "/svg/tech/react-original.svg", alt: 'Coroutines', title: "Coroutines", url: "#", num: "4" },
      { img: "/svg/tech/tailwindcss-plain.svg", alt: 'Dagger2', title: "Dagger2", url: "#", num: "5" },
      { img: "/svg/tech/angularjs-original.svg", alt: 'JetPack', title: "JetPack", url: "#", num: "6" },
      
    ]
  },
  {
    type: "programming", items: [
      { num: "1", img: "/images/unity-stack-technology.webp", url: "#", title: "TypeScript" },
      { num: "2", img: "/images/java-script.webp", url: "#", title: " React Native", },
      { num: "3", img: "/images/three-js-stack-technology.webp", url: "#", title: "Javascript", },
      { num: "4", img: "/images/unreal-engine-stack-technology.webp", url: "#", title: "Flutter", },
      { num: "5", img: "/images/dot-net-stack-technology.webp", url: "#", title: " Native Script", },
    ]
  },
  {
    type: "database", items: [
      { img: "/svg/tech/mongodb-original.svg", alt: 'Node.js', title: "Node.js", num: "1", url: "#" },
      { img: "/svg/tech/googlecloud-original.svg", alt: 'Ruby on Rails (RoR)', title: "Ruby on Rails (RoR)", num: "2", url: "#" },
      { img: "/svg/tech/azure-original.svg", alt: ' Python', title: " Python", num: "3", url: "#" },
      { img: "/svg/tech/nginx-original.svg", alt: ' Firebase', title: " Firebase", num: "4", url: "#" },
    ]
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);

  return (
    <div className="space-y-2 mx-auto xl:w-9/12 xl:w-5/6 w-11/12 bg-white py-10">
      <div className="flex flex-col justify-center text-center mx-auto">
        <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
        Full-Stack-Technologie für agile Projekte der mobilen App-Entwicklung
        </h2>
        <p className='text-base text-slate-800'>
        Das Arsenal an Expertise bei Comfygen ist mit erstklassigen Fähigkeiten, umfangreicher Erfahrung und einer erfolgreichen Bilanz bei der Bewältigung komplexer Projekte ausgestattet, die die Entwicklung robuster und stabiler mobiler Anwendungen gewährleisten. Diese Expertise erstreckt sich über die Kerntechnologien, einschließlich Front-End- und Back-End-Kompetenz sowie umfassender Kenntnisse einer Vielzahl von Technologien von Kotlin bis Swift.</p>
      </div>
      <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-10 justify-start xl:w-[40%] w-full">
          {["iOS-App-Entwicklung", "Android-App-Entwicklung", "Plattformübergreifende App-Entwicklung", "Backend-Entwicklung"].map((title, index) => (
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
