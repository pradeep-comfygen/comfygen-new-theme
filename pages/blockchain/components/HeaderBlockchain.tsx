import Link from "next/link";
import React, { useState } from "react";
import { MdGeneratingTokens, MdSportsCricket, } from 'react-icons/md';
import { GrReactjs } from 'react-icons/gr';
import { BiShapePolygon } from 'react-icons/bi';
import { SiHiveBlockchain } from 'react-icons/si';
import { FaNodeJs, FaPython } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from 'react-icons/md';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { RiGroupFill, RiFilePaperLine, RiFlutterFill, RiBitCoinLine, RiBriefcaseLine, RiBuilding4Line, RiCoinLine, RiCompasses2Line, RiCopperCoinLine, RiCustomerService2Line, RiExchangeCnyFill, RiFileList3Line, RiGitMergeLine, RiPhoneLockLine, RiStackFill, RiStore2Line, RiWallet3Line, RiWindowFill } from 'react-icons/ri';
import { TbCoin, TbBrandAndroid } from 'react-icons/tb';
import { GiInvertedDice4, GiRadioTower, GiCardJoker, GiCartwheel, GiCricketBat, GiTabletopPlayers } from 'react-icons/gi';
import { SiEthereum, SiDogecoin } from 'react-icons/si';
import { BiMobileAlt, BiMobileVibration } from 'react-icons/bi'
import { ImCoinPound } from 'react-icons/im';
import { IoIosAddCircleOutline, IoIosRemoveCircle, IoIosRemoveCircleOutline } from 'react-icons/io';
import { VscChromeClose, VscGroupByRefType } from 'react-icons/vsc';
import { BsNewspaper } from "react-icons/bs";
export default function Header(props) {

  const [showNav, setShowNav] = useState(0)
  const [menu] = useState(false)
  const Blockchain = [
    {
      num: "1",
      name: "Blockchain Development company",
      url: "/blockchain-development",
    },
    {
      num: "2",
      name: "Altcoin Development services",
      url: "/altcoin-development-services",
    },
    {
      num: "3",
      name: "Crypto wallet development",
      url: "/crypto-wallet-development",
    },
    {
      num: "4",
      name: "Crypto exchange services",
      url: "/cryptocurrency-exchange-development",
    },
    {
      num: "5",
      name: "Crypto MLM Software development",
      url: "/cryptocurrency-mlm-software-development",
    },
    {
      num: "6",
      name: "Smart Contract MLM Software",
      url: "/smart-contract-mlm-software",
    },
    {
      num: "7",
      name: "Multichain Blockchain",
      url: "/multichain-blockchain-development",
    },
    {
      num: "8",
      name: "NFT Marketplace Development",
      url: "/nft-marketplace-development-company",
    },
    {
      num: "9",
      name: "Hyperledger Blockchain Development",
      url: "/hyperledger-blockchain-development",
    },
    {
      num: "10",
      name: "Stellar Blockchain Development",
      url: "/stellar-blockchain-development-company",
    },
    {
      num: "11",
      name: "Cardano Blockchain Development",
      url: "/cardano-blockchain-development-company",
    },
    {
      num: "12",
      name: "Solana Blockchain Development",
      url: "/solana-blockchain-development-company",
    },
  ];
  const Token = [
    {
      num: "1",
      name: "Crypto Token Development",
      url: "/crypto-token-development-company",
    },
    {
      num: "2",
      name: "ERC-20 Token Development",
      url: "/erc20-token-development",
    },
    {
      num: "3",
      name: "Ethereum token development",
      url: "/ethereum-token-development",
    },
    {
      num: "4",
      name: "Solana token development",
      url: "/solana-token-development",
    },
    { num: "5", name: "Tron token development", url: "/tron-token-development" },
    { num: "6", name: "NFT token development", url: "/nft-token-development-company" },
  ];
  const Other = [
    {
      num: 1,
      name: "Crypto White Paper Development",
      url: "/crypto-white-paper-development",
    },
    {
      num: 2,
      name: "polygon Blockchain development",
      url: "/polygon-blockchain-development",
    },
    {
      num: 3,
      name: "Smart Contract Development",
      url: "/smart-contract-development",
    },
    {
      num: 4,
      name: "DeFi Smart Contract Development",
      url: "/defi-smart-contract-development",
    },
    {
      num: 5,
      name: "DeFi Development Company",
      url: "/defi-development-company",
    },
    {
      num: 6,
      name: "dApp Development Company",
      url: "/dapp-development-company",
    },
    {
      num: 7,
      name: "Substrate Development Company",
      url: "/substrate-development-company",
    },
    {
      num: 8,
      name: "POW Blockchain Development",
      url: "/pow-blockchain-development-company",
    },
    {
      num: 9,
      name: "POA Blockchain Development",
      url: "/poa-blockchain-development-company",
    },
    {
      num: 10,
      name: "Ethereum Blockchain Development",
      url: "/ethereum-blockchain-development-company",
    },
    {
      num: 11,
      name: "Blockchain Consulting Service",
      url: "/blockchain-consulting-services",
    },
    {
      num: 12,
      name: "Metaverse Development Company",
      url: "/metaverse-development",
    }
  ];
  const Company = [
    { num: "1", name: "About us", url: "/about-us" },
    { num: "2", name: "Our Portfolio", url: "/portfolio" },
    { num: "3", name: "Career", url: "/career" },
    { num: "4", name: "Life at Comfygen", url: "/life-at-comfygen" },
    { num: "5", name: "Client testimonial", url: "/client-testimonials" },
    { num: "6", name: "Contact us", url: "/contact-us" },
    { num: "7", name: "Our Blog", url: "https://www.comfygen.com/blog/" },
  
  ];
  function toggleSlideover() {
    document.getElementById('slideover-container').classList.toggle('invisible');
    document.getElementById('slideover-bg').classList.toggle('opacity-0');
    document.getElementById('slideover-bg').classList.toggle('opacity-50');
    document.getElementById('slideover').classList.toggle('translate-x-full');
  }

  return (
    <div className="bg-white sticky top-0 z-20 border-b  ">
      <nav className="z-20 flex   items-center justify-between 2xl:w-10/12 xl:w-12/12 w-full   px-4  mx-auto py-0   ">
        <div className="flex items-center flex-shrink-0 text-white ">
          <a href="/" className="relative">
            <Image src="/images/comfygen_logo.webp" className="" alt="logo" width={225} height={48} priority />
          </a>
        </div>
        <label onClick={() => toggleSlideover()} className="flex items-center p-2 bg-slate-100 text-slate-600  rounded cursor-pointer xl:hidden my-4 m-2"  >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </label>


<div className="flex items-center gap-4">
        <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black/80 hover:text-black/100" >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-black/80"
                      : " font-medium "}>
                  Blockchain Development
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-14 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-[4rem] transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[20rem] ">
                <div className="absolute -top-2 2xl:inset-x-[9rem] xl:inset-x-[9rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Blockchain Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Blockchain.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                   
                  </div>
                </div>
              </div>
         </div>
         <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black/80 hover:text-black/100" >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-black/80"
                      : " font-medium "}>
                 Token Development
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-14 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-[4rem] transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[20rem] ">
                <div className="absolute -top-2 2xl:inset-x-[9rem] xl:inset-x-[9rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                  
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Token Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Token.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                   
                  </div>
                </div>
              </div>
         </div>
         <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black/80 hover:text-black/100" >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-black/80"
                      : " font-medium "}>
                 Crypto Development
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-14 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-[4rem] transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[20rem] ">
                <div className="absolute -top-2 2xl:inset-x-[9rem] xl:inset-x-[9rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Other Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Other.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "  >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
         </div>

         <div className="group ">
              <button
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black/80 hover:text-black/100" >
                <span
                  className={
                    showNav === 5
                      ? " font-medium text-black/80"
                      : " font-medium "} >
                  Company
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-14 lg:drop-shadow-xl lg:border whitespace-nowrap relative  2xl:right-40 xl:right-40 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                <div className="absolute -top-2 2xl:inset-x-[9rem] xl:inset-x-[9rem]   bg-white rotate-45  w-4 h-4"> {" "}
                </div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Our Company
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Company.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 5 ? 0 : 5)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Get a Quote
              </span>
            </Link>
