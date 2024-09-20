import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function ContactLinks() {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className=" fixed z-40 lg:top-[350px] bottom-4 right-0 lg:space-y-8 space-y-0 lg:space-x-0 space-x-4 lg:bg-transparent bg-slate-800 lg:p-0 p-3 rounded-lg lg:block flex justify-center items-center">
        {/* <div className=" ">
          <a href="https://api.whatsapp.com/send?phone=919587867258" title="Whatsapp"
            target="_blank" >
            <div className="bg-[#25d366] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulse cursor-pointer">
              <svg focusable="false" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
              </svg>
              <i className="bi bi-whatsapp"></i>
            </div>
          </a>
        </div>
        <div className="">
          <a href="https://join.skype.com/invite/njrEJpEDtSRy" title="Skype"
            target="_blank" >
            <div className="bg-[#3B899B] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulseskype cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="">
          <a href="https://t.me/comfygen" title="Telegram"
            target="_blank" >
            <div className="bg-[#1F82B6] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulsetelegram cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>

            </div>
          </a>
        </div> */}
        <div className="social">
          <a href="#">
            <div className="social-btn bg-white">
              <MdOutlineWhatsapp className='text-[#03A84E]' size={38} />
              <p className="font-semibold text-lg text-black">Whatsapp</p>
            </div>
          </a>
          <a href="#">
            <div className="social-btn bg-white">
              <FaSkype className='text-[#0E72CF]' size={38} />
              <p className="font-semibold text-lg text-black">Skype</p>
            </div>
          </a>
          <a href="#">
            <div className="social-btn bg-white">
              <FaTelegram size={38} className='text-[#33A8DA]' />
              <p className="font-semibold text-lg text-black">Telegram</p>
            </div>
          </a>
          
        </div>
      </div>
      {/* <div className="flex text-white  fixed lg:bottom-1 bottom-20  z-40 text-center ">
        <a href="/contact-us" title="diwali"
          target="_blank" >
          <div className=" lg:w-[140px] w-[60px] lg:h-[140px] h-[60px] flex items-center justify-center rounded-full text-white cursor-pointer">
            <img src="/gif/happy-diwali-diwali-greeting.gif" alt="diwali offer" />
          </div>
        </a>
      </div> */}



      {/* {true && show ? (

        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen rounded-lg shadow-lg bg-black/30 px-4">
          <div className='flex items-center justify-center w-10/12 mx-auto'>
            <div className="z-10 space-y-2 rounded-md shadow-md  md:flex md:space-y-0 relative">
              <a href="/contact-us">
                <img src="/gif/critsmas.webp" alt="diwali offer" className='xl:w-[500px] w-96' />
              </a>
              <div className="flex items-center justify-center space-x-4">
                <button onClick={() => setshow(!show)} type="button" className="absolute -top-2 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-black  bg-white " title='back button'> <RxCrossCircled size={30} /></button>
              </div>
            </div>
          </div>
        </div>

      ) : null} */}

      {/* <div className="flex text-white  fixed bottom-0 w-full lg:hidden text-center ">
        <a
          href="https://api.whatsapp.com/send?phone=919587867258"
          title="Whatsapp"
          target="_blank"
          className="bg-[#075E54] p-4 py-2 text-base font-semibold   w-full uppercase"
        >
          Whatsapp
        </a>
        <span className="bg-blue-900 p-4 py-2 text-base font-semibold w-full uppercase">
          <Link href="/contact-us/#form" passHref={true}>
            Contact Us
          </Link>
        </span>
      </div> */}
      {/* <div onClick={(top)} className="fixed bottom-8 right-8 lg:block hidden">
        <div className="p-3 rounded-full relative inline-flex group items-center justify-center cursor-pointer bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] overflow-hidden">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-16 group-hover:h-16 opacity-10"></span>
          <BsChevronUp className="transition-all duration-200 ease-out text-white" size={16} />
        </div>
      </div> */}
    </>
  )
}
