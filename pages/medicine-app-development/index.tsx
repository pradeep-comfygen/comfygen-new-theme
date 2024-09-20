import Image from "next/image";
import React, { useRef, useState } from "react";
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
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";


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
const WhycomfygenSection = dynamic(() => import('../components/WhycomfygenSection'), {
  loading: () => <p>Loading...</p>,
})

const Services = [
  {
    num: "1",
    img: "/img/pharmeasy.webp",
    title: "PharmEasy",
    decs: "We can develop medicine ordering and medicine delivery app development services similar to PharmEasy. Users could upload prescriptions for home delivery by linking to over 20,000 pharmacy app development partners. Custom features we can add:",
    features: ["Prescription scanner simplifies onboarding", "Gamified rewards boost engagement", "Predictive auto-refills for chronic medications"],
    decs1: "Strong logistics integrations would enable transparent order tracking with courier and inventory syncing. Advanced machine learning algorithms could also suggest products matching past purchases.",

  },
  {
    num: "2",
    img: "/img/netmeds.webp",
    title: "Netmeds",
    decs: <p>We can create full-service medicine <a className="text-blue-500" href="/e-commerce-app-development">e-commerce app development</a>  platforms like Netmeds, allowing online consultations and purchases. Unique highlights may include:</p>,
    features: ["Personal health profiles guide product suggestions", "Automated prescription transfers to Netmeds pharmacy", "Symptom checker for over-the-counter recommendations"],
    decs1: "Drawing on vast medicine catalogues, we can implement machine learning models to serve context-aware recommendations, mimicking in-pharmacy guidance. This boosts order values and buyer confidence.",

  },
  {
    num: "3",
    img: "/img/apollo-pharmacy.webp",
    title: "Apollo Pharmacy is available 24/7.",
    decs: "Our expert team can develop integrated healthcare app development platforms encompassing telehealth app development, diagnostics app development, prescriptions app development, and medicine delivery app development - a robust ecosystem like Apollo 24/7. One-stop features we can enable:",

    features: ["Lab test scheduling with 1000+ diagnostic partners", "Integrated video consultations with prescription routing", "Post-visit care plan access through the patient portal"],
    decs1: "Standing up end-to-end workflows requires extensive infrastructure integration into both digital systems and physical supply chains. Our dedicated medicine app engineering teams specialize in enabling these connections.",

  },
  {
    num: "4",
    img: "/img/apps-like-1MG.webp",
    title: "1mg",
    decs: "We can build robust medicine application development platforms like 1mg, enabling telehealth consultations, diagnostic test bookings, and reliable medication deliveries app development. Useful custom additions may include:",
    features: ["Chronic care programs with medication adherence tracking", "Tools help validate medicine's authenticity and prevent counterfeits", "Automated prescription transfers to 1mg's licensed pharmacy"],
    decs1: "A key aspect is developing extensive supply chain integrations to ensure consistent availability for all medication types. Our teams can architect the required links into pharmaceutical hubs across geographies.",

  },
  {
    num: "5",
    img: "/img/apps-like-practo.webp",
    title: "Practo",
    decs: "At Confygen, we can create physician marketplace app development like Practo that allow appointment bookings across specialities, fees, locations, etc. Unique differentiators could encompass:",
    features: ["ML-assisted provider finder matching symptoms", "Custom intake forms for faster consultations", "Post-visit care plan access via web development and mobile app development"],
    decs1: "A seamless patient and doctor experience requires enabling intricate coordination workflows under the hood. Our full-stack engineering strengths unlock these capabilities through judicious API development and system integration.",

  },

]


