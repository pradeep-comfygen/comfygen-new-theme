import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs';
import JSON_DATA from "./json/portfolio.json"
import { ImArrowUpRight2 } from 'react-icons/im';
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const Solutions = [
  {
    num: '1',
    url: "/portfolio/comfynews-details",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/comfynews-application.webp",
    title: 'Comfynews Application',
    decs: "We believe in practical perfection and realize that there is always room for improvement in everything we do.",
  },
  {
    num: '2',
    url: "/comfygen-token-development-details",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/token-development.webp",
    title: 'Token Development',
    decs: 'Alone we can do so little; together we can do so much." – Helen Kelle. We believe in working together to make the best use of our abilities and potential to maximize the output.',
  },
  {
    num: '3',
    url: "/comfygen-mlm-software-details",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/comfygen-mlm-software.webp",
    title: 'Comfygen MLM Software',
    decs: 'Comfygen first values its customers. We focus on our clients business requirements to ensure we surpass their expectations.',
  },
  {
    num: '4',
    url: "/aria-coin-details",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/aria-coin-cryptocurrency.webp",
    title: 'Aria Coin Cryptocurrency',
    decs: 'Fosters trust, that is the base of great teamwork which leads to success.',
  },
  {
    num: '5',
    url: "/cricket-fast-line-application",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/cricket-fast-line-application.webp",
    title: 'Cricket Fast Line Application',
    decs: 'Fosters trust, that is the base of great teamwork which leads to success.',
  },
  {
    num: '6',
    url: "/zappy-wallet-application-details",
    button: "Mongo DB",
    button1: "Reactjs",
    button2: "Nodejs",
    img: "/img/zappy-wallet-application.webp",
    title: 'Zappy Wallet Application',
    decs: 'Fosters trust, that is the base of great teamwork which leads to success.',
  },

]

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Portfolio comfygen.com a App and Web Development Company </title>
        <link rel="canonical" href="https://www.comfygen.com/portfolio" />
        <meta name="description" content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses.Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients'needs." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" Portfolio comfygen.com a App and Web Development Company " />
        <meta property="og:description" content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers,designers,and project managers work collaboratively to deliver high-quality software products that meet our clients'needs." />
        <meta property="og:url" content="https://www.comfygen.com/portfolio" />
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
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC] pb-24">
            <Header />
            {/* <div className="md:py-20 py-5">
               <HeroSectionForm
                heading='Comfygen Portfolio Company'
                ptag="Our  Company's portfolio showcases our expertise in delivering innovative and cutting-edge solutions for various industries. With a focus on customer satisfaction, we have successfully completed projects ranging from software development to network infrastructure. Browse through our portfolio to see how we can help you transform your business."
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/img/comfygen-portfolio-company.webp'
                Width={760}
                Height={484}
                altTag='About Comfygen'
              />
            </div> */}
          </div>
        </div>
        <div className="py-8 bg-white lg:py-20">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 flex flex-col justify-center text-center mx-auto lg:w-4/6">
              <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">Our Excellent Portfolio</h2>
              <p className='text-base text-slate-800'>Driving growth and success through creative design and development. Showcasing our passion for design and creativity</p>
            </div>
            {/* <div className="grid gap-8 py-10 text-left lg:grid-cols-2 md:grid-cols-1 lg:gap-14 container ">
              {Solutions.map((elem) => {
                const { title, img, num, button, button1, button2, url } = elem;
                return (
                  <div key={num} className="overflow-hidden bg-white w-full">
                    <div className="relative flex justify-center items-center w-full 3xl:h-96 2xl:h-96 xl:h-80 lg:h-72 md:h-96 h-60 bg-cover object-cover ">
                      <Image src={img} alt={title} fill className='object-cover object-top  rounded-2xl' />
                    </div>
                    <div className='px-6 py-4 space-y-4'>
                      <div className='flex justify-center  items-center space-x-6'>
                        <button className="text-[14px]   text-[#0E1F51] rounded-full bg-gray-100 px-4 text-center py-1.5 font-medium">
                          {button}
                        </button>
                        <button className="text-[14px]   text-[#0E1F51] rounded-full bg-gray-100 px-4 text-center py-1.5 font-medium">
                          {button1}
                        </button>
                        <button className="text-[14px]   text-[#0E1F51] rounded-full bg-gray-100 px-4 text-center py-1.5 font-medium">
                          {button2}
                        </button>
                      </div>
                      <div className='space-y-4 '>
                        <h3 className='text-lg font-semibold text-[#0E1F51] '> {title}</h3>
                        <div>
                          <Link href={url} passHref={true}>
                            <button className='text-blue-600 flex items-center space-x-2 hover:translate-x-2 transition-all duration-300'>
                              Read more <span className='px-2 '><BsArrowRight /></span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}
            {/* <div className="grid gap-8 py-10 text-left lg:grid-cols-2 lg:gap-14 container">
              {Solutions.map((elem) => {
                const { title, img, num, button, button1, button2, url } = elem;
                return (
                  <>
                    <div key={num} className="w-full ">
                      <div className='px-6 py-2'>
                        <h3 className='text-3xl font-bold'>{title}</h3>
                      </div>
                      <Link href={url} passHref={true}>
                        <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                          <img src={img} alt="portfolio" className="h-[400px] w-full ml-auto mr-auto" />
                          <div className=" p-4 bg-blue-500/30 flex flex-col">
                            <h5 className="text-black text-2xl font-bold leading-none capitalize text-center">
                              {title}
                            </h5>
                          </div>
                        </div>
                      </Link>
                      <div className="grid gap-2  text-left md:grid-cols-2 container py-4">
                        <div className="w-full ">
                          <Link href="/" passHref={true}>
                            <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                              <img src={img} alt="portfolio" className="h-[200px] w-full ml-auto mr-auto" />
                              <div className=" p-4 bg-blue-500/30 flex flex-col">
                                <div>
                                  <h5 className="text-black text-xl font-bold leading-none capitalize text-center">
                                    Application
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="w-full ">
                          <Link href="/" passHref={true}>
                            <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                              <img src={img} alt="portfolio" className="h-[200px] w-full ml-auto mr-auto" />
                              <div className=" p-4 bg-blue-500/30 flex flex-col">
                                <div>
                                  <h5 className="text-black text-xl font-bold leading-none capitalize text-center">
                                    Dashboard
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="w-full ">
                          <Link href="/" passHref={true}>
                            <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                              <img src={img} alt="portfolio" className="h-[200px] w-full ml-auto mr-auto" />
                              <div className=" p-4 bg-blue-500/30 flex flex-col">
                                <div>
                                  <h5 className="text-black text-xl font-bold leading-none capitalize text-center">
                                    Web Panel
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> */}
            {/* {
      "num": "9",
      "img": "/img/live-line-portfolio-img.webp",
      "head": "Live Line Application",
      "para": "Welcome to the Future of Cricket Engagement: Cricket Connect is set to transform the way you experience live matches. Our mission is to create an unparalleled platform that delivers real-time updates, in-depth analysis, and insightful information, bringing the electrifying world of cricket directly to your fingertips.",
      "btn": "Initiate Now",
      "url": "/portfolio/live-line-application"
    } */}
            <div className="grid gap-8 py-10 text-left lg:grid-cols-1 lg:gap-14 container">
              {
                JSON_DATA.NativeApp.map(portfolio => {
                  return (
                    <>
                      <div key={portfolio.num} className="border border-[#BE5EBC] shadow-sm shadow-[#16BDFA] flex flex-col lg:flex-row py-10 px-4 lg:px-20 rounded-[42px] items-center lg:space-x-10 space-x-0 lg:space-y-0 space-y-4">
                        <div className="flex justify-center w-full md:justify-start">
                          <Image className="rounded-md w-full" title={portfolio.head} alt={portfolio.head} src={portfolio.img} height={600} width={600} loader={uploadcareLoader} unoptimized={true} />
                        </div>
                        <div className="w-full space-y-[5px] text-left">
                          <div className="space-y-4">
                            <h3 className="text-[24px] lg:text-4xl font-bold text-black">{portfolio.head}</h3>
                            <p className="py-6 text-base font-light text-black">{portfolio.para}</p>
                          </div>
                          <div>
                            <Link media="handheld" href={portfolio.url} passHref={true}>
                              <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full  text-center hover:text-white  cursor-pointer w-fit group">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-20"></span>
                                <ImArrowUpRight2 />
                                <span>{portfolio.btn}</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              }
            </div>
          </section>
        </div>
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