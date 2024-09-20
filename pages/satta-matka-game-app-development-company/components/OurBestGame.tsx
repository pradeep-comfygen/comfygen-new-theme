import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";




const bettinggames = [
  { num: "1", title: "Sports Betting App Development", bg: "#F45F391A", url: "/sports-betting-app-development", img: "/images/sports-btting-app-development.webp" },
  { num: "2", title: "Sports Betting Software Development  ", bg: "#9A4ECC1A", url: "/sports-betting-software-development", img: "/images/sports-betting-softyware-development.webp" },
  { num: "3", title: "Sports Betting Website Development  ", bg: "#2390FB1A", url: "/sports-betting-website-development", img: "/img/sports-betting-website-development.webp" },
  { num: "4", title: "Cricket Betting Software Development  ", bg: "#F9F0E2", url: "/cricket-betting-software-development", img: "/images/cricket-betiing-software-development.webp" },
];

const fantasygames = [
  { num: "1", title: "Fantasy Sports App Development", bg: "#F45F391A", url: "/fantasy-sports-app-development", img: "/images/fantasy-sports-app-development.webp" },
  { num: "2", title: "Fantasy Sports Website Development", bg: "#9A4ECC1A", url: "/fantasy-sports-website-development", img: "/img/fantasy-sports-wibsites-development.webp" },
  { num: "3", title: "Fantasy Cricket App Development", bg: "#2390FB1A", url: "/fantasy-cricket-app-development", img: "/img/fantasy-cricket-app-development.webp" },
];

const apigames = [
  { num: "1", title: "Cricket Live Line API", bg: "#F45F391A", url: "/cricket-live-line-api", img: "/img/cricket-live-line-api.webp" },
  { num: "2", title: "Live Casino API Integration", bg: "#9A4ECC1A", url: "/live-casino-game-api-integration", img: "/img/live-casino-api-intrgration.webp" },
];

const Panelheader = [
  {
    num: "01",
    title: "Our Best-in-Class Satta Matka Gaming Applications and Result API’s Development Services",
    decs: <p className="text-base  text-[#475569]">Comfygen provides you best satta matka game app development services that include high-quality, top-rated <Link href="/mobile-game-development-company" passHref={true} className="text-blue-600 hover:underline font-bold">mobile game development services</Link>or Android and iOS. Our gaming app development includes a wide range of services such as Web Game App Development, Blockchain Game App Development, <Link href="/nft-game-development-company" passHref={true} className="text-blue-600 hover:underline font-bold">NFT Game App Development </Link>, Web3 Game App Development, and many more.  </p>,
  },
];



export default function OurBestGame() {
  const [tech, setTech] = useState(0);
  return (

    <section className=" bg-black bg-no-repeat bg-center bg-cover bg-fixed" style={{ backgroundImage: `url("/img/mobile-app-solution.webp")`, }}>
      <div className='bg-[#0E1F51]/80  py-20 '>
      <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white p-8 rounded-[12px]">
        {Panelheader.map((elem: any) => {
          const { title, decs, num } = elem;
          return (
            <div key={num} className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                {title}
              </h2>
              {decs}
            </div>
          );
        })}
          {/* <div className="xl:flex justify-center items-center w-full ">
            <div className="flex flex-col items-center space-y-4 xl:justify-center justify-start overflow-x-auto xl:w-[40%] w-full bg-white p-6 xl:m-20  xl:shadow-2xl">
              <span
                onClick={() => setTech(tech === 0 ? 0 : 0)}
                className={
                  tech === 0
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                    : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                }
              >
                Betting Game Development
              </span>
              <span
                onClick={() => setTech(tech === 1 ? 0 : 1)}
                className={
                  tech === 1
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                    : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                }
              >
                Fantasy Game Development
              </span>
              <span
                onClick={() => setTech(tech === 2 ? 0 : 2)}
                className={
                  tech === 2
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                    : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer xl:w-80 w-full"
                }
              >  Game Development API
              </span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
              {tech === 0 ? (
                <>
                  {bettinggames.map((elem: any) => {
                    const { img, num, title, url } = elem;
                    return (
                      <Link href={url} passHref={true}>
                        <div key={num}
                          className="flex items-center justify-center p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                          <div className="flex items-center justify-center ">
                            <Image src={img} alt={title} width="40" height="40" />
                          </div>
                          <h3 className="text-base font-bold text-black">
                            {title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </>
              ) : null}

              {tech === 1 ? (
                <>
                  {fantasygames.map((elem: any) => {
                    const { img, title, num, url } = elem;
                    return (
                      <Link href={url} passHref={true}>
                        <div key={num}
                          className="flex items-center justify-center p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                          <div className="flex items-center justify-center ">
                            <Image src={img} alt={title} width="40" height="40" />
                          </div>
                          <h3 className="text-base font-bold text-black">
                            {title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </>
              ) : null}

              {tech === 2 ? (
                <>
                  {apigames.map((elem: any) => {
                    const { img, num, title, url } = elem;
                    return (
                      <Link href={url} passHref={true}>
                        <div key={num}
                          className="flex items-center  p-4 space-x-2 rounded-lg border-2 border-dashed border-[#121212]" style={{ backgroundColor: elem.bg }}>
                          <div className="flex items-center justify-center ">
                            <Image src={img} alt={title} width="40" height="40" />
                          </div>
                          <h3 className="text-base font-bold text-black">
                            {title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </>
              ) : null}

            </div>
          </div> */}
        <div className="flex justify-center items-center py-4">
          <a href="/contact-us" >
            <button className="shadow-2xl relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group gap-3">
              Let’s Get Our Best Games Development App Now <FaArrowRight />
            </button>
          </a>
        </div>

      </div>
      </div>
     
    </section>


  );
}
