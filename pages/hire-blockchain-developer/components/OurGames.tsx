import React, { useState } from "react";
import Image from "next/image";

const Supported = [
  { img: "/svg/file-type-light-solidity.svg", name: "Solidity", },
  { img: "/img/chaincode.webp", name: "Chaincode", },
  { img: "/img/consensus-alogorithm.webp", name: "Consensus Alogorithm", },
  { img: "/img/etherum-virtual-machine.webp", name: "Etherum Virtual Machine", },
  { img: "/img/dapp.webp", name: "dApp", },
];

const Containerization = [
  { img: "/img/docker.webp", name: "Docker", },
  { img: "/img/kubernetes.webp", name: "Kubernetes", },
  { img: "/img/elastic-box.webp", name: "Elastic Box", },
  { img: "/img/eks-ecr.webp", name: "EKS/ECR", },
];

const Cryptocurrencies = [
  { img: "/img/eks-ecr.webp", name: "ECR", },
  { img: "/img/bitcoin.webp", name: "Bitcoin", },
  { img: "/img/ethererum.webp", name: "Ethereum", },
  { img: "/img/ripple-xpr.webp", name: "Ripple (XPR)", },
  { img: "/img/xpr.webp", name: "XPR", },
  { img: "/img/hire-blockchain-stellar.webp", name: "Stellar", },
  { img: "/img/hire-blockchain-tron.webp", name: "Tron", },
  { img: "/img/doge.webp", name: "DOGE", },
];
const ApiIntegration = [
  { img: "/img/binance.webp", name: "Binance", },
  { img: "/img/coinbase.webp", name: "Coinbase", },
  { img: "/img/swytx.webp", name: "Swytx", },
  { img: "/img/xpr.webp", name: "XPR", },
  { img: "/img/cardano.webp", name: "Cardano", },
];
const TransactionalComponent = [
  { img: "/img/hire-blockchain-smart-contract.webp", name: "Smart Contract", },
  { img: "/img/gas-limit-transactions.webp", name: "Gas Limit, Transactions", },
  { img: "/img/gas-optimisation.webp", name: "Gas Optimisation", },
  { img: "/img/fungible-token.webp", name: "Fungible Token", },
  { img: "/img/nft.webp", name: "NFT", },
  { img: "/img/ico.webp", name: "ICO", },
];
const NetworkSecurity = [
  { img: "/img/node.webp", name: "Node", },
  { img: "/img/ledger.webp", name: "Ledger", },
  { img: "/img/wallet.webp", name: "Wallet", },
  { img: "/img/nonce.webp", name: "Nonce", },
  { img: "/img/hash.webp", name: "Hash", },
];
const Ledgers = [
  { img: "/img/public-ledger.webp", name: "Public Ledger", },
  { img: "/img/distributed-ledger.webp", name: "Distributed Ledger", },
  { img: "/img/decentralized-ledger.webp", name: "Decentralized Ledger", },
];
const Wallets = [
  { img: "/img/my-ether-wallet.webp", name: "MyEther Wallet", },
  { img: "/img/metamask-wallet.webp", name: "MetaMask Wallet", },
  { img: "/img/non-custodial-wallets.webp", name: "Non-Custodial Wallet", },
  { img: "/img/mobile-wallets.webp", name: "Mobile Wallets", },
  { img: "/img/paper-wallet.webp", name: "Paper Wallet", },
  { img: "/img/hardware-wallet.webp", name: "Hardware Wallet", },
  { img: "/img/desktop-wallet.webp", name: "Desktop Wallet", },
];
const Languages = [
  { img: "/img/node.webp", name: "Node.js", },
  { img: "/img/golang.webp", name: "Golang", },
  { img: "/img/javascript-jquery.webp", name: "JavaScript/JQuery", },
  { img: "/img/angular.webp", name: "Angular", },
  { img: "/img/java.webp", name: "Java", },
];

export default function Ourgames() {
  const [tech, setTech] = useState(0);
  const technologyData = [Supported, Containerization, Cryptocurrencies, ApiIntegration, TransactionalComponent, NetworkSecurity, Ledgers, Wallets, Languages];

  return (
    <section className="py-10">
      <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="font-bold text-2xl 2xl:text-4xl xl:text-3xl text-[#0E1F51] text-center">Technology Included Blockchain Development</h2>
          <p>Hire offshore Blockchain developers with expertise in the newest Blockchain technology to create custom apps that meet your company's needs:</p>
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-6 overflow-x-auto whitespace-nowrap">
          {["Supported Environment", "Containerization", "Cryptocurrencies", "API Integration", "Transactional Component", "Network & Security", "Ledgers", "Wallets", "Languages"].map((label, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={`border border-blue-600 ${tech === index ? "bg-blue-600 text-white" : "bg-transparent text-blue-600"} px-4 py-2 text-sm font-bold rounded-full capitalize cursor-pointer w-full`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 capitalize">
          {technologyData[tech].map((elem, index) => (
            <a
              key={index}
              className="flex items-center justify-start rounded-lg bg-slate-200 space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center">
                <Image src={elem.img} alt={elem.name} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{elem.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
