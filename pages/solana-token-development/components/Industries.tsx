import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useState } from 'react';
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";


export default function Industries() {
  return (
    <section className="py-20  bg-[#cbdaf7]">
      <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
        <div className="w-full space-y-6 text-left">
          <div className="space-y-4">
            <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
            How To Create A Token On Solana Blockchain?
            </h2>
            <p className="text-base text-black">If you don’t know how to create a Solana token online, then we can come to the rescue. You can trust our experts for a straightforward approach to creating Solana tokens for your different use cases. <a href="/solana-blockchain-development-company" className='text-blue-500 font-semibold'>Solana blockchain app devlopment</a>  offers a broad range of advantages to help you create solana token online according to your specific requirements. </p>
            <ul className="  space-y-2 pt-3 ">
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> Lower transaction fees.</li>
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> Node synchronization ensures faster transactions.</li>
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> Solana can process 7,10,000 transactions per second.</li>
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> Solana offers the benefit of clock verification.</li>
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> It also ensures uniqueness through clock verification.</li>
              <li className='flex gap-1 items-center p-0 m-0 '><VscDebugBreakpointLog className='text-[#AF66C2] w-8 h-8' /> Block time on Solana is 400 milliseconds.</li>
            </ul>
          </div>
          <div className="flex flex-row">
            <a href='/quote' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a>
          </div>
        </div>
        <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
          <Image
            className="rounded-md"
            title=" How To Create A Token On Solana Blockchain? OR (What are the Advantages of using Solana to Create Tokens?)"
            alt=" How To Create A Token On Solana Blockchain? OR (What are the Advantages of using Solana to Create Tokens?)"
            src="/img/how-to-create-a-token-on-solana-blockchain.webp"
            height={450}
            width={650}
            loader={uploadcareLoader}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
}
