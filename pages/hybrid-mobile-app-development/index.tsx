import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './styles.module.css'
import React from 'react'
import Head from 'next/head';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiTeamLine, } from "react-icons/ri"
import { BsExclamationOctagon, BsLayers } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineAppstore } from 'react-icons/ai';
import dynamic from 'next/dynamic';
import JSON_DATA from "./json/hybrid.json"
import LazyLoad from 'react-lazy-load';

const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const NewSection = dynamic(() => import('../components/NewSection'), {
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

const HeroSectionFormForHybrid=dynamic(()=>import('../components/HeroSectionFormForHybrid'))
const HireSection = dynamic(() => import('../components/HireSection'), {
  loading: () => <p>Loading...</p>,
})
const Advice = dynamic(() => import('../components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const ChooseUs = [
  {
    num: "1",
    icon: <BiNetworkChart className="text-blue-400" size={60} />,
    urlLink:"ca/application-consulting-services",
    title: "Hybrid Application Planning and Idealization",
    decs: "Getting familiar with your project idea and objectives is the first step of our mobile app development process. Before creating a design for each page we will refine the plan and prepare a detailed insight.",
  },
  {
    num: "2",
    icon: <MdOutlineDesignServices className="text-blue-400" size={60} />,
    title: "Hybrid Application Design And Development",
    decs: "Designing the app is the next step. An app visual appeal is achieved by adding graphics, icons, and features during this phase. During this stage, we will also implement server-side elements and add the required functions to the app.",
  },
  {
    num: "3",
    icon: <AiOutlineAppstore className="text-blue-400" size={60} />,
    title: "Hybrid Application Testing & Deployment",
    decs: "The testing team will conduct the necessary revisions at this stage to ensure the app runs smoothly. After all issues are resolved, the app will receive the final touches.We have reached the end of the process! Our plan is to deploy the application in the Google Play Store. The app is now available to your customers, and you can generate a profitable return on investment.  ",
  },

];
const WhyChooses = [
  {
    num: "1",
    bg: "#F45F391A",
    icon: <BsLayers size={60} className="text-blue-500" />,
    title: "Transparency at 100%",
    decs: "During the entire development cycle, we provide our clients with full visibility into the progress of the project.  ",
  },
  {
    num: "2",
    bg: "#6C54DE1A",
    icon: <BsExclamationOctagon size={60} className="text-blue-500" />,
    title: "Support for technical issues",
    decs: "Our technical support team gives you a seamless experience by answering all of your questions and doubts. ",
  },
  {
    num: "3",
    bg: "#82AB101A",
    icon: <RiTeamLine size={60} className="text-blue-600" />,
    title: "Experience of more than six years",
    decs: "Having a team of experienced Hybrid app developers who are familiar with Hybrid development frameworks, we are one of the top Hybrid app development companies in India, the USA, and the UAE.  ",
  },

];
export default function Mobile(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Best Hybrid Mobile App Development Company in India and the USA | Comfygen</title>
        <meta name='description' content='Comfygen, the premier hybrid mobile app development company in India and USA, offers top-notch hybrid mobile app development services to bring your app vision to life.  Contact us today!' />
        <link rel='canonical' href='https://www.comfygen.com/hybrid-mobile-app-development' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Are you looking for best Hybrid App Development Company | Hire Hybrid App Developers" />
        <meta property="og:facebook_description" content="Looking for a reliable Hybrid mobile app development Industry? Our expert Hire Hybrid App Developers provide end-to-end Hybrid mobile app development services that meet your business needs." />
        <meta property="og:twitter_title" content="Top Hybrid Mobile App Developers Company India & USA | Hybrid App Development Services | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen, the Best Hybrid mobile application development company in India, UK, UAE & USA. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='en-us' />
        <meta name='abstract' content='Hybrid Mobile App Development Company in  India' />
        <meta name='summary' content='Comfygen is the No 1 Hybrid mobile app development Industry in India, USA.' />
        <meta name='author' content='Mr. Dilip khan, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Hybrid Mobile App Development Company in  India' content='Comfygen is a leading Hybrid Mobile app development company in jaipur, India. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5.' />
        <meta name='category' content='Hybrid Mobile App Development Company in  India' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Hybrid Mobile Application Development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Hybrid Mobile App Development Company in  India' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
      </Head>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
        <div className=" bg-[#1B1C30CC]">
          <LazyLoad height={60} offset={100}>
            <Header />
          </LazyLoad>
          <div className="md:py-28 py-5">
            <HeroSectionFormForHybrid
              heading='Best Hybrid Mobile App Development Company '
              ptag="Providing all your software development needs in India and USA, Comfygen is a leading Hybrid App Development Service, Solution Company. We offer expert advice on selecting the most appropriate hybrid development tools and incorporating advanced technologies to develop custom business applications that meet your requirements seamlessly."
              li='Experts with 15+ Years of Experience'
              li1='Security & IP Protection'
              li2='Flexible Engagement Models'
              li3='On-Time Project Delivery'
              li4=' Strict NDA Terms'
              li5='Latest tools & practices '
              btnName="Discuss Now"
              btnLink='/contact-us'
            />
          </div>
        </div>
      </div>
      <NewSection NewSection={JSON_DATA.NewSections} />
      <ContactFromCenter />
      <div className="py-10 bg-white">
        <section className="w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Hybrid App <span className="text-blue-500">Development</span>{" "} Services
              </h2>
              <p>Accelerate your digital transformation with our cutting-edge hybrid app development services. Harnessing the power of cross-platform compatibility, cost-effectiveness, and seamless user experiences, our team delivers high-performing, feature-rich apps that cater to diverse business needs. Partner with us to unlock the full potential of hybrid app development companies in Jaipur and elevate your business to new heights</p>
            </div>
            <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
              {ChooseUs.map((elem) => {
                const { title, icon, decs, num ,urlLink} = elem;
                return (
                  <ServiceSection
                    key={num}
                    Icon={icon}
                    title={title}
                    Ptag={decs}
                    urlLink={urlLink}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Advice
        heading='Best Hybrid App Development Service Provider in India'
        ptag='We offer Hybrid App Development services that are not limited to smartphones. Our Hybrid app development team has extensive experience working on a wide range of hybrid app development devices. Having developed custom hybrid application development for Android  and iOS, we have gained a strong understanding of both platforms. As possible solutions, Android hybrid app development and iOS Wear hybrid app development, Android hybrid app development and iOS TV hybrid app development, Smartphones, Android and iOS tablets, and Android and iOS tablets have all been considered.'
        ptag1="With Hybrid app development software, we can create apps that are easy to use and intuitive. More than a million people have downloaded our Hybrid app developers' apps on the Google Play Store and ios store."
        imgSrc='/images/best-hybrid-app-devlopment-service-provider.webp'
        imgW={500}
        imgH={500}
        altTag=' Best Hybrid App Development Service Provider' />
      <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />
      <div className="bg-center bg-no-repeat bg-cover lazyload lg:py-20 py-20" style={{ backgroundImage: `url("/img/hire-hybrid-mobile-app-developer.webp")` }}>
        <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#9A4ECC]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
          <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
        </section>
      </div>
      <Advice
        heading='Hybrid Web Application Development Company In Jaipur '
        ptag="At Comfygen Softwares' Hybrid app developers create apps that not only deliver utility but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Hybrid applicationss for hundreds of businesses across a wide range of industries over more than a decade."
        ptag1="The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning app development, IoT app development, augmented reality app development, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition. We are known for our uncompromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned."
        imgSrc='/images/hybrid-web-application-development.webp'
        imgW={500}
        imgH={500}
        altTag='Hybrid  web application development' />
      <div className="py-10">
        <section className="items-center w-11/12  space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
          <div
            className="w-full space-y-6 text-center md:text-left">
            <div className="flex flex-col space-y-2">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                Why Choose Indian Company “Comfygen” For Your  <span className='text-blue-500'>Hybrid App Development Services?</span>
              </h2>
              <p>With the most advanced technologies, Comfygen strives to provide innovative and better results. Count on us for dependability, trust, and reliability. Keeping up with the latest trends and anticipating changes, we ensure that it is enforced in a way that empowers you digitally.</p>
            </div>
            <div className="grid gap-6 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
              {WhyChooses.map((elem) => {
                const { title, icon, decs, num } = elem;
                return (
                  <div key={num}
                    className="group border p-6 space-y-4 transition-all duration-200  group-hover:w-56 group-hover:h-56  rounded-[40px]  cursor-pointer " style={{ backgroundColor: elem.bg }} >
                    <div className="flex items-center justify-start">
                      <div className="flex items-center justify-center w-24 h-24">
                        {icon}
                      </div>
                    </div>
                    <div className='space-y-3'>
                      <h3 className="text-lg font-semibold ">
                        {title}
                      </h3>
                      <p className="break-all text-slate-800 ">
                        {decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
        <div className={`${styles.mobileappsolution} w-full lazyload`}>
          <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
            <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
              {
                JSON_DATA.MobileSolution.map(mobile => {
                  return (
                    <div key={mobile.num} className='space-y-6' >
                      <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">{mobile.head}  </h2>
                      <p className="space-y-0 text-base text-white md:text-xl ">{mobile.para} </p>
                    </div>
                  );
                })
              }
              <div className='grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 '>
                {
                  JSON_DATA.Solution.map(mobile => {
                    return (
                      <div key={mobile.num} className='flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100'>
                        <a href={mobile.url} title={mobile.title}>
                          <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                            <div className='md:bg-white md:p-2 md:rounded-lg'>
                              <Image title={mobile.title} alt={mobile.title} src={mobile.img} height={50} width={50} />
                            </div>
                            <p className='py-4 text-lg font-semibold text-gray-800 '>{mobile.title}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <TalkExpert />
      <BlogSection initialData={initialData} />
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