import Image from "next/image";
import React, { useRef } from "react";
import Cryptocurrency from '../components/Cryptocurrency';
import Head from "next/head";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import dynamic from "next/dynamic";
import JSON_DATA from "./json/solanatoken.json"
import styles from './styles.module.css'
import Link from "next/link";
import ContactUsButton from "../components/ContactUsButton";
import ConnectWithExpertButton from "../components/button/ConnectWithExpertButton";


const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const ModusSection = dynamic(() => import('../components/ModusSection'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const WhycomfygenSection = dynamic(() => import('../components/WhycomfygenSection'), {
  loading: () => <p>Loading...</p>,
})
const Industries = dynamic(() => import('./components/Industries'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})


export default function Ecommerce(props) {
  let { initialData } = props;

  let { LeadingSoftware, AppProcess, WhyChooseComfygen, TechSolana, ProcessSolana, ChooseSolana, ModusOperandi, Modus, Whycomfygen, Qa, Frequently, Hire, myList, Solution, CustomSolana, Why, Choose } = JSON_DATA;

  return (
    <>
      <Head>
        <title>Solana Token Development Company | Hire Best Token Developers</title>
        <meta name="description" content="Solana based Token Development Solutions. we provide end-to-end token development services to help you create the perfect Solana token for your project. Contact us today to get started!" />
        <link rel="canonical" href="https://www.comfygen.com/solana-token-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Solana Token Development Company | Hire Best Token Developers" />
        <meta property="og:description" content="Solana based Token Development Solutions. we provide end-to-end token development services to help you create the perfect Solana token for your project. Contact us today to get started!" />
        <meta property="og:url" content="https://www.comfygen.com/solana-token-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-11-29T11:00:29+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/solana.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="15 minutes" />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='Solana Token Development Company In India'
                ptag="Solana is a promising alternative for solving interoperability issues for decentralized apps. We are a trusted Solana token development company in India for creating solutions that offer advantages for your business. Our experts can help you create Solana dApp Development, Solana Smart Contract Development, and tokens on the Solana blockchain development services and capitalize on the benefits of Solana."
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/images/solana-token-development.webp'
                Width={562}
                Height={562}
                altTag="Solana Token Development Company" />

            </div>
          </div>
        </div>
        <AdviceSection
          heading='Set New Benchmarks in Web3 with Solana Token Development by Experts    '
          ptag='Our Solana token development services help you cross the barriers to web3 adoption with interoperable, secure, and advanced tokens. We invest in new technologies for delivering scalable and faster dApps, smart contracts, and tokens on the Solana blockchain app development. Startups and large-scale businesses can choose our Solana tokenization services for tokenizing their assets and launching their special tokens.'
          imgSrc='/img/set-new-benchmarks-in-web3-with-solana-token-development-by-experts.webp'
          imgW={564}
          imgH={559}
          altTag='Set New Benchmarks in Web3 with Solana Token Development by Experts' />
        <ContactFromCenter />
        <Industries />
        <section className=" bg-center bg-fixed bg-cover  " style={{ backgroundImage: `url("/img/solana-bg.webp")` }}>
          <div className='bg-[#000]/70 py-20'>
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center ">
                <h2 className="text-4xl font-bold text-[#fff]">Solana Token Development Services</h2>
                <p className="text-base text-white">As one of the pioneers in Solana token creation, we offer different types of services to help you capitalize on the true potential of Solana blockchain.</p>
              </div>
              <div className="grid gap-16 pt-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
                {LeadingSoftware.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group ">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                        <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">{title}</h3>
                      <p className="font-medium text-left text-white break-all transition duration-200 ease-in-out">{decs}</p>
                    </div>)
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10  bg-white mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="space-y-6">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Features of Solana Token Development</h2>
              <p className="text-base text-slate-800">Solana Token Development helps to create tokens on Solana Blockchain which helps to serve different purposes. We at Confygen follow the below mentioned features of Solana and help to create an ecosystem that will work great for your organizations.</p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {AppProcess.map((elem) => {
                const { title, num, decs, } = elem;
                return (
                  <div key={num} className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>)
              })}
            </div>
          </div>
        </section>

        <div className={`${styles.WhyChoose1} `}>
          <div className={`${styles.WhyChoose2} `}>
          </div>
        </div>
        <div className={`${styles.WhyChoose} `}>
          <div className=' py-10'>
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
              <div className="space-y-4 text-center">
                <div className="flex flex-col justify-center mx-auto">
                  <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                    Why choose Solana over other blockchain platforms?
                  </h2>
                  <p className="text-base text-white md:text-center text-justify tracking-tight">
                    Solana tokens play an important role in fuelling the growth of Solana ecosystem. You should notice that Solana is a better choice than other blockchain platforms for different reasons. </p>
                </div>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                  {WhyChooseComfygen.map((elem) => {
                    const { title, decs, } = elem;
                    return (
                      <div className={`${styles.WhyChooseItem} space-y-4 p-6 border`}>
                        <p className="text-2xl font-bold text-white">{title}</p>
                        <p className='text-white'>{decs} </p>
                      </div>)
                  })}
                </div>
                <div className="">
                  <ContactUsButton url={"/contact-us"} title={"Let’s Get Your Blockchain  Now!"} />
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2 ">
              <Image
                className="rounded-xl "
                title="Strategies for Solana Token Development Projects"
                alt="Strategies for Solana Token Development Projects"
                src="/img/strategies-for-solana-token-development-projects.webp"
                height={300}
                width={300}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-[14px] text-left ">
              <div className="space-y-2">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Strategies for Solana Token Development Projects
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">We employ client-centric strategic roadmaps for creating Solana tokens according to their needs. Our consulting services help us create the ideal strategy to achieve your objectives. We have achieved success in delivering Solana tokenization services with specific attention to the elements of security, scalability, and efficiency. Make the most of our Solana tokenization solutions to grow in the web3 landscape.</p>
            </div>
          </div>
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="w-full lg:w-1/2 space-y-[14px] text-left ">
              <div className="space-y-2">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Solana Token Development Solutions
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">We offer a broad range of Solana token development solutions for catering to a wider base of clients. As a trusted provider of Solana blockchain development services, we help you create non-fungible tokens for rebranding your business. You can rely on our expertise as a Solana token development company for using Solana tokens in DeFi applications such as token lending and token swap pools. We also offer solutions for developing Solana tokens that you can use as in-game assets or virtual items.</p>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2 ">
              <Image
                className="rounded-xl "
                title="  Solana Token Development Solutions"
                alt="  Solana Token Development Solutions"
                src="/img/solana-token-development-solutions.webp"
                height={300}
                width={300}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>

          </div>
        </section>
        <AdviceSection
          heading='Best-in-Class Whitelabel Solana Token Solutions for Web3'
          ptag='We have gained a reputation as a Solana token development service provider for offering custom development solutions. On top of it, you can also rely on our Whitelabel Solana token solutions that could align with your requirements. Our experts craft whitelabel Solana tokens with innovative features and also ensure flexible modification of the token features and traits.'
          imgSrc='/img/best-in-class-whitelabel-solana-token-solutions-for-web3.webp'
          imgW={450}
          imgH={450}
          altTag='Best-in-Class Whitelabel Solana Token Solutions for Web3'
        />

        <section className=" bg-[#CBDAF7]">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Tech Stack Used for <span className="text-blue-500">Solana Token </span> Development</h2>
              <p className="text-base text-slate-800">Solana Token development is known for its used Tech Stack. We as a Solana Token development company have quite a good hand on the below mentioned Tech Stack.</p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 xl:gap-10">
              {TechSolana.map((elem) => {
                const { title, stack, num } = elem;
                return (
                  <div key={num} className={`${styles.letter} space-y-4`}>
                    <div className='shadow-lg p-2 border rounded'>
                      <h3 className="text-[#0E1F51] text-xl font-bold">{title}</h3>
                    </div>
                    <div className="space-y-2">
                      <p>{stack} </p>
                    </div>
                  </div>);
              })}
            </div>
            <div className="flex justify-center items-center">
              <ContactUsButton utl={"https://api.whatsapp.com/send?phone=919587867258"} title={"Let's Communicate With IT Expert!"} />
            </div>
          </div>

        </section>

        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />

        <TalkExpert />
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center w-full lg:w-1/2 ">
              <Image
                className="rounded-xl "
                title="What Is Solana Token?"
                alt=" What Is Solana Token?"
                src="/img/what-is-solana-token.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-[14px] text-left ">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What Is Solana Token?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Solana is a crypto trading platform that ambitions to obtain excessive transaction speeds without sacrificing decentralization. It employs a bundle of novel methods, which includes the “proof of records” mechanism. Solana started to launch in April 2019 and started out trading at much less than $1 per coin. It has an unbeatable value proposition and a hastily developing surroundings of customers, developers, tech entrepreneurs, and emblem advocates.  </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row lg:space-x-10 lg:space-y-4">
            <div className="w-full lg:w-1/2 space-y-[14px] text-left ">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  What Makes Solana Token So Popular?
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Its speed, integrity, flexibility, and ability to verify 65,000 transactions per second at a cost of less than a dollar makes it popular among others crypto coins and tokens. Many predictors think that Solana has the greatest potential to become the next bitcoin. Due to its unbeatable value proposition and scalability advantages, it is becoming a growing ecosystem of users, developers, tech entrepreneurs, and other communities.  </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 ">
              <Image
                className="rounded-xl "
                title="What Makes Solana Token So Popular"
                alt="What Makes Solana Token So Popular"
                src="/img/what-makes-solana-token-so-popular.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="items-center space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex lg:space-x-10 lg:space-y-4">
            <div className="flex justify-center w-full lg:w-1/2 ">
              <Image
                className="rounded-xl "
                title="Solana Token Development Cost"
                alt="Solana Token Development Cost"
                src="/img/solana-token-development-cost.webp"
                height={400}
                width={400}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-[14px] text-left ">
              <div className="space-y-2">
                <h2 className="md:text-2xl text-xl font-semibold  text-[#0E1F51]">
                  Solana Token Development Cost
                </h2>
              </div>
              <p className="text-base leading-[26px] font-[400px] text-[#475569] ">
                Get your Solana token developed at a reasonable cost and charges from us. We have experienced crypto developers, programmers, and designers that could eagerly create custom Solana tokens, coins, and wallets with impregnable security. We provide business-centric Smart Contract Development, Secure Wallet, Pre-ICO Strategy, blockchain consultation, and more.  </p>
            </div>
          </div>
        </section>

        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Why choose Solana over other blockchain platforms?
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">Solana tokens play an important role in fuelling the growth of Solana ecosystem. You should notice that Solana is a better choice than other blockchain platforms for different reasons.
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
            {ChooseSolana.map((elem) => {
              const { tittle, decs, num, img } = elem;
              return (
                <div key={num} className="shadow-xl">
                  <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]" >
                    <div className="flex items-center justify-center h-14 w-14">
                      <Image className="rounded-md" alt={tittle} src={img} height={512} width={512} loader={uploadcareLoader} unoptimized={true} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {tittle}
                    </h3>
                  </div>
                  <div className="px-4 py-4 ">
                    <p className="px-4 py-4 text-black text-justify">{decs}</p>
                  </div>
                </div>);
            })}
          </div>
        </div>


        <Cryptocurrency />

        <TalkExpert />
        <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0 py-10">
          <div className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col justify-center text-center ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Our Process for <span className="text-blue-600 capitalize"> Solana Token Development</span> Projects</h2>
              <p className="text-base text-slate-800">If you will ask why we are best for Solana Token Development Projects, then we will say that we are good just because we are proud of our process. We follow the below process to build various solana token development projects.</p>
            </div>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8 text-left">
              {ProcessSolana.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div key={num} className="p-4 border border-blue-100 relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-86">
                    <div className="flex flex-col justify-center items-center p-10 space-y-2">
                      <Image className="object-cover" src={img} alt={title} width={100} height={100} />
                      <h3 className="text-lg font-semibold text-[#0E1F51] text-center">
                        {title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 p-4 flex justify-center items-center text-center transition-opacity duration-300 bg-[#000000]/90 opacity-0 hover:opacity-100">
                      <p className="tracking-normal text-sm text-white text-justify">
                        {decs}
                      </p>
                    </div>
                  </div>);
              })}
            </div>
          </div>

        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                <div className='space-y-2' >
                  <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                    We Develop Solana Tokens for Different Industries and Use Cases</h2>
                  <p className="text-base text-white">
                    We deliver excellence as a Solana token development company by serving the value benefits of Solana across a broad range of industries.</p>
                </div>
                <div className='grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 '>
                  {Solution.map(solanatoken => {
                    return (
                      <div key={solanatoken.num} className='flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100'>
                        <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                          <div className='md:bg-white md:p-2 md:rounded-lg'>
                            <Image title={solanatoken.title} alt={solanatoken.title}
                              src={solanatoken.img} height={50} width={50} />
                          </div>
                          <p className='py-4 text-lg font-semibold text-gray-800 '>{solanatoken.title}</p>
                        </div>
                      </div>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Create Your Custom Solana Token with Flexible Engagement Models
            </h2>
            <p className="text-base text-slate-800">We at Comfygen use below mentioned flexible engagement models to create custom solana tokens as per your requirement.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {CustomSolana.map(ele => {
              return (
                <div key={ele.num} className="border p-3 space-y-2 shadow">
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{ele.title}</p>
                  <p className="text-base text-slate-800">{ele.decs}</p>
                </div>);
            })}
          </div>
          <div className="flex justify-center items-center">
            <ConnectWithExpertButton url={"/contact-us"} title={"Want To Get Custom Solana Token? Connect Us"} />
          </div>
        </div>
        <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="w-full flex flex-col justify-center items-center text-center space-y-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">{Why?.title}</h2>
            <p className="text-base text-slate-800">{Why?.decs}</p>
          </div>

          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {Choose.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div key={num} className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2">
                  <div
                    className="flex items-center  space-x-2">
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="60" height="60" />
                    </div>
                    <h3 className="text-base font-bold text-black">
                      {title}
                    </h3>
                  </div>
                  <div>
                    <p>{decs}</p>
                  </div>
                </div>);
            })}
          </div>
        </section>
        <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#36223B]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>
        <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-10">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
              <div className="flex xl:py-12">
                <Image src="/img/do-you-have-more-questions-on-solana-token-development-services.webp" width={800} height={521} blurDataURL="URL" placeholder="blur" loader={uploadcareLoader}
                  unoptimized={true} className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]" alt=" Do you want to learn more about our services?" />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-[#8D99FF] p-6 text-center text-white xl:pl-12 xl:text-left">
                <div className="xl:pl-12 space-y-2">
                  <h2 className="mb-6 text-3xl font-bold">
                    Do You Have More Questions on Solana Token Development Services?
                  </h2>
                  <p className="text-base">If you want to know more about our Solana token development company and the value advantages of working with us, then you should contact us for a consultation.</p>
                  <div className="pt-8">
                    <Link href="/contact-us" passHref={true}>
                      <button type="button"
                        className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        Get in touch now.
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <FaqSection
          faqData={Frequently}
          title="Solana Token Development Company" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}