import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";





export default function GuidSectionBlockchain() {
  return (
    <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
      <div className="flex flex-col justify-center text-center">
        <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Step-by-step Guide to our<span className="text-blue-500"> Cricket Live Line API Development</span> Process</h2>
        <p className="text-base text-slate-800">We understand the importance of a seamless cricket live line api integration experience, and we're here to assist you at every stage of cricket live line api development process. As Comfygen leading cricket live line api service provider globally, we are dedicated to making the Cricket Live Line API development process as smooth as possible. Follow our step-by-step guide, and you'll be on your way to leveraging the power of our Cricket Live Line API for your cricket-related needs.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-10 py-10">
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Conceptualization & Market Research</h3>
            <ul className="list-[square] px-4">
              <li>Defining the applications purpose.</li>
              <li>Conducting deep market research.</li>
              <li>Analysing the competition</li>
            </ul>
          </div>
        </div>

        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Discussion & Planning</h3>
            <ul className="list-[square] px-4">
              <li>Creating wireframes</li>
              <li>Planning the features and functionalities</li>
              <li>Assigning the resources and team</li>
            </ul>
          </div>

        </div>
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Development</h3>
            <ul className="list-[square] px-4">
              <li>Writing the Back-end codes</li>
              <li>Live Cricket Streaming API Integration.</li>
              <li>Payment Gateway Integration</li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Designing</h3>
            <ul className="list-[square] px-4">
              <li>Creating a mock-up for the app’s layout</li>
              <li>Designing the prototype of the app design.</li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Testing and Q&A</h3>
            <ul className="list-[square] px-4">
              <li>Check for functionality and overall performance</li>
              <li>Fixing bugs and glitches</li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Deployment</h3>
            <ul className="list-[square] px-4">
              <li>Product launch on app/play stores</li>
              <li>App Store Guidelines Approval</li>
            </ul>
          </div>
        </div>
        <div className="pricing-plan border-t-4 border-solid border bg-white hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 space-y-4">
            <h3 className="font-medium leading-tight text-2xl">Maintenance and Customer Support</h3>
            <ul className="list-[square] px-4">
              <li>Post-launch maintenance</li>
              <li>Timely upgrading</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
                <a href="https://api.whatsapp.com/send?phone=919587867258" className="mt-5">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S CONNECT TO DISCUSS A PROJECT
                  </button>
                </a>
              </div>
    </div>

  );
}
