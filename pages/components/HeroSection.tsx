import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
export default function HeroSection(props: any) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 600);
    }
  }, []);
  const data = props.btnLink;
  if (!data) {
    return <div>Loading...</div>;
  }
  const [words, setWords] = useState([
    "Blockchain, Altcoin",
    "Fantasy, News App",
    "Ecommerce, MLM,",
    "Custom Web & Apps",
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      setTypedText(word.substring(0, typedText.length + 1));
    }, 100);
    if (typedText === word) {
      setTimeout(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setTypedText("");
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [currentWordIndex, typedText, words]);
  return (


    <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 py-20 ">
      <div className="xl:w-[58%] lg:w-[65%] w-full">
        <div className="">
          {props.isHome ? (
            <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem] ">
              {typedText}
              <br />
              <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33b4ff] to-[#BE5EBC]" >
                Solution & Service
              </b>
              {/* <b
                className="font-extrabold text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(270deg, #33b4ff 0%, #00649e 100%)'
                }}
              >
                Solution & Service
              </b> */}

              <br />
              Provider
            </h1>
          ) : (
            <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
              {props.heading}
            </h1>
          )}
          <p className="w-full mx-auto text-lg font-[400] text-white/80 ">
            {props.ptag}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 py-6">
          <div className="bg-[#E7E9FF] py-4 px-6 rounded-[14px] flex justify-center items-center gap-3">
            <img src="/image/hero-user-icons.svg" width={40} alt="" /> <p className="font-semibold text-[#838AE0]">100k User Engagement</p>
          </div>
          <div className="bg-[#ffefe8] py-4 px-6 rounded-[14px] flex justify-center items-center gap-3">
            <img src="/image/project-delivered-icon.svg" width={40} alt="" /> <p className="font-semibold text-[#ec7c47]">100+ Project Delivered</p>
          </div>
          <div className="bg-[#fff7df] py-4 px-6 rounded-[14px] flex justify-center items-center gap-3">
            <img src="/image/happy-client-icon.svg" width={40} alt="" /> <p className="font-semibold text-[#8c8265]">100+ Total Happy Client </p>
          </div>
        </div>

        {/* <div className="py-10">
          <Link href={props.btnLink} passHref={true}>
            <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center cursor-pointer bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white overflow-hidden">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
              <span className="relative">{props.btnName}</span>
              <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
            </div>
          </Link>
        </div> */}

        <div>
          <button className="btn btn-fix lazyloaded">
            Talk to an expert! <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738"> <path id="Path_1487529" data-name="Path 1487529" d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z" transform="translate(-521.511 -1346.214)" fill="#000"></path> </svg> </button>
        </div>

      </div>
      {/* {isMobile === false && (
        <div className="hidden w-full md:flex justify-center">
          <img
            className="object-cover"
            src={props.imgSrc}
            width={props.Width}
            height={props.Height}
            loading="eager"
            alt={props.altTag}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )} */}
    </div>

  );
}