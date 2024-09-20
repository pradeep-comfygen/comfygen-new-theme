import React, { useRef, useState } from "react";
import { MdDevicesOther } from 'react-icons/md';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiTeamLine } from "react-icons/ri";
import { BiChevronLeft, BiChevronRight, BiSupport } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineUngroup } from "react-icons/ai";
import { CgPlug } from "react-icons/cg";
import { HiOutlineIdentification } from "react-icons/hi2";
import { BsExclamationOctagon, BsLayers, } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/nextjs.json";
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const Advice = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})
const NewSection = dynamic(() => import('../components/NewSection'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})

const Services = [
  {
    num: '1',
    icon: <IoLogoNodejs className="text-blue-400" size={60} />,
    title: 'Next.js Customization Services',
    decs: 'We tailor Next.js applications to fit your specific business requirements, providing personalized solutions that enhance functionality and user experience.'
  },
  {
    num: '2',
    icon: <HiOutlineIdentification className="text-blue-400" size={60} />,
    title: 'Next.js Web Development Solutions',
    decs: 'Our team builds robust, high-performance web applications using Next.js, ensuring optimal speed, security, and scalability for your online presence.'
  },
  {
    num: '3',
    icon: <AiOutlineUngroup className="text-blue-400" size={60} />,
    title: 'Next.js Server-Side Rendered Apps',
    decs: 'Improve your website’s SEO and load times with our Next.js server-side rendering services, delivering content swiftly and efficiently to your users.'
  },
  {
    num: '4',
    icon: <CgPlug className="text-blue-400" size={60} />,
    title: 'Next.js Integration Services',
    decs: 'Seamlessly integrate Next.js with your existing systems and third-party services, ensuring a smooth and efficient workflow across your applications.'
  },
  {
    num: '5',
    icon: <MdDevicesOther className="text-blue-400" size={60} />,
    title: 'Next.js Plugin Development',
    decs: 'Enhance your Next.js applications with custom plugins designed to add unique features and functionalities, tailored to your business needs.'
  },
  {
    num: '6',
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: 'Next.js Upgradation and Migration Services',
    decs: 'Transition to the latest version of Next.js or migrate from other frameworks with our expert upgradation and migration services, ensuring minimal disruption.'
  },
  {
    num: '7',
    icon: <MdDevicesOther className="text-blue-400" size={60} />,
    title: 'Next.js Maintenance and Support ',
    decs: 'Keep your Next.js applications running smoothly with our ongoing maintenance and support services, addressing any issues promptly and efficiently.'
  },
  {
    num: '8',
    icon: <BiSupport className="text-blue-400" size={60} />,
    title: 'Next.js Strategy & Planning',
    decs: 'Receive expert guidance on leveraging Next.js for your projects with our strategic planning services, ensuring your development efforts align with your business goals.'
  },
];