const Chartacterstics = [
  {
    "num": "1",
    "img": "/img/fitness-apps.webp",
    "title": "Fitness App Development ",
    "decs": <p className=' text-slate-800 '>Fitness app development empowers users to take health into their own hands. We build personalized platforms with tracking tools and communities tailored to conditions and goals like weight loss, diabetes fitness, or pregnancy wellness. Gamification elements drive motivation, while clear metrics summaries simplify progress visibility. Integrations with wearables like Fitbit expand data capture abilities. Compliant data storage applies medical-grade protections, guarding sensitive health information.</p>

  },
  {
    "num": "3",
    "img": "/img/telemedicine-apps.webp",
    "title": "Telemedicine App Development",
    "decs": <p className=' text-slate-800 '>Telehealth app development platforms bridge healthcare access gaps through virtual care capabilities. Our experts optimize video visit workflows, balancing convenience and clinical app development validity. Globally accessible  Medicine App  app development scheduling enables expanded reach. Prescription routing, care plan sharing, and integration across hospital IT systems ensure continuity .</p>,
    "decs1": <p>Architecting real-time virtual triaging at scale requires overcoming latency and reliability engineering challenges - intricate workflows our telehealth app developers have mastered through past deployments.
    </p>
  },
  {
    "num": "2",
    "img": "/img/medication-tracking-apps.webp",
    "title": "Medication Tracking App Development",
    "decs": <p className=' text-slate-800 '>Medication non-adherence costs healthcare app development systems billions of dollars annually. Our medicine app development services employ personalized tools, improving compliance. Users manage complex regimens via simple interfaces scheduling reminders, logging adherence, refilling scripts, and monitoring effectiveness. Family member and caregiver portals expand collaborative support. Back-end analytics surface usage trends for prescriber care optimization. Validation against extensive drug databases also uncovers risks that inform clinical app development decision-making.</p>
  },

  {
    "num": "4",
    "img": "/img/ehr-emr-apps.webp",
    "title": "EHR & EMR App Development",
    "decs": <p className=' text-slate-800 '>EHR & EMR systems unite patient health information. Our experts optimize clinical documentation workflows through tablet interfaces, expediting bedside data capture. Voice-enabled reporting or automated readings from connected devices reduce duplication.</p>,
    "decs1": <p>HL7 FHIR integration with legacy records combines longitudinal histories across networks. Modular infrastructure aligns with healthcare provider requirements, spanning multi-site systems to independent physician needs - all anchored on scalability to grow from single clinics to large hospital networks.</p>
  },
  {
    "num": "5",
    "img": "/img/healthcare-crm.webp",
    "title": "Healthcare CRM App Development",
    "decs": <p className=' text-slate-800 '>CRM systems aim to retain and nurture patients by engendering trust. Our patient portal solutions centralize appointment scheduling, billing, prescription management, and communication. ML recommender algorithms suggest health tips and community events matching diagnosed conditions, enrolled care programs, or treatment plans. Sentiment analysis offers real-time voice-of-the-customer insights from reviews. HIPAA-aligned security controls maintain safety over sensitive, identifiable health information accessible across platforms.
    </p>
  },
  {
    "num": "6",
    "img": "/img/hospital-inventory-management.webp",
    "title": "Hospital Inventory Management App Development",
    "decs": <p className=' text-slate-800 '>RFID and IoT technologies are transforming hospital supply chains through automation. Our teams develop custom interfaces with edge devices like Bluetooth asset trackers that pair with backend dashboards. Precise locations for wheelchairs, vital sign monitors, and other movable equipment become possible.</p>,
    "decs1": <p>Sensor integrations measuring real-time temperature and humidity help predict environmental risks and failures across hospital sites. Inventory optimization algorithms balance on-hand supplies and risk mitigation - crucial for emergent needs like N95 masks during the pandemic.</p>
  }

];





const contentData = [
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Seamless Appointment Management",
    text: "Our Medicine app development makes it easy to book appointments. You can schedule visits on your own. The Medicine app development will sync with your calendar. It sends reminders so you don't forget. You can even have video visits with your doctor.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Comprehensive Health Tracking",
    text: "The Medicine app development services help you track your health. Log your symptoms, moods, and diet. Connect data from your fitness app development services devices. Share information with your care team. See your progress over time. Get alerts if something looks concerning.",
    imageSrc: "/img/advisor-img.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Prescription and Medicine Tools",
    text: "Prescriptions present many complications. The app can send them right to your pharmacy app development, ask for refills and transfers, recognize pills and help with dosage, remind you to take your Medicine app development, and video chat with a pharmacist.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Engaging Patient Education",
    text: "The Medicine app development teaches you about health. It has animated explainers about conditions and treatments. Look up info on medications. Get helpful health tips. See your personalized care plan. Connect with others in health forums.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Streamlined Billing and Insurance",
    text: "Medicine mobile app makes billing easier. Scan your insurance card to save the details. Submit claims and check their status. Set up payment plans. Get paperless bills.",
    imageSrc: "/img/advisor-img.webp"
  },

];
const contentData2 = [
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Diverse Communication Channels",
    text: "This best medical app lets you stay connected with your healthcare app development team. Message directly with providers. Share photos of health issues. Get announcements sent to your caregivers. Receive check-ins automatically. Two-way communication keeps everyone informed.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "ePrescriptions and Medication Managemen",
    text: "The app automates prescriptions. Doctors can digitally sign and send them to your pharmacy. Connect your pharmacy loyalty card. Scan your pills to get safety info. Request refills with alerts to your doctor. Modern tools help you take meds properly.",
    imageSrc: "/img/advisor-img.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Symptom Checker and Virtual Triage",
    text: "The app has a smart symptom checker. Describe your issues and it asks follow-up questions. It checks your symptoms against medical info. Then it suggests where to get care based on urgency. You can book visits right from the suggestions.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "Image and Video Recognition",
    text: "Machine learning models enhance remote diagnosis and monitoring. The app uses AI for remote care. It can screen eye changes from retinal images. Further, it can detect skin issues to assist dermatology and analyze physical therapy movements. It can flag breathing problems from chest X-rays. Special algorithms expand virtual care options.",
    imageSrc: "/img/a-symphony-of-software-and-passion.webp"
  },
  {
    icon: <FaCode className="text-[28px]" />,
    heading: "PHI Safeguards",
    text: "The app protects your private health data. It uses strong encryption for HIPAA compliance. Providers can only see what they need. All activity is logged. Reports use anonymous grouped data. Built-in security keeps your info safe as the app adds features.",
    imageSrc: "/img/advisor-img.webp"
  },

];






