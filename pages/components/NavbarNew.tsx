import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import $ from "jquery";
const MobileApp = [
  { num: "1", name: "Mobile App Development", url: "/mobile-app-development" },
  {
    num: "2",
    name: "Application Consulting Service",
    url: "/ca/application-consulting-services",
  },
  {
    num: "2",
    name: "Hybrid Mobile App Development",
    url: "/hybrid-mobile-app-development",
  },
  { num: "3", name: "IOS App Development", url: "/ios-app-development" },
  {
    num: "4",
    name: "Android App Development",
    url: "/android-app-development",
  }
];
const BlockchainSer = [
  {
    num: "1",
    name: "Blockchain Development",
    url: "/blockchain-development",
  },
  {
    num: "2",
    name: "Blockchain Consulting Service",
    url: "/blockchain-consulting-services",
  },
  {
    num: "3",
    name: "Substrate Development Company",
    url: "/substrate-development-company",
  },
  {
    num: "4",
    name: "Polygon Blockchain Development",
    url: "/polygon-blockchain-development",
  }
];
const coin = [
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
    name: "Ethereum Token Development",
    url: "/ethereum-token-development",
  },
  {
    num: "4",
    name: "Solana Token Development",
    url: "/solana-token-development",
  }
];

export default function DesktopNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".headered").addClass("active");
      } else {
        $(".headered").removeClass("active");
      }
    });
  }, []);

  return (
    <div className="headered w-full">

      <section className="bg-[#26304F] py-3">
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div>
                  <ul className="flex gap-6 items-center justify-end"> 
                      <li className="flex items-center gap-2 text-white font-[500] text-base"> <img width={26} src="/image/india-flag.svg" alt="" /> +91 9876543210</li>
                      <li className="flex items-center gap-2 text-white font-[500] text-base"> <img width={26} src="/image/australia-flag.svg" alt="" /> +1 4753487659</li>
                      <li className="flex items-center gap-2 text-white font-[500] text-base"> <img width={26} src="/image/flag-icon.svg" alt="" /> +13 6453278653</li>
                  </ul>
              </div>
        </div>
      </section>
      <nav className="z-20 flex  bg-white ">
      <div className="flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:px-0">
      <Link
          passHref={true}
          href="/"
          className="relative flex items-center flex-shrink-0 text-white"
        >
          <Image
            src="/svg/comfygen-logo.svg"
            alt="comfygen-logo"
            width={220}
            height={51}
            priority
          />
        </Link>
        <div
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
        >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </div>
        <div
          className={
            "xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "
          }
        >
          <div className="block space-x-4 text-sm font-medium 2xl:space-x-12 lg:flex lg:items-center lg:space-y-0 lg:p-0">
            <Link href="/" passHref={true} className="head-menu relative">
              <span className="relative  block text-lg font-semibold leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9  text-[#08182b]  hover:text-[#0B70E1]">
                Home
              </span>
            </Link>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black head-menu "
              >
                <span
                  className={
                    showNav === 1
                      ? "   text-lg font-semibold"
                      : "  text-lg font-semibold text-black hover:text-[#0B70E1] "
                  }
                >
                  Services
                </span>
                {/* <MdKeyboardArrowDown className="text-black" size={18} /> */}
              </button>
              {/* <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  -left-[32rem] transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-[72rem]">
                <div className="absolute -top-2 2xl:inset-x-[34rem] xl:inset-x-[33rem] bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm h-[600px] overflow-y-auto head-scroll">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-8">
                      <div>
                        <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                          Mobile App Development
                        </p>
                        <ul className="text-sm font-medium">
                          {MobileApp.map((elem: any) => {
                            const { name, num, url } = elem;
                            return (
                              <li
                                key={num}
                                className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                              >
                                <Link
                                  onClick={() =>
                                    setShowNav(showNav === 1 ? 0 : 1)
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

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Blockchain App Development
                      </p>
                      <ul className="text-sm font-medium">
                        {BlockchainSer.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 1 ? 0 : 1)
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

                    <div className="space-y-8">
                      <div>
                        <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                          Coin And Tokens Development
                        </p>
                        <ul className="text-sm font-medium">
                          {coin.map((elem: any) => {
                            const { name, num, url } = elem;
                            return (
                              <li
                                key={num}
                                className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                              >
                                <Link
                                  onClick={() =>
                                    setShowNav(showNav === 1 ? 0 : 1)
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
              </div> */}
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black head-menu"
              >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-black"
                      : "text-lg font-semibold text-black hover:text-[#0B70E1]"
                  }
                >
                  Solutions
                </span>
                {/* <MdKeyboardArrowDown className="text-black" size={18} /> */}
              </button>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black head-menu"
              >
                <span
                  className={
                    showNav === 3
                      ? "  font-medium text-black"
                      : "text-lg font-semibold text-black hover:text-[#0B70E1]"
                  }
                >
                  Games
                </span>
                {/* <MdKeyboardArrowDown className="text-black" size={18} /> */}
              </button>
        
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black head-menu "
              >
                <span
                  className={
                    showNav === 4
                      ? "  font-medium text-black"
                      : " text-lg font-semibold text-black hover:text-[#0B70E1]"
                  }
                >
                  Sports
                </span>
                {/* <MdKeyboardArrowDown className="text-black" size={18} /> */}
              </button>
    
            </div>
            <div className="group relative ">
              <button
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-black head-menu"
              >
                <span
                  className={
                    showNav === 5
                      ? " font-medium text-black"
                      : " text-lg font-semibold text-black hover:text-[#0B70E1] "
                  }
                >
                  Company
                </span>
                {/* <MdKeyboardArrowDown className="text-black" size={18} /> */}
              </button>
        
            </div>
            <Link href="/quote" passHref={true}>
              <span className="text-[18px] font-semibold text-white head-button rounded-full px-8 py-[9px] text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative flex gap-3 items-center ">
                Get a Quote <span className="bg-white p-1 rounded-full" > 
                   <img className="w-full" src="/image/head-arrow-up.svg" alt="" />
                   </span> 
              </span>
            </Link>
          </div>
        </div>

      </div>
      </nav>
    </div>
  );
}
