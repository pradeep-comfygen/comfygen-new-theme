import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./json/ios.json"
import Image from 'next/image';
import styles from './styles.module.css'
const WhycomfygenSection = dynamic(() => import('./components/WhycomfygenSection'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const ModusSection = dynamic(() => import('./components/ModusSection'), {
  loading: () => <p>Loading...</p>,
})
const TalkExpert = dynamic(() => import('../components/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(() => import('../components/BlogSection'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionFormForIos = dynamic(() => import('../components/HeroSectionFormForIos'), {
  loading: () => <p>Loading...</p>,
})

const ServiceSection = dynamic(() => import('../components/ServiceSection'), {
  loading: () => <p>Loading...</p>,
})
const FaqSection = dynamic(() => import('../components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../components/HireSection'), {
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
    icon: <img src="/img/ios-app-design-and-development.webp" width={50} alt="" />,
    title: " iOS App Design and Development",
    decs: <p>Our <b>custom iOS application development</b>  services help you come up with unique user experiences and seamless app design. We have a team of expert iOS app designers who have in-depth knowledge of the expectations of iOS users. Our experts can also understand your requirements and create iOS apps development services that perform effectively on scalability, efficiency, and performance parameters.</p>,
  },
  {
    num: "2",
    icon: <img src="/img/native-ios-app-development.webp" width={50} alt="" />,
    title: "Native iOS App Development",
    decs: <p>We specialize in native iOS app development with expertise in the tech stack required to address the essential requirements of clients. Our team of <b>iOS software developers</b>  has an eye for detail and can identify the projects that need native development. We utilize a simple workflow in native iOS development projects that offer exclusive benefits to clients, such as enhanced control.</p>,
  },
  {
    num: "3",
    icon: <img src="/img/swift-app-development-icon.webp" width={50} alt="" />,
    title: " Swift App Development",
    decs: <p>Our developers' experience in <b>Swift app development</b>  helps our clients with efficient solutions for creating iOS apps. Our developers understand the power of Swift as a general-purpose and open-source programming language. Apple has created it to write safer and more reliable code to create seamless app experiences with efficiency. We help you leverage the powers of Swift to create great apps tailored to unique use cases.</p>,
  },
  {
    num: "4",
    icon: <img src="/img/cross-platform-app-development-icon.webp" width={50} alt="" />,
    title: "Cross-Platform App Development",
    decs: <p>You can also rely on our <b> iOS app development agency</b> for cross-platform app development. Our cross-platform app development expertise helps you create apps running seamlessly across devices with different operating systems. We specialize in <b>Swift iOS app development services</b>  and the tech stack required to make your iOS app operate with all functionalities on Android devices. </p>,
  },
  {
    num: "5",
    icon: <img src="/img/ipad-app-development.webp" width={50} alt="" />,
    title: "  iPad App Development",
    decs: <p>We also offer efficient services for iPad app development that can help you create engaging user experiences for iPad users. Our developers understand the UI/UX design trends for iPad apps and implement powerful analytics to identify user needs precisely. We stand out as the best choice for iPad app development to include appealing features and enhance the usability of your iOS apps.</p>,
  },
  {
    num: "6",
    icon: <img src="/img/arkit-app-development.webp" width={50} alt="" />,
    title: "ARKit App Development",
    decs: <p>We are a trusted <b>iOS application development company in Jaipur </b> for ARKit App development to embrace the new AR and VR mobile app trends. Our dedication to staying updated with the latest tech stack in iOS development has helped us master ARKit, Apple's dedicated AR app development framework. Use our expertise to create immersive AR iOS apps to captivate your target audience.
    </p>,
  },
  {
    num: "7",
    icon: <img src="/img/app-testing-and-quality-assurance.webp" width={50} alt="" />,
    title: "App Testing and Quality Assurance",
    decs: <p>Our <b>iPhone mobile development</b>  expertise ensures that your iOS apps perform according to the desired expectations. We employ a dedicated team of QA professionals to test iOS apps in different environments and use case scenarios to check their effectiveness. Comprehensive QA procedures help us identify and resolve functional issues alongside security vulnerabilities.</p>,
  },
  {
    num: "8",
    icon: <img src="/img/app-maintenance-and-support.webp" width={60} alt="" />,
    title: "App Maintenance and Support",
    decs: <p>We are more than a regular iPhone app development company in India as we serve as your partners in the iOS app development services and maintenance journey. Our experts lend their helping hand to clients after deploying their apps by offering timely support. Our <a href="/hire-mobile-app-developer" className='text-blue-500' >Mobile app developers</a>  also follow a maintenance schedule for your iOS apps to introduce necessary updates, new features, and security improvements.</p>,
  },
  {
    num: "9",
    icon: <img src="/img/app-maintenance-and-support.webp" width={60} alt="" />,
    title: " Innovative iOS App Development",
    decs: <p>Our India based iOS app development team at Comfygen is driven by innovation. We provide state-of-the-art, specially designed solutions for your particular business requirements. Our talented iOS development team creates apps with outstanding UI/UX, scalability for future expansion, and seamless integrations by fusing creativity and experience. By employing cutting-edge technologies, we guarantee that your application stands out in the crowded market. Our dedication to innovation ensures a sophisticated and cutting-edge iOS application for your company in Jaipur, from concept to implementation.</p>,
  },
];

const schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "brand": {
    "@type": "Brand",
    "name": "iOS App Development Company | ios mobile app development company"
  },
  "description": "Comfygen is your dependable partner for the creation of a top iOS app development company in UK, USA and UAE, providing first-class iOS Application Development Services to help your online swift app development services for ventures to reach new heights.",
  "image": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "name": "Custom iPhone App Development Company | Comfygen",
  "review": [{
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "author": {
      "@type": "Person",
      "name": "Mr. Saddam Husen"
    }
  }],
  "offers": {
    "@type": "Offer",
    "url": "https://www.comfygen.com/ios-app-development",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Comfygen Private Limited"
    }
  }
}