export default function Ecommerce(props) {


  const [hoveredContent, setHoveredContent] = useState('');
  const [game, setGame] = useState<any>({});
  let { initialData } = props;
  return (
    <>
      <Head>
        <title> Medicine App Development Company In India &  The USA  </title>
        <link rel="canonical" href="https://www.comfygen.com/medicine-app-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Medicine App Development Company In India &  The USA" />
        <meta property="og:description" content="Comfygen is the best Medicine App Development Company In India & The USA, to builds secure, compliant healthcare mobile app development solutions. Hire our Medicine app developers today!
" />
        <meta property="og:url" content="https://www.comfygen.com/medicine-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:13:21+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name='description' content="Comfygen is the best Medicine App Development Company In India & The USA, to builds secure, compliant healthcare mobile app development solutions. Hire our Medicine app developers today!" />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Top  Medicine App  App Development Company In India!" />
        <meta property="og:facebook_description" content="As the on-demand  Medicine App  Development Company in India, Comfygen offers Top-Notch Online Medicine Booking Application Development Services in India for Android app development and iOS app development platform." />
        <meta property="og:twitter_title" content="The Best  Medicine App  App | On-Demand Medicine App Development Company | Online Dr Booking App development Services | Medicine Scheduling App India | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen offer top-notch  Medicine App Development Services in India, specializing in creating medical applications for Medicine, clinics, and hospitals. We are dedicated to enhancing and updating your  Medicine App  app. Find Top Talent Globally & Launch Your Project Today!" />
        <meta property="schema:type" content="Website" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='En_US' />
        <meta name='abstract' content=' Medicine App Development Company |  Medicine App  App Development Services | Comfygen' />
        <meta name='summary' content='We offer top-notch  Medicine App Development Services in India, specializing in creating medical applications for Medicine , clinics, and hospitals. Our expert team is dedicated to enhancing and updating your  Medicine App  app to meet the latest standards.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a comprehensive Custom  Medicine App  App Development Services & Solutions in India! startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='On-Demand Medicine App Development Company in India' content='Are you looking to hire the best On-Demand Medicine App Development Agency in India for your project? We provide skilled Mobile App developers and programmers for hire.' />
        <meta name='category' content='On-Demand Medicine App Development Company In jaipur: Find Expert On-Demand App Developers for Medicine Booking Apps with Expertise in Android app development and iOS app development! We are providing you a better  Medicine App Development Service in India. We help to develop medical applications for Medicine, clinics, hospitals. Our skilled team helps you to develop the updated version of your  Medicine App  app.' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Best hire Medicine On-Demand App Design and User Experience company in Jaipur, India - We builds unique online  Medicine App  booking applications for hospitals, clinics, and individual Medicine.' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US,CA,GB,AD,AU,AT,BS,BH,IO,KM,CU,AR,CW,CY,DK,DM,EG,FK,FI,FR,DE,GR,GL,HK,IS,IN,ID,IT,JP,JE,JO,KW,KG,KR,MX,FM,NZ,NI,OM,PE,PH,PL,PT,QA,RO,RU,SA,SG,SE,SZ,CH,TH,TR,TN,UA,UM,AE,039,155,154,151,150" />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Hire Best  Medicine App  App development Company India | offshore  Medicine App  App developer or Programmers' />
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
                heading="Medicine App Development Company"
                ptag="Are you looking to develop a medicine app development service that improves patient care and streamlines healthcare app development processes? Look no further than Comfygen. We are India’s leading medicine app development company with a proven track record of creating innovative and user-friendly medicine app development services, and solutions. With our focus on security, compliance, and seamless integration, you can trust Comfygen to deliver high-quality medicine app development services that make a real difference in people's lives."
                btnName="Discuss Now"
                btnLink='/contact-us'
              />
            </div>
          </div>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row py-10 md:space-x-10 md:space-y-0">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="/img/on-demand-medicine-app-development-img.webp"
              alt=" Build an Online  Medicine App  App Development for Scaling Healthcare Business "
              className="rounded-lg"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full space-y-4 md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              On-demand Online Medicine App Development Solution
            </h2>
            <div className="space-y-2">
              <p className="text-base text-black text-justify">Nowadays, people want quick and easy access to <a className="text-blue-500" href="/healthcare-app-development">healthcare mobile app development services</a> . They don't want to wait for  Medicine App s or stand in long lines at the pharmacy.</p>
              <p className="text-base text-black text-justify">That's where Comfygen comes in. We specialize in creating on-demand online medicine app development services that instantly connect patients with healthcare app development service providers.</p>
              <p className="text-base text-black text-justify" >Our on-demand online medicine application development services are designed to be user-friendly and secure. They are also scalable, so you can provide high-quality care to more patients than ever before.
              </p>
              <p className="text-base text-black text-justify"> With Comfygen's on-demand online medicine app development services, solutions, you can:</p>
              <ul className="list-disc	px-4">
                <li>Improve patient outcomes</li>
                <li>Reduce costs</li>
                <li>Stay ahead of the curve in the rapidly evolving healthcare app development industry</li>
              </ul>
              <p className="text-base text-black text-justify">We offer a range of on-demand medicine app development services to meet your needs. Whether you need a telemedicine app development platform, a prescription delivery app development service, or a symptom checker, we've got you covered.</p>

              <p className="text-base text-black text-justify">At Comfygen, we believe that everyone deserves access to quality healthcare. That's why we're committed to creating innovative on-demand online medicine app development solutions that make a real difference in people's lives.</p>
              <p className="text-base text-black text-justify">If you're ready to take your healthcare app development services to the next level, contact Comfygen today! Let us help you build an on-demand medicine app development service that will transform how you care for your patients.</p>
            </div>
          </div>
        </section>


        <ContactFromCenter />
        {/* services */}
        <section className=" bg-[#060E41]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-20">
            <div className="space-y-6">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Top Suggestions for <span className="text-[#BC5FBD]"> Medicine App Development</span>  Services
                </h2>
                <p className="text-base text-white">Our versatile teams have experience building all types of medical applications development. Below, we highlight popular examples and key features we can recreate or even improve upon:</p>
              </div>
              <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
                {Services.map((elem) => {
                  const { num, img, title, decs, decs1, features } = elem;
                  return (
                    <div key={num} className="p-6 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border rounded-[40px] transition-all duration-300 hover:translate-y-2 group group ">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold ">
                        <Image width={110} height={110} src={img} alt={title} title={title} className="w-16" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200 text-left">{title}</h3>
                      <p className="font-medium text-left text-white  ">{decs}</p>
                      <ul className="list-disc text-white">
                        {features.map((feature, index) => (
                          <li key={index} className="flex gap-1"> <VscDebugBreakpointLog /> {feature}</li>
                        ))}
                      </ul>
                      <p className="font-medium text-left text-white l transition duration-200 ease-in-out">{decs1}</p>

                    </div>
                  );
                })}
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
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Core <span className="text-blue-600"> Medicine Mobile App Development </span>  Features
                </h2>
                <p className="text-base text-slate-800">A medicine mobile app development becomes valuable when it solves real problems for patients and Medicine delivery app development service providers. Our Medicine app development packs the must-have tools to simplify healthcare tasks, improve access, and enable better outcomes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {JSON_DATA.Streamline.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="p-4 relative bg-slate-100 rounded-[17px] space-y-6 ">
                      <h2 className=" text-blue-500 font-bold text-6xl group-hover:text-white">{num}</h2>
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





        {/* 
        <section className="bg-[#EFF6F8] py-20">
          <div className="w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Core <span className="text-[#B663BF]"> Medicine Mobile App Development </span>  Features
                </h2>
                <p className="text-base text-slate-800">A medicine mobile app development becomes valuable when it solves real problems for patients and Medicine delivery app development service providers. Our Medicine app development packs the must-have tools to simplify healthcare tasks, improve access, and enable better outcomes.</p>
              </div>
            <div className="grid lg:grid-cols-3 grids-cols-1  gap-20 mt-14">
              <div className="space-y-10 ">
                {contentData.map((content, index) => (
                  <div key={index} onMouseEnter={() => setHoveredContent(index)}>
                    <div className="flex place-items-start gap-3 group">
                      <div className="bg-[#D2E3E8] p-3 group-hover:bg-[#B463BF] group-hover:text-[#fff] ">
                        <span>{content.icon}</span>
                      </div>
                      <div className="">
                      <h2 className="text-xl font-bold text-black">{content.heading}</h2>
                      <p className="text-sm">{content.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <img src={contentData[hoveredContent]?.imageSrc} alt="" />
              </div>
              <div className="space-y-10">
                {contentData2.map((content, index) => (
                  <div key={index} onMouseEnter={() => setHoveredContent(index)}>
                        <div className="flex place-items-start gap-3 group">
                      <div className="bg-[#D2E3E8] p-3 group-hover:bg-[#B463BF] group-hover:text-[#fff] ">
                        <span>{content.icon}</span>
                      </div>
                      <div className="">
                      <h2 className="text-xl font-bold text-black">{content.heading}</h2>
                      <p className="text-sm">{content.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section> */}





        <AppointmentProcess />
        <div className=" bg-center bg-fixed bg-cover " style={{ backgroundImage: `url("/img/get-doctor-bg.webp")` }}>
          <div className='bg-[#161f33]/80 py-10'>
            <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4 text-center">

              <div className="flex flex-col justify-center mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Our Comprehensive Medicine App Development </h2>
                <p className="text-base text-white md:text-center text-justify tracking-tight">Successfully realizing digital health products requires extensive specialized knowledge and meticulous execution. Our medicine app developers at Confygen excel across key competencies, enabling smooth end-to-end delivery - from planning to ongoing operations</p>
              </div>
              <div className="grid lg:grid-cols-3 xl:gap-10 gap-10 py-10 text-left">
                {JSON_DATA.GetDoctor.map((item) => {
                  const { title, decs, num } = item;
                  return (
                    <div key={num} className="space-y-2 rounded-tl-[55px]	 rounded-br-[55px] border p-8 bg-[#02122D]">
                      <p className="text-2xl font-bold text-white">{title}</p>
                      <div
                        className="text-[#fff] transition duration-200 ease-in-out"
                        dangerouslySetInnerHTML={{ __html: item.decs }}
                      ></div>
                      {/* <p className='text-white'>{decs} </p> */}
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
        <WhycomfygenSection Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <section className="py-10 lg:py-20 bg-gray-100">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  What Do We Offer?
                </h2>
                <p>Medicine applications development span a vast range, encompassing wellness app development, telehealth app development, hospital systems app development, etc.</p>
                <p>Our versatile teams have specialized experience engineering secure, scalable solutions across:</p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs, decs1, } = elem;
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
                        {decs1}

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
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-20">
            <div className="flex flex-col justify-center items-center mx-auto space-y-4">
              <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                Why Choose Comfygen for Medicine App Development
              </h2>
              <p className="text-base text-white text-center">At Comfygen, we have years of experience building apps for the healthcare app development industry. Our team has worked on projects for hospitals app development, clinics app development, and wellness app development companies. We understand the unique challenges and requirements of medicine app development. This expertise allows us to create <a className="text-blue-500" href="/mobile-app-development">Mobile medicine app development services, and solutions</a>  that truly meet your needs.</p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {
                JSON_DATA.OnDemandDoctor.map(doctor => {
                  return (
                    <div key={doctor.num} className="border bg-white rounded-tr-[30px] rounded-bl-[30px] p-10 space-y-2 shadow transition-all duration-700 hover:bg-sky-100 group">
                      <div className="bg-[#346EC8] rounded-full w-14 h-14 flex items-center text-white justify-center ">
                        <HiArrowPathRoundedSquare className="text-[34px]" />
                      </div>
                      <h3 className=" text-black  text-xl font-semibold">{doctor.title}</h3>
                      <div
                        className="text-[#000]  "
                        dangerouslySetInnerHTML={{ __html: doctor.decs }}
                      ></div>
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

        {/* <div className="py-10">
          <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 flex flex-col-reverse lg:flex-row space-y-10  md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left bg-[#F5EDFA] p-6 rounded-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold leading-[2.5rem] lg:leading-[3rem] text-[#0E1F51]">Benefits of Medicine App Development</h2>
              <p className="text-base text-left text-black/80">Medicine apps are changing the way healthcare is delivered. They offer many benefits to both patients and healthcare providers.</p>
              <p className="text-base text-left text-black/80">Here are some of the key advantages of medicine app development:</p>
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
        <Tech />
        <SocialTab />  */}


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