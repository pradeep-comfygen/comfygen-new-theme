import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import styles from './styles.module.css'
import 'aos/dist/aos.css';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./book-my-tutor.json"
import { BsArrowRight } from 'react-icons/bs';
import TechnologyStack from '../technology-stack/TechnologyStack';

const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>  E-Commerce: Comfygen is  a App and Web Development Company </title>
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

      <div className="overflow-hidden" >

        <div className={`${styles.herobg} `} >
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("/img/B.svg")` }}>
            <div className=" bg-[#0a0e11a6]">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#fff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Book My Tutor
                    </h1>
                    <p className="text-white text-base">Book My Tutor aims to revolutionize the education sector in India by providing a seamless platform for students to connect with experienced and qualified tutors. The vision is to make quality education accessible to every student, regardless of their location or academic level. The project seeks to bridge the gap between students and tutors, creating a conducive environment for personalized learning.
                    </p>
                    <div className="py-4">
                      <Link href="/contact-us" passHref={true}>
                        <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#D0FFDA] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                          <span className="relative"> Let's Discuss</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:py-0 ">
                  <Image className="object-cover " src="/img/hero-book-my-tutor.webp" width={600} height={300} alt=' hero great wallet' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <section className=" h-full w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center space-y-10 md:flex md:space-y-0 md:space-x-10 w-full">
              <div className="w-full space-y-6 text-center md:text-left">
                <h2 className=" text-slate-900 xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Business Benefits</h2>
                <p><span className='text-lg font-bold'>Accessibility:</span>Students can easily find and connect with tutors from the comfort of their homes, overcoming geographical barriers.
                </p>
                <p><span className='text-lg	 font-bold'>Quality Education:</span> Book My Tutor ensures that students receive high-quality education by connecting them with experienced and qualified tutors.</p>
                <p><span className='text-lg	 font-bold'>Personalized Learning: </span> The platform offers personalized tutoring sessions tailored to the individual needs and learning styles of each student.</p>
                <p><span className='text-lg	 font-bold'>Convenience:</span> With a user-friendly interface, scheduling, and attending tutoring sessions becomes convenient for both students and tutors.</p>
                <p><span className='text-lg	 font-bold'>Wide Range of Subjects:</span> Book My Tutor covers a diverse range of subjects and academic levels, catering to the educational needs of students across the spectrum.</p>

              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="/img/business-benefits-book-my-tutor.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={456} height={635} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>

        <div className={`${styles.featuresbg} `}>
          <div className='bg-[#121212bd] md:py-10 py-6 '>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Features</h2>
                <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>User Profiles:  </span>Students and tutors can create profiles with detailed information about their academic background, expertise, and teaching style.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Search and Match:</span> A sophisticated search and match algorithm helps students find the most suitable tutors based on their requirements.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Scheduling:</span> An integrated scheduling system allows users to book and manage tutoring sessions easily.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Feedback System:</span> Both students and tutors can provide feedback, contributing to a transparent and quality-driven community.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Challenges:</h2>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Matching Algorithm Complexity:</span> Developing an efficient algorithm to match students with the right tutors based on various criteria.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>User Engagement: </span> Ensuring consistent user engagement and satisfaction to build a thriving community.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Security and Privacy: </span>Implementing robust security measures to protect user data and ensure a secure online learning environment.</p>
              </div>
            </section>
          </div>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="/img/solution-book-my-tutor.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-lg"
              width={456}
              height={651}
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Solution</h2>
            <p className='text-base text-slate-800'> To address the challenges, Book My Tutor implemented:</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'> Advanced Matching Algorithm: </span>Developed a sophisticated algorithm that considers academic levels, subject expertise, and teaching styles for optimal tutor-student matches.</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'> User Engagement Strategies:  </span>Implemented gamification, rewards, and a responsive customer support system to enhance user engagement.</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Secure Platform:  </span>Employed encryption and secure authentication measures to safeguard user data and ensure privacy.</p>
          </div>
        </section>

        <div className={`${styles.herobg} `}>
          <div className='bg-[#0A0E11] py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Frontend: </span>HTML5, CSS3, JavaScript, React.js</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Backend:</span> Node.js, Express.js, MongoDB</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Database: </span> MongoDB</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Authentication: </span> JSON Web Tokens (JWT)</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Real-time Communication: </span>WebSocket</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Payment Integration: </span>Razorpay</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Hosting:</span> Amazon Web Services (AWS)</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Version Control: </span> Git, GitHub</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="/img/tools-and-Tec-bbok-my-tutor.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={456} height={395} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="/img/book-my-tutor-footer.webp" alt='' width={920} height={552} className='w-full' />
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