const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "priceRange": "$20-$55",
  "image": "https://www.comfygen.com/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/ios-app-development",
  "name": "Best iOS App Development Company India, USA, UAE, Germany",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-152, Dayanand Marg, Nemi Nagar,",
    "addressLocality": "Vaishali Nagar, Near D A V Centenary Public School",
    "addressRegion": "Jaipur, Rajasthan",
    "postalCode": "302021",
    "addressCountry": "IN"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Saddam husen"
    }
  },
  "url": "https://www.comfygen.com/ios-app-development",
  "telephone": "+91 9587867258"
};
const Modus =
{
  title: "Tailored iOS Solution Across Various Industries",
  decs: "As the leading iOS mobile app development company, our expertise can help businesses across different sectors. Our industry-centric solutions cater to the needs of businesses in different industries and help clients with unique value benefits. ",
  subtitle: "Detailed Services for Different Sectors",
  subdecs: "You can find unique value propositions with iOS app development for different sectors, such as,"
}
  ;
const ModusOperandi = [
  {
    num: "1",
    bg: "#FEEFEB",
    title: "Travel and Hospitality",
    number: "01",
    desc: "Create new definitions of customer satisfaction with smart room systems and immersive experiences..",
  },
  {
    num: "2",
    bg: "#F5EDFA",
    title: "IoT",
    number: "02",
    desc: "Develop a new generation of mobile solutions tailored for seamless interactions between IoT devices.",
  },
  {
    num: "0",
    bg: "#E9F4FF",
    title: "Healthcare",
    number: "03",
    desc: "Discover new approaches for streamlining healthcare operations with advanced features in iOS apps.",
  },
  {
    num: "4",
    bg: "#F2F6E7",
    title: "Insurance",
    number: "04",
    desc: "Capitalizes on iOS apps' power to simplify claim management and reduce fraud with efficient features.",
  },
  {
    num: "5",
    bg: "#FEEFEB",
    title: "Fintech  ",
    number: "05",
    desc: "makes the most of its competitive advantages by utilizing innovative features with iOS apps.",
  }
  ,
  {
    num: "6",
    bg: "#FEEFEB",
    title: "Entertainment and Media Platforms ",
    number: "05",
    desc: "Creating entertaining and media-related iOS apps, such as gaming platforms, streaming services, and content delivery apps, with user experience in mind.",
  }
];
const Whycomfygen = [
  {
    num: "1",
    title: "Project-based Model",
    desc: <p>We help you find the answers for <b> ‘iOS app developers near me’</b> when you need them for a particular project.
    </p>
  },
  {
    num: "2",
    title: "Dedicated Development Team",
    desc: <p>You can also pick an in-house team of <b>iOS app developers</b>  from our iOS app development agency according to your needs.</p>
  },
  {
    num: "3",
    title: "App Development Outsourcing",
    desc: <p>We also serve as an ideal destination for outsourcing your iOS app development needs according to different requirements.</p>,
  }
];