</div>
       

        {/* mobile menu */}
        <div id="slideover-container" className="w-full h-full fixed inset-0 invisible">
          <span onClick={() => toggleSlideover()} id="slideover-bg" className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-0 "></span>
          <div id="slideover" className="md:w-96 w-80 bg-gradient-to-br from-blue-500 to-purple-500  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll">


            <div className="flex justify-end px-6 py-2 bg-transparent  sticky top-0 z-20">
              <span onClick={() => toggleSlideover()} className="bg-slate-100/10 p-2 rounded-full">
                <VscChromeClose size={24} className='text-white' />
              </span>
            </div>

            <div className="divide-y divide-white/10 text-white font-medium">

              <div>
                <Link onClick={() => toggleSlideover()} href='/' passHref={true} >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Home</p>
                  </div>
                </Link>
              </div>
              <div>
                <div onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className={showNav === 1 ? "flex justify-between p-3 items-center px-8 bg-white/10" : "flex justify-between p-3 items-center px-8 bg-transparent "}>
                  <span>
                    Development
                  </span>
                  {showNav === 1 ? <IoIosRemoveCircleOutline size={30} /> : <IoIosAddCircleOutline size={30} />}
                </div>

                {/* {showNav === 1 ? */}
                <div className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? 'max-h-full' : 'max-h-0'} `}>
                  <div className=" py-2 px-8">
                    <Link onClick={() => toggleSlideover()} href='/mobile-app-development' passHref={true}>
                      <p className="py-2">Mobile App Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/hybrid-mobile-app-development' passHref={true}>
                      <p className="py-2">Hybrid Mobile App Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/iphone-app-development' passHref={true}>
                      <p className="py-2">iOS App Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/smart-contract-mlm-software' passHref={true}>
                      <p className="py-2"> Smart Contract MLM Software</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/web-development' passHref={true}>
                      <p className="py-2">web-development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/web-design' passHref={true}>
                      <p className="py-2">	web-design</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/flutter-development-company' passHref={true}>
                      <p className="py-2">Flutter Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/mern-stack-development-services' passHref={true}>
                      <p className="py-2">Mern Stack Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/e-commerce-development' passHref={true}>
                      <p className="py-2">E-Commerce development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/node-js-development' passHref={true}>
                      <p className="py-2">Node JS Development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/react-js-development' passHref={true}>
                      <p className="py-2">React JS Development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/next-js-development' passHref={true}>
                      <p className="py-2">Next JS Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/iot-development-company' passHref={true}>
                      <p className="py-2">IoT Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/python-development' passHref={true}>
                      <p className="py-2">Python Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/react-native-development' passHref={true}>
                      <p className="py-2">React Native Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/defi-smart-contract-development' passHref={true}>
                      <p className="py-2">DeFi Smart Contract Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/android-app-development' passHref={true}>
                      <p className="py-2">Android App Development</p>
                    </Link>

                  </div>
                </div>
                {/* : null
								} */}

              </div>

              <div>
                <div onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                  className={showNav === 2 ? "flex justify-between p-3 items-center px-8 bg-white/10" : "flex justify-between p-3 items-center px-8 bg-transparent "}>
                  <span>
                    Blockchain Development
                  </span>
                  {showNav === 2 ? <IoIosRemoveCircleOutline size={30} /> : <IoIosAddCircleOutline size={30} />}
                </div>

                {/* {showNav === 2 ? */}
                <div className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 2 ? 'max-h-full' : 'max-h-0'} `}>

                  <div className=" py-2 px-8">
                    <Link onClick={() => toggleSlideover()} href='/blockchain-development' passHref={true}>
                      <p className="py-2">
                        Blockchain Development Company
                      </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/altcoin-development-services' passHref={true}>
                      <p className="py-2">Altcoin Development Services</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/cryptocurrency-exchange-development' passHref={true}>
                      <p className="py-2">Crypto Exchange Services</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/crypto-wallet-development' passHref={true}>
                      <p className="py-2">Crypto Wallet development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/cryptocurrency-mlm-software-development' passHref={true}>
                      <p className="py-2">Crypto MLM Software development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/smart-contract-development' passHref={true}>
                      <p className="py-2">
                        Smart Contract Development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/polygon-blockchain' passHref={true}>
                      <p className="py-2">
                        Polygon Blockchain </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/multichain-blockchain' passHref={true}>
                      <p className="py-2">
                        Multichain Blockchain </p>
                    </Link>

                  </div>

                </div>
                {/* : null
								} */}

              </div>


              <div>
                <div onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                  className={showNav === 3 ? "flex justify-between p-3 items-center px-8 bg-white/10" : "flex justify-between p-3 items-center px-8 bg-transparent "}>
                  <span>
                    Token Development
                  </span>
                  {showNav === 3 ? <IoIosRemoveCircleOutline size={30} /> : <IoIosAddCircleOutline size={30} />}
                </div>

                {/* {showNav === 3 ? */}
                <div className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 3 ? 'max-h-60' : 'max-h-0'} `}>
                  <ul className=" py-2 px-8 list-inside ">
                    <li>
                      <Link onClick={() => toggleSlideover()} href='/crypto-token-development-company' passHref={true}>
                        <p className="py-2">
                          Crpto Token development
                        </p>
                      </Link>
                    </li>
                    <Link onClick={() => toggleSlideover()} href='/erc20-token-development' passHref={true}>
                      <p className="py-2">ERC20 Token development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/ethereum-token-development' passHref={true}>
                      <p className="py-2">Ethereum Token Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/solana-token-development' passHref={true}>
                      <p className="py-2">Solana Token Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/tron-token-development' passHref={true}>
                      <p className="py-2">Tron Token Development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/crypto-white-paper-development' passHref={true}>
                      <p className="py-2">
                        Crypto White Paper Development
                      </p>
                    </Link>
                  </ul>
                </div>
                {/* : null
								} */}

              </div>


              {/* <div>
                <div onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className={showNav === 4 ? "flex justify-between p-3 items-center px-8 bg-white/10" : "flex justify-between p-3 items-center px-8 bg-transparent "}>
                  <span>
                    Game Development
                  </span>
                  {showNav === 4 ? <IoIosRemoveCircleOutline size={30} /> : <IoIosAddCircleOutline size={30} />}
                </div>
                <div className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 4 ? 'max-h-60' : 'max-h-0'} `}>
                  <div className=" py-2 px-8">
                    <Link onClick={() => toggleSlideover()} href='/ludo-game-development' passHref={true}>
                      <p className="py-2"> Ludo Game Development </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/poker-game-development' passHref={true}>
                      <p className="py-2">Poker Game Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/rummy-game-development' passHref={true}>
                      <p className="py-2">Rummy Game Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/baccarat-game-development' passHref={true}>
                      <p className="py-2">Baccarat Game Development</p>
                    </Link>

                    <Link onClick={() => toggleSlideover()} href='/cricket-live-line-api' passHref={true}>
                      <p className="py-2">Cricket Live Line </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/news-application-development' passHref={true}>
                      <p className="py-2">New App & Website Development</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/cricket-live-line-app-development' passHref={true}>
                      <p className="py-2">Cricket Fast Line App Development</p>
                    </Link>
                  </div>

                </div>
              </div> */}

              <div>
                <div onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                  className={showNav === 5 ? "flex justify-between p-3 items-center px-8 bg-white/10" : "flex justify-between p-3 items-center px-8 bg-transparent "}>
                  <span>
                    Our Company
                  </span>
                  {showNav === 5 ? <IoIosRemoveCircleOutline size={30} /> : <IoIosAddCircleOutline size={30} />}
                </div>

                {/* {showNav === 5 ? */}
                <div className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 5 ? 'max-h-60' : 'max-h-0'} `}>
                  <div className=" py-2 px-8">
                    <Link onClick={() => toggleSlideover()} href='/about-us' passHref={true}>
                      <p className="py-2"> About Us </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/contact-us' passHref={true}>
                      <p className="py-2"> Contact Us</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/career' passHref={true}>
                      <p className="py-2">Career </p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='/client-testimonials' passHref={true}>
                      <p className="py-2">Client Testimonials</p>
                    </Link>
                    <Link onClick={() => toggleSlideover()} href='https://www.comfygen.com/blog/' passHref={true}>
                      <p className="py-2">blog</p>
                    </Link>

                  </div>

                </div>
                {/* : null} */}

              </div>

              <div>
                <Link onClick={() => toggleSlideover()} href='https://www.comfygen.com/blog/' passHref={true} >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Blog</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link onClick={() => toggleSlideover()} href='/quote' passHref={true} >
                  <div className="flex justify-between p-3 px-8 hover:bg-white/10">
                    <p>Quote</p>
                  </div>
                </Link>
              </div>


            </div>


          </div>
        </div>

      </nav >
    </div >
  )
}