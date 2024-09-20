import React, { useState } from "react";
import Image from "next/image";

const techData = {

  backend: [
    { img: "/svg/tech/mongodb-original.svg", alt: 'Mongodb', name: "mongodb", num: "1" },
    { img: "/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', name: "google Cloud", num: "2" },
    { img: "/svg/tech/azure-original.svg", alt: 'Azure', name: "azure", num: "3" },
    { img: "/svg/tech/nginx-original.svg", alt: 'Nginx', name: "nginx", num: "4" },
    { img: "/svg/tech/digitalocean-original.svg", alt: 'Digitalocean', name: "digital ocean", num: "5" },
    { img: "/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', name: "mysql", num: "6" },
    { img: "/svg/tech/amazonwebservices-original.svg", alt: 'Amazonwebservices', name: "amazon webservices", num: "7" },
    { img: "/svg/tech/javascript-original.svg", alt: 'Javascript', name: "javascript", num: "8" },
    { img: "/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "nodejs", num: "9" },
    { img: "/svg/tech/firebase-plain.svg", alt: 'Mofirebasengodb', name: "amazon", num: "10" },
    { img: "/svg/tech/angularjs-original.svg", alt: 'Angularjs', name: "angular js", num: "11" },
    { img: "/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "12" },

  ],

  frontend: [
    { img: "/svg/tech/html5-original.svg", alt: 'Html5', name: "html5", num: "1" },
    { img: "/svg/tech/css3-original.svg", alt: 'Css3', name: "css3", num: "2" },
    { img: "/svg/tech/nextjs-original.svg", alt: 'Nextjs', name: "nextjs", num: "3" },
    { img: "/svg/tech/react-original.svg", alt: 'React', name: "react js", num: "4" },
    { img: "/svg/tech/tailwindcss-plain.svg", alt: 'Tailwindcss', name: "tailwindcss", num: "5" },
    { img: "/svg/tech/angularjs-original.svg", alt: 'Angularjs', name: "angular js", num: "6" },
    { img: "/svg/tech/javascript-original.svg", alt: 'Javascript', name: "javascript", num: "7" },
    { img: "/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "8" },
    { img: "/svg/tech/bootstrap-original.svg", alt: 'Bootstrap', name: "bootstrap", num: "9" },

  ],
  mobile: [
    { img: "/svg/tech/android-plain.svg", alt: 'Android Plan', name: "android", num: "1" },
    { img: "/svg/tech/apple-original.svg", alt: 'Apple', name: "IOS Apple", num: "2" },
    { img: "/svg/tech/react-original.svg", alt: 'React', name: "react native", num: "3" },
    { img: "/svg/tech/flutter-plain.svg", alt: 'Flutter', name: "flutter", num: "4" },
    { img: "/svg/tech/dart-original.svg", alt: 'Dart', name: "dart", num: "5" },
    { img: "/svg/tech/unity-original.svg", alt: 'Unity', name: "unity", num: "6" },
    { img: "/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "7" },
  ],

  design: [
    { img: "/svg/tech/figma.svg", alt: 'Figma', name: "figma", num: "1" },
    { img: "/svg/tech/photoshop.svg", alt: 'Photoshop', name: "photoshop", num: "2" },
    { img: "/svg/tech/abdobe-illustrator.svg", alt: 'Abdobe Illustrator', name: " illustrator", num: "3" },
    { img: "/svg/tech/abdobe-xd.svg", alt: 'Abdobe Xd', name: "abdobe xd", num: "4" },
    { img: "/svg/tech/skech.svg", alt: 'Skech', name: "skech", num: "5" },
    { img: "/svg/tech/after-effect.svg", alt: 'After Effect', name: "after effect", num: "6" },

  ],

  crypto: [
    { img: "/img/stackimg/binance.svg", alt: 'Binance', name: "Binance", num: "1" },
    { img: "/img/stackimg/cardano.svg", alt: 'Cardano', name: "Cardano ", num: "2" },
    { img: "/img/stackimg/coinbase.svg", alt: 'Coinbase', name: "coinbase", num: "3" },
    { img: "/img/stackimg/eos.svg", alt: 'EOS', name: "EOS", num: "4" },
    { img: "/img/stackimg/ethereum.svg", alt: 'Ethereum', name: "Ethereum", num: "5" },
    { img: "/img/stackimg/ethers-js.svg", alt: 'Ethersjs', name: "Ethers JS", num: "6" },
    {
      img: "/img/stackimg/walletconnect.svg",
      alt: 'Walletconnect', name: "walletconnect",
      num: "7",
    },
    { img: "/img/stackimg/trust-wallet.svg", alt: 'Trust Wallet', name: "trust wallet ", num: "8" },
    { img: "/img/stackimg/solona.svg", alt: 'Solona', name: "Solana", num: "9" },
    { img: "/img/stackimg/polygon.svg", alt: 'Polygon', name: "Polygon", num: "10" },
    { img: "/img/stackimg/polkadot.svg", alt: 'Polkadot', name: "polkadot", num: "11" },
    { img: "/img/stackimg/metamask.svg", alt: 'Metamask', name: "metamask", num: "12" },
  ],
};



export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      <section className="lg:py-16 py-10 bg-[#26304F]">
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="py-4">
                <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-start ">
                  Our <b className="text-[#fff] font-bold"> Fluent </b>
                  Technology Using in Development Stack
                </h2>
                <p className="text-lg mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates ea dicta quos dolorum. Aspernatur ipsam eius nobis doloribus impedit ducimus, libero non repellendus quis inventore nemo ullam mollitia dolores?</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 justify-start mt-2">
                {Object.keys(techData).map((key, index) => (
                  <span
                    key={index}
                    onClick={() => setTech(index)}
                    className={
                      tech === index
                        ? "bg-blue-600 border border-blue-600 text-white px-8 py-2 text-lg font-semibold rounded-full capitalize cursor-pointer"
                        : " text-black bg-white px-8 py-2 text-lg font-semibold rounded-full capitalize cursor-pointer"
                    }
                  >
                    {key}
                  </span>
                ))}
              </div>
              <div>
                <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                  Get In Touch <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 gap-6 relative pt-6 capitalize">
                {techData[Object.keys(techData)[tech]].map((elem) => (
                  <div
                    key={elem.num}
                    className="flex justify-start items-center rounded-lg bg-white space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  >
                    <div className="h-16 w-16  font-semibold flex items-center justify-center ">
                      <Image src={elem.img} alt={elem.name} width={50} height={50} loading="lazy" className="group-hover:scale-105 transition-all duration-200 transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {elem.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
