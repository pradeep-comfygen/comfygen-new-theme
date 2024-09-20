import Image from "next/image";
import React, { useRef } from "react";
import Head from "next/head";
import { RiCoinLine, RiCoinsLine } from "react-icons/ri";
import { AiOutlineTranslation } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiBitcoin, BiShapePolygon } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { VscCircleFilled, VscServerProcess } from "react-icons/vsc";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/doctor.json"
import styles from './styles.module.css'
import { TbCurrencySolana } from "react-icons/tb";
import Link from "next/link";
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})

const AppointmentProcess = dynamic(() => import('./components/AppointmentProcess'), {
  loading: () => <p>Loading...</p>,
})

const Tech = dynamic(() => import('./components/tech'), {
  loading: () => <p>Loading...</p>,
})

const SocialTab = dynamic(() => import('./components/SocialTab'), {
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
const WhyChoose = dynamic(() => import('../components/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import("../components/HireSection"), {
  loading: () => <p>Loading...</p>,
});


const Services = [
  {
    "num": "1",
    "img": "/img/zocdoc.webp",
    "title": "Apps Like ZocDoc ",
    "decs": "We can build reliable and seamless doctor booking app development services, solutions for you, just apps like ZocDoc. The application will revolutionize the meet-ups between doctors and patients in a few clicks. The doctor appointment application development accommodates hundreds and more best doctors’ profiles, and the patients have numerous options to find one of the best  consultants to resolve and treat their problems."
  },
  {
    "num": "2",
    "img": "/img/doc-plus.webp",
    "title": "Apps Like Doctor Plus",
    "decs": "We can build a groundbreaking healthcare app like Doctor Plus, which is going to transform healthcare work processes. On-demand doctor booking appointment app developed by our expert developers will ease the appointment task much conveniently. Most importantly, we will also make the application advanced with some extra unique and innovative custom features."
  },
  {
    "num": "3",
    "img": "/img/lybrate.webp",
    "title": "App Like Lybrate",
    "decs": "Lybrate helps doctors find prescriptions, billings, documents, and other information because this app keeps all the records in one place. Also, the app enables you to schedule appointments as well. The mobile developers at Comfygen can build similar apps like Lybrate with some advanced features and innovative ideas to grasp more engagement."
  },
  {
    "num": "4",
    "img": "/img/mfine.webp",
    "title": "Apps like mFine ",
    "decs": "mFine is another app for online doctor consultation. It is a complete package solution, where the patients can book for lab tests, health packages, skincare, care programs, scans & X-Rays, and more. We can build similar apps with better engagement possible for businesses to stand against the competition."
  },
  {
    "num": "5",
    "img": "/img/apps-like-mycure.webp",
    "title": "Apps Like MyCure",
    "decs": "It’s an enterprise-level healthcare solution that works online and offline both. It has occupied multi-speciality clinics, healthcare centres, diagnostics, etc. This is a large-scale healthcare management solution app; which our developers can create by adding some custom features for better attractions. "
  },
  {
    "num": "6",
    "img": "/img/apps-like-bookmed.webp",
    "title": "Apps Like Bookmed",
    "decs": "Bookmed is one prominent doctor appointment application with seamless navigations and streamlined functioning. You can select the city, choose the speciality, and make virtual appointments if required. Our healthcare developers can create such applications and even engage patients with simpler and smooth navigational and operational features."
  }
  ,
  {
    "num": "7",
    "img": "/img/apps-like-1MG.webp",
    "title": "Apps Like 1MG",
    "decs": "1MG is a huge healthcare solution, where the users can choose to consult with doctors, purchase pharmaceuticals, try ayurveda, treat severe medical health problems, and more. This application is a complete solution, and we have the potential to build apps like 1MG. Our developers are proficient to add different services, features, and functions into the app to make it more competitive and market friendly."
  },
  {
    "num": "8",
    "img": "/img/apps-like-healthtap.webp",
    "title": "Apps Like HealthTap",
    "decs": "It is a virtual primary care solution. You can choose the doctor based on his speciality and get treated for different medical conditions; such as children’s health, mental & behavioural issues, elder citizens medical concerns, sexual healthcare, and more. This application has raised approx. $37.85M. Our developers can build such competitive apps to grow your business quicker."
  },
  {
    "num": "9",
    "img": "/img/apps-like-practo.webp",
    "title": "Apps Like Practo",
    "decs": "Within ten years of its establishment, Practo has become a one-stop solution for health-related services and hospitality. This application is now demanded by 15 countries. Do you want a similar kinda application to build? Well, we have experienced healthcare developers to create next-gen healthcare solutions and appointment booking apps to engage a vast audience."
  }
]

const Chartacterstics = [
  {
    "num": "1",
    "img": "/img/easy-to-use.svg",
    "title": "Easy to Use ",
    "decs": <p className='break-all text-slate-800 '>The app is much easier and simpler to use, where the patients need to login and find doctors to book for consultation.</p>

  },
  {
    "num": "3",
    "img": "/img/payment-security.svg",
    "title": "Payment Security",
    "decs": <p className='break-all text-slate-800 '>There are various payment gateways integrated with security. The users can make payment through ant payment gateways suits best with no risks at all</p>
  },
  {
    "num": "2",
    "img": "/img/personalised-healthcare.svg",
    "title": "Personalised Healthcare",
    "decs": <p className='break-all text-slate-800 '>The patients can take personalised treatment according to their medical problem. These apps deliver on-demand services based on the requirements of the users.</p>
  },

  {
    "num": "4",
    "img": "/img/live-video-consultation.svg",
    "title": "Live Video Consultation",
    "decs": <p className='break-all text-slate-800 '>The patients can fix live video consultations with doctors through the application in real time.
    </p>
  },
  {
    "num": "5",
    "img": "/img/easy-to-book-appointment.svg",
    "title": "Easy to Book Appointment",
    "decs": <p className='break-all text-slate-800 '>The patients can book doctor appointments through online appointment and scheduling apps with a few taps, which save time and get things done conveniently.
    </p>
  }

];



export default function Ecommerce(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Best Doctor Booking App Development Company In Canada & The USA </title>
        <link rel="canonical" href="https://www.comfygen.com/doctor-appointment-app-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Doctor Booking App Development Company In Canada & The USA" />
        <meta property="og:description" content="Comfygen is Top rated Doctor Appointment App Development Company In Canada & The USA. Enhance and update your Doctor Appointment app with our expertise. Tap into Comfygen Global Network to Hire On-Demand doctor appointment app developers Today!" />
        <meta property="og:url" content="https://www.comfygen.com/doctor-appointment-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:13:21+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name='description' content="Comfygen is Top rated Doctor Appointment App Development Company In Canada & The USA. Enhance and update your Doctor Appointment app with our expertise. Tap into Comfygen Global Network to Hire On-Demand doctor appointment app developers Today!" />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Top Doctor Appointment App Development Company In India!" />
        <meta property="og:facebook_description" content="As the on-demand Doctor Appointment Development Company in India, Comfygen offers Top-Notch Online Doctor Booking Application Development Services in India for Android app development and iOS app development platform." />
        <meta property="og:twitter_title" content="The Best Doctor Appointment App | On-Demand Doctor App Development Company | Online Dr Booking App development Services | Doctor Scheduling App India | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen offer top-notch Doctor Booking App Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. We are dedicated to enhancing and updating your Doctor Appointment app. Find Top Talent Globally & Launch Your Project Today!" />
        <meta property="schema:type" content="Website" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='en-us' />
        <meta name='abstract' content='Doctor Booking App Development Company | Doctor Appointment App Development Services | Comfygen' />
        <meta name='summary' content='We offer top-notch Doctor Booking App Development Services in India, specializing in creating medical applications for doctors, clinics, and hospitals. Our expert team is dedicated to enhancing and updating your Doctor Appointment app to meet the latest standards.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a comprehensive Custom Doctor Appointment App Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='On-Demand Doctor App Development Company in India' content='Are you looking to hire the best On-Demand Doctor App Development Agency in India for your project? We provide skilled Mobile App developers and programmers for hire.' />
        <meta name='category' content='On-Demand Doctor App Development Company In jaipur: Find Expert On-Demand App Developers for Doctor Booking Apps with Expertise in Android app development and iOS app development! We are providing you a better Doctor Booking App Development Service in India. We help to develop medical applications for doctors, clinics, hospitals. Our skilled team helps you to develop the updated version of your Doctor Appointment app.' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Best hire Doctor On-Demand App Design and User Experience company in Jaipur, India - We builds unique online doctor appointment booking applications for hospitals, clinics, and individual doctors.' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150" />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Hire Best Doctor Appointment App development Company India | offshore Doctor Appointment App developer or Programmers' />
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
                heading='Doctor Appointment App Development Company'
                ptag='Comfygen is the best doctor appointment booking app development company In Canada & The USA, where the interested investors can get a super-efficient and AI-Driven advanced application to pitch and grow in the marketplace. We are your support, where the years of experienced and practised mHealth app developers can build a million dollar application with custom doctor booking app development services. To know how we can build you as a well-renowned brand in the market, know who we are and what we can do.'
                btnName="Discuss Now"
                btnLink='/contact-us'
              />
            </div>
          </div>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row py-10 md:space-x-10 md:space-y-0">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="/img/build-an-online-doctor-appointment-app-development.webp"
              alt=" Build an Online Doctor Appointment App Development for Scaling Healthcare Business "
              className="rounded-lg"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full space-y-4 md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Build an Online Doctor Appointment App Development for Scaling Healthcare Business
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">Comfygen is a leading <a className="text-blue-500" href="/healthcare-app-development">healthcare app development company</a>  in Jaipur, India, which builds different types of mHealth app development services. We can make your on-demand doctor booking mobile app development super engaging and advanced, which claims to accelerate your healthcare app development business in the industry. Our company knows the worth of emerging technology, that is why we have hired super-talented and skillful healthcare mobile app developers. These expert <a className="text-blue-500" href="/hire-mobile-app-developer">mobile app developers</a>  can build a competitive Doctor Appointment App development Services to fulfil every possible needs of users.  </p>
              <p className="text-base text-black text-justify">The global mHealth market size was valued at $43.5 Billion in 2022, where online doctor consultation market was projected to build $26.29 Billion in 2024. Investing in building a doctor appointment booking app development is very profitable. </p>
              <p className="text-base text-black text-justify"> Do you know why we are so proud of ourselves? Because we have reasons for that: </p>
              <ul className="list-disc	px-10">
                <li>We have highly experience and years of practised mobile app experts</li>
                <li>Our Doctor Booking Mobile app Programmers / developers can make the best use of modern technologies</li>
                <li>Company is dedicated to build successful Doctor Booking mobile app development at affordable cost</li>
                <li>Our Doctor Booking Mobile app development services are available 24*7 for clients ensures for transparency</li>
              </ul>
            </div>
          </div>
        </section>


        <ContactFromCenter />
        {/* services */}
        <section className=" bg-[#F3F4F6]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
            <div className="space-y-6">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  On Demand <span className="text-blue-600">Doctor Booking App Development</span>  Services
                </h2>
                <p className="text-base text-slate-800">Get instant medical attention from the expert doctors through our efficient on demand doctor booking app development services. Our applications offer personalised Demand Doctor Booking App Development Services and Solutions, fulfil certain needs, and also provide quick consultations to patients. </p>
                <p className="text-base text-slate-800">Experience the convenient and customised healthcare app develpopment solutions and fix the medical appointment app development services through our app development solution.</p>
              </div>
              <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
                {
                  Services.map((elem) => {
                    const { title, img, decs, num } = elem;
                    return (
                      <div key={num} className="p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group  group hover:bg-orange-100">
                        {/* <Link href={url} passHref={true} className="space-y-4"> */}
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold ">
                          <Image width={110} height={110} src={img} alt={title} title={title} className="w-16" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                        <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">{decs}</p>
                        {/* </Link> */}
                      </div>
                    )
                  })
                }
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us ' className="mt-5" >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    LET'S CONNECT TO GROW YOUR BUSINESS
                  </button>
                </a>
              </div>


            </div>
          </div>
        </section>
        {/* <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
          <p className="text-2xl font-bold">Have a Query?</p>
          <div>
            <Link href="/contact-us" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Contact Now
              </span>
            </Link>
          </div>
        </div> */}
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Streamline Patient Management with <span className="text-blue-600"> Doctor Appointment Booking</span>  App
                </h2>
                <p className="text-base text-slate-800">Our doctor appointment booking app is not only the saviour of patients, but enables the hospitals and clinics to streamline patient management as well. It is an incredible solution, which can work at both ends providing solidifying leverages</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {JSON_DATA.Streamline.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="p-4 relative bg-slate-100 rounded-[17px] space-y-6 ">
                      <div className="space-y-2">
                        <h3 className="text-lg  text-[#0E1F51] font-semibold group-hover:text-white">
                          {title}
                        </h3>
                        <div className="flex justify-start space-x-2">
                          <div className="w-10 h-1 rounded-full bg-blue-500 "></div>
                          <div className="w-6 h-1 rounded-full bg-blue-500 "></div>
                        </div>
                      </div>
                      <p className=" text-[#000000] group-hover:text-white/90">
                        {decs}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us ' className="mt-5" >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Get A Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className=" bg-center bg-fixed bg-cover " style={{ backgroundImage: `url("/img/get-doctor-bg.webp")` }}>
          <div className='bg-[#161f33]/80 py-10'>
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">

              <div className="flex flex-col justify-center mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Get Doctor Appointment At Hospitals or At Home </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">Do you know, these on-demand doctor appointment applications won’t only schedule a meeting with a doctor, but this can work for you either way as well. We believe in client’s satisfaction; so we call up and arrange things exactly how the patient needs.</p>
              </div>
              <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.GetDoctor.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="space-y-2 rounded-tl-[55px]	 rounded-br-[55px] border p-8 bg-[#02122D]">
                      <p className="text-2xl font-bold text-white">{title}</p>
                      <p className='text-white'>{decs} </p>
                    </div>
                  )
                })
                }
              </div>
              <div className="">
                <a href="/contact-us" >
                  <button className="shadow-2xl  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Get Started
                  </button>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Importance of Doctor Appointment Booking Apps  section pending */}
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Benefits of Doctor Appointment App
                </h2>
                <p>Doctor appointment apps have become integral for those, who frequently need doctor’s assistance. To know better, we have reasons to show its importance:</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs, } = elem;
                  return (
                    <div className={`${styles.BenefitsCard} border-2 border-[#97BDFA] p-6 space-y-4 bg-white rounded-[15px] relative`}>
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover" width={60} height={60}
                          alt={title} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#3B82F6]">{title}</h3>
                      <div>
                        {decs}

                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us ' className="mt-5" >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-[#223547]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
            <div className="flex flex-col justify-center items-center mx-auto space-y-4">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                How Does Our On-Demand Doctor’s Appointment App Work?
              </h2>
              <p className="text-base text-white text-center">Our Dr. appointment app solutions fulfil the needs of users entirely from finding the best to make a payment and fix the one. There are some that users need to follow for the process done: </p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {
                JSON_DATA.OnDemandDoctor.map(doctor => {
                  return (
                    <div key={doctor.num} className="border p-4 space-y-2 shadow transition-all hover:scale-105 duration-700 hover:bg-sky-100 group">
                      <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{doctor.title}</h3>
                      <p className="text-base text-white  group-hover:text-black">{doctor.decs}</p>
                    </div>

                  );
                })
              }
            </div>

            <div className="flex justify-center items-center mt-5">
              <a href='/quote ' className="mt-5" >
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  ENQUIRE NOW
                </button>
              </a>
            </div>



          </div>

        </section>
        <Tech />
        <SocialTab />
        {/* <section className="bg-gray-100">
          <div className="py-5 lg:py-10  space-y-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="flex flex-col justify-center text-center space-y-4">
              <h3 className=" text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51] text-center">Features of On-Demand <span className="text-blue-600">Doctor Appointment Scheduling </span>App </h3>
              <p className="text-base">Our app solution makes the job easier for patients and doctors, both. Here are the features we deliver in the application.</p>
            </div>
            <div className="grid  grid-cols-1 gap-5 lg:grid-cols-2 py-6">
              <div className="bg-[#F45F391A] p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className=" text-2xl font-bold text-black md:px-2 md:justify-start">Patient Panel</h3>
                <ul className="px-8 space-y-2 list-disc">
                  {JSON_DATA.myList2.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/10 p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className=" text-2xl font-bold text-black md:px-2 md:justify-start">Doctor Panel</h3>
                <ul className="px-8 space-y-2 list-disc">
                  {JSON_DATA.myList1.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-500/10 p-5 rounded-[40px] space-y-5  w-full py-5">
                <h3 className=" text-2xl font-bold text-black md:px-2 md:justify-start">Admin Web Panel</h3>
                <ul className="px-8 space-y-2 list-disc">
                  {JSON_DATA.myList4.map((item, index) => (
                    <li key={index}>{item} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}


        <AppointmentProcess />
        <div className="py-10">
          <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row space-y-10  md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left bg-[#F5EDFA] p-6 rounded-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">How Comfygen Can Help in Doctor Booking App Development? </h2>
              <p className="text-base text-left text-black/80">Comfygen has a user-centric and industry-centric approach, where they build optimised app solutions catering to all the needs and demands of the marketplace. We are covered by a team of experienced and expert mobile app developers in India, who know how the market standards are modernising and what more users are demanding.</p>
              <p className="text-base text-left text-black/80">Our healthcare app development process includes analytics, and we can assist your system generate insightful data that will enhance the overall quality of treatment you give patients. Our company specialises in creating personalised healthcare apps and has highly qualified developers that can create both complex unique features and clone apps.</p>
              <ul className='space-y-2 text-left'>
                {JSON_DATA.myList3.map((item, index) => (
                  <li className="flex text-base text-black/80" key={index}><span className="pr-2 mt-1.5 text-[#4f4f50]">
                    <VscCircleFilled className="w-4 h-4" />
                  </span>{item} </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center w-full h lg:justify-end lg:pb-0 pb-6">
              <Image src="/img/how-comfygen-can-help.webp" alt="BFeatures of Sports betting Application" className="rounded-lg" height={500} width={500} />
            </div>
          </section>
        </div>
        <section className="bg-center bg-no-repeat bg-cover lazyload bg-fixed " style={{ backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")` }}>
          <div className='bg-[#000]/90 lg:py-20 py-10'>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#627BF4]/60 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>

        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="" />
        <BlogSection initialData={initialData} />
      </div >
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