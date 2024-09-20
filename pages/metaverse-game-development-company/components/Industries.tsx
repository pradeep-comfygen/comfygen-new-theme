import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useState } from 'react';
import Image from "next/image";

export default function Industries() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
        <div className="flex justify-center  lg:justify-start pb-10 lg:pb-0 w-full">
          <Image
            className="rounded-md"
            title="How Comfygen Can Help in Blockchain Consulting"
            alt="How Comfygen Can Help in Blockchain Consulting"
            src="/metaverse/comfygen-programmers-metaverse-for-diverse-for-industries.webp"
            height={450}
            width={650}
            loader={uploadcareLoader}
            unoptimized={true}
          />
        </div>
        <div className="w-full space-y-6 text-left">
          <div className="space-y-4">
            <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
              Comfygen Programmers Metaverse For Diverse Industries
            </h2>
            <p className="text-base text-black">Metaverse has become one of the prominent technologies that would change the course of operations in different industries. It has found its way into different types of use cases with innovative potential for business transformation. Our metaverse game development expertise has helped businesses across multiple industries.</p>
            <ul className="px-3 list-disc space-y-1">
              <a href="/game-development-company"><li>Gaming</li></a>
              <a href="/e-commerce-app-development"><li>Ecommerce</li></a>
              <li>Education</li>
              <li>Tourism</li>
              <li>Fashion</li>
              <li>Entertainment</li>
              <li>Real estate</li>
              <li>Finance</li>
              <li>Social Media</li>
            </ul>
          </div>
          <div className="flex flex-row">
            <a href='/quote' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Get a QUOTE</a>
          </div>
        </div>
      </div>
    </section>
  );
}
