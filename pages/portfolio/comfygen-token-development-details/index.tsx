import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./comfygen-token-development-details.json"
import TechnologyStack from '../technology-stack/TechnologyStack';

const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Comfygen Token Development details : Comfygen is  a App and Web Development Company </title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About comfygen.com a App and Web Development Company " />
        <meta property="og:description" content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
        <meta property="og:url" content="https://www.comfygen.com/about-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div className=" bg-gradient-to-t to-[#36ABF5] from-[#fff]">
          <div className='h-full w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("/img/B.svg")` }}>
            <div className=" bg-[#1B1C30CC]/20">
              <Header />
              <div className="flex flex-col justify-center items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20 lg:py-40 py-8">
                <div className="w-full">
                  <div className="space-y-6 text-center">
                    <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Bit Learn Web
                    </h1>
                    <p className="text-white text-base">
                      In the rapidly evolving landscape of network marketing, Bit Learn Web emerges as a pioneering decentralized MLM platform. Our vision is to revolutionize the industry by introducing transparency, security, and accountability through blockchain technology. Bit Learn aims to redefine the network marketing experience, ensuring fair compensation and fostering a community-driven approach.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-center md:py-0 py-10">
                  <Image className="object-cover " src="/img/comfygen-coin-web-application.webp" width={760} height={484} alt=' Efincap MLM Software' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <section className="w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center space-y-10 md:flex md:space-y-0 md:space-x-10 w-full">
              <div className="w-full space-y-6 text-center md:text-left">
                <h2 className=" text-slate-900 xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Business Benefits</h2>
                <p className='text-base text-slate-800'>Bit Learn stands at the forefront of change, offering a decentralized MLM model that brings about several key benefits:</p>
                <p><span className='text-xl font-bold'>Transparent Earnings:</span> The blockchain ensures a transparent and immutable record of transactions, providing users with clear insights into their earnings and network performance.</p>
                <p><span className='text-xl font-bold'>Secure Peer-to-Peer Transactions:</span>  By leveraging blockchain technology, Bit Learn ensures secure peer-to-peer transactions, eliminating the need for intermediaries and enhancing overall transaction security.</p>
                <p><span className='text-xl font-bold'>Fair Compensation:</span>  Bit Learn redefines the MLM landscape by promoting fair compensation structures, ensuring that users are justly rewarded for their contributions to the network.</p>
                <p><span className='text-xl font-bold'>Accountable Network Marketing:</span>  With blockchain's tamper-resistant ledger, Bit Learn fosters an accountable network marketing environment, reducing fraud and promoting trust within the community.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="/img/comfygen-token-screens.webp" alt="comfygen news app" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} />
              </div>
            </div>
          </section>
        </div>
        <div className="md:py-10 py-6 bg-[#DBF1FF] ">
          <h2 className='py-4 xl:text-4xl text-3xl font-bold text-[#0E1F51] text-center'>Project Features & The Challenge</h2>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="/img/aria-screens.webp"
                alt="Experts to Build and Manage Decentralised Solutions"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Features
              </h2>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Decentralized Network Structure:</span> Bit Learn employs a decentralized structure, allowing for greater resilience and eliminating single points of failure. </p>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Smart Contract Integration:</span>  Smart contracts automate and enforce predefined rules, ensuring transparent and self-executing transactions without the need for intermediaries. </p>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Real-time Analytics:</span> Users gain access to real-time analytics, empowering them with the data needed to make informed decisions and optimize their network marketing strategies. </p>
            </div>
          </section>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                The Challenge
              </h2>
              <p className='text-base text-slate-800'>The main challenge faced by Bit Learn was to disrupt the traditional MLM model plagued by opacity and mistrust. Overcoming this required the integration of blockchain technology and the development of a user-friendly platform that seamlessly combines decentralization with ease of use.</p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="/img/aria-screens.webp"
                alt="he Challenge"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
          </section>
        </div>
        <section className='py-10 space-y-8'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <h2 className=' xl:text-4xl text-3xl font-bold text-[#0E1F51] text-center'>The Solution</h2>
            <p>Bit Learn tackled the challenges head-on by implementing the following solutions:</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-6 gap-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12'>
            {JSON_DATA.Solution.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <div key={num} className="w-full  mb-4 lg:mb-0">
                  <div className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                    <img src={img} className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150" />
                    <div className="absolute bg-gradient-to-b from-slate-500/10 to-stone-200/80 transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                      <div className="h-1/2 relative">
                        <div className="absolute bottom-0">
                          <h2 className="font-bold text-[#000000] group-hover:text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{title}</h2>
                        </div>
                      </div>
                      <div className="h-1/2">
                        <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{decs}</p>
                      </div>
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </section>

        <div className="py-20  bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url("/img/bitleran-galaxy-herosection.webp")` }}>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image src="/img/aria-screens.webp" alt="comfygen news app" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
            </div>
            <div className='space-y-2 w-full'>
              <h3 className='text-4xl font-bold'>Tools & Technologies</h3>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'> Blockchain Technology: </span>Utilizing a decentralized blockchain for transparent and secure transaction recording.</p>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'>Smart Contracts:</span> Implementing smart contracts to automate and enforce network rules and compensation plans.</p>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'>User Interface (UI) Development Tools:</span>  Crafting a user-friendly interface for seamless interaction with the platform.</p>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'> Real-time Analytics Tools:</span> Integrating tools for real-time analytics to empower users with actionable insights.</p>
            </div>
          </section>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-3'>
              <Image src="/portfolio/bitlearn-1.webp" alt='' width={500} height={500} className='w-full' />
            </div>
            <div className='p-4 bg-gray-200 rounded-t-md'>
              <Image src="/portfolio/bitlean-2.webp" alt='' width={500} height={500} className='w-full' />
            </div>
            <div className='p-4 bg-gray-200 rounded-t-md'>
              <Image src="/portfolio/bitlearn-3.webp" alt='' width={500} height={500} className='w-full' />
            </div>
            <div className='p-4 bg-gray-200 rounded-t-md'>
              <Image src="/portfolio/bitlearn-4.webp" alt='' width={500} height={500} className='w-full' />
            </div>
          </div>

        </div>

        <TechnologyStack />
      </div>
    </div>
  )
}
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}