export default function Altcoin(props) {
  let { initialData } = props;

  let { Modus } = JSON_DATA;
  const [currentCount, setCurrentCount] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
    setCurrentCount((prevCount) => prevCount + 1);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    setCurrentCount((prevCount) => prevCount - 1);
  };

  const settingstwo = {
    infinite: true,
    speed: 700,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Best NextJS Development Company In Canada & The USA | Comfygen  </title>
        <meta name="description" content="Crafting high-speed, custom, and feature-rich websites and applications is our specialty at Comfygen. Elevate your business with seamlessly navigable and user-friendly apps through our Next.js Development Services." />
        <link rel="canonical" href="https://www.comfygen.com/next-js-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best NextJS Development Company In Canada & The USA | Comfygen" />
        <meta property="og:description" content="Crafting high-speed, custom, and feature-rich websites and applications is our specialty at Comfygen. Elevate your business with seamlessly navigable and user-friendly apps through our Next.js Development Services." />
        <meta property="og:url" content="https://www.comfygen.com/next-js-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/next-js-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta name='language' content='en-us' />
      </Head>
      <div className='overflow-hidden'>
        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionForm
                heading='NextJS Development Company'
                ptag="Comfygen should be the next one-stop to build customized and reliable applications with NextJS. We are the popular and renowned NextJS Development Company ensuring to create robust, responsive, and server-rendered applications meeting the user’s needs. We have been using cutting-edge technologies and integrating the latest technology trends to create the application with super-enriched features and robust functionalities. Gather the ideas and amalgamate the innovations to process with agile NextJS Development Services fulfilling the purposes."
                patg1="We have the experience, knowledge, and current market standards to build what’s demanded by users."
                btnName="Discuss Now"
                btnLink='/contact-us'
              />
            </div>
          </div>
        </div>
        <Advice
          heading='Leading NextJS Development Agency to Choose'
          ptag="We are the popular NextJS Development Company that adheres to the full potential of NextJS Development Services to create robust and agile solutions. We have full dedicated and expert NextJS Developers to construct robust server-side, lightweight, and test driven applications. Our developers are experienced in simplifying various complex app development processes and implement NextJS framework for agility and higher performance. We create solutions for SMEs and large enterprises to incorporate the concurrent industrial patterns and standards. So let’s create supportive server-rendered app solutions fulfilling the needs of businesses and end-users."
          imgSrc='/img/next-js-development.webp'
          imgW={500}
          imgH={624}
          altTag='Next.JS Development' />
        <ContactFromCenter />
        <div className="space-y-4 text-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
          <div className="flex flex-col justify-center text-center mx-auto lg:w-4/6">
            <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Efficient <span className="text-blue-600">NextJS Development</span> Services
            </h2>
            <p className="text-base text-slate-800">Comfygen offers a wide array of NextJS development services designed to meet the unique needs of your business. Our expert team ensures that your web applications are high-performing, scalable, and user-friendly. Explore our robust service offered with business intelligence.</p>
          </div>
          <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 ">
            {Services.map((elem) => {
              const { icon, title, decs, num } = elem;
              return (
                <ServiceSection
                  key={num}
                  Icon={icon}
                  title={title}
                  Ptag={decs}
                />
              );
            })}
          </div>
        </div>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />

        <section className="bg-[#F8F9FA]">
          <section className="lg:py-16 py-4 w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div className="">

              <div className="w-full md:text-left">
                <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                  {Modus?.title}
                </h2>
                <p className='text-black text-base text-center'>{Modus?.decs}</p>
              </div>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {JSON_DATA.Development.map((elem: any) => {
                const { title, num, img, decs, icon } = elem;
                return (
                  <div key={num} className="rounded-xl bg-white  p-6 cursor-pointer transition-all duration-400 hover:translate-y-2 group">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto p-4 bg-[#eaeefb] rounded-lg ">
                      <Image src={img} alt={title} width="40" height="40" />
                      {/* <span>{icon}</span> */}
                    </div>
                    <div
                      className=" text-center space-y-1 mt-4">
                      <h3 className="text-xl  text-[#222569] text-center group-hover:text-[#2f55d4] font-semibold"> {title} </h3>
                      <p className="text-center">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        <section className="lg:py-16 py-4 w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
          <div className="">

            <div className="w-full md:text-left">
              <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                NextJS Development Process
              </h2>
              <p className='text-black text-base text-center'>Our NextJS development process is designed to ensure the delivery of high-quality, scalable, and efficient web applications. Here’s a step-by-step overview of our approach:</p>
            </div>

          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {JSON_DATA.AchieveMaximum.map((elem: any) => {
              const { title, num, img, decs, icon } = elem;
              return (
                <div key={num} className="rounded-xl bg-white border-2 border-[#222569] border-dashed  p-6 cursor-pointer transition-all duration-400 hover:translate-y-2 group">

                  <div
                    className=" text-center space-y-1 mt-4">
                    <h3 className="text-xl  text-[#222569] text-start  font-semibold"> {title} </h3>
                    <p className="text-start">{decs}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Latest Tech-Trends We Use in NextJS Development Company
            </h2>
            <p>Integrating latest tech-trends will make the NextJS app solutions more robust and scalable. Create some flexible app solutions with NextJS to boost your business along the next-gen standards: </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {
              JSON_DATA.AppProcess.map((elem) => {
                const { title, num, decs, } = elem;
                return (
                  <div key={num} className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-bold">{title}</p>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

        <section className="bg-[#F8F9FA] py-10">
          <div className="space-y-4 text-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
            <div className="flex flex-col justify-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why Choose Comfygen for your Upcoming NextJS Development Projects?
              </h2>
              <p className="text-base text-slate-900 md:text-center text-justify tracking-tight">We are the expertise NextJS Development Company specialized offering unparalleled best and a tailored approach to every project. Here are six compelling reasons why partnering with Comfygen for your NextJS development needs is the best choice:</p>
            </div>
            <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
              {JSON_DATA.WhyChooseComfygen.map((elem) => {
                const { title, decs, num } = elem;
                return (
                  <div key={num} className="space-y-4 p-6 bg-white border border-[#0E1F51] rounded-tl-2xl rounded-br-2xl">
                    <p className="text-2xl font-[800] text-[#0E1F51]">{title}</p>
                    <p className='text-slate-900'>{decs} </p>
                  </div>
                )
              })
              }
            </div>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Next.js Development" />
        <BlogSection initialData={initialData} />
      </div>
    </>
  )
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