const Chartacterstics = [
  {
    "num": "1",
    "img": "/images/rapid-deployment.svg",
    "title": "Expert iOS Developers",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>Our expertise in iOS development comes from our team of experts specializing in <b>Swift app development</b>  and other tools.
    </p>
  },
  {
    "num": "2",
    "img": "/img/user-centric-design-approach.webp",
    "title": "User-Centric Design Approach",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>We follow a user-centric design approach to ensure that our iOS apps can meet clients' requirements with seamless functionalities.</p>
  },
  {
    "num": "3",
    "img": "/images/control-access.svg",
    "title": "Cutting-edge Technologies",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>The effectiveness of our experts in cross-platform and   <b>native iOS development </b> also revolves around the use of cutting-edge technologies.</p>
  },
  {
    "num": "4",
    "img": "/images/speed-efficiency.svg",
    "title": "Timely Project Delivery",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>We also take pride in delivering our projects on time, which helps us ensure that clients have the time to submit feedback and make necessary improvements.

    </p>
  },
  {
    "num": "5",
    "img": "/img/competitive-pricing-icon.webp",
    "title": "Competitive Pricing",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>The search for <b>Swift iOS development </b> experts becomes easier with us due to the assurance of competitive pricing that fits your budget limitations.</p>
  }
  ,
  {
    "num": "6",
    "img": "/img/client-testimonials.webp",
    "title": "Client Testimonials",
    "decs": <p className='break-all text-slate-800 line-clamp-5'>We have earned the love and trust of our clients with high-quality services, and you can find proof of the same in client testimonials.</p>
  }
];

const LatestTechno = [
  {
    "num": "01",
    "title": "Certified Developers",
    "decs": <p className='text-base text-slate-800'>Our developers are certified to use any iOS app development software or tools with industry expertise.</p>
  },
  {
    "num": "02",
    "title": " Portfolio and Previous iOS Projects",
    "decs": <p className='text-base text-slate-800'>The performance of our developers in previous iOS development projects helps us ensure the best results for our clients.</p>
  },
  {
    "num": "03",
    "title": "Understanding of the Latest iOS Trends",
    "decs": <p className='text-base text-slate-800'>Our developers pay attention to the latest iOS trends and new technologies to develop iOS apps to achieve the desired results.</p>
  },
  {
    "num": "04",
    "title": " Collaboration and Communication Skills",
    "decs": <p className='text-base text-slate-800'>All of the experts in our <b>iOS app development agency</b>  focus on direct and transparent collaboration and communication with clients.</p>
  }
  ,
  {
    "num": "05",
    "title": "Adherence to Apple Guidelines",
    "decs": <p className='text-base text-slate-800'>We ensure that all of our developers follow the important guidelines specified by Apple for iOS app development. </p>
  }
  ,
  {
    "num": "06",
    "title": "Post-Launch Support",
    "decs": <p className='text-base text-slate-800'>Employing our iOS app development specialists guarantees ongoing support after launch. To ensure peak performance and long-term success, we release new features on a regular basis, fix problems quickly, and offer regular updates. </p>
  }
];
const Qa = [
  {
    num: "1",
    title: "Our Flexible Engagement Model and Your Needs",
    desc: "You can hire our iPhone app developers with flexible engagement models tailored to your unique needs."
  },

];

