import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import FaqSection from "../components/FaqSection";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Link from "next/link";
import styles from "./styles.module.css";
import JSON_DATA from "./json/chess.json";
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});
const AdviceSection = dynamic(() => import("../components/Advice"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("../components/BlogSection"), {
  loading: () => <p>Loading...</p>,
});
const HeroSectionForm = dynamic(() => import("../components/HeroSectionForm"), {
  loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Altcoin(props) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Chess Game Development Company In India & The USA | Hire Chess Game
          Developer
        </title>
        <meta
          name="description"
          content="Comfygen is a Top Chess Game Development Company In India & The USA. We have a team of expert. Hire dedicated Chess Game Developers at fair-minded prices. Contact us Today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/chess-game-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Chess Game Development Company In Canada &  The USA | Hire Chess Game Developer"
        />
        <meta
          property="og:description"
          content="Comfygen is a Top Chess Game Development Company In Canada & The USA. We have a team of expert. Hire dedicated Chess Game Developers at fair-minded prices. Contact us Today!"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/chess-game-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T07:02:07+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/blackjack-game.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="17 minutes" />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="First-Rate Chess Game Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Finest Chess Game Development Company in India- Get rich-featured Blackjack game software and app development solutions with the help of expert Blackjack game engineers."
        />
        <meta
          property="og:twitter_title"
          content="Top-class Chess Game Development Company in India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen is Finest Chess Game Development Company in India- Get rich-featured Blackjack game software and app development solutions with the help of expert Blackjack game engineers."
        />
        <meta property="schema:type" content="article" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="ES" />
        <meta
          name="abstract"
          content=" Blackjack game Development Organization"
        />
        <meta
          name="summary"
          content="If you're looking for an Online BlackJack Game Development firm to captivate your users with an incredible experience, Comfygen is an excellent choice."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Cricket Betting Software Development Company, firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Blackjack game development company"
          content="Comfygen provides Finest Chess Game Development Company in India- Get rich-featured Blackjack game software and app development solutions with the help of expert Blackjack game engineers."
        />
        <meta
          name="category"
          content="Leading Blackjack Game Devlopment Company"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Leading Blackjack Game Devlopment Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Blackjack Game App & Software Development Company in India "
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading="Chess Game Development Company"
                subhead="Welcome to Comfygen - Your Ultimate Chess Game Development Partner"
                ptag="Are you looking for a trustworthy and creative chess game development company In Canada & The USA, to help you realize your virtual chess vision? There is no need to look any further. Comfygen is a forerunner in the Chess Game Development Industry in Jaipur, with a proficiency of skilled chess software developers and a track record of producing great chess game development services & solutions."
                btnName="Discuss Now"
                btnLink="/contact-us"
              />
            </div>
          </div>
        </div>
        <div className="md:py-10">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Comfygen Expertise In Chess Game Development Industry
              </h2>
              <p className="text-base text-black text-justify">
                As a premier chess game software development organization, we
                specialize in crafting immersive and engaging chess game app
                development services. Our team of skilled chess game app
                developers is well-versed in the intricacies of chess dynamics
                and modern gaming technologies. From conceptualization to
                execution, we ensure the creation of robust and feature-rich
                chess game software development services.This helps you achieve
                the kind of final Game you wanted to get.
              </p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/comfygen-expertise-in-chess-game-development.webp"
                alt="Comfygen Expertise In Chess Game Development Industry"
                className="rounded-lg"
                width={612}
                height={408}
              />
            </div>
          </section>
        </div>
        <ContactFromCenter />
        <AdviceSection
          head=""
          heading="An Online Chess Game Development Company in Jaipur: Crafting Winning Moves in the Gaming World"
          ptag=" Welcome to Comfygen, your ultimate destination for innovative and engaging online chess game app and web development solutions. As a leading chess game development company based in Jaipur, India, we have established ourselves as a pioneer in the chess game development industry, driven by an unwavering passion for chess and an innate understanding of game dynamics."
          imgSrc="/img/comfygen-an-online-online-chess-game-development-company-crafting-winning-moves-in-the-gaming-world.webp"
          imgW={564}
          imgH={559}
          altTag="An Online Chess Game Development Company in Jaipur: Crafting Winning Moves in the Gaming World"
        />

        <div className="py-4 lg:py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Our knowledge and Competitive Advantages
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  At Comfygen we pride ourselves on our extensive expertise in
                  the development of chess playing software. Our team consists
                  of highly skilled chess playing software developers who have a
                  deep understanding of the nuances of the game, coupled with a
                  mastery of cutting-edge gaming technologies. This synergy
                  enables us to deliver seamless and engaging chess experiences
                  that appeal to beginners, enthusiasts and grandmasters alike.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                <div className="space-y-6 border p-6">
                  <p className="text-2xl font-bold">Key Accomplishments</p>
                  <p>
                    In the chess game app development industry, we have passed a
                    number of significant milestones.:
                  </p>
                  <div className="space-y-6 ">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Innovative Design:
                      </h3>
                      <p className="text-sm text-gray-900">
                        We seamlessly combine traditional chess principles with
                        contemporary features to ensure our games stand out in a
                        saturated market.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Global Reach:
                      </h3>
                      <p className="text-sm text-gray-900">
                        As a chess game development company in India, our
                        influence extends across borders. Our chess software
                        development solutions have earned recognition on a
                        global scale.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Client-Centric Approach:{" "}
                      </h3>
                      <p className="text-sm text-gray-900">
                        Our dedication to our clients' vision drives us to
                        create custom Chess Game Development Services that meet
                        their unique requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 border p-6">
                  <p className="text-2xl font-bold">
                    Why Pick out Comfygen for the Chess Game App Development
                    Industry?
                  </p>
                  <div className="space-y-6 ">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Unparalleled Expertise:
                      </h3>
                      <p className="text-sm text-gray-900">
                        Our team comprises seasoned Chess Game App Developers
                        and chess game developers who translate your vision into
                        captivating gaming experiences.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Comprehensive Solutions:
                      </h3>
                      <p className="text-sm text-gray-900">
                        From flawless Chess Game App Development to Chess Game
                        Software Development Solutions, we cover every aspect of
                        the game's development.{" "}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        Innovation at the Forefront:
                      </h3>
                      <p className="text-sm text-gray-900">
                        Our continuous pursuit of innovation ensures that our
                        games remain relevant, engaging, and ahead of the curve.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-semibold leading-5">
                        End-to-End Services:
                      </h3>
                      <p className="text-sm text-gray-900">
                        We offer a complete spectrum of Chess Game Development
                        Services, from concept to launch and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="py-20 bg-white">
          <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#0E1F51] ">
                Engage with the World{" "}
                <span className="text-blue-500">
                  {" "}
                  Best Chess Game Development Organization{" "}
                </span>{" "}
                - Join the A1 Chess Game Development Team{" "}
              </h2>
              <p className="text-base text-slate-800">
                Embrace the future of online chess game development services
                with Comfygen. We are not just Chess Software Providers; we are
                your partners in success. Collaborate with us to witness the
                magic of Robust Chess Game App Development and unlock the
                potential of Chess Game Software Development Services.{" "}
                <a
                  href="/contact-us"
                  className="text-blue-600 hover:underline font-bold"
                >
                  Contact us
                </a>{" "}
                today and make your move in the world of gaming excellence.
              </p>
              <h2 className="text-2xl font-bold text-[#0E1F51] ">
                Top Chess Game Development Services By Comfygen{" "}
              </h2>
              <p className="text-base text-slate-800">
                Comfygen offers A1 Chess Game Development Services, providing a
                seamless and engaging gaming experience for chess enthusiasts.
                With a talented team of Programmers and a focus on innovation,
                Comfygen ensures the creation of high-quality chess game
                development services with exceptional features and
                functionalities.
              </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {JSON_DATA.Elevating.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div
                    key={num}
                    className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                      <Image
                        width={100}
                        height={100}
                        src={img}
                        alt={title}
                        title={title}
                        className="w-16"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">
                      {title}
                    </h3>
                    <p
                      className="font-medium text-left text-black break-all transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: elem.decs }}
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image
                  src="/img/experience-excellence-in-chess-game-development.webp"
                  width={781}
                  height={521}
                  blurDataURL="URL"
                  placeholder="blur"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]"
                  alt=" Let's Craft Your Omaha Poker Gaming Experience"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-blue-900 p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Experience Excellence in Chess Game Development
                  </h2>
                  <p className="">
                    With Comfygen as your partner, you're poised to create an
                    exceptional chess game that merges tradition with
                    innovation. Our tailored solutions, cutting-edge technology,
                    and dedication to engaging gameplay ensure a seamless and
                    unforgettable chess experience for players.{" "}
                    <a
                      href="/quote"
                      className="text-black font-bold hover:underline"
                    >
                      Connect with us today
                    </a>{" "}
                    to embark on a journey of creating the next chess gaming
                    sensation.
                  </p>
                  <div className="pt-8">
                    <Link href="/contact-us" passHref={true}>
                      <button
                        type="button"
                        className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Get in touch now.
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-4 lg:py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                  Technical{" "}
                  <span className="text-blue-600">
                    {" "}
                    Details and Tech Stack{" "}
                  </span>{" "}
                  in Chess Game Development
                </h2>
                <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">
                  Behind the scenes of every captivating chess game lies a
                  meticulously crafted tech stack that powers the experience. At
                  Comfygen, we combine our passion for chess with cutting-edge
                  technologies to create seamless, immersive, and enjoyable
                  chess games. Here's a glimpse into the technical details and
                  tech stack that drive our chess game development process:
                </p>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.Feature.map((elem) => {
                  const { title, decs, num, decs1, decs2 } = elem;
                  return (
                    <>
                      <div key={num} className={styles.card}>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p>{decs}</p>
                        <p>{decs1}</p>
                        <p>{decs2}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="w-11/12 mx-auto space-y-4 2xl:w-9/12 xl:w-5/6 py-4">
            <div className="lg:flex flex-col justify-center items-center text-center border-2 p-6  lg:space-y-0 space-y-2 ">
              <p className="text-base text-slate-800">
                At ComfyGen, the synergy of our technical expertise and passion
                for chess results in chess games that not only entertain but
                also provide immersive and engaging experiences. Our carefully
                curated tech stack empowers us to create games that captivate
                players, whether they are beginners or seasoned enthusiasts. If
                you're ready to embark on a chess game development journey that
                marries strategy with technology, contact us to learn more about
                our technical prowess and capabilities.
              </p>
              <div className="py-4">
                <a href="/contact-us">
                  <button className="transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let’s Talk
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="py-3 lg:py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                  Other Games Developed By Us:{" "}
                  <span className="text-blue-600">
                    {" "}
                    Beyond Chess Game Development Discover a World of Gaming
                    Beyond Chess{" "}
                  </span>
                  with Comfygen
                </h2>
                <p className="text-base">
                  At ComfyGen, we're not just a Chess Game Development Company –
                  we're developers of immersive gaming experiences that go far
                  beyond the chessboard. While we excel in Chess Game Software
                  Development, our journey doesn't stop there. We're passionate
                  about crafting diverse games that bring joy, challenge, and
                  excitement to players of all kinds.Some of the other games
                  developed by us include:
                </p>
              </div>

              <div className="grid gap-4 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-8">
                {JSON_DATA.Bettingappservice.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div
                      key={num}
                      className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6 "
                    >
                      <Image src={img} alt={title} height={512} width={512} />
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-[#0E1F51]">
                          {title}{" "}
                        </h3>
                        <div className=" ">
                          <p className="text-base text-black text-justify tracking-tight  pr-4">
                            {decs}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {showContent ? (
                  <>
                    {JSON_DATA.Bettingappservice2.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div
                          key={num}
                          className="space-y-2 overflow-hidden text-left bg-white border rounded-xl p-6 "
                        >
                          <Image
                            src={img}
                            alt={title}
                            height={500}
                            width={500}
                          />
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-[#0E1F51]">
                              {title}{" "}
                            </h3>
                            <div className=" ">
                              <p className="text-base text-black text-justify tracking-tight  pr-4">
                                {decs}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>

              {showContent ? (
                <div className="flex justify-center items-center">
                  <button
                    className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                    onClick={() => setShowContent(!showContent)}
                  >
                    Load Less
                  </button>
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <button
                    className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative "
                    onClick={() => setShowContent(!showContent)}
                  >
                    Load More
                  </button>
                </div>
              )}
              <div className="flex flex-col justify-center lg:text-center  space-y-4 border p-6 bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                <p className="text-lg text-white">
                  ComfyGen, not just a Chess Game Development Company in India,
                  but a hub of creativity and innovation. Join us on a journey
                  that transcends traditional boundaries, exploring a world of
                  diverse and exhilarating gaming experiences.
                </p>
                <div>
                  <Link href="/contact-us" passHref={true}>
                    <button className="bg-white text-black rounded-lg px-10 hover:scale-75 transition-all duration-500 ease-in py-4 text-2xl">
                      Let's Communicate Our Experts
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Features of the{" "}
                <span className="text-blue-500">
                  Chess Game Crafted by Comfygen: <br /> A Blend of Innovation
                </span>{" "}
                and Tradition
              </h2>
              <p className="text-base text-slate-800">
                As a leading Chess Game Development Company, Comfygen takes
                immense pride in delivering a chess experience that embodies the
                perfect fusion of innovation and traditional gameplay. Our Chess
                Game Software Development showcases a range of features that
                redefine how players engage with this classic game:
              </p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-4 md:grid-cols-2 xl:gap-10">
              {JSON_DATA.Banefit.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div key={num} className="p-3 space-y-4 rounded-[17px]">
                    <div
                      className="w-24 h-24 bg-[#F45F391A] rounded-full  flex justify-center items-center"
                      style={{ backgroundColor: elem.bg }}
                    >
                      <div className="p-2 bg-white rounded-full h-14 w-14">
                        <p className="text-[26px] font-bold text-center text-[#1E293B]">
                          {num}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold   text-slate-900 group-hover:text-white">
                        {title}
                      </h3>
                      <p className="break-all    text-[#000000]  group-hover:text-white/90">
                        {decs}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="space-y-10">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">
                Unveiling Our{" "}
                <span className="text-blue-600">
                  {" "}
                  Chess Game Development Process: <br />A Game Development{" "}
                </span>
                Journey
              </h2>
              <p className="text-base">
                Embark on a journey through the meticulous Chess Game
                Development process at ComfyGen, an esteemed Chess Game
                Development Company in India. Our approach is a step-by-step
                roadmap that brings your gaming dreams to life, leveraging the
                expertise of Chess Game App Developers, Chess Game Developers,
                and Chess Software Providers.
              </p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 lg:gap-20 md:gap-18 gap-20 py-10 text-left">
              {JSON_DATA.Chess.map((elem) => {
                const { title, decs, num, img } = elem;
                return (
                  <>
                    <div
                      key={num}
                      className=" w-full p-6 text-white space-y-4 bg-gradient-to-r from-[#1A16D0]/70 to-[#A46BF2]/90 relative rounded-lg hover:scale-105 transition duration-300 "
                    >
                      <div className=" absolute -top-14 flex justify-center items-center -inset-x-1/2  ">
                        <div className="h-32 w-32 rounded-full p-5 text-black bg-white flex justify-center items-center">
                          <Image
                            src={img}
                            alt={title}
                            height={100}
                            width={100}
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold pt-10">{title}</h3>
                      <p>{decs}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="lg:flex flex-col justify-center items-center text-center lg:space-x-10 space-x-0 lg:space-y-4 space-y-2 border p-4">
            <p>
              Experience the culmination of our Chess Game Development Services
              - a game that's not just played, but lived. Partner with ComfyGen,
              where expertise meets creativity, to bring your chess game visions
              to life.
            </p>

            <div className="">
              <a href="/contact-us">
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Call Now..
                </button>
              </a>
            </div>
          </div>
        </section>
        <section
          className="w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("/img/download.jpeg")` }}
        >
          <div className="w-full py-16 bg-black/80">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              {/* text-section */}
              <div className="space-y-4 lg:text-center text-white">
                <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Overview of the technologies, frameworks, and tools used for
                  Chess Game development.
                </h2>
                <p className="text-base">
                  Comfygen, a distinguished Chess{" "}
                  <a
                    href="/game-development-company"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Game Development Company in India
                  </a>
                  , stands as a beacon of innovation and expertise in the realm
                  of game development. Our Chess Game App Developers and Chess
                  Game Developers employ an array of cutting-edge technologies
                  and tools to bring the timeless game of chess to life on
                  digital platforms.
                </p>
                <h3 className=" text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-center">
                  Crafting Excellence Through Technology:
                </h3>
                <div className="grid gap-16 pt-8 lg:grid-cols-2 md:grid-cols-2 xl:gap-20">
                  {JSON_DATA.Process.map((elem) => {
                    const { title, num, decs } = elem;
                    return (
                      <div
                        key={num}
                        className="lg:flex lg:space-x-6 lg:space-y-0 space-y-2 items-left drop-shadow-2xl"
                      >
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold text-white rounded-full bg-white/20">
                            {num}
                          </div>
                        </div>
                        <div className="text-left space-y-2">
                          <h2 className="text-lg font-semibold">{title}</h2>
                          <div>
                            <p>{decs}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-lg pt-8">
                  In the world of chess, Comfygen stands as the foremost Chess
                  Game App Development Company in India, continuously pushing
                  the boundaries of what's possible through technology. Embrace
                  the synergy of tradition and innovation, strategy and
                  technology, with our transformative Chess Game Development
                  Services.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-10" style={{ backgroundImage: `url("/img/hire-chess-game-developers-at-comfygen.png")` }}>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0  bg-[#522FFFCC]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section> */}
        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="flex flex-col justify-center text-center ">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Comfygen Stands{" "}
                  <span className="text-blue-600">
                    {" "}
                    Out as a Premier Chess{" "}
                  </span>{" "}
                  Game Development Choice
                </h2>
                <p className="text-base text-slate-800">
                  In the world of chess game development, where innovation meets
                  tradition, Comfygen emerges as a beacon of excellence. With a
                  legacy marked by creativity, expertise, and a passion for
                  crafting extraordinary gaming experiences, here's why we stand
                  as your leading choice in Chess Game Development.
                </p>
              </div>
              <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
                {JSON_DATA.SoftwareMode.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num}>
                      <div className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86">
                        <div className="flex flex-col justify-center items-center p-10">
                          <Image
                            className="object-cover"
                            src={img}
                            alt={title}
                            width={100}
                            height={100}
                          />
                          <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                            {title}
                          </h3>
                        </div>
                        <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                          <p className="tracking-normal text-sm text-white text-justify">
                            {decs}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-md "
              style={{ backgroundImage: `url("/img/have-project.webp")` }}
            >
              <section className="px-3 py-2 lg:px-14 lg:py-20">
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-3xl font-semibold leading-none text-white">
                      Choose Excellence, Choose Comfygen:
                    </h3>
                    <p className="text-base text-white pt-2">
                      When you choose Comfygen for Chess Game Development,
                      you're not just choosing a development team; you're
                      choosing a partner dedicated to making your chess game
                      dreams a reality. Join hands with us, and let's embark on
                      a strategic journey that redefines how the world
                      experiences chess. Your vision, our expertise – together,
                      we create magic.
                    </p>
                    <div className="flex items-center justify-center pt-4">
                      <a href="https://api.whatsapp.com/send?phone=919587867258">
                        <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-slate-900 w-fit group">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-full group-hover:h-60 opacity-10"></span>
                          Get a free consultation
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="About Comfygen's Chess Game Development"
        />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
