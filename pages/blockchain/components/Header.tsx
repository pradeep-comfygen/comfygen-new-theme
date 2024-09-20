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

        <div className={"xl:flex hidden bg-white xl:w-auto w-full items-center text-white px-6 "
        }>
          <div className="block  font-medium  lg:space-x-2 space-x-0 lg:flex lg:items-center lg:space-y-0   lg:p-0 text-sm">
            <div className="group">
              <button onClick={() => setShowNav(showNav === 1 ? 0 : 1)} className="inline-flex items-center text-blue-900 text-base   hover:text-blue-500 border-b-2 border-transparent hover:border-red-500  px-4  py-8">
                <span className={showNav === 1 ? "mr-2 font-medium text-blue-500" : 'mr-2 font-medium '}>Blockchain </span>
                {showNav === 1 ? <MdKeyboardArrowDown className="text-blue-500" size={18} /> : <MdKeyboardArrowDown size={18} />}
              </button>
              {/* {showNav === 2 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-[400px] transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className=" grid grid-cols-1 2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto gap-6 py-6 text-sm">
                  <li className="block p-2 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href='Blockchain/crypto-token-development' passHref={true}  >
                      <span className="flex justify-between items-center">
                        Crypto token development
                        <RiCoinLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* // : null} */}
            </div>
            <div className="group">
              <button onClick={() => setShowNav(showNav === 2 ? 0 : 2)} className="inline-flex items-center text-blue-900 text-base   hover:text-blue-500 border-b-2 border-transparent hover:border-red-500  px-4  py-8">
                <span className={showNav === 2 ? "mr-2 font-medium text-blue-500" : 'mr-2 font-medium '}>Token </span>
                {showNav === 2 ? <MdKeyboardArrowDown className="text-blue-500" size={18} /> : <MdKeyboardArrowDown size={18} />}
              </button>
              {/* {showNav === 2 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-96 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className=" grid grid-cols-1 2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto gap-6 py-6 text-sm">
                  <li className="block p-2 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href='/crypto-token-development-company' passHref={true}  >

                      <span className="flex justify-between items-center">

                        Crypto token development

                        <RiCoinLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* // : null} */}
            </div>
            <div className=" group">
              <button onClick={() => setShowNav(showNav === 3 ? 0 : 3)} className="inline-flex items-center   text-blue-900 text-base  hover:text-blue-500 border-b-2 border-transparent hover:border-red-500  px-4  py-8">
                <span className={showNav === 3 ? "mr-2 font-medium text-blue-500" : 'mr-2 font-medium '}>Game </span>
                {showNav === 3 ? <MdKeyboardArrowDown className="text-blue-500" size={18} /> : <MdKeyboardArrowDown size={18} />}
              </button>
              {/* {showNav === 3 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-96 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className=" grid grid-cols-1 2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto gap-6 py-6 text-sm">
                  <li className="block p-2 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link href='/ludo-game-development' passHref={true} onClick={() => setShowNav(showNav === 3 ? 0 : 3)}>

                      <span className="flex justify-between items-center">

                        Ludo Game Development

                        <GiInvertedDice4 className="" size={22} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* :
								null} */}
            </div>

            <div className="group">
              <button onClick={() => setShowNav(showNav === 4 ? 0 : 4)} className="inline-flex items-center   text-blue-900 text-base hover:text-blue-500 border-b-2 border-transparent hover:border-red-500  px-4  py-8">
                <span className={showNav === 4 ? "mr-2 font-medium text-blue-500" : 'mr-2 font-medium '}>Company</span>
                {showNav === 5 ? <MdKeyboardArrowDown className="text-blue-500" size={18} /> : <MdKeyboardArrowDown size={18} />}
              </button>
              {/* {showNav === 4 ? */}
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white bg-transparent capitalize  overflow-hidden text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border  w-96 transform h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out origin-top">
                <ul className=" grid grid-cols-1 gap-6 2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto py-6 text-sm">
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 4 ? 0 : 4)} href='/about-us' passHref={true}  >
                      <span className="flex justify-between items-center">

                        About us

                        <RiBuilding4Line className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='/contact-us' passHref={true}  >
                      <span className="flex justify-between items-center">

                        Contact us

                        <RiCustomerService2Line className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='/career' passHref={true}  >
                      <span className="flex justify-between items-center">

                        Career at comfygen

                        <RiBriefcaseLine className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='/client-testimonials' passHref={true}  >
                      <span className="flex justify-between items-center">

                        client Testimonials

                        <RiGroupFill className="" size={22} />
                      </span>
                    </Link>
                  </li>
                  {/* <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='/life-at-comfygen' passHref={true}  >
                      <span className="flex justify-between items-center">
                        
                         life at comfygen
                       
                        <RiGroupFill className="" size={22} />
                      </span>
                    </Link>
                  </li> */}

                  <li className="block py-1.5 text-blue-900 whitespace-nowrap border-b hover:border-red-500 transition duration-150 link-underline link-underline-black hover:text-red-500">
                    <Link onClick={() => setShowNav(showNav === 5 ? 0 : 5)} href='https://www.comfygen.com/blog/' passHref={true}  >
                      <span className="flex justify-between items-center">

                        blog

                        <RiBriefcaseLine className="" size={22} />
                      </span>
                    </Link>
                  </li>

                </ul>
              </div>
              {/* : null} */}
            </div>

            {/* <Link href='https://www.comfygen.com/blog/' passHref={true}  >
              <span className="block text-base font-medium  active text-white  bg-gradient-to-b from-[#639df5] to-[#2B69ED] rounded-full px-6 lg:py-1.5 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">Blog</span>
            </Link> */}
            <Link href='/quote' passHref={true}  >
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-blue-500  to-purple-500 rounded-full px-6 lg:py-1.5 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">Quote</span>
            </Link>


          </div>
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


              <div>
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
              </div>

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
                      <p className="py-2">Career At Comfygen</p>
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