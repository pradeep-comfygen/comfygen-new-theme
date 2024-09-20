import React, { useState } from "react";
import Image from "next/image";
import { url } from "inspector";

const gamedev = [
  { img: "/svg/ourgames/ludo.webp", name: "Ludo Game Development", num: "1", url: '/ludo-game-development' },
  { img: "/svg/ourgames/poker.webp", name: "Poker Game Development", num: "2", url: '/poker-game-development' },
  { img: "/svg/ourgames/rummy.webp", name: "Rummy Game Development", num: "3", url: '/rummy-game-development' },
  { img: "/svg/ourgames/baccarat.webp", name: "Baccarat Game Development", num: "4", url: '/baccarat-game-development' },
  { img: "/svg/ourgames/omaha-poker-game-development.webp", name: "Omaha Poker Game Development", num: "5", url: '/omaha-poker-game-development' },
  { img: "/svg/ourgames/video-game-development.webp", name: "Video Game Development", num: "6", url: '/video-game-development' },
  { img: "/svg/ourgames/casino-game-development.webp", name: "Casino Game Development", num: "7", url: '/casino-game-development' },
  { img: "/svg/ourgames/blackjack-game-development.webp", name: "Blackjack Game Development", num: "8", url: '/blackjack-game-development' },
  { img: "/svg/ourgames/chess-game-development.webp", name: "Chess Game Development", num: "9", url: '/chess-game-development' },
  { img: "/svg/ourgames/multigaming-plateform-app-development.webp", alt: 'Multigaming Platform App Development', name: "Multigaming Platform App Development", num: "9", url: '/multigaming-platform-app-development' },


];

const GameApiFantasy = [
  { img: "/svg/ourgames/cricket-live-line-api.webp", name: "Cricket Live Line API", num: "1", url: '/cricket-live-line-api' },
  { img: "/svg/tech/casino-live-line.webp", name: "Live Casino API Integration", num: "2", url: '/live-casino-game-api-integration' },
  { img: "/svg/ourgames/fantacy-app.webp", name: "Fantasy Sports App Development", num: "5", url: '/fantasy-sports-app-development' },
  { img: "/svg/ourgames/fantacy-website.webp", name: "Fantasy Sports Website Development", num: "6", url: '/fantasy-sports-website-development' },
  { img: "/svg/ourgames/fantacy-cricket.webp", name: "Fantasy Cricket App Development", num: "7", url: '/fantasy-cricket-app-development' },
];
const SportsBetting = [
  { img: "/svg/tech/poker-chip.webp", name: "Betting App Development", num: "3", url: '/sports-betting-app-development' },
  { img: "/svg/tech/betting.webp", name: "Sports Betting Software Development", num: "4", url: '/sports-betting-software-development' },
  { img: "/svg/tech/sports-betting website.webp", name: "Sports Betting Website Development", num: "5", url: '/sports-betting-website-development' },
  { img: "/svg/tech/cricket.webp", name: "Cricket Betting Software Development", num: "6", url: '/cricket-betting-software-development' },
  { img: "/svg/tech/snooker.webp", name: "Matka App Development Company", num: "7", url: '/satta-matka-game-app-development-company' },
];

export default function Ourgames() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}
      <section className="py-20  bg-slate-100">
        <div className=" space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className=" py-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center xl:w-3/6 mx-auto">
              Our <b className="text-[#3B82F6] font-bold"> Best Games </b>
              Development
            </h2>
          </div>
          {/* tabs */}
          <div className="flex md:flex-row flex-col items-center md:space-x-4 space-x-0 md:space-y-0 space-y-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
              }
            >
              game development
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
              }
            >
              Sports Betting Games
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer md:w-auto w-full"
              }
            >
              Fantasy & api game  development
            </span>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize">
            {tech === 0 ? (
              <>
                {gamedev.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {GameApiFantasy.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}
            {tech === 2 ? (
              <>
                {SportsBetting.map((elem: any) => {
                  const { img, name, num, url } = elem;
                  return (
                    <a
                      href={url}
                      key={num}
                      className="flex justify-start items-center rounded-lg bg-white  space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group "
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={name} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {name}
                        </h3>
                      </div>
                    </a>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
