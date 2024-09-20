import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import React from 'react'

import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./json/about.json"
import Link from 'next/link';
import styles from './styles.module.css'
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const Advisor = dynamic(() => import('../components/Advisor'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const AdviceSection = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> About Us | App and Web Development Company - comfygen.com</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="ComfyGen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About Us | App and Web Development Company - comfygen.com" />
        <meta property="og:description" content="ComfyGen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
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
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}
        >
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='We Think Big, Design Smart, and Develop Fast. '
                subhead="Stay with Comfygen to Upgrade Your Business With Modern Technologies!"
                ptag='Business world has infinite success possibilities, and here you have the support from Comfygen to make it happen. We are the best software development company that caters tailored IT solutions based on modern technologies and supports futuristic scopes. Be it Blockchain, AI/ML, Metaverse, Web/App Development, Crypto, or any other futuristic-tech services, solutions, we have the clear vision to build the exceptional solutions to cater our clients best.'
                ptag2='Let’s meet the experienced-expert developers, and bring dynamic revolutions into your industry.'
                btnName="Discuss Now"
                btnLink='/contact-us'
                imgSrc='/img/about-us.webp'
                Width={760}
                Height={484}
                altTag='About Comfygen'
              />
            </div>
          </div>
        </div>
        <AdviceSection
          heading='Company Overview'
          ptag='Comfygen is the leading software development company sustained in the market for the past 5 years, and assisted in some exceptional profited software projects. Fortunately, our company gathered 150+ full-stack developers along, who never failed our clients in satisfying them with mind-blowing creations and market approaches. Being so deeply dedicated towards futuristic technology, we have knowledge and talents to create outstanding software solutions using advanced technologies; such as AI, IoT, Blockchain, 5G technology, etc. '
          ptag1="We do not only leverage companies with our tech-enabled software development services, but our experts help clients to overcome the drastic challenges to let them achieve optimum growth. We have one simple & only motto in our company, which is to “Let Clients and Their Businesses Meet Success.” Our assistance is only dedicated to that one final goal, and that’s what makes us stand out from other software development companies."
          imgSrc='/img/who-we-as-are.webp'
          imgW={500}
          imgH={500}
          altTag='About Us' />
        <section className="py-10  bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 w-11/12 lg:flex-row md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="lg:text-4xl text-2xl lg:font-bold font-semibold text-[#0E1F51] ">
                  Who We Are?
                </h2>
                <p className="text-base text-black">We cannot demand for trust, unless we make you believe in us. Don’t worry, we know we can and you will trust, because we are the believers of revolutions and evolutions. Whether you need AI-Driven solutions, decentralized or crypto products, web or app development, blockchain realm; anything is possible for us, as we are into the latest and future technology support. With the help of our predictive-analysis tools, market standard strategies, transformer models, NLP tools, custom generative solutions; our software developers can build robust software that matches the compatibility of specific targeted market standards.
                </p>
                <p className="text-base text-black">Comfygen has experts of 10+ experience with innovative yet prominent skills. We have next-gen perfection and adequate knowledge in our work, meaning “You Name It and We Make It.” We are unlike others; which does not only work with a client-centric approach, but our focus is to retain the user's attention longer even after years.
                  We want to maximize your business potential via building software beyond extraordinary. Our approach is not limited to large-scale enterprises, we serve customized solutions to SMBs to turn-on businesses with vast-based scalability.
                </p>
              </div>
              <div className="flex flex-row">
                <a href='https://api.whatsapp.com/send?phone=919587867258' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg  rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Let's Communicate With IT Expert!</a>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title=" The Mobile Game Development Landscape"
                alt=" The Mobile Game Development Landscape"
                src="/images/the-mobile-game-development-landscape.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <div className=" bg-start bg-cover  " style={{ backgroundImage: `url("/img/mission-vision-bg.webp")` }} >
          <div className='bg-[#162D42]/80 py-10 ' >
            <section className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10'>
              <div>
                <h2 className='lg:text-4xl text-2xl lg:font-bold font-semibold text-[#fff] text-center'>
                  Our Mission Vision and Values
                </h2>
              </div>
              <div className='grid lg:grid-cols-2 md;grid-cols-1 grid-cols-1 gap-10 py-10'>
                {JSON_DATA.CompanyInfo1.map((elem) => {
                  const { title, num, img, decs } = elem;
                  return (
                    <div key={num} className="flex items-center justify-center border p-6 rounded-lg w-full">
                      <div className='space-y-2'>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <p className="text-white ">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
        <section className='bg-[#fff]'>
          <div className=" bg-start bg-cover bg-fixed" style={{ backgroundImage: `url("/img/hire--game-banner.webp")` }}>
            <div className='2xl:w-11/12 xl:w-11/12 lg:w-11/12 mx-auto py-10 '>
              <div className='grid lg:grid-cols-2 sm:grids-cols-2 grid-cols-1 gap-10 '>
                <div className='flex items-center '>
                  <div className='space-y-3'>
                    <h2 className='lg:text-4xl text-2xl lg:font-bold font-semibold text-[#fff] text-start'>
                      Why is Comfygen the Right Partner to All Your IT Needs?
                    </h2>
                    <p className='text-start text-white'>First you need to know that Comfygen is always one step ahead in following the core and latest technologies to give the best to its clients in every domain. Let’s explore more about it: </p>
                    <div className="flex flex-row">
                      <a href='' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg  rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Let’s Discuss</a>
                    </div>
                  </div>
                </div>
                <div className='grid lg:grid-cols-2 sm:grids-cols-2 grid-cols-1 gap-10 py-10'>
                  {JSON_DATA.ComfygenRightPartner.map((elem, index) => {
                    const { title, num, decs } = elem;
                    const backgroundColors = ["#9F70C8", "#2AB2F3", "#6E8BD9", "#1F3142"];
                    const backgroundColor = backgroundColors[index] || "#ecf0f1";
                    return (
                      <div key={num} style={{ backgroundColor }} className="flex items-center justify-center p-6 rounded-lg w-full">
                        <div className='space-y-2'>
                          <h3 className="text-white text-xl font-bold text-start">{title}</h3>
                          <p className="text-white text-start text-sm ">{decs}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#E3FDFF]'>
          <div className='w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10'>
            <div className='grid grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1  py-4 '>
              <div>
                <h2 className='lg:text-4xl text-2xl lg:font-bold font-semibold text-[#000] text-center'>Contact Us and Let’s Start Your Digital Journey </h2>
                <p className='text-center mt-4'>Don’t you want to be on the priority list of every user; be it online and offline? Obviously yes. Expanding the targeted audience, reaching to them, and to gain their engagement is what every entrepreneur thinks of. We got your back here. </p>
                <p className='text-center'> Do not worry if the world is stepping ahead, we are here to take your business even years ahead with our software solutions. You just have to think of expansion, and we promise to make it real.</p>
                <p className='text-center'>You have the support from experts, who can suggest and tell you the best to do with your business. They know how the exact approach should be done, what technologies and changes are right for your business, what will make you the only stand-out option among all competitors, and much more. </p>
                <p className='text-center'>Before you take any step, we can give you a free consultation call to discuss your ideologies and plans for the best possibilities. Call Now and Consult Sooner!!! </p>
                <div className="flex flex-row justify-center mt-4">
                  <a href='/contact-us' className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-8 py-3 text-lg  rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Let's Communicate With IT Expert!</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="py-8 bg-white lg:py-20">
          <section className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">our values</h2>
              <p className='px-4 lg:px-10'>Comfygen is a certified web and mobile app development company residing in India but serving its clients across the globe.Though we serve a variety of niches in the mobile and web development arena but being an early bird in the cryptocurrency trend, we hold special expertise in cryptocurrency and altcoin development forums.</p>
              <div className="grid gap-3 py-10 text-left lg:grid-cols-4 md:grid-cols-2 xl:gap-4 ">
                {JSON_DATA.Solutions.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="overflow-hidden text-left bg-white border rounded-md">
                      <div className=" flex justify-center items-center">
                        <Image src={img} alt={title} height={400} width={400} />
                      </div>
                      <div className='p-4 space-y-1'>
                        <h3 className="text-lg font-semibold text-[#0E1F51]">
                          {title}
                        </h3>
                        <p className="text-base text-black ease-in-out  line-clamp-5">
                          {decs}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div> */}
        {/* <div className="bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
          <div className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6 py-4">
              {JSON_DATA.CompanyInfo.map((elem) => {
                const { title, num, img, decs } = elem;
                return (
                  <div key={num} className="flex items-center justify-center space-x-4 w-full">
                    <div className="rounded-full w-20 shadow-lg p-4 bg-white flex items-center justify-center">
                      <img src={img} alt={title} />
                    </div>
                    <div>
                      <p className="text-white text-xl font-bold">{title}</p>
                      <p className="text-white text-lg font-semibold">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-10 bg-gray-100 lg:py-20">
          <section className="w-11/12 space-y-0 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto lg:space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">Your Vision Is Our Mission
              </h2>
              <p>In our cryptocurrency development services, we cover all the disciplines of blockchain technology to give complete digital currency solutions to businesses.</p>
            </div>
            <div className="items-center py-4 space-y-10 lg:flex lg:space-y-0 lg:space-x-10 lg:py-10">
              <div className="flex justify-center w-full lg:justify-start ">
                <Image src="/images/img/our-vision.webp" alt="Our Vision" className="rounded-lg w-full" loader={uploadcareLoader} unoptimized={true} width={500} height={500} />
              </div>
              <div className="w-full space-y-2 text-left">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold leading-10 text-gray-800">Our Vision</h2>
                </div>
                <p className="text-base">With no lies, everyone wants to grow their business and be the best among their competitors in the industry. Our mission is to deliver futuristic-driven and best solutions to clients to turn their business into a brand. We want to grow our clients' business and give them vast visibility with great reputation. Our objective is to multiply clientele business and maximize their profits just like a large scale enterprise-level. The more they grow, the more we grow. </p>
                <p className="text-base font-bold">Our commitment includes:</p>
                <ul className='list-disc px-4'>
                  <li>Unmatched Integrity: Upholding unwavering ethics in all aspects of our work. </li>
                  <li>Tailored Solutions: Crafting customized solutions that precisely meet each client's unique needs.</li>
                  <li>Innovation and Excellence: Pushing boundaries and establishing new standards in digital solutions.</li>
                  <li>Client-Centric Approach: Prioritizing our clients' goals and success in all endeavors.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 oy-0 lg:py-10">
              <div className="w-full mt-10 space-y-6 text-left lg:mt-0">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold leading-10 text-gray-800">Our Mission</h2>
                </div>
                <p className="text-base">Every Service provider has one mission to be the #No1 IT Solutions development company. We have the same motto with full-disciplined environment adherence. Our team works at high-pace, builds robust solutions, learns the new trending technologies, works under tech-enabled practices, and result-oriented methodologies to empower our client’s business. If we serve good, we become good. Our belief is to offer the best decentralized and other IT Services at the right cost.</p>
                <div className="pt-4 space-x-4 flex">
                  <a href="/contact-us" >
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Discuss
                    </button>
                  </a>
                  <a href='https://api.whatsapp.com/send?phone=919587867258'>
                    <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                      Let’s Talk
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-full lg:justify-end">
                <Image src="/images/img/our-mission.webp" alt="Our Mission" className="rounded-xl w-full" width={500} height={500} />
              </div>
            </div>
          </section>
        </div> */}
      </div>
      <Advisor />
      <div className='bg-gradient-to-r to-sky-600 from-sky-300 py-10'>
        <div className='flex flex-col items-center justify-center text-center space-y-4 w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto'>
          <h2 className='text-black text-4xl text-center font-bold'>Meet Our Business Team:</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6  lg:space-y-0 space-y-4 w-11/12 py-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto'>
          <div className='w-full space-y-2 shadow-2xl bg-white p-6 rounded-md'>
            <img className='flex mx-auto h-[250px] w-[250px] rounded-full object-cover' src="/images/dixit-sir.webp" alt="Dixit" />
            <div className='space-y-2'>
              <h3 className='text-black font-bold text-[27px] text-center'> Dixit Joshi</h3>
              <p className='text-[25px] text-black font-semibold text-center'>(Business Head)</p>
              <p className=' text-slate-800 text-base font-semibold text-center'>Mr. Dixit brings a wealth of experience in streamlining operations and optimizing workflows. With a background in project management, his expertise ensures efficient project execution from start to finish, achieving seamless delivery.</p>
            </div>
          </div>
          <div className='w-full space-y-2 shadow-2xl bg-white p-6 rounded-md'>
            <img className='flex mx-auto h-[250px] w-[250px] object-cover rounded-full' src="/img/namita-tomar-image.webp" alt="Namita Tomer" />
            <div className='space-y-2'>
              <h3 className='text-black font-bold text-[27px] text-center'>Namita Tomer</h3>
              <p className='text-[25px] text-black font-semibold text-center'>(HR Manager)</p>
              <p className=' text-slate-800 text-base font-semibold text-center'> Namita, our dedicated Human Resources (HR) professional, embodies our commitment to nurturing a positive work culture. With her empathetic approach and strategic talent management skills, she fosters a vibrant and inclusive workplace environment. She is a key driver in attracting, developing, and retaining top talent, ensuring organizational success and employee well-being.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10 bg-white">
        <div className="space-y-4">
          <div className="flex flex-col justify-center text-center py-6">
            <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">Meet Our Team Leaders</h2>
          </div>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>

            {JSON_DATA.team.map((elem) => {
              const { title, subtle, num, img, decs } = elem;
              return (
                <div key={num} className="dm-flip-card">
                  <div className="dm-front-card">
                    <img src={img} alt={title} />
                  </div>
                  <div className="dm-back-card">
                    <h3 className='text-2xl font-bold text-center	'>{title}</h3>
                    <p className='text-lg font-semibold text-center	'>{subtle}</p>
                    <p className='text-base text-center	'>{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <div className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto py-10 space-y-4">
        <div className="flex flex-col justify-center text-center py-6">
          <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">Our Team & Culture</h2>
          <p>Comfygen prides itself on fostering a vibrant, inclusive culture that celebrates diversity, creativity, and collaboration. With a Comfygen team of talented individuals from diverse backgrounds, we believe in leveraging diverse perspectives to fuel innovation and inspire out-of-the-box thinking. Our collaborative spirit, dedication to continuous learning, empowerment and support, and commitment to work-life balance ensure a harmonious and innovative work environment. Celebrating every success, big or small, is fundamental to our culture, reinforcing our commitment to each individual's dedication and hard work. At Comfygen, our team and culture are the driving forces behind our success, shaping the foundation upon which groundbreaking innovations are built.</p>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <div className='flex justify-center items-center'>
            <Image src="/lifecomfygen/comfygen-diwali-grp.webp" alt="Team and Culture" width={1600} height={1202} loader={uploadcareLoader}
              unoptimized={true} className='rounded-xl' />
          </div>
        </div>
      </div>
      <section className="py-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url("/img/type-of-satta-matka-games-we-covered.webp")`, }}>
        <div className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto space-y-4">
          <div className="flex flex-col justify-center text-center py-6 space-y-2">
            <h2 className="text-[29px] lg:text-[35px] font-bold capitalize text-[#0E1F51]">Industries we Work in</h2>
            <p>This overview showcases Comfygen's proficiency and commitment to innovation in these specific industries, highlighting their expertise and tailored Development solutions within Blockchain App & Software Development, Token Development, Cryptocurrency Development, and Game Development.</p>
            <p>This diverse range of industries showcases Comfygen's adaptability and expertise in providing tailored digital solutions across various sectors.</p>
          </div>
          <div className='grid  lg:grid-cols-2 grid-col-1 gap-6'>
            {JSON_DATA.IndustryWork.map((elem) => {
              const { title, img, decs, num, url } = elem;
              return (
                <div key={num} className="box basic-drop-shadow p-6  border rounded-xl group hover:bg-white transition-all duration-200">
                  <a href={url} className='space-y-4'>
                    <div>
                      <Image width={100} height={100} src={img} alt={title} title={title} />
                    </div>
                    <div className='space-y-2'>
                      <h3 className="text-2xl font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                      <p className="text-lg font-medium text-left text-black transition duration-200 ease-in-out">{decs}</p>
                    </div>
                  </a>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
      <BlogSection initialData={initialData} />
    </div>
  )
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