export default function Mobile(props) {
  let { initialData } = props;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Best Custom iOS App Development Services Company in India and the USA  </title>
        <meta name="description" content="We are award-winning Custom iPhone / iOS development company india and USA, Comfygen offers custom iOS & iphone applications development services for entrepreneurs & small businesses at low cost. Contact Us today!" />
        <link rel="canonical" media="handheld" href="https://www.comfygen.com/ios-app-development" />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Are you looking for the best iPhone App Development Company | Hire iPhone App Developers" />
        <meta property="og:facebook_description" content="Are you looking for a reliable IOS App Development Industry? Hire our expert for iOS Applications we provide end-to-end Iphone app development services that meet your business needs." />
        <meta property="og:twitter_title" content="Top-Class iOS App Development Services in India & USA | iPhone App Development Services | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen is a top-ranked iOS app development company in India offering iPhone/iPad app development services to startups and dealings globally." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='en-us' />
        <meta name="robots" content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta name="robots" content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <meta name='abstract' content='IOS App Development Company' />
        <meta name='summary' content='Comfygen is the Leading No 1 IOS App development company in India, USA.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish an iOS app company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='iphone app development company' content='Comfygen is a leading iPhone app development company in jaipur, India. Our iPhone app developers can create mobile apps..' />
        <meta name='category' content='ios application development services' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='ios application development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='ios application development company' />
        <meta name="robots" content="imageindex, INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best iOS App Development Company in India & USA | Comfygen" />
        <meta property="og:description" content="Comfygen is a leading top class iOS development company in India. We are award-winning iPhone development company, Comfygen offers custom iOS & iphone applications development services for entrepreneurs & small businesses at low cost. Contact Us today!  " />
        <meta property="og:url" content="https://www.comfygen.com/ios-app-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-12-26T08:12:32+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/blockchain-mim-software.png?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="md:py-28 py-5">
              <HeroSectionFormForIos
                heading='Best iOS App Development Company'
                ptag="Mobile app development for Custom iOS app development services and iPhone/iPads app development services has become a significant technological phenomenon. We are the top iOS app development company In India & The USA for creating robust, user-friendly, and secure custom iOS apps Build platform for your business. Our team of experienced iOS app developers has worked on multiple projects and contributed value benefits to clients according to their expectations."
                li='Experts with 15+ Years of Experience'
                li1='Security & IP Protection'
                li2='Flexible Engagement Models'
                li3=' On-Time Project Delivery'
                li4='Strict NDA Terms'
                li5='Latest tools & practices'
                li6='Expertise in creating trendy mobile applications specifically for iOS systems'
                li7='Incorporation of sophisticated and cutting-edge '
                li8='features in iOS applications.'
                li9='Seamlessly transitioning clients ideas into reality through tailored development services.'
                btnName="Discuss Now"
                btnLink='/contact-us' />
            </div>
          </div>
        </div>
        <ContactFromCenter />
        <div className="py-10 bg-white">
          <section className="w-11/12  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center  mx-auto text-center">

                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] "> Empowering Businesses with our  <span className="text-blue-500"><a href='ca/application-consulting-services'>Custom iOS App Development</a></span> Services </h2>
                <p>We offer end-to-end <b> iOS app development services</b> for your business needs with the assurance of best-in-class features for your iOS app development. Our client-centric workflow, agile methodology, collaborative approach, and industry expertise help us deliver the best results clients desire.  </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10" >
                {ChooseUs.map((elem) => {
                  const { title, icon, decs, num } = elem;
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
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us '  >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    NEED ASSISTANCE WITH YOUR PROJECT
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>


        <div className="bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url("/img/decentralized-exchange-img.webp")` }}>
          <section className="items-center w-11/12 py-20  space-y-10  2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left" >
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                <div>
                  <div className="flex flex-col space-y-2">
                    <h2 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                      Cutting-Edge Technology Stack we use for Robust iOS App
                    </h2>
                    <p>Our <b>iOS mobile app development company</b>  utilizes the latest technologies to empower new iOS apps for unique business ideas. We utilize the most robust and latest app development tools and frameworks to build your custom iOS apps. The selection of the right tools and frameworks for iOS app development has helped us serve our clients with user-friendly, secure, and robust iOS applications. </p>
                    <div>
                      <h3 className=" text-1xl lg:text-2xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">Detailed Technologies Used</h3>
                      <p>Look at the different tools and frameworks we have in our tech stack for creating iOS apps.</p>
                    </div>
                    <div className="flex justify-start items-center mt-5">
                      <a href='https://api.whatsapp.com/send?phone=919587867258'  >
                        <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                          Talk To Consultant
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={`${styles.TechnologyStack} grid gap-10 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[500px] overflow-auto `}>
                    {JSON_DATA.WhyChoosed.map((elem) => {
                      const { title, img, decs, num } = elem;
                      return (
                        <div key={num}
                          className="group border-b-2 border-[#0E1F51] pb-6 space-y-4 transition-all duration-200  cursor-pointer " >
                          <div className="flex items-center justify-start">
                            <div className="flex items-center justify-center gap-3 ">
                              <Image src={img} alt="" width={40} height={40} />
                              <h3 className="text-2xl font-semibold ">
                                {title}
                              </h3>
                            </div>
                          </div>
                          <div className='space-y-3'>
                            <p className="break-all text-slate-900 ">
                              {decs}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />

        <div className="bg-center bg-no-repeat bg-cover bg-fixed " style={{ backgroundImage: `url("/img/ios-app--Process-bg.webp")` }}>
          <section className=" py-4 lg:py-20  bg-[rgba(5,10,20,.95)]/40"  >
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#fff] font-bold  leading-tight lg:leading-[3rem] "> Our <span className="text-[#B564C0]"> iOS App Development
                  </span> Process </h2>
                  <p className='text-white'>You can determine the quality of our <b>iPhone app development services</b>  by understanding the workflow of our app development process. Describing each step in our app development process could help you identify how we can better serve iOS solutions.</p>
                  <div>
                    <h3 className=" text-xl lg:text-2xl text-[#fff] font-bold  leading-tight lg:leading-[3rem] ">Steps:</h3>
                    <p className='text-white m-0 p-0'>Navigate through the details of each step in our <b>iOS app development agency.</b>  </p>
                  </div>

                </div>
                <ul className={`${styles.timeline}`}>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>1</p>
                          Ideation and Conceptualization
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>The first step in the iOS app development process involves understanding the ideas of the clients and their specific requirements. We can identify the type of framework and tech stack required for developing your iOS apps at this stage. Most importantly, we can create the concept for your iOS app and define the approach for developing iOS apps. </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>2</p>
                          App Design</span>
                      </div>
                      <div className={`${styles.desc} `}> As a professional <b>iOS development agency</b> , we specialize in UI/UX design for iOS apps. Our app design services involve the creation of prototypes for your iOS app with an outline of essential features. In this stage, our developers visualize the feasibility of your iOS app for different use cases. Our team of expert designers utilizes the latest UI/UX design trends to improve the design of your iOS apps.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>3</p>
                          Development
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>The development stage, as the name implies, revolves around creating iOS apps according to the defined ideas and verified designs. Our <b>iPhone app developers</b> utilize the latest tech stack and follow the best practices for iOS development to create robust iOS apps. We also ensure that our iOS app developers follow the latest trends and powerful tools and frameworks to create engaging iOS apps.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>4</p>
                          Testing and Quality Assurance
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>Irrespective of the tools we use for iOS development, such as <b>Swift iOS development</b> , we follow the best practices for comprehensive testing and QA. Our testing experts can review the performance of iOS apps based on different parameters. We ensure that every iOS app is free of functional and security issues.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionR}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>5</p>
                          Deployment to the App Store
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>The expertise of our developers for <b>iOS app development</b>  on Windows or the App Store also involves the deployment of the apps. You can rely on our experts for seamless deployment of iOS apps on the App Store or Google Play Store according to your needs. Our experts verify the apps to check their functionality before deploying them.</div>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.directionL}`}>
                      <div className={`${styles.flagwrapper} `}>
                        <span className={`${styles.flag}`}>
                          <p>6</p>
                          Post-Launch Support
                        </span>
                      </div>
                      <div className={`${styles.desc} `}>Our experience in <b>native iOS development</b>  and cross-platform development is only one aspect of our fluency in creating engaging iOS apps. We specialize in post-launch support and maintenance services for iOS apps. Our post-launch support services help you avoid unwanted issues with your iOS apps and introduce new features alongside security improvements for iOS apps.
                      </div>
                    </div>
                  </li>


                </ul>
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/contact-us" className="mt-5">
                  <button className="shadow-2xl  inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    SCHEDULE A CALL
                  </button>
                </a>
              </div>
            </div>

          </section>
        </div>

        <ModusSection Modus={Modus} ModusOperandi={ModusOperandi} />
        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <section className="py-10 bg-white">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center  mx-auto">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51]  ">
                  Why Choose our <span className="text-blue-600">iOS Application Development </span> services?
                </h2>
                <p>You can rely on our <b>iOS app development services </b> to discover a new perspective on creating innovative iOS solutions. We offer unique value benefits that empower your iOS development outcomes in a revolutionary approach. </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                {Chartacterstics.map((elem) => {
                  const { img, title, decs } = elem;
                  return (
                    <div className="border-2 p-6 space-y-4 bg-white rounded-[40px]">
                      <div className="flex items-center justify-start mb-5">
                        <Image
                          src={img}
                          className="object-cover" width={50} height={50}
                          alt={title}
                        />
                      </div>
                      <h3 className="text-lg font-semibold">{title}</h3>

                      {decs}

                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='/contact-us '  >
                  <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Connect with IT Experts
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:py-16 py-4 bg-[#D0E6F0]">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Why do you need to Hire our iOS App Development Experts?
              </h2>
              <p className="text-base text-slate-800">You can hire our <b>iOS software developers </b> to create innovative and new mobile apps that change the perceptions of traditional use cases. Our developers offer a broad array of value advantages to ensure you have powerful iOS apps for your business.</p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {LatestTechno.map((elem) => {
                const { title, num, decs, } = elem;
                return (
                  <div key={num} className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                    {decs}
                  </div>
                )
              })
              }
            </div>
            <div className="flex justify-center items-center mt-5">
              <a href='/contact-us '  >
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 mt-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Get A Free Consultation
                </button>
              </a>
            </div>

          </div>
        </section>
        <section className="bg-center bg-no-repeat bg-cover lazyload bg-fixed " style={{ backgroundImage: `url("/img/hire-ios-mobile-app-developer.webp")` }}>
          <div className='bg-[#000]/80 lg:py-20 py-10'>
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#2563EB]/40 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <TalkExpert />
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="